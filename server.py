from typing import Any, Optional, Union, Dict, List
import sys



import os



if sys.stdout is None:



    sys.stdout = open(os.devnull, "w", encoding="utf-8")



if sys.stderr is None:



    sys.stderr = open(os.devnull, "w", encoding="utf-8")



import asyncio



import json



import random



import string



import time



import datetime



import re



import threading



from typing import Dict, List, Optional, Set



from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request, Form, UploadFile, File, Body



from fastapi.responses import HTMLResponse, JSONResponse, FileResponse, Response



from fastapi.staticfiles import StaticFiles



import subprocess



import urllib.request



import tempfile



import uuid



app = FastAPI(title="Kuyumcu 3D CAD Canlı Akademi & Lisanslama Sistemi")



# 🛡️ SİBER GÜVENLİK ZIRHI (LOCAL-ONLY ADMIN & INSTRUCTOR WALL)



# Eğitmen stüdyosu, idari yetkiler, kayıt klasörleri, WhatsApp tetikleme vb.



# SADECE VE SADECE eğitmenin kendi bilgisayarından (127.0.0.1 / localhost) çalıştırılabilir!



# Dış dünyadan / Cloudflare tünelinden gelen TÜM idari erişimler anında 403 REDDEDİLİR.



ADMIN_PATHS = {



    "/egitmen",



    "/api/save-recording",



    "/api/open-recordings-folder",



    "/api/broadcast-live-alert",



    "/api/student/add",



    "/api/student/delete",



    "/api/student/clear-all",



    "/api/student/approve-and-send-code",



    "/api/student/toggle-payment",



    "/api/student/toggle-dual-device",



    "/api/lesson/start",



    "/api/lesson/stop",



    "/api/lesson/reset-codes",



    "/api/student/kick",



    "/api/logs"



}



ADMIN_PREFIXES = (



    "/egitmen/",



    "/api/recordings",



    "/api/open-whatsapp",



    "/api/codes",



    "/api/break"



)



@app.middleware("http")



async def security_firewall_middleware(request: Request, call_next):



    path = request.url.path



    method = request.method



    is_admin_post = method == "POST" and path in ("/api/curriculum", "/api/announcement", "/api/payment-settings")



    is_admin = (path in ADMIN_PATHS) or any(path.startswith(prefix) for prefix in ADMIN_PREFIXES) or is_admin_post



    



    if is_admin:



        # Eğer Cloudflare başlıkları varsa -> Kesinlikle internetten (tünelden) geliyordur!



        has_cf_headers = bool(request.headers.get("cf-connecting-ip") or request.headers.get("cf-ray"))



        client_host = request.client.host if request.client else ""



        is_local_client = client_host in ("127.0.0.1", "localhost", "::1", "::ffff:127.0.0.1", "testclient") or client_host.startswith("192.168.") or client_host.startswith("10.") or client_host.startswith("172.")



        



        if has_cf_headers or not is_local_client:



            attacker_ip = request.headers.get("cf-connecting-ip") or client_host



            print(f"[GUVENLIK KALKANI] Disaridan yetkisiz idari erisim engellendi! Yol: {path} | IP: {attacker_ip}")



            return JSONResponse(



                status_code=403,



                content={



                    "status": "forbidden",



                    "error": "403 Forbidden: Bu yonetim ekrani yalnizca yerel egitmen bilgisayarindan acilabilir."



                }



            )



            



    return await call_next(request)





@app.exception_handler(Exception)

async def global_exception_handler(request: Request, exc: Exception):

    import traceback

    traceback.print_exc()

    return JSONResponse(

        status_code=500,

        content={"status": "error", "message": f"Sunucu Hatasi: {str(exc)}"}

    )





if getattr(sys, 'frozen', False):



    BASE_DIR = os.path.dirname(os.path.abspath(sys.executable))



else:



    BASE_DIR = os.path.dirname(os.path.abspath(__file__))



TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")



STATIC_DIR = os.path.join(BASE_DIR, "static")



CONFIG_PATH = os.path.join(BASE_DIR, "config.json")



def load_recordings_dir():



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                data = json.load(f)



                custom_dir = data.get("recordings_dir")



                if custom_dir:



                    os.makedirs(custom_dir, exist_ok=True)



                    return custom_dir



        except Exception:



            pass



    default_dir = os.path.join(BASE_DIR, "DersKayitlari")



    os.makedirs(default_dir, exist_ok=True)



    return default_dir



def save_recordings_dir(new_dir: str):



    os.makedirs(new_dir, exist_ok=True)



    config = {}



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                config = json.load(f)



        except Exception:



            pass



    config["recordings_dir"] = new_dir



    with open(CONFIG_PATH, "w", encoding="utf-8") as f:



        json.dump(config, f, ensure_ascii=False, indent=2)



_EXCHANGE_RATE_CACHE = {"rate": 49.34, "last_updated": 0}



def get_live_usd_try_rate() -> float:



    global _EXCHANGE_RATE_CACHE



    now = time.time()



    # 5 dakikalık akıllı önbellek



    if now - _EXCHANGE_RATE_CACHE["last_updated"] < 300 and _EXCHANGE_RATE_CACHE["rate"] > 10:



        return _EXCHANGE_RATE_CACHE["rate"]



    



    urls = [



        ("https://open.er-api.com/v6/latest/USD", lambda d: float(d.get("rates", {}).get("TRY", 0))),



        ("https://api.frankfurter.app/latest?from=USD&to=TRY", lambda d: float(d.get("rates", {}).get("TRY", 0))),



        ("https://api.exchangerate-api.com/v4/latest/USD", lambda d: float(d.get("rates", {}).get("TRY", 0)))



    ]



    for url, extract_fn in urls:



        try:



            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})



            with urllib.request.urlopen(req, timeout=3) as resp:



                data = json.loads(resp.read().decode('utf-8'))



                rate = round(extract_fn(data), 2)



                if rate > 10:



                    _EXCHANGE_RATE_CACHE["rate"] = rate



                    _EXCHANGE_RATE_CACHE["last_updated"] = now



                    return _EXCHANGE_RATE_CACHE["rate"]



        except Exception:



            pass



    return _EXCHANGE_RATE_CACHE["rate"]



def load_payment_settings():



    default_settings = {



        "bank_name": "Garanti BBVA",



        "iban": "TR67 0006 2000 1200 0006 6546 67",



        "iban_usd": "TR67 0006 2000 1200 0006 6546 67",



        "account_holder": "Özkan Tokalı",



        "price_usd": 50,



        "custom_rate": 0.0,



        "fee_info": "Bilgisayar Üzerinde Sadekârlık ve Mücevher Tasarımı Eğitim Ücreti",



        "whatsapp_phone": "05453699990"



    }



    settings = dict(default_settings)



    custom_rate = 0.0



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                data = json.load(f)



                settings["bank_name"] = data.get("bank_name", default_settings["bank_name"])



                settings["iban"] = data.get("iban", default_settings["iban"])



                settings["iban_usd"] = data.get("iban_usd", data.get("iban", default_settings["iban_usd"]))



                settings["account_holder"] = data.get("account_holder", default_settings["account_holder"])



                settings["price_usd"] = int(data.get("price_usd", default_settings["price_usd"]))



                settings["custom_rate"] = float(data.get("custom_rate", 0.0))



                custom_rate = settings["custom_rate"]



                settings["fee_info"] = data.get("fee_info", default_settings["fee_info"])



                settings["whatsapp_phone"] = data.get("whatsapp_phone", default_settings["whatsapp_phone"])



        except Exception:



            pass



    if custom_rate > 0:



        live_rate = round(custom_rate, 2)



        settings["is_custom_rate"] = True



    else:



        live_rate = get_live_usd_try_rate()



        settings["is_custom_rate"] = False



    price_try = int(round(settings["price_usd"] * live_rate))



    settings["exchange_rate"] = live_rate



    settings["price_try"] = price_try



    return settings



def save_payment_settings(bank_name: str, iban: str, account_holder: str, fee_info: str, price_usd: int = 50, iban_usd: str = "", whatsapp_phone: str = "", custom_rate: float = 0.0):



    config = {}



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                config = json.load(f)



        except Exception:



            pass



    config["bank_name"] = bank_name.strip()



    config["iban"] = iban.strip()



    config["iban_usd"] = (iban_usd or iban).strip()



    config["account_holder"] = account_holder.strip()



    config["fee_info"] = fee_info.strip()



    config["price_usd"] = int(price_usd)



    config["custom_rate"] = float(custom_rate) if custom_rate > 0 else 0.0



    config["whatsapp_phone"] = whatsapp_phone.strip()



    with open(CONFIG_PATH, "w", encoding="utf-8") as f:



        json.dump(config, f, ensure_ascii=False, indent=2)



def load_announcement_settings():



    default_announcement = {



        "announcement_active": True,



        "announcement_badge": "🔥 YENİ DÖNEM MASTERCLASS",



        "announcement_title": "Bilgisayar Üzerinde Sadekârlık ve Mücevher Tasarımı Eğitimi",



        "announcement_date": "Yeni Dönem Başlangıç: 25 Ekim 2026 | Sınırlı Kontenjan: 10 Kişi",



        "announcement_desc": "30 Yıllık Tezgâh & CAD tecrübesiyle döküme ve mıhlamaya tam uyumlu sadekârlık ve mücevher modelleme eğitimi.",



        "announcement_btn_text": "WhatsApp'tan Bilgi Al & Kaydol",



        "whatsapp_phone": "05453699990"



    }



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                data = json.load(f)



                return {



                    "announcement_active": data.get("announcement_active", default_announcement["announcement_active"]),



                    "announcement_badge": data.get("announcement_badge", default_announcement["announcement_badge"]),



                    "announcement_title": data.get("announcement_title", default_announcement["announcement_title"]),



                    "announcement_date": data.get("announcement_date", default_announcement["announcement_date"]),



                    "announcement_desc": data.get("announcement_desc", default_announcement["announcement_desc"]),



                    "announcement_btn_text": data.get("announcement_btn_text", default_announcement["announcement_btn_text"]),



                    "whatsapp_phone": data.get("whatsapp_phone", default_announcement["whatsapp_phone"])



                }



        except Exception:



            pass



    return default_announcement



def save_announcement_settings(active: bool, badge: str, title: str, date_str: str, desc: str, btn_text: str):



    config = {}



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                config = json.load(f)



        except Exception:



            pass



    config["announcement_active"] = active



    config["announcement_badge"] = badge.strip()



    config["announcement_title"] = title.strip()



    config["announcement_date"] = date_str.strip()



    config["announcement_desc"] = desc.strip()



    config["announcement_btn_text"] = btn_text.strip()



    with open(CONFIG_PATH, "w", encoding="utf-8") as f:



        json.dump(config, f, ensure_ascii=False, indent=2)



def load_curriculum_settings():



    default_curriculum = [



        {"id": 1, "title": "Ders 1: Arayüz Tanıtımı, Rhino/Matrix Temelleri & Ölçülü Çizgi Teknikleri", "status": "completed", "description": "Milimetrik grid ayarları, yüzük ölçüsü çemberi ve temel toleranslar."},



        {"id": 2, "title": "Ders 2: Tektaş Yüzük Gövdesi (Şank) Modelleme & Ergonomi", "status": "completed", "description": "Parmağa oturan konforlu bombeli şank formları ve tezgâh payları."},



        {"id": 3, "title": "Ders 3: 4 & 6 Tırnaklı Taş Yuvası (Krap) & Mıhlama Mantığı", "status": "completed", "description": "Pırlanta kesim taş geometrisi, tırnak açıları ve döküm payı."},



        {"id": 4, "title": "Ders 4: Kanal Mıhlama, Taş Dizimi & Milimetrik Boşluk Payları", "status": "current", "description": "Ray/kanal içine dizilen taşlar, mikromıhlama delikleri ve döküm temizleme payları."},



        {"id": 5, "title": "Ders 5: Alyans, Sarmal Motifler & Yüzey Kabartma Teknikleri", "status": "upcoming", "description": "Erkek ve kadın alyans formları, desen sarma, relief kabartma ve döküm hazırlığı."},



        {"id": 6, "title": "Ders 6: Fantezi Kolye Ucu, Sallantı & Kilit Mekanizmaları", "status": "upcoming", "description": "Kulp (bale) tasarımı, hareketli mafsal eklemleri ve menteşe modelleme."},



        {"id": 7, "title": "Ders 7: Döküm Çekme Payı, Kauçuk Kalıp & İskelet Hafifletme", "status": "upcoming", "description": "İç boşaltma (ajur / petek açma), gramaj düşürme ve kauçuk kalıp çekmesi."},



        {"id": 8, "title": "Ders 8: Keyshot ile Fotogerçekçi Altın/Pırlanta Render & 3D Sunum", "status": "upcoming", "description": "Müşteriye ve sosyal medyaya sunum için fotogerçekçi altın ve pırlanta ışıltı renderları."}



    ]



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                data = json.load(f)



                return data.get("curriculum", default_curriculum)



        except Exception:



            pass



    return default_curriculum



def save_curriculum_settings(curriculum_data: list):



    config = {}



    if os.path.exists(CONFIG_PATH):



        try:



            with open(CONFIG_PATH, "r", encoding="utf-8") as f:



                config = json.load(f)



        except Exception:



            pass



    config["curriculum"] = curriculum_data



    with open(CONFIG_PATH, "w", encoding="utf-8") as f:



        json.dump(config, f, ensure_ascii=False, indent=2)



RECORDINGS_DIR = load_recordings_dir()



os.makedirs(TEMPLATES_DIR, exist_ok=True)



os.makedirs(STATIC_DIR, exist_ok=True)



os.makedirs(RECORDINGS_DIR, exist_ok=True)



try:



    if "clean_orphaned_recordings" in globals():



        clean_orphaned_recordings()



except Exception:



    pass



app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")



KITAP_DIR = os.path.join(BASE_DIR, "kitap")



os.makedirs(KITAP_DIR, exist_ok=True)



@app.get("/api/tts")
def api_kitap_tts(text: str = "", lang: str = "tr", rate: float = 1.0):
    try:
        from tts_booster import synthesize_boosted_tts
        from fastapi.responses import Response
        ctype, audio_bytes = synthesize_boosted_tts(text, lang=lang, rate=rate)
        if audio_bytes:
            return Response(
                content=audio_bytes,
                media_type=ctype,
                headers={
                    "Access-Control-Allow-Origin": "*",
                    "Cache-Control": "no-cache"
                }
            )
    except Exception:
        pass
    from fastapi.responses import Response
    return Response(content=b"", status_code=404, headers={"Access-Control-Allow-Origin": "*"})

@app.get("/kitap", response_class=HTMLResponse)

@app.get("/kitap/", response_class=HTMLResponse)

async def serve_kitap_index(request: Request):

    index_file = os.path.join(KITAP_DIR, "matrixgold.html")

    if not os.path.exists(index_file):

        index_file = os.path.join(KITAP_DIR, "index.html")

    if os.path.exists(index_file):

        with open(index_file, "r", encoding="utf-8", errors="ignore") as f:

            return HTMLResponse(content=f.read(), status_code=200)

    return HTMLResponse("<h3>MatrixGold Dijital Kitap dosyasi bulunamadi.</h3>", status_code=404)



app.mount("/kitap", StaticFiles(directory=KITAP_DIR, html=True), name="kitap")

KITAP_ICONS_DIR = os.path.join(KITAP_DIR, "icons")
if os.path.exists(KITAP_ICONS_DIR):
    app.mount("/icons", StaticFiles(directory=KITAP_ICONS_DIR), name="icons")



@app.middleware("http")



async def add_nocache_for_kitap_middleware(request: Request, call_next):



    response = await call_next(request)



    path = request.url.path



    if path.startswith("/kitap") or path == "/kitap" or path in ("/ogrenci", "/egitmen", "/"):



        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"



        response.headers["Pragma"] = "no-cache"



        response.headers["Expires"] = "0"



    return response



STUDENTS_DB_PATH = os.path.join(BASE_DIR, "students_db.json")



MAX_STUDENTS_QUOTA = 10



def clean_phone_number(phone: str) -> str:

    if not phone:

        return ""

    digits = "".join(filter(str.isdigit, str(phone)))

    if digits.startswith("90") and len(digits) == 12:

        digits = digits[2:]

    if len(digits) == 10 and digits.startswith("5"):

        digits = "0" + digits

    return digits

  # 10 Kişilik VIP Sınıf Kontenjanı



def get_today_str() -> str:



    return datetime.date.today().isoformat()



def check_student_daily_status(sdata: dict) -> dict:



    today = get_today_str()



    paid_date = sdata.get("paid_date")



    if paid_date and paid_date != today:



        sdata["paid"] = False



        sdata["stage"] = "initial"



        sdata["current_code"] = None



        sdata["paid_date"] = None



        try:



            state.save_to_disk()



        except Exception:



            pass



    elif sdata.get("paid") and paid_date == today:



        sdata["stage"] = "approved"



    return sdata



class AcademyState:



    def __init__(self):



        self.is_live: bool = False



        self.active_lesson_title: str = "Bilgisayar Destekli Sadekârlık ve Mücevher Tasarımı Canlı Eğitimi"



        self.instructor_sockets: Set[WebSocket] = set()



        self.instructor_disconnect_task = None



        self.whisper_target_phone: Optional[str] = None



        self.students_db: Dict[str, dict] = {}



        self.telegram_logs: List[dict] = []



        self.chat_messages: List[dict] = []



        self.code_to_student: Dict[str, str] = {}



        self.latest_broadcast_code: Optional[str] = None



        self.latest_broadcast_student_name: Optional[str] = None
        self.latest_push_alert: Optional[dict] = None



        self.preview_sockets: Set[WebSocket] = set()



        



        # Akıllı 1 Saat Ders & 15 Dk İstirahat Sistemi



        self.is_in_break: bool = False



        self.break_start_time: float = 0



        self.break_duration_seconds: int = 15 * 60



        self.lesson_start_time: float = 0



        self.total_paused_break_time: float = 0



        # Canlı Ders Çağrısı & Yoklama / Davet Sistemi

        self.lesson_call_active: bool = False

        self.lesson_call_data: dict = {

            "active": False,

            "title": "",

            "message": "",

            "require_iban": True,

            "price": "50 USD",

            "iban": "",

            "iban_name": "",

            "bank_name": "",

            "created_at": 0,

            "responses": {}

        }



        self.load_from_disk()



    def get_quota_info(self) -> dict:



        total = len(self.students_db)



        return {



            "max": MAX_STUDENTS_QUOTA,



            "current": total,



            "remaining": max(0, MAX_STUDENTS_QUOTA - total),



            "is_full": total >= MAX_STUDENTS_QUOTA



        }



    async def broadcast_to_instructors(self, message: dict):



        for ws in list(self.instructor_sockets):



            try:



                await ws.send_json(message)



            except Exception:



                self.instructor_sockets.discard(ws)



    async def broadcast_lesson_call(self, message: dict):

        await self.broadcast_to_instructors(message)

        for sdata in self.students_db.values():

            if sdata.get("ws") and sdata.get("connected"):

                try:

                    await sdata["ws"].send_json(message)

                except Exception:

                    pass

        for ws in list(self.preview_sockets):

            try:

                await ws.send_json(message)

            except Exception:

                pass



    def load_from_disk(self):



        if os.path.exists(STUDENTS_DB_PATH):



            try:



                with open(STUDENTS_DB_PATH, "r", encoding="utf-8") as f:



                    data = json.load(f)



                    for phone, s in data.items():



                        s["connected"] = False



                        s["ws"] = None



                        s["ws_list"] = []



                        if "device_type" not in s:



                            s["device_type"] = "Windows PC"



                        if "dual_device_allowed" not in s:



                            s["dual_device_allowed"] = False



                        if "device_choice" not in s:



                            s["device_choice"] = "pc"



                        if "stage" not in s:



                            s["stage"] = "approved" if s.get("paid") else "iban_requested"



                        if "paid_date" not in s:



                            s["paid_date"] = None



                        



                        # Tarih tanıma & günlük oturum sıfırlama



                        today_str = datetime.date.today().isoformat()



                        if s.get("paid_date") and s.get("paid_date") != today_str:



                            s["paid"] = False



                            s["stage"] = "initial"



                            s["current_code"] = None



                            s["paid_date"] = None



                        elif s.get("paid") and s.get("paid_date") == today_str:



                            s["stage"] = "approved"



                        



                        canon_phone = clean_phone_number(phone)

                        if canon_phone in self.students_db:

                            existing = self.students_db[canon_phone]

                            if s.get("stage") in ("approved", "payment_sent", "iban_sent"):

                                existing["stage"] = s.get("stage")

                            if s.get("paid"):

                                existing["paid"] = True

                                existing["paid_date"] = s.get("paid_date")

                            if s.get("current_code"):

                                existing["current_code"] = s.get("current_code")

                            if s.get("dual_device_allowed"):

                                existing["dual_device_allowed"] = True

                        else:

                            s["phone"] = canon_phone

                            self.students_db[canon_phone] = s



                        code = s.get("current_code")

                        if code:

                            self.code_to_student[code] = canon_phone



            except Exception as e:



                print("Error loading students db:", e)



    def save_to_disk(self):



        try:



            to_save = {}



            for phone, s in self.students_db.items():



                to_save[phone] = {



                    "name": s["name"],



                    "phone": s["phone"],



                    "paid": s["paid"],



                    "current_code": s.get("current_code"),



                    "device_type": s.get("device_type"),



                    "stage": s.get("stage", "initial"),



                    "dual_device_allowed": s.get("dual_device_allowed", False),



                    "device_choice": s.get("device_choice", "pc"),



                    "paid_date": s.get("paid_date")



                }



            with open(STUDENTS_DB_PATH, "w", encoding="utf-8") as f:



                json.dump(to_save, f, ensure_ascii=False, indent=2)



        except Exception as e:



            print("Error saving students db:", e)



    def log_telegram(self, message: str, icon: str = "🔔"):



        log_entry = {



            "time": time.strftime("%H:%M:%S"),



            "icon": icon,



            "message": message



        }



        self.telegram_logs.insert(0, log_entry)



        if len(self.telegram_logs) > 30:



            self.telegram_logs.pop()



    def add_chat(self, sender: str, role: str, text: str):



        msg = {



            "time": time.strftime("%H:%M"),



            "sender": sender,



            "role": role,



            "text": text



        }



        self.chat_messages.append(msg)



        if len(self.chat_messages) > 100:



            self.chat_messages.pop(0)



        return msg



state = AcademyState()



state.tunnel_url = None



state.tunnel_process = None



def start_cloudflare_tunnel():



    # Mevcut canli kopruyu on yukle

    cf_path = os.path.join(BASE_DIR, "cloudflared.exe")

    if not os.path.exists(cf_path):

        print("cloudflared.exe bulunamadı, tünel başlatılamadı.")

        return



    try:

        if sys.platform == "win32":

            subprocess.run(["taskkill", "/F", "/IM", "cloudflared.exe"], capture_output=True)

    except Exception:

        pass



    def _worker():

        while True:

            try:

                print("[INFO] Cloudflare Guvenli Internet Koprusu Baslatiliyor...")

                cf_flags = subprocess.CREATE_NO_WINDOW if sys.platform == "win32" else 0

                proc = subprocess.Popen(

                    [cf_path, "tunnel", "--url", "http://localhost:8000"],

                    stdout=subprocess.PIPE,

                    stderr=subprocess.STDOUT,

                    text=True,

                    encoding="utf-8",

                    errors="replace",

                    bufsize=1,

                    creationflags=cf_flags

                )

                state.tunnel_process = proc

                for line in iter(proc.stdout.readline, ''):

                    if not line:

                        break

                    match = re.search(r'https://[a-zA-Z0-9-]+\.trycloudflare\.com', line)

                    if match:

                        t_url = match.group(0)

                        state.tunnel_url = t_url

                        print(f"[OK] CANLI INTERNET KOPRUSU AKTIF: {t_url}")

                        state.log_telegram(f"🌐 İnternet Köprüsü Açıldı: {t_url}", "🌐")

                        

                        bridge_data = {

                            "tunnel_url": t_url,

                            "stream_url": f"{t_url}/ogrenci",

                            "status": "online",

                            "updated_at": time.strftime("%Y-%m-%d %H:%M:%S")

                        }

                        try:

                            with open(os.path.join(BASE_DIR, "live_bridge.json"), "w", encoding="utf-8") as f_out:

                                json.dump(bridge_data, f_out, indent=2)

                            site_bridge = r"C:\Users\Lockam\Desktop\ern site\ern site\live_bridge.json"

                            if os.path.exists(os.path.dirname(site_bridge)):

                                with open(site_bridge, "w", encoding="utf-8") as f_out:

                                    json.dump(bridge_data, f_out, indent=2)

                            gh_bridge = r"C:\Users\Lockam\Desktop\GITHUBA_ATILACAKLAR\live_bridge.json"

                            if os.path.exists(os.path.dirname(gh_bridge)):

                                with open(gh_bridge, "w", encoding="utf-8") as f_out:

                                    json.dump(bridge_data, f_out, indent=2)

                        except Exception as ex:

                            print("Kopru dosyasi yazma hatasi:", ex)

                        

                        broadcast_cloud_bridge(True, event_type="HEARTBEAT")

                

                print("[WARN] Cloudflare koprusu kapandi, 4 sn sonra otomatik yeniden baslatilacak...")

                time.sleep(4)

            except Exception as e:

                print("Cloudflare tunel baslatma hatasi:", e)

                time.sleep(5)



    t = threading.Thread(target=_worker, daemon=True)

    t.start()



def broadcast_cloud_bridge(status_online: bool, title: str = "Bilgisayar Destekli Sadekarlık ve Mücevher Tasarımı Canlı Eğitimi", event_type: str = "AUTO"):

    def _broadcast_worker():

        if not status_online or not state.tunnel_url:

            payload_dict = {

                "event": "OFFLINE",

                "tunnel_url": "",

                "stream_url": "",

                "is_live": False,

                "instructor_online": False,

                "timestamp": int(time.time())

            }

            payload_str = json.dumps(payload_dict) + "\nOFFLINE"

            payload = payload_str.encode('utf-8')

            for ch in ["https://ntfy.sh/ern_tasarim_live_bridge_2026", "https://ntfy.sh/ern_akademi_bridge_v2"]:

                try:

                    req = urllib.request.Request(ch, data=payload, headers={'User-Agent': 'ERNStudio/2.0', 'Priority': '1'})

                    with urllib.request.urlopen(req, timeout=3.0) as resp:

                        pass

                except Exception as e:

                    print('ntfy offline gonderim hatasi:', e)

            return



        is_live_event = (event_type == "LIVE")

        is_instr_online_event = (event_type == "INSTRUCTOR_ONLINE")



        payload_dict = {

            "event": "LESSON_STARTED" if state.is_live else ("INSTRUCTOR_ONLINE" if len(state.instructor_sockets) > 0 else "BRIDGE_HEARTBEAT"),

            "tunnel_url": state.tunnel_url,

            "stream_url": f"{state.tunnel_url}/ogrenci",

            "title": title,

            "is_live": state.is_live,

            "instructor_online": (len(state.instructor_sockets) > 0),

            "timestamp": int(time.time())

        }

        payload_str = json.dumps(payload_dict) + "\n" + state.tunnel_url

        payload = payload_str.encode('utf-8')



        for ch in ["https://ntfy.sh/ern_tasarim_live_bridge_2026", "https://ntfy.sh/ern_akademi_bridge_v2"]:

            try:

                headers = {'User-Agent': 'ERNStudio/2.0'}

                # SADECE gercek anlik bildirim olaylarinda (hoca dersi baslattiginda veya studyoyu ilk actiginda) yuksek oncelik gonder

                # Rutin periyodik kalp atislarinda (heartbeat) KESINLIKLE sesli/titresimli bildirim firlatmaz!

                if is_live_event:

                    headers['Title'] = 'ERN Tasarim: Canli Ders Basladi!'

                    headers['Priority'] = '5'

                    headers['Tags'] = 'loudspeaker,tada,video_camera'

                    headers['Click'] = f"{state.tunnel_url}/ogrenci"

                elif is_instr_online_event:

                    headers['Title'] = 'ERN Tasarim: Ozkan Hoca Studyoda!'

                    headers['Priority'] = '4'

                    headers['Tags'] = 'bell,wave'

                    headers['Click'] = f"{state.tunnel_url}/ogrenci"

                else:

                    headers['Title'] = 'ERN Akademi Kopru Aktif'

                    headers['Priority'] = '1'

                    headers['Click'] = f"{state.tunnel_url}/ogrenci"



                req = urllib.request.Request(ch, data=payload, headers=headers)

                with urllib.request.urlopen(req, timeout=3.0) as resp:

                    pass

            except Exception:

                pass



    threading.Thread(target=_broadcast_worker, daemon=True).start()



# Periyodik Bulut Kalp Atisi ve Tunel Saglik Kontrolu

def _heartbeat_worker():

    fail_count = 0

    while True:

        time.sleep(60)

        if state.tunnel_url:

            try:

                test_req = urllib.request.Request(f"{state.tunnel_url}/api/lesson/public-status", headers={'User-Agent': 'ERNHeartbeat/1.0'})

                with urllib.request.urlopen(test_req, timeout=4.0) as r:

                    if r.status == 200:

                        fail_count = 0

                        broadcast_cloud_bridge(True, event_type="HEARTBEAT")

            except Exception:

                fail_count += 1

                if fail_count >= 2:

                    print(f"[WARN] Cloudflare tuneli yanit vermiyor ({fail_count} kez). Yeniden baslatiliyor...")

                    fail_count = 0

                    if state.tunnel_process:

                        try:

                            state.tunnel_process.kill()

                        except Exception:

                            pass



threading.Thread(target=_heartbeat_worker, daemon=True).start()



start_cloudflare_tunnel()



def generate_otp():



    return "".join(random.choices(string.digits, k=8))



def render_html(template_name: str) -> HTMLResponse:



    file_path = os.path.join(TEMPLATES_DIR, template_name)



    with open(file_path, "r", encoding="utf-8") as f:



        content = f.read()



    headers = {



        "Cache-Control": "no-cache, no-store, must-revalidate, max-age=0",



        "Pragma": "no-cache",



        "Expires": "0"



    }



    return HTMLResponse(content=content, headers=headers)



def get_local_lan_ip():



    try:



        import socket



        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:



            s.connect(("8.8.8.8", 80))



            return s.getsockname()[0]



    except Exception:



        return "127.0.0.1"



@app.get("/api/bridge/status")



async def get_bridge_status():



    lan_ip = get_local_lan_ip()



    return {



        "tunnel_url": state.tunnel_url,



        "stream_url": f"{state.tunnel_url}/ogrenci" if state.tunnel_url else None,



        "lan_url": f"http://{lan_ip}:8000/ogrenci",



        "official_url": "https://www.erntasarim.com/ogrenci",



        "is_online": bool(state.tunnel_url)



    }



@app.get("/api/qr")



async def generate_qr_image(url: str = ""):



    import qrcode



    import io



    target_url = url.strip()



    if not target_url:



        target_url = (f"{state.tunnel_url}/ogrenci" if state.tunnel_url else "https://www.erntasarim.com/ogrenci")



    



    qr = qrcode.QRCode(



        version=None,



        error_correction=qrcode.constants.ERROR_CORRECT_M,



        box_size=7,



        border=2,



    )



    qr.add_data(target_url)



    qr.make(fit=True)



    img = qr.make_image(fill_color="#0b0f19", back_color="#ffffff")



    buf = io.BytesIO()



    img.save(buf, format="PNG")



    buf.seek(0)



    return Response(content=buf.getvalue(), media_type="image/png")



@app.get("/", response_class=HTMLResponse)



async def index_page(request: Request):



    return render_html("student.html")



@app.get("/akademi", response_class=HTMLResponse)



@app.get("/akademi/", response_class=HTMLResponse)



@app.get("/egitim", response_class=HTMLResponse)



@app.get("/egitim/", response_class=HTMLResponse)



async def akademi_page(request: Request):



    return render_html("akademi.html")



@app.get("/egitmen", response_class=HTMLResponse)



async def instructor_page(request: Request):



    return render_html("instructor.html")



@app.get("/ogrenci", response_class=HTMLResponse)



@app.get("/ogrenci/", response_class=HTMLResponse)



@app.get("/canli-akademi", response_class=HTMLResponse)



@app.get("/canli-akademi/", response_class=HTMLResponse)



@app.get("/ern-8f92a4e7b1c3d69f0a2e5b7c-canli-akademi", response_class=HTMLResponse)



@app.get("/ern-8f92a4e7b1c3d69f0a2e5b7c-canli-akademi/", response_class=HTMLResponse)



@app.get("/{token}-canli-akademi", response_class=HTMLResponse)



@app.get("/{token}-canli-akademi/", response_class=HTMLResponse)



async def student_page(request: Request):



    return render_html("student.html")



import imageio_ffmpeg



import subprocess



def safe_remove_file(filepath: str, max_retries: int = 5, delay: float = 0.4):



    """Windows dosya kilitlerine karşı gecikmeli ve tekrarlı güvenli dosya silici."""



    if not filepath or not os.path.exists(filepath):



        return



    for _ in range(max_retries):



        try:



            os.remove(filepath)



            return



        except Exception:



            time.sleep(delay)



    try:



        os.remove(filepath)



    except Exception:



        pass



def clean_orphaned_recordings():



    """Kayıt klasöründeki geçici temp dosyalarını ve gereksiz webm kalıntılarını temizler."""



    try:



        if not os.path.exists(RECORDINGS_DIR):



            return



        for fname in os.listdir(RECORDINGS_DIR):



            fpath = os.path.join(RECORDINGS_DIR, fname)



            # temp_*.webm veya *.tmp dosyaları doğrudan temizle



            if (fname.startswith("temp_") and fname.endswith(".webm")) or fname.endswith(".tmp"):



                safe_remove_file(fpath)



            # Eğer aynı isimde .mp4 olan bir .webm varsa, webm artığını temizle



            elif fname.endswith(".webm"):



                base_name = fname[:-5]



                corresponding_mp4 = os.path.join(RECORDINGS_DIR, base_name + ".mp4")



                if os.path.exists(corresponding_mp4) and os.path.getsize(corresponding_mp4) > 0:



                    safe_remove_file(fpath)



    except Exception as e:



        print("[TEMİZLİK UYARISI]", e)



# API: Kayıtlı Videoyu Doğrudan Klasöre Kaydet ve İleri/Geri Sarılabilir Standart MP4 Yap



@app.post("/api/save-recording")

async def save_recording(video: UploadFile = File(...)):

    import tempfile

    import uuid

    import traceback



    temp_raw = None

    date_str = time.strftime("%Y-%m-%d_%H-%M-%S")

    mp4_name = f"3DCAD_DersKaydi_{date_str}.mp4"

    os.makedirs(RECORDINGS_DIR, exist_ok=True)

    mp4_path = os.path.join(RECORDINGS_DIR, mp4_name)



    try:

        temp_dir = tempfile.gettempdir()

        temp_raw = os.path.join(temp_dir, f"ern_rec_raw_{date_str}_{uuid.uuid4().hex[:6]}.dat")



        total_bytes = 0

        with open(temp_raw, "wb") as f:

            while True:

                chunk = await video.read(65536)

                if not chunk:

                    break

                f.write(chunk)

                total_bytes += len(chunk)



        print(f"--- YENI DERS KAYDI ALINDI: {total_bytes} bayt ---")



        if total_bytes < 100:

            if temp_raw and os.path.exists(temp_raw):

                safe_remove_file(temp_raw)

            return JSONResponse(status_code=400, content={"status": "error", "message": "Bos video verisi alindi."})



        # EBML Header temizligi (gerekirse bastaki copu temizle)

        try:

            with open(temp_raw, "rb") as f:

                header_data = f.read(4096)

            ebml_magic = bytes([0x1A, 0x45, 0xDF, 0xA3])

            ebml_pos = header_data.find(ebml_magic)

            if ebml_pos > 0:

                print(f"[KAYIT] WebM basinda {ebml_pos} bayt cop veri tespit edildi, temizleniyor...")

                with open(temp_raw, "rb") as f:

                    full_content = f.read()

                with open(temp_raw, "wb") as f:

                    f.write(full_content[ebml_pos:])

        except Exception as ebml_err:

            print("[KAYIT] EBML kontrol hatasi (onemsiz):", ebml_err)



        ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()

        ff_flags = subprocess.CREATE_NO_WINDOW if sys.platform == "win32" else 0



        probe_res = subprocess.run([ffmpeg_exe, "-i", temp_raw], capture_output=True, text=True, creationflags=ff_flags)

        has_audio = "Audio:" in (probe_res.stderr or "")



        converted = False



        # Deneme 1: H.264 MP4 + AAC Stereo Ses, Hata Tolerasli, faststart

        try:

            cmd1 = [

                ffmpeg_exe, "-y",

                "-err_detect", "ignore_err",

                "-fflags", "+genpts+discardcorrupt",

                "-avoid_negative_ts", "make_zero",

                "-i", temp_raw,

                "-c:v", "libx264", "-preset", "ultrafast", "-crf", "22", "-pix_fmt", "yuv420p"

            ]

            if has_audio:

                cmd1.extend(["-c:a", "aac", "-b:a", "192k", "-ar", "48000"])

            else:

                cmd1.extend(["-an"])

            cmd1.extend(["-movflags", "+faststart", mp4_path])



            res1 = subprocess.run(cmd1, capture_output=True, text=True, timeout=600, creationflags=ff_flags)

            if res1.returncode == 0 and os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 0:

                converted = True

            else:

                err_tail = res1.stderr[-400:].strip() if res1.stderr else ""

                print(f"[FFMPEG] Deneme 1 basarisiz, detay: {err_tail}")

        except Exception as err1:

            print("FFMPEG Deneme 1 Hatasi:", err1)



        # Deneme 2: Ses akisi hatali/bos ise Sadece Video ile MP4 yap (-an)

        if not converted and os.path.exists(temp_raw):

            try:

                cmd2 = [

                    ffmpeg_exe, "-y",

                    "-err_detect", "ignore_err",

                    "-fflags", "+genpts+discardcorrupt",

                    "-i", temp_raw,

                    "-c:v", "libx264", "-preset", "ultrafast", "-crf", "22", "-pix_fmt", "yuv420p",

                    "-an",

                    "-movflags", "+faststart",

                    mp4_path

                ]

                res2 = subprocess.run(cmd2, capture_output=True, text=True, timeout=300, creationflags=ff_flags)

                if res2.returncode == 0 and os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 0:

                    converted = True

                    print("[FFMPEG] Deneme 2 (Sessiz video modu) basariyla tamamlandi.")

                else:

                    err_tail2 = res2.stderr[-300:].strip() if res2.stderr else ""

                    print(f"[FFMPEG] Deneme 2 basarisiz: {err_tail2}")

            except Exception as err2:

                print("FFMPEG Deneme 2 Hatasi:", err2)



        # Deneme 3: Hizli Stream Copy (-c copy)

        if not converted and os.path.exists(temp_raw):

            try:

                cmd3 = [

                    ffmpeg_exe, "-y",

                    "-err_detect", "ignore_err",

                    "-fflags", "+genpts+discardcorrupt",

                    "-i", temp_raw,

                    "-c", "copy",

                    "-movflags", "+faststart",

                    mp4_path

                ]

                res3 = subprocess.run(cmd3, capture_output=True, text=True, timeout=120, creationflags=ff_flags)

                if res3.returncode == 0 and os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 0:

                    converted = True

                    print("[FFMPEG] Deneme 3 (Stream Copy) basariyla tamamlandi.")

            except Exception as err3:

                print("FFMPEG Deneme 3 Hatasi:", err3)



        # Deneme 4: SIFIR KAYIP GARANTISI (Rescue Copy)

        # Eger FFmpeg her turlu basarisiz olduysa bile ogretmenin kaydini ASLA cope atma!

        if not converted or not os.path.exists(mp4_path) or os.path.getsize(mp4_path) == 0:

            import shutil

            try:

                shutil.copy2(temp_raw, mp4_path)

                if os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 0:

                    converted = True

                    print(f"[RESCUE] Orijinal kayit verisi basariyla kurtarildi ve MP4 olarak kaydedildi: {mp4_path}")

            except Exception as c_err:

                print("[RESCUE] Kurtarma kopyalama hatasi:", c_err)



        if converted or (os.path.exists(mp4_path) and os.path.getsize(mp4_path) > 0):

            state.log_telegram(f"DERS VIDEOSU KAYDEDILDI: '{mp4_name}' (Standart H.264 MP4 - Ileri/Geri Sarilabilir)", "📹")

            return {"status": "success", "file_name": mp4_name, "path": mp4_path, "is_mp4": True}

        else:

            return JSONResponse(status_code=500, content={"status": "error", "message": "Video MP4 formatina donusturulemedi."})



    except Exception as exc:

        traceback.print_exc()

        return JSONResponse(status_code=500, content={"status": "error", "message": f"Kayit isleme hatasi: {str(exc)}"})

    finally:

        if temp_raw and os.path.exists(temp_raw):

            safe_remove_file(temp_raw)

        clean_orphaned_recordings()





@app.post("/api/open-recordings-folder")



async def open_recordings_folder():



    try:



        clean_orphaned_recordings()



        os.startfile(RECORDINGS_DIR)



        return {"status": "success", "path": RECORDINGS_DIR}



    except Exception as e:



        return {"status": "error", "message": str(e), "path": RECORDINGS_DIR}



@app.get("/api/recordings/get-folder")



async def get_recordings_folder():



    return {"status": "success", "path": RECORDINGS_DIR}



@app.post("/api/recordings/set-folder")



async def set_recordings_folder(path: str = Form(...)):



    global RECORDINGS_DIR



    clean_path = path.strip()



    if clean_path:



        try:



            clean_path = os.path.normpath(clean_path)



            os.makedirs(clean_path, exist_ok=True)



            RECORDINGS_DIR = clean_path



            save_recordings_dir(clean_path)



            state.log_telegram(f"Kayıt Klasörü Güncellendi: '{clean_path}'", "📁")



            return {"status": "success", "path": clean_path}



        except Exception as e:



            return JSONResponse(status_code=400, content={"status": "error", "message": str(e)})



    return JSONResponse(status_code=400, content={"status": "error", "message": "Geçersiz klasör yolu"})



def _ask_directory_windows(initial_dir: str = "") -> Optional[str]:



    try:



        ps_script = (



            "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; "



            "Add-Type -AssemblyName System.Windows.Forms; "



            "$dialog = New-Object System.Windows.Forms.FolderBrowserDialog; "



            "$dialog.Description = 'Ders Video Kayitlarinin Kaydedilecegi Klasoru Secin'; "



            "$dialog.ShowNewFolderButton = $true; "



        )



        if initial_dir and os.path.exists(initial_dir):



            clean_init = initial_dir.replace("'", "''")



            ps_script += f"$dialog.SelectedPath = '{clean_init}'; "



        ps_script += (



            "$form = New-Object System.Windows.Forms.Form; "



            "$form.TopMost = $true; "



            "if ($dialog.ShowDialog($form) -eq [System.Windows.Forms.DialogResult]::OK) { "



            "    Write-Output $dialog.SelectedPath "



            "}"



        )



        ps_flags = subprocess.CREATE_NO_WINDOW if sys.platform == "win32" else 0



        res = subprocess.run(



            ["powershell", "-NoProfile", "-NonInteractive", "-Command", ps_script],



            capture_output=True,



            text=True,



            encoding="utf-8",



            timeout=180,



            creationflags=ps_flags



        )



        out = res.stdout.strip()



        if out and os.path.exists(out):



            return os.path.normpath(out)



    except Exception as e:



        print("Folder dialog error:", e)



    return None



@app.post("/api/recordings/browse-folder")



async def browse_recordings_folder():



    global RECORDINGS_DIR



    try:



        selected = await asyncio.to_thread(_ask_directory_windows, RECORDINGS_DIR)



        if selected:



            RECORDINGS_DIR = selected



            save_recordings_dir(selected)



            state.log_telegram(f"Kayıt Klasörü Seçildi: '{selected}'", "📁")



            return {"status": "success", "path": selected}



        return {"status": "cancelled", "path": RECORDINGS_DIR}



    except Exception as e:



        return {"status": "error", "message": str(e), "path": RECORDINGS_DIR}



@app.post("/api/recordings/quick-preset")



async def quick_preset_folder(preset: str = Form(...)):



    global RECORDINGS_DIR



    target_path = None



    if preset == "desktop":



        target_path = os.path.join(os.path.expanduser("~"), "Desktop", "CAD_Ders_Kayitlari")



    elif preset == "videos":



        target_path = os.path.join(os.path.expanduser("~"), "Videos", "CAD_Ders_Kayitlari")



    elif preset == "default":



        target_path = os.path.join(BASE_DIR, "DersKayitlari")



    if target_path:



        target_path = os.path.normpath(target_path)



        os.makedirs(target_path, exist_ok=True)



        RECORDINGS_DIR = target_path



        save_recordings_dir(target_path)



        state.log_telegram(f"Kayıt Klasörü Kısayoldan Ayarlandı: '{target_path}'", "📁")



        return {"status": "success", "path": target_path}



    return JSONResponse(status_code=400, content={"status": "error", "message": "Bilinmeyen kısayol"})



@app.post("/api/debug-log")



async def debug_log(request: Request):



    try:



        body = await request.json()



        msg = body.get("msg", "")



        print(f"[CLIENT LOG] {msg}")



        # Sadece kritik sistem hataları bildirim olarak düşer, ham JS logları arayüzü kirletmez



        if "JS HATASI" in msg or "[FATAL]" in msg:



            state.log_telegram(f"Sistem Uyarısı: {msg[:75]}", "⚠️")



        return {"status": "ok"}



    except Exception as e:



        return {"status": "error", "message": str(e)}



@app.post("/api/student/add")



async def add_student(name: str = Form(...), phone: str = Form(...), paid: bool = Form(False)):



    phone = phone.strip().replace(" ", "").replace("-", "")



    if phone not in state.students_db and len(state.students_db) >= MAX_STUDENTS_QUOTA:



        return JSONResponse(status_code=400, content={



            "status": "quota_full",



            "message": f"Kontenjan dolmuştur (Maksimum {MAX_STUDENTS_QUOTA} Kişi). Yeni öğrenci eklemek için mevcut listeden bir öğrenciyi siliniz."



        })



    s_code = None



    stage = "approved" if paid else "initial"



    if paid:



        s_code = generate_otp()



        state.code_to_student[s_code] = phone



    state.students_db[phone] = {



        "name": name.strip(),



        "phone": phone,



        "paid": paid,



        "current_code": s_code,



        "stage": stage,



        "device_type": None,



        "connected": False,



        "ws": None



    }



    state.save_to_disk()



    state.log_telegram(f"Yeni Öğrenci Eklendi: {name} ({phone}) - Kontenjan: {len(state.students_db)}/{MAX_STUDENTS_QUOTA} - Ödeme: {'Ödendi' if paid else 'Bekliyor'}", "👤")



    return {"status": "success", "message": "Öğrenci eklendi", "quota": state.get_quota_info()}



@app.get("/api/payment-settings")



async def get_payment_settings():



    return load_payment_settings()



@app.get("/api/currency")



async def get_currency():



    settings = load_payment_settings()



    return {



        "status": "success",



        "rate": settings.get("exchange_rate", 49.34),



        "is_custom_rate": settings.get("is_custom_rate", False),



        "price_usd": settings.get("price_usd", 50),



        "price_try": settings.get("price_try", 2467)



    }



@app.post("/api/payment-settings")



async def update_payment_settings(



    bank_name: str = Form(...),



    iban: str = Form(...),



    account_holder: str = Form(...),



    fee_info: str = Form(...),



    price_usd: int = Form(50),



    iban_usd: str = Form(""),



    whatsapp_phone: str = Form(""),



    custom_rate: float = Form(0.0)



):



    save_payment_settings(bank_name, iban, account_holder, fee_info, price_usd, iban_usd, whatsapp_phone, custom_rate)



    settings = load_payment_settings()



    rate_desc = f"Özel Kur: {settings['exchange_rate']}" if settings.get('is_custom_rate') else f"Canlı Kur: {settings['exchange_rate']}"



    state.log_telegram(f"💳 IBAN & Ödeme Bilgileri Güncellendi: {settings['price_usd']}$ (~{settings['price_try']} TL, {rate_desc}) - {bank_name} ({account_holder})", "💳")



    



    # Tüm önizleme ve öğrenci soketlerine anında canlı güncelleme gönder



    broadcast_data = {"type": "PAYMENT_SETTINGS_UPDATE", "data": settings}



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json(broadcast_data)



        except Exception:



            pass



    for s in state.students_db.values():



        if s.get("ws"):



            try:



                await s["ws"].send_json(broadcast_data)



            except Exception:



                pass



    return {"status": "success", "settings": settings}



@app.post("/api/open-whatsapp")



async def api_open_whatsapp(request: Request):



    try:



        data = await request.json()



    except Exception:



        data = {}



    phone = data.get("phone", "").strip()



    text = data.get("text", "").strip()



    prefer_app = data.get("prefer_app", False)



    clean_phone = re.sub(r"[^0-9]", "", phone)



    if clean_phone.startswith("0"):



        wa_phone = "90" + clean_phone[1:]



    elif not clean_phone.startswith("90"):



        wa_phone = "90" + clean_phone



    else:



        wa_phone = clean_phone



    import urllib.parse



    import webbrowser



    encoded_text = urllib.parse.quote(text)



    



    web_url = f"https://web.whatsapp.com/send?phone={wa_phone}&text={encoded_text}"



    app_url = f"whatsapp://send?phone={wa_phone}&text={encoded_text}"



    wame_url = f"https://wa.me/{wa_phone}?text={encoded_text}"



    try:



        if prefer_app:



            try:



                os.startfile(app_url)



            except Exception:



                webbrowser.open(web_url)



        else:



            webbrowser.open(web_url)



    except Exception as e:



        print(f"[WHATSAPP OPEN ERROR] {e}")



    return {



        "status": "success",



        "web_url": web_url,



        "app_url": app_url,



        "wame_url": wame_url,



        "phone": wa_phone



    }



@app.post("/api/open-whatsapp-batch")



async def api_open_whatsapp_batch(request: Request):



    try:



        data = await request.json()



    except Exception:



        data = {}



    students = data.get("students", [])



    delay = float(data.get("delay", 2.2))



    async def _run_batch():



        import webbrowser



        import urllib.parse



        for i, item in enumerate(students):



            phone = item.get("phone", "").strip()



            text = item.get("text", "").strip()



            if not phone:



                continue



            clean_phone = re.sub(r"[^0-9]", "", phone)



            if clean_phone.startswith("0"):



                wa_phone = "90" + clean_phone[1:]



            elif not clean_phone.startswith("90"):



                wa_phone = "90" + clean_phone



            else:



                wa_phone = clean_phone



            encoded_text = urllib.parse.quote(text)



            web_url = f"https://web.whatsapp.com/send?phone={wa_phone}&text={encoded_text}"



            try:



                webbrowser.open(web_url)



            except Exception as e:



                print(f"[BATCH WA ERROR] {e}")



            if i < len(students) - 1:



                await asyncio.sleep(delay)



    asyncio.create_task(_run_batch())



    return {"status": "success", "count": len(students)}



@app.post("/api/broadcast-live-alert")
async def api_broadcast_live_alert(request: Request):
    try:
        data = await request.json()
    except Exception:
        data = {}

    title = (data.get("title") or "🚀 CANLI DERS BAŞLIYOR!").strip()
    message = (data.get("message") or "Eğitmeniniz Özkan Hoca canlı yayına başladı! Lütfen ekranınızı açıp derse katılınız.").strip()
    now_ts = time.time()
    alert_id = str(data.get("id") or int(now_ts * 1000))
    stream_url = f"{state.tunnel_url}/ogrenci" if state.tunnel_url else ""

    state.latest_push_alert = {
        "id": alert_id,
        "title": title,
        "message": message,
        "timestamp": now_ts,
        "stream_url": stream_url
    }

    alert_payload = {
        "type": "LIVE_ALERT",
        "id": alert_id,
        "title": title,
        "message": message,
        "timestamp": now_ts,
        "stream_url": stream_url
    }

    def _push_ntfy_live_alert():
        try:
            ntfy_dict = {
                "event": "PUSH_ALERT",
                "alert_id": alert_id,
                "alert_title": title,
                "alert_message": message,
                "title": title,
                "message": message,
                "tunnel_url": state.tunnel_url or "",
                "stream_url": stream_url,
                "is_live": state.is_live,
                "instructor_online": True,
                "timestamp": int(now_ts)
            }
            ntfy_bytes = (json.dumps(ntfy_dict, ensure_ascii=False) + ("\n" + state.tunnel_url if state.tunnel_url else "")).encode("utf-8")
            for ch in ["https://ntfy.sh/ern_tasarim_live_bridge_2026", "https://ntfy.sh/ern_akademi_bridge_v2"]:
                try:
                    headers = {
                        "User-Agent": "ERNStudio/2.5",
                        "Priority": "5",
                        "Title": "ERN Tasarim: Canli Ders Bildirimi",
                        "Tags": "loudspeaker,bell"
                    }
                    if stream_url:
                        headers["Click"] = stream_url
                    req = urllib.request.Request(ch, data=ntfy_bytes, headers=headers)
                    with urllib.request.urlopen(req, timeout=3.5) as resp:
                        pass
                except Exception:
                    pass
        except Exception:
            pass

    threading.Thread(target=_push_ntfy_live_alert, daemon=True).start()



    



    sent_count = 0



    for s in state.students_db.values():



        ws = s.get("ws")



        if ws:



            try:



                await ws.send_json(alert_payload)



                sent_count += 1



            except Exception:



                pass



        for w in s.get("ws_list", []):



            try:



                await w.send_json(alert_payload)



                sent_count += 1



            except Exception:



                pass



                



    for pws in list(state.preview_sockets):



        try:



            await pws.send_json(alert_payload)



            sent_count += 1



        except Exception:



            pass



            



    state.log_telegram(f"🔔 CANLI DERS BİLDİRİMİ GÖNDERİLDİ: '{title}' - {sent_count} ekrana iletildi.", "🚀")



    return {"status": "success", "sent_count": sent_count}



@app.get("/api/announcement")



async def get_announcement():



    return load_announcement_settings()



@app.post("/api/announcement")



async def update_announcement(



    active: bool = Form(True),



    badge: str = Form(""),



    title: str = Form(""),



    date_str: str = Form(""),



    desc: str = Form(""),



    btn_text: str = Form("")



):



    save_announcement_settings(active, badge, title, date_str, desc, btn_text)



    data = load_announcement_settings()



    state.log_telegram(f"📢 Canlı Reklam / Duyuru Güncellendi: '{title}' ({date_str}) - Durum: {'Aktif' if active else 'Pasif'}", "📢")



    



    # Tüm bağlı öğrenci ve önizleme ekranlarına canlı bildir



    broadcast_msg = {



        "type": "ANNOUNCEMENT_UPDATE",



        "data": data



    }



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json(broadcast_msg)



        except Exception:



            pass



    for s in state.students_db.values():



        if s.get("ws"):



            try:



                await s["ws"].send_json(broadcast_msg)



            except Exception:



                pass



                



    return {"status": "success", "data": data}



@app.get("/api/curriculum")



async def get_curriculum():



    items = load_curriculum_settings()



    completed_count = sum(1 for x in items if x.get("status") == "completed")



    current_item = next((x for x in items if x.get("status") == "current"), None)



    return {



        "curriculum": items,



        "total_lessons": len(items),



        "completed_count": completed_count,



        "progress_percent": int((completed_count / len(items)) * 100) if items else 0,



        "current_lesson": current_item,



        "student_count": len(state.students_db),



        "max_quota": MAX_STUDENTS_QUOTA,



        "remaining_quota": max(0, MAX_STUDENTS_QUOTA - len(state.students_db)),



        "is_quota_full": len(state.students_db) >= MAX_STUDENTS_QUOTA



    }



@app.post("/api/curriculum")



async def update_curriculum(request: Request):



    try:



        body = await request.json()



        items = body.get("curriculum", [])



        save_curriculum_settings(items)



        state.log_telegram("📚 Ders Müfredatı & Gelişim Çizelgesi Güncellendi", "📚")



        



        # Tüm bağlı öğrenci ve önizleme ekranlarına canlı bildir



        broadcast_msg = {



            "type": "CURRICULUM_UPDATE",



            "data": items



        }



        for ws in list(state.preview_sockets):



            try:



                await ws.send_json(broadcast_msg)



            except Exception:



                pass



        for s in state.students_db.values():



            if s.get("ws"):



                try:



                    await s["ws"].send_json(broadcast_msg)



                except Exception:



                    pass



        return {"status": "success", "curriculum": items}



    except Exception as e:



        return JSONResponse(status_code=400, content={"status": "error", "message": str(e)})



@app.get("/indir/ogrenci-atolyesi")



@app.get("/api/download/ogrenci-setup")



async def download_student_setup():



    # Masaüstündeki veya klasördeki hazır setup dosyasını bul ve indir



    desktop_setup = os.path.join(os.path.expanduser("~"), "Desktop", "ERN_Tasarim_Ogrenci_Atolyesi_Setup.exe")



    local_setup = os.path.join(BASE_DIR, "ERN_Tasarim_Ogrenci_Atolyesi_Setup.exe")



    



    target_file = None



    if os.path.exists(desktop_setup):



        target_file = desktop_setup



    elif os.path.exists(local_setup):



        target_file = local_setup



        



    if target_file:



        return FileResponse(



            path=target_file,



            filename="ERN_Tasarim_Ogrenci_Atolyesi_Setup.exe",



            media_type="application/octet-stream"



        )



    return RedirectResponse(



        url="https://raw.githubusercontent.com/mucevhertasarim-ship-it/mucevhertasarim-akademi/main/ERN_Tasarim_Ogrenci_Atolyesi_Setup.zip",



        status_code=302



    )



@app.get("/indir/ogrenci-apk")



@app.get("/api/download/ogrenci-apk")



@app.get("/ERN_Tasarim_Ogrenci.apk")



async def download_student_apk():



    desktop_apk = os.path.join(os.path.expanduser("~"), "Desktop", "ERN_Tasarim_Ogrenci.apk")



    local_apk = os.path.join(BASE_DIR, "ERN_Tasarim_Ogrenci.apk")



    



    target_file = None



    if os.path.exists(desktop_apk):



        target_file = desktop_apk



    elif os.path.exists(local_apk):



        target_file = local_apk



        



    if target_file:



        return FileResponse(



            path=target_file,



            filename="ERN_Tasarim_Ogrenci.apk",



            media_type="application/vnd.android.package-archive"



        )



    return JSONResponse(status_code=404, content={"error": "APK dosyası bulunamadı"})



@app.post("/api/student/send-iban")



async def send_iban_to_student(phone: str = Form(...)):



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        sdata["stage"] = "iban_sent"



        canon = clean_phone_number(phone)

        for other_p, other_s in list(state.students_db.items()):

            if clean_phone_number(other_p) == canon or (len(other_p) >= 10 and len(key) >= 10 and other_p[-10:] == key[-10:]):

                other_s["stage"] = "iban_sent"



        state.save_to_disk()



        pay_info = load_payment_settings()



        msg = {



            "type": "PAYMENT_INFO",



            "phone": key,



            "student_name": sdata["name"],



            "bank_name": pay_info["bank_name"],



            "iban": pay_info["iban"],



            "iban_usd": pay_info.get("iban_usd", pay_info["iban"]),



            "account_holder": pay_info["account_holder"],



            "price_usd": pay_info["price_usd"],



            "price_try": pay_info["price_try"],



            "exchange_rate": pay_info["exchange_rate"],



            "fee_info": pay_info["fee_info"],



            "whatsapp_phone": pay_info.get("whatsapp_phone", ""),



            "stage": "iban_sent",



            "message": f"Sayın {sdata['name']}, IBAN ve {pay_info['price_usd']}$ (~{pay_info['price_try']} TL) ödeme bilgileriniz iletilmiştir."



        }



        for ws in list(state.preview_sockets):



            try:



                await ws.send_json(msg)



            except Exception:



                pass



        for s in state.students_db.values():



            if s.get("ws"):



                try:



                    await s["ws"].send_json(msg)



                except Exception:



                    pass



        state.log_telegram(f"💳 IBAN BİLGİSİ GÖNDERİLDİ: {sdata['name']} ({key})", "💳")



        



        await state.broadcast_to_instructors({



            "type": "STUDENT_STAGE_UPDATED",



            "phone": key,



            "name": sdata["name"],



            "stage": "iban_sent"



        })



        return {"status": "success", "message": "IBAN bilgisi öğrenciye iletildi"}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/student/notify-payment-sent")

async def notify_payment_sent(phone: str = Form(""), name: str = Form("")):

    clean_p = phone.strip()

    key = find_student_key(clean_p) if clean_p else clean_p

    if not key:

        key = clean_p or (name.strip() if name else "Öğrenci")

    

    if key not in state.students_db:

        state.students_db[key] = {

            "name": name.strip() or "Öğrenci",

            "phone": clean_p,

            "stage": "payment_sent",

            "registered_at": time.strftime("%Y-%m-%d %H:%M:%S"),

            "paid": False,

            "connected": False

        }

    else:

        sdata = state.students_db[key]

        sdata["stage"] = "payment_sent"

        if name and name.strip():

            sdata["name"] = name.strip()



    canon = clean_phone_number(clean_p) if clean_p else ""

    if canon:

        for other_p, other_s in list(state.students_db.items()):

            if clean_phone_number(other_p) == canon or (len(other_p) >= 10 and len(key) >= 10 and other_p[-10:] == key[-10:]):

                other_s["stage"] = "payment_sent"



    state.save_to_disk()

    

    s_name = state.students_db[key].get("name", "Öğrenci")

    state.log_telegram(f"💸 ÖDEME BİLDİRİLDİ: {s_name} ({key}) -> Banka hesabınızı kontrol edip onaylayınız!", "💸")

    

    await state.broadcast_to_instructors({

        "type": "STUDENT_PAYMENT_SENT",

        "name": s_name,

        "phone": key,

        "stage": "payment_sent"

    })

    return {"status": "success", "message": "Ödeme bildiriminiz hocaya iletildi. Banka teyidi bekleniyor."}



@app.get("/api/student/lookup")



async def lookup_student(phone: str = ""):



    if not phone:



        return {"found": False}



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        sdata = check_student_daily_status(sdata)



        today = get_today_str()



        is_daily_paid = bool(sdata.get("paid", False) and sdata.get("paid_date") == today)



        stage = sdata.get("stage", "initial")



        if is_daily_paid and stage in ("approved", "daily_paid_waiting"):



            stage = "approved"



            sdata["stage"] = "approved"



        



        pay_info = load_payment_settings()



        show_iban = stage in ["iban_sent", "payment_sent", "approved"] or sdata.get("paid", False)



        return {



            "found": True,



            "is_live": state.is_live,



            "name": sdata.get("name", ""),



            "phone": key,



            "paid": sdata.get("paid", False),



            "paid_date": sdata.get("paid_date"),



            "is_daily_paid": is_daily_paid,



            "stage": stage,



            "code": sdata.get("current_code", None),



            "dual_device_allowed": bool(sdata.get("dual_device_allowed", False)),



            "device_choice": sdata.get("device_choice", "pc"),



            "bank_name": pay_info.get("bank_name", "Garanti Bankası") if show_iban else "",



            "iban": pay_info.get("iban", "") if show_iban else "",



            "account_holder": pay_info.get("account_holder", "") if show_iban else "",



            "fee_info": pay_info.get("fee_info", "") if show_iban else "",



            "price_usd": pay_info.get("price_usd", 50),



            "price_try": pay_info.get("price_try", 2467),



            "exchange_rate": pay_info.get("exchange_rate", 49.34),



            "iban_usd": pay_info.get("iban_usd", "") if show_iban else "",



            "whatsapp_phone": pay_info.get("whatsapp_phone", "05453699990")



        }



    return {"found": False}



LEADS_FILE = os.path.join(BASE_DIR, "leads.json")



def save_lead_to_disk(name: str, phone: str):



    leads = []



    if os.path.exists(LEADS_FILE):



        try:



            with open(LEADS_FILE, "r", encoding="utf-8") as f:



                leads = json.load(f)



        except Exception:



            leads = []



    leads.append({



        "name": name,



        "phone": phone,



        "time": time.strftime("%Y-%m-%d %H:%M:%S")



    })



    try:



        with open(LEADS_FILE, "w", encoding="utf-8") as f:



            json.dump(leads, f, ensure_ascii=False, indent=2)



    except Exception:



        pass



@app.post("/api/student/lead")



async def register_student_lead(name: str = Form(...), phone: str = Form("")):



    clean_name = name.strip() or "İsimsiz Aday"



    clean_phone = phone.strip()



    save_lead_to_disk(clean_name, clean_phone)



    state.log_telegram(f"📥 WEB SİTESİNDEN YENİ İNDİRME: {clean_name} ({clean_phone})", "📥")



    await state.broadcast_to_instructors({



        "type": "NEW_LEAD",



        "name": clean_name,



        "phone": clean_phone,



        "time": time.strftime("%H:%M:%S")



    })



    return {"status": "ok", "message": "Lead kaydedildi"}





@app.post("/api/student/request-rejoin")
async def api_student_request_rejoin(request: Request):
    """Ödemesi olan ancak dersten çıkmış/kopmuş öğrencinin tekrar derse katılma talebi (IBAN istemez, hocaya onay düşer)."""
    try:
        body = await request.json()
    except Exception:
        body = {}
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()

    key = find_student_key(phone) if phone else None
    if not key and name:
        for k, v in state.students_db.items():
            if isinstance(v, dict) and v.get("name", "").strip().lower() == name.lower():
                key = k
                break

    if key and key in state.students_db:
        sdata = state.students_db[key]
        if name:
            sdata["name"] = name
        sdata["paid"] = True
        sdata["stage"] = "rejoin_requested"
        sdata["rejoin_requested_at"] = time.strftime("%H:%M:%S")
    else:
        key = clean_phone_number(phone) if phone else f"misafir_{int(time.time())}"
        sdata = {
            "name": name or "Öğrenci",
            "phone": phone or key,
            "paid": True,
            "stage": "rejoin_requested",
            "connected": False,
            "registered_at": time.strftime("%H:%M:%S"),
        }
        state.students_db[key] = sdata

    state.save_to_disk()

    rejoin_msg = {
        "type": "NEW_REJOIN_REQUEST",
        "name": sdata.get("name", name or "Öğrenci"),
        "phone": sdata.get("phone", phone or key),
        "stage": "rejoin_requested",
        "paid": True,
        "timestamp": time.strftime("%H:%M:%S"),
    }
    if hasattr(state, "broadcast_to_instructors"):
        try:
            await state.broadcast_to_instructors(rejoin_msg)
        except Exception:
            pass

    return JSONResponse(
        {
            "status": "ok",
            "stage": "rejoin_requested",
            "paid": True,
            "name": sdata.get("name", name),
            "phone": sdata.get("phone", phone or key),
            "message": "Derse katılma talebiniz eğitmene iletildi. Onay bekleniyor...",
        }
    )


@app.post("/api/student/leave-session")
async def api_student_leave_session(request: Request):
    """Öğrenci dersten çıktığında veya uygulamayı kapattığında stage'i paid_waiting_rejoin yapar."""
    try:
        body = await request.json()
    except Exception:
        body = {}
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()

    key = find_student_key(phone) if phone else None
    if not key and name:
        for k, v in state.students_db.items():
            if isinstance(v, dict) and v.get("name", "").strip().lower() == name.lower():
                key = k
                break

    if key and key in state.students_db:
        v = state.students_db[key]
        v["connected"] = False
        v["left_at"] = time.strftime("%H:%M:%S")
        if v.get("paid") or v.get("stage") in ("approved", "daily_paid_waiting", "rejoin_requested"):
            v["stage"] = "paid_waiting_rejoin"
        else:
            v["stage"] = "initial"
        state.save_to_disk()
        return JSONResponse({"status": "ok", "stage": v["stage"]})

    return JSONResponse({"status": "ok"})


@app.post("/api/student/register-request")



@app.post("/api/student/request-iban")



async def register_student_request(



    name: str = Form(...),



    phone: str = Form(""),



    device: str = Form("Bilinmeyen"),



    device_choice: str = Form("pc")



):



    clean_name = name.strip() or "Değerli Öğrencimiz"



    clean_phone = clean_phone_number(phone) or phone.strip().replace(" ", "").replace("-", "")



    



    if not clean_phone:



        clean_phone = "053" + "".join(random.choices(string.digits, k=8))



    s_entry = state.students_db.get(clean_phone)



    today = get_today_str()



    if s_entry and bool(s_entry.get("paid") and s_entry.get("paid_date") == today):



        if not state.is_live:



            return {



                "status": "daily_paid_waiting",



                "stage": "rejoin_requested",



                "name": s_entry.get("name", clean_name),



                "phone": clean_phone,



                "message": "Bugünkü ders tamamlandı veya henüz başlamadı. Bugünkü ders için ödemeniz geçerlidir."



            }



        elif s_entry.get("current_code"):



            return {



                "status": "already_approved",



                "stage": "approved",



                "code": s_entry.get("current_code"),



                "name": s_entry.get("name", clean_name),



                "phone": clean_phone



            }



    # Eğer öğrenci formu doldurup IBAN istiyorsa veya yeni başvuru yapıyorsa:



    # Her halükarda hocanın ekranına tost ve bildirim fırlatılır!



    pay_info = load_payment_settings()



    # 🛑 10 KİŞİLİK KONTENJAN SINIRI KONTROLÜ



    if clean_phone not in state.students_db and len(state.students_db) >= MAX_STUDENTS_QUOTA:



        state.log_telegram(f"⚠️ KONTENJAN DOLU! Yeni Başvuru Alınamadı: {clean_name} ({clean_phone}) - ({len(state.students_db)}/{MAX_STUDENTS_QUOTA})", "⚠️")



        return {



            "status": "quota_full",



            "name": clean_name,



            "phone": clean_phone,



            "quota_max": MAX_STUDENTS_QUOTA,



            "quota_current": len(state.students_db),



            "message": f"Bilgisayar Üzerinde Sadekârlık ve Mücevher Tasarımı Eğitimi sınıf kontenjanımız (Maksimum {MAX_STUDENTS_QUOTA} Kişi) dolmuştur. Bir sonraki sınıf dönemi için lütfen WhatsApp üzerinden iletişime geçiniz."



        }



    pay_info = load_payment_settings()



    if clean_phone not in state.students_db:



        state.students_db[clean_phone] = {



            "name": clean_name,



            "phone": clean_phone,



            "paid": False,  # 🟡 ÖDEME BEKLENİYOR



            "current_code": None,



            "device_type": device,



            "device_choice": device_choice,



            "dual_device_allowed": False,  # Hoca onaylayana kadar kapalı



            "stage": "iban_requested",  # 🔒 Hoca IBAN gönderene kadar bekleyecek



            "connected": False,



            "ws": None,



            "ws_list": []



        }



    else:



        state.students_db[clean_phone]["name"] = clean_name



        state.students_db[clean_phone]["device_type"] = device



        state.students_db[clean_phone]["device_choice"] = device_choice



        if not state.students_db[clean_phone].get("paid"):



            state.students_db[clean_phone]["paid"] = False



            state.students_db[clean_phone]["current_code"] = None



            state.students_db[clean_phone]["stage"] = "iban_requested"



    state.save_to_disk()



    choice_desc = "💻 Sadece PC" if device_choice == "pc" else ("📱 Sadece Telefon" if device_choice == "mobile" else "📱+💻 Çift Cihaz (PC+Telefon)")



    state.log_telegram(f"🔔 YENİ DERS TALEBİ: {clean_name} ({clean_phone}) [{choice_desc}] - 🔒 IBAN Talebi İletildi, Hoca Bekleniyor", "🔔")



    # Eğer öğrenci 'Her İkisi (Çift Cihaz)' seçtiyse hocanın masasına özel çift cihaz bildirimi gönder



    if device_choice == "both":



        state.log_telegram(f"📱+💻 ÇİFT CİHAZ İZNİ TALEBİ: {clean_name} ({clean_phone}) hem PC hem Telefondan girmek istiyor!", "🔔")



    # Eğitmene anlık bildirim (Öğrenci tablosu hemen güncellensin)



    await state.broadcast_to_instructors({



        "type": "NEW_IBAN_REQUEST",



        "name": clean_name,



        "phone": clean_phone,



        "device": device,



        "device_choice": device_choice,



        "dual_device_allowed": state.students_db[clean_phone].get("dual_device_allowed", False),



        "stage": "iban_requested"



    })



    return {



        "status": "iban_requested",



        "name": clean_name,



        "phone": clean_phone,



        "student_name": clean_name,



        "stage": "iban_requested",



        "message": "IBAN talebiniz eğitmenin ekranına iletildi. Eğitmen onayladığında IBAN ve hesap bilgileri ekranınıza gelecektir."



    }



def clean_phone_number(phone: str) -> str:

    if not phone:

        return ""

    digits = "".join(filter(str.isdigit, str(phone)))

    if digits.startswith("90") and len(digits) == 12:

        digits = digits[2:]

    if len(digits) == 10 and digits.startswith("5"):

        digits = "0" + digits

    return digits



def find_student_key(phone: str) -> Optional[str]:

    if not phone:

        return None

    canonical = clean_phone_number(phone)

    if canonical in state.students_db:

        return canonical

    clean_phone = phone.strip().replace(" ", "").replace("-", "")

    if clean_phone in state.students_db:

        return clean_phone

    digits_phone = "".join(filter(str.isdigit, clean_phone))

    if digits_phone:

        # 1. Oncelik: Aşaması aktif olan (iban_sent, payment_sent, approved) kaydı bul

        for p, s in state.students_db.items():

            p_digits = "".join(filter(str.isdigit, p))

            if (len(p_digits) >= 10 and len(digits_phone) >= 10 and p_digits[-10:] == digits_phone[-10:]) or p_digits == digits_phone:

                if s.get("stage") in ("approved", "payment_sent", "iban_sent"):

                    return p

        # 2. Son 10 hane veya tam rakam eşleşmesi

        for p in state.students_db.keys():

            p_digits = "".join(filter(str.isdigit, p))

            if len(p_digits) >= 10 and len(digits_phone) >= 10 and p_digits[-10:] == digits_phone[-10:]:

                return p

            if p_digits == digits_phone:

                return p

            if p_digits.endswith(digits_phone) or digits_phone.endswith(p_digits):

                return p

    # Non-digit / doğrudan key / isim eşleşmesi
    raw_s = (phone or "").strip()
    if raw_s:
        if raw_s in state.students_db:
            return raw_s
        for p, s in state.students_db.items():
            if (s.get("name") and s.get("name").strip().lower() == raw_s.lower()) or (s.get("phone") and s.get("phone").strip() == raw_s):
                return p

    return None



@app.get("/api/lesson/public-status")



async def get_public_lesson_status(phone: str = ""):



    now = time.time()



    break_remaining = 0



    if state.is_in_break and state.break_start_time > 0:



        elapsed_break = now - state.break_start_time



        break_remaining = max(0, int(state.break_duration_seconds - elapsed_break))



        



    lesson_elapsed = 0



    if state.is_live and state.lesson_start_time > 0:



        current_break_elapsed = (now - state.break_start_time) if (state.is_in_break and state.break_start_time > 0) else 0



        total_breaks = getattr(state, 'total_paused_break_time', 0) + current_break_elapsed



        lesson_elapsed = max(0, int(now - state.lesson_start_time - total_breaks))



    student_data = None



    today = get_today_str()



    if phone:



        key = find_student_key(phone)



        if key and key in state.students_db:



            s = state.students_db[key]



            check_student_daily_status(s)



            is_daily_paid = bool(s.get("paid", False) and s.get("paid_date") == today)



            stg = s.get("stage", "initial")



            if is_daily_paid and stg in ("approved", "daily_paid_waiting"):



                stg = "approved"



            student_data = {



                "name": s.get("name", "Öğrenci"),



                "phone": key,



                "stage": stg,



                "paid": bool(s.get("paid", False)),



                "paid_date": s.get("paid_date"),



                "is_daily_paid": is_daily_paid,



                "code": s.get("current_code", None),



                "dual_device_allowed": bool(s.get("dual_device_allowed", False))



            }



    pay_info = load_payment_settings()



    return {



        "instructor_online": (len(state.instructor_sockets) > 0),
        "is_live": state.is_live,
        "latest_push_alert": state.latest_push_alert,



        "active_lesson_title": state.active_lesson_title,



        "is_in_break": state.is_in_break,



        "break_remaining_seconds": break_remaining,



        "lesson_elapsed_seconds": lesson_elapsed,



        "today_date": today,



        "payment_settings": {



            "bank_name": pay_info.get("bank_name", "Garanti BBVA"),



            "iban": pay_info.get("iban", ""),



            "iban_usd": pay_info.get("iban_usd", pay_info.get("iban", "")),



            "account_holder": pay_info.get("account_holder", ""),



            "price_usd": pay_info.get("price_usd", 50),



            "price_try": pay_info.get("price_try", 2493),



            "exchange_rate": pay_info.get("exchange_rate", 49.86),



            "fee_info": pay_info.get("fee_info", ""),



            "whatsapp_phone": pay_info.get("whatsapp_phone", "05453699990")



        },



        "student": student_data



    }



@app.post("/api/student/approve-and-send-code")



async def approve_and_send_code(phone: str = Form(...)):



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        sdata["paid"] = True  # 🟢 ÖDEME ONAYLANDI



        sdata["paid_date"] = get_today_str()  # 📅 Günlük Tarih Damgası



        sdata["stage"] = "approved"



        



        # 8 haneli benzersiz ders kodu üret (yoksa veya yenilemek için)



        old_code = sdata.get("current_code")



        if old_code and old_code in state.code_to_student:



            del state.code_to_student[old_code]



        otp = generate_otp()



        sdata["current_code"] = otp



        state.code_to_student[otp] = key



        state.latest_broadcast_code = otp



        state.latest_broadcast_student_name = sdata["name"]



        state.save_to_disk()



        state.log_telegram(f"✅ ÖDEME ONAYLANDI & DERSE ALINDI: {sdata['name']} -> Canlı Ders Başlatıldı", "🟢")



        msg = {



            "type": "CODE_DISPATCHED",



            "code": otp,



            "student_name": sdata["name"],



            "phone": key,



            "stage": "approved",



            "message": f"Tebrikler {sdata['name']}, ödemeniz onaylandı! Canlı derse bağlanılıyor..."



        }



        for ws in list(state.preview_sockets):



            try:



                await ws.send_json(msg)



            except Exception:



                pass



        for s in state.students_db.values():



            if s.get("ws"):



                try:



                    await s["ws"].send_json(msg)



                except Exception:



                    pass



        await state.broadcast_to_instructors({



            "type": "STUDENT_APPROVED",



            "phone": key,



            "name": sdata["name"],



            "stage": "approved",



            "code": otp



        })



        return {"status": "success", "code": otp, "name": sdata["name"]}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/student/request-dual-device")



async def request_dual_device(phone: str = Form(...), device: str = Form("Mobil Cihaz")):



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        state.log_telegram(f"📱+💻 ÇİFT CİHAZ İZNİ TALEBİ: {sdata['name']} ({key}) hem PC hem Telefondan izlemek için onay istiyor!", "🔔")



        await state.broadcast_to_instructors({



            "type": "DUAL_DEVICE_REQUEST",



            "phone": key,



            "name": sdata["name"],



            "device": device



        })



        return {"status": "success", "message": "Çift cihaz talebiniz eğitmeninize iletildi. Onaylandığında iki cihazdan aynı anda bağlanabilirsiniz."}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/student/toggle-dual-device")



async def toggle_dual_device(phone: str = Form(...)):



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        sdata["dual_device_allowed"] = not sdata.get("dual_device_allowed", False)



        status_bool = sdata["dual_device_allowed"]



        state.save_to_disk()



        



        status_text = "Çift Cihaza İZİN VERİLDİ (PC + Telefon)" if status_bool else "Tek Cihaza SINIRLANDI"



        state.log_telegram(f"⚙️ ERİŞİM GÜNCELLENDİ: {sdata['name']} ({key}) -> {status_text}", "⚙️")



        



        msg = {



            "type": "DUAL_DEVICE_STATUS",



            "dual_device_allowed": status_bool,



            "message": f"Eğitmeniniz çift cihaz kullanımını {'onayladı! Artık hem telefon hem bilgisayardan canlı izleyebilirsiniz.' if status_bool else 'tek cihaz olarak güncelledi.'}"



        }



        for ws in sdata.get("ws_list", []):



            try:



                await ws.send_json(msg)



            except Exception:



                pass



        if sdata.get("ws"):



            try:



                await sdata["ws"].send_json(msg)



            except Exception:



                pass



        for ws in list(state.preview_sockets):



            try:



                await ws.send_json(msg)



            except Exception:



                pass



        await state.broadcast_to_instructors({



            "type": "STUDENT_STAGE_UPDATED"



        })



        return {"status": "success", "dual_device_allowed": status_bool}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.get("/ERN_Akademi_iOS_Kurulum.mobileconfig")

async def get_ios_mobileconfig():

    mc_path = os.path.join(BASE_DIR, "ERN_Akademi_iOS_Kurulum.mobileconfig")

    if os.path.exists(mc_path):

        return FileResponse(mc_path, media_type="application/x-apple-aspen-config", filename="ERN_Akademi_iOS_Kurulum.mobileconfig")

    return JSONResponse(status_code=404, content={"error": "Profil bulunamadi"})



@app.get("/apple-touch-icon.png")

@app.get("/apple-touch-icon-precomposed.png")

async def get_apple_touch_icon():

    icon_path = os.path.join(BASE_DIR, "apple-touch-icon.png")

    if os.path.exists(icon_path):

        return FileResponse(icon_path, media_type="image/png")

    return JSONResponse(status_code=404, content={"error": "Icon bulunamadi"})



@app.get("/ERN_Tasarim_Ogrenci.apk")

async def get_student_apk():

    apk_path = os.path.join(BASE_DIR, "ERN_Tasarim_Ogrenci.apk")

    if os.path.exists(apk_path):

        return FileResponse(apk_path, media_type="application/vnd.android.package-archive", filename="ERN_Tasarim_Ogrenci.apk")

    return JSONResponse(status_code=404, content={"error": "APK bulunamadi"})



@app.get("/sw.js")
async def get_service_worker():
    sw_code = """
self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/ogrenci';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if ('focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
"""
    return Response(content=sw_code.strip(), media_type="application/javascript")

@app.get("/manifest.json")



async def get_pwa_manifest():



    return {



        "name": "ERN Tasarım Akademi - Canlı CAD & Mücevher Stüdyosu",



        "short_name": "ERN Akademi",



        "description": "Bilgisayar Üzerinde Sadekârlık ve Mücevher Tasarımı Canlı Atölye Eğitimi",



        "start_url": "/ogrenci",



        "display": "standalone",



        "background_color": "#070a12",



        "theme_color": "#d4af37",



        "orientation": "any",



        "icons": [



            {



                "src": "/static/icon-192.png",



                "sizes": "192x192",



                "type": "image/png",



                "purpose": "any maskable"



            },



            {



                "src": "/static/icon-512.png",



                "sizes": "512x512",



                "type": "image/png",



                "purpose": "any maskable"



            }



        ]



    }



@app.post("/api/student/toggle-payment")



async def toggle_payment(phone: str = Form(...)):



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        sdata["paid"] = not sdata.get("paid", False)



        current_status = sdata["paid"]



        



        if current_status:



            sdata["paid_date"] = get_today_str()



            sdata["stage"] = "approved"



            if not sdata.get("current_code"):



                otp = generate_otp()



                sdata["current_code"] = otp



                state.code_to_student[otp] = key



            



            otp = sdata["current_code"]



            state.latest_broadcast_code = otp



            state.latest_broadcast_student_name = sdata["name"]



            



            # Önizleme soketlerine ve öğrenciye anında fırlat



            msg = {



                "type": "CODE_DISPATCHED",



                "code": otp,



                "student_name": sdata["name"],



                "phone": key,



                "stage": "approved",



                "message": f"Tebrikler {sdata['name']}, ödemeniz onaylandı! Canlı derse bağlanılıyor..."



            }



            targets = []



            if sdata.get("ws"):



                targets.append(sdata["ws"])



            for sock in sdata.get("ws_list", []):



                if sock not in targets:



                    targets.append(sock)



            for ws in list(state.preview_sockets):



                if ws not in targets:



                    targets.append(ws)



            for sock in targets:



                try:



                    await sock.send_json(msg)



                except Exception:



                    pass



                        



            await state.broadcast_to_instructors({



                "type": "STUDENT_APPROVED",



                "phone": key,



                "name": sdata["name"],



                "stage": "approved",



                "code": otp



            })



        else:



            sdata["paid_date"] = None



            sdata["stage"] = "initial"



            old_code = sdata.get("current_code")



            if old_code and old_code in state.code_to_student:



                del state.code_to_student[old_code]



            sdata["current_code"] = None



            



            targets = []



            if sdata.get("ws"):



                targets.append(sdata["ws"])



            for sock in sdata.get("ws_list", []):



                if sock not in targets:



                    targets.append(sock)



            for ws in list(state.preview_sockets):



                if ws not in targets:



                    targets.append(ws)



                    



            lock_msg = {



                "type": "SESSION_LOCKED",



                "phone": key,



                "student_name": sdata.get("name", "Öğrenci"),



                "reason": "Ödeme onayınız kaldırıldı. Yeni ders için lütfen ödeme talebinde bulununuz.",



                "stage": "initial"



            }



            for sock in targets:



                try:



                    await sock.send_json(lock_msg)



                except Exception:



                    pass



                    



            await state.broadcast_to_instructors({



                "type": "STUDENT_UPDATED",



                "phone": key,



                "name": sdata["name"],



                "stage": "initial",



                "paid": False,



                "code": None



            })



                    



        state.save_to_disk()



        state.log_telegram(



            f"Ödeme Durumu Değişti: {sdata['name']} -> {'🟢 ÖDENDİ (Erişim Açıldı & Kod Gönderildi)' if current_status else '🔴 BEKLİYOR'}", 



            "💳"



        )



        return {"status": "success", "paid": current_status, "code": sdata.get("current_code")}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/student/delete")



async def delete_student(phone: str = Form(""), key: Optional[str] = Form(None)):

    target_key = None
    if key and key in state.students_db:
        target_key = key
    elif phone and phone in state.students_db:
        target_key = phone
    elif phone:
        target_key = find_student_key(phone)
    elif key:
        target_key = find_student_key(key)

    if not target_key and (phone or key):
        search_term = (key or phone).strip()
        for k, v in list(state.students_db.items()):
            if k == search_term or v.get("name") == search_term or v.get("phone") == search_term:
                target_key = k
                break

    key = target_key



    if key and key in state.students_db:



        sdata = state.students_db[key]



        name = sdata["name"]



        



        # Eğer aktif bağlıysa bağlantısını kes



        targets = []



        if sdata.get("ws"):



            targets.append(sdata["ws"])



        for sock in sdata.get("ws_list", []):



            if sock not in targets:



                targets.append(sock)



        for sock in targets:



            try:



                await sock.send_json({



                    "type": "SESSION_LOCKED",



                    "reason": "Öğrenci kaydınız eğitmen tarafından silindi.",



                    "stage": "initial"



                })



                await sock.close()



            except Exception:



                pass



        



        # Kod tablosundan temizle



        code = sdata.get("current_code")



        if code and code in state.code_to_student:



            del state.code_to_student[code]



        del state.students_db[key]



        state.save_to_disk()



        state.log_telegram(f"Öğrenci Silindi: {name} ({key})", "🗑️")



        return {"status": "success", "message": f"{name} silindi"}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/student/clear-all")



async def clear_all_students():



    for phone, sdata in list(state.students_db.items()):



        if sdata.get("ws"):



            try:



                await sdata["ws"].send_json({



                    "type": "SESSION_LOCKED",



                    "reason": "Öğrenci listesi sıfırlandı."



                })



                await sdata["ws"].close()



            except Exception:



                pass



    state.students_db.clear()



    state.code_to_student.clear()



    state.save_to_disk()



    state.log_telegram("Tüm Öğrenci Kayıtları Temizlendi.", "🗑️")



    return {"status": "success"}



@app.post("/api/codes/generate")



async def generate_all_codes():



    generated_codes = {}



    last_code = None



    for phone, sdata in state.students_db.items():



        if sdata["paid"]:



            # Eski kodu temizle



            old_code = sdata.get("current_code")



            if old_code and old_code in state.code_to_student:



                del state.code_to_student[old_code]



            



            otp = generate_otp()



            sdata["current_code"] = otp



            state.code_to_student[otp] = phone



            last_code = otp



            generated_codes[phone] = {



                "name": sdata["name"],



                "code": otp



            }



            state.log_telegram(f"DERS KODU ÜRETİLDİ -> {sdata['name']} ({phone}): [ {otp} ] (Gönderilmeyi Bekliyor)", "🔑")



            



    if last_code:



        state.latest_broadcast_code = last_code



        state.save_to_disk()



                



    return {"status": "success", "codes": generated_codes, "latest_code": last_code}



@app.post("/api/codes/generate-single")



async def generate_single_code(phone: str = Form(...)):



    clean_phone = phone.strip().replace(" ", "").replace("-", "")



    if clean_phone in state.students_db:



        sdata = state.students_db[clean_phone]



        old_code = sdata.get("current_code")



        if old_code and old_code in state.code_to_student:



            del state.code_to_student[old_code]



        otp = generate_otp()



        sdata["current_code"] = otp



        state.code_to_student[otp] = clean_phone



        state.latest_broadcast_code = otp



        state.latest_broadcast_student_name = sdata["name"]



        state.save_to_disk()



        state.log_telegram(f"TEKİL KOD ÜRETİLDİ -> {sdata['name']} ({clean_phone}): [ {otp} ] (Gönderilmeyi Bekliyor)", "🔑")



        return {"status": "success", "code": otp, "student_name": sdata["name"]}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/codes/send-to-student")



async def send_code_to_student(phone: str = Form(...)):



    clean_phone = phone.strip().replace(" ", "").replace("-", "")



    if clean_phone in state.students_db:



        sdata = state.students_db[clean_phone]



        sdata["paid"] = True  # Gönderildiği an ödeme onaylı kabul edilir



        code = sdata.get("current_code")



        if not code:



            code = generate_otp()



            sdata["current_code"] = code



            state.code_to_student[code] = clean_phone



        state.latest_broadcast_code = code



        state.latest_broadcast_student_name = sdata["name"]



        state.save_to_disk()



        state.log_telegram(f"📢 CANLI KOD GÖNDERİLDİ: {sdata['name']} -> [ {code} ]", "🔑")



        msg = {



            "type": "CODE_DISPATCHED",



            "code": code,



            "student_name": sdata["name"],



            "phone": clean_phone,



            "message": f"Sayın {sdata['name']}, Usta Eğitmenin Gönderdiği Canlı Ders Kodunuz Hazır!"



        }



        for ws in list(state.preview_sockets):



            try:



                await ws.send_json(msg)



            except Exception:



                pass



        return {"status": "success", "code": code, "student_name": sdata["name"]}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.post("/api/codes/broadcast")



async def broadcast_code():



    code = state.latest_broadcast_code



    if not code and state.code_to_student:



        code = list(state.code_to_student.keys())[-1]



    if not code:



        for phone, sdata in state.students_db.items():



            if sdata["paid"]:



                code = generate_otp()



                sdata["current_code"] = code



                state.code_to_student[code] = phone



                state.latest_broadcast_student_name = sdata["name"]



                break



    if not code and state.students_db:



        code = generate_otp()



        first_p = list(state.students_db.keys())[0]



        state.students_db[first_p]["current_code"] = code



        state.code_to_student[code] = first_p



        state.latest_broadcast_student_name = state.students_db[first_p]["name"]



    state.latest_broadcast_code = code



    target_name = state.latest_broadcast_student_name or "Tüm Öğrenciler"



    state.save_to_disk()



    msg = {



        "type": "CODE_DISPATCHED",



        "code": code,



        "student_name": target_name,



        "message": f"Eğitmenden 8 Haneli Canlı Ders Kodu Gönderildi!"



    }



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json(msg)



        except Exception:



            pass



    state.log_telegram(f"📢 8 HANELİ CANLI DERS KODU EKRANLARA GÖNDERİLDİ: [ {code} ] ({target_name})", "🔑")



    return {"status": "success", "code": code, "student_name": target_name}



@app.post("/api/lesson/start")



async def start_lesson(title: str = Form("Bilgisayar Destekli Sadekârlık ve Mücevher Tasarımı Canlı Eğitimi")):



    state.is_live = True



    state.active_lesson_title = title



    # Canli ders basladiginda aktif on-cagri varsa otomatik sonlandir

    if getattr(state, 'lesson_call_active', False):

        state.lesson_call_active = False

        try:

            import asyncio

            asyncio.create_task(state.broadcast_lesson_call({"type": "LESSON_CALL_STOPPED"}))

        except Exception:

            pass



    broadcast_cloud_bridge(True)



    state.chat_messages.clear()



    state.whisper_target_phone = None



    # Eğer henüz kod üretilmemiş öğrenci varsa onlar için üret



    today = get_today_str()



    generated_codes = {}



    for phone, sdata in state.students_db.items():



        if sdata.get("paid") and sdata.get("paid_date") == today:



            sdata["stage"] = "approved"



        if sdata.get("paid"):



            if not sdata.get("current_code"):



                otp = generate_otp()



                sdata["current_code"] = otp



                state.code_to_student[otp] = phone



                state.log_telegram(f"DERS KODU ÜRETİLDİ -> {sdata['name']} ({phone}): [ {otp} ]", "🔑")



            generated_codes[phone] = {



                "name": sdata["name"],



                "code": sdata["current_code"]



            }



    state.is_live = True



    state.is_in_break = False



    state.lesson_start_time = time.time()



    state.total_paused_break_time = 0



    state.break_start_time = 0



    state.log_telegram(f"CANLI DERS BAŞLATILDI (Otomatik Kayıt Devrede): '{title}'", "🚀")



    



    await state.broadcast_to_instructors({



        "type": "LESSON_STARTED",



        "title": title,



        "codes": generated_codes



    })



    for phone, sdata in state.students_db.items():



        targets = []



        if sdata.get("ws"):



            targets.append(sdata["ws"])



        for sock in sdata.get("ws_list", []):



            if sock not in targets:



                targets.append(sock)



        for sock in targets:



            try:



                await sock.send_json({



                    "type": "LESSON_STARTED",



                    "title": title



                })



            except Exception:



                pass



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json({



                "type": "LESSON_STARTED",



                "title": title



            })



        except Exception:



            pass



    return {"status": "success", "is_live": True, "codes": generated_codes}



@app.post("/api/system/shutdown")



async def shutdown_system():



    await perform_stop_lesson()



    broadcast_cloud_bridge(False)



    if state.tunnel_process:



        try:



            state.tunnel_process.terminate()



        except Exception:



            pass



    def _exit_later():



        time.sleep(0.5)



        os._exit(0)



    threading.Thread(target=_exit_later, daemon=True).start()



    return {"status": "shutting_down"}



async def perform_stop_lesson():



    state.is_live = False



    broadcast_cloud_bridge(False)



    state.is_in_break = False



    state.lesson_start_time = 0



    state.total_paused_break_time = 0



    state.break_start_time = 0



    state.whisper_target_phone = None



    state.latest_broadcast_code = None



    state.latest_broadcast_student_name = None



    



    # 1. Tum bagli ogrencilere ders bitis mesaji gonder



    today = get_today_str()



    for phone, sdata in state.students_db.items():



        sdata["connected"] = False



        is_paid_today = bool(sdata.get("paid") and sdata.get("paid_date") == today)



        if is_paid_today:



            sdata["stage"] = "daily_paid_waiting"



        



        targets = []



        if sdata.get("ws"):



            targets.append(sdata["ws"])



        for sock in sdata.get("ws_list", []):



            if sock not in targets:



                targets.append(sock)



        stop_payload = {



            "type": "LESSON_STOPPED",



            "is_daily_paid": is_paid_today,



            "stage": "rejoin_requested" if is_paid_today else sdata.get("stage", "initial"),



            "message": "Bugünkü ders tamamlandı. Eğitmenin bir sonraki dersi başlatmasını bekleyiniz." if is_paid_today else "Canlı yayın tamamlandı."



        }



        for sock in targets:



            try:



                await sock.send_json(stop_payload)



            except Exception:



                pass



        sdata["ws"] = None



        sdata["ws_list"] = []



    state.chat_messages.clear()



    state.save_to_disk()



    # Onizleme soketlerine bildir



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json({



                "type": "LESSON_STOPPED",



                "message": "Canlı yayın tamamlandı."



            })



        except Exception:



            pass



    # Egitmen ekranlarina bildir



    await state.broadcast_to_instructors({



        "type": "LESSON_STOPPED"



    })



    state.log_telegram("CANLI DERS DURDURULDU. Öğrenci onayları ve kodlar korundu.", "🛑")



@app.post("/api/instructor/window-closed")



async def instructor_window_closed():



    async def _delayed_stop():



        await asyncio.sleep(4.0)



        if len(state.instructor_sockets) == 0 and state.is_live:



            await perform_stop_lesson()



    asyncio.create_task(_delayed_stop())



    return {"status": "success"}



@app.post("/api/lesson/stop")



async def stop_lesson():



    await perform_stop_lesson()



    return {"status": "success", "is_live": False}



@app.post("/api/lesson/reset-codes")



async def reset_lesson_codes():



    state.code_to_student.clear()



    state.latest_broadcast_code = None



    state.latest_broadcast_student_name = None



    state.chat_messages.clear()



    for phone, sdata in state.students_db.items():



        sdata["current_code"] = None



        sdata["paid"] = False  # Yeni ders için hepsi onay bekliyor durumuna geçer



        sdata["paid_date"] = None



        sdata["stage"] = "initial"  # Yeni ders için aşama 1'e döner



        sdata["connected"] = False



        targets = []



        if sdata.get("ws"):



            targets.append(sdata["ws"])



        for sock in sdata.get("ws_list", []):



            if sock not in targets:



                targets.append(sock)



        for sock in targets:



            try:



                await sock.send_json({



                    "type": "SESSION_LOCKED",



                    "reason": "Yeni ders için oturum ve ödemeler sıfırlandı. Lütfen yeni ders için IBAN ve onay talebinde bulununuz.",



                    "stage": "initial"



                })



            except Exception:



                pass



        sdata["ws"] = None



        sdata["ws_list"] = []



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json({



                "type": "LESSON_STOPPED",



                "message": "Ders sıfırlandı. Yeni ders için ödeme talebi gereklidir."



            })



        except Exception:



            pass



    await state.broadcast_to_instructors({



        "type": "LESSON_STOPPED"



    })



    state.save_to_disk()



    state.log_telegram("🔄 YENİ DERS İÇİN SIFIRLANDI: Kayıtlı öğrenciler korundu, tüm kodlar ve ödemeler yeni ders için sıfırlandı.", "🔄")



    return {"status": "success", "message": "Yeni ders için kodlar sıfırlandı"}



# API: 15 Dakika İstirahat / Çay Molası Başlat



@app.post("/api/break/start")



async def start_break(duration: int = Form(15)):



    state.is_in_break = True



    state.break_start_time = time.time()



    state.break_duration_seconds = duration * 60



    



    state.log_telegram(f"☕ Usta Eğitmen {duration} Dakika İSTİRAHAT & Çay Molası Başlattı!", "☕")



    



    msg = {



        "type": "BREAK_STARTED",



        "duration_minutes": duration,



        "duration_seconds": state.break_duration_seconds,



        "start_time": state.break_start_time



    }



    



    await state.broadcast_to_instructors(msg)



            



    for sdata in state.students_db.values():



        if sdata.get("ws") and sdata.get("connected"):



            try:



                await sdata["ws"].send_json(msg)



            except Exception:



                pass



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json(msg)



        except Exception:



            pass



                



    return {"status": "success", "is_in_break": True, "duration_minutes": duration, "break_remaining_seconds": state.break_duration_seconds}



# API: Molayı Bitir ve Canlı Derse Dön



@app.post("/api/break/stop")



async def stop_break():



    if state.is_in_break and state.break_start_time > 0:



        state.total_paused_break_time += (time.time() - state.break_start_time)



    state.is_in_break = False



    state.break_start_time = 0



    state.is_live = True



    state.log_telegram("▶️ Mola Bitti, Canlı CAD Dersi Kaldığı Yerden Devam Ediyor!", "🚀")



    



    msg = {"type": "BREAK_ENDED", "is_live": True}



    



    await state.broadcast_to_instructors(msg)



            



    for sdata in state.students_db.values():



        if sdata.get("ws") and sdata.get("connected"):



            try:



                await sdata["ws"].send_json(msg)



            except Exception:



                pass



    for ws in list(state.preview_sockets):



        try:



            await ws.send_json(msg)



        except Exception:



            pass



                



    return {"status": "success", "is_in_break": False}



# API: 1 Saat Doldu Ön Uyarısı



@app.post("/api/break/warn-preparing")



async def warn_break_preparing():



    state.log_telegram("⏱️ 1 Saatlik Ders Bloğu Tamamlandı: Usta Eğitmen Molaya Hazırlanıyor...", "⏱️")



    



    msg = {



        "type": "BREAK_PREPARING_WARNING",



        "message": "1 saatlik ders bloğu tamamlandı. Usta eğitmen molaya hazırlanıyor..."



    }



    



    for sdata in state.students_db.values():



        if sdata.get("ws") and sdata.get("connected"):



            try:



                await sdata["ws"].send_json(msg)



            except Exception:



                pass



                



    return {"status": "success"}



# ===================================================================

# CANLI DERS ÇAĞRISI & YOKLAMA / DAVET SİSTEMİ APILERI

# ===================================================================



@app.post("/api/lesson-call/start")

async def start_lesson_call(

    title: str = Form(...),

    message: str = Form(""),

    require_iban: bool = Form(True),

    price: str = Form("50 USD")

):

    payment = load_payment_settings()

    state.lesson_call_active = True

    clean_title = title.strip()

    clean_msg = message.strip()

    clean_price = price.strip() if price else f"{payment.get('price_usd', 50)} USD"

    

    state.lesson_call_data = {

        "active": True,

        "title": clean_title,

        "message": clean_msg,

        "require_iban": require_iban,

        "price": clean_price,

        "iban": payment.get("iban", "TR67 0006 2000 1200 0006 6546 67"),

        "iban_name": payment.get("account_holder", "Özkan Tokalı"),

        "bank_name": payment.get("bank_name", "Garanti BBVA"),

        "created_at": time.time(),

        "responses": {}

    }

    

    msg = {

        "type": "LESSON_CALL_ACTIVE",

        "call": state.lesson_call_data

    }

    await state.broadcast_lesson_call(msg)

    state.log_telegram(f"📢 CANLI DERS ÇAĞRISI GÖNDERİLDİ: {clean_title}", "📢")



    # Arka planda ntfy.sh köprüsüne fırlat (Öğrenci Nöbetçileri ve telefonlar için)

    def _push_ntfy_call():

        try:

            call_ts = state.lesson_call_data.get("created_at", time.time())
            call_alert_id = str(int(call_ts * 1000))
            s_url = (f"{state.tunnel_url}/ogrenci" if state.tunnel_url else "") or state.active_stream_url or ""
            state.latest_push_alert = {
                "id": call_alert_id,
                "title": clean_title,
                "message": clean_msg,
                "timestamp": call_ts,
                "stream_url": s_url
            }
            ntfy_data = json.dumps({
                "event": "PUSH_ALERT",
                "alert_id": call_alert_id,
                "alert_title": clean_title,
                "alert_message": clean_msg,
                "title": clean_title,
                "message": clean_msg,
                "created_at": call_ts,
                "timestamp": int(call_ts),
                "tunnel_url": state.tunnel_url or "",
                "stream_url": s_url,
                "is_live": state.is_live,
                "instructor_online": True
            }, ensure_ascii=False).encode("utf-8")

            for ch in ["https://ntfy.sh/ern_tasarim_live_bridge_2026", "https://ntfy.sh/ern_akademi_bridge_v2"]:

                try:

                    req = urllib.request.Request(ch, data=ntfy_data, headers={'User-Agent': 'ERNStudio/2.0', 'Priority': 'high', 'Title': 'Ozkan Hoca Canli Ders'})

                    with urllib.request.urlopen(req, timeout=3.0) as resp:

                        pass

                except Exception:

                    pass

        except Exception:

            pass

    threading.Thread(target=_push_ntfy_call, daemon=True).start()



    return {"status": "success", "call": state.lesson_call_data}



@app.post("/api/lesson-call/stop")

async def stop_lesson_call():

    state.lesson_call_active = False

    if state.lesson_call_data:

        state.lesson_call_data["active"] = False

    msg = {

        "type": "LESSON_CALL_STOPPED"

    }

    await state.broadcast_lesson_call(msg)

    state.log_telegram("⏹️ Canlı Ders Çağrısı Eğitmen Tarafından Kapatıldı.", "⏹️")



    def _push_ntfy_stop():

        try:

            ntfy_data = json.dumps({

                "event": "LESSON_CALL_STOPPED",

                "time": time.time()

            }).encode("utf-8")

            for ch in ["https://ntfy.sh/ern_tasarim_live_bridge_2026", "https://ntfy.sh/ern_akademi_bridge_v2"]:

                try:

                    req = urllib.request.Request(ch, data=ntfy_data, headers={'User-Agent': 'ERNStudio/2.0', 'Priority': 'default'})

                    with urllib.request.urlopen(req, timeout=3.0) as resp:

                        pass

                except Exception:

                    pass

        except Exception:

            pass

    threading.Thread(target=_push_ntfy_stop, daemon=True).start()



    return {"status": "success", "message": "Ders çağrısı sonlandırıldı"}



@app.post("/api/lesson-call/respond")

async def respond_lesson_call(

    phone: str = Form(""),

    name: str = Form(""),

    response: str = Form(...),

    paid_reported: str = Form("false")

):

    paid_clean = False

    if isinstance(paid_reported, bool):

        paid_clean = paid_reported

    elif isinstance(paid_reported, str):

        paid_clean = paid_reported.strip().lower() in ("true", "1", "yes")



    phone_clean = phone.strip()

    name_clean = name.strip() or "Öğrenci"

    key = find_student_key(phone_clean) if phone_clean else phone_clean

    if not key:

        key = phone_clean or name_clean

        

    resp_entry = {

        "phone": phone_clean,

        "name": name_clean,

        "response": response,

        "paid_reported": paid_clean,

        "time": time.strftime("%H:%M:%S")

    }

    state.lesson_call_data["responses"][key] = resp_entry

    

    # 1. Update/register student record if paid was reported

    if paid_clean:

        if key not in state.students_db:

            state.students_db[key] = {

                "name": name_clean,

                "phone": phone_clean,

                "stage": "payment_sent",

                "registered_at": time.strftime("%Y-%m-%d %H:%M:%S"),

                "paid_reported_at": time.strftime("%H:%M:%S"),

                "paid": False,

                "connected": False

            }

        else:

            state.students_db[key]["stage"] = "payment_sent"

            state.students_db[key]["paid_reported_at"] = time.strftime("%H:%M:%S")

            if name_clean and name_clean != "Öğrenci":

                state.students_db[key]["name"] = name_clean

        state.save_to_disk()



    # 2. Broadcast to instructors for live real-time dashboard attendance update

    await state.broadcast_to_instructors({

        "type": "LESSON_CALL_RESPONSE_UPDATE",

        "student_key": key,

        "response": resp_entry,

        "summary": {

            "yes_count": sum(1 for r in state.lesson_call_data["responses"].values() if r.get("response") == "yes"),

            "no_count": sum(1 for r in state.lesson_call_data["responses"].values() if r.get("response") == "no"),

            "total": len(state.lesson_call_data["responses"])

        }

    })

    

    # 3. If paid was reported, also broadcast STUDENT_PAYMENT_SENT to trigger chime & big toast

    if paid_clean:

        await state.broadcast_to_instructors({

            "type": "STUDENT_PAYMENT_SENT",

            "name": name_clean,

            "phone": phone_clean or key,

            "amount": state.lesson_call_data.get("price", "50 USD"),

            "stage": "payment_sent"

        })

        state.log_telegram(f"💳 DERS ÇAĞRISI ÖDEME BİLDİRİMİ: {name_clean} ({phone_clean or key}) -> Ödeme/Dekont iletti!", "💳")

    else:

        status_icon = "✅" if response == "yes" else "❌"

        state.log_telegram(f"{status_icon} Yoklama Yanıtı: {name_clean} -> {'KATILIYOR' if response == 'yes' else 'KATILMIYOR'}", status_icon)

        

    return {"status": "success", "recorded": resp_entry}



@app.get("/api/lesson-call/status")

async def get_lesson_call_status():

    return {

        "active": state.lesson_call_active,

        "call": state.lesson_call_data if state.lesson_call_active else None

    }



@app.post("/api/student/kick")



async def kick_student(phone: str = Form(...)):



    key = find_student_key(phone)



    if key and key in state.students_db:



        sdata = state.students_db[key]



        sdata["connected"] = False



        targets = []



        if sdata.get("ws"):



            targets.append(sdata["ws"])



        for sock in sdata.get("ws_list", []):



            if sock not in targets:



                targets.append(sock)



        for sock in targets:



            try:



                await sock.send_json({



                    "type": "SESSION_LOCKED",



                    "reason": "Eğitmen tarafından bağlantınız kesildi.",



                    "stage": "initial"



                })



            except Exception:



                pass



        sdata["ws"] = None



        sdata["ws_list"] = []



        state.log_telegram(f"Öğrencinin Erişimi Kesildi: {sdata['name']} ({key})", "🔴")



        return {"status": "success"}



    return JSONResponse(status_code=404, content={"error": "Öğrenci bulunamadı"})



@app.get("/api/logs")



async def get_logs():



    now = time.time()



    break_remaining = 0



    if state.is_in_break and state.break_start_time > 0:



        elapsed_break = now - state.break_start_time



        break_remaining = max(0, int(state.break_duration_seconds - elapsed_break))



        



    lesson_elapsed = 0



    if state.is_live and state.lesson_start_time > 0:



        current_break_elapsed = (now - state.break_start_time) if (state.is_in_break and state.break_start_time > 0) else 0



        total_breaks = getattr(state, 'total_paused_break_time', 0) + current_break_elapsed



        lesson_elapsed = max(0, int(now - state.lesson_start_time - total_breaks))



    students_output = []



    for phone_k, v in state.students_db.items():



        if (v.get("paid") or v.get("stage") == "approved") and not v.get("current_code"):



            auto_otp = generate_otp()



            v["current_code"] = auto_otp



            v["paid"] = True



            if not v.get("stage") or v.get("stage") in ("initial", "iban_requested"):
                    v["stage"] = "paid_waiting_rejoin"



            state.code_to_student[auto_otp] = phone_k



        students_output.append({



            "name": v.get("name", "Öğrenci"),



            "phone": (v.get("phone") or "").strip() or phone_k,

            "key": phone_k,



            "paid": bool(v.get("paid", False)),



            "code": v.get("current_code"),



            "stage": v.get("stage", "paid_waiting_rejoin" if v.get("paid") else "initial"),



            "connected": bool(v.get("connected", False)),



            "device": v.get("device_type", "Windows PC"),



            "dual_device_allowed": bool(v.get("dual_device_allowed", False)),



            "device_choice": v.get("device_choice", "pc")



        })



    return {



        "logs": state.telegram_logs,



        "is_live": state.is_live,



        "instructor_online": (len(state.instructor_sockets) > 0),



        "active_lesson_title": state.active_lesson_title,



        "latest_broadcast_code": state.latest_broadcast_code,



        "latest_broadcast_student_name": state.latest_broadcast_student_name,



        "preview_count": len(state.preview_sockets),



        "is_in_break": state.is_in_break,



        "break_remaining_seconds": break_remaining,



        "lesson_elapsed_seconds": lesson_elapsed,



        "chat": state.chat_messages,



        "whisper_target": state.whisper_target_phone,



        "tunnel_url": state.tunnel_url,



        "stream_url": f"{state.tunnel_url}/ogrenci" if state.tunnel_url else None,



        "quota_max": MAX_STUDENTS_QUOTA,



        "quota_current": len(state.students_db),



        "quota_remaining": max(0, MAX_STUDENTS_QUOTA - len(state.students_db)),



        "is_quota_full": len(state.students_db) >= MAX_STUDENTS_QUOTA,



        "payment_settings": load_payment_settings(),



        "students": students_output



    }



@app.post("/api/chat/send")



async def send_chat_http(text: str = Form(...), sender: str = Form(""), role: str = Form("student"), phone: str = Form("")):



    clean_text = text.strip()



    if not clean_text:



        return {"status": "error", "message": "Boş mesaj"}



    



    sender_name = sender.strip()



    if not sender_name:



        if role == "instructor":



            sender_name = "Usta Eğitmen"



        elif phone:



            key = find_student_key(phone)



            if key and key in state.students_db:



                sender_name = state.students_db[key]["name"]



            else:



                sender_name = "Öğrenci"



        else:



            sender_name = "Öğrenci"



    chat_msg = state.add_chat(sender_name, role, clean_text)



    broadcast_data = {"type": "NEW_CHAT", "chat": chat_msg}



    await state.broadcast_to_instructors(broadcast_data)



    for s in state.students_db.values():



        if s.get("ws"):



            try:



                await s["ws"].send_json(broadcast_data)



            except Exception:



                pass



    for pws in list(state.preview_sockets):



        try:



            await pws.send_json(broadcast_data)



        except Exception:



            pass



    return {"status": "success", "chat": chat_msg}



# WebSockets



@app.websocket("/ws")



async def websocket_endpoint(websocket: WebSocket):



    await websocket.accept()



    client_phone = None



    is_instructor = False



    try:



        while True:



            data = await websocket.receive_json()



            msg_type = data.get("type")



            in_cid = str(data.get("client_id", "")).strip()



            if in_cid and not getattr(websocket, "_client_id", None):



                websocket._client_id = in_cid



            if msg_type == "REGISTER_INSTRUCTOR":



                has_cf = bool(websocket.headers.get("cf-connecting-ip") or websocket.headers.get("cf-ray"))



                client_ip = websocket.client.host if websocket.client else ""



                is_local = (client_ip in ("127.0.0.1", "localhost", "::1", "::ffff:127.0.0.1", "testclient") or



                            client_ip.startswith("192.168.") or



                            client_ip.startswith("10.") or



                            client_ip.startswith("172."))



                if has_cf or not is_local:



                    await websocket.send_json({"type": "ERROR", "message": "Yetkisiz egitmen baglantisi engellendi."})



                    await websocket.close(code=1008)



                    return



                is_instructor = True



                if state.instructor_disconnect_task and not state.instructor_disconnect_task.done():



                    state.instructor_disconnect_task.cancel()



                    state.instructor_disconnect_task = None



                state.instructor_sockets.add(websocket)

                broadcast_cloud_bridge(True, event_type="INSTRUCTOR_ONLINE")



                await websocket.send_json({"type": "INSTRUCTOR_READY", "is_live": state.is_live})



            elif msg_type == "STUDENT_PREVIEW_CONNECT":



                state.preview_sockets.add(websocket)



            elif msg_type == "STUDENT_REGISTER_REQUEST":



                name = data.get("name", "").strip() or "Değerli Öğrencimiz"



                phone = data.get("phone", "").strip()



                device = data.get("device", "Bilinmeyen Cihaz")



                clean_phone = phone.replace(" ", "").replace("-", "")



                if not clean_phone:



                    clean_phone = "053" + "".join(random.choices(string.digits, k=8))



                otp = generate_otp()



                k = find_student_key(clean_phone) or clean_phone



                s_ws_entry = state.students_db.get(k)



                # 🛑 KONTENJAN KONTROLÜ (10 Kişi Sınırı)



                if clean_phone not in state.students_db and len(state.students_db) >= MAX_STUDENTS_QUOTA:



                    await websocket.send_json({



                        "type": "QUOTA_FULL",



                        "message": f"Bilgisayar Üzerinde Sadekârlık ve Mücevher Tasarımı Eğitimi sınıf kontenjanımız (Maksimum {MAX_STUDENTS_QUOTA} Kişi) dolmuştur. Bir sonraki sınıf dönemi için lütfen WhatsApp üzerinden iletişime geçiniz."



                    })



                    continue



                if clean_phone not in state.students_db:



                    state.students_db[clean_phone] = {



                        "name": name,



                        "phone": clean_phone,



                        "paid": False,



                        "current_code": None,



                        "device_type": device,



                        "connected": False,



                        "stage": "iban_requested",



                        "ws": None



                    }



                else:



                    state.students_db[clean_phone]["name"] = name



                    state.students_db[clean_phone]["device_type"] = device



                    if not state.students_db[clean_phone].get("paid"):



                        state.students_db[clean_phone]["paid"] = False



                        state.students_db[clean_phone]["current_code"] = None



                        state.students_db[clean_phone]["stage"] = "iban_requested"



                state.save_to_disk()



                state.log_telegram(f"📝 YENİ BAŞVURU: {name} ({clean_phone}) - 🔒 IBAN Talebi Alındı", "🔒")



                await state.broadcast_to_instructors({



                    "type": "NEW_IBAN_REQUEST",



                    "name": name,



                    "phone": clean_phone,



                    "device": device,



                    "stage": "iban_requested",



                    "paid": False



                })



                await websocket.send_json({



                    "type": "IBAN_REQUEST_RECEIVED",



                    "status": "iban_requested",



                    "stage": "iban_requested",



                    "student_name": name,



                    "phone": clean_phone,



                    "message": "IBAN talebiniz eğitmenin ekranına iletildi. Eğitmen gönderdiğinde IBAN ve hesap bilgileri ekranınıza gelecektir."



                })



            elif msg_type == "STUDENT_VERIFY_CODE":



                state.preview_sockets.discard(websocket)



                code = data.get("code", "").strip()



                device = data.get("device", "Bilinmeyen Cihaz")



                phone_in = data.get("phone", "").strip()



                cid_in = data.get("client_id", "").strip()



                if cid_in:



                    websocket._client_id = cid_in



                target_phone = None



                if code in state.code_to_student:



                    target_phone = state.code_to_student[code]



                elif phone_in:



                    k = find_student_key(phone_in)



                    if k and k in state.students_db:



                        if state.students_db[k].get("paid") or state.students_db[k].get("stage") == "approved":



                            target_phone = k



                if target_phone and target_phone in state.students_db:



                    phone = target_phone



                    sdata = state.students_db[phone]



                    



                    is_student_approved = bool(sdata.get("paid") or sdata.get("stage") == "approved" or sdata.get("is_daily_paid"))



                    if not is_student_approved:



                        await websocket.send_json({



                            "type": "VERIFY_ERROR",



                            "message": "Ödeme kaydınız bulunamadı. Lütfen ödeme yapınız."



                        })



                        continue



                    if not sdata.get("paid") and is_student_approved:



                        sdata["paid"] = True



                    today = get_today_str()



                    is_paid_today = bool(sdata.get("paid") and sdata.get("paid_date") == today)



                    client_phone = phone



                    if "ws_list" not in sdata:



                        sdata["ws_list"] = []



                    now_t = time.time()



                    # Onaylı veya ödemesi yapılmış öğrencilere çift cihaz iznini (PC + Telefon) doğrudan tanı



                    if sdata.get("dual_device_allowed", False) or sdata.get("paid", False) or sdata.get("stage") == "approved":



                        # Çift Cihaz İzinli: Her iki soketi de açık tut



                        if websocket not in sdata["ws_list"]:



                            sdata["ws_list"].append(websocket)



                        sdata["ws"] = websocket



                        sdata["connected"] = True



                        curr_dev = sdata.get("device_type", "")



                        if device not in curr_dev:



                            sdata["device_type"] = f"{curr_dev} + {device}".strip(" +")



                        



                        if (now_t - sdata.get("last_join_time", 0) > 30):



                            sdata["last_join_time"] = now_t



                            state.log_telegram(f"📱+💻 ÇİFT CİHAZ AKTİF: {sdata['name']} ({device}) bağlandı!", "🟢")



                    else:



                        # Tek Cihaz Kuralı: Önceki soketi 'SESSION_DISPLACED' uyarısı ve 4001 close code ile kapat



                        # Bu sayede istemci sonsuz reconnect ping-pong döngüsüne girmeden şık bir modal gösterir



                        for old_ws in list(sdata["ws_list"]):



                            if old_ws != websocket:



                                try:



                                    await old_ws.send_json({



                                        "type": "SESSION_DISPLACED",



                                        "message": f"Oturumunuz başka bir cihazdan ({device}) açıldığı için bu cihaz duraklatıldı.",



                                        "new_device": device,



                                        "dual_device_allowed": False



                                    })



                                    await old_ws.close(code=4001, reason="DISPLACED")



                                except Exception:



                                    pass



                        if sdata.get("ws") and sdata["ws"] != websocket and sdata["ws"] not in sdata["ws_list"]:



                            try:



                                await sdata["ws"].send_json({



                                    "type": "SESSION_DISPLACED",



                                    "message": f"Oturumunuz başka bir cihazdan ({device}) açıldığı için bu cihaz duraklatıldı.",



                                    "new_device": device,



                                    "dual_device_allowed": False



                                })



                                await sdata["ws"].close(code=4001, reason="DISPLACED")



                            except Exception:



                                pass



                        sdata["ws_list"] = [websocket]



                        sdata["ws"] = websocket



                        



                        if (now_t - sdata.get("last_join_time", 0) > 30):



                            sdata["last_join_time"] = now_t



                            state.log_telegram(f"ÖĞRENCİ DERSE KATILDI: {sdata['name']} (📱 {device})", "🟢")



                        



                        sdata["connected"] = True



                        sdata["device_type"] = device



                    await websocket.send_json({



                        "type": "VERIFY_SUCCESS",



                        "name": sdata["name"],



                        "lesson_title": state.active_lesson_title,



                        "dual_device_allowed": sdata.get("dual_device_allowed", False),



                        "is_live": state.is_live



                    })



                    await state.broadcast_to_instructors({



                        "type": "STUDENT_JOINED",



                        "phone": phone,



                        "name": sdata["name"],



                        "device": sdata["device_type"],



                        "client_id": getattr(websocket, "_client_id", None) or f"{phone}_{sdata['device_type']}"



                    })



                else:



                    await websocket.send_json({



                        "type": "VERIFY_ERROR", 



                        "message": "Geçersiz veya süresi dolmuş 8 haneli ders kodu!"



                    })



            elif msg_type == "SET_WHISPER_MODE":



                target_phone = data.get("target_phone")



                state.whisper_target_phone = target_phone



                



                target_name = state.students_db[target_phone]["name"] if target_phone in state.students_db else "Sınıf"



                if target_phone:



                    state.log_telegram(f"🔒 ÖZEL SES AÇILDI: Sadece {target_name} ile birebir konuşuluyor.", "🔒")



                else:



                    state.log_telegram("📢 GENEL SES AÇILDI: Tüm sınıfa yayın yapılıyor.", "📢")



                for p, s in state.students_db.items():



                    if s["ws"]:



                        try:



                            await s["ws"].send_json({



                                "type": "VOICE_MODE_CHANGED",



                                "is_whisper_to_me": (p == target_phone),



                                "is_whisper_to_other": (target_phone is not None and p != target_phone),



                                "whisper_student_name": target_name



                            })



                        except Exception:



                            pass



            elif msg_type == "SEND_CHAT":



                text = data.get("text", "").strip()



                if not text:



                    continue



                req_sender = data.get("sender", "").strip()



                req_phone = data.get("phone", "").strip() or client_phone



                if is_instructor:



                    sender_name = "Usta Eğitmen"



                    role = "instructor"



                else:



                    role = "student"



                    if req_sender:



                        sender_name = req_sender



                    elif req_phone and req_phone in state.students_db:



                        sender_name = state.students_db[req_phone]["name"]



                    elif client_phone and client_phone in state.students_db:



                        sender_name = state.students_db[client_phone]["name"]



                    else:



                        sender_name = "Öğrenci"



                chat_msg = state.add_chat(sender_name, role, text)



                broadcast_data = {"type": "NEW_CHAT", "chat": chat_msg}



                await state.broadcast_to_instructors(broadcast_data)



                for s in state.students_db.values():



                    if s.get("ws"):



                        try:



                            await s["ws"].send_json(broadcast_data)



                        except Exception:



                            pass



                for pws in list(state.preview_sockets):



                    try:



                        await pws.send_json(broadcast_data)



                    except Exception:



                        pass



            elif msg_type == "REQUEST_WEBRTC_STREAM":



                sender_phone = client_phone or data.get("phone") or data.get("sender_phone")



                client_id = data.get("client_id") or getattr(websocket, "_client_id", None)



                if not sender_phone:



                    for p, s in state.students_db.items():



                        if s.get("ws") == websocket or websocket in s.get("ws_list", []):



                            sender_phone = p



                            break



                if sender_phone:



                    await state.broadcast_to_instructors({



                        "type": "REQUEST_WEBRTC_STREAM",



                        "sender_phone": sender_phone,



                        "phone": sender_phone,



                        "client_id": client_id



                    })



            elif msg_type == "INSTRUCTOR_AUDIO_MIX" and is_instructor:



                for s in state.students_db.values():



                    if s.get("ws"):



                        try:



                            await s["ws"].send_json(data)



                        except Exception:



                            pass



            elif msg_type in ["WEBRTC_OFFER", "WEBRTC_ANSWER", "WEBRTC_ICE"]:



                target_phone = data.get("target_phone")



                target_client_id = data.get("target_client_id")



                if is_instructor:



                    clean_tp = clean_phone_number(target_phone) if target_phone else None



                    if not clean_tp and target_client_id:



                        clean_tp = clean_phone_number(str(target_client_id).split('_')[0])



                    if clean_tp:



                        key = find_student_key(clean_tp)



                        if key and key in state.students_db:



                            s = state.students_db[key]



                            targets = []



                            # Hedef cihaz belirtilmişse (PC veya Telefon), sadece o cihaza gönder



                            if target_client_id:



                                for sock in s.get("ws_list", []):



                                    if getattr(sock, "_client_id", None) == target_client_id:



                                        targets.append(sock)



                                if not targets and s.get("ws") and getattr(s["ws"], "_client_id", None) == target_client_id:



                                    targets.append(s["ws"])



                            # Eğer spesifik soket bulunamazsa tüm öğrenci soketlerine yedek olarak ilet



                            if not targets:



                                if s.get("ws"):



                                    targets.append(s["ws"])



                                for sock in s.get("ws_list", []):



                                    if sock not in targets:



                                        targets.append(sock)



                            for sock in targets:



                                try:



                                    await sock.send_json(data)



                                except Exception:



                                    pass



                    else:



                        # Eğer target_phone belirtilmemişse tüm bağlı öğrencilere gönder



                        for s in state.students_db.values():



                            targets = []



                            if s.get("ws"):



                                targets.append(s["ws"])



                            for sock in s.get("ws_list", []):



                                if sock not in targets:



                                    targets.append(sock)



                            for sock in targets:



                                try:



                                    await sock.send_json(data)



                                except Exception:



                                    pass



                else:



                    sender_phone = client_phone or data.get("sender_phone") or data.get("phone")



                    if not sender_phone:



                        for p, s in state.students_db.items():



                            if s.get("ws") == websocket or websocket in s.get("ws_list", []):



                                sender_phone = p



                                break



                    if sender_phone:



                        data["sender_phone"] = sender_phone



                        data["phone"] = sender_phone



                        await state.broadcast_to_instructors(data)



            elif msg_type == "LESSON_STOPPED":



                if is_instructor:



                    await perform_stop_lesson()



            elif msg_type == "STUDENT_LEAVE_LESSON":



                phone = data.get("phone") or client_phone



                clean_p = clean_phone_number(phone) if phone else None



                cid = data.get("client_id") or getattr(websocket, "_client_id", None)



                if clean_p and clean_p in state.students_db:



                    sdata = state.students_db[clean_p]



                    if "ws_list" in sdata and websocket in sdata["ws_list"]:



                        sdata["ws_list"].remove(websocket)



                    if sdata.get("ws") == websocket:



                        sdata["ws"] = sdata["ws_list"][-1] if sdata.get("ws_list") else None



                    sdata["connected"] = bool(sdata.get("ws_list"))



                    sname = sdata.get("name", "Öğrenci")



                    state.log_telegram(f"🚪 Öğrenci Dersten Ayrıldı: {sname} ({clean_p})", "🚪")



                    await state.broadcast_to_instructors({



                        "type": "STUDENT_LEFT",



                        "phone": clean_p,



                        "name": sname,



                        "client_id": cid,



                        "all_devices_left": not sdata["connected"]



                    })



            elif msg_type == "RAISE_HAND" and client_phone:



                sdata = state.students_db[client_phone]



                state.log_telegram(f"✋ EL KALDIRDI: {sdata['name']} soru sormak istiyor!", "✋")



                await state.broadcast_to_instructors({



                    "type": "STUDENT_RAISED_HAND",



                    "phone": client_phone,



                    "name": sdata["name"]



                })



            elif msg_type == "REQUEST_PRIVATE_VOICE" and client_phone:



                sdata = state.students_db[client_phone]



                state.log_telegram(f"📞 ÖZEL SESLİ ARAMA İSTEĞİ: {sdata['name']} özel soru sormak istiyor!", "🔒")



                await state.broadcast_to_instructors({



                    "type": "STUDENT_REQUEST_PRIVATE_VOICE",



                    "phone": client_phone,



                    "name": sdata["name"]



                })



            elif msg_type == "CANCEL_PRIVATE_VOICE" and client_phone:



                await state.broadcast_to_instructors({



                    "type": "STUDENT_CANCELLED_PRIVATE_VOICE",



                    "phone": client_phone



                })



    except WebSocketDisconnect:



        if is_instructor:



            state.instructor_sockets.discard(websocket)



            if len(state.instructor_sockets) == 0:



                state.log_telegram("⚠️ Eğitmen penceresi kapandı/ayrıldı. 3.5 sn içinde tekrar bağlanmazsa ders otomatik sonlandırılacak.", "⚠️")



                async def _delayed_instructor_stop():



                    try:



                        await asyncio.sleep(3.5)



                        if len(state.instructor_sockets) == 0 and state.is_live:



                            await perform_stop_lesson()



                    except asyncio.CancelledError:



                        pass



                if state.instructor_disconnect_task and not state.instructor_disconnect_task.done():



                    state.instructor_disconnect_task.cancel()



                state.instructor_disconnect_task = asyncio.create_task(_delayed_instructor_stop())



        elif client_phone and client_phone in state.students_db:



            sdata = state.students_db[client_phone]



            if "ws_list" in sdata and websocket in sdata["ws_list"]:



                sdata["ws_list"].remove(websocket)



            if sdata.get("ws") == websocket:



                sdata["ws"] = sdata["ws_list"][-1] if sdata.get("ws_list") else None



            sdata["connected"] = bool(sdata.get("ws_list"))



            cid = getattr(websocket, "_client_id", None)



            sname = sdata.get("name", "Öğrenci")



            if not sdata["connected"]:



                state.log_telegram(f"🚪 Öğrenci Ayrıldı / Çevrimdışı: {sname} ({client_phone})", "🚪")



                await state.broadcast_to_instructors({



                    "type": "STUDENT_LEFT",



                    "phone": client_phone,



                    "name": sname,



                    "client_id": cid,



                    "all_devices_left": True



                })



            else:



                await state.broadcast_to_instructors({



                    "type": "STUDENT_LEFT",



                    "phone": client_phone,



                    "name": sname,



                    "client_id": cid,



                    "all_devices_left": False



                })



    finally:



        state.preview_sockets.discard(websocket)



        state.instructor_sockets.discard(websocket)



if __name__ == "__main__":



    import multiprocessing



    multiprocessing.freeze_support()



    import uvicorn



    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")



