// MATRIXGOLD & RHINO - MISC (ÇEŞİTLİ GENEL YARDIMCI ARAÇLAR) VERİ KATALOĞU
// 14 Ana Şerit Komutu

const miscRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: MISC (ÇEŞİTLİ GENEL YARDIMCI ARAÇLAR)",
    "tools": [
      {
        "id": "msc_undo",
        "name": "Undo",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_undo.png"
      },
      {
        "id": "msc_redo",
        "name": "Redo",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_redo.png"
      },
      {
        "id": "msc_duplicate",
        "name": "Duplicate",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_duplicate.png"
      },
      {
        "id": "msc_edit_points_on",
        "name": "Edit Points On",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_edit_points_on.png"
      },
      {
        "id": "msc_control_points_on",
        "name": "Control Points On",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_control_points_on.png"
      },
      {
        "id": "msc_move",
        "name": "Move",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_move.png"
      },
      {
        "id": "msc_rotate",
        "name": "Rotate",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_rotate.png"
      },
      {
        "id": "msc_explode",
        "name": "Explode",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_explode.png"
      },
      {
        "id": "msc_join",
        "name": "Join",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_join.png"
      },
      {
        "id": "msc_split",
        "name": "Split",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_split.png"
      },
      {
        "id": "msc_trim",
        "name": "Trim",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_trim.png"
      },
      {
        "id": "msc_group",
        "name": "Group",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_group.png"
      },
      {
        "id": "msc_ungroup",
        "name": "Ungroup",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_ungroup.png"
      },
      {
        "id": "msc_hide",
        "name": "Hide / Show",
        "hasFlyout": false,
        "icon": "icons/misc/ribbon/msc_hide.png"
      }
    ]
  }
];

const miscFlyoutDrawers = {};

const miscCommandsCatalog = {
  "msc_undo": {
    "id": "msc_undo",
    "name": "Undo",
    "trName": "Geri Al (Undo)",
    "meaning": "Son Yapılan İşlemi İptal Edip Geri Alma (Ctrl + Z)",
    "shortDesc": "Öğrenci Adımları: 1. Yanlış bir kesme, silme veya taşıma yaptığınızda paniklemeyin. 2. Undo simgesine Sol Tıklayın (veya klavyeden Ctrl + Z yapın). 3. Çiziminiz bir adım önceki hatasız haline geri döner. Arka arkaya defalarca basabilirsiniz.",
    "icon": "icons/misc/ribbon/msc_undo.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Undo",
    "mouseAction": "Sol Tık: Bir adım geri alır | Sağ Tık: İleri Al (Redo)",
    "commandSteps": [
      {
        "prompt": "Command: _Undo",
        "desc": "Komut satırından Undo aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Boolean Difference yaptığınızda parça yanlış oyulursa hemen Ctrl + Z ile geri alın. Asla parçayı silip baştan çizmeye kalkmayın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Undo komutu. Hatalı bir işlem yaptığınızda çizimi bir önceki adıma geri döndürür. Klavyeden Kontrol Z kısayoluyla da anında geri alabilirsiniz.",
    "cmdPrompt": "Command: _Undo\\nReverting last modeling action <Enter>:",
    "cmdOptions": [
      {
        "name": "StepCount",
        "desc": "Geri Alma Adımı: Rhino varsayılan olarak son 256 adımı hafızada tutar."
      }
    ]
  },
  "msc_redo": {
    "id": "msc_redo",
    "name": "Redo",
    "trName": "İleri Al (Redo)",
    "meaning": "Geri Alınan İşlemi Tekrar Uygulama (Ctrl + Y)",
    "shortDesc": "Öğrenci Adımları: 1. Yanlışlıkla fazla geri aldıysanız Redo simgesine Sol Tıklayın (veya Ctrl + Y yapın). 2. İptal edilen işlem tekrar ileri sarılır ve sahneye geri gelir.",
    "icon": "icons/misc/ribbon/msc_redo.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Redo",
    "mouseAction": "Sol Tık: Bir adım ileri alır | Sağ Tık: Son işlemi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Redo",
        "desc": "Komut satırından Redo aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: İki tasarım alternatifi arasında kararsız kaldığınızda Ctrl + Z ve Ctrl + Y yaparak önceki ve sonraki hali gözünüzle kıyaslayabilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Redo komutu. Yanlışlıkla geri aldığınız işlemleri tekrar ileri sarar. Kontrol Y kısayoluyla da kullanabilirsiniz.",
    "cmdPrompt": "Command: _Redo\\nReapplying previously undone modeling action <Enter>:",
    "cmdOptions": [
      {
        "name": "RedoAll",
        "desc": "Tümünü İleri Sar: En son yapılan adıma kadar hızlıca atlar."
      }
    ]
  },
  "msc_duplicate": {
    "id": "msc_duplicate",
    "name": "Duplicate",
    "trName": "Üst Üste Birebir Çoğalt (Duplicate In-Place)",
    "meaning": "Tam Aynı Konumda Kopya Bırakma (Ctrl + C & Ctrl + V)",
    "shortDesc": "Öğrenci Adımları: 1. Çoğaltılacak parçayı seçin. 2. Duplicate simgesine Sol Tıklayın. 3. Parçanın tam üstüne sıfır kaymayla bir kopyası bırakılır. 4. Kopyayı başka bir katmana atabilir veya taşıyabilirsiniz.",
    "icon": "icons/misc/ribbon/msc_duplicate.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CopyInPlace",
    "mouseAction": "Sol Tık: Olduğu yere birebir ikiz kopya bırakır | Sağ Tık: Son kopyayı yineler",
    "commandSteps": [
      {
        "prompt": "Command: _CopyInPlace",
        "desc": "Komut satırından Duplicate aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Bir yüzüğü oymadan veya Boolean Difference yapmadan önce ana gövdeyi mutlaka Duplicate ile çoğaltıp 'YEDEK' katmanına gizleyin; böylece kesim hatalı çıkarsa orijinal kütleye anında dönebilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Duplicate komutu. Nesnenin tam olduğu yere kaydırmadan birebir ikiz kopyasını çıkarır. Yedekleme ve alternatif denemeleri için kullanılır.",
    "cmdPrompt": "Command: _CopyToClipboard\\nDuplicate object in-place <Enter>:",
    "cmdOptions": [
      {
        "name": "ToLayer",
        "desc": "Katmana Gönder: Kopyayı doğrudan 'Yedek_Parçalar' katmanına aktarır."
      }
    ]
  },
  "msc_edit_points_on": {
    "id": "msc_edit_points_on",
    "name": "Edit Points On",
    "trName": "Eğri Üstü Noktalarını Aç (Edit Points On - F11)",
    "meaning": "Doğrudan Çizginin Üzerinden Geçen Noktalarla Düzenleme",
    "shortDesc": "Öğrenci Adımları: 1. Eğriyi seçin. 2. Edit Points On simgesine Sol Tıklayın (veya F11 yapın). 3. Kontrol noktalarından farklı olarak noktalar doğrudan çizginin kendi gövdesinin üzerindedir. 4. Noktayı nereye çekerseniz çizgi tam o noktadan geçer.",
    "icon": "icons/misc/ribbon/msc_edit_points_on.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EditPtOn",
    "mouseAction": "Sol Tık (F11): Eğri üstü noktalarını açar | Sağ Tık: Noktaları kapatır",
    "commandSteps": [
      {
        "prompt": "Command: _EditPtOn",
        "desc": "Komut satırından Edit Points On aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğün taş yuvasına tam değmesi gereken bir çizgiyi düzenlerken F11 Edit Points kullanmak, çizginin taş kemerine tam teğet oturmasını sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Edit Points On komutu. Klavyeden F11 tuşuna basarak çizginin doğrudan üzerindeki noktaları açar. Hassas çizgi ayarlamaları için idealdir.",
    "cmdPrompt": "Command: _EditPointsOn\\nTurn on on-curve editing points <Enter>:",
    "cmdOptions": [
      {
        "name": "Knots",
        "desc": "Düğüm Noktaları: Eğrinin bükülme noktalarını doğrudan yakalar."
      }
    ]
  },
  "msc_control_points_on": {
    "id": "msc_control_points_on",
    "name": "Control Points On",
    "trName": "Kontrol Noktalarını Aç (Points On - F10)",
    "meaning": "Çizgi ve Yüzeylerin Hamur Noktalarını Aktif Etme",
    "shortDesc": "Öğrenci Adımları: 1. Düzenlenecek eğriyi veya yüzeyi seçin. 2. Points On simgesine Sol Tıklayın (veya F10 tuşuna basın). 3. Çizgi üzerinde küçük kare kontrol noktaları belirir. 4. Noktaları Gumball ile çekiştirip eğriyi şekillendirin. 5. Kapatmak için Esc (Escape) tuşuna basın.",
    "icon": "icons/misc/ribbon/msc_control_points_on.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_PointsOn",
    "mouseAction": "Sol Tık (F10): Kontrol noktalarını açar | Sağ Tık (Esc): Kontrol noktalarını kapatır",
    "commandSteps": [
      {
        "prompt": "Command: _PointsOn",
        "desc": "Komut satırından Control Points On aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük profil eğrisinin bombesini veya kalınlığını ayarlamak için F10 ile noktaları açıp en üst noktayı yukarı çekmek en kusursuz organik geçişi sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Points On komutu. Klavyeden F10 tuşuna basarak çizgilerin kontrol noktalarını açar. Noktaları çekiştirerek eğriye istediğiniz bombeyi verin.",
    "cmdPrompt": "Command: _PointsOn\\nTurn on control points for freeform editing <Enter>:",
    "cmdOptions": [
      {
        "name": "PointsOff",
        "desc": "Noktaları Kapat: Düzenleme bitince kontrol noktalarını gizler (Esc tuşu)."
      }
    ]
  },
  "msc_move": {
    "id": "msc_move",
    "name": "Move",
    "trName": "Hassas Taşı (Move)",
    "meaning": "Hassas Taşı (Move)",
    "shortDesc": "Seçili nesneleri bir referans noktasından diğerine taşır.",
    "icon": "icons/misc/ribbon/msc_move.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Move",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Move",
        "desc": "Komut satırından Move aracını başlatın."
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
    "jewelerTip": "Mıknatıslar (End, Mid, Cen) açıkken tam oturmayı sağlar.",
    "ttsText": "Move komutu. Türkçe anlamı: Hassas Taşı (Move). Seçili nesneleri bir referans noktasından diğerine taşır. Püf noktası: Mıknatıslar (End, Mid, Cen) açıkken tam oturmayı sağlar."
  },
  "msc_rotate": {
    "id": "msc_rotate",
    "name": "Rotate",
    "trName": "Döndür (Rotate)",
    "meaning": "Döndür (Rotate)",
    "shortDesc": "Merkez nokta etrafında 2D veya 3D döndürme yapar.",
    "icon": "icons/misc/ribbon/msc_rotate.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Rotate",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Rotate",
        "desc": "Komut satırından Rotate aracını başlatın."
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
    "jewelerTip": "Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır.",
    "ttsText": "Rotate komutu. Türkçe anlamı: Döndür (Rotate). Merkez nokta etrafında 2D veya 3D döndürme yapar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "msc_explode": {
    "id": "msc_explode",
    "name": "Explode",
    "trName": "Patlat / Parçala (Explode)",
    "meaning": "Patlat / Parçala (Explode)",
    "shortDesc": "Birleşik çoklu çizgileri veya katı yüzeyleri bağımsız parçalarına ayırır.",
    "icon": "icons/misc/ribbon/msc_explode.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Explode",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Explode",
        "desc": "Komut satırından Explode aracını başlatın."
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
    "jewelerTip": "Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır.",
    "ttsText": "Explode komutu. Türkçe anlamı: Patlat / Parçala (Explode). Birleşik çoklu çizgileri veya katı yüzeyleri bağımsız parçalarına ayırır. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "msc_join": {
    "id": "msc_join",
    "name": "Join",
    "trName": "Birleştir (Join)",
    "meaning": "Birleştir (Join)",
    "shortDesc": "Uç uca temas eden parçaları tek gövdede toplar.",
    "icon": "icons/misc/ribbon/msc_join.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Join",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
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
    "jewelerTip": "Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır.",
    "ttsText": "Join komutu. Türkçe anlamı: Birleştir (Join). Uç uca temas eden parçaları tek gövdede toplar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "msc_split": {
    "id": "msc_split",
    "name": "Split",
    "trName": "Böl (Split)",
    "meaning": "Böl (Split)",
    "shortDesc": "Bir nesneyi kesici bıçak çizgisiyle parçalara böler ama silmez.",
    "icon": "icons/misc/ribbon/msc_split.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Split",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Split",
        "desc": "Komut satırından Split aracını başlatın."
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
    "jewelerTip": "Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır.",
    "ttsText": "Split komutu. Türkçe anlamı: Böl (Split). Bir nesneyi kesici bıçak çizgisiyle parçalara böler ama silmez. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "msc_trim": {
    "id": "msc_trim",
    "name": "Trim",
    "trName": "Buda / Kes (Trim)",
    "meaning": "Buda / Kes (Trim)",
    "shortDesc": "Kesişen çizgilerin veya yüzeylerin fazlalıklarını kesip atar.",
    "icon": "icons/misc/ribbon/msc_trim.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Trim",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Trim",
        "desc": "Komut satırından Trim aracını başlatın."
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
    "jewelerTip": "Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır.",
    "ttsText": "Trim komutu. Türkçe anlamı: Buda / Kes (Trim). Kesişen çizgilerin veya yüzeylerin fazlalıklarını kesip atar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "msc_group": {
    "id": "msc_group",
    "name": "Group",
    "trName": "Grup Yap (Group)",
    "meaning": "Birden Fazla Parçayı Tek Paket Olarak Kilitleme (Ctrl + G)",
    "shortDesc": "Öğrenci Adımları: 1. Birlikte hareket etmesini istediğiniz taşları, tırnakları ve kılıfı seçin. 2. Group simgesine Sol Tıklayın (veya Ctrl + G yapın). 3. Artık parçalardan birine tek tıkla dokunduğunuzda tüm grup birlikte seçilir ve kaymadan taşınır.",
    "icon": "icons/misc/ribbon/msc_group.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Group",
    "mouseAction": "Sol Tık: Seçili nesneleri tek bir grup haline getirir | Sağ Tık: Grubu çözer (Ungroup)",
    "commandSteps": [
      {
        "prompt": "Command: _Group",
        "desc": "Komut satırından Group aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzlerce pırlantadan oluşan pave yüzüklerde taşları ve tırnakları hemen Group yapın! Aksi halde yanlışlıkla bir tek taşı tıklayıp kaydırırsanız mıhlamada boşluk kalır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Group komutu. Birbirine bağlı taş ve tırnakları tek bir grup haline getirir. Yanlışlıkla taşların kaymasını önler. Seçip Ctrl G ile gruplayın.",
    "cmdPrompt": "Command: _Group\\nGrouping selected objects <Enter>:",
    "cmdOptions": [
      {
        "name": "GroupName",
        "desc": "Grup İsmi: 'Pave_Taşlar' veya 'Kafa_Tırnakları' gibi özel isim verebilirsiniz."
      }
    ]
  },
  "msc_ungroup": {
    "id": "msc_ungroup",
    "name": "Ungroup",
    "trName": "Grubu Çöz (Ungroup)",
    "meaning": "Gruplanmış Parçaları Tekrar Bağımsız Hale Getirme (Ctrl + Shift + G)",
    "shortDesc": "Öğrenci Adımları: 1. Çözmek istediğiniz grubu seçin. 2. Ungroup simgesine Sol Tıklayın. 3. Grup bağı çözülür; artık taşlara ve tırnaklara tek tek bağımsız olarak müdahale edebilirsiniz.",
    "icon": "icons/misc/ribbon/msc_ungroup.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Ungroup",
    "mouseAction": "Sol Tık: Grubu bağımsız elemanlarına ayırır | Sağ Tık: Hızlı çözme",
    "commandSteps": [
      {
        "prompt": "Command: _Ungroup",
        "desc": "Komut satırından Ungroup aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Gruptaki sadece tek bir taşın boyunu değiştirmek istiyorsanız grubu komple çözmek yerine klavyeden Ctrl + Shift tuşuna basılı tutarak o taşa tıklayın; grubu bozmadan seçebilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Ungroup komutu. Gruplanmış parçaları tekrar tek tek bağımsız nesnelere ayırır. Grubu seçip komuta tıklayın.",
    "cmdPrompt": "Command: _Ungroup\\nDissolving group into individual objects <Enter>:",
    "cmdOptions": [
      {
        "name": "Nested",
        "desc": "İç İçe Gruplar: Alt grupları koruyarak sadece üst ana grubu çözer."
      }
    ]
  },
  "msc_hide": {
    "id": "msc_hide",
    "name": "Hide / Show",
    "trName": "Gizle / Göster (Hide & Show)",
    "meaning": "Çalışırken Gözü Yoran Parçaları Geçici Saklama (Ctrl + H)",
    "shortDesc": "Öğrenci Adımları: 1. Gizlemek istediğiniz parçayı seçin. 2. Hide simgesine Sol Tıklayın (veya Ctrl + H yapın). Parça ekrandan geçici olarak kaybolur. 3. Geri getirmek için aynı simgeye Sağ Tıklayın (veya Show komutu verin); tüm gizliler sahneye geri döner.",
    "icon": "icons/misc/ribbon/msc_hide.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Hide",
    "mouseAction": "Sol Tık: Seçili nesneleri gizler | Sağ Tık: Gizlenmiş tüm nesneleri ekrana geri getirir",
    "commandSteps": [
      {
        "prompt": "Command: _Hide",
        "desc": "Komut satırından Hide / Show aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğün iç astarını düzenlerken üstteki taşlar görüşünüzü engelliyorsa taşları seçip Hide yapın. İşiniz bitince Sağ Tık ile Show yaparak taşları anında geri çağırın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Hide komutu. Seçili parçaları ekranda geçici olarak gizler. Gizlenenleri geri getirmek için farenin sağ tuşuyla Show komutuna tıklayın.",
    "cmdPrompt": "Command: _Hide\\nObjects hidden. Use Show to unhide <Enter>:",
    "cmdOptions": [
      {
        "name": "ShowSelected",
        "desc": "Seçilerek Göster: Gizli parçaların arasından sadece istediklerinizi seçip açar."
      }
    ]
  }
};

function findMiscCommand(cmdId) {
  if (!cmdId) return null;
  if (miscCommandsCatalog[cmdId]) return miscCommandsCatalog[cmdId];
  return null;
}

window.miscRibbonRows = miscRibbonRows;
window.miscFlyoutDrawers = miscFlyoutDrawers;
window.miscCommandsCatalog = miscCommandsCatalog;
window.findMiscCommand = findMiscCommand;
