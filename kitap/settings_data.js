// MATRIXGOLD & RHINO - SETTINGS (YUVALAR VE TIRNAKLAR) VERİ KATALOĞU
// 11 Ana Şerit Komutu

const settingsRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: SETTINGS (YUVALAR VE TIRNAKLAR)",
    "tools": [
      {
        "id": "stg_bail",
        "name": "Bail",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_bail.png"
      },
      {
        "id": "stg_cluster_prongs",
        "name": "Cluster Prongs",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_cluster_prongs.png"
      },
      {
        "id": "stg_pave_prongs",
        "name": "Pave Prongs",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_pave_prongs.png"
      },
      {
        "id": "stg_pearl_cup",
        "name": "Pearl Cup",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_pearl_cup.png"
      },
      {
        "id": "stg_prong_on_surface",
        "name": "Prong On Surface",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_prong_on_surface.png"
      },
      {
        "id": "stg_head",
        "name": "Head",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_head.png"
      },
      {
        "id": "stg_prong_placer",
        "name": "Prong Placer",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_prong_placer.png"
      },
      {
        "id": "stg_halo",
        "name": "Halo",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_halo.png"
      },
      {
        "id": "stg_bezel",
        "name": "Bezel",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_bezel.png"
      },
      {
        "id": "stg_gallery_rail",
        "name": "Gallery Rail",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_gallery_rail.png"
      },
      {
        "id": "stg_under_bezel",
        "name": "Under Bezel",
        "hasFlyout": false,
        "icon": "icons/settings/ribbon/stg_under_bezel.png"
      }
    ]
  }
];

const settingsFlyoutDrawers = {};

const settingsCommandsCatalog = {
  "stg_bail": {
    "id": "stg_bail",
    "name": "Bail",
    "trName": "Kolye Kulbu (Bail)",
    "meaning": "Kolye Ucu Zincir Geçiş Kulbu",
    "shortDesc": "Öğrenci Adımları: 1. Kolye ucunun üst orta noktasını belirleyin. 2. Bail simgesine Sol Tıklayın. 3. Kulp profilini (damla, oval, düz) ve zincir geçiş deliği ölçüsünü (en az 3.5x2.5 mm) belirleyin. 4. Enter veya Sağ Tık ile kulbu gövdeye bağlayın.",
    "icon": "icons/settings/ribbon/stg_bail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Bail",
    "mouseAction": "Sol Tık: Kolye ucuna parametrik zincir kulbu ekler | Sağ Tık: Son kulbu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Bail",
        "desc": "Komut satırından Bail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kolyelerde müşterilerin en çok şikayet ettiği konu kulbun zincir kilidinden geçmemesidir! Kulp iç deliğini kilit kafasını hesaba katarak en az 3.50 mm genişlikte tasarlayın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Bail komutu. Kolye uçlarına zincir geçiş kulbu yerleştirir. Zincir kilit ölçüsünü karşılayacak delik çapını ve et kalınlığını girip Enter ile onaylayın.",
    "cmdPrompt": "Command: _Bail\\nPick placement point on pendant top <Enter>:",
    "cmdOptions": [
      {
        "name": "HoleWidth",
        "desc": "Delik Genişliği: Kilitli zincir ucu için en az 3.50 mm."
      },
      {
        "name": "HoleHeight",
        "desc": "Delik Yüksekliği: Zincirin rahat hareketi için en az 2.50 mm."
      },
      {
        "name": "MetalThickness",
        "desc": "Kulp Et Kalınlığı: Aşınmaya karşı en az 0.80 mm - 1.00 mm."
      },
      {
        "name": "Taper",
        "desc": "Kulp Konikliği: Zincir yuvasından kolyeye doğru zarif daralma."
      }
    ]
  },
  "stg_cluster_prongs": {
    "id": "stg_cluster_prongs",
    "name": "Cluster Prongs",
    "trName": "Grup Tırnak Dağıtıcı (Cluster)",
    "meaning": "Fantezi Grup & Çiçek Mıhlama Tırnakları",
    "shortDesc": "Öğrenci Adımları: 1. Çiçek veya fantezi desende dizili taş grubunu seçin. 2. Cluster Prongs simgesine Sol Tıklayın. 3. Komşu taşların ortak tırnak noktalarını belirleyin. 4. Enter veya Sağ Tık ile tırnakları sabitleyin.",
    "icon": "icons/settings/ribbon/stg_cluster_prongs.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClusterProngs",
    "mouseAction": "Sol Tık: Grup taşlara optimize tırnak örer | Sağ Tık: Hızlı grup tırnağı",
    "commandSteps": [
      {
        "prompt": "Command: _ClusterProngs",
        "desc": "Komut satırından Cluster Prongs aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Fantezi çiçek modellerinde merkez taş ile yaprak taşlarının ortak tırnakla tutulması ağırlığı ve metal fazlalığını azaltır, taşların parıltısını öne çıkarır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Cluster Prongs komutu. Çiçek ve grup taş dizilimlerinde ortak tırnakları otomatik oluşturur. Taşları seçip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _ClusterProngs\\nSelect cluster gems <Enter>:",
    "cmdOptions": [
      {
        "name": "ProngStyle",
        "desc": "Tırnak Formu: Yuvarlak, damla veya V tırnak."
      },
      {
        "name": "Overlap",
        "desc": "Kemer Örtüşmesi: Taşın fasetine basacak tırnak payı."
      }
    ]
  },
  "stg_pave_prongs": {
    "id": "stg_pave_prongs",
    "name": "Pave Prongs",
    "trName": "Pave Tırnakları",
    "meaning": "Zemin Mıhlama Tırnak Dağıtıcısı",
    "shortDesc": "Öğrenci Adımları: 1. Yüzey veya eğri üzerindeki pave taş grubunu seçin. 2. Pave Prongs simgesine Sol Tıklayın. 3. Taşların arasına ortak paylaşılacak tırnak çapını (0.65 - 0.80 mm) ve yüksekliğini belirleyin. 4. Enter veya Sağ Tık ile tırnakları yerleştirin.",
    "icon": "icons/settings/ribbon/stg_pave_prongs.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_PaveProngs",
    "mouseAction": "Sol Tık: Pave taşlar arasına otomatik tırnak dağıtır | Sağ Tık: Son pave tırnaklarını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _PaveProngs",
        "desc": "Komut satırından Pave Prongs aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Pave mıhlamada tırnak tabanlarının ana metal katısına en az 0.20 mm gömüldüğünden emin olun; aksi halde dökümde tırnaklar gövdeye kaynamaz ve kopar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Pave Prongs komutu. Dizili pırlantaların arasına otomatik mıhlama tırnakları yerleştirir. Tırnak çapını ayarlayıp Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _PaveProngBuilder\\nSelect pave gems <Enter>:",
    "cmdOptions": [
      {
        "name": "SharedProngs",
        "desc": "Ortak Tırnak: İki veya dört taşın bir tırnakla tutulması."
      },
      {
        "name": "ProngDiameter",
        "desc": "Pave Tırnak Çapı: Mikro pave için 0.65 - 0.75 mm."
      },
      {
        "name": "DropOnSurface",
        "desc": "Yüzeye Gömülme: Tırnak diplerinin ana metale en az 0.20 mm kaynaması."
      }
    ]
  },
  "stg_pearl_cup": {
    "id": "stg_pearl_cup",
    "name": "Pearl Cup",
    "trName": "İnci Çanağı ve Pimi",
    "meaning": "İnci Montür Yuvası (Pearl Cup & Peg)",
    "shortDesc": "Öğrenci Adımları: 1. İncinin oturacağı yüzeyi veya noktayı seçin. 2. Pearl Cup simgesine Sol Tıklayın. 3. İnci çapına uygun çanak kavisini ve yapıştırma piminin uzunluğunu (en az 2.5 mm) belirleyin. 4. Enter veya Sağ Tık ile yuvayı sabitleyin.",
    "icon": "icons/settings/ribbon/stg_pearl_cup.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_PearlCup",
    "mouseAction": "Sol Tık: Bombeli inci çanağı ve yivli pim oluşturur | Sağ Tık: Son inci çanağını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _PearlCup",
        "desc": "Komut satırından Pearl Cup aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: İnci çanağındaki pimin boyunu inci yarıçapının en az yarısı kadar uzun yapın. İnci yapıştırıcısının (epoksi) tutunması için pim gövdesine hafif yivler açılması atölye ustaları tarafından tercih edilir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Pearl Cup komutu. İnci takıları için bombeli çanak ve tutucu yapıştırma pimi üretir. Pim boyunu en az 2.5 milimetre ayarlayıp Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _PearlCup\\nSelect base surface or center point <Enter>:",
    "cmdOptions": [
      {
        "name": "CupDiameter",
        "desc": "Çanak Çapı: İnci çapının yaklaşık %40 - %50'si."
      },
      {
        "name": "PegLength",
        "desc": "Pim Uzunluğu: İnci merkezine kadar en az 2.50 mm - 3.00 mm."
      },
      {
        "name": "PegDiameter",
        "desc": "Pim Çapı: 0.80 mm - 1.00 mm standart delik çapı."
      }
    ]
  },
  "stg_prong_on_surface": {
    "id": "stg_prong_on_surface",
    "name": "Prong On Surface",
    "trName": "Yüzey Üstü Serbest Tırnak",
    "meaning": "Serbest Zemin Tırnak Dikici",
    "shortDesc": "Öğrenci Adımları: 1. Yüzeyi seçin. 2. Prong On Surface simgesine Sol Tıklayın. 3. Yüzey üzerinde tırnak dikmek istediğiniz noktalara farenin Sol Tuşuyla tıklayın. 4. Tırnak çapını ve açısını ayarlayıp Enter veya Sağ Tık ile bitirin.",
    "icon": "icons/settings/ribbon/stg_prong_on_surface.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ProngOnSurface",
    "mouseAction": "Sol Tık: Yüzey tıklandıkça yeni tırnak diker | Sağ Tık: Komuttan onaylayarak çıkar",
    "commandSteps": [
      {
        "prompt": "Command: _ProngOnSurface",
        "desc": "Komut satırından Prong On Surface aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzeye serbest tırnak dikerken tırnağın yüzeyin normaline (dik açısına) göre çıktığından emin olun. Eğimli yüzeylerde tırnağı taşın oturma açısına göre döndürün (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Prong On Surface komutu. Yüzey üzerinde tıkladığınız her noktaya doğrudan tırnak diker. Noktaları tıklayın ve Enter veya Sağ Tık ile işlemi bitirin.",
    "cmdPrompt": "Command: _ProngOnSurface\\nClick points on surface to place prongs <Enter to finish>:",
    "cmdOptions": [
      {
        "name": "ProngDiameter",
        "desc": "Tırnak Çapı: 0.70 mm - 1.00 mm."
      },
      {
        "name": "ProngHeight",
        "desc": "Tırnak Yüksekliği: Zemin üstü mesafe."
      },
      {
        "name": "SinkDepth",
        "desc": "Gömülme Derinliği: Zemine en az 0.20 mm kaynak payı."
      }
    ]
  },
  "stg_head": {
    "id": "stg_head",
    "name": "Head",
    "trName": "Tektaş Kafası & Tırnaklı Yuva",
    "meaning": "Pırlanta Yuvası (Solitaire Head)",
    "shortDesc": "Öğrenci Adımları: 1. Sahnedeki pırlantayı veya yüzük rayını seçin. 2. Head simgesine Sol Tıklayın. 3. Parametre panelinden tırnak sayısı (4 veya 6 tırnak), tırnak kalınlığı (0.80 - 1.00 mm) ve külah derinliğini ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak yuvayı oluşturun.",
    "icon": "icons/settings/ribbon/stg_head.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Head",
    "mouseAction": "Sol Tık: Parametrik tırnaklı kafa oluşturur | Sağ Tık: Son yuva ölçüleriyle yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Head",
        "desc": "Komut satırından Head aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tektaş kafalarında tırnak kalınlığını döküm ve cila firesini hesaba katarak en az 0.85 mm yapın. 0.70 mm altındaki tırnaklar cilada eriyip mıhlayıcıyı zorlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Head komutu. Pırlantalar için parametrik 4 veya 6 tırnaklı tektaş kafası üretir. Taşı seçin, tırnak kalınlığını en az 0.85 milimetre ayarlayın ve Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _Head\\nSelect target gem for head placement <Enter>:",
    "cmdOptions": [
      {
        "name": "ProngCount",
        "desc": "Tırnak Sayısı: 4, 6 veya 8 tırnak seçeneği."
      },
      {
        "name": "ProngDiameter",
        "desc": "Tırnak Çapı: Kuyumcu standardı 0.80 mm - 1.00 mm."
      },
      {
        "name": "Drop",
        "desc": "Taş Düşüşü: Taşın tırnakların içine ne kadar gömüleceğini belirler (genelde taş boyunun %25'i)."
      },
      {
        "name": "Taper",
        "desc": "Koniklik: Tırnakların tabana doğru daralma veya genişleme açısı."
      }
    ]
  },
  "stg_prong_placer": {
    "id": "stg_prong_placer",
    "name": "Prong Placer",
    "trName": "Tekli / Çoklu Tırnak Yerleştirici",
    "meaning": "Taş Kemeri Boyunca Tırnak Dağıtıcı",
    "shortDesc": "Öğrenci Adımları: 1. Tırnak eklenecek taş veya taş grubunu seçin. 2. Prong Placer simgesine Sol Tıklayın. 3. Taş kemerine teğet olacak şekilde tırnak açısını ve çapını belirleyin. 4. Enter veya Sağ Tık ile sabitleyin.",
    "icon": "icons/settings/ribbon/stg_prong_placer.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ProngPlacer",
    "mouseAction": "Sol Tık: Taşa serbest tırnak yerleştirir | Sağ Tık: Son tırnak konfigürasyonunu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ProngPlacer",
        "desc": "Komut satırından Prong Placer aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tırnak tepe yüksekliğini taş tablosunun en az 0.35 mm yukarısında bırakın. Mıhlayıcı pens ve taşlama aletleriyle tırnağı yuvarlarken taşın üstünü tam sarmalıdır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Prong Placer komutu. Taşların üzerine bağımsız tırnaklar diker. Tırnak çapını ve taş üstü payını ayarlayıp Enter veya Sağ Tık ile sabitleyin.",
    "cmdPrompt": "Command: _ProngPlacer\\nSelect target gem <Enter>:",
    "cmdOptions": [
      {
        "name": "ProngSize",
        "desc": "Tırnak Çapı: 0.70 mm - 1.10 mm arası."
      },
      {
        "name": "HeightAboveGem",
        "desc": "Taş Üstü Payı: Taşın tablosunun üzerine 0.40 mm taşma payı."
      },
      {
        "name": "Nudge",
        "desc": "Hassas Kaydırma: Tırnağı taş kemerine mikro mesafede yaklaştırıp uzaklaştırır."
      }
    ]
  },
  "stg_halo": {
    "id": "stg_halo",
    "name": "Halo",
    "trName": "Halo (Taş Çevresi Hale Yuva)",
    "meaning": "Merkez Taş Etrafı Pırlanta Çerçevesi",
    "shortDesc": "Öğrenci Adımları: 1. Merkez tektaşı seçin. 2. Halo simgesine Sol Tıklayın. 3. Etrafına dizilecek küçük taşların çapını (örneğin 1.20 mm) ve etek açısını belirleyin. 4. Enter veya Sağ Tık ile hem taşları hem alt metal çerçeveyi tek seferde oluşturun.",
    "icon": "icons/settings/ribbon/stg_halo.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Halo",
    "mouseAction": "Sol Tık: Merkez taş etrafına pırlantalı hale yuva kurar | Sağ Tık: Son halo ayarlarını uygular",
    "commandSteps": [
      {
        "prompt": "Command: _Halo",
        "desc": "Komut satırından Halo aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Halodaki küçük taşlar ile merkez büyük taş arasında en az 0.20 mm boşluk bırakın ki mıhlama esnasında merkez taşın kenarı küçük taşlara çarpıp çatlamasın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Halo komutu. Ana taşın etrafına pırlantalı çerçeve yuva inşa eder. Hale taş ölçüsünü ve dış etek payını belirleyip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _Halo\\nSelect center gem for halo builder <Enter>:",
    "cmdOptions": [
      {
        "name": "HaloGemSize",
        "desc": "Hale Taş Çapı: Genelde 1.00 mm - 1.30 mm pırlanta."
      },
      {
        "name": "DropAngle",
        "desc": "Düşüş Açısı: Halenin yanlara doğru kubbe veya düz açılımı."
      },
      {
        "name": "BorderWidth",
        "desc": "Kenar Metal Payı: Taşların dışındaki metal koruma kenarlığı (min 0.25 mm)."
      }
    ]
  },
  "stg_bezel": {
    "id": "stg_bezel",
    "name": "Bezel",
    "trName": "Sıvama Yuva (Bezel)",
    "meaning": "Tam & Yarı Sıvama Taş Yuvası",
    "shortDesc": "Öğrenci Adımları: 1. Sıvama yuva açılacak taşı seçin. 2. Bezel simgesine Sol Tıklayın. 3. Duvar et kalınlığını (Wall Thickness) en az 0.45 mm, derinliği taş külahına uygun belirleyin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak sıvama yuvayı sabitleyin.",
    "icon": "icons/settings/ribbon/stg_bezel.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Bezel",
    "mouseAction": "Sol Tık: Taşa tam veya yarı sıvama duvar oluşturur | Sağ Tık: Hızlı sıvama",
    "commandSteps": [
      {
        "prompt": "Command: _Bezel",
        "desc": "Komut satırından Bezel aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Sıvama yuvada duvar et payı asla 0.40 mm altına inmemelidir. Mıhlayıcı taşı yuvaya oturtup çelik kalem veya mikromotor zımbasıyla metali taşın üzerine bükerken metalin yırtılmaması şarttır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Bezel komutu. Taş etrafına sıvama yuva inşa eder. Duvar et kalınlığını en az 0.45 milimetre girin, taş kemerinin üstüne 0.30 milimetre pay bırakın ve Enter ile tamamlayın.",
    "cmdPrompt": "Command: _Bezel\\nSelect gem to create bezel <Enter>:",
    "cmdOptions": [
      {
        "name": "WallThickness",
        "desc": "Et Kalınlığı: Sıvama için asgari 0.45 mm - 0.50 mm."
      },
      {
        "name": "BezelHeight",
        "desc": "Duvar Yüksekliği: Taş kemerinin 0.30 mm üzerine çıkmalıdır."
      },
      {
        "name": "SeatDepth",
        "desc": "Taş Yuva Payı: Taşın oturacağı iç basamağın derinliği."
      },
      {
        "name": "OpenBottom",
        "desc": "Altı Açık: Işık girişi için külah altını açık veya delikli bırakır."
      }
    ]
  },
  "stg_gallery_rail": {
    "id": "stg_gallery_rail",
    "name": "Gallery Rail",
    "trName": "Galeri Emniyet Kuşağı",
    "meaning": "Tırnak Bağlantı Kuşağı (Gallery Rail)",
    "shortDesc": "Öğrenci Adımları: 1. Tırnaklı yuvayı seçin. 2. Gallery Rail simgesine Sol Tıklayın. 3. Tırnakların orta yüksekliğine gelecek şekilde kuşak kalınlığını (0.60 - 0.70 mm) belirleyin. 4. Enter veya Sağ Tık ile tırnakları birbirine bağlayın.",
    "icon": "icons/settings/ribbon/stg_gallery_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GalleryRail",
    "mouseAction": "Sol Tık: Tırnaklara yatay emniyet kuşağı ekler | Sağ Tık: Hızlı kuşak",
    "commandSteps": [
      {
        "prompt": "Command: _GalleryRail",
        "desc": "Komut satırından Gallery Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: 1 karattan büyük taşlarda tırnaklar tek başına esneyebilir. Galeri kuşağı tırnakların açılmasını engelleyen hayati bir statik takviyedir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Gallery Rail komutu. Tırnaklı yuvanın gövdesine yatay emniyet kuşağı ekler. Tırnakların esneyip taşın düşmesini engeller. Enter veya Sağ Tık ile tamamlayın.",
    "cmdPrompt": "Command: _GalleryRail\\nSelect prongs or head <Enter>:",
    "cmdOptions": [
      {
        "name": "RailHeight",
        "desc": "Kuşak Konumu: Tırnak boyunun %40 - %50 yüksekliği."
      },
      {
        "name": "ProfileWidth",
        "desc": "Profil Kalınlığı: 0.60 mm kuyumcu standardı."
      }
    ]
  },
  "stg_under_bezel": {
    "id": "stg_under_bezel",
    "name": "Under Bezel",
    "trName": "Astar Alt Kuşağı (Under Bezel)",
    "meaning": "Taş Külah Koruma Kuşağı",
    "shortDesc": "Öğrenci Adımları: 1. Yuvayı veya taşı seçin. 2. Under Bezel simgesine Sol Tıklayın. 3. Tel kalınlığını (0.60 - 0.80 mm) ve külah altı mesafesini ayarlayın. 4. Enter veya Sağ Tık ile halkayı katıya kaynatın.",
    "icon": "icons/settings/ribbon/stg_under_bezel.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_UnderBezel",
    "mouseAction": "Sol Tık: Yuva altına emniyet kuşağı ekler | Sağ Tık: Son kuşağı yineler",
    "commandSteps": [
      {
        "prompt": "Command: _UnderBezel",
        "desc": "Komut satırından Under Bezel aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Under bezel halkası, taşın sivri külahının parmağa temas edip batmasını engeller ve tırnak ayaklarını birbirine bağlayarak esnemesini önler (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Under Bezel komutu. Yuva altına külah koruma kuşağı ekler. Taşın külahını korur ve parmağa batmasını engeller. Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _UnderBezel\\nSelect gem or head <Enter>:",
    "cmdOptions": [
      {
        "name": "WireProfile",
        "desc": "Tel Profili: Yuvarlak, yarım tur veya kare profil."
      },
      {
        "name": "OffsetDown",
        "desc": "Aşağı Öteleme: Külah ucunun 0.20 mm altına denk getirilir."
      }
    ]
  }
};

function findSettingsCommand(cmdId) {
  if (!cmdId) return null;
  if (settingsCommandsCatalog[cmdId]) return settingsCommandsCatalog[cmdId];
  return null;
}

window.settingsRibbonRows = settingsRibbonRows;
window.settingsFlyoutDrawers = settingsFlyoutDrawers;
window.settingsCommandsCatalog = settingsCommandsCatalog;
window.findSettingsCommand = findSettingsCommand;
