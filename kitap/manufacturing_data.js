// MATRIXGOLD & RHINO - MANUFACTURING (ÜRETİM & 3D BASKI HAZIRLIĞI) VERİ KATALOĞU
// 8 Ana Şerit Komutu

const manufacturingRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: MANUFACTURING (ÜRETİM & 3D BASKI HAZIRLIĞI)",
    "tools": [
      {
        "id": "mfg_finger_hole_dyn",
        "name": "Finger Hole Support Dyn",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_finger_hole_dyn.png"
      },
      {
        "id": "mfg_sprue_dyn",
        "name": "Sprue Dynamic",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_sprue_dyn.png"
      },
      {
        "id": "mfg_claw_prong",
        "name": "Claw Prong",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_claw_prong.png"
      },
      {
        "id": "mfg_blend_support",
        "name": "Blend Support",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_blend_support.png"
      },
      {
        "id": "mfg_curtain",
        "name": "Curtain Support",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_curtain.png"
      },
      {
        "id": "mfg_finger_hole_std",
        "name": "Finger Hole Support",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_finger_hole_std.png"
      },
      {
        "id": "mfg_mesh_repair",
        "name": "Mesh Repair",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_mesh_repair.png"
      },
      {
        "id": "mfg_sprue",
        "name": "Sprue (Standard)",
        "hasFlyout": false,
        "icon": "icons/manufacturing/ribbon/mfg_sprue.png"
      }
    ]
  }
];

const manufacturingFlyoutDrawers = {};

const manufacturingCommandsCatalog = {
  "mfg_finger_hole_dyn": {
    "id": "mfg_finger_hole_dyn",
    "name": "Finger Hole Support Dyn",
    "trName": "Yüzük İçi Döküm Desteği (Finger Hole Support)",
    "meaning": "3D Reçine Baskıda Halka Çökmesini Önleyen Destek",
    "shortDesc": "Öğrenci Adımları: 1. Yüzük rayını veya iç deliğini seçin. 2. Finger Hole Support simgesine Sol Tıklayın. 3. Destek çubuklarının sayısını ve açısal aralıklarını belirleyin. 4. Enter veya Sağ Tık ile yüzüğün içine dökümde çekmeyi önleyen destekleri örün.",
    "icon": "icons/manufacturing/ribbon/mfg_finger_hole_dyn.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_FingerHoleSupportDyn",
    "mouseAction": "Sol Tık: Yüzük deliği içine otomatik destek dizisi kurar | Sağ Tık: Son desteği yineler",
    "commandSteps": [
      {
        "prompt": "Command: _FingerHoleSupportDyn",
        "desc": "Komut satırından Finger Hole Support Dyn aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: 3D mum veya reçine yazıcıda basılan yüzükler yerçekimi ve reçine çekmesi yüzünden ovalleşebilir! Finger Hole Support halkanın tam dairesel kalmasını garanti eder (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Finger Hole Support komutu. 3D baskı sırasında yüzüğün yuvarlak formunun bozulup çökmesini engelleyen iç destekler örer. Rayı seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _FingerHoleSupport\\nSelect ring rail curve <Enter>:",
    "cmdOptions": [
      {
        "name": "SupportCount",
        "desc": "Destek Sayısı: Halkanın çapına göre 4 veya 6 kollu örümcek destek."
      },
      {
        "name": "BreakawayPoint",
        "desc": "Kopma Ucu: Penseyle çıt diye kolayca koparılabilmesi için 0.40 mm incelme ucu."
      }
    ]
  },
  "mfg_sprue_dyn": {
    "id": "mfg_sprue_dyn",
    "name": "Sprue Dynamic",
    "trName": "Dinamik Döküm Yolluğu (Sprue Dynamic)",
    "meaning": "Parametrik Döküm Kanalı ve Ağacı Bağlantısı",
    "shortDesc": "Öğrenci Adımları: 1. Döküm yolluğu eklenecek yüzüğü seçin. 2. Sprue Dynamic simgesine Sol Tıklayın. 3. Yolluğun yüzüğe değeceği taban noktasını (genelde alt kolun en kalın yeri) tıklayın. 4. Yolluk çapını (en az 2.0 - 2.5 mm) ve konik açısını ayarlayıp Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/manufacturing/ribbon/mfg_sprue_dyn.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SprueDyn",
    "mouseAction": "Sol Tık: Parametrik döküm besleme kanalı ekler | Sağ Tık: Son yolluk çapını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _SprueDyn",
        "desc": "Komut satırından Sprue Dynamic aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Döküm yolluğunu asla ince tırnakların veya desenlerin yakınına bağlamayın! Daima yüzük alt kolunun en etli ve masif yerine bağlayın ki ocaktan dökülen altın tüm kollara eşit hızla dağılsın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Sprue Dynamic komutu. Altın dökümünün kalıba kusursuz dolması için dinamik yolluk kanalı ekler. Yüzüğün en etli alt noktasına tıklayıp Enter ile onaylayın.",
    "cmdPrompt": "Command: _SprueDynamic\\nSelect contact point on ring bottom shank <Enter>:",
    "cmdOptions": [
      {
        "name": "SprueDiameter",
        "desc": "Yolluk Çapı: Eriyik altının rahat akması için asgari 2.00 mm - 2.50 mm."
      },
      {
        "name": "ContactTaper",
        "desc": "Bağlantı Konikliği: Modelden kesilip temizlenirken taşa zarar vermeyecek daralma."
      }
    ]
  },
  "mfg_claw_prong": {
    "id": "mfg_claw_prong",
    "name": "Claw Prong",
    "trName": "Kartal Pençesi Tırnak Desteği (Claw Prong)",
    "meaning": "Sivri Uçlu Fantezi Tırnak Destekleyici",
    "shortDesc": "Öğrenci Adımları: 1. Kartal pençesi (Claw) formundaki sivri tırnak ucunu seçin. 2. Claw Prong simgesine Sol Tıklayın. 3. Sivri tırnak ucuna mikro destek temas noktasını (0.25 mm) yerleştirin. 4. Enter ile tırnak ucunun erimesini önleyin.",
    "icon": "icons/manufacturing/ribbon/mfg_claw_prong.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClawProng",
    "mouseAction": "Sol Tık: Sivri tırnak uçlarına koruyucu mikro destek koyar | Sağ Tık: Hızlı tırnak desteği",
    "commandSteps": [
      {
        "prompt": "Command: _ClawProng",
        "desc": "Komut satırından Claw Prong aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kartal pençesi tırnakların sivri uçları döküm esnasında en son dolan kısımdır ve bazen hava sıkışmasından küt kalır. Bu mikro destek hava tahliyesi görevi görerek ucun jilet gibi çıkmasını sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Claw Prong komutu. Sivri kartal pençesi tırnakların uçlarına mikro döküm desteği ekler. Tırnak ucunu seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _ClawProngSupport\\nPick sharp claw prong tip <Enter>:",
    "cmdOptions": [
      {
        "name": "TipSize",
        "desc": "Uç Nokta Çapı: 0.25 mm mikro temas noktası."
      }
    ]
  },
  "mfg_blend_support": {
    "id": "mfg_blend_support",
    "name": "Blend Support",
    "trName": "Yumuşak Geçişli Destek (Blend Support)",
    "meaning": "Kopma İzi Bırakmayan Radyüslü Destek Başı",
    "shortDesc": "Öğrenci Adımları: 1. Destek çubuğunun modele değdiği noktayı seçin. 2. Blend Support simgesine Sol Tıklayın. 3. Teğetsel geçiş yarıçapını (Radius = 0.30 mm) ayarlayın. 4. Enter ile model üzerinde çukur oluşmasını engelleyen kavisli birleşim yapın.",
    "icon": "icons/manufacturing/ribbon/mfg_blend_support.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BlendSupport",
    "mouseAction": "Sol Tık: Destek ucuna yumuşak geçiş radyüsü ekler | Sağ Tık: Son radyüsü yineler",
    "commandSteps": [
      {
        "prompt": "Command: _BlendSupport",
        "desc": "Komut satırından Blend Support aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Destek çubuğu modele dik 90 derece saplanırsa koparılırken modelin etinden parça koparır ve çukur açar! Blend Support ile konik geçiş verilirse sıfır çapakla pürüzsüz temizlenir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Blend Support komutu. Destek ayaklarının takıya değdiği noktaya yumuşak kavis ekler. Destek koparılırken modelde delik veya iz oluşmasını engeller. Enter ile onaylayın.",
    "cmdPrompt": "Command: _BlendSupport\\nSelect contact junction between support and jewelry solid <Enter>:",
    "cmdOptions": [
      {
        "name": "FilletRadius",
        "desc": "Kavis Yarıçapı: 0.20 mm - 0.35 mm yumuşak döküm geçişi."
      }
    ]
  },
  "mfg_curtain": {
    "id": "mfg_curtain",
    "name": "Curtain Support",
    "trName": "Perde Tipi İnce Destek (Curtain Support)",
    "meaning": "Sallantılı Parçalar ve Astar İçin İnce Duvar Desteği",
    "shortDesc": "Öğrenci Adımları: 1. Desteklenecek ince kenarı veya sarkık astar çizgisini seçin. 2. Curtain Support simgesine Sol Tıklayın. 3. Perde kalınlığını (0.25 - 0.30 mm) belirleyin. 4. Enter ile tabana kadar inen ince destek perdesi örün.",
    "icon": "icons/manufacturing/ribbon/mfg_curtain.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CurtainSupport",
    "mouseAction": "Sol Tık: Çizgi boyunca ince destek perdesi düşürür | Sağ Tık: Hızlı perde",
    "commandSteps": [
      {
        "prompt": "Command: _CurtainSupport",
        "desc": "Komut satırından Curtain Support aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kolye astarındaki minik deliklerin altına tek tek sütun dikmek yerine Curtain (Perde) desteği atmak baskı sonrasında tek bir cımbız hareketiyle tüm desteğin soyulmasını sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Curtain Support komutu. İnce kenarların ve havada asılı kalan astarların altına perde şeklinde ince destek duvarı örer. Kenarı seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _CurtainSupport\\nSelect edge curves to drop curtain support <Enter>:",
    "cmdOptions": [
      {
        "name": "Thickness",
        "desc": "Perde Kalınlığı: Bıçakla kolayca kesilebilmesi için 0.25 mm - 0.30 mm."
      }
    ]
  },
  "mfg_finger_hole_std": {
    "id": "mfg_finger_hole_std",
    "name": "Finger Hole Support",
    "trName": "Standart Parmak Desteği",
    "meaning": "Sabit Yüzük İçi Döküm Çaprazı",
    "shortDesc": "Öğrenci Adımları: 1. Yüzük modelini seçin. 2. Standart Parmak Desteği simgesine Sol Tıklayın. 3. Çapraz destek kollarının kalınlığını (0.80 mm) onaylayın. 4. Enter ile deliğin içine destek yerleştirin.",
    "icon": "icons/manufacturing/ribbon/mfg_finger_hole_std.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_FingerHoleSupport",
    "mouseAction": "Sol Tık: Standart artı formunda parmak desteği ekler | Sağ Tık: Son desteği yineler",
    "commandSteps": [
      {
        "prompt": "Command: _FingerHoleSupport",
        "desc": "Komut satırından Finger Hole Support aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Dökümden çıkan parçanın içindeki destekler yan keskiyle kolayca kesilip zımparalanabilecek mesafede olmalıdır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Standart Parmak Desteği komutu. Yüzüğün içine artı şeklinde sabit destek kirişleri yerleştirir. Çökme riskini ortadan kaldırır. Enter ile onaylayın.",
    "cmdPrompt": "Command: _StandardFingerHole\\nPlace cross support inside finger rail <Enter>:",
    "cmdOptions": [
      {
        "name": "CrossBar",
        "desc": "Çapraz Artı: Yüzük içine 4 yönlü takviye kirişi atar."
      }
    ]
  },
  "mfg_mesh_repair": {
    "id": "mfg_mesh_repair",
    "name": "Mesh Repair",
    "trName": "3D Baskı Öncesi STL Onarımı (Mesh Repair)",
    "meaning": "Üretim Öncesi Son Hata Denetimi ve Delik Yamama",
    "shortDesc": "Öğrenci Adımları: 1. Yazıcıya gönderilecek STL takı modelini seçin. 2. Mesh Repair simgesine Sol Tıklayın. 3. 'Auto Repair' (Otomatik Onar) butonuna basın. 4. Çakışan yüzeyler, açık kenarlar ve ters normaller tek hamlede temizlenir.",
    "icon": "icons/manufacturing/ribbon/mfg_mesh_repair.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshRepair",
    "mouseAction": "Sol Tık: Üretim öncesi tek tıkla STL onarımı yapar | Sağ Tık: Hata raporunu açar",
    "commandSteps": [
      {
        "prompt": "Command: _MeshRepair",
        "desc": "Komut satırından Mesh Repair aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Modelinizi reçine yazıcıya atmadan önceki son kontrol durağınız burasıdır! Yeşil onay işaretini görmeden baskı başlatmayın; reçine ve zaman israfını önleyin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mesh Repair komutu. 3D baskı öncesinde modeldeki tüm delikleri kapatır ve baskı çökmelerini önler. Modeli seçip otomatik onarımı çalıştırın.",
    "cmdPrompt": "Command: _MfgMeshRepair\\nRun automated pre-print mesh check and repair <Enter>:",
    "cmdOptions": [
      {
        "name": "AutoFix",
        "desc": "Otomatik Düzelt: Tüm açık kenarları ve bozuk üçgenleri temizler."
      },
      {
        "name": "ExportSTL",
        "desc": "STL İhracı: Onarılan dosyayı doğrudan 3D yazıcı klasörüne kaydeder."
      }
    ]
  },
  "mfg_sprue": {
    "id": "mfg_sprue",
    "name": "Sprue (Standard)",
    "trName": "Standart Döküm Yolluğu (Sprue Standard)",
    "meaning": "Sabit Çaplı Döküm Ağacı Besleme Borusu",
    "shortDesc": "Öğrenci Adımları: 1. Sprue simgesine Sol Tıklayın. 2. Yolluğun başlangıç ve bitiş noktalarını tıklayın. 3. Boru çapını (ör: 2.20 mm) girin. 4. Enter veya Sağ Tık ile yolluğu gövdeye kaynatın.",
    "icon": "icons/manufacturing/ribbon/mfg_sprue.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Sprue",
    "mouseAction": "Sol Tık: Düz hatlı döküm yolluğu çizer | Sağ Tık: Son ölçüyü yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Sprue",
        "desc": "Komut satırından Sprue (Standard) aracını başlatın."
      },
      {
        "prompt": "Select target geometry: <Enter>",
        "desc": "İlgili nesneleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Hesaplama hassasiyeti (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Ağır erkek yüzüklerinde tek yolluk yetmeyebilir. Yan kolların dolması için ana yolluktan yanlara 1.20 mm'lik ince besleme kılcalları (hava kanalı) çekmek döküm boşluklarını önler (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Sprue Standard komutu. Döküm ağacına bağlanacak sabit çaplı yolluk borusu ekler. Başlangıç ve bitiş noktalarını tıklayıp Enter ile tamamlayın.",
    "cmdPrompt": "Command: _Sprue\\nPick sprue start point on model <Enter>:",
    "cmdOptions": [
      {
        "name": "Diameter",
        "desc": "Boru Çapı: 1.80 mm - 3.00 mm arası döküm ağacı standardı."
      }
    ]
  }
};

function findManufacturingCommand(cmdId) {
  if (!cmdId) return null;
  if (manufacturingCommandsCatalog[cmdId]) return manufacturingCommandsCatalog[cmdId];
  return null;
}

window.manufacturingRibbonRows = manufacturingRibbonRows;
window.manufacturingFlyoutDrawers = manufacturingFlyoutDrawers;
window.manufacturingCommandsCatalog = manufacturingCommandsCatalog;
window.findManufacturingCommand = findManufacturingCommand;
