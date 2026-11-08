// MATRIXGOLD & RHINO - TOOLS (KUYUMCU TAKI ARAÇLARI) VERİ KATALOĞU
// 21 Ana Şerit Komutu

const toolsRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: TOOLS (KUYUMCU TAKI ARAÇLARI)",
    "tools": [
      {
        "id": "tls_match_attrib",
        "name": "Match Attributes",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_match_attrib.png"
      },
      {
        "id": "tls_signet_adv",
        "name": "Signet Advanced",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_signet_adv.png"
      },
      {
        "id": "tls_texture_3d",
        "name": "Texture 3D",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_texture_3d.png"
      },
      {
        "id": "tls_cathedral_ring",
        "name": "Cathedral Ring",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_cathedral_ring.png"
      },
      {
        "id": "tls_join",
        "name": "Join",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_join.png"
      },
      {
        "id": "tls_raster_to_vector",
        "name": "Raster To Vector",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_raster_to_vector.png"
      },
      {
        "id": "tls_text_objects",
        "name": "Text Objects",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_text_objects.png"
      },
      {
        "id": "tls_text_on_curve",
        "name": "Text On Curve",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_text_on_curve.png"
      },
      {
        "id": "tls_ring_rail",
        "name": "Ring Rail",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_ring_rail.png"
      },
      {
        "id": "tls_outside_ring_rail",
        "name": "Outside Ring Rail",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_outside_ring_rail.png"
      },
      {
        "id": "tls_bypass_ring_rail",
        "name": "Bypass Ring Rail",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_bypass_ring_rail.png"
      },
      {
        "id": "tls_bypass_outside_rail",
        "name": "Bypass Outside Ring Rail",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_bypass_outside_rail.png"
      },
      {
        "id": "tls_split_shank",
        "name": "Split Shank",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_split_shank.png"
      },
      {
        "id": "tls_profile_placer",
        "name": "Profile Placer",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_profile_placer.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: TOOLS (KUYUMCU TAKI ARAÇLARI)",
    "tools": [
      {
        "id": "tls_profile_cap",
        "name": "Profile Cap",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_profile_cap.png"
      },
      {
        "id": "tls_gems_in_channel",
        "name": "Gems In Channel",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_gems_in_channel.png"
      },
      {
        "id": "tls_signet",
        "name": "Signet",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_signet.png"
      },
      {
        "id": "tls_tech_report",
        "name": "Tech Report",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_tech_report.png"
      },
      {
        "id": "tls_rebuild",
        "name": "Rebuild",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_rebuild.png"
      },
      {
        "id": "tls_ring_resizer",
        "name": "Ring Resizer",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_ring_resizer.png"
      },
      {
        "id": "tls_gem_map",
        "name": "Gem Map",
        "hasFlyout": false,
        "icon": "icons/tools/ribbon/tls_gem_map.png"
      }
    ]
  }
];

const toolsFlyoutDrawers = {};

const toolsCommandsCatalog = {
  "tls_match_attrib": {
    "cmdOptions": [{"name": "Layer", "desc": "Katman Eşleme: Hedef nesneyi kaynak nesnenin katmanına taşır."}, {"name": "Color", "desc": "Renk Eşleme: Metal veya taş rengini birebir kopyalar."}],
    "cmdPrompt": "Command: _MatchProperties\nSelect source object:\nSelect destination objects:",
    "id": "tls_match_attrib",
    "name": "Match Attributes",
    "trName": "Nitelik Eşle",
    "meaning": "Nitelik Eşle",
    "shortDesc": "Öğrenci Adımları: 1. Nitelikleri alınacak kaynak nesneyi seçin. 2. Match Attributes simgesine Sol Tıklayın. 3. Kopyalanacak özellikleri (Katman, Renk, Materyal) işaretleyin. 4. Hedef nesnelere tıklayıp Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_match_attrib.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MatchProperties",
    "mouseAction": "Sol Tık: Nitelik eşleme modunu açar | Sağ Tık: Son eşlemeyi uygular",
    "commandSteps": [
      {
        "prompt": "Command: _MatchProperties",
        "desc": "Komut satırından Match Attributes aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Karmaşık yüzüklerde tırnak veya taşları tek tek boyamak yerine Match Properties ile saniyeler içinde aynı katmana ve renge alabilirsiniz.",
    "ttsText": "Match Attributes komutu. Nesneler arasında katman, renk ve malzeme özelliklerini kopyalar."
  },
  "tls_signet_adv": {
    "cmdOptions": [{"name": "SideEmboss", "desc": "Yan Kabartma: Kolların yanına arma veya desen yerleştirir."}, {"name": "ComfortInterior", "desc": "Konforlu Parmak İçi: Yüzüğün parmağa temas eden içini ipeksi bombe yapar."}],
    "cmdPrompt": "Command: _SignetAdvanced\nSet advanced signet parameters:",
    "id": "tls_signet_adv",
    "name": "Signet Advanced",
    "trName": "Gelişmiş Şövalye Yüzük",
    "meaning": "Gelişmiş Şövalye Yüzük",
    "shortDesc": "Öğrenci Adımları: 1. Signet Advanced simgesine Sol Tıklayın. 2. İleri seviye asimetrik kollar ve özel kesim tabla formlarını tanımlayın. 3. Yan kabartma veya arma kanallarını parametrik ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_signet_adv.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SignetRing",
    "mouseAction": "Sol Tık: Gelişmiş şövalye panelini açar | Sağ Tık: Son tasarımı yineler",
    "commandSteps": [
      {
        "prompt": "Command: _SignetRing",
        "desc": "Komut satırından Signet Advanced aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Ağır gramajlı erkek yüzüklerinde konforlu iç bombe (comfort fit) vermek parmağın terlemesini ve yüzüğün dönmesini engeller.",
    "ttsText": "Signet Advanced komutu. İleri düzey asimetrik ve desenli şövalye yüzükleri tasarlar."
  },
  "tls_texture_3d": {
    "cmdOptions": [{"name": "Height", "desc": "Doku Yüksekliği: Kabartmanın yüzeyden dışa çıkıntı mesafesi (min 0.35 mm)."}, {"name": "Pattern", "desc": "Desen Şablonu: Güverse, petek, dalga veya piramit faset."}],
    "cmdPrompt": "Command: _Texture3D\nSelect surface for 3D texture placement ( Height=0.40  Spacing=0.60 ):",
    "id": "tls_texture_3d",
    "name": "Texture 3D",
    "trName": "3D Yüzey Dokusu / Rölyef",
    "meaning": "3D Yüzey Dokusu / Rölyef",
    "shortDesc": "Öğrenci Adımları: 1. Doku uygulanacak yüzeyi seçin. 2. Texture 3D simgesine Sol Tıklayın. 3. Kütüphaneden doku desenini (Güverse / Granulation, Piramit, Faset) seçin. 4. Yükseklik ve sıklık değerlerini girip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_texture_3d.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Texture3D",
    "mouseAction": "Sol Tık: 3D doku panelini açar | Sağ Tık: Son dokuyu uygular",
    "commandSteps": [
      {
        "prompt": "Command: _Texture3D",
        "desc": "Komut satırından Texture 3D aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Güverse (kürecik) dokularında kabartma yüksekliği en az 0.35 mm olmalıdır. 0.30 mm altındaki dokular cila çarkında silinir ve parlar, deseni kaybolur!",
    "ttsText": "Texture 3D komutu. Yüzeylere güverse, piramit ve faset gibi üç boyutlu kuyumcu dokuları kaplar."
  },
  "tls_cathedral_ring": {
    "cmdOptions": [{"name": "ShoulderHeight", "desc": "Omuz Yüksekliği: Kolların taş kadehine tırmandığı zirve yüksekliği."}, {"name": "ArchWidth", "desc": "Kemer Genişliği: Katedral kemerinin iç açıklık mesafesi."}],
    "cmdPrompt": "Command: _CathedralRing\nSelect rail and set shoulder height ( Height=4.50  ArchWidth=1.80 ):",
    "id": "tls_cathedral_ring",
    "name": "Cathedral Ring",
    "trName": "Katedral Yüzük Kolu",
    "meaning": "Katedral Yüzük Kolu",
    "shortDesc": "Öğrenci Adımları: 1. Cathedral Ring simgesine Sol Tıklayın. 2. Yüzük ölçüsünü ve ana kadeh yüksekliğini belirleyin. 3. Katedral omuzlarının tepeye tırmanma açısını ve kemer açıklığını ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak parametrik katedral montürü oluşturun.",
    "icon": "icons/tools/ribbon/tls_cathedral_ring.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CathedralRing",
    "mouseAction": "Sol Tık: Katedral montür sihirbazını açar | Sağ Tık: Son ayarlarla montür üretir",
    "commandSteps": [
      {
        "prompt": "Command: _CathedralRing",
        "desc": "Komut satırından Cathedral Ring aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Katedral kollarda taş kadehinin altındaki ışık penceresini en az 1.50 mm açık tutun. Taşın altına ışık girmezse pırlanta mat ve cansız görünür.",
    "ttsText": "Cathedral Ring komutu. Katedral omuzlu klasik ve modern tektaş yüzük montürleri üretir."
  },
  "tls_join": {
    "cmdOptions": [{"name": "Tolerance", "desc": "Birleştirme Toleransı: İki uç arasındaki maksimum kabul edilebilir boşluk (0.001 mm)."}],
    "cmdPrompt": "Command: _Join\nSelect objects to join:",
    "id": "tls_join",
    "name": "Join",
    "trName": "Birleştir (Join)",
    "meaning": "Birleştir (Join)",
    "shortDesc": "Öğrenci Adımları: 1. Birleştirilecek temas halindeki eğrileri veya yüzeyleri seçin. 2. Join simgesine Sol Tıklayın (veya Ctrl+J). 3. Komut satırında '1 closed curve' veya 'closed solid polysurface' yazdığını kontrol edin. 4. İşlem tamamlandı.",
    "icon": "icons/tools/ribbon/tls_join.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Join",
    "mouseAction": "Sol Tık: Birleştirir (Join) | Sağ Tık: Patlatır (Explode)",
    "commandSteps": [
      {
        "prompt": "Command: _Join",
        "desc": "Komut satırından Join aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Çizgileri birleştirdikten sonra komut satırında mutlaka 'closed' (kapalı) yazmalıdır. 'Open curve' kalırsa o çizgiden katı yapılamaz, dökümde delik kalır!",
    "ttsText": "Join komutu. Birbirine değen eğri veya yüzeyleri tek parça halinde birleştirir."
  },
  "tls_raster_to_vector": {
    "cmdOptions": [{"name": "Threshold", "desc": "Siyah-Beyaz Eşiği: Resimdeki koyu hatları çizgiye dönüştürme hassasiyeti."}, {"name": "SmoothCorners", "desc": "Köşe Yumuşatma: Piksel pürüzlerini pürüzsüz eğriye çevirir."}],
    "cmdPrompt": "Command: _RasterToVector\nSelect bitmap image to trace ( Threshold=128  Tolerance=0.01 ):",
    "id": "tls_raster_to_vector",
    "name": "Raster To Vector",
    "trName": "Resimden Çizgi Çıkar (Trace)",
    "meaning": "Resimden Çizgi Çıkar (Trace)",
    "shortDesc": "Öğrenci Adımları: 1. Raster To Vector simgesine Sol Tıklayın. 2. Müşterinin gönderdiği logo veya çizim resmini (PNG/JPG) seçin. 3. Siyah-beyaz eşik (Threshold) ayarını netleşene kadar kaydırın. 4. Convert'e basın; resim düzenlenebilir CAD vektör çizgilerine dönüşür.",
    "icon": "icons/tools/ribbon/tls_raster_to_vector.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Trace",
    "mouseAction": "Sol Tık: Resim vektörleştirme aracını açar | Sağ Tık: Son ayarları yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Trace",
        "desc": "Komut satırından Raster To Vector aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşteriden gelen el çizimi veya logo fotoğraflarını dakikalarca elle çizmek yerine tek tıkla kusursuz kesim çizgilerine dönüştürür.",
    "ttsText": "Raster To Vector komutu. Resim ve logoları otomatik olarak düzenlenebilir vektör eğrilerine dönüştürür."
  },
  "tls_text_objects": {
    "cmdOptions": [{"name": "Solid=Yes", "desc": "Katı Gövde: Yazıyı döküme uygun 3D katı harf haline getirir."}, {"name": "Thickness", "desc": "Maden Kalınlığı: Harflerin et payı (minimum 1.00 mm - 1.20 mm)."}],
    "cmdPrompt": "Command: _TextObject\nSet text string and height ( Font=Arial  Solid=Yes  Thickness=1.20 ):",
    "id": "tls_text_objects",
    "name": "Text Objects",
    "trName": "Metin Nesneleri",
    "meaning": "Metin Nesneleri",
    "shortDesc": "Öğrenci Adımları: 1. Text Objects simgesine Sol Tıklayın. 2. Yazılacak metni kutuya yazın ve fontu seçin. 3. Solid=Yes işaretleyip yükseklik ve kalınlık girin (örn: Kalınlık: 1.20 mm). 4. Ekranda yerleştireceğiniz noktayı tıklayın veya F4 ile merkeze oturtun.",
    "icon": "icons/tools/ribbon/tls_text_objects.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_TextObject",
    "mouseAction": "Sol Tık: 3D yazı sihirbazını açar | Sağ Tık: Son yazı ayarlarını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _TextObject",
        "desc": "Komut satırından Text Objects aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: İsimlik kolyelerde harf et kalınlığını asla 1.00 mm'nin altına düşürmeyin; ince harfler dökümden sonra yamulur ve cila testeresinde kopar.",
    "ttsText": "Text Objects komutu. İsimlik ve harf kolyeler için üç boyutlu katı yazılar üretir."
  },
  "tls_text_on_curve": {
    "cmdOptions": [{"name": "Offset", "desc": "Raydan Uzaklık: Yazının çizginin içine mi dışına mı yazılacağını belirler."}, {"name": "Alignment", "desc": "Hizalama: Ortala, sola veya sağa yasla."}],
    "cmdPrompt": "Command: _TextOnCurve\nSelect curve for text flow:",
    "id": "tls_text_on_curve",
    "name": "Text On Curve",
    "trName": "Eğri Üzerine Yazı",
    "meaning": "Eğri Üzerine Yazı",
    "shortDesc": "Öğrenci Adımları: 1. Metin yazılacak eğriyi (örn: yüzük iç halkası) seçin. 2. Text On Curve simgesine Sol Tıklayın. 3. İsmi veya tarihi yazıp harf yüksekliğini girin (örn: 1.2 mm). 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak yazıyı kavis boyunca bükün.",
    "icon": "icons/tools/ribbon/tls_text_on_curve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_TextOnCurve",
    "mouseAction": "Sol Tık: Eğri üzeri yazı panelini açar | Sağ Tık: Son metni uygular",
    "commandSteps": [
      {
        "prompt": "Command: _TextOnCurve",
        "desc": "Komut satırından Text On Curve aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük içine isim veya tarih yazarken harfleri içe 0.35 mm derinlikte batırıp Boolean Difference ile oyun; böylece altın dökümde yazı gömme ve net çıkar.",
    "ttsText": "Text On Curve komutu. Yüzük rayı veya kavisli çizgiler boyunca bükülen yazılar oluşturur."
  },
  "tls_ring_rail": {
    "cmdOptions": [{"name": "Region", "desc": "Ülke Ölçü Sistemi: Türkiye ve Avrupa (EU), ABD (USA) veya Asya ölçü tablolarından birini seçer."}, {"name": "Size", "desc": "Parmak Ölçüsü: Standart yüzük numarasını belirler (örn: 14 numara iç çap 17.20 mm'dir)."}, {"name": "Center=F4", "desc": "Orijin Kilidi: Halkanın tam 0,0,0 merkezinde kilitli kalmasını sağlar."}, {"name": "CrossSection", "desc": "Profil Formu: Daire rayın formunu yuvarlak, konforlu bombe veya eliptik ayarlar."}],
    "cmdPrompt": "Command: _RingRail\nSelect rail standard or size ( Region=Europe  Size=14  Center=F4 ):",
    "id": "tls_ring_rail",
    "name": "Ring Rail",
    "trName": "Yüzük Ölçüsü Halkası (Ring Rail)",
    "meaning": "Yüzük Ölçüsü Halkası (Ring Rail)",
    "shortDesc": "Öğrenci Adımları: 1. Ring Rail simgesine Sol Tıklayın. 2. Açılan MatrixGold parametrik panelinden bölge standardını (Europe / TR / USA) seçin. 3. Yüzük ölçüsünü belirleyin (Türk standart bayan: 14 numara = 17.20 mm iç çap). 4. Apply veya Enter'a (veya ekranda Sağ Tık / Space tuşuna) basın. F4 merkezli ölçü halkası ekrana yerleşir.",
    "icon": "icons/tools/ribbon/tls_ring_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_RingRail",
    "mouseAction": "Sol Tık: Parametrik yüzük ölçü panelini açar | Sağ Tık: Son seçilen ölçüyle anında halka oluşturur",
    "commandSteps": [
      {
        "prompt": "Command: _RingRail",
        "desc": "Komut satırından Ring Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: MatrixGold'un kalbidir; tüm yüzük modelleri bu halkanın etrafına örülür! Döküm ve cila firesi için müşterinin istediği ölçünün çeyrek boy büyüğünü (örn: 14 yerine 14.25) seçmek atölyede yüzüğün tam ölçüye oturmasını sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Ring Rail komutu. Parmak ölçüsüne göre parametrik yüzük iç dairesi açar. Başlamak için komuta sol tıklayın, bölgeyi ve ölçüyü seçip Enter veya Sağ Tık ile onaylayın. Kuyumcu püf noktası: Cila ve döküm payı için çeyrek boy büyük çizim yapmak montürün tam oturmasını sağlar."
  },
  "tls_outside_ring_rail": {
    "cmdOptions": [{"name": "BottomThickness", "desc": "Alt Kol Kalınlığı: Yüzüğün alt koldaki et payı (minimum 1.20 mm - 1.40 mm)."}, {"name": "SideThickness", "desc": "Yan Kol Kalınlığı: Yüzüğün sağ ve sol yanak et payı (standart 1.60 mm - 2.0 mm)."}, {"name": "TopThickness", "desc": "Üst Tepe Kalınlığı: Taş montürünün oturacağı üst tabla yüksekliği."}],
    "cmdPrompt": "Command: _OutsideRingRail\nSelect base ring rail ( BottomThickness=1.40  SideThickness=1.80  TopThickness=2.50 ):",
    "id": "tls_outside_ring_rail",
    "name": "Outside Ring Rail",
    "trName": "Dış Yüzük Halkası",
    "meaning": "Dış Yüzük Halkası",
    "shortDesc": "Öğrenci Adımları: 1. Ring Rail sahnedeyken Outside Ring Rail simgesine Sol Tıklayın. 2. Alt kol, yan kollar ve üst tepe et kalınlığı mesafelerini girin (alt: 1.40 mm, üst: 2.20 mm). 3. Sarı kulakçıkları fareyle çekerek yüzüğün dış formunu şekillendirin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_outside_ring_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_OutsideRingRail",
    "mouseAction": "Sol Tık: Dış yüzük kılavuz panelini açar | Sağ Tık: Son kalınlıklarla dış halkayı ekler",
    "commandSteps": [
      {
        "prompt": "Command: _OutsideRingRail",
        "desc": "Komut satırından Outside Ring Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Dış ray, yüzük kolunun hem alt hem üst kalınlık sınırını baştan belirler. Üst kolda bombeyi 2.50 mm tutmak tektaş kadehi montürünün sağlam oturmasını sağlar.",
    "ttsText": "Outside Ring Rail komutu. Yüzüğün dış hat sınırını ve et kalınlığı kılavuzunu tanımlar."
  },
  "tls_bypass_ring_rail": {
    "cmdOptions": [{"name": "Angle", "desc": "Çapraz Açısı: Kolların birbirinden uzaklaşma derecesi."}, {"name": "Overlap", "desc": "Bindirme Payı: Üst üste binen kol uzunluğu."}],
    "cmdPrompt": "Command: _BypassRingRail\nSelect bypass angle and separation ( Angle=30  Overlap=5.0 ):",
    "id": "tls_bypass_ring_rail",
    "name": "Bypass Ring Rail",
    "trName": "Bypass (Sarmal) Yüzük Halkası",
    "meaning": "Bypass (Sarmal) Yüzük Halkası",
    "shortDesc": "Öğrenci Adımları: 1. Bypass Ring Rail simgesine Sol Tıklayın. 2. Parmak ölçüsünü seçin. 3. Kolların birbiri üzerinden geçeceği çapraz ayrılma açısını ve bindirme mesafesini ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak çapraz iç rayı oluşturun.",
    "icon": "icons/tools/ribbon/tls_bypass_ring_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BypassRail",
    "mouseAction": "Sol Tık: Bypass yüzük rayı açar | Sağ Tık: Son açıyla tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BypassRail",
        "desc": "Komut satırından Bypass Ring Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yılan, sarmaşık veya iki taşlı bypass yüzüklerde iki kolun dökümde birbirine yapışmaması için aralarında en az 0.80 mm boşluk bırakılmalıdır.",
    "ttsText": "Bypass Ring Rail komutu. Kolların çapraz geçtiği sarmaşık ve yılan yüzükler için iç ölçü halkası açar."
  },
  "tls_bypass_outside_rail": {
    "cmdOptions": [{"name": "Thickness", "desc": "Et Kalınlığı: Çapraz kolların döküm et payı."}],
    "cmdPrompt": "Command: _BypassOutsideRingRail\nSelect bypass inner rail:",
    "id": "tls_bypass_outside_rail",
    "name": "Bypass Outside Ring Rail",
    "trName": "Bypass Dış Halka",
    "meaning": "Bypass Dış Halka",
    "shortDesc": "Öğrenci Adımları: 1. Bypass iç rayı seçin. 2. Bypass Outside Rail simgesine Sol Tıklayın. 3. Çapraz kollara et kalınlığı verin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak dış sınırı oluşturun.",
    "icon": "icons/tools/ribbon/tls_bypass_outside_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BypassOutsideRail",
    "mouseAction": "Sol Tık: Dış bypass rayı açar | Sağ Tık: Son ayarlarla onaylar",
    "commandSteps": [
      {
        "prompt": "Command: _BypassOutsideRail",
        "desc": "Komut satırından Bypass Outside Ring Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Çapraz kollarda dış hat çizgisi tepeye doğru inceliyorsa döküm akışını sağlamak için uç kısmı en az 1.00 mm'de tutun.",
    "ttsText": "Bypass Outside Ring Rail komutu. Çapraz kolların dış kılavuz çizgisini çıkarır."
  },
  "tls_split_shank": {
    "cmdOptions": [{"name": "SplitHeight", "desc": "Ayrılma Yüksekliği: Kolun parmak yüksekliğinin yüzde kaçında çatallanacağını belirler (örn: %50 veya %60)."}, {"name": "Spread", "desc": "Açıklık Mesafesi: İki kolun taş kadehine otururken aralarındaki milimetrik genişlik."}],
    "cmdPrompt": "Command: _SplitShank\nSelect rail curve ( SplitHeight=50%  Spread=6.0 ):",
    "id": "tls_split_shank",
    "name": "Split Shank",
    "trName": "Çatallı Yüzük Kolu",
    "meaning": "Çatallı Yüzük Kolu",
    "shortDesc": "Öğrenci Adımları: 1. Ring Rail seçiliyken Split Shank simgesine Sol Tıklayın. 2. Kolların alttan tek gelip yukarıda ikiye ayrılacağı çatallanma noktasını belirleyin. 3. Ayrılma mesafesini ve profil formunu ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_split_shank.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SplitShank",
    "mouseAction": "Sol Tık: İkiye ayrılan kol panelini açar | Sağ Tık: Son ayarlarla çatallı kol ekler",
    "commandSteps": [
      {
        "prompt": "Command: _SplitShank",
        "desc": "Komut satırından Split Shank aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Çatallı kollarda iki kolun birleştiği V noktasında döküm çapağı kalmaması için dip kavise en az 0.60 mm radyus verilmelidir.",
    "ttsText": "Split Shank komutu. Alttan tek parça gelip tepeye doğru ikiye ayrılan çatallı kollar oluşturur."
  },
  "tls_profile_placer": {
    "cmdOptions": [{"name": "Width", "desc": "Kol Genişliği: Yüzük kolunun parmak boyunca olan eni (standart: 2.0 mm - 3.5 mm)."}, {"name": "Thickness", "desc": "Et Kalınlığı: Yüzük kolunun alt ve yan et payı (alt kolda min 1.20 mm, yan kolda 1.40 mm)."}, {"name": "Mirror=Yes", "desc": "Simetri Kilidi: Sağ kolda yapılan ölçü ve açı değişikliklerini sol kola otomatik yansıtır."}, {"name": "AutoSweep", "desc": "Otomatik Örme: Profiller yerleştiğinde yüzeyi tek tıkla otomatik örer."}],
    "cmdPrompt": "Command: _ProfilePlacer\nSelect rail curve for profile placement ( Width=2.50  Thickness=1.40  Mirror=Yes ):",
    "id": "tls_profile_placer",
    "name": "Profile Placer",
    "trName": "Profil Yerleştirici (Profile Placer)",
    "meaning": "Profil Yerleştirici (Profile Placer)",
    "shortDesc": "Öğrenci Adımları: 1. Ring Rail seçiliyken Profile Placer simgesine Sol Tıklayın. 2. Açılan kütüphaneden kesit profilini (Comfort Fit, Flat, D-Shape) seçin. 3. Kol genişliği (Width) ve kalınlığını (Thickness) girin (alt kol min 1.20-1.40 mm). 4. Sarı kontrol oklarını sürükleyerek kolun tepeye doğru genişlemesini ayarlayın ve Enter / Sağ Tık ile onaylayın.",
    "icon": "icons/tools/ribbon/tls_profile_placer.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ProfilePlacer",
    "mouseAction": "Sol Tık: Profil yerleştirici panelini açar | Sağ Tık: Son profili doğrudan uygular",
    "commandSteps": [
      {
        "prompt": "Command: _ProfilePlacer",
        "desc": "Komut satırından Profile Placer aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Alt koldaki et kalınlığını asla 1.20 mm'nin altına düşürmeyin! Alt kol cila ve taşlama gördükten sonra 1.00 mm'ye iner; 1.00 mm altı yüzükler parmakta kolayca yamulur ve taşları düşürür.",
    "ttsText": "Profile Placer komutu. Yüzük rayının üzerine kesit profilleri yerleştirir. Genişlik ve kalınlık değerlerini belirleyip Enter veya Sağ Tık ile onaylayın. Kuyumcu püf noktası: Alt kolda et kalınlığı minimum 1.20 milimetre olmalıdır."
  },
  "tls_profile_cap": {
    "cmdOptions": [{"name": "CapType=Dome", "desc": "Bombeli Kapak: Kol ucunu yumuşak estetik bombe ile kapatır."}, {"name": "CapType=Flat", "desc": "Düz Kapak: Tam düzlemsel kesitle kapatır."}],
    "cmdPrompt": "Command: _ProfileCap\nSelect open surface edge to cap ( CapType=Flat/Dome ):",
    "id": "tls_profile_cap",
    "name": "Profile Cap",
    "trName": "Profil Kapağı",
    "meaning": "Profil Kapağı",
    "shortDesc": "Öğrenci Adımları: 1. Ucu açıkta kalan profil yüzeyini seçin. 2. Profile Cap simgesine Sol Tıklayın. 3. Kapak tipini (Düz / Bombeli) seçin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak ucu döküme uygun kapalı manifold katı haline getirin.",
    "icon": "icons/tools/ribbon/tls_profile_cap.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Cap",
    "mouseAction": "Sol Tık: Açık profil ucuna kapak örer | Sağ Tık: Son kapak tipini uygular",
    "commandSteps": [
      {
        "prompt": "Command: _Cap",
        "desc": "Komut satırından Profile Cap aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Açık uçlu yüzük kollarında ve kadeh bağlantılarında açık yüzey bırakmayın; katı (solid) olmayan modeller döküm dilimleme yazılımlarında hata verir.",
    "ttsText": "Profile Cap komutu. Yüzük kollarının açıkta kalan uçlarını bombeli veya düz kapakla kapatarak katı yapar."
  },
  "tls_gems_in_channel": {
    "cmdOptions": [{"name": "GemSize", "desc": "Taş Boyutu: Kanal içine dizilecek taşların milimetrik çapı."}, {"name": "Spacing", "desc": "Taş Boşluğu: İki taş faseti arasındaki güvenli mesafe (0.08 mm - 0.12 mm)."}, {"name": "SeatDepth", "desc": "Yatak Derinliği: Taş tablasının kanal üst kenarından içeri gömülme derinliği."}],
    "cmdPrompt": "Command: _GemsInChannel\nSelect channel curve ( GemSize=1.50  Spacing=0.10  SeatDepth=0.30 ):",
    "id": "tls_gems_in_channel",
    "name": "Gems In Channel",
    "trName": "Kanal İçi Taş Dizimi",
    "meaning": "Kanal İçi Taş Dizimi",
    "shortDesc": "Öğrenci Adımları: 1. Kanal yüzeyini veya kılavuz rayını seçin. 2. Gems In Channel simgesine Sol Tıklayın. 3. Taş boyutunu ve taşlar arası tırnak boşluğunu (örn: 0.10 mm) girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; taşlar kanal tabanına hizalı olarak otomatik dizilir.",
    "icon": "icons/tools/ribbon/tls_gems_in_channel.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ChannelBuilder",
    "mouseAction": "Sol Tık: Kanal içi taşlama motorunu açar | Sağ Tık: Son taş boyuyla dizer",
    "commandSteps": [
      {
        "prompt": "Command: _ChannelBuilder",
        "desc": "Komut satırından Gems In Channel aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kanal taş diziminde taş kemeri (girdle) kanal rayından en az 0.25 mm aşağıda kalmalıdır; taş yüzeyle sıfır olursa mıhlayıcı madeni taşın üstüne çakamaz ve taş düşer.",
    "ttsText": "Gems In Channel komutu. Kanal montürlerin içine taşları otomatik hizalar ve oturma paylarını belirler."
  },
  "tls_signet": {
    "cmdOptions": [{"name": "Shape", "desc": "Tabla Formu: Yastık (Cushion), Yuvarlak, Oval veya Sekizgen mühür tablası."}, {"name": "Width/Height", "desc": "Tabla Ebatları: Üst plakanın milimetrik ölçüleri."}, {"name": "Hollow=Yes", "desc": "İç Boşaltma: Yüzüğün içini döküm gramajını hafifletmek için otomatik boşaltır."}],
    "cmdPrompt": "Command: _SignetRing\nSelect table shape and dimensions ( Shape=Cushion  Width=14  Height=12 ):",
    "id": "tls_signet",
    "name": "Signet",
    "trName": "Şövalye Yüzük (Klasik)",
    "meaning": "Şövalye Yüzük (Klasik)",
    "shortDesc": "Öğrenci Adımları: 1. Signet simgesine Sol Tıklayın. 2. Yüzük ölçüsünü girin (erkek standart: 20-24 numara). 3. Üst taş tablasının şeklini (Kare, Oval, Yuvarlak, Sekizgen) ve ölçüsünü (örn: 12x14 mm) seçin. 4. Yan kol et kalınlıklarını ayarlayıp Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_signet.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Signet",
    "mouseAction": "Sol Tık: Şövalye yüzük motorunu açar | Sağ Tık: Son ölçülerle mühür yüzüğü ekler",
    "commandSteps": [
      {
        "prompt": "Command: _Signet",
        "desc": "Komut satırından Signet aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Erkek mühür yüzüklerinde üst plaka kalınlığı en az 1.20 mm olmalıdır; üzerine lazer veya kalemle aile arması kazındığında delinmemelidir. Alt kol içi ise mutlaka Hollow ile boşaltılmalıdır.",
    "ttsText": "Signet komutu. Erkek şövalye ve mühür yüzükleri üretir. Taş tablası ve iç boşaltma parametrelerini yönetir."
  },
  "tls_tech_report": {
    "cmdOptions": [{"name": "MetalType", "desc": "Maden Türü: 14K, 18K, 22K Altın, 950 Platin veya 925 Gümüş yoğunluk hesabı."}, {"name": "CastShrinkage", "desc": "Döküm Firesi: Madenin soğurken çekme payı yüzdesi (standart: %2.5 - %3.0)."}],
    "cmdPrompt": "Command: _TechReport\nSelect objects for technical report ( Metal=14K_Yellow  PriceCalc=Yes ):",
    "id": "tls_tech_report",
    "name": "Tech Report",
    "trName": "Teknik Rapor / Gram & Taş",
    "meaning": "Teknik Rapor / Gram & Taş",
    "shortDesc": "Öğrenci Adımları: 1. Bitmiş tasarımı seçin. 2. Tech Report simgesine Sol Tıklayın. 3. Maden ayarını (14K, 18K Altın, 925 Gümüş, Platin) seçin. 4. Ekrana döküm gramajı, toplam taş adedi ve karat ağırlığı detaylı teknik fiş olarak gelir.",
    "icon": "icons/tools/ribbon/tls_tech_report.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_TechReport",
    "mouseAction": "Sol Tık: Teknik maliyet raporunu açar | Sağ Tık: Raporu yeniler",
    "commandSteps": [
      {
        "prompt": "Command: _TechReport",
        "desc": "Komut satırından Tech Report aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşteriye fiyat vermeden önce maden gramajını gramı gramına hesaplar. Döküm firesini (%3) hesaba katmayı asla unutmayın!",
    "ttsText": "Tech Report komutu. Modelin döküm gramajını ve taş karatlarını hesaplayarak teknik üretim fişi çıkarır."
  },
  "tls_rebuild": {
    "cmdOptions": [{"name": "PointCount", "desc": "Nokta Sayısı: Eğri veya yüzeyi taşıyan kontrol noktası adedi."}, {"name": "Degree=3", "desc": "Eğri Derecesi: Yumuşak akıcı kavisler için standart 3. derecedir."}, {"name": "DeleteInput=Yes", "desc": "Eski Geometriyi Sil: Dalgalı eski formu silip yenisini bırakır."}],
    "cmdPrompt": "Command: _Rebuild\nSelect curve or surface to rebuild ( PointCount=8  Degree=3 ):",
    "id": "tls_rebuild",
    "name": "Rebuild",
    "trName": "Kafesi Yeniden Kur (Rebuild)",
    "meaning": "Kafesi Yeniden Kur (Rebuild)",
    "shortDesc": "Öğrenci Adımları: 1. Eğri veya yüzeyi seçin. 2. Rebuild simgesine Sol Tıklayın. 3. Point Count (Nokta Sayısı: 8-12) ve Degree (Derece: 3) girin. 4. Preview ile formu kontrol edip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/tools/ribbon/tls_rebuild.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Rebuild",
    "mouseAction": "Sol Tık: Rebuild panelini açar | Sağ Tık: Hızlı pürüzsüzleştirme",
    "commandSteps": [
      {
        "prompt": "Command: _Rebuild",
        "desc": "Komut satırından Rebuild aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzey örmeden önce çizgileri mutlaka Rebuild (8 nokta, 3 derece) yapın. Noktaları eşit olmayan çizgilerden örülen yüzeylerde dalga ve ışık kırılması olur.",
    "ttsText": "Rebuild komutu. Eğri ve yüzeylerin kontrol noktalarını yeniden yapılandırarak pürüzsüzleştirir."
  },
  "tls_ring_resizer": {
    "cmdOptions": [{"name": "PreserveGems=Yes", "desc": "Taşları Koruma: Taşların çapını, tırnakların formunu ve kasa yuvasını %100 sabit tutar."}, {"name": "TargetSize", "desc": "Hedef Ölçü: Yüzüğün dönüştürüleceği yeni parmak numarası."}, {"name": "DeformBottomOnly", "desc": "Sadece Alt Kolu Esnet: Deformasyonu sadece alt kolda yaparak üst montürü korur."}],
    "cmdPrompt": "Command: _ScaleByFinger\nSelect jewelry objects to resize ( CurrentSize=14  TargetSize=18  PreserveGems=Yes ):",
    "id": "tls_ring_resizer",
    "name": "Ring Resizer",
    "trName": "Yüzük Ölçüsü Değiştirici",
    "meaning": "Yüzük Ölçüsü Değiştirici",
    "shortDesc": "Öğrenci Adımları: 1. Bitmiş yüzük modelini ekranda seçin. 2. Ring Resizer (Scale by Finger) simgesine Sol Tıklayın. 3. Mevcut ölçüyü (örn: 14) ve dönüştürülecek yeni ölçüyü (örn: 18) girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın. Program üstteki taşları ve tırnakları ASLA bozmadan sadece alt kolu uzatarak ölçüyü günceller!",
    "icon": "icons/tools/ribbon/tls_ring_resizer.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_RingResizer",
    "mouseAction": "Sol Tık: Akıllı ölçü büyütme/küçültme panelini açar | Sağ Tık: Son ölçü değişimini uygular",
    "commandSteps": [
      {
        "prompt": "Command: _RingResizer",
        "desc": "Komut satırından Ring Resizer aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Normal Scale komutu kullanılırsa taşlar da büyür ve yuvalar bozulur! Yüzük ölçüsü değiştirirken MUTLAKA Ring Resizer (Scale by Finger) kullanılmalıdır. Böylece 1 karatlık pırlanta yuvası 1 karat kalır, sadece kol boyu değişir.",
    "ttsText": "Ring Resizer komutu. Taşları ve tırnak yuvalarını bozmadan yüzük parmak numarasını büyütür veya küçültür."
  },
  "tls_gem_map": {
    "cmdOptions": [{"name": "ColorCodeByCut", "desc": "Kesim Renk Kodu: Farklı taş boylarını farklı canlı renklerle işaretler."}, {"name": "ShowLabels", "desc": "Ölçü Etiketleri: Taşların üzerine milimetrik boylarını yazar."}],
    "cmdPrompt": "Command: _GemMap\nSelect gems to map:",
    "id": "tls_gem_map",
    "name": "Gem Map",
    "trName": "Taş Haritası / Yerleşim Planı",
    "meaning": "Taş Haritası / Yerleşim Planı",
    "shortDesc": "Öğrenci Adımları: 1. Üzerinde taş dizili olan modeli seçin. 2. Gem Map simgesine Sol Tıklayın. 3. Tablo çıktısı formatını seçin. 4. Ekrana taşların boyutlarına göre renk kodlu yerleşim planı ve karat adet tablosu dökülür.",
    "icon": "icons/tools/ribbon/tls_gem_map.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemMap",
    "mouseAction": "Sol Tık: Taş yerleşim haritası çıkarır | Sağ Tık: Raporu kopyalar",
    "commandSteps": [
      {
        "prompt": "Command: _GemMap",
        "desc": "Komut satırından Gem Map aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Mıhlayıcıya ve taş tedarikçisine sipariş verirken hangi boydan kaç adet taş takılacağını sıfır hatayla gösteren atölye şemasıdır.",
    "ttsText": "Gem Map komutu. Modeldeki taşların boyut ve adet haritasını renk kodlarıyla çıkarır."
  }
};

function findToolsCommand(cmdId) {
  if (!cmdId) return null;
  if (toolsCommandsCatalog[cmdId]) return toolsCommandsCatalog[cmdId];
  return null;
}

window.toolsRibbonRows = toolsRibbonRows;
window.toolsFlyoutDrawers = toolsFlyoutDrawers;
window.toolsCommandsCatalog = toolsCommandsCatalog;
window.findToolsCommand = findToolsCommand;
