// MATRIXGOLD & RHINO - GEMS (DEĞERLİ TAŞLAR DÜNYASI) VERİ KATALOĞU
// 16 Ana Şerit Komutu

const gemsRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: GEMS (DEĞERLİ TAŞLAR DÜNYASI)",
    "tools": [
      {
        "id": "gms_msr_gems",
        "name": "MSR Gems",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_msr_gems.png"
      },
      {
        "id": "gms_proxy_gem",
        "name": "Proxy Gem",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_proxy_gem.png"
      },
      {
        "id": "gms_gem_between",
        "name": "Gem Between Curves",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_between.png"
      },
      {
        "id": "gms_gem_list_curve",
        "name": "Gem List On Curve",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_list_curve.png"
      },
      {
        "id": "gms_gem_guides",
        "name": "Gem Guides",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_guides.png"
      },
      {
        "id": "gms_gem",
        "name": "Gem",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem.png"
      },
      {
        "id": "gms_orient_to_gem",
        "name": "Orient To Gem",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_orient_to_gem.png"
      },
      {
        "id": "gms_gem_offset_curve",
        "name": "Gem Offset Curve",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_offset_curve.png"
      },
      {
        "id": "gms_gem_on_curve",
        "name": "Gem On Curve",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_on_curve.png"
      },
      {
        "id": "gms_gem_on_surface",
        "name": "Gem On Surface",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_on_surface.png"
      },
      {
        "id": "gms_gem_on_ring_rail",
        "name": "Gem On Ring Rail",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_on_ring_rail.png"
      },
      {
        "id": "gms_pave",
        "name": "Pave",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_pave.png"
      },
      {
        "id": "gms_gem_springs",
        "name": "Gem Springs",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_springs.png"
      },
      {
        "id": "gms_gem_override",
        "name": "Gem Override",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_override.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: GEMS (DEĞERLİ TAŞLAR DÜNYASI)",
    "tools": [
      {
        "id": "gms_custom_gem",
        "name": "Custom Gem Loader",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_custom_gem.png"
      },
      {
        "id": "gms_gem_placer",
        "name": "Gem Placer",
        "hasFlyout": false,
        "icon": "icons/gems/ribbon/gms_gem_placer.png"
      }
    ]
  }
];

const gemsFlyoutDrawers = {};

const gemsCommandsCatalog = {
  "gms_msr_gems": {
    "cmdOptions": [{"name": "ScaleUniform", "desc": "Orantılı Ölçek: Taşın en ve boy oranını bozmadan büyütüp küçültür."}],
    "cmdPrompt": "Command: _MSRGems\nManipulate gems using gumball ( Move  Scale  Rotate ):",
    "id": "gms_msr_gems",
    "name": "MSR Gems",
    "trName": "Parametrik Taş Taşı-Döndür-Ölçekle",
    "meaning": "Parametrik Taş Taşı-Döndür-Ölçekle",
    "shortDesc": "Öğrenci Adımları: 1. Düzenlenecek taşları seçin. 2. MSR Gems (Move-Scale-Rotate) simgesine Sol Tıklayın. 3. Ekrana çıkan renkli eksen oklarıyla taşları serbestçe taşıyın, döndürün veya boyutlandırın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak sabitleyin.",
    "icon": "icons/gems/ribbon/gms_msr_gems.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MSRGems",
    "mouseAction": "Sol Tık: Taşlar için MSR gumball aracını açar | Sağ Tık: Hızlı boyutlandırma",
    "commandSteps": [
      {
        "prompt": "Command: _MSRGems",
        "desc": "Komut satırından MSR Gems aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Dizilmiş taşların arasında gözünüze batan tek bir taşı grubun parametrikliğini bozmadan mikro düzeyde ötelemek için kullanılır.",
    "ttsText": "MSR Gems komutu. Taşları taşıma, döndürme ve ölçeklendirme aracıdır."
  },
  "gms_proxy_gem": {
    "cmdOptions": [{"name": "LowPoly", "desc": "Düşük Poligon: Taş formunu korur ama yüzey sayısını %80 azaltır."}],
    "cmdPrompt": "Command: _ProxyGem\nToggle proxy mode for selected gems ( Mode=BoundingBox/LowPoly ):",
    "id": "gms_proxy_gem",
    "name": "Proxy Gem",
    "trName": "Vekil / Hafif Taş Modeli",
    "meaning": "Vekil / Hafif Taş Modeli",
    "shortDesc": "Öğrenci Adımları: 1. Çok sayıda taş içeren modeli seçin. 2. Proxy Gem simgesine Sol Tıklayın. 3. Taşların fasetli ağır gövdeleri, hafif tel kafes veya basit silindirik temsili formlara dönüşür. 4. Model kasılmadan hızlıca döner; render alırken tek tıkla orijinale çevrilir.",
    "icon": "icons/gems/ribbon/gms_proxy_gem.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ProxyGem",
    "mouseAction": "Sol Tık: Taşları hafif vekil forma çevirir | Sağ Tık: Orijinal taşları geri yükler",
    "commandSteps": [
      {
        "prompt": "Command: _ProxyGem",
        "desc": "Komut satırından Proxy Gem aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: 1000'den fazla mikro pavé taş içeren ağır gerdanlık modellerinde bilgisayarın donmasını ve ekran kartının kilitlenmesini önler.",
    "ttsText": "Proxy Gem komutu. Ağır pırlanta modellerini hafif vekil formlara dönüştürerek çizim performansını hızlandırır."
  },
  "gms_gem_between": {
    "cmdOptions": [{"name": "AutoScale=Yes", "desc": "Otomatik Boyutlandırma: İki çizgi arası daraldıkça taşları otomatik küçültür."}, {"name": "MinSize", "desc": "Minimum Taş Çapı: Taşların düşebileceği en küçük boy sınırı (min 0.90 mm)."}],
    "cmdPrompt": "Command: _GemBetweenCurves\nSelect curve 1, then curve 2 ( AutoScale=Yes  Spacing=0.10 ):",
    "id": "gms_gem_between",
    "name": "Gem Between Curves",
    "trName": "İki Eğri Arasına Taş Diz",
    "meaning": "İki Eğri Arasına Taş Diz",
    "shortDesc": "Öğrenci Adımları: 1. Birbirine paralel veya daralan iki eğri hazırlayın. 2. Gem Between Curves simgesine Sol Tıklayın. 3. Birinci ve ikinci çizgiyi seçin. 4. İki çizgi arasındaki mesafeye göre taşlar otomatik büyüyüp küçülerek yerleşir; Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_gem_between.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemBetweenCurves",
    "mouseAction": "Sol Tık: İki eğri arasına taş döşer | Sağ Tık: Son ayarları yineler",
    "commandSteps": [
      {
        "prompt": "Command: _GemBetweenCurves",
        "desc": "Komut satırından Gem Between Curves aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük kolunun alttan ince başlayıp yukarı doğru genişlediği modellerde degradeli (boy boy kademeli) taş dizimi için kusursuz bir otomasyondur.",
    "ttsText": "Gem Between Curves komutu. İki kılavuz çizgi arasına genişliğe göre otomatik boyutlanan taşlar dizer."
  },
  "gms_gem_list_curve": {
    "cmdOptions": [{"name": "Symmetric", "desc": "Simetrik Dizi: Listenin merkezden her iki yana eşit azalmasını sağlar."}, {"name": "Spacing", "desc": "Taş aralığı mesafesi."}],
    "cmdPrompt": "Command: _GemListOnCurve\nDefine gem sequence on curve:",
    "id": "gms_gem_list_curve",
    "name": "Gem List On Curve",
    "trName": "Eğriye Taş Listesi Diz",
    "meaning": "Eğriye Taş Listesi Diz",
    "shortDesc": "Öğrenci Adımları: 1. Eğriyi seçin. 2. Gem List On Curve simgesine Sol Tıklayın. 3. Sırasıyla dizilecek taş listesini tanımlayın (örn: 2.0 mm, 1.8 mm, 1.5 mm, 1.2 mm). 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak kademeli dizilimi oluşturun.",
    "icon": "icons/gems/ribbon/gms_gem_list_curve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemListOnCurve",
    "mouseAction": "Sol Tık: Liste bazlı taş dizimini açar | Sağ Tık: Son listeyi uygular",
    "commandSteps": [
      {
        "prompt": "Command: _GemListOnCurve",
        "desc": "Komut satırından Gem List On Curve aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Gerdanlık ve kolyelerde ortada en büyük taş, kenarlara doğru kademeli küçülen taş dizilimi için kullanılır.",
    "ttsText": "Gem List On Curve komutu. Farklı boyuttaki taşları sıralı bir liste halinde çizgiye dizer."
  },
  "gms_gem_guides": {
    "cmdOptions": [{"name": "CenterAxis", "desc": "Merkez Ekseni: Taşın külahından tablasına geçen dik çizgi."}, {"name": "TablePlane", "desc": "Tabla Düzlemi: Taşın üst tablasının açısını gösteren sanal düzlem."}],
    "cmdPrompt": "Command: _GemGuides\nSelect gems for guide lines ( Type=CenterAxis/TablePlane ):",
    "id": "gms_gem_guides",
    "name": "Gem Guides",
    "trName": "Taş Kılavuz Çizgileri",
    "meaning": "Taş Kılavuz Çizgileri",
    "shortDesc": "Öğrenci Adımları: 1. Taşları seçin. 2. Gem Guides simgesine Sol Tıklayın. 3. Taşların merkez eksenlerini, tabla düzlemlerini ve oturma kılavuz çizgilerini görünür yapın. 4. Tırnak ve kanal modellerken bu referans çizgilerini baz alın.",
    "icon": "icons/gems/ribbon/gms_gem_guides.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemGuides",
    "mouseAction": "Sol Tık: Taş kılavuz çizgilerini açar | Sağ Tık: Kılavuzları gizler",
    "commandSteps": [
      {
        "prompt": "Command: _GemGuides",
        "desc": "Komut satırından Gem Guides aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tırnak dikerken veya tırnak açısını taşın fasetine uydururken kılavuz çizgileri kılavuz noktası olarak yakalamak (Osnap) hata payını sıfıra indirir.",
    "ttsText": "Gem Guides komutu. Taşların tabla ve eksen kılavuz çizgilerini gösterir."
  },
  "gms_gem": {
    "cmdOptions": [{"name": "Shape", "desc": "Kesim Formu: Yuvarlak (Round Brilliant), Baget, Prenses, Oval, Damla (Pear), Markiz, Zümrüt (Emerald Cut), Kalp."}, {"name": "Dimensions", "desc": "Milimetrik Ebat: Taşın en, boy ve derinlik ölçüleri."}, {"name": "CaratWeight", "desc": "Karat Hesabı: Taşın özgül ağırlığına göre karat karşılığı (Pırlanta: 3.52 g/cm³)."}],
    "cmdPrompt": "Command: _GemLoader\nSelect gem shape and dimensions ( Shape=Round  Size=6.50mm  Carat=1.00ct ):",
    "id": "gms_gem",
    "name": "Gem",
    "trName": "Parametrik Taş (Pırlanta / Renkli Taş)",
    "meaning": "Parametrik Taş (Pırlanta / Renkli Taş)",
    "shortDesc": "Öğrenci Adımları: 1. Gem simgesine Sol Tıklayın. 2. Açılan taş kütüphanesinden kesim formunu (Round, Oval, Baguette, Princess, Marquise, Emerald Cut, Pear vb.) seçin. 3. Taş boyutunu milimetre veya karat olarak girin (örn: 6.5 mm = 1.00 Karat Round). 4. Ekranda taşın oturacağı noktayı tıklayın veya F4 ile merkeze bırakıp Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_gem.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Gem",
    "mouseAction": "Sol Tık: Taş kütüphanesi ve boyutlandırma panelini açar | Sağ Tık: Son taş formunu ekler",
    "commandSteps": [
      {
        "prompt": "Command: _Gem",
        "desc": "Komut satırından Gem aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tektaş yüzüklerde taşın alt külahı (culet) parmağa değmemelidir; iç raydan en az 1.00 mm yukarıda kalmalıdır. Taş diziminde muma taş dizenler 0.90 mm'ye kadar dizerler; ancak mıhlayıcılar 1.10 mm'den aşağısını tercih etmezler (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Gem komutu. Kütüphaneden pırlanta ve değerli taş modelleri yükler. Kesim formunu ve ölçüsünü seçip Enter veya Sağ Tık ile yerleştirin. Püf noktası: Muma taş dizenler 0.90 milimetreye kadar dizer; mıhlayıcılar ise 1.10 milimetreden aşağısını tercih etmez."
  },
  "gms_orient_to_gem": {
    "cmdOptions": [{"name": "Copy=Yes", "desc": "Çoklu Kopyalama: Seçilen tırnağı sahnede tıklanan tüm taşlara kopyalayarak hizalar."}],
    "cmdPrompt": "Command: _OrientToGem\nSelect objects to orient:\nSelect target gem:",
    "id": "gms_orient_to_gem",
    "name": "Orient To Gem",
    "trName": "Taşa Göre Hizala / Yönlendir",
    "meaning": "Taşa Göre Hizala / Yönlendir",
    "shortDesc": "Öğrenci Adımları: 1. Taşın üzerine oturtulacak nesneyi (tırnak, kadeh veya süsleme parçası) seçin. 2. Orient To Gem simgesine Sol Tıklayın. 3. Hedef taşı tıklayın. Nesne taşın merkezine ve açısına tam kilitlenir; Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_orient_to_gem.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_OrientToGem",
    "mouseAction": "Sol Tık: Nesneyi taşa hizalar | Sağ Tık: Son yönelimi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _OrientToGem",
        "desc": "Komut satırından Orient To Gem aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Özel tasarlanmış fantezi bir tırnağı veya kadeh parçasını yüzükteki eğik duran bir taşa tek tıkla tam dik açıyla oturtmak için kullanılır.",
    "ttsText": "Orient To Gem komutu. Nesneleri taşın pozisyonuna ve açısına göre otomatik hizalar."
  },
  "gms_gem_offset_curve": {
    "cmdOptions": [{"name": "Distance", "desc": "Emniyet Mesafesi: Taşın dış kenarından metal duvarına kadar olan tırnak ve kanal payı."}],
    "cmdPrompt": "Command: _GemOffsetCurve\nSelect gems to offset boundary ( Distance=0.20 ):",
    "id": "gms_gem_offset_curve",
    "name": "Gem Offset Curve",
    "trName": "Taş Öteleme Eğrisi",
    "meaning": "Taş Öteleme Eğrisi",
    "shortDesc": "Öğrenci Adımları: 1. Dizilmiş taşları seçin. 2. Gem Offset Curve simgesine Sol Tıklayın. 3. Taşların kemer sınırından dışarıya olan payı (örn: 0.20 mm) girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; taşların etrafını çevreleyen kanal ve astar sınır çizgisi otomatik oluşur.",
    "icon": "icons/gems/ribbon/gms_gem_offset_curve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemOffsetCurve",
    "mouseAction": "Sol Tık: Taş etrafına sınır eğrisi çıkarır | Sağ Tık: Son ofset mesafesini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _GemOffsetCurve",
        "desc": "Komut satırından Gem Offset Curve aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kanal ve pavé yüzüklerde taşların dışına tam 0.20 mm pay ile astar kanalı açmak mıhlayıcının taşı sağlam oturtmasını sağlar.",
    "ttsText": "Gem Offset Curve komutu. Taşların sınırlarından paralel kılavuz eğrileri çıkarır."
  },
  "gms_gem_on_curve": {
    "cmdOptions": [{"name": "GemSize", "desc": "Taş Çapı: Çizgi boyunca dizilecek taşların milimetrik boyutu (min 0.90 mm, standart 1.20 - 1.80 mm)."}, {"name": "Spacing", "desc": "Taş Aralığı: Taş fasetlerinin birbirine çarpmaması için ideal boşluk (0.08 mm - 0.12 mm)."}, {"name": "FlipDirection", "desc": "Yön Çevir: Taş tablalarının baktığı yönü tersine çevirir."}],
    "cmdPrompt": "Command: _GemOnCurve\nSelect curve for gem layout ( GemSize=1.50  Spacing=0.10  StartOffset=0.00 ):",
    "id": "gms_gem_on_curve",
    "name": "Gem On Curve",
    "trName": "Eğri Üzerine Taş Dizimi",
    "meaning": "Eğri Üzerine Taş Dizimi",
    "shortDesc": "Öğrenci Adımları: 1. Üzerine taş dizilecek kılavuz eğriyi seçin. 2. Gem On Curve simgesine Sol Tıklayın. 3. Taş boyunu (örn: 1.50 mm) ve taşlar arası boşluğu (Spacing: 0.10 mm) girin. 4. Başlangıç ve bitiş sınır oklarını fareyle ayarlayıp Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_gem_on_curve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemOnCurve",
    "mouseAction": "Sol Tık: Eğri üzeri taş dizim panelini açar | Sağ Tık: Son taş dizimini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _GemOnCurve",
        "desc": "Komut satırından Gem On Curve aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Taşlar arası boşluğu (Spacing) asla 0 yapmayın! Taşlar birbirine değerse mıhlama esnasında çekiç darbesiyle taşların kenarı (girdle) çatlar ve kırılır. İdeal mıhlama aralığı 0.10 milimetredir.",
    "ttsText": "Gem On Curve komutu. Çizgi boyunca eşit aralıklı taşlar dizer. Taş boyu ve aralık ayarını girip Enter veya Sağ Tık ile onaylayın. Kuyumcu püf noktası: Taşların kırılmaması için taşlar arasına mutlaka en az 0.10 milimetre boşluk bırakın."
  },
  "gms_gem_on_surface": {
    "cmdOptions": [{"name": "GemSize", "desc": "Taş Boyutu: Ekrana tıklanan her noktaya yerleştirilecek taş çapı."}, {"name": "SnapToGrid", "desc": "Izgara Kilidi: Taşları eşit simetrik satır ve sütunlara hizalar."}],
    "cmdPrompt": "Command: _GemOnSurface\nPick points on surface to place gems ( GemSize=1.30  NormalOffset=0.00 ):",
    "id": "gms_gem_on_surface",
    "name": "Gem On Surface",
    "trName": "Yüzey Üzerine Taş Dizimi",
    "meaning": "Yüzey Üzerine Taş Dizimi",
    "shortDesc": "Öğrenci Adımları: 1. Yüzeyi seçin. 2. Gem On Surface simgesine Sol Tıklayın. 3. Taş boyutunu belirleyin. 4. Farenizle yüzeyin üzerinde taş koymak istediğiniz noktalara tek tek Sol Tıklayın. Taşlar yüzeyin eğimine tam dik olarak oturur; bitirmek için Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_gem_on_surface.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemOnSurface",
    "mouseAction": "Sol Tık: Yüzey üzeri serbest taş yerleşimi | Sağ Tık: Son taş boyutunu sabitler",
    "commandSteps": [
      {
        "prompt": "Command: _GemOnSurface",
        "desc": "Komut satırından Gem On Surface aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Fantezi yüzüklerde ve asimetrik kolyelerde serbest taş yerleşimi için idealdir. Taş kemerlerinin metal yüzeyin 0.20 mm üzerinde kalmasına dikkat edin.",
    "ttsText": "Gem On Surface komutu. Üç boyutlu yüzeylerin üzerine serbestçe taş yerleştirir."
  },
  "gms_gem_on_ring_rail": {
    "cmdOptions": [{"name": "Mode=HalfEternity", "desc": "Yarımtur: Taşları sadece yüzüğün görünen üst yarısına dizer."}, {"name": "Mode=FullEternity", "desc": "Tamtur: Taşları 360 derece tüm yüzük halkası boyunca eşit yayar."}, {"name": "Count", "desc": "Taş Adedi: Dizilecek toplam taş sayısı (örn: 5'li Beştaş, 7'li Yedi-taş)."}],
    "cmdPrompt": "Command: _GemOnRingRail\nSelect layout type ( Mode=HalfEternity  Count=7  GemSize=2.20 ):",
    "id": "gms_gem_on_ring_rail",
    "name": "Gem On Ring Rail",
    "trName": "Yüzük Rayına Taş Dizimi",
    "meaning": "Yüzük Rayına Taş Dizimi",
    "shortDesc": "Öğrenci Adımları: 1. Ring Rail seçiliyken Gem On Ring Rail simgesine Sol Tıklayın. 2. Beştaş, Yarımtur veya Tamtur şablonlarından birini seçin. 3. Taş adedini (örn: 5, 7 veya 21 adet) ve taş çapını girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; taşlar parmak halkasına kusursuz teğet dizilir.",
    "icon": "icons/gems/ribbon/gms_gem_on_ring_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemOnRingRail",
    "mouseAction": "Sol Tık: Yüzük rayına taş dizme sihirbazı | Sağ Tık: Son yarımtur ayarlarını uygular",
    "commandSteps": [
      {
        "prompt": "Command: _GemOnRingRail",
        "desc": "Komut satırından Gem On Ring Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tamtur yüzüklerde ölçü sonradan büyütülemez veya küçültülemez! Bu yüzden müşterinin tam parmak numarasını netleştirmeden tamtur dizimi yapmayın; döküm çekme payını baştan ekleyin.",
    "ttsText": "Gem On Ring Rail komutu. Yüzük ölçü halkası üzerine beştaş, yarımtur veya tamtur dizilimleri yapar."
  },
  "gms_pave": {
    "cmdOptions": [{"name": "MinSize/MaxSize", "desc": "Taş Boyut Aralığı: Yüzeyin daralan ve genişleyen yerlerine otomatik uyan dinamik taş çapları."}, {"name": "BorderGap", "desc": "Kenar Güvenlik Mesafesi: Yüzeyin dış kenarından içeriye bırakılacak tırnak payı (min 0.20 mm)."}, {"name": "Spacing", "desc": "Taşlar Arası Mesafe: Mikro pavé tırnak kalınlığı payı (0.10 mm - 0.15 mm)."}],
    "cmdPrompt": "Command: _PaveBuilder\nSelect target surface for pave ( MinSize=1.00  MaxSize=1.40  BorderGap=0.20 ):",
    "id": "gms_pave",
    "name": "Pave",
    "trName": "Otomatik Pavé Taş Dağıtımı",
    "meaning": "Otomatik Pavé Taş Dağıtımı",
    "shortDesc": "Öğrenci Adımları: 1. Pavé yapılacak kapalı yüzeyi seçin. 2. Pave simgesine Sol Tıklayın. 3. Min ve Max taş çap aralığını (örn: Min: 1.00 mm, Max: 1.40 mm) belirleyin. 4. Fill butonuna basarak yüzeyin mikro taşlarla boşluksuz dolmasını sağlayın ve Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_pave.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Pave",
    "mouseAction": "Sol Tık: Otomatik pavé taş döşeme motorunu açar | Sağ Tık: Son pavé yoğunluğunu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Pave",
        "desc": "Komut satırından Pave aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Mikro pavé diziminde taş kenarlarını birbirine 0.12 mm yaklaştırın. Mıhlayıcı tek bir tırnakla 3-4 taşın birden kenarını sıkıştırarak kilitler (ortak tırnak kuralı).",
    "ttsText": "Pave komutu. Yüzeyleri mikro pırlantalarla boşluksuz doldurur. Taş boyut aralığını belirleyip Enter veya Sağ Tık ile onaylayın."
  },
  "gms_gem_springs": {
    "cmdOptions": [{"name": "MaintainGap=0.10", "desc": "Boşluğu Sabitle: Taş boyutu değişse bile aradaki 0.10 mm mıhlama payını korur."}],
    "cmdPrompt": "Command: _GemSprings\nActivate dynamic spacing springs between gems:",
    "id": "gms_gem_springs",
    "name": "Gem Springs",
    "trName": "Dinamik Taş Yayları",
    "meaning": "Dinamik Taş Yayları",
    "shortDesc": "Öğrenci Adımları: 1. Eğriye dizili taşları seçin. 2. Gem Springs simgesine Sol Tıklayın. 3. Taşlar arasına dinamik yaylar eklenir; bir taşın boyunu değiştirdiğinizde komşu taşlar mesafeyi korumak için otomatik kayar. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_gem_springs.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemSprings",
    "mouseAction": "Sol Tık: Dinamik yay mesafesini etkinleştirir | Sağ Tık: Yayları kilitler",
    "commandSteps": [
      {
        "prompt": "Command: _GemSprings",
        "desc": "Komut satırından Gem Springs aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşteri ortadaki taşı 2 karat yapıp kenarları 1 karata düşürmek istediğinde taşların üst üste binmesini otomatik engelleyen akıllı yay motorudur.",
    "ttsText": "Gem Springs komutu. Taşlar arasına esnek mesafe yayları koyarak otomatik dengeleme yapar."
  },
  "gms_gem_override": {
    "cmdOptions": [{"name": "DetachFromHistory", "desc": "Grup Bağından Ayır: Taşı bağımsız nesne yapar."}],
    "cmdPrompt": "Command: _GemOverride\nSelect gem to override group properties:",
    "id": "gms_gem_override",
    "name": "Gem Override",
    "trName": "Taş Tipini Değiştir",
    "meaning": "Taş Tipini Değiştir",
    "shortDesc": "Öğrenci Adımları: 1. Parametrik bir taş grubunu seçin. 2. Gem Override simgesine Sol Tıklayın. 3. Seçilen taşın grup parametrelerinden bağımsızlaşmasını sağlayarak özel karat veya kesim atayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_gem_override.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemOverride",
    "mouseAction": "Sol Tık: Taş parametrelerini serbest bırakır | Sağ Tık: Gruba geri bağlar",
    "commandSteps": [
      {
        "prompt": "Command: _GemOverride",
        "desc": "Komut satırından Gem Override aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Sıralı taş dizisinde sadece tam merkezdeki taşı renkli safir veya zümrüt yapmak istediğinizde bu komutla tek taşı özelleştirebilirsiniz.",
    "ttsText": "Gem Override komutu. Grup içindeki belirli bir taşı bağımsızlaştırıp özel ayarlar vermenizi sağlar."
  },
  "gms_custom_gem": {
    "cmdOptions": [{"name": "TableRatio", "desc": "Tabla Oranı: Taşın üst tabla genişliğinin toplam çapa oranı (standart: %55 - %60)."}],
    "cmdPrompt": "Command: _CustomGem\nSelect closed curves for custom gem geometry:",
    "id": "gms_custom_gem",
    "name": "Custom Gem Loader",
    "trName": "Özel Taş Kesimi Yükle",
    "meaning": "Özel Taş Kesimi Yükle",
    "shortDesc": "Öğrenci Adımları: 1. Kendi çizdiğiniz fantezi kapalı taş kesitini seçin. 2. Custom Gem simgesine Sol Tıklayın. 3. Taş fasetlerini ve külah derinliğini parametrik olarak tanımlayın. 4. Kütüphaneye özel taş olarak kaydedip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/gems/ribbon/gms_custom_gem.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CustomGem",
    "mouseAction": "Sol Tık: Özel taş tasarım sihirbazını açar | Sağ Tık: Son özel taşı çağırır",
    "commandSteps": [
      {
        "prompt": "Command: _CustomGem",
        "desc": "Komut satırından Custom Gem Loader aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşterinin getirdiği antika veya özel traşlanmış fantezi kesim bir pırlantanın birebir ölçüsünü sisteme tanıtıp yuvasını hatasız açmak için kullanılır.",
    "ttsText": "Custom Gem komutu. Standart dışı özel kesim fantezi taşları tasarlayıp kütüphaneye ekler."
  },
  "gms_gem_placer": {
    "cmdOptions": [{"name": "Size", "desc": "Taş Boyutu: Yerleştirilecek pırlantanın çapı (örn: 1.30 mm)."}, {"name": "NormalOffset", "desc": "Yüzeyden Çıkıntı: Taş kemerinin yüzeyden ne kadar yukarıda duracağını belirler (standart: 0.20 mm)."}],
    "cmdPrompt": "Command: _GemPlacer\nPick location on surface for gem placement ( Size=1.30  NormalOffset=0.00 ):",
    "id": "gms_gem_placer",
    "name": "Gem Placer",
    "trName": "Serbest Taş Yerleştirici",
    "meaning": "Serbest Taş Yerleştirici",
    "shortDesc": "Öğrenci Adımları: 1. Gem Placer simgesine Sol Tıklayın. 2. Taş kütüphanesinden taş boyutunu seçin. 3. 3D yüzey üzerinde taş yerleştirmek istediğiniz noktalara sırayla Sol Tıklayın. Taşlar yüzeyin eğimine tam teğet olarak yapışır. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak sabitleyin.",
    "icon": "icons/gems/ribbon/gms_gem_placer.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemPlacer",
    "mouseAction": "Sol Tık: Yüzeye tek tıkla taş yerleştirir | Sağ Tık: Son taş boyutunu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _GemPlacer",
        "desc": "Komut satırından Gem Placer aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Fantezi yüzüklerde dağınık taş dağıtırken taşların alt külahlarının alttaki astar yüzeyini delip geçmediğinden emin olun (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Gem Placer komutu. Yüzey üzerinde tıklanan her noktaya anında yönlenmiş taş oturtur. Taş boyunu seçip yüzeye tıklayın ve Enter veya Sağ Tık ile onaylayın."
  }
};

function findGemsCommand(cmdId) {
  if (!cmdId) return null;
  if (gemsCommandsCatalog[cmdId]) return gemsCommandsCatalog[cmdId];
  return null;
}

window.gemsRibbonRows = gemsRibbonRows;
window.gemsFlyoutDrawers = gemsFlyoutDrawers;
window.gemsCommandsCatalog = gemsCommandsCatalog;
window.findGemsCommand = findGemsCommand;
