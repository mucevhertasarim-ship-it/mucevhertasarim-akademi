// MATRIXGOLD & RHINO - ANALYZE (ANALİZ, TARTIM VE TEŞHİS) VERİ KATALOĞU
// 13 Ana Şerit Komutu + 5 Alt Çekmece + 34 Alt Araç

const analyzeRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: ANALYZE (ANALİZ, TARTIM VE TEŞHİS)",
    "tools": [
      {
        "id": "anz_curve",
        "name": "Curve",
        "hasFlyout": true,
        "flyoutKey": "curve",
        "subCount": 4,
        "icon": "icons/analyze/ribbon/anz_curve.png"
      },
      {
        "id": "anz_surface",
        "name": "Surface",
        "hasFlyout": true,
        "flyoutKey": "surface",
        "subCount": 10,
        "icon": "icons/analyze/ribbon/anz_surface.png"
      },
      {
        "id": "anz_mass_props",
        "name": "Mass Properties",
        "hasFlyout": true,
        "flyoutKey": "mass_props",
        "subCount": 8,
        "icon": "icons/analyze/ribbon/anz_mass_props.png"
      },
      {
        "id": "anz_bounding_box",
        "name": "Bounding Box",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_bounding_box.png"
      },
      {
        "id": "anz_length",
        "name": "Length",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_length.png"
      },
      {
        "id": "anz_distance",
        "name": "Distance",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_distance.png"
      },
      {
        "id": "anz_angle",
        "name": "Angle",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_angle.png"
      },
      {
        "id": "anz_radius",
        "name": "Radius",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_radius.png"
      },
      {
        "id": "anz_diagnostics",
        "name": "Diagnostics",
        "hasFlyout": true,
        "flyoutKey": "diagnostics",
        "subCount": 6,
        "icon": "icons/analyze/ribbon/anz_diagnostics.png"
      },
      {
        "id": "anz_curvature_circle",
        "name": "Curvature Circle",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_curvature_circle.png"
      },
      {
        "id": "anz_direction",
        "name": "Direction",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_direction.png"
      },
      {
        "id": "anz_center_object",
        "name": "Center Object",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/analyze/ribbon/anz_center_object.png"
      },
      {
        "id": "anz_edge_tools",
        "name": "Edge Tools",
        "hasFlyout": true,
        "flyoutKey": "edge_tools",
        "subCount": 6,
        "icon": "icons/analyze/ribbon/anz_edge_tools.png"
      }
    ]
  }
];

const analyzeFlyoutDrawers = {
  "curve": {
    "key": "curve",
    "title": "Curve Analysis",
    "trTitle": "Eğri Süreklilik & Teğetlik Analizi",
    "count": 4,
    "subIds": [
      "anz_crv_graph_on",
      "anz_crv_graph_off",
      "anz_crv_continuity",
      "anz_crv_deviation"
    ]
  },
  "surface": {
    "key": "surface",
    "title": "Surface Analysis",
    "trTitle": "Yüzey Kalite & Kalıp Analizleri",
    "count": 10,
    "subIds": [
      "anz_srf_box_edit",
      "anz_srf_curvature",
      "anz_srf_draft_angle",
      "anz_srf_emap",
      "anz_srf_zebra",
      "anz_srf_pt_dev",
      "anz_srf_uv",
      "anz_srf_pt_grid",
      "anz_srf_thick_on",
      "anz_srf_thick_off"
    ]
  },
  "mass_props": {
    "key": "mass_props",
    "title": "Mass Properties",
    "trTitle": "Hacim, Gram & Ağırlık Merkezi",
    "count": 8,
    "subIds": [
      "anz_mass_area",
      "anz_mass_area_centroid",
      "anz_mass_area_moments",
      "anz_mass_hydrostatics",
      "anz_mass_volume",
      "anz_mass_vol_centroid",
      "anz_mass_vol_moments",
      "anz_mass_compute"
    ]
  },
  "edge_tools": {
    "key": "edge_tools",
    "title": "Edge Tools",
    "trTitle": "Kenar ve Delik Teşhisi",
    "count": 6,
    "subIds": [
      "anz_edge_show",
      "anz_edge_split",
      "anz_edge_merge",
      "anz_edge_join_naked",
      "anz_edge_unjoin",
      "anz_edge_rebuild"
    ]
  },
  "diagnostics": {
    "key": "diagnostics",
    "title": "Diagnostics",
    "trTitle": "Model Sağlık ve Hata Teşhisi",
    "count": 6,
    "subIds": [
      "anz_diag_audit",
      "anz_diag_check",
      "anz_diag_check_solid",
      "anz_diag_bad_objects",
      "anz_diag_info",
      "anz_diag_list"
    ]
  }
};

const analyzeCommandsCatalog = {
  "anz_curve": {
    "id": "anz_curve",
    "name": "Curve",
    "trName": "Eğri Geometrisi Analizi",
    "meaning": "Açık Çizgi & Çakışan Nokta Taraması",
    "shortDesc": "Öğrenci Adımları: 1. Analiz edilecek eğriyi seçin. 2. Curve Analysis simgesine Sol Tıklayın. 3. Komut satırında eğrinin kapalı (Closed) mı açık (Open) mı olduğunu, derece (Degree) ve kontrol noktası sayısını görün. Enter ile çıkın.",
    "icon": "icons/analyze/ribbon/anz_curve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CurvatureGraph",
    "mouseAction": "Sol Tık: Eğrinin matematiksel sağlığını listeler | Sağ Tık: Son eğri analizini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _CurvatureGraph",
        "desc": "Curve analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük kolu veya profil örerken eğrilerinizin uçları birbirine tam kaynamadıysa (Open Curve) katı elde edemezsiniz. Bu komutla eğrinin Closed Curve olduğundan emin olun (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Curve Analysis komutu. Çizgilerinizin kapalı olup olmadığını ve nokta sayısını denetler. Eğriyi seçip Enter ile raporu görün.",
    "cmdPrompt": "Command: _What\\nSelect curve for geometric evaluation <Enter>:",
    "cmdOptions": [
      {
        "name": "EndPoints",
        "desc": "Uç Noktalar: Açık eğrilerin başlangıç ve bitiş noktalarını ekranda işaretler."
      }
    ]
  },
  "anz_surface": {
    "id": "anz_surface",
    "name": "Surface",
    "trName": "Yüzey Süreklilik ve Kalınlık Analizi",
    "meaning": "Zebra & Eğrilik Yansıma Analizi",
    "shortDesc": "Öğrenci Adımları: 1. Yüzeyi seçin. 2. Surface Analysis simgesine Sol Tıklayın. 3. Zebra çizgilerini açarak yüzeydeki dalgalanmaları ve cila yansımalarını inceleyin. Çizgiler kırılmadan akıyorsa yüzey kusursuzdur. Enter ile kapatın.",
    "icon": "icons/analyze/ribbon/anz_surface.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Zebra",
    "mouseAction": "Sol Tık: Yüzeye optik zebra şeritleri yansıtır | Sağ Tık: Analizi kapatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zebra",
        "desc": "Surface analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Aynalı bombeli alyanslarda ve fantezi bileziklerde cilacının yüzeyi dalgasız parlatabilmesi için Zebra analiziyle yüzey geçişlerinin G2 (akıcı) süreklilikte olduğundan emin olun (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Surface Analysis komutu. Yüzey üzerine zebra şeritleri yansıtarak dalgalanma ve cila kalitesini denetler. Yüzeyi seçip Enter ile analizi başlatın.",
    "cmdPrompt": "Command: _Zebra\\nSelect surfaces for visual zebra analysis <Enter>:",
    "cmdOptions": [
      {
        "name": "StripeThickness",
        "desc": "Şerit Kalınlığı: Yansıma çizgilerinin sıklığı."
      },
      {
        "name": "Direction",
        "desc": "Yön: Şeritlerin yatay veya dikey akışı."
      }
    ]
  },
  "anz_mass_props": {
    "cmdOptions": [
      {
        "name": "14K_Gold",
        "desc": "14 Ayar Altın: Yoğunluk 13.07 g/cm³ ile gramaj çarpanı."
      },
      {
        "name": "18K_Gold",
        "desc": "18 Ayar Altın: Yoğunluk 15.58 g/cm³ ile gramaj çarpanı."
      },
      {
        "name": "925_Silver",
        "desc": "925 Ayar Gümüş: Yoğunluk 10.36 g/cm³ ile gramaj çarpanı."
      },
      {
        "name": "Platinum",
        "desc": "Platin: Yoğunluk 21.45 g/cm³ ile gramaj çarpanı."
      }
    ],
    "cmdPrompt": "Command: _Volume\\nSelect closed polysurfaces for volume calculation <Enter>:",
    "id": "anz_mass_props",
    "name": "Mass Properties",
    "trName": "Kütle Özellikleri & Gram Tartım (Mass Properties)",
    "meaning": "Maden Gramajı ve Hacim Hesaplama",
    "shortDesc": "Öğrenci Adımları: 1. Tartılacak katı modeli seçin. 2. Mass Properties simgesine Sol Tıklayın. 3. Komut satırında çıkan Volume (Hacim mm³) değerine bakın veya açılan tabloda 14K, 18K, 925 Gümüş veya Platin metalini seçin. 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/analyze/ribbon/anz_mass_props.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Volume",
    "mouseAction": "Sol Tık: Seçili katının hacmini ve tahmini maden gramajını hesaplar | Sağ Tık: Son tartımı yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Volume",
        "desc": "Mass Properties analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Modelinizin gramını doğru ölçebilmek için modelin mutlaka kapalı katı (Closed Polysurface) olması gerekir. Döküm ve zımpara-cila firesi için hesaplanan gramaja en az %5 - %7 atölye payı ekleyin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mass Properties komutu. Modelinizin hacmini ve 14 ayar, 18 ayar altın veya gümüş maden gramajını anında hesaplar. Kapalı katıyı seçip Enter ile tartımı görün."
  },
  "anz_bounding_box": {
    "id": "anz_bounding_box",
    "name": "Bounding Box",
    "trName": "Sınır Kutusu Boyutları (Bounding Box)",
    "meaning": "Parçanın Dış X-Y-Z Ebatları",
    "shortDesc": "Öğrenci Adımları: 1. Ölçülecek takı modelini seçin. 2. Bounding Box simgesine Sol Tıklayın. 3. Enter'a basın. Modelin etrafını saran şeffaf bir dış kutu ve X, Y, Z maksimum boyutları ekrana gelir.",
    "icon": "icons/analyze/ribbon/anz_bounding_box.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BoundingBox",
    "mouseAction": "Sol Tık: Modeli içine alan en küçük dış kutuyu üretir | Sağ Tık: Son kutuyu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _BoundingBox",
        "desc": "Bounding Box analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Modelinizi 3D yazıcıya göndermeden veya kalıp kauçuğu kestirmeden önce Bounding Box ile maksimum en, boy ve yükseklik ölçülerini not alın; böylece üretim maliyetini önceden bilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Bounding Box komutu. Parçanın kapladığı en, boy ve yükseklik dış boyutlarını belirler. Nesneyi seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _BoundingBox\\nCoordinate system ( World  CPlane ):",
    "cmdOptions": [
      {
        "name": "Output",
        "desc": "Çıktı Biçimi: Kutu katısı (Solid), tel kafes (Curves) veya sadece komut satırı ölçüleri."
      }
    ]
  },
  "anz_length": {
    "id": "anz_length",
    "name": "Length",
    "trName": "Eğri / Çevre Uzunluğu (Length)",
    "meaning": "Çizgi ve Ray Boyu Ölçümü",
    "shortDesc": "Öğrenci Adımları: 1. Ölçülecek eğriyi veya yüzük rayını seçin. 2. Length simgesine Sol Tıklayın. 3. Komut satırında eğrinin net çevre uzunluğunu (Length = xx.xx mm) görün. 4. Enter veya Sağ Tık ile komutu bitirin.",
    "icon": "icons/analyze/ribbon/anz_length.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Length",
    "mouseAction": "Sol Tık: Eğrinin toplam boyunu hesaplar | Sağ Tık: Komuttan çıkar",
    "commandSteps": [
      {
        "prompt": "Command: _Length",
        "desc": "Length analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük tasarımlarını düz plaka halinde çizip bükmeden önce, parmak ölçüsünün net çevre boyunu Length ile ölçün (Örn: 14 boy = 54.0 mm, 16 boy = 56.0 mm). Plakanız bu boya birebir eşit olmalıdır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Length komutu. Çizgilerin veya yüzük raylarının toplam çevre uzunluğunu milimetre olarak hesaplar. Eğriyi seçip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _Length\\nSelect curves for length calculation <Enter>:",
    "cmdOptions": [
      {
        "name": "UnitScale",
        "desc": "Birim: Milimetre cinsinden hassas yay uzunluğu."
      }
    ]
  },
  "anz_distance": {
    "cmdOptions": [
      {
        "name": "SnapOsnap",
        "desc": "Kenetlenme: Near, Mid, End veya Cen noktalarını yakalayarak sıfır hata ile ölçer."
      }
    ],
    "cmdPrompt": "Command: _Distance\\nFirst point for distance measurement <Enter>:",
    "id": "anz_distance",
    "name": "Distance",
    "trName": "Mesafe ve Et Kalınlığı Ölçümü (Distance)",
    "meaning": "İki Nokta Arası Net Cetvel",
    "shortDesc": "Öğrenci Adımları: 1. Distance simgesine Sol Tıklayın. 2. Ölçmek istediğiniz birinci noktayı Sol Tık ile seçin. 3. İkinci noktayı Sol Tık ile seçin. 4. Komut satırında çıkan Distance (Mesafe) milimetre değerini okuyun.",
    "icon": "icons/analyze/ribbon/anz_distance.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Distance",
    "mouseAction": "Sol Tık: İki nokta arası net mesafeyi ölçer | Sağ Tık: Son ölçüm komutunu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Distance",
        "desc": "Distance analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Döküm yapılacak her modelde en kritik kural: Hiçbir yüzey et kalınlığı 0.30 mm (300 mikron) altına inmemelidir! Distance komutuyla yüzüğün en ince kenarlarını ve astar yuvalarını mutlaka kontrol edin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Distance komutu. İki nokta arasındaki net mesafeyi ölçer. Başlangıç ve bitiş noktalarını tıklayın; et kalınlığının 0.30 milimetrenin üzerinde olduğundan emin olun."
  },
  "anz_angle": {
    "id": "anz_angle",
    "name": "Angle",
    "trName": "Açı Ölçümü (Angle)",
    "meaning": "İki Doğru veya Düzlem Arası Açı",
    "shortDesc": "Öğrenci Adımları: 1. Angle simgesine Sol Tıklayın. 2. Açının köşe tepe noktasını tıklayın. 3. Birinci kolun ucunu ve ikinci kolun ucunu tıklayın. 4. Komut satırındaki net açı derecesini (Angle = xx.xx°) görün.",
    "icon": "icons/analyze/ribbon/anz_angle.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Angle",
    "mouseAction": "Sol Tık: İki eksen arasındaki açıyı hesaplar | Sağ Tık: Son açıyı yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Angle",
        "desc": "Angle analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kauçuk kalıptan çıkacak modellerde duvarlara en az 1.5 - 2 derece çıkış açısı (Draft Angle) verilmelidir. Dik 90 derece duvarlar kauçuğa yapışıp yırtılabilir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Angle komutu. Çizgiler veya yüzeyler arasındaki açıyı derece olarak ölçer. Noktaları tıklayın ve komut satırından açıyı okuyun.",
    "cmdPrompt": "Command: _Angle\\nStart of first line for angle measurement <Enter>:",
    "cmdOptions": [
      {
        "name": "TwoLines",
        "desc": "İki Çizgi: Doğrudan iki çizgiye tıklayarak aralarındaki açıyı ölçer."
      }
    ]
  },
  "anz_radius": {
    "id": "anz_radius",
    "name": "Radius",
    "trName": "Yarıçap Ölçümü (Radius)",
    "meaning": "Daire ve Taş Yuvası Yarıçapı",
    "shortDesc": "Öğrenci Adımları: 1. Radius simgesine Sol Tıklayın. 2. Yarıçapını öğrenmek istediğiniz yay, daire veya yuva deliğinin kenarına Sol Tıklayın. 3. Komut satırında Radius (Yarıçap) ve Diameter (Çap) değerini okuyun.",
    "icon": "icons/analyze/ribbon/anz_radius.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Radius",
    "mouseAction": "Sol Tık: Dairesel yayın yarıçapını ve çapını gösterir | Sağ Tık: Son ölçümü yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Radius",
        "desc": "Radius analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Taş yuvalarında delik çapını Radius ile kontrol ederken, taşın kalibre boyuna uygun olduğundan emin olun (Örn: 1.50 mm pırlanta için yuva deliği çapı 1.00 - 1.10 mm olmalıdır) (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Radius komutu. Daire veya yayların yarıçapını ve çapını ölçer. Yaya tıklayıp ölçüyü görün ve Enter ile çıkın.",
    "cmdPrompt": "Command: _Radius\\nSelect curve for radius measurement <Enter>:",
    "cmdOptions": [
      {
        "name": "Diameter",
        "desc": "Tam Çap: Yarıçapın 2 katı olan tam delik çapı değerini de ekranda görüntüler."
      }
    ]
  },
  "anz_diagnostics": {
    "id": "anz_diagnostics",
    "name": "Diagnostics",
    "trName": "Katı Geometri Denetimi (Check / Diagnostics)",
    "meaning": "Hatalı Yüzey ve Bozuk Geometri Taraması",
    "shortDesc": "Öğrenci Adımları: 1. Denetlenecek katıyı seçin. 2. Diagnostics simgesine Sol Tıklayın. 3. Komut satırındaki raporu okuyun. 'This is a valid polysurface' yazıyorsa modeliniz 3D baskıya ve döküme %100 hazırdır. Bozuksa 'bad object' uyarısı verir.",
    "icon": "icons/analyze/ribbon/anz_diagnostics.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Audit",
    "mouseAction": "Sol Tık: Katı yapıyı matematiksel olarak test eder | Sağ Tık: Hatalı yüzeyleri seçer",
    "commandSteps": [
      {
        "prompt": "Command: _Audit",
        "desc": "Diagnostics analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Bozuk (Bad Object) parçalar dökümde eksik çıkar veya 3D yazıcı dilimleyicide delik oluşturur! Check komutunda hata alırsanız Explode edip hatalı yüzeyi Rebuild ile onarın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Diagnostics komutu. Modelin katı sağlığını ve 3D baskıya uygunluğunu denetler. Bozuk yüzey varsa sizi uyarır. Enter ile raporu görün.",
    "cmdPrompt": "Command: _Check\\nSelect objects for diagnostic check <Enter>:",
    "cmdOptions": [
      {
        "name": "SelBadObjects",
        "desc": "Hatalıları Seç: Sahnedeki bozuk yüzeyleri otomatik tespit edip seçili hale getirir."
      }
    ]
  },
  "anz_curvature_circle": {
    "id": "anz_curvature_circle",
    "name": "Curvature Circle",
    "trName": "Eğrilik Çemberi",
    "meaning": "Eğrilik Çemberi",
    "shortDesc": "Eğrinin seçilen noktasındaki anlık eğrilik dairesini çizer.",
    "icon": "icons/analyze/ribbon/anz_curvature_circle.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Curvature",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Curvature",
        "desc": "Curvature Circle analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "Kuyumculuk kalite kontrol ve ölçümünde kritik analiz aracıdır.",
    "ttsText": "Curvature Circle komutu. Türkçe anlamı: Eğrilik Çemberi. Eğrinin seçilen noktasındaki anlık eğrilik dairesini çizer. Püf noktası: Kuyumculuk kalite kontrol ve ölçümünde kritik analiz aracıdır."
  },
  "anz_direction": {
    "id": "anz_direction",
    "name": "Direction",
    "trName": "Yüzey Yönü & Normali (Direction / Dir)",
    "meaning": "Yüzeyin İç-Dış Yön Okları",
    "shortDesc": "Öğrenci Adımları: 1. Yüzeyi seçin. 2. Direction simgesine Sol Tıklayın. 3. Yüzeyden dışarı çıkan beyaz okların yönüne bakın. Oklar dışarı bakmalıdır. İçeri bakıyorsa tıklayarak tersine çevirin (Flip). 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/analyze/ribbon/anz_direction.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Dir",
    "mouseAction": "Sol Tık: Yüzey normal oklarını görüntüler | Tıklayarak yönü tersine çevirir | Sağ Tık: Onaylar",
    "commandSteps": [
      {
        "prompt": "Command: _Dir",
        "desc": "Direction analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Boolean Difference (delik çıkarma) veya Offset Surface yaparken parçanız dışa değil de içine doğru kalınlaşıyorsa, sebebi Direction oklarının ters olmasıdır! Dir ile okları dışa çevirin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Direction komutu. Yüzeylerin iç ve dış yönünü gösterir. Okların dışa baktığından emin olun, tersse tıklayıp çevirin ve Enter ile onaylayın.",
    "cmdPrompt": "Command: _Dir\\nPress Enter when done or click surface to flip normal <Enter>:",
    "cmdOptions": [
      {
        "name": "Flip",
        "desc": "Yönü Tersine Çevir: Yüzey oklarını tam zıt yöne döndürür."
      },
      {
        "name": "SwapUV",
        "desc": "UV Eksenlerini Değiş: Dokulama yönünü 90 derece çevirir."
      }
    ]
  },
  "anz_center_object": {
    "id": "anz_center_object",
    "name": "Center Object",
    "trName": "Orijine Ortala (0,0,0)",
    "meaning": "Orijine Ortala (0,0,0)",
    "shortDesc": "Tasarımı koordinat sisteminin tam sıfır merkezine oturtur.",
    "icon": "icons/analyze/ribbon/anz_center_object.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Move _0",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Move _0",
        "desc": "Center Object analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "Kuyumculuk kalite kontrol ve ölçümünde kritik analiz aracıdır.",
    "ttsText": "Center Object komutu. Türkçe anlamı: Orijine Ortala (0,0,0). Tasarımı koordinat sisteminin tam sıfır merkezine oturtur. Püf noktası: Kuyumculuk kalite kontrol ve ölçümünde kritik analiz aracıdır."
  },
  "anz_edge_tools": {
    "id": "anz_edge_tools",
    "name": "Edge Tools",
    "trName": "Açık Kenar Bulucu (Show Edges)",
    "meaning": "3D Baskı Kaçak & Delik Tespiti",
    "shortDesc": "Öğrenci Adımları: 1. Katı nesneyi seçin. 2. Show Edges simgesine Sol Tıklayın. 3. Pencereden 'Naked Edges' (Açık Kenarlar) seçeneğini işaretleyin. 4. Model üzerinde açık kalan veya kaynamayan yerler pembe/kırmızı çizgiyle parlar. Enter ile kapatın.",
    "icon": "icons/analyze/ribbon/anz_edge_tools.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ShowEdges",
    "mouseAction": "Sol Tık: Açık ve bozuk kenarları renkli vurgular | Sağ Tık: Kenarları birleştirme aracını açar",
    "commandSteps": [
      {
        "prompt": "Command: _ShowEdges",
        "desc": "Edge Tools analizi başlatın."
      }
    ],
    "options": [
      {
        "key": "Tolerance",
        "desc": "Hassasiyet (0.001 mm)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Modelinizi STL formatında 3D reçine yazıcıya göndermeden önce mutlaka Show Edges çalıştırın. Tek bir pembe açık kenar dahi varsa yazıcı o katmanı basamaz ve baskı yarıda çöker (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Show Edges komutu. Modeldeki açık kenarları ve delikleri pembe renkle gösterir. 3D baskı öncesi sızıntı kontrolü için kullanılır. Enter ile pencereyi kapatın.",
    "cmdPrompt": "Command: _ShowEdges\\nSelect surfaces or polysurfaces to display edges <Enter>:",
    "cmdOptions": [
      {
        "name": "NakedEdges",
        "desc": "Açık Kenarlar: Katının su sızdıran deliklerini pembe renkle gösterir."
      },
      {
        "name": "AllEdges",
        "desc": "Tüm Kenarlar: Parçanın tüm sınır çizgilerini listeler."
      }
    ]
  },
  "anz_crv_graph_on": {
    "id": "anz_crv_graph_on",
    "name": "Curvature Graph On",
    "trName": "Eğrilik Grafiğini Aç",
    "meaning": "Eğrilik Grafiğini Aç",
    "shortDesc": "Eğri üzerindeki pürüzsüzlük saçaklarını gösterir.",
    "icon": "icons/analyze/subtools/anz_crv_graph_on.png",
    "isFlyoutSub": true,
    "parentId": "anz_curve",
    "parentName": "Curve",
    "rhinoCommand": "_CurvatureGraphOn",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CurvatureGraphOn",
        "desc": "Analiz eğrilerini seçin."
      }
    ],
    "options": [],
    "jewelerTip": "G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar.",
    "ttsText": "Curvature Graph On komutu. Türkçe anlamı: Eğrilik Grafiğini Aç. Eğri üzerindeki pürüzsüzlük saçaklarını gösterir. Püf noktası: G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar."
  },
  "anz_crv_graph_off": {
    "id": "anz_crv_graph_off",
    "name": "Curvature Graph Off",
    "trName": "Eğrilik Grafiğini Kapat",
    "meaning": "Eğrilik Grafiğini Kapat",
    "shortDesc": "Analiz saçaklarını gizler.",
    "icon": "icons/analyze/subtools/anz_crv_graph_off.png",
    "isFlyoutSub": true,
    "parentId": "anz_curve",
    "parentName": "Curve",
    "rhinoCommand": "_CurvatureGraphOff",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CurvatureGraphOff",
        "desc": "Analiz eğrilerini seçin."
      }
    ],
    "options": [],
    "jewelerTip": "G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar.",
    "ttsText": "Curvature Graph Off komutu. Türkçe anlamı: Eğrilik Grafiğini Kapat. Analiz saçaklarını gizler. Püf noktası: G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar."
  },
  "anz_crv_continuity": {
    "id": "anz_crv_continuity",
    "name": "Geometric Continuity",
    "trName": "Geometrik Süreklilik (G0/G1/G2)",
    "meaning": "Geometrik Süreklilik (G0/G1/G2)",
    "shortDesc": "İki eğrinin teğet veya eğrilik sürekliliğini test eder.",
    "icon": "icons/analyze/subtools/anz_crv_continuity.png",
    "isFlyoutSub": true,
    "parentId": "anz_curve",
    "parentName": "Curve",
    "rhinoCommand": "_GeometricContinuity",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _GeometricContinuity",
        "desc": "Analiz eğrilerini seçin."
      }
    ],
    "options": [],
    "jewelerTip": "G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar.",
    "ttsText": "Geometric Continuity komutu. Türkçe anlamı: Geometrik Süreklilik (G0/G1/G2). İki eğrinin teğet veya eğrilik sürekliliğini test eder. Püf noktası: G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar."
  },
  "anz_crv_deviation": {
    "id": "anz_crv_deviation",
    "name": "Curve Deviation",
    "trName": "Eğri Sapma Mesafesi",
    "meaning": "Eğri Sapma Mesafesi",
    "shortDesc": "İki eğri arasındaki maksimum ve minimum mikron sapmasını ölçer.",
    "icon": "icons/analyze/subtools/anz_crv_deviation.png",
    "isFlyoutSub": true,
    "parentId": "anz_curve",
    "parentName": "Curve",
    "rhinoCommand": "_CrvDeviation",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CrvDeviation",
        "desc": "Analiz eğrilerini seçin."
      }
    ],
    "options": [],
    "jewelerTip": "G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar.",
    "ttsText": "Curve Deviation komutu. Türkçe anlamı: Eğri Sapma Mesafesi. İki eğri arasındaki maksimum ve minimum mikron sapmasını ölçer. Püf noktası: G2 sürekliliği kuyumculukta ışığın çizgi üzerinde kırılmadan akmasını sağlar."
  },
  "anz_srf_box_edit": {
    "id": "anz_srf_box_edit",
    "name": "Surface Box Edit",
    "trName": "Yüzey Kutu Denetimi",
    "meaning": "Yüzey Kutu Denetimi",
    "shortDesc": "Yüzeyin sınırlarını gösterir.",
    "icon": "icons/analyze/subtools/anz_srf_box_edit.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_BoxEdit",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BoxEdit",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Surface Box Edit komutu. Türkçe anlamı: Yüzey Kutu Denetimi. Yüzeyin sınırlarını gösterir. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_curvature": {
    "id": "anz_srf_curvature",
    "name": "Surface Curvature",
    "trName": "Gökkuşağı Eğrilik Haritası",
    "meaning": "Gökkuşağı Eğrilik Haritası",
    "shortDesc": "Yüzeyin bombelik değişimlerini renk skalasında gösterir.",
    "icon": "icons/analyze/subtools/anz_srf_curvature.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_CurvatureAnalysis",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CurvatureAnalysis",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Surface Curvature komutu. Türkçe anlamı: Gökkuşağı Eğrilik Haritası. Yüzeyin bombelik değişimlerini renk skalasında gösterir. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_draft_angle": {
    "id": "anz_srf_draft_angle",
    "name": "Draft Angle Analysis",
    "trName": "Kalıp Çıkış Açısı Analizi",
    "meaning": "Kalıp Çıkış Açısı Analizi",
    "shortDesc": "Kalıptan ayrılmayı zorlaştıracak negatif açıları kırmızıyla işaretler.",
    "icon": "icons/analyze/subtools/anz_srf_draft_angle.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_DraftAngleAnalysis",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _DraftAngleAnalysis",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Draft Angle Analysis komutu. Türkçe anlamı: Kalıp Çıkış Açısı Analizi. Kalıptan ayrılmayı zorlaştıracak negatif açıları kırmızıyla işaretler. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_emap": {
    "id": "anz_srf_emap",
    "name": "Environment Map (Emap)",
    "trName": "Krom Yansıma Analizi (Emap)",
    "meaning": "Krom Yansıma Analizi (Emap)",
    "shortDesc": "Krom stüdyo yansımasıyla yüzeydeki gamzeleri ve pürüzleri gösterir.",
    "icon": "icons/analyze/subtools/anz_srf_emap.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_EMap",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _EMap",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Environment Map (Emap) komutu. Türkçe anlamı: Krom Yansıma Analizi (Emap). Krom stüdyo yansımasıyla yüzeydeki gamzeleri ve pürüzleri gösterir. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_zebra": {
    "id": "anz_srf_zebra",
    "name": "Zebra Analysis",
    "trName": "Zebra Çizgileri Analizi",
    "meaning": "Zebra Çizgileri Analizi",
    "shortDesc": "Siyah-beyaz zebra çizgileriyle yüzey teğetliğini denetler.",
    "icon": "icons/analyze/subtools/anz_srf_zebra.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_Zebra",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zebra",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Zebra Analysis komutu. Türkçe anlamı: Zebra Çizgileri Analizi. Siyah-beyaz zebra çizgileriyle yüzey teğetliğini denetler. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_pt_dev": {
    "id": "anz_srf_pt_dev",
    "name": "Point Deviation",
    "trName": "Nokta Sapma Analizi",
    "meaning": "Nokta Sapma Analizi",
    "shortDesc": "Yüzeyin referans noktalarından sapmasını ölçer.",
    "icon": "icons/analyze/subtools/anz_srf_pt_dev.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_PointDeviation",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _PointDeviation",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Point Deviation komutu. Türkçe anlamı: Nokta Sapma Analizi. Yüzeyin referans noktalarından sapmasını ölçer. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_uv": {
    "id": "anz_srf_uv",
    "name": "Show UV Curves",
    "trName": "UV Akış Eğrileri",
    "meaning": "UV Akış Eğrileri",
    "shortDesc": "Yüzeyin parametrik doku akış yönlerini gösterir.",
    "icon": "icons/analyze/subtools/anz_srf_uv.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_ShowUV",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ShowUV",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Show UV Curves komutu. Türkçe anlamı: UV Akış Eğrileri. Yüzeyin parametrik doku akış yönlerini gösterir. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_pt_grid": {
    "id": "anz_srf_pt_grid",
    "name": "Surface Point Grid",
    "trName": "Kontrol Noktası Izgarası",
    "meaning": "Kontrol Noktası Izgarası",
    "shortDesc": "Kafes noktalarını ızgarada listeler.",
    "icon": "icons/analyze/subtools/anz_srf_pt_grid.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_PtGrid",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _PtGrid",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Surface Point Grid komutu. Türkçe anlamı: Kontrol Noktası Izgarası. Kafes noktalarını ızgarada listeler. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_thick_on": {
    "id": "anz_srf_thick_on",
    "name": "Thickness Analysis On",
    "trName": "Et Kalınlığı Analizini Aç",
    "meaning": "Et Kalınlığı Analizini Aç",
    "shortDesc": "Modelin altın dökümüne uygun et kalınlığını (min 0.30 mm (300 mikron)) renkli haritada gösterir.",
    "icon": "icons/analyze/subtools/anz_srf_thick_on.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_ThicknessAnalysis",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ThicknessAnalysis",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Thickness Analysis On komutu. Türkçe anlamı: Et Kalınlığı Analizini Aç. Modelin altın dökümüne uygun et kalınlığını (min 0.30 mm (300 mikron)) renkli haritada gösterir. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_srf_thick_off": {
    "id": "anz_srf_thick_off",
    "name": "Thickness Analysis Off",
    "trName": "Et Kalınlığı Analizini Kapat",
    "meaning": "Et Kalınlığı Analizini Kapat",
    "shortDesc": "Kalınlık haritasını kapatır.",
    "icon": "icons/analyze/subtools/anz_srf_thick_off.png",
    "isFlyoutSub": true,
    "parentId": "anz_surface",
    "parentName": "Surface",
    "rhinoCommand": "_ThicknessAnalysisOff",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ThicknessAnalysisOff",
        "desc": "Analiz edilecek yüzeyi seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır.",
    "ttsText": "Thickness Analysis Off komutu. Türkçe anlamı: Et Kalınlığı Analizini Kapat. Kalınlık haritasını kapatır. Püf noktası: Dökümde çekinti ve delinmeyi önlemek için et kalınlığı analizinde kırmızı (0.30 mm altı) bölge kalmamalıdır."
  },
  "anz_mass_area": {
    "id": "anz_mass_area",
    "name": "Area",
    "trName": "Yüzey Alanı (mm²)",
    "meaning": "Yüzey Alanı (mm²)",
    "shortDesc": "Toplam yüzey alanını hesaplar.",
    "icon": "icons/analyze/subtools/anz_mass_area.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_Area",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Area",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Area komutu. Türkçe anlamı: Yüzey Alanı (mm²). Toplam yüzey alanını hesaplar. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_area_centroid": {
    "id": "anz_mass_area_centroid",
    "name": "Area Centroid",
    "trName": "Alan Ağırlık Merkezi",
    "meaning": "Alan Ağırlık Merkezi",
    "shortDesc": "Yüzeyin ağırlık merkezine 3D nokta koyar.",
    "icon": "icons/analyze/subtools/anz_mass_area_centroid.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_AreaCentroid",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _AreaCentroid",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Area Centroid komutu. Türkçe anlamı: Alan Ağırlık Merkezi. Yüzeyin ağırlık merkezine 3D nokta koyar. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_area_moments": {
    "id": "anz_mass_area_moments",
    "name": "Area Moments",
    "trName": "Alan Eylemsizlik Momenti",
    "meaning": "Alan Eylemsizlik Momenti",
    "shortDesc": "Eylemsizlik momentlerini listeler.",
    "icon": "icons/analyze/subtools/anz_mass_area_moments.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_AreaMoments",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _AreaMoments",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Area Moments komutu. Türkçe anlamı: Alan Eylemsizlik Momenti. Eylemsizlik momentlerini listeler. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_hydrostatics": {
    "id": "anz_mass_hydrostatics",
    "name": "Hydrostatics",
    "trName": "Denge ve Hacim Dağılımı",
    "meaning": "Denge ve Hacim Dağılımı",
    "shortDesc": "Hacimsel dengeyi analiz eder.",
    "icon": "icons/analyze/subtools/anz_mass_hydrostatics.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_Hydrostatics",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Hydrostatics",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Hydrostatics komutu. Türkçe anlamı: Denge ve Hacim Dağılımı. Hacimsel dengeyi analiz eder. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_volume": {
    "id": "anz_mass_volume",
    "name": "Volume",
    "trName": "Hacim (mm³)",
    "meaning": "Hacim (mm³)",
    "shortDesc": "Modelin milimetreküp net hacmini verir.",
    "icon": "icons/analyze/subtools/anz_mass_volume.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_Volume",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Volume",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Volume komutu. Türkçe anlamı: Hacim (mm³). Modelin milimetreküp net hacmini verir. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_vol_centroid": {
    "id": "anz_mass_vol_centroid",
    "name": "Volume Centroid",
    "trName": "Hacim Ağırlık Merkezi",
    "meaning": "Hacim Ağırlık Merkezi",
    "shortDesc": "Katı gövdenin kütle merkezini işaretler.",
    "icon": "icons/analyze/subtools/anz_mass_vol_centroid.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_VolumeCentroid",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _VolumeCentroid",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Volume Centroid komutu. Türkçe anlamı: Hacim Ağırlık Merkezi. Katı gövdenin kütle merkezini işaretler. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_vol_moments": {
    "id": "anz_mass_vol_moments",
    "name": "Volume Moments",
    "trName": "Kütle Eylemsizlik Momenti",
    "meaning": "Kütle Eylemsizlik Momenti",
    "shortDesc": "Dönme eylemsizlik momentlerini verir.",
    "icon": "icons/analyze/subtools/anz_mass_vol_moments.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_VolumeMoments",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _VolumeMoments",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Volume Moments komutu. Türkçe anlamı: Kütle Eylemsizlik Momenti. Dönme eylemsizlik momentlerini verir. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_mass_compute": {
    "id": "anz_mass_compute",
    "name": "Compute Mass",
    "trName": "Maden Gramajı Hesapla",
    "meaning": "Maden Gramajı Hesapla",
    "shortDesc": "Seçilen alaşıma (14K, 18K, 925 Gümüş) göre gram ağırlığını çıkarır.",
    "icon": "icons/analyze/subtools/anz_mass_compute.png",
    "isFlyoutSub": true,
    "parentId": "anz_mass_props",
    "parentName": "Mass Properties",
    "rhinoCommand": "_Weight",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Weight",
        "desc": "Katıyı seçip Enter tuşuna basın."
      }
    ],
    "options": [],
    "jewelerTip": "14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır.",
    "ttsText": "Compute Mass komutu. Türkçe anlamı: Maden Gramajı Hesapla. Seçilen alaşıma (14K, 18K, 925 Gümüş) göre gram ağırlığını çıkarır. Püf noktası: 14 Ayar altın için yoğunluk 13.0 g/cm³, 18 Ayar için 15.5 g/cm³ alınır."
  },
  "anz_edge_show": {
    "id": "anz_edge_show",
    "name": "Show Edges",
    "trName": "Açık Kenarları Göster",
    "meaning": "Açık Kenarları Göster",
    "shortDesc": "Modeldeki tüm çıplak kenarları fosforlu pembe gösterir.",
    "icon": "icons/analyze/subtools/anz_edge_show.png",
    "isFlyoutSub": true,
    "parentId": "anz_edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_ShowEdges",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ShowEdges",
        "desc": "Kenarları inceleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar.",
    "ttsText": "Show Edges komutu. Türkçe anlamı: Açık Kenarları Göster. Modeldeki tüm çıplak kenarları fosforlu pembe gösterir. Püf noktası: Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar."
  },
  "anz_edge_split": {
    "id": "anz_edge_split",
    "name": "Split Edge",
    "trName": "Kenar Böl",
    "meaning": "Kenar Böl",
    "shortDesc": "Yüzey kenarını belirli bir noktadan böler.",
    "icon": "icons/analyze/subtools/anz_edge_split.png",
    "isFlyoutSub": true,
    "parentId": "anz_edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_SplitEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SplitEdge",
        "desc": "Kenarları inceleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar.",
    "ttsText": "Split Edge komutu. Türkçe anlamı: Kenar Böl. Yüzey kenarını belirli bir noktadan böler. Püf noktası: Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar."
  },
  "anz_edge_merge": {
    "id": "anz_edge_merge",
    "name": "Merge Edge",
    "trName": "Kenar Birleştir",
    "meaning": "Kenar Birleştir",
    "shortDesc": "Bölünmüş kenarları birleştirir.",
    "icon": "icons/analyze/subtools/anz_edge_merge.png",
    "isFlyoutSub": true,
    "parentId": "anz_edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_MergeEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MergeEdge",
        "desc": "Kenarları inceleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar.",
    "ttsText": "Merge Edge komutu. Türkçe anlamı: Kenar Birleştir. Bölünmüş kenarları birleştirir. Püf noktası: Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar."
  },
  "anz_edge_join_naked": {
    "id": "anz_edge_join_naked",
    "name": "Join 2 Naked Edges",
    "trName": "Açık Kenarları Kaynat",
    "meaning": "Açık Kenarları Kaynat",
    "shortDesc": "Açık kalan kenarları zorla birleştirir.",
    "icon": "icons/analyze/subtools/anz_edge_join_naked.png",
    "isFlyoutSub": true,
    "parentId": "anz_edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_JoinEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _JoinEdge",
        "desc": "Kenarları inceleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar.",
    "ttsText": "Join 2 Naked Edges komutu. Türkçe anlamı: Açık Kenarları Kaynat. Açık kalan kenarları zorla birleştirir. Püf noktası: Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar."
  },
  "anz_edge_unjoin": {
    "id": "anz_edge_unjoin",
    "name": "Unjoin Edge",
    "trName": "Kenarı Kopar",
    "meaning": "Kenarı Kopar",
    "shortDesc": "Kenar dikişini serbest bırakır.",
    "icon": "icons/analyze/subtools/anz_edge_unjoin.png",
    "isFlyoutSub": true,
    "parentId": "anz_edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_UnjoinEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _UnjoinEdge",
        "desc": "Kenarları inceleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar.",
    "ttsText": "Unjoin Edge komutu. Türkçe anlamı: Kenarı Kopar. Kenar dikişini serbest bırakır. Püf noktası: Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar."
  },
  "anz_edge_rebuild": {
    "id": "anz_edge_rebuild",
    "name": "Rebuild Edges",
    "trName": "Kenarları Yeniden Kur",
    "meaning": "Kenarları Yeniden Kur",
    "shortDesc": "Kenarları toleransa göre sıfırlar.",
    "icon": "icons/analyze/subtools/anz_edge_rebuild.png",
    "isFlyoutSub": true,
    "parentId": "anz_edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_RebuildEdges",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _RebuildEdges",
        "desc": "Kenarları inceleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar.",
    "ttsText": "Rebuild Edges komutu. Türkçe anlamı: Kenarları Yeniden Kur. Kenarları toleransa göre sıfırlar. Püf noktası: Show Edges penceresinde '0 Naked Edges' yazmalıdır; 1 bile açık kenar dökümde yırtılma yapar."
  },
  "anz_diag_audit": {
    "id": "anz_diag_audit",
    "name": "Audit",
    "trName": "Model Denetimi (Audit)",
    "meaning": "Model Denetimi (Audit)",
    "shortDesc": "Dosya veri yapısındaki hataları tarar.",
    "icon": "icons/analyze/subtools/anz_diag_audit.png",
    "isFlyoutSub": true,
    "parentId": "anz_diagnostics",
    "parentName": "Diagnostics",
    "rhinoCommand": "_Audit",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Audit",
        "desc": "Bozuk nesneleri arayın."
      }
    ],
    "options": [],
    "jewelerTip": "SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir.",
    "ttsText": "Audit komutu. Türkçe anlamı: Model Denetimi (Audit). Dosya veri yapısındaki hataları tarar. Püf noktası: SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir."
  },
  "anz_diag_check": {
    "id": "anz_diag_check",
    "name": "Check",
    "trName": "Geometri Sağlık Testi",
    "meaning": "Geometri Sağlık Testi",
    "shortDesc": "Seçili nesnede yüzey bozulması olup olmadığını doğrular.",
    "icon": "icons/analyze/subtools/anz_diag_check.png",
    "isFlyoutSub": true,
    "parentId": "anz_diagnostics",
    "parentName": "Diagnostics",
    "rhinoCommand": "_Check",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Check",
        "desc": "Bozuk nesneleri arayın."
      }
    ],
    "options": [],
    "jewelerTip": "SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir.",
    "ttsText": "Check komutu. Türkçe anlamı: Geometri Sağlık Testi. Seçili nesnede yüzey bozulması olup olmadığını doğrular. Püf noktası: SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir."
  },
  "anz_diag_check_solid": {
    "id": "anz_diag_check_solid",
    "name": "Check Solid Status",
    "trName": "Katı Durumu Kontrolü",
    "meaning": "Katı Durumu Kontrolü",
    "shortDesc": "Nesnenin su geçirmez kapalı katı olup olmadığını teyit eder.",
    "icon": "icons/analyze/subtools/anz_diag_check_solid.png",
    "isFlyoutSub": true,
    "parentId": "anz_diagnostics",
    "parentName": "Diagnostics",
    "rhinoCommand": "_What",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _What",
        "desc": "Bozuk nesneleri arayın."
      }
    ],
    "options": [],
    "jewelerTip": "SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir.",
    "ttsText": "Check Solid Status komutu. Türkçe anlamı: Katı Durumu Kontrolü. Nesnenin su geçirmez kapalı katı olup olmadığını teyit eder. Püf noktası: SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir."
  },
  "anz_diag_bad_objects": {
    "id": "anz_diag_bad_objects",
    "name": "Select Bad Objects",
    "trName": "Bozuk Nesneleri Yakala (SelBadObjects)",
    "meaning": "Bozuk Nesneleri Yakala (SelBadObjects)",
    "shortDesc": "Sahnede tolerans dışı bozulmuş parçaları tek tıkla yakalar.",
    "icon": "icons/analyze/subtools/anz_diag_bad_objects.png",
    "isFlyoutSub": true,
    "parentId": "anz_diagnostics",
    "parentName": "Diagnostics",
    "rhinoCommand": "_SelBadObjects",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SelBadObjects",
        "desc": "Bozuk nesneleri arayın."
      }
    ],
    "options": [],
    "jewelerTip": "SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir.",
    "ttsText": "Select Bad Objects komutu. Türkçe anlamı: Bozuk Nesneleri Yakala (SelBadObjects). Sahnede tolerans dışı bozulmuş parçaları tek tıkla yakalar. Püf noktası: SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir."
  },
  "anz_diag_info": {
    "id": "anz_diag_info",
    "name": "Object Information",
    "trName": "Detaylı Nesne Bilgisi",
    "meaning": "Detaylı Nesne Bilgisi",
    "shortDesc": "NURBS derece, UV sayısı ve katman dökümünü verir.",
    "icon": "icons/analyze/subtools/anz_diag_info.png",
    "isFlyoutSub": true,
    "parentId": "anz_diagnostics",
    "parentName": "Diagnostics",
    "rhinoCommand": "_List",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _List",
        "desc": "Bozuk nesneleri arayın."
      }
    ],
    "options": [],
    "jewelerTip": "SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir.",
    "ttsText": "Object Information komutu. Türkçe anlamı: Detaylı Nesne Bilgisi. NURBS derece, UV sayısı ve katman dökümünü verir. Püf noktası: SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir."
  },
  "anz_diag_list": {
    "id": "anz_diag_list",
    "name": "Diagnostic List",
    "trName": "Teşhis Raporu",
    "meaning": "Teşhis Raporu",
    "shortDesc": "Geometrik hata raporunu listeler.",
    "icon": "icons/analyze/subtools/anz_diag_list.png",
    "isFlyoutSub": true,
    "parentId": "anz_diagnostics",
    "parentName": "Diagnostics",
    "rhinoCommand": "_Audit",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Audit",
        "desc": "Bozuk nesneleri arayın."
      }
    ],
    "options": [],
    "jewelerTip": "SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir.",
    "ttsText": "Diagnostic List komutu. Türkçe anlamı: Teşhis Raporu. Geometrik hata raporunu listeler. Püf noktası: SelBadObjects komutu boş dönmelidir. Herhangi bir parça seçilirse Rebuild veya Untrim ile tamir edilmelidir."
  }
};

function findAnalyzeCommand(cmdId) {
  if (!cmdId) return null;
  if (analyzeCommandsCatalog[cmdId]) return analyzeCommandsCatalog[cmdId];
  return null;
}

window.analyzeRibbonRows = analyzeRibbonRows;
window.analyzeFlyoutDrawers = analyzeFlyoutDrawers;
window.analyzeCommandsCatalog = analyzeCommandsCatalog;
window.findAnalyzeCommand = findAnalyzeCommand;
