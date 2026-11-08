// MATRIXGOLD & RHINO - DIMENSION (ÖLÇÜLENDİRME VE TEKNİK RESİM) VERİ KATALOĞU
// 16 Ana Şerit Komutu

const dimensionRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: DIMENSION (ÖLÇÜLENDİRME VE TEKNİK RESİM)",
    "tools": [
      {
        "id": "dim_linear",
        "name": "Linear Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_linear.png"
      },
      {
        "id": "dim_aligned",
        "name": "Aligned Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_aligned.png"
      },
      {
        "id": "dim_rotated",
        "name": "Rotated Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_rotated.png"
      },
      {
        "id": "dim_ordinate",
        "name": "Ordinate Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_ordinate.png"
      },
      {
        "id": "dim_radial",
        "name": "Radial Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_radial.png"
      },
      {
        "id": "dim_diameter",
        "name": "Diameter Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_diameter.png"
      },
      {
        "id": "dim_leader",
        "name": "Leader",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_leader.png"
      },
      {
        "id": "dim_text_block",
        "name": "Text Block",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_text_block.png"
      },
      {
        "id": "dim_text_prop",
        "name": "Text Properties",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_text_prop.png"
      },
      {
        "id": "dim_annot_dot",
        "name": "Annotation Dot",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_annot_dot.png"
      },
      {
        "id": "dim_hatch",
        "name": "Hatch",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_hatch.png"
      },
      {
        "id": "dim_recenter",
        "name": "Recenter Dimension",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_recenter.png"
      },
      {
        "id": "dim_make_2d",
        "name": "Make 2-D",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_make_2d.png"
      },
      {
        "id": "dim_set_line_type",
        "name": "Set Line Type",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_set_line_type.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: DIMENSION (ÖLÇÜLENDİRME VE TEKNİK RESİM)",
    "tools": [
      {
        "id": "dim_set_line_scale",
        "name": "Set Line Type Scale",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_set_line_scale.png"
      },
      {
        "id": "dim_properties",
        "name": "Dim Properties",
        "hasFlyout": false,
        "icon": "icons/dimension/ribbon/dim_properties.png"
      }
    ]
  }
];

const dimensionFlyoutDrawers = {};

const dimensionCommandsCatalog = {
  "dim_linear": {
    "id": "dim_linear",
    "name": "Linear Dimension",
    "trName": "Doğrusal Ölçülendirme (Linear Dimension)",
    "meaning": "Yatay ve Dikey Teknik Ölçü Çizgisi",
    "shortDesc": "Öğrenci Adımları: 1. Linear Dimension simgesine Sol Tıklayın. 2. Ölçmek istediğiniz 1. başlangıç noktasını tıklayın. 3. 2. bitiş noktasını tıklayın. 4. Fareyi yukarı veya yana doğru çekerek ölçü çizgisini uygun boşluğa Sol Tık ile bırakın.",
    "icon": "icons/dimension/ribbon/dim_linear.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Dim",
    "mouseAction": "Sol Tık: İki nokta arasında yatay veya dikey teknik ölçü yerleştirir | Sağ Tık: Son ölçüyü yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Dim",
        "desc": "Komut satırından Linear Dimension aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Atölye ustasına teknik çizim verirken yüzüğün toplam yüksekliğini, taban et kalınlığını ve taş yuvası tablasının enini Linear Dimension ile mutlaka belirtin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Linear Dimension komutu. İki nokta arasında yatay veya dikey teknik ölçü çizgisi bırakır. Noktaları tıklayın ve ölçüyü istediğiniz konuma yerleştirin.",
    "cmdPrompt": "Command: _Dim\\nFirst extension line origin <Enter>:",
    "cmdOptions": [
      {
        "name": "Continue",
        "desc": "Ardışık Ölçü: Yan yana sıralı taşların aralıklarını zincirleme ölçer."
      },
      {
        "name": "Horizontal",
        "desc": "Yatay Kilitleme: Sadece X ekseninde ölçülendirir."
      },
      {
        "name": "Vertical",
        "desc": "Dikey Kilitleme: Sadece Y/Z ekseninde yükseklik ölçülendirir."
      }
    ]
  },
  "dim_aligned": {
    "id": "dim_aligned",
    "name": "Aligned Dimension",
    "trName": "Hizalı / Açılı Ölçülendirme (Aligned Dimension)",
    "meaning": "Eğik Kenarların Net Gerçek Uzunluğu",
    "shortDesc": "Öğrenci Adımları: 1. Aligned Dimension simgesine Sol Tıklayın. 2. Eğik kenarın 1. ucunu tıklayın. 3. 2. ucunu tıklayın. 4. Ölçü çizgisini kenara paralel olarak dışarı doğru çekip Sol Tık ile sabitleyin.",
    "icon": "icons/dimension/ribbon/dim_aligned.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimAligned",
    "mouseAction": "Sol Tık: Eğik yüzey veya çizgiye paralel gerçek ölçüyü verir | Sağ Tık: Son ölçüyü yineler",
    "commandSteps": [
      {
        "prompt": "Command: _DimAligned",
        "desc": "Komut satırından Aligned Dimension aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: V formundaki kolyelerin veya açılı tırnakların gerçek boyunu Linear ile ölçerseniz kısa çıkar! Eğik kenarlarda her zaman Aligned Dimension kullanın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Aligned Dimension komutu. Açılı ve eğik kenarların gerçek uzunluğunu kenara paralel olarak ölçülendirir. Kenar uçlarını tıklayıp ölçüyü yerleştirin.",
    "cmdPrompt": "Command: _DimAligned\\nFirst extension line origin for aligned dimension <Enter>:",
    "cmdOptions": [
      {
        "name": "Object",
        "desc": "Nesne Seç: Çizginin üzerine tek tıkla doğrudan boyunu ölçülendirir."
      }
    ]
  },
  "dim_rotated": {
    "id": "dim_rotated",
    "name": "Rotated Dimension",
    "trName": "Döndürülmüş Ölçü",
    "meaning": "Döndürülmüş Ölçü",
    "shortDesc": "Belirli bir açı doğrultusunda mesafe ölçümü yapar.",
    "icon": "icons/dimension/ribbon/dim_rotated.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimRotated",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _DimRotated",
        "desc": "Komut satırından Rotated Dimension aracını başlatın."
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
    "ttsText": "Rotated Dimension komutu. Türkçe anlamı: Döndürülmüş Ölçü. Belirli bir açı doğrultusunda mesafe ölçümü yapar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "dim_ordinate": {
    "id": "dim_ordinate",
    "name": "Ordinate Dimension",
    "trName": "Koordinat Ölçüsü",
    "meaning": "Koordinat Ölçüsü",
    "shortDesc": "Referans orijin noktasına göre X ve Y koordinat farklarını listeler.",
    "icon": "icons/dimension/ribbon/dim_ordinate.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimOrdinate",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _DimOrdinate",
        "desc": "Komut satırından Ordinate Dimension aracını başlatın."
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
    "ttsText": "Ordinate Dimension komutu. Türkçe anlamı: Koordinat Ölçüsü. Referans orijin noktasına göre X ve Y koordinat farklarını listeler. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "dim_radial": {
    "id": "dim_radial",
    "name": "Radial Dimension",
    "trName": "Yarıçap Ölçülendirme (Radial Dimension)",
    "meaning": "Yay ve Kavis Yarıçapı (R) Çizgisi",
    "shortDesc": "Öğrenci Adımları: 1. Radial Dimension simgesine Sol Tıklayın. 2. Ölçülecek kavisli yayın veya dairenin kenarına Sol Tıklayın. 3. Ok ve 'R' harfli yarıçap değerini istediğiniz konuma çekip Sol Tık ile bırakın.",
    "icon": "icons/dimension/ribbon/dim_radial.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimRadius",
    "mouseAction": "Sol Tık: Yay kavisinin yarıçapını (R) ölçülendirir | Sağ Tık: Çap ölçümüne geçer",
    "commandSteps": [
      {
        "prompt": "Command: _DimRadius",
        "desc": "Komut satırından Radial Dimension aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Bombeli alyansların üst kavisinin (Comfort Fit) ve yüzük rayı kavisinin yarıçapını atölye teknik föyüne ekleyerek ustanın kalıbı doğru işlemesini sağlayın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Radial Dimension komutu. Yay ve dairesel kavislerin yarıçapını R ölçüsü olarak gösterir. Yaya tıklayıp ölçü yazısını yerleştirin.",
    "cmdPrompt": "Command: _DimRadius\\nSelect curve for radius dimension <Enter>:",
    "cmdOptions": [
      {
        "name": "Leader",
        "desc": "Lider Çizgisi: Ölçü yazısını kavisin dışına çeken yön oku."
      }
    ]
  },
  "dim_diameter": {
    "id": "dim_diameter",
    "name": "Diameter Dimension",
    "trName": "Tam Çap Ölçülendirme (Diameter Dimension)",
    "meaning": "Taş Yuvası ve Delik Tam Çapı (Ø)",
    "shortDesc": "Öğrenci Adımları: 1. Diameter Dimension simgesine Sol Tıklayın. 2. Çapını göstereceğiniz daireye veya taş yuvası deliğine Sol Tıklayın. 3. 'Ø' çap sembollü ölçü çizgisini uygun boşluğa Sol Tık ile yerleştirin.",
    "icon": "icons/dimension/ribbon/dim_diameter.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimDiameter",
    "mouseAction": "Sol Tık: Dairenin tam çapını (Ø) teknik ölçülendirir | Sağ Tık: Son ölçüyü yineler",
    "commandSteps": [
      {
        "prompt": "Command: _DimDiameter",
        "desc": "Komut satırından Diameter Dimension aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Mıhlayıcıya verilecek teknik paftalarda her taş yuvasının net çapını (Örn: Ø 1.70 mm) Diameter ile belirtmek mıhlama sırasında taşların yuvalara tam oturmasını garanti eder (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Diameter Dimension komutu. Daire ve deliklerin tam çapını çap işaretiyle ölçülendirir. Daire kenarına tıklayıp ölçüyü bırakın.",
    "cmdPrompt": "Command: _DimDiameter\\nSelect curve for diameter dimension <Enter>:",
    "cmdOptions": [
      {
        "name": "Inside",
        "desc": "İç Ölçü: Çap oklarını dairenin içine yerleştirir."
      }
    ]
  },
  "dim_leader": {
    "id": "dim_leader",
    "name": "Leader",
    "trName": "Açıklama Oku ve Notu (Leader)",
    "meaning": "Atölye Ustasına ve Mıhlayıcıya Özel İmalat Notu",
    "shortDesc": "Öğrenci Adımları: 1. Leader simgesine Sol Tıklayın. 2. Okun ucunun göstereceği montür detayını tıklayın. 3. Not çizgisinin kırılacağı 2. noktayı tıklayın. 4. Açılan kutuya imalat notunu yazın (Örn: 'İçi boşaltılacak - 0.40 mm et'). Enter ile onaylayın.",
    "icon": "icons/dimension/ribbon/dim_leader.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Leader",
    "mouseAction": "Sol Tık: İşaret oku ve açıklama metni ekler | Sağ Tık: Son lider stilini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Leader",
        "desc": "Komut satırından Leader aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Dökümcünün nereye yolluk (hava kanalı) bağlayacağını veya cilacının nereye zımpara vurmaması gerektiğini Leader okuyla teknik resme yazmak hatalı üretimi sıfıra indirir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Leader komutu. Modelin üzerine işaret okuyla teknik imalat notları ekler. Hedef noktayı tıklayın, notunuzu yazıp Enter ile onaylayın.",
    "cmdPrompt": "Command: _Leader\\nPoint on target geometry for leader arrow <Enter>:",
    "cmdOptions": [
      {
        "name": "TextPrompt",
        "desc": "Açıklama Metni: Atölyeye iletilecek teknik imalat talimatı."
      }
    ]
  },
  "dim_text_block": {
    "id": "dim_text_block",
    "name": "Text Block",
    "trName": "Teknik Resim Yazı Bloğu (Text Block)",
    "meaning": "Proje Başlığı, Maden Ayarı ve Gram Bilgisi",
    "shortDesc": "Öğrenci Adımları: 1. Text Block simgesine Sol Tıklayın. 2. Açılan pencereye model bilgilerini yazın (Örn: 'Model No: ERN-104 | 14K Altın | 16 Boy'). 3. Yazı boyunu (Height = 2.0 mm) ayarlayın. 4. Ekranda bırakmak istediğiniz yere Sol Tıklayın.",
    "icon": "icons/dimension/ribbon/dim_text_block.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Text",
    "mouseAction": "Sol Tık: Teknik çizime metin bloğu ekler | Sağ Tık: Son yazı stilini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Text",
        "desc": "Komut satırından Text Block aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Atölye paftalarınızın sağ alt köşesine her zaman Text Block ile bir antet (Model Kodu, Tasarımcı Adı, Ayar ve Tarih) eklemek kurumsal profesyonelliğinizin göstergesidir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Text Block komutu. Teknik çizim paftasına proje başlığı, model kodu ve gramaj bilgilerini içeren metinler ekler. Metni yazıp ekrana yerleştirin.",
    "cmdPrompt": "Command: _Text\\nPick insertion point for technical annotation text <Enter>:",
    "cmdOptions": [
      {
        "name": "Font",
        "desc": "Yazı Tipi: Net okunabilir Arial veya ISOCPEUR teknik fontu."
      },
      {
        "name": "Height",
        "desc": "Yazı Yüksekliği: Çizim paftası için 2.0 - 3.0 mm standart yükseklik."
      }
    ]
  },
  "dim_text_prop": {
    "id": "dim_text_prop",
    "name": "Text Properties",
    "trName": "Yazı Özellikleri",
    "meaning": "Yazı Özellikleri",
    "shortDesc": "Teknik resim yazı tiplerini, boyunu ve hizalamasını düzenler.",
    "icon": "icons/dimension/ribbon/dim_text_prop.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Properties",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Properties",
        "desc": "Komut satırından Text Properties aracını başlatın."
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
    "ttsText": "Text Properties komutu. Türkçe anlamı: Yazı Özellikleri. Teknik resim yazı tiplerini, boyunu ve hizalamasını düzenler. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "dim_annot_dot": {
    "id": "dim_annot_dot",
    "name": "Annotation Dot",
    "trName": "Numaralandırma Balonu (Annotation Dot)",
    "meaning": "Daima Kameraya Bakan Taş ve Parça Numaratörü",
    "shortDesc": "Öğrenci Adımları: 1. Annotation Dot simgesine Sol Tıklayın. 2. Açılan kutuya numara veya kısa etiket yazın (Örn: 'Taş #1' veya '0.05 ct'). 3. Sahne üzerinde ilgili taşın veya parçanın üzerine Sol Tıklayın. Kamera nereye dönerse dönsün yazı hep size bakar.",
    "icon": "icons/dimension/ribbon/dim_annot_dot.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Dot",
    "mouseAction": "Sol Tık: Sahneye 3D yönlenmeli numara balonu bırakır | Sağ Tık: Balon font ayarlarını açar",
    "commandSteps": [
      {
        "prompt": "Command: _Dot",
        "desc": "Komut satırından Annotation Dot aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Karışık fantezi bir kolyede 5 farklı boyda pırlanta varsa, Annotation Dot ile her taşın üstüne '1.10 mm', '1.30 mm', '1.50 mm' yazarak mıhlayıcıya hatasız dizim haritası sunabilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Annotation Dot komutu. Sahneye daima ekrana bakan taş ve parça numaralandırma balonları yerleştirir. Numarayı yazıp parçaya tıklayın.",
    "cmdPrompt": "Command: _Dot\\nPick dot location on jewelry model <Enter>:",
    "cmdOptions": [
      {
        "name": "DotText",
        "desc": "Balon Yazısı: Taş numarası veya karat bilgisi."
      },
      {
        "name": "FontHeight",
        "desc": "Punto: Ekranda rahatça okunabilir punto boyutu."
      }
    ]
  },
  "dim_hatch": {
    "id": "dim_hatch",
    "name": "Hatch",
    "trName": "Kesit Taraması (Hatch)",
    "meaning": "Maden Kesitlerini Belirten Teknik Tarama Çizgileri",
    "shortDesc": "Öğrenci Adımları: 1. Kesitini aldığınız kapalı eğriyi seçin. 2. Hatch simgesine Sol Tıklayın. 3. Tarama desenini (Hatch Pattern = ANSI31 - 45 derece çizgili) seçin. 4. Enter veya Sağ Tık ile kesit alanını tarayın.",
    "icon": "icons/dimension/ribbon/dim_hatch.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Hatch",
    "mouseAction": "Sol Tık: Kapalı alana teknik kesit taraması uygular | Sağ Tık: Son tarama stilini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Hatch",
        "desc": "Komut satırından Hatch aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğün kol kesitini (profilini) teknik çizimde gösterirken içini Hatch ile taramak, ustanın o kısmın dolu maden mi yoksa boşluk mu olduğunu tek bakışta anlamasını sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Hatch komutu. Kapalı teknik kesit çizgilerinin içini metal kesit tarama çizgileriyle doldurur. Eğriyi seçip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _Hatch\\nSelect boundary curves for hatch pattern fill <Enter>:",
    "cmdOptions": [
      {
        "name": "Pattern",
        "desc": "Tarama Deseni: Metal kesitleri için standart 45 derece tarama (ANSI31)."
      },
      {
        "name": "Scale",
        "desc": "Tarama Sıklığı: Çizgiler arasındaki mesafe sıklığı."
      }
    ]
  },
  "dim_recenter": {
    "id": "dim_recenter",
    "name": "Recenter Dimension",
    "trName": "Ölçü Yazısını Ortala",
    "meaning": "Ölçü Yazısını Ortala",
    "shortDesc": "Kaymış ölçü metnini ölçü çizgisinin tam ortasına toplar.",
    "icon": "icons/dimension/ribbon/dim_recenter.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimRecenter",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _DimRecenter",
        "desc": "Komut satırından Recenter Dimension aracını başlatın."
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
    "ttsText": "Recenter Dimension komutu. Türkçe anlamı: Ölçü Yazısını Ortala. Kaymış ölçü metnini ölçü çizgisinin tam ortasına toplar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "dim_make_2d": {
    "id": "dim_make_2d",
    "name": "Make 2-D",
    "trName": "3D'den 2D Teknik Resim Çıkar (Make 2-D)",
    "meaning": "Atölye İmalat Paftası ve Lazer Kesim Çizimi Üretici",
    "shortDesc": "Öğrenci Adımları: 1. 3D takı modelinizi seçin. 2. Make 2-D simgesine Sol Tıklayın. 3. Çizim görünüşü olarak '4-View (USA)' seçin ve 'Hidden Lines = Yes' (Görünmeyen çizgiler) işaretleyin. 4. Enter'a basın; modelin kusursuz 2D teknik çizimi Top ekranına düz çizgi olarak aktarılır.",
    "icon": "icons/dimension/ribbon/dim_make_2d.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Make2D",
    "mouseAction": "Sol Tık: 3D modelden kağıda basılabilir 2D teknik pafta çıkarır | Sağ Tık: Ayar penceresini açar",
    "commandSteps": [
      {
        "prompt": "Command: _Make2D",
        "desc": "Komut satırından Make 2-D aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Patent başvurularında, marka tescilinde ve usta imalat paftalarında 3D dosya değil, Make 2D ile çıkarılmış 4 görünüşlü teknik resim istenir. Çizimi çıktı alıp ölçülendirebilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Make 2-D komutu. Üç boyutlu takı modelinizin düz kağıda basılabilir iki boyutlu teknik imalat çizimlerini üretir. Modeli seçip Enter ile çizimi oluşturun.",
    "cmdPrompt": "Command: _Make2D\\nSelect 3D objects for 2D technical drawing generation <Enter>:",
    "cmdOptions": [
      {
        "name": "FourView",
        "desc": "4 Görünüş: Üst, Ön, Sağ Yan ve Perspektif teknik izdüşümlerini tek seferde çıkarır."
      },
      {
        "name": "HiddenLines",
        "desc": "Gizli Çizgiler: Parçanın arkasında kalan detayları kesik çizgilerle gösterir."
      }
    ]
  },
  "dim_set_line_type": {
    "id": "dim_set_line_type",
    "name": "Set Line Type",
    "trName": "Çizgi Tipini Belirle",
    "meaning": "Çizgi Tipini Belirle",
    "shortDesc": "Çizgileri kesikli, noktalı veya eksen çizgisi olarak ayarlar.",
    "icon": "icons/dimension/ribbon/dim_set_line_type.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SetLinetype",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SetLinetype",
        "desc": "Komut satırından Set Line Type aracını başlatın."
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
    "ttsText": "Set Line Type komutu. Türkçe anlamı: Çizgi Tipini Belirle. Çizgileri kesikli, noktalı veya eksen çizgisi olarak ayarlar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "dim_set_line_scale": {
    "id": "dim_set_line_scale",
    "name": "Set Line Type Scale",
    "trName": "Çizgi Tipi Ölçeği",
    "meaning": "Çizgi Tipi Ölçeği",
    "shortDesc": "Kesikli çizgilerin sıklık ve ölçek aralığını düzenler.",
    "icon": "icons/dimension/ribbon/dim_set_line_scale.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SetLinetypeScale",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SetLinetypeScale",
        "desc": "Komut satırından Set Line Type Scale aracını başlatın."
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
    "ttsText": "Set Line Type Scale komutu. Türkçe anlamı: Çizgi Tipi Ölçeği. Kesikli çizgilerin sıklık ve ölçek aralığını düzenler. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  },
  "dim_properties": {
    "id": "dim_properties",
    "name": "Dim Properties",
    "trName": "Ölçülendirme Ayarları",
    "meaning": "Ölçülendirme Ayarları",
    "shortDesc": "Ok ucu büyüklüğü, milimetre virgülden sonraki basamak sayısını ayarlar.",
    "icon": "icons/dimension/ribbon/dim_properties.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DimStyle",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _DimStyle",
        "desc": "Komut satırından Dim Properties aracını başlatın."
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
    "ttsText": "Dim Properties komutu. Türkçe anlamı: Ölçülendirme Ayarları. Ok ucu büyüklüğü, milimetre virgülden sonraki basamak sayısını ayarlar. Püf noktası: Kuyumculuk modelleme, teknik resim ve ölçü denetiminde kullanılır."
  }
};

function findDimensionCommand(cmdId) {
  if (!cmdId) return null;
  if (dimensionCommandsCatalog[cmdId]) return dimensionCommandsCatalog[cmdId];
  return null;
}

window.dimensionRibbonRows = dimensionRibbonRows;
window.dimensionFlyoutDrawers = dimensionFlyoutDrawers;
window.dimensionCommandsCatalog = dimensionCommandsCatalog;
window.findDimensionCommand = findDimensionCommand;
