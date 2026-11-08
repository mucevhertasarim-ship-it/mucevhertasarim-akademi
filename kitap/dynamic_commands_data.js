// =====================================================================
// MATRIXGOLD DYNAMIC COMMANDS (AÇILAN CANLI PARAMETRELER) VERİ TABANI
// MatrixGold'da komuta tıklandığında sağ panelde veya ekranda açılan
// parametrik ayarların, slider'ların, açılır menülerin ve atölye standartlarının tam kataloğu.
// =====================================================================

const matrixDynamicConfigs = {
  "jali": {
    panelTitle: "⚡ JALI (KAFES & AJUR DESENİ) - DYNAMIC COMMANDS",
    categoryTag: "✨ MatrixGold Parametrik Ajur Paneli",
    description: "MatrixGold'da Jali simgesine tıklandığında açılan parametrik penceredir. Yüzük içi hafifletme astarı, madalyon veya küpeler için desen boyutunu, açısını ve kaydırmalarını ayarlar.",
    historyActive: true,
    ttsOverview: "Jali parametrik ayar penceresi: Surface ile hedef yüzeyi, Pattern ile desen motifini seçebilirsiniz. Scale deseni büyütüp küçültür, Rotation açısını döndürür. Move Pattern ve Translation ayarları ise deseni yüzeye göre ortalar.",
    jewelerTip: "💡 Yüzük arkasında hafifletme astarı yaparken altın gramajını %30 düşürür. Tel et kalınlığının minimum 0.50 mm altına düşmemesine dikkat edin; aksi halde dökümde hava kalıp tel kopabilir. Kıvrımlı yüzeylerde motiflerin formunu koruması için Rigid kutucuğunu işaretleyin.",
    controls: [
      {
        id: "surface",
        type: "select",
        label: "Surface (Hedef Yüzey)",
        value: "Seçili Yüzey (Brep)",
        options: ["Seçili Yüzey (Brep)", "Yüzük Alt Astarı", "Madalyon Tabanı", "Küpe Yüzeyi"],
        desc: "Kafes deseninin giydirileceği ana 3D yüzeydir.",
        standardNote: "Önce yüzey seçilip komuta girilir."
      },
      {
        id: "pattern",
        type: "select",
        label: "Pattern (Desen Motifi)",
        value: "Arabesque 01 (Klasik)",
        options: ["Arabesque 01 (Klasik)", "Geometric Hex (Petek)", "Floral Vintage (Çiçek)", "Modern Lines (Çizgisel)", "Celtic Knot (Örgü)"],
        desc: "Kütüphaneden uygulanacak ajur/telkari motif şablonu.",
        standardNote: "Kuyumculukta en çok petek ve arabesk tercih edilir."
      },
      {
        id: "scale",
        type: "slider",
        label: "Scale (Ölçek / Hücre Boyutu)",
        value: 1.00,
        min: 0.10,
        max: 5.00,
        step: 0.05,
        unit: "x",
        desc: "Desenin hücre büyüklüğüdür; büyüdükçe seyrekleşir, küçüldükçe sıklaşır.",
        standardNote: "1.00 standart boyuttur."
      },
      {
        id: "rotation",
        type: "slider",
        label: "Rotation (Döndürme Açısı)",
        value: 0,
        min: 0,
        max: 360,
        step: 1,
        unit: "°",
        desc: "Desenin yüzey üzerindeki yönünü derece olarak döndürür.",
        standardNote: "0° yüzey akışına paraleldir."
      },
      {
        id: "moveU",
        type: "slider",
        label: "Move Pattern U (Enine Kaydırma)",
        value: 0.00,
        min: -10.00,
        max: 10.00,
        step: 0.10,
        unit: "",
        desc: "Deseni yüzeyin U (enine) ekseninde sağa-sola kaydırarak ortalar.",
        standardNote: "Simetriyi tutturmak için kullanılır."
      },
      {
        id: "moveV",
        type: "slider",
        label: "Move Pattern V (Boyuna Kaydırma)",
        value: 0.00,
        min: -10.00,
        max: 10.00,
        step: 0.10,
        unit: "",
        desc: "Deseni yüzeyin V (boyuna) ekseninde yukarı-aşağı kaydırır.",
        standardNote: "Kenar bitişlerini hizalamakta kullanılır."
      },
      {
        id: "transUStart",
        type: "slider",
        label: "Translation U Start (U Başlangıç Boşluğu)",
        value: 0.00,
        min: 0.00,
        max: 5.00,
        step: 0.10,
        unit: "mm",
        desc: "Desenin başlangıç kenarından bırakacağı çerçeve et payı mesafesidir.",
        standardNote: "Döküm çerçevesine kaynak payı bırakır."
      },
      {
        id: "transUEnd",
        type: "slider",
        label: "Translation U End (U Bitiş Boşluğu)",
        value: 0.00,
        min: 0.00,
        max: 5.00,
        step: 0.10,
        unit: "mm",
        desc: "Desenin bitiş kenarından bırakacağı çerçeve et payıdır.",
        standardNote: "Bitiş kenarının yırtılmasını önler."
      },
      {
        id: "transVStart",
        type: "slider",
        label: "Translation V Start (V Alt Boşluk)",
        value: 0.00,
        min: 0.00,
        max: 5.00,
        step: 0.10,
        unit: "mm",
        desc: "Desenin alt sınırdan bırakacağı emniyet mesafesidir.",
        standardNote: "Çerçevenin etek kısmını korur."
      },
      {
        id: "transVEnd",
        type: "slider",
        label: "Translation V End (V Üst Boşluk)",
        value: 0.00,
        min: 0.00,
        max: 5.00,
        step: 0.10,
        unit: "mm",
        desc: "Desenin üst sınırdan bırakacağı emniyet mesafesidir.",
        standardNote: "Üst kenarın sağlam kalmasını sağlar."
      },
      {
        id: "rigid",
        type: "toggle",
        label: "Rigid (Rijit / Formu Koruyan Hücre)",
        value: false,
        desc: "Açıldığında bombeli yüzeylerde desen hücrelerinin biçimini bozmadan rijit korur.",
        standardNote: "Bombeli formlarda motifin yamulmasını engeller."
      }
    ]
  },
  // -------------------------------------------------------------
  // TOOLS (KUYUMCU TAKI ARAÇLARI)
  // -------------------------------------------------------------
  "tls_ring_rail": {
    panelTitle: "⚡ RING RAIL (YÜZÜK ÖLÇÜ RAYI) - DYNAMIC COMMAND",
    categoryTag: "💍 Parametrik Ray & Yüzük Standardı",
    description: "MatrixGold'da Ring Rail simgesine tıklandığında sağdaki Dynamic Commands panelinde açılan parametrelerdir. Dünya standartlarında parmak ölçüsünü, halka profilini ve et payını belirler.",
    historyActive: true,
    ttsOverview: "Ring Rail dinamik parametreleri: Parmak numarası standardı, halka profili, genişlik ve et kalınlığı ayarlarını buradan yapabilirsiniz. Türkiye ve Avrupa için 14 numara 17.20 milimetreye denk gelir.",
    jewelerTip: "💡 Altın dökümde yüzük alt etek kalınlığını en az 1.30 mm tutunuz. Zımpara, cila ve ölçü büyütme payı için bu ölçü hayati önem taşır.",
    controls: [
      {
        id: "standard",
        type: "select",
        label: "Ölçü Standardı (Region Standard)",
        value: "Europe (TR / AB)",
        options: ["Europe (TR / AB)", "USA / Canada", "Asia / Japan", "UK / Australia"],
        desc: "Dünya genelindeki kuyumculuk parmak ölçü tablosu.",
        standardNote: "Türkiye'de Avrupa (çevre mm) standardı kullanılır."
      },
      {
        id: "fingerSize",
        type: "slider",
        label: "Parmak Numarası (Finger Size)",
        value: 14,
        min: 8,
        max: 32,
        step: 0.5,
        unit: "No",
        desc: "Yüzüğün iç parmak ölçüsü.",
        standardNote: "14 Numara = 17.20 mm iç çap (Kadın standart)"
      },
      {
        id: "profileShape",
        type: "select",
        label: "Halka Profil Kesiti (Profile Shape)",
        value: "Comfort Fit (Konfor)",
        options: ["Comfort Fit (Konfor)", "Round (Klasik Yuvarlak)", "Flat Band (Düz Alyans)", "European (Düz Tabanlı)", "Cushion (Minder)", "Knife Edge (Bıçak Sırtı)"],
        desc: "Yüzük rayının parmağa temas eden iç ve dış form kesiti.",
        standardNote: "Comfort Fit iç kavis parmağı terletmez ve acıtmaz."
      },
      {
        id: "width",
        type: "slider",
        label: "Bant Genişliği (Band Width)",
        value: 2.50,
        min: 1.20,
        max: 12.00,
        step: 0.10,
        unit: "mm",
        desc: "Alyans veya yüzük kolunun enine genişliği.",
        standardNote: "Tektaş kollarında 1.80 - 2.50 mm idealdir."
      },
      {
        id: "thickness",
        type: "slider",
        label: "Et Kalınlığı (Band Thickness)",
        value: 1.60,
        min: 1.00,
        max: 4.00,
        step: 0.05,
        unit: "mm",
        desc: "Halkanın radyal et kalınlığı.",
        standardNote: "Döküm alt sınırı 1.30 mm, ideal 1.60 mm'dir."
      },
      {
        id: "autoF4",
        type: "toggle",
        label: "Merkeze Sabitle (Origin F4 Snapping)",
        value: true,
        desc: "Halkanın tam merkezini dünya koordinat orijinine (0,0,0) kilitler.",
        standardNote: "Tüm montürün simetrisi için mutlaka açık kalmalıdır."
      }
    ],
    actions: ["🔄 Halka Yönünü Çevir", "📏 F4 Merkezine Sıfırla", "✅ Enter (Ölçüyü Onayla)"]
  },

  "tls_profile_placer": {
    panelTitle: "⚡ PROFILE PLACER (PROFİL YERLEŞTİRİCİ) - DYNAMIC COMMAND",
    categoryTag: "📐 Parametrik Takı Profili & Kesit",
    description: "MatrixGold'da yüzük rayı veya kılavuz çizgi üzerine milimetrik kesit profilleri (D-Shape, Comfort, Knife Edge) yerleştiren dinamik paneldir.",
    historyActive: true,
    ttsOverview: "Profile Placer dinamik parametreleri: Profil kütüphanesinden kesit seçimi, ray üzerindeki konumu, genişlik ve yükseklik ölçülerini canlı ayarlar.",
    jewelerTip: "💡 Üst kafa kısmına doğru genişleyen (tapered) kollarda tepeye 3.00 mm, alt eteğe 2.00 mm profil koyarak zarif bir geçiş elde edin.",
    controls: [
      {
        id: "presetProfile",
        type: "select",
        label: "Kesit Kütüphanesi (Profile Library)",
        value: "D-Shape (Konfor Bombe)",
        options: ["D-Shape (Konfor Bombe)", "Comfort Fit", "Flat (Düz Dikdörtgen)", "Knife Edge (Üçgen)", "Half Round (Yarım Daire)", "Teardrop (Damla)"],
        desc: "Kuyumculuk standartlarında hazır profil eğrileri."
      },
      {
        id: "railPosition",
        type: "select",
        label: "Ray Üzerindeki Pozisyon (Location)",
        value: "Top (0° - Tepe Kafa)",
        options: ["Top (0° - Tepe Kafa)", "Shoulder (45° - Omuz)", "Side (90° - Yan)", "Bottom (180° - Alt Etek)"],
        desc: "Profilin yüzük halkasındaki açısal konumu."
      },
      {
        id: "profileWidth",
        type: "slider",
        label: "Profil Genişliği (Profile Width)",
        value: 2.80,
        min: 1.20,
        max: 10.00,
        step: 0.10,
        unit: "mm",
        desc: "Seçili profildeki yatay genişlik ölçüsü."
      },
      {
        id: "profileHeight",
        type: "slider",
        label: "Profil Yüksekliği (Profile Height)",
        value: 1.80,
        min: 1.00,
        max: 4.50,
        step: 0.05,
        unit: "mm",
        desc: "Halkanın et kalınlığını belirleyen dikey yükseklik."
      },
      {
        id: "mirrorAuto",
        type: "toggle",
        label: "Sağ-Sol Simetrisi (Auto-Mirror)",
        value: true,
        desc: "Sol yarıya konan profili sağ yarıya otomatik olarak kopyalar."
      }
    ],
    actions: ["➕ Yeni Profil Ekle", "🔄 Profili Ters Çevir", "📐 Tüm Profilleri Eşitle"]
  },

  "tls_signet": {
    panelTitle: "⚡ SIGNET RING (ŞÖVALYE ERKEK YÜZÜĞÜ) - DYNAMIC COMMAND",
    categoryTag: "👑 Erkek Yüzüğü & Şövalye Gövdesi",
    description: "Şövalye yüzüklerinde tabla tablası, kol konikliği ve hafifletme kabuğunu (hollow) parametrik olarak oluşturan dinamik komuttur.",
    historyActive: true,
    ttsOverview: "Signet yüzük parametreleri: Tabla formu, tabla en boy ölçüleri, alt kol genişliği ve gramaj düşürme iç boşaltma et kalınlığını buradan kontrol edebilirsiniz.",
    jewelerTip: "💡 Şövalye yüzüğün içi dolu üretilirse 20-30 gram tutar. Shell (iç boşaltma) açarak 1.20 mm et kalınlığı ile ağırlığı 9-11 grama düşürebilirsiniz.",
    controls: [
      {
        id: "topShape",
        type: "select",
        label: "Tabla Şekli (Top Shape)",
        value: "Cushion (Yastık / Minder)",
        options: ["Cushion (Yastık / Minder)", "Oval (Klasik Oval)", "Round (Yuvarlak)", "Octagon (Sekizgen)", "Shield (Kalkan/Arma)"],
        desc: "Yüzüğün üst tepe düzlük tablası."
      },
      {
        id: "topWidthX",
        type: "slider",
        label: "Tabla Genişliği X (Top Width)",
        value: 14.0,
        min: 8.0,
        max: 24.0,
        step: 0.5,
        unit: "mm",
        desc: "Mühür veya taş yuvasının eni."
      },
      {
        id: "topLengthY",
        type: "slider",
        label: "Tabla Boyu Y (Top Length)",
        value: 12.0,
        min: 8.0,
        max: 24.0,
        step: 0.5,
        unit: "mm",
        desc: "Mühür veya taş yuvasının boyu."
      },
      {
        id: "shankBottomWidth",
        type: "slider",
        label: "Alt Kol Genişliği (Bottom Shank)",
        value: 4.5,
        min: 3.0,
        max: 8.0,
        step: 0.2,
        unit: "mm",
        desc: "Parmağın altındaki daralan kol genişliği."
      },
      {
        id: "hollowShell",
        type: "toggle",
        label: "İç Boşaltma (Hollow Shell)",
        value: true,
        desc: "Gramajı düşürmek için alt kovanı boşaltır."
      },
      {
        id: "shellThickness",
        type: "slider",
        label: "Kabuk Et Kalınlığı (Shell Wall)",
        value: 1.20,
        min: 0.80,
        max: 2.00,
        step: 0.05,
        unit: "mm",
        desc: "Döküm sonrası sağlamlık için min 1.00 - 1.20 mm önerilir."
      }
    ],
    actions: ["💎 Üste Taş Yuvası Aç", "🛡️ Yan Kabartma Ekle", "✅ Gövdeyi Tamamla"]
  },

  "tls_cathedral_ring": {
    panelTitle: "⚡ CATHEDRAL RING (KATEDRAL YÜZÜK KOLU) - DYNAMIC COMMAND",
    categoryTag: "⛪ Katedral Yüzük Kolları",
    description: "Taş yuvasını iki taraftan yükselerek destekleyen katedral kollarını oluşturan dinamik komuttur.",
    historyActive: true,
    ttsOverview: "Cathedral Ring parametreleri: Omuz yüksekliği, kemer açıklığı ve katedral köprü genişliğini buradan ayarlayabilirsiniz.",
    jewelerTip: "💡 Katedral köprü yüksekliği merkez taşın kemer hizasından 0.50 mm aşağıda bitmelidir.",
    controls: [
      {
        id: "shoulderHeight",
        type: "slider",
        label: "Omuz Yüksekliği (Shoulder Height)",
        value: 4.20,
        min: 2.00,
        max: 8.00,
        step: 0.10,
        unit: "mm",
        desc: "Kolların merkez taşa doğru yükselme tepe noktası."
      },
      {
        id: "archWidth",
        type: "slider",
        label: "Kemer Genişliği (Arch Width)",
        value: 2.20,
        min: 1.40,
        max: 4.50,
        step: 0.10,
        unit: "mm",
        desc: "Kemerin et kalınlığı ve genişliği."
      },
      {
        id: "bridgeGap",
        type: "slider",
        label: "Taş Boşluğu (Bridge Gap)",
        value: 1.50,
        min: 0.50,
        max: 4.00,
        step: 0.10,
        unit: "mm",
        desc: "Merkez kafa ile katedral kol arasındaki hava boşluğu."
      }
    ],
    actions: ["🔄 Köprüyü Simetriye Al", "✅ Katedral Kolu Birleştir"]
  },

  // -------------------------------------------------------------
  // SETTINGS (YUVALAR VE TIRNAKLAR)
  // -------------------------------------------------------------
  "stg_head": {
    panelTitle: "⚡ HEAD STUDIO (TEKTAŞ KAFASI & MONTAJ YUVASI) - DYNAMIC COMMAND",
    categoryTag: "👑 Tektaş Kafası, Tırnak & Galeri Stüdyosu",
    description: "MatrixGold'un en popüler tektaş oluşturucusu. Tırnak sayısı, tırnak stili (Claw, Round), kuşak (gallery rail), etek (under-bezel) ve montaj sapını (peg) tek ekrandan canlı üretir.",
    historyActive: true,
    ttsOverview: "Head Studio dinamik parametreleri: Merkez taş boyutu, tırnak adedi ve kalınlığı, galeri kuşağı ve taş altı eteği ayarlarını içerir. Altın dökümde tırnak kalınlığını en az 0.85 mm seçiniz.",
    jewelerTip: "💡 Kuyumcu Standardı: 1 karat taş (6.50 mm) için 4 veya 6 tırnak kullanılır. Döküm ve cila fire kaybından sonra taşın düşmemesi için tırnak kalınlığı en az 0.85 mm, taş üstü kavrama 0.35 mm olmalıdır.",
    controls: [
      {
        id: "gemShape",
        type: "select",
        label: "Taş Kesimi (Center Gem Shape)",
        value: "Round Brilliant",
        options: ["Round Brilliant", "Princess (Kare)", "Oval", "Emerald (Zümrüt)", "Cushion", "Pear (Damla)", "Marquise (Markiz)"],
        desc: "Merkez taşın geometrisi."
      },
      {
        id: "gemSize",
        type: "slider",
        label: "Taş Boyutu (Gem Size / Carat)",
        value: 6.50,
        min: 3.50,
        max: 12.00,
        step: 0.10,
        unit: "mm (1.00 ct)",
        desc: "Pırlanta veya değerli taşın milimetre çapı.",
        standardNote: "6.5 mm = 1.00 ct, 5.2 mm = 0.50 ct, 7.4 mm = 1.50 ct"
      },
      {
        id: "prongCount",
        type: "select",
        label: "Tırnak Adedi (Prong Count)",
        value: "4 Tırnak (Standart)",
        options: ["3 Tırnak", "4 Tırnak (Standart)", "6 Tırnak (Klasik Tiffany)", "8 Tırnak"],
        desc: "Taşı tutacak tırnak sayısı."
      },
      {
        id: "prongStyle",
        type: "select",
        label: "Tırnak Uç Stili (Prong Style)",
        value: "Claw (Kartal Pençesi)",
        options: ["Claw (Kartal Pençesi)", "Round (Yuvarlak Uç)", "Square (Kare)", "Flat Top (Düz)", "V-End (Köşe Koruyucu)"],
        desc: "Tırnağın taş üstünde biten estetik formu."
      },
      {
        id: "prongDiameter",
        type: "slider",
        label: "Tırnak Kalınlığı (Prong Diameter)",
        value: 0.85,
        min: 0.65,
        max: 1.40,
        step: 0.05,
        unit: "mm",
        desc: "Tırnak telinin çapı.",
        standardNote: "Atölye döküm ve mıhlama standardı: min 0.85 mm!"
      },
      {
        id: "prongOverlap",
        type: "slider",
        label: "Taş Üstü Kavrama (Prong Overlap)",
        value: 0.35,
        min: 0.15,
        max: 0.60,
        step: 0.05,
        unit: "mm",
        desc: "Tırnağın taşın üst tablasına doğru eğilip kavrama miktarı."
      },
      {
        id: "hasGalleryRail",
        type: "toggle",
        label: "Galeri Kuşağı (Gallery Rail)",
        value: true,
        desc: "Tırnakların arasını bağlayan takviye çemberi (Taşın sallanmasını önler).",
        standardNote: "Kuşak kalınlığı min 0.35 mm olmalıdır."
      },
      {
        id: "galleryHeight",
        type: "slider",
        label: "Kuşak Yüksekliği (Rail Height %)",
        value: 45,
        min: 20,
        max: 75,
        step: 5,
        unit: "%",
        desc: "Kuşağın tırnak boyuna göre dikey konumu."
      },
      {
        id: "hasUnderBezel",
        type: "toggle",
        label: "Taş Altı Eteği (Under-Bezel Seat)",
        value: true,
        desc: "Taşın külahının üzerine oturacağı alt halka tablası."
      },
      {
        id: "hasBasePeg",
        type: "toggle",
        label: "Montaj Sapı / Pimi (Base Peg)",
        value: true,
        desc: "Kafayı yüzük koluna lehimlemek/oturtmak için alt montür pimi."
      }
    ],
    actions: ["💎 Taşı Değiştir", "📐 Tırnak Açısını Yatır", "✅ Kafayı Kol Üzerine Oturt"]
  },

  "stg_prong_placer": {
    panelTitle: "⚡ PRONG PLACER (TIRNAK YERLEŞTİRİCİ) - DYNAMIC COMMAND",
    categoryTag: "🔩 Serbest ve Otomatik Tırnak Dizimi",
    description: "Herhangi bir taş veya taş grubu üzerine tırnakları otomatik veya serbest olarak yerleştiren parametrik araçtır.",
    historyActive: true,
    ttsOverview: "Prong Placer parametreleri: Tırnak adedi, çapı, yüksekliği, konikliği ve içe yatma açısını canlı olarak kontrol etmenizi sağlar.",
    jewelerTip: "💡 Tırnak konikliğini (Taper) %10-15 vererek tırnak tabanını kalın (1.00 mm), ucunu 0.85 mm yaparsanız döküm mukavemeti iki katına çıkar.",
    controls: [
      {
        id: "count",
        type: "slider",
        label: "Tırnak Adedi (Prongs Count)",
        value: 4,
        min: 2,
        max: 12,
        step: 1,
        unit: "Adet",
        desc: "Taş etrafına dizilecek tırnak sayısı."
      },
      {
        id: "diameter",
        type: "slider",
        label: "Tırnak Çapı (Prong Diameter)",
        value: 0.85,
        min: 0.60,
        max: 1.30,
        step: 0.05,
        unit: "mm",
        desc: "Tırnak kalınlığı (min 0.85 mm)."
      },
      {
        id: "heightAbove",
        type: "slider",
        label: "Kemer Üstü Payı (Height Above Girdle)",
        value: 0.35,
        min: 0.15,
        max: 0.60,
        step: 0.05,
        unit: "mm",
        desc: "Mıhlayıcının taşı yatırıp ezmesi için tırnak payı."
      },
      {
        id: "taper",
        type: "slider",
        label: "Konik Daralma (Taper)",
        value: 12,
        min: 0,
        max: 30,
        step: 2,
        unit: "%",
        desc: "Tırnağın uca doğru zarifçe daralması."
      },
      {
        id: "nudgeTilt",
        type: "slider",
        label: "İçe Yatma Açısı (Inward Tilt)",
        value: 5.0,
        min: 0.0,
        max: 20.0,
        step: 0.5,
        unit: "°",
        desc: "Tırnağın taşa doğru eğimi."
      }
    ],
    actions: ["🔄 Tırnakları Döndür", "✂️ Fazlalığı Kırp", "✅ Uygula"]
  },

  "stg_bezel": {
    panelTitle: "⚡ BEZEL STUDIO (SIVAMA YUVA) - DYNAMIC COMMAND",
    categoryTag: "💍 Sıvama Taş Yuvası",
    description: "Taşın çevresini madenle sararak tutan sıvama yuva stüdyosudur. Et kalınlığı, sıvama çekiç payı ve külah açıklığını canlı belirler.",
    historyActive: true,
    ttsOverview: "Bezel Studio parametreleri: Sıvama et kalınlığı, taş üstü payı, koniklik açısı ve külah deliği ayarlarını içerir. Döküm ve zımpara payı için et kalınlığı en az 0.40 mm olmalıdır.",
    jewelerTip: "💡 Sıvama yuvada et kalınlığı döküm ve zımpara payı için en az 0.40 mm, taş üstü sıvama çekiç payı 0.30-0.35 mm olmalıdır.",
    controls: [
      {
        id: "wallThickness",
        type: "slider",
        label: "Sıvama Et Kalınlığı (Wall Thickness)",
        value: 0.45,
        min: 0.30,
        max: 1.00,
        step: 0.05,
        unit: "mm",
        desc: "Taşın etrafındaki maden duvar kalınlığı.",
        standardNote: "Döküm toleransı için en az 0.40 mm olmalıdır."
      },
      {
        id: "heightAbove",
        type: "slider",
        label: "Taş Üstü Sıvama Payı (Height Above Girdle)",
        value: 0.35,
        min: 0.20,
        max: 0.60,
        step: 0.05,
        unit: "mm",
        desc: "Mıhlayıcının çekiç veya kalemin arkasıyla ezeceği pay."
      },
      {
        id: "seatDepth",
        type: "slider",
        label: "Oturma Tabanı (Seat Depth)",
        value: 0.30,
        min: 0.15,
        max: 0.60,
        step: 0.05,
        unit: "mm",
        desc: "Taşın kemerinin oturacağı iç kademe payı."
      },
      {
        id: "taperAngle",
        type: "slider",
        label: "Dış Koniklik Açısı (Taper Angle)",
        value: 8.0,
        min: 0.0,
        max: 20.0,
        step: 1.0,
        unit: "°",
        desc: "Yuvanın dışa doğru zarif açılması."
      },
      {
        id: "culetHole",
        type: "toggle",
        label: "Taban Işık/Temizlik Deliği (Culet Hole)",
        value: true,
        desc: "Taşın arkasından ışık alması ve ultrasonik yıkamada kir tutmaması için açık delik."
      }
    ],
    actions: ["💎 Taşla Eşle", "🔄 Yuvayı Ters Çevir", "✅ Sıvamayı Uygula"]
  },

  "stg_halo": {
    panelTitle: "⚡ HALO STUDIO (TAŞ ÇERÇEVESİ) - DYNAMIC COMMAND",
    categoryTag: "✨ Halo & Çevre Taş Stüdyosu",
    description: "Merkez taşın etrafına sıralı pırlanta veya renkli taşlarla çerçeve (halo) ören dinamik komuttur.",
    historyActive: true,
    ttsOverview: "Halo Studio parametreleri: Çerçeve taş boyutu, taş aralıkları, tırnak stili ve alt galeri kuşağını ayarlar.",
    jewelerTip: "💡 Halo taşları merkez taşın tablasıyla aynı hizada olmalı veya en fazla 0.30 mm aşağıda kalmalıdır.",
    controls: [
      {
        id: "gemSize",
        type: "slider",
        label: "Çerçeve Taş Boyutu (Halo Gem Size)",
        value: 1.30,
        min: 0.80,
        max: 2.20,
        step: 0.05,
        unit: "mm",
        desc: "Etrafı saran küçük taşların çapı."
      },
      {
        id: "spacing",
        type: "slider",
        label: "Taş Arası Boşluk (Gem Spacing)",
        value: 0.18,
        min: 0.10,
        max: 0.35,
        step: 0.02,
        unit: "mm",
        desc: "Mikromıhlama için taşlar arası ideal boşluk."
      },
      {
        id: "centerOffset",
        type: "slider",
        label: "Merkezden Uzaklık (Offset from Center)",
        value: 0.25,
        min: 0.10,
        max: 0.60,
        step: 0.05,
        unit: "mm",
        desc: "Merkez taş ile halo taşları arasındaki metal payı."
      },
      {
        id: "prongStyle",
        type: "select",
        label: "Mıhlama Stili (Setting Style)",
        value: "Shared Prongs (Ortak Tırnak)",
        options: ["Shared Prongs (Ortak Tırnak)", "4-Prong Micro Pave", "U-Cut Fishtail", "Channel Halo (Kanallı)"],
        desc: "Halo taşlarının tutunma tarzı."
      },
      {
        id: "underGallery",
        type: "toggle",
        label: "Alt Takviye Galerisi (Under Gallery)",
        value: true,
        desc: "Halo çerçevesinin altına takviye çemberi ekler."
      }
    ],
    actions: ["💎 Taşları Otomatik Diz", "🔩 Tırnakları Üret", "✅ Halo'yu Tamamla"]
  },

  "stg_bail": {
    panelTitle: "⚡ BAIL (KULP / KOLYE UCU HALKASI) - DYNAMIC COMMAND",
    categoryTag: "📿 Kolye Ucu Kulpu (Bail)",
    description: "Kolye uçlarının zincire takılmasını sağlayan standart veya kilitli kulpları parametrik üreten araçtır.",
    historyActive: true,
    ttsOverview: "Bail dinamik parametreleri: Kulp stili, iç zincir geçiş deliği, et kalınlığı ve montaj halkası ayarlarını içerir. Zincir kilit geçişi için iç delik en az 3.50 milimetre olmalıdır.",
    jewelerTip: "💡 Kuyumcu Standardı: Zincir kilidinin rahat geçmesi için kulp iç deliği en az 3.50 mm olmalıdır. Kopma ve aşınmaya karşı et kalınlığı min 0.85 mm tutulmalıdır.",
    controls: [
      {
        id: "bailStyle",
        type: "select",
        label: "Kulp Tasarım Stili (Bail Style)",
        value: "Tapered Oval (Klasik Konik)",
        options: ["Tapered Oval (Klasik Konik)", "V-Bail (Modern V Form)", "Round Wire (Sade Tel Halka)", "Hinged Bail (Açılır Kilitli)"],
        desc: "Kulpun genel silüeti."
      },
      {
        id: "holeHeight",
        type: "slider",
        label: "İç Delik Yüksekliği (Hole Height)",
        value: 4.80,
        min: 2.50,
        max: 10.00,
        step: 0.10,
        unit: "mm",
        desc: "Zincirin ve kilit halkasının geçeceği dikey açıklık.",
        standardNote: "Atölye standardı: en az 3.50 mm olmalıdır!"
      },
      {
        id: "holeWidth",
        type: "slider",
        label: "İç Delik Genişliği (Hole Width)",
        value: 3.60,
        min: 1.80,
        max: 8.00,
        step: 0.10,
        unit: "mm",
        desc: "Zincirin rahat dönmesi için yatay açıklık."
      },
      {
        id: "thickness",
        type: "slider",
        label: "Kulp Et Kalınlığı (Wall Thickness)",
        value: 0.90,
        min: 0.60,
        max: 1.80,
        step: 0.05,
        unit: "mm",
        desc: "Sürtünmeden dolayı zincirin kulpu kesmemesi için et payı.",
        standardNote: "Kopma ve aşınmaya karşı min 0.85 mm önerilir."
      },
      {
        id: "attachLoop",
        type: "toggle",
        label: "Bağlantı Montaj Halkası (Jump Ring Loop)",
        value: true,
        desc: "Kolye ucuna kaynatılacak alt ara halkayı ekler."
      }
    ],
    actions: ["🔄 Kulpu Kolye Ucuna Hizala", "📏 Zincir Uyumluluğunu Kontrol Et", "✅ Onayla"]
  },

  // -------------------------------------------------------------
  // CUTTERS (KESİCİLER / KANAL AÇICILAR)
  // -------------------------------------------------------------
  "ctr_gem_cutter": {
    panelTitle: "⚡ GEM CUTTER (TAŞ YUVASI VE KÜLAH BIÇAĞI) - DYNAMIC COMMAND",
    categoryTag: "🔪 Taş Bıçağı & Yuva Boşaltıcı",
    description: "Taşların altına tam uyumlu pavyon yuvası, oturma basamağı ve alt temizlik deliği açan parametrik bıçak aracıdır.",
    historyActive: true,
    ttsOverview: "Gem Cutter dinamik parametreleri: Kemer kesim genişliği, alt pavyon boyu, oturma açısı ve temizlik deliği çapını canlı olarak belirler.",
    jewelerTip: "💡 Kuyumcu Kuralı: Alt pavyon kesimini %100 açık tutarak madenin altını delin. Taşın altında kir birikmemesi için taban temizlik deliği en az 0.70 mm olmalıdır.",
    controls: [
      {
        id: "girdleCut",
        type: "slider",
        label: "Kemer Genişletme Payı (Girdle Cut %)",
        value: 102,
        min: 100,
        max: 110,
        step: 1,
        unit: "%",
        desc: "Taşın yuvasına sıkışmadan rahatça girmesi için tolerans payı.",
        standardNote: "%102 ideal oturma sağlar."
      },
      {
        id: "lowerCut",
        type: "slider",
        label: "Alt Pavyon Boyu (Lower Cut %)",
        value: 100,
        min: 40,
        max: 160,
        step: 5,
        unit: "%",
        desc: "Bıçağın taş külahından ne kadar aşağıya uzanacağı.",
        standardNote: "%100 ile madenin altını tam deler."
      },
      {
        id: "culetHole",
        type: "slider",
        label: "Temizlik Deliği Çapı (Culet Drill Hole)",
        value: 0.70,
        min: 0.40,
        max: 1.40,
        step: 0.05,
        unit: "mm",
        desc: "Taşın sivri külahının madene çarpmaması ve kir tahliyesi için delik.",
        standardNote: "Atölye standardı: min 0.60 - 0.70 mm!"
      },
      {
        id: "seatAngle",
        type: "slider",
        label: "Oturma Açısı (Seat Angle)",
        value: 41.0,
        min: 35.0,
        max: 48.0,
        step: 0.5,
        unit: "°",
        desc: "Pırlanta pavyon açısıyla (40.75°) birebir eşleşme açısı."
      },
      {
        id: "upperClearance",
        type: "slider",
        label: "Üst Boşluk Payı (Upper Crown Clearance)",
        value: 0.20,
        min: 0.00,
        max: 1.00,
        step: 0.05,
        unit: "mm",
        desc: "Taşın taç kısmındaki emniyet boşluğu."
      }
    ],
    actions: ["⚡ Boolean Difference ile Madeni Kes", "🔄 Bıçak Boyunu Uzat", "✅ Kesicileri Sabitle"]
  },

  "ctr_channel_cutter": {
    panelTitle: "⚡ CHANNEL CUTTER (KANAL KESİCİSİ) - DYNAMIC COMMAND",
    categoryTag: "📏 Kanal Mıhlama Kesme Aracı",
    description: "Sıralı kanal taşları için yüzük kollarına ve yüzeylere milimetrik kanal yuvası kesen dinamik araçtır.",
    historyActive: true,
    ttsOverview: "Channel Cutter parametreleri: Kanal derinliği, duvar eğim açısı, taş oturma basamağı ve kanal ucu kapatma formunu kontrol eder.",
    jewelerTip: "💡 Kanal duvarına 5° içe eğim (draft angle) vermek dökümün kalıptan rahat çıkmasını sağlar ve mıhlayıcının metali taş üstüne ezmesini kolaylaştırır.",
    controls: [
      {
        id: "depth",
        type: "slider",
        label: "Kanal Derinliği (Channel Depth)",
        value: 1.30,
        min: 0.80,
        max: 2.50,
        step: 0.05,
        unit: "mm",
        desc: "Kanalın maden içine inme derinliği."
      },
      {
        id: "wallAngle",
        type: "slider",
        label: "Kanal Duvar Açısı (Wall Draft Angle)",
        value: 5.0,
        min: 0.0,
        max: 15.0,
        step: 0.5,
        unit: "°",
        desc: "Sıvama ve döküm kolaylığı için kanal yan duvarı açısı."
      },
      {
        id: "seatOffset",
        type: "slider",
        label: "Oturma Basamak Payı (Seat Offset)",
        value: 0.28,
        min: 0.15,
        max: 0.50,
        step: 0.02,
        unit: "mm",
        desc: "Taşların kemerinin oturacağı iç omuz payı."
      },
      {
        id: "endCapStyle",
        type: "select",
        label: "Kanal Bitiş Uçları (End Caps)",
        value: "Round Cap (Yuvarlak Bitiş)",
        options: ["Round Cap (Yuvarlak Bitiş)", "Flat Cap (Düz Bitiş)", "Open Through (Boydan Boya Açık)"],
        desc: "Kanalın iki uç noktasındaki kapanma formu."
      }
    ],
    actions: ["⚡ Kanalı Madenden Çıkar (Boolean)", "✅ Kanalı Onayla"]
  },

  "ctr_micro_prong_cutter": {
    panelTitle: "⚡ MICRO PRONG CUTTER (MİKRO TIRNAK KESİCİSİ) - DYNAMIC COMMAND",
    categoryTag: "✂️ Pavé & Mikro Mıhlama Bıçağı",
    description: "Fransız V-Cut (Fishtail) pavé dizimlerinde taşların arasındaki metal kanallarını ve yan V çentiklerini kesen özel bıçaktır.",
    historyActive: true,
    ttsOverview: "Micro Prong Cutter parametreleri: Bıçak genişliği, V kesim açısı, derinlik ve yan çentik payını içerir.",
    jewelerTip: "💡 Fishtail pavé kesiminde 45° açı ile kesim yapmak, taşların tırnaklarının tezgâhta el kalemiyle atılmış gibi parlamasını sağlar.",
    controls: [
      {
        id: "cutterWidth",
        type: "slider",
        label: "Bıçak Genişliği (Cutter Width)",
        value: 0.35,
        min: 0.20,
        max: 0.60,
        step: 0.02,
        unit: "mm",
        desc: "Mikro tırnakların arasına giren kesici genişliği."
      },
      {
        id: "cutAngle",
        type: "slider",
        label: "V Çentik Açısı (V-Cut Angle)",
        value: 45.0,
        min: 30.0,
        max: 60.0,
        step: 1.0,
        unit: "°",
        desc: "Yan duvarda açılacak V kanalının açısı."
      },
      {
        id: "cutDepth",
        type: "slider",
        label: "Kesim Derinliği (Cut Depth)",
        value: 0.40,
        min: 0.20,
        max: 0.80,
        step: 0.02,
        unit: "mm",
        desc: "Yüzeyden aşağıya inme miktarı."
      }
    ],
    actions: ["⚡ V-Cut Kesimini Uygula", "✅ Onayla"]
  },

  "ctr_cut_to_rail": {
    panelTitle: "⚡ CUT TO RING RAIL (RAY İÇİ FAZLALIKLARI KESİCİ) - DYNAMIC COMMAND",
    categoryTag: "💍 Parmak İçi Temizleme Bıçağı",
    description: "Yüzük parmak deliğinin içine taşan tırnak, kadeh veya taş kesici kısımlarını tek tıkla parmak kavisinde temizleyen parametrik araçtır.",
    historyActive: true,
    ttsOverview: "Cut To Ring Rail: Parmak içine taşan tüm montür ve tırnak fazlalıklarını halkanın iç kavisinde sıfıra sıfır kesip temizler.",
    jewelerTip: "💡 Parmak içinde 0.05 mm dışa pay bırakıp iç kenara 0.30 mm konfor pahı (fillet) vermek parmağın rahat girmesini sağlar.",
    controls: [
      {
        id: "offsetMargin",
        type: "slider",
        label: "Pah Tolerans Payı (Offset Margin)",
        value: 0.05,
        min: 0.00,
        max: 0.30,
        step: 0.02,
        unit: "mm",
        desc: "Raydan parmak içine veya dışına emniyet payı."
      },
      {
        id: "comfortEdge",
        type: "toggle",
        label: "Konfor Pahı Ekle (Comfort Fillet)",
        value: true,
        desc: "Kesilen kenara parmağı acıtmayacak yumuşak kavis verir."
      }
    ],
    actions: ["⚡ Ray İçi Fazlalıkları Kes", "✅ Temizliği Tamamla"]
  },

  // -------------------------------------------------------------
  // GEMS (DEĞERLİ TAŞLAR)
  // -------------------------------------------------------------
  "gms_gem_on_curve": {
    panelTitle: "⚡ GEM ON CURVE (ÇİZGİYE TAŞ DİZİCİ) - DYNAMIC COMMAND",
    categoryTag: "💎 Çizgi & Ray Boyunca Taş Dizimi",
    description: "Herhangi bir 2D veya 3D eğri (Curve) üzerine milimetrik taş dizimi yapan parametrik araçtır. Aralık, adet ve kademeli (graduated) dizimleri destekler.",
    historyActive: true,
    ttsOverview: "Gem on Curve dinamik parametreleri: Taş çapı, taşlar arası boşluk mesafesi, dizilim modu ve taşların eğriye göre açısını ayarlar. Mikromıhlama için taş arası boşluğu 0.18 milimetre tutunuz.",
    jewelerTip: "💡 Mikromıhlamada taş arası boşluk 0.15 - 0.20 mm olmalıdır. Taşlar birbirine değerse dökümde çatlar veya mıhlanamaz; çok açık kalırsa aradaki maden kötü görünür.",
    controls: [
      {
        id: "gemSize",
        type: "slider",
        label: "Taş Çapı (Gem Diameter)",
        value: 1.50,
        min: 0.80,
        max: 4.50,
        step: 0.05,
        unit: "mm",
        desc: "Dizilecek pırlanta veya zirkon taşların çapı."
      },
      {
        id: "spacing",
        type: "slider",
        label: "Taş Arası Boşluk (Gem Spacing)",
        value: 0.18,
        min: 0.08,
        max: 0.50,
        step: 0.02,
        unit: "mm",
        desc: "İki taş arasındaki milimetrik mesafe.",
        standardNote: "Mikromıhlama altın kuralı: 0.18 mm!"
      },
      {
        id: "layoutMode",
        type: "select",
        label: "Dizilim Modu (Layout Mode)",
        value: "By Spacing (Sabit Aralık)",
        options: ["By Spacing (Sabit Aralık)", "By Count (Sabit Adet)", "Graduated (Büyükten Küçüğe Kademeli)"],
        desc: "Taşların çizgiye dağıtılma kuralı."
      },
      {
        id: "startOffset",
        type: "slider",
        label: "Başlangıç Boşluğu (Start Offset)",
        value: 0.50,
        min: 0.00,
        max: 3.00,
        step: 0.10,
        unit: "mm",
        desc: "Çizginin ucundan ilk taşa kadar olan mesafe."
      },
      {
        id: "orientation",
        type: "select",
        label: "Duruş Açısı (Orientation)",
        value: "Normal to Surface (Yüzeye Dik)",
        options: ["Normal to Surface (Yüzeye Dik)", "World Z (Dünya Dikey)", "Curve Tangent (Eğri Teğeti)"],
        desc: "Taş tablalarının yöneldiği açı."
      }
    ],
    actions: ["🔄 Taşların Yönünü Ters Çevir", "💎 Kademeli Ölçülere Geç", "✅ Taşları Diz"]
  },

  "gms_pave": {
    panelTitle: "⚡ PAVE (YÜZEYE PAVÉ TAŞ DİZİCİ) - DYNAMIC COMMAND",
    categoryTag: "✨ Yüzey Pavé Pırlanta Dizimi",
    description: "Kuyumcu yüzük ve kolyelerinde 3 boyutlu yüzeylerin üzerini bal peteği (honeycomb) veya ızgara tarzında sıkı taşlarla kaplayan dinamik pavé stüdyosudur.",
    historyActive: true,
    ttsOverview: "Pave stüdyosu dinamik parametreleri: Taş çapı, taş arası mesafe, kenar emniyet payı ve otomatik tırnak yerleşimini canlı üretir.",
    jewelerTip: "💡 Yüzey pavé diziminde kenar sınır payını (Border Offset) en az 0.25 mm tutun ki mıhlayıcı dış kenara kalem atıp parlatabilsin.",
    controls: [
      {
        id: "gemSize",
        type: "slider",
        label: "Taş Çapı (Gem Size)",
        value: 1.20,
        min: 0.80,
        max: 2.50,
        step: 0.05,
        unit: "mm",
        desc: "Pavé alanındaki standart taş boyutu."
      },
      {
        id: "spacing",
        type: "slider",
        label: "Taşlar Arası Mesafe (Spacing)",
        value: 0.18,
        min: 0.10,
        max: 0.35,
        step: 0.02,
        unit: "mm",
        desc: "Taşların birbirine değmemesi için mikromıhlama payı."
      },
      {
        id: "borderOffset",
        type: "slider",
        label: "Kenar Emniyet Payı (Border Offset)",
        value: 0.25,
        min: 0.15,
        max: 0.60,
        step: 0.05,
        unit: "mm",
        desc: "Yüzey sınırından taşlara olan mesafe."
      },
      {
        id: "pattern",
        type: "select",
        label: "Dizilim Deseni (Pattern)",
        value: "Honeycomb (Bal Peteği)",
        options: ["Honeycomb (Bal Peteği - En Sık)", "Square Grid (Kare Izgara)", "Radial (Dairesel)"],
        desc: "Taşların birbiri arasına oturma geometrisi."
      },
      {
        id: "autoProngs",
        type: "toggle",
        label: "Otomatik Tırnak Ekle (Auto Prongs)",
        value: true,
        desc: "Taşların kesişim noktalarına tırnakları eş zamanlı yerleştirir."
      }
    ],
    actions: ["💎 Taş Yoğunluğunu Artır", "🔩 Tırnakları Eşitle", "✅ Pavé'yi Onayla"]
  },

  "gms_gem_placer": {
    panelTitle: "⚡ GEM PLACER (TEK TAŞ YERLEŞTİRİCİ) - DYNAMIC COMMAND",
    categoryTag: "💎 Serbest ve Yüzeye Taş Yerleştirme",
    description: "Sahnede istenen noktaya pırlanta veya renkli taşları karat/milimetre cinsinden yönlendirerek yerleştiren araçtır.",
    historyActive: true,
    ttsOverview: "Gem Placer parametreleri: Taş kesim formu, milimetre veya karat boyutu, açısı ve yüzeye mıknatıslanma durumunu ayarlar.",
    jewelerTip: "💡 Taşları yerleştirirken yüzeye dik (Snap to Surface Normal) seçeneğini açık tutun; aksi halde taş yamuk oturur ve yuvası delinirken madeni bozar.",
    controls: [
      {
        id: "cutShape",
        type: "select",
        label: "Taş Kesim Şekli (Gem Cut)",
        value: "Round Brilliant",
        options: ["Round Brilliant", "Princess", "Baguette", "Emerald", "Marquise", "Oval", "Pear", "Cushion", "Heart", "Trilliant"],
        desc: "Taşın kuyumculuk kesim geometrisi."
      },
      {
        id: "sizeMm",
        type: "slider",
        label: "Taş Çapı / Boyutu (Size mm)",
        value: 6.50,
        min: 1.00,
        max: 14.00,
        step: 0.10,
        unit: "mm",
        desc: "Taşın genişlik ölçüsü."
      },
      {
        id: "rotation",
        type: "slider",
        label: "Döndürme Açısı (Rotation Z)",
        value: 0.0,
        min: 0.0,
        max: 360.0,
        step: 5.0,
        unit: "°",
        desc: "Taşın faset yönünü ayarlayan açı."
      },
      {
        id: "snapSurface",
        type: "toggle",
        label: "Yüzeye Otomatik Mıknatısla (Snap to Surface)",
        value: true,
        desc: "Fareyi yüzey üzerinde gezdirdikçe taşı yüzey normaline dik kilitler."
      }
    ],
    actions: ["📏 Taş Ağırlığını (Karat) Hesapla", "✅ Taşı Sabitle"]
  },

  // -------------------------------------------------------------
  // SOLID & SURFACE & MANUFACTURING
  // -------------------------------------------------------------
  "profile_sweep": {
    panelTitle: "⚡ PROFILE SWEEP (RAY VE PROFİLLE KATI OLUŞTURUCU) - DYNAMIC COMMAND",
    categoryTag: "🪄 Sweep & Ray Üzerinde Kesit Sürme",
    description: "Yüzük rayı üzerindeki kesit profillerini birbirine bağlayarak dikişsiz 3 boyutlu katı yüzük gövdesi üreten ana araçtır.",
    historyActive: true,
    ttsOverview: "Profile Sweep parametreleri: Form yüksekliğini koruma, kapalı halka birleştirme ve köşe geçiş yumuşaklığı ayarlarını içerir.",
    jewelerTip: "💡 Kapalı yüzüklerde 'Closed Sweep' açık olmalıdır; aksi halde başlama ve bitiş noktasında 0.001 mm'lik mikro açıklık kalır ve Boolean işlemleri bozulur.",
    controls: [
      {
        id: "maintainHeight",
        type: "toggle",
        label: "Yüksekliği Sabit Koru (Maintain Height)",
        value: true,
        desc: "Profil ray boyunca uzarken et kalınlığının basılmasını önler."
      },
      {
        id: "closedSweep",
        type: "toggle",
        label: "Tam Kapalı Halka (Closed Sweep)",
        value: true,
        desc: "Yüzüğün başı ve sonunu birbirine su geçirmez (watertight solid) olarak kaynatır."
      },
      {
        id: "cornerType",
        type: "select",
        label: "Köşe Geçiş Tipi (Corner Style)",
        value: "Smooth (Yumuşak Kavis)",
        options: ["Smooth (Yumuşak Kavis)", "Sharp (Sert Köşe)", "Miter (Pahlı Açılı)"],
        desc: "Keskin dönüşlerde profilin davranış biçimi."
      }
    ],
    actions: ["🔄 Profilleri Yeniden Sırala", "✅ Katıyı Oluştur"]
  },

  "sld_pipe_mg": {
    panelTitle: "⚡ PIPE (PARAMETRİK BORU / FİTİL) - DYNAMIC COMMAND",
    categoryTag: "🟣 Katı Tel & Fitil Stüdyosu",
    description: "Herhangi bir eğri boyunca dairesel katı tel, halka veya içi boş boru üreten temel kuyumcu aracıdır.",
    historyActive: true,
    ttsOverview: "Pipe parametreleri: Tel yarıçapı, uç kapatma şekli ve içi boşaltma et payını ayarlar. Kolye ucu kulplarında en az 0.85 milimetre yarıçap önerilir.",
    jewelerTip: "💡 Tırnak veya fitil yaparken Cap Style'ı 'Round Cap' (Küre başlık) seçerseniz tırnak ucu kendiliğinden estetik olarak yuvarlanır.",
    controls: [
      {
        id: "radius",
        type: "slider",
        label: "Tel Yarıçapı (Radius mm)",
        value: 0.85,
        min: 0.30,
        max: 4.00,
        step: 0.05,
        unit: "mm",
        desc: "Borunun merkezden dışa yarıçapı (Çap = 2 x Radius)."
      },
      {
        id: "capStyle",
        type: "select",
        label: "Uç Kapatma (Cap Style)",
        value: "Round (Küre Kapak)",
        options: ["Round (Küre Kapak - Tırnak Ucu)", "Flat (Düz Kapak)", "None (İçi Açık Boru)"],
        desc: "Borunun başlangıç ve bitiş uçlarının formu."
      },
      {
        id: "thickHollow",
        type: "slider",
        label: "İç Boşaltma Et Kalınlığı (Thick Wall)",
        value: 0.0,
        min: 0.0,
        max: 1.5,
        step: 0.05,
        unit: "mm",
        desc: "0.0 seçilirse içi dolu tel üretir; değer girilirse içi boş boru yapar."
      }
    ],
    actions: ["📏 Çapa Göre Ölç", "✅ Pipe Katısını Üret"]
  },

  "mfg_sprue_dyn": {
    panelTitle: "⚡ SPRUE DYNAMIC (DÖKÜM YOLLUĞU) - DYNAMIC COMMAND",
    categoryTag: "🏭 Döküm & Atölye İmalat Desteği",
    description: "3D baskı ve altın/gümüş dökümünde madenin kalıba akmasını sağlayan ana ve yan döküm yolluklarını bağlayan dinamik araçtır.",
    historyActive: true,
    ttsOverview: "Sprue Dynamic parametreleri: Döküm yolluk çapı, taban daralma konikliği ve dal sayısını canlı ayarlar. Yolluğu daima modelin en kalın etli yerine bağlayınız.",
    jewelerTip: "💡 Döküm Kuralı: Ana yolluk çapı yüzük için en az 2.00 mm - 2.50 mm olmalıdır. Model ile yolluğun birleştiği yere 15° koniklik verilirse döküm sonrası kesilip zımparalanması çok kolay olur.",
    controls: [
      {
        id: "sprueDiameter",
        type: "slider",
        label: "Yolluk Çapı (Sprue Diameter)",
        value: 2.20,
        min: 1.20,
        max: 4.00,
        step: 0.10,
        unit: "mm",
        desc: "Sıvı madenin aktığı silindirik kanal çapı.",
        standardNote: "Altın dökümde ana yolluk en az 2.00 mm olmalıdır."
      },
      {
        id: "contactTaper",
        type: "slider",
        label: "Bağlantı Ucu Konikliği (Contact Taper %)",
        value: 15,
        min: 0,
        max: 40,
        step: 5,
        unit: "%",
        desc: "Modele dokunduğu yerin daralma açısı (Döküm sonrası kesim kolaylığı)."
      },
      {
        id: "branchCount",
        type: "select",
        label: "Yolluk Tipi (Sprue System)",
        value: "Tekli Ana Yolluk (Single)",
        options: ["Tekli Ana Yolluk (Single)", "V-Branch (Çift Kollu)", "Tripod (3 Kollu Ağır Model)"],
        desc: "Yüzüğün altına veya kolyeye bağlanan kol sayısı."
      }
    ],
    actions: ["🔄 Bağlantı Noktasını Değiştir", "✅ Döküm Yolluğunu Ekle"]
  },

  // -------------------------------------------------------------
  // CURVE (EĞRİ VE ÇİZİM DİNAMİK KOMUTLARI)
  // -------------------------------------------------------------
  "crv_split_curve": {
    panelTitle: "⚡ SPLIT CURVE (_gvSplitCurve) - DYNAMIC COMMAND",
    categoryTag: "✂️ Parametrik Eğri Bölme & Kırpma",
    description: "MatrixGold'da Split Curve simgesine tıklandığında açılan parametrik kontrol panelidir. Eğriyi ister belirli bir orandan (SplitPosition=0.5), ister kesici bir bıçak çizgisiyle (CuttingCurve) böler.",
    historyActive: true,
    ttsOverview: "Split Curve parametreleri: SplitPosition ile eğrinin tam ortasından veya istenen oranından kesim yapabilir, CuttingCurve ile kesici bir bıçak çizgisi atayabilirsiniz. StyleSave ile ayarlarınızı kaydedebilirsiniz.",
    jewelerTip: "💡 Kuyumcu Tüyosu: Yüzük kollarında montür yuvasını açarken veya yüzük alt eteğini inceltirken SplitPosition=0.5 seçeneğiyle tam simetrik kesim yapabilirsiniz. Döküm payı için kesilen uçların Join ile kapatıldığından emin olun.",
    controls: [
      {
        id: "splitPosition",
        type: "slider",
        label: "Bölme Oranı (SplitPosition)",
        value: 0.50,
        min: 0.05,
        max: 0.95,
        step: 0.05,
        unit: "Oran",
        desc: "Eğrinin başlangıcı (0.0) ve bitişi (1.0) arasındaki oransal kesim konumu.",
        standardNote: "0.50 = Eğrinin tam orta noktası (%50 simetri)"
      },
      {
        id: "cutMethod",
        type: "select",
        label: "Kesme Yöntemi (Cut Method)",
        value: "SplitPosition (Oransal Değer)",
        options: ["SplitPosition (Oransal Değer)", "CuttingCurve (Bıçak Eğrisi)", "Point on Curve (Eğri Üzerinde Nokta)"],
        desc: "Bölme işleminin hangi referansa göre yapılacağı.",
        standardNote: "Bıçak çizgisi varsa CuttingCurve, yoksa SplitPosition kullanılır."
      },
      {
        id: "stylePreset",
        type: "select",
        label: "Stil Şablonu (StyleLoad / Save)",
        value: "Varsayılan (Default Split)",
        options: ["Varsayılan (Default Split)", "Tam Orta (%50 Simetrik)", "Üst Çeyrek (%25 Montür)", "Alt Etek (%15 Etek İnceltme)"],
        desc: "Sık kullanılan kesim şablonları.",
        standardNote: "StyleSave ile yeni şablonlar kaydedilebilir."
      },
      {
        id: "keepOriginal",
        type: "toggle",
        label: "Orijinal Eğriyi Koru (Keep Original)",
        value: false,
        desc: "Kesim sonrası orijinal ana eğrinin sahnede kalıp kalmayacağını belirler.",
        standardNote: "Açık bırakılırsa eski çizgi silinmez, yedeği kalır."
      }
    ],
    actions: ["💾 Stili Kaydet (StyleSave)", "📂 Stil Yükle (StyleLoad)", "✂️ Eğriyi Böl"]
  }
};

// Dinamik komut konfigurasyonunu komut objesinden getiren veya akıllıca üreten yardımcı fonksiyon
function getDynamicCommandConfig(cmd) {
  if (!cmd) return null;
  const cmdId = cmd.id || "";
  
  // 1. Özel tanımlanmış zengin ayar varsa doğrudan döndür
  if (matrixDynamicConfigs[cmdId]) {
    return matrixDynamicConfigs[cmdId];
  }

  // 2. ID içinde bilinen anahtar kelimelere göre eşle
  if (cmdId.includes("jali")) return matrixDynamicConfigs["jali"];
  if (cmdId.includes("split_curve")) return matrixDynamicConfigs["crv_split_curve"];
  if (cmdId.includes("ring_rail")) return matrixDynamicConfigs["tls_ring_rail"];
  if (cmdId.includes("profile_placer")) return matrixDynamicConfigs["tls_profile_placer"];
  if (cmdId.includes("signet")) return matrixDynamicConfigs["tls_signet"];
  if (cmdId.includes("head")) return matrixDynamicConfigs["stg_head"];
  if (cmdId.includes("prong_placer") || cmdId.includes("prong")) return matrixDynamicConfigs["stg_prong_placer"];
  if (cmdId.includes("bezel")) return matrixDynamicConfigs["stg_bezel"];
  if (cmdId.includes("halo")) return matrixDynamicConfigs["stg_halo"];
  if (cmdId.includes("bail")) return matrixDynamicConfigs["stg_bail"];
  if (cmdId.includes("gem_cutter")) return matrixDynamicConfigs["ctr_gem_cutter"];
  if (cmdId.includes("channel_cutter")) return matrixDynamicConfigs["ctr_channel_cutter"];
  if (cmdId.includes("gem_on_curve") || cmdId.includes("gem_curve")) return matrixDynamicConfigs["gms_gem_on_curve"];
  if (cmdId.includes("pave")) return matrixDynamicConfigs["gms_pave"];
  if (cmdId.includes("gem_placer") || cmdId.includes("proxy_gem")) return matrixDynamicConfigs["gms_gem_placer"];
  if (cmdId.includes("sweep")) return matrixDynamicConfigs["profile_sweep"];
  if (cmdId.includes("pipe")) return matrixDynamicConfigs["sld_pipe_mg"];
  if (cmdId.includes("sprue")) return matrixDynamicConfigs["mfg_sprue_dyn"];

  // 3. Genel Rhino / Matrix araçları için dinamik parametre şablonu oluştur
  const safeName = cmd.name || "Komut";
  const rawOpts = cmd.cmdOptions || (cmd.options || []).map(o => ({ name: o.key || o.name, desc: o.desc }));
  const generatedControls = (rawOpts && rawOpts.length > 0) ? rawOpts.slice(0, 4).map((opt, idx) => ({
    id: `dyn_opt_${idx}`,
    type: idx % 2 === 0 ? "toggle" : "slider",
    label: opt.name || `Parametre ${idx+1}`,
    value: idx % 2 === 0 ? true : 1.5,
    min: 0.5,
    max: 10.0,
    step: 0.5,
    unit: "mm",
    desc: opt.desc || "Komut satırı ve arayüz dinamik parametresi."
  })) : [
    {
      id: "tolerance",
      type: "slider",
      label: "Hassasiyet Toleransı (Tolerance)",
      value: 0.001,
      min: 0.0001,
      max: 0.01,
      step: 0.0005,
      unit: "mm",
      desc: "Kuyumculuk CAD modelleme hassasiyeti (Standart: 0.001 mm)."
    },
    {
      id: "deleteInput",
      type: "toggle",
      label: "Girdi Çizimini Sil (Delete Input)",
      value: false,
      desc: "İşlem bittiğinde orijinal kılavuz eğrileri veya yüzeyleri sahnede saklar."
    },
    {
      id: "gumballActive",
      type: "toggle",
      label: "Gumball Canlı Tutacaklar (Live HUD)",
      value: true,
      desc: "Nesne üzerinde 3 eksenli taşıma, döndürme ve ölçekleme oklarını canlı gösterir."
    }
  ];

  return {
    panelTitle: `⚡ ${safeName.toUpperCase()} - DYNAMIC COMMANDS AYARLARI`,
    categoryTag: "🛠️ Parametrik Komut Ayarları",
    description: `MatrixGold'da ${safeName} aracı çalıştırıldığında açılan alt seçenekler ve parametrelerdir. Gumball ve History bağı ile etkileşimlidir.`,
    historyActive: true,
    ttsOverview: `${safeName} komutu parametreleri: ${cmd.meaning || cmd.shortDesc || ''}`,
    jewelerTip: cmd.jewelerTip || "💡 Hassas ölçü ve döküm payı için çizim kılavuzlarını ve katman kilitlerini kullanın.",
    controls: generatedControls,
    actions: ["🔄 Parametreleri Uygula", "✅ Onayla (Enter / Sağ Tık)"]
  };
}

if (typeof window !== "undefined") {
  window.matrixDynamicConfigs = matrixDynamicConfigs;
  window.getDynamicCommandConfig = getDynamicCommandConfig;
}
