// MATRIXGOLD & RHINO - CLAYOO (ORGANİK HEYKEL, SUBD & RÖLYEF DÜNYASI) VERİ KATALOĞU
// 11 Ana Şerit Komutu + 8 Alt Çekmece + 78 Alt Araç

const clayooRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: CLAYOO (ORGANİK HEYKEL, SUBD & RÖLYEF DÜNYASI)",
    "tools": [
      {
        "id": "clo_subd",
        "name": "SubD Mode",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/clayoo/ribbon/clo_subd.png"
      },
      {
        "id": "clo_primitives",
        "name": "Primitives",
        "hasFlyout": true,
        "flyoutKey": "primitives",
        "subCount": 8,
        "icon": "icons/clayoo/ribbon/clo_primitives.png"
      },
      {
        "id": "clo_creation",
        "name": "Creation",
        "hasFlyout": true,
        "flyoutKey": "creation",
        "subCount": 12,
        "icon": "icons/clayoo/ribbon/clo_creation.png"
      },
      {
        "id": "clo_edit",
        "name": "Edit",
        "hasFlyout": true,
        "flyoutKey": "edit",
        "subCount": 21,
        "icon": "icons/clayoo/ribbon/clo_edit.png"
      },
      {
        "id": "clo_selection",
        "name": "Selection",
        "hasFlyout": true,
        "flyoutKey": "selection",
        "subCount": 15,
        "icon": "icons/clayoo/ribbon/clo_selection.png"
      },
      {
        "id": "clo_convert",
        "name": "Convert",
        "hasFlyout": true,
        "flyoutKey": "convert",
        "subCount": 4,
        "icon": "icons/clayoo/ribbon/clo_convert.png"
      },
      {
        "id": "clo_library",
        "name": "Library",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/clayoo/ribbon/clo_library.png"
      },
      {
        "id": "clo_emboss",
        "name": "Emboss",
        "hasFlyout": true,
        "flyoutKey": "emboss",
        "subCount": 5,
        "icon": "icons/clayoo/ribbon/clo_emboss.png"
      },
      {
        "id": "clo_sculpt",
        "name": "Sculpt",
        "hasFlyout": true,
        "flyoutKey": "sculpt",
        "subCount": 9,
        "icon": "icons/clayoo/ribbon/clo_sculpt.png"
      },
      {
        "id": "clo_blueprint",
        "name": "Blueprint",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/clayoo/ribbon/clo_blueprint.png"
      },
      {
        "id": "clo_settings",
        "name": "Settings",
        "hasFlyout": true,
        "flyoutKey": "settings",
        "subCount": 4,
        "icon": "icons/clayoo/ribbon/clo_settings.png"
      }
    ]
  }
];

const clayooFlyoutDrawers = {
  "primitives": {
    "key": "primitives",
    "title": "Primitives",
    "trTitle": "SubD İlkel Geometriler",
    "count": 8,
    "subIds": [
      "clo_prim_plane",
      "clo_prim_box",
      "clo_prim_sphere",
      "clo_prim_cyl",
      "clo_prim_torus",
      "clo_prim_ellip",
      "clo_prim_cone",
      "clo_prim_tcone"
    ]
  },
  "creation": {
    "key": "creation",
    "title": "Creation",
    "trTitle": "Organik Form & Yüzük Kolları",
    "count": 12,
    "subIds": [
      "clo_crt_append",
      "clo_crt_from_crv",
      "clo_crt_from_2crv",
      "clo_crt_loft",
      "clo_crt_sweep1",
      "clo_crt_sweep2",
      "clo_crt_pipe",
      "clo_crt_revolve",
      "clo_crt_ext_iso",
      "clo_crt_ring",
      "clo_crt_signet",
      "clo_crt_bezel"
    ]
  },
  "edit": {
    "key": "edit",
    "title": "Edit",
    "trTitle": "SubD Şekillendirme Araçları",
    "count": 21,
    "subIds": [
      "clo_edt_divide",
      "clo_edt_split",
      "clo_edt_inset",
      "clo_edt_extrude",
      "clo_edt_bridge",
      "clo_edt_shell",
      "clo_edt_weld",
      "clo_edt_collapse",
      "clo_edt_offset",
      "clo_edt_extract",
      "clo_edt_fill",
      "clo_edt_match",
      "clo_edt_knife",
      "clo_edt_wrap",
      "clo_edt_symmetry",
      "clo_edt_crease",
      "clo_edt_uncrease",
      "clo_edt_flip",
      "clo_edt_unify",
      "clo_edt_proj",
      "clo_edt_subd_lvl"
    ]
  },
  "selection": {
    "key": "selection",
    "title": "Selection",
    "trTitle": "Akıllı Seçim Araçları",
    "count": 15,
    "subIds": [
      "clo_sel_ring",
      "clo_sel_loop",
      "clo_sel_u",
      "clo_sel_v",
      "clo_sel_creased",
      "clo_sel_uncreased",
      "clo_sel_naked",
      "clo_sel_paint",
      "clo_sel_coplanar",
      "clo_sel_grow",
      "clo_sel_shrink",
      "clo_sel_invert",
      "clo_sel_all",
      "clo_sel_none",
      "clo_sel_sets"
    ]
  },
  "convert": {
    "key": "convert",
    "title": "Convert",
    "trTitle": "NURBS & Mesh Dönüşümü",
    "count": 4,
    "subIds": [
      "clo_cnv_subd",
      "clo_cnv_mesh",
      "clo_cnv_tspline",
      "clo_cnv_nurbs"
    ]
  },
  "emboss": {
    "key": "emboss",
    "title": "Emboss",
    "trTitle": "Rölyef & Madalyon Kabartma",
    "count": 5,
    "subIds": [
      "clo_emb_std",
      "clo_emb_resources",
      "clo_emb_texture",
      "clo_emb_text_crv",
      "clo_emb_decimator"
    ]
  },
  "sculpt": {
    "key": "sculpt",
    "title": "Sculpt",
    "trTitle": "Dijital Heykeltıraş Fırçaları",
    "count": 9,
    "subIds": [
      "clo_scl_sculpt",
      "clo_scl_brush",
      "clo_scl_crease",
      "clo_scl_flatten",
      "clo_scl_inflate",
      "clo_scl_pinch",
      "clo_scl_smooth",
      "clo_scl_drag",
      "clo_scl_twist"
    ]
  },
  "settings": {
    "key": "settings",
    "title": "Settings",
    "trTitle": "Clayoo Arayüz Ayarları",
    "count": 4,
    "subIds": [
      "clo_stg_hotkeys",
      "clo_stg_set_plane",
      "clo_stg_reset_plane",
      "clo_stg_about"
    ]
  }
};

const clayooCommandsCatalog = {
  "clo_subd": {
    "id": "clo_subd",
    "name": "SubD Mode",
    "trName": "SubD Organik Heykel Modu",
    "meaning": "Kuyumcu Dijital Oyun Hamuru Çalışma Alanı",
    "shortDesc": "Öğrenci Adımları: 1. SubD Mode simgesine Sol Tıklayın. 2. Rhino ortamı serbest organik modelleme alanına geçer; köşeli hatlar yerine akıcı, yumuşak formlar aktifleşir. 3. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/clayoo/ribbon/clo_subd.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooSubD",
    "mouseAction": "Sol Tık: SubD organik heykel modunu başlatır | Sağ Tık: Son ayarları yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSubD",
        "desc": "SubD Mode aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Clayoo kuyumcuda standart çizgilerle çizilemeyen aslan başı, yılan derisi, kurukafa, sarmaşık ve dalgalı serbest formlar için kullanılır. Tasarımı kaba hatlarıyla örüp en son detaylandırın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "SubD Mode komutu. Dijital oyun hamuru mantığıyla serbest form organik heykeller tasarlamanızı sağlar. Organik moda geçmek için tıklayın ve Enter ile onaylayın.",
    "cmdPrompt": "Command: _ClayooSubD\\nEntering Clayoo SubD freeform environment <Enter>:",
    "cmdOptions": [
      {
        "name": "SmoothToggle",
        "desc": "Yumuşatma Aç/Kapa: Modelin köşeli kafes hali ile yumuşatılmış organik hali arasında geçiş yapar (Tab tuşu)."
      },
      {
        "name": "SubdivisionLevel",
        "desc": "Bölünme Seviyesi: Yüzey yoğunluğunu artırır (1, 2 veya 3 seviye)."
      }
    ]
  },
  "clo_primitives": {
    "id": "clo_primitives",
    "name": "Primitives",
    "trName": "Temel Kütleler (Primitives)",
    "meaning": "Organik Modelleme Başlangıç Blokları (Kutu, Küre, Silindir)",
    "shortDesc": "Öğrenci Adımları: 1. Primitives simgesine Sol Tıklayın. 2. Modellemek istediğiniz forma en yakın ilkel kütleyi (yüzük için Kutu/Box veya Silindir; damla taş yuvası için Küre/Sphere) seçin. 3. F4 merkezine yerleştirip boyutlandırın. 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/clayoo/ribbon/clo_primitives.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooBox",
    "mouseAction": "Sol Tık: Parametrik SubD başlangıç kütlesi ekler | Sağ Tık: Son kütleyi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooBox",
        "desc": "Primitives aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Heykel modellerken sıfırdan çizgi çizmek yerine bir Kutu (Box) ekleyip yüzeylerini çekiştirerek ilerlemek çok daha hızlıdır. Başlangıçta segment sayısını az tutun ki kontrol kolay olsun (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Primitives komutu. Organik tasarıma başlamak için kutu, küre veya silindir gibi temel hamur blokları ekler. Kütleyi seçip F4 merkezine yerleştirin.",
    "cmdPrompt": "Command: _ClayooBox\\nSelect primitive type ( Box  Sphere  Cylinder  Torus ):",
    "cmdOptions": [
      {
        "name": "Box",
        "desc": "Kutu: Yüzük kolları ve gövde tasarımları için 6 yüzlü başlangıç bloğu."
      },
      {
        "name": "Sphere",
        "desc": "Küre: Yuvarlak figürler, inci formları ve kafatası başlangıcı."
      },
      {
        "name": "Cylinder",
        "desc": "Silindir: Bilezik, boru ve parmak halkası başlangıç formu."
      }
    ]
  },
  "clo_creation": {
    "id": "clo_creation",
    "name": "Creation",
    "trName": "Çizgilerden SubD Yüzey (Creation)",
    "meaning": "Eğriler Boyunca Organik Gövde Örücü",
    "shortDesc": "Öğrenci Adımları: 1. Sahnedeki eğrileri seçin. 2. Creation simgesine Sol Tıklayın. 3. Eğriler boyunca akıcı, kontrol edilebilir bir SubD yüzeyi örün. 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/clayoo/ribbon/clo_creation.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooLoft",
    "mouseAction": "Sol Tık: Eğrilerden parametrik SubD yüzeyi türetir | Sağ Tık: Son eğrilerle yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooLoft",
        "desc": "Creation aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğün üst kafa kısmında bombeli serbest geçişler oluştururken iki ray arasına Creation ile SubD örmek, standart Loft komutundan çok daha pürüzsüz sonuç verir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Creation komutu. Çizdiğiniz eğrilerin arasını organik SubD yüzeyiyle doldurur. Eğrileri seçip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _ClayooFromCurves\\nSelect guide curves <Enter>:",
    "cmdOptions": [
      {
        "name": "Segments",
        "desc": "Segment Sayısı: Eğri boyunca oluşacak yüzey dilimi adedi."
      }
    ]
  },
  "clo_edit": {
    "id": "clo_edit",
    "name": "Edit",
    "trName": "Hamur Düzenleme (Extrude / Bridge / Crease)",
    "meaning": "Yüzey Çıkarma ve Keskin Kenar Verme",
    "shortDesc": "Öğrenci Adımları: 1. Model üzerinde bir yüzeyi seçin. 2. Edit -> Extrude simgesine Sol Tıklayın. 3. Seçili yüzeyi dışarı doğru çekerek yeni bir et / uzuv uzatın. 4. Keskinleştirmek istediğiniz kenarlar için Crease uygulayın. 5. Enter veya Sağ Tık ile bitirin.",
    "icon": "icons/clayoo/ribbon/clo_edit.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooExtrude",
    "mouseAction": "Sol Tık: Yüzeyden yeni gövde uzatır | Sağ Tık: Keskin kenar ekler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooExtrude",
        "desc": "Edit aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük alt kolunu birleştirmek için iki ucu karşılıklı seçip Bridge (Köprü) komutunu vermek, kusursuz ve pürüzsüz bir dairesel birleşim sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Edit komutu. Yüzeyleri dışarı uzatır, iki parçayı köprüyle birbirine bağlar veya kenarlara keskinlik kazandırır. Yüzeyi seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _ClayooExtrudeFace\\nSelect face to extrude <Enter>:",
    "cmdOptions": [
      {
        "name": "Extrude",
        "desc": "Yüzey Uzatma: Seçili yüzeyden yeni bir kol veya uzantı çıkarır."
      },
      {
        "name": "Bridge",
        "desc": "Köprü Bağlantı: İki ayrı yüzeyi birbirine yumuşak bir tüple bağlar."
      },
      {
        "name": "Crease",
        "desc": "Kenar Keskinleştirme: Yuvarlak kenara bıçak keskinliği verir."
      }
    ]
  },
  "clo_selection": {
    "id": "clo_selection",
    "name": "Selection",
    "trName": "Seçim Filtresi (Face / Edge / Vertex)",
    "meaning": "Yüzey, Kenar ve Nokta Seçici",
    "shortDesc": "Öğrenci Adımları: 1. Selection simgesine Sol Tıklayın. 2. Düzenlemek istediğiniz bileşeni seçin: Noktaları çekmek için Vertex (Nokta), kenarları bükmek için Edge (Kenar), tüm bölgeyi uzatmak için Face (Yüzey) seçin. 3. Farenin Sol Tuşuyla model üzerinde tıklayın.",
    "icon": "icons/clayoo/ribbon/clo_selection.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooSelectLoop",
    "mouseAction": "Sol Tık: Yüzey, kenar veya nokta alt elemanlarını seçer | Sağ Tık: Tüm gövdeyi seçer",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectLoop",
        "desc": "Selection aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük kolunu inceltip kalınlaştırmak için Face (Yüzey) filtresini açıp Gumball'ın ölçek kareleriyle esnetmek formun simetrisini korur (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Selection komutu. Hamur modelin üzerindeki noktaları, kenarları veya yüzeyleri ayrı ayrı seçip çekiştirmenizi sağlar. Filtrenizi seçip elemana tıklayın.",
    "cmdPrompt": "Command: _ClayooSelect\\nPick selection filter ( Vertex  Edge  Face  All ):",
    "cmdOptions": [
      {
        "name": "Vertex",
        "desc": "Nokta Seçimi: Köşe noktalarını tek tek yakalayıp çeker."
      },
      {
        "name": "Edge",
        "desc": "Kenar Seçimi: Kenar çizgilerini seçip pah veya büküm verir."
      },
      {
        "name": "Face",
        "desc": "Yüzey Seçimi: Yüzeyi komple seçip uzatır veya şişirir."
      }
    ]
  },
  "clo_convert": {
    "id": "clo_convert",
    "name": "Convert",
    "trName": "NURBS Katısına Dönüştür (Convert to NURBS)",
    "meaning": "Clayoo Hamurunu Standart Rhino Katısına Çevirici",
    "shortDesc": "Öğrenci Adımları: 1. Şekillendirmesini bitirdiğiniz Clayoo organik modelini seçin. 2. Convert simgesine Sol Tıklayın. 3. 'To NURBS' seçeneğini işaretleyin. 4. Enter'a basın. Model standart kapalı katıya (Closed Polysurface) dönüşür; artık taş yuvası veya ray açılabilir.",
    "icon": "icons/clayoo/ribbon/clo_convert.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooToNURBS",
    "mouseAction": "Sol Tık: Modeli taş mıhlamaya hazır NURBS katısına çevirir | Sağ Tık: Mesh çıktısı alır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooToNURBS",
        "desc": "Convert aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Clayoo organik modeliniz bittiğinde mutlaka Convert to NURBS yapmalısınız! Standart MatrixGold taş ve kesici araçları SubD formatında değil, sadece NURBS katısı üzerinde çalışır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Convert komutu. Heykel modelinizi standart Rhino katısına dönüştürür. Taş yuvaları ve tırnaklar ekleyebilmek için bu dönüşümü uygulayıp Enter ile tamamlayın.",
    "cmdPrompt": "Command: _ClayooToNURBS\\nConvert selected SubD to closed polysurface <Enter>:",
    "cmdOptions": [
      {
        "name": "ToNURBS",
        "desc": "NURBS Katısı: MatrixGold'da Boolean kesme ve taş dizimi için standart katı formatı."
      },
      {
        "name": "ToMesh",
        "desc": "Mesh Çıktısı: 3D yazıcı için doğrudan STL poligon ağına çevirir."
      }
    ]
  },
  "clo_library": {
    "id": "clo_library",
    "name": "Library",
    "trName": "Hazır Organik Kütüphanesi (Library)",
    "meaning": "Hazır Hayvan Figürleri ve Motif Arşivi",
    "shortDesc": "Öğrenci Adımları: 1. Library simgesine Sol Tıklayın. 2. Açılan katalogdan istediğiniz figürü (panter, yılan, yaprak, kafatası vb.) çift tıklayın. 3. F4 merkezine yerleştirip boyutlandırın. 4. Enter ile sahneye aktarın.",
    "icon": "icons/clayoo/ribbon/clo_library.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooLibrary",
    "mouseAction": "Sol Tık: Hazır organik takı kütüphanesini açar | Sağ Tık: Son parçayı ekler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooLibrary",
        "desc": "Library aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Sıfırdan karmaşık bir panter veya aslan başı çizmek saatler alır. Kütüphanedeki hazır baz modeli sahneye çağırıp üzerinde Sculpt fırçasıyla rötuş yapmak büyük zaman kazandırır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Library komutu. Hazır hayvan figürleri, çiçekler ve fantezi motif kütüphanesini açar. İstediğiniz figürü seçip sahneye aktarın.",
    "cmdPrompt": "Command: _ClayooLibrary\\nBrowse catalog and insert chosen model <Enter>:",
    "cmdOptions": [
      {
        "name": "ScaleToFit",
        "desc": "Ölçüye Uydur: Seçilen figürü yüzük ölçüsüne göre otomatik boyutlandırır."
      }
    ]
  },
  "clo_emboss": {
    "id": "clo_emboss",
    "name": "Emboss",
    "trName": "Rölyef & Sikke Kabartma (Emboss)",
    "meaning": "2D Resim ve Çizimden 3D Madalyon Üretici",
    "shortDesc": "Öğrenci Adımları: 1. Emboss simgesine Sol Tıklayın. 2. Bilgisayarınızdan siyah-beyaz bir logo, sikke veya portre resmi seçin. 3. Kabartma derinliğini (min 0.35 mm) belirleyin. 4. Enter veya Sağ Tık ile resmi 3 boyutlu metal plakaya dönüştürün.",
    "icon": "icons/clayoo/ribbon/clo_emboss.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooEmboss",
    "mouseAction": "Sol Tık: Resimden 3D rölyef kabartma çıkarır | Sağ Tık: Son rölyefi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooEmboss",
        "desc": "Emboss aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Madalyon ve mühür yüzüklerinde kabartma yüksekliği en az 0.35 mm olmalıdır. 0.20 mm altındaki sığ kabartmalar atölyede zımpara ve cila yaparken tamamen silinir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Emboss komutu. Siyah beyaz resimleri üç boyutlu altın veya gümüş madalyon kabartmasına dönüştürür. Resmi yükleyin, kabartma yüksekliğini girip Enter ile onaylayın.",
    "cmdPrompt": "Command: _ClayooEmboss\\nSelect image file for 3D relief generation <Enter>:",
    "cmdOptions": [
      {
        "name": "ReliefHeight",
        "desc": "Kabartma Yüksekliği: Dökümde kaybolmaması için asgari 0.35 mm - 0.50 mm."
      },
      {
        "name": "SmoothFilter",
        "desc": "Yumuşatma: Resimdeki pikselleşmeyi temizleyip cila kalitesine getirir."
      }
    ]
  },
  "clo_sculpt": {
    "id": "clo_sculpt",
    "name": "Sculpt",
    "trName": "Fırça ile Heykel Tıraşlama (Sculpt)",
    "meaning": "Kabartma, Çökertme ve Düzeltme Fırçaları",
    "shortDesc": "Öğrenci Adımları: 1. Sculpt simgesine Sol Tıklayın. 2. Fırça türünü seçin (Şişir / Push-Pull veya Pürüzsüzleştir / Smooth). 3. Farenin Sol Tuşuna basılı tutarak model yüzeyinde gezinin; metal hamur gibi kabarır veya pürüzsüzleşir. 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/clayoo/ribbon/clo_sculpt.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooSculpt",
    "mouseAction": "Sol Tık ile basılı tutarak yüzeyi fırçalar | Sağ Tık: Fırça ayarlarını açar",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSculpt",
        "desc": "Sculpt aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Hayvan figürlerinde kas hatlarını veya yapraklardaki doğal damarları çizerken düşük Intensity (Güç = %20) ile fırçalamak çok daha doğal ve profesyonel sonuç verir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Sculpt komutu. Dijital fırça darbeleriyle model üzerine kabartma veya çökertme yapar. Fırça gücünü belirleyip fareyle yüzeyde gezinin ve Enter ile bitirin.",
    "cmdPrompt": "Command: _ClayooSculpt\\nClick and drag brush over model surface <Enter to finish>:",
    "cmdOptions": [
      {
        "name": "Radius",
        "desc": "Fırça Çapı: Fırça ucunun etki alanı genişliği."
      },
      {
        "name": "Intensity",
        "desc": "Fırça Gücü: Yüzeyi kabartma veya çökertme derinlik şiddeti."
      },
      {
        "name": "Smooth",
        "desc": "Pürüzsüzleştirme: Yüzeydeki dalgalanmaları ve kırışıklıkları ütüler."
      }
    ]
  },
  "clo_blueprint": {
    "id": "clo_blueprint",
    "name": "Blueprint",
    "trName": "Referans Çizim Kılavuzu (Blueprint)",
    "meaning": "Karakalem Çizim ve Fotoğraf Altlığı Giydirme",
    "shortDesc": "Öğrenci Adımları: 1. Blueprint simgesine Sol Tıklayın. 2. Müşterinin eskiz çizimini veya takı fotoğrafını arka plana yerleştirin. 3. Şeffaflık oranını ayarlayın. 4. Organik modelinizi bu referansın hatlarını takip ederek örün.",
    "icon": "icons/clayoo/ribbon/clo_blueprint.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooBlueprint",
    "mouseAction": "Sol Tık: Arka plan referans görseli ekler | Sağ Tık: Görseli kilitler/gizler",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooBlueprint",
        "desc": "Blueprint aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşterinin WhatsApp'tan gönderdiği özel sipariş fotoğrafını Blueprint ile tam 1'e 1 parmak ölçüsünde arka plana koyup üstünden modellemek sıfır hata sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Blueprint komutu. Arka plana müşteri eskizlerini veya fotoğraflarını yerleştirerek birebir rehber almanızı sağlar. Resmi yükleyip modellemeye başlayın.",
    "cmdPrompt": "Command: _ClayooBlueprint\\nPlace reference image in viewport <Enter>:",
    "cmdOptions": [
      {
        "name": "Opacity",
        "desc": "Şeffaflık: Çizimin arkadaki modeli engellememesi için %50 şeffaflık ayarı."
      },
      {
        "name": "Lock",
        "desc": "Kilitle: Modelleme yaparken yanlışlıkla resmin kaymasını önler."
      }
    ]
  },
  "clo_settings": {
    "id": "clo_settings",
    "name": "Settings",
    "trName": "Clayoo Ayarları (Settings)",
    "meaning": "Heykel Çözünürlüğü ve Hassasiyet Ayarları",
    "shortDesc": "Öğrenci Adımları: 1. Settings simgesine Sol Tıklayın. 2. Bilgisayarınızın ekran kartı gücüne göre yüzey pürüzsüzlük seviyesini ve fırça hassasiyetini belirleyin. 3. Enter veya Sağ Tık ile kaydedin.",
    "icon": "icons/clayoo/ribbon/clo_settings.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClayooSettings",
    "mouseAction": "Sol Tık: Clayoo tercih ve performans panelini açar | Sağ Tık: Varsayılana sıfırlar",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSettings",
        "desc": "Settings aracını aktifleştirin."
      }
    ],
    "options": [
      {
        "key": "SubDLevel",
        "desc": "Yumuşatma seviyesi (1-4)"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Bilgisayarınız organik modellerde yavaşlarsa Settings menüsünden Subdivision önizleme seviyesini 1'e düşürün; dönüştürme (Convert to NURBS) yaparken kaliteyi artırabilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Settings komutu. Clayoo heykel aracının hassasiyet, tolerans ve ekran kartı performans ayarlarını düzenler. Enter ile ayarları kaydedin.",
    "cmdPrompt": "Command: _ClayooSettings\\nAdjust organic modeling tolerances and display <Enter>:",
    "cmdOptions": [
      {
        "name": "Tolerances",
        "desc": "Hassasiyet: 0.001 mm kuyumculuk döküm hassasiyeti."
      },
      {
        "name": "GpuAcceleration",
        "desc": "Ekran Kartı Desteği: Akıcı fırça hareketleri için donanım hızlandırma."
      }
    ]
  },
  "clo_prim_plane": {
    "id": "clo_prim_plane",
    "name": "Plane",
    "trName": "SubD Düzlem",
    "meaning": "SubD Düzlem",
    "shortDesc": "Organik düzlem örtü açar.",
    "icon": "icons/clayoo/subtools/clo_prim_plane.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooPlane",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooPlane",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Plane komutu. Türkçe anlamı: SubD Düzlem. Organik düzlem örtü açar. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_box": {
    "id": "clo_prim_box",
    "name": "Box",
    "trName": "SubD Kutu",
    "meaning": "SubD Kutu",
    "shortDesc": "Hamur küp katı koyar.",
    "icon": "icons/clayoo/subtools/clo_prim_box.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooBox",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooBox",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Box komutu. Türkçe anlamı: SubD Kutu. Hamur küp katı koyar. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_sphere": {
    "id": "clo_prim_sphere",
    "name": "Sphere",
    "trName": "SubD Küre",
    "meaning": "SubD Küre",
    "shortDesc": "Organik hamur küre üretir.",
    "icon": "icons/clayoo/subtools/clo_prim_sphere.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooSphere",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSphere",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Sphere komutu. Türkçe anlamı: SubD Küre. Organik hamur küre üretir. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_cyl": {
    "id": "clo_prim_cyl",
    "name": "Cylinder",
    "trName": "SubD Silindir",
    "meaning": "SubD Silindir",
    "shortDesc": "Boru/silindir hamur gövde koyar.",
    "icon": "icons/clayoo/subtools/clo_prim_cyl.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooCylinder",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooCylinder",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Cylinder komutu. Türkçe anlamı: SubD Silindir. Boru/silindir hamur gövde koyar. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_torus": {
    "id": "clo_prim_torus",
    "name": "Torus",
    "trName": "SubD Halka / Simit",
    "meaning": "SubD Halka / Simit",
    "shortDesc": "Yüzük ve halka küpe için organik simit üretir.",
    "icon": "icons/clayoo/subtools/clo_prim_torus.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooTorus",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooTorus",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Torus komutu. Türkçe anlamı: SubD Halka / Simit. Yüzük ve halka küpe için organik simit üretir. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_ellip": {
    "id": "clo_prim_ellip",
    "name": "Ellipsoid",
    "trName": "SubD Elipsoid",
    "meaning": "SubD Elipsoid",
    "shortDesc": "Basık küre hamur koyar.",
    "icon": "icons/clayoo/subtools/clo_prim_ellip.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooEllipsoid",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooEllipsoid",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Ellipsoid komutu. Türkçe anlamı: SubD Elipsoid. Basık küre hamur koyar. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_cone": {
    "id": "clo_prim_cone",
    "name": "Cone",
    "trName": "SubD Koni",
    "meaning": "SubD Koni",
    "shortDesc": "Organik külah hamur açar.",
    "icon": "icons/clayoo/subtools/clo_prim_cone.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooCone",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooCone",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Cone komutu. Türkçe anlamı: SubD Koni. Organik külah hamur açar. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_prim_tcone": {
    "id": "clo_prim_tcone",
    "name": "Truncated Cone",
    "trName": "SubD Kesik Koni",
    "meaning": "SubD Kesik Koni",
    "shortDesc": "Alt-üst çapı farklı koni hamur.",
    "icon": "icons/clayoo/subtools/clo_prim_tcone.png",
    "isFlyoutSub": true,
    "parentId": "clo_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_ClayooTCone",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooTCone",
        "desc": "İlkel SubD gövdeyi konumlandırın."
      }
    ],
    "options": [],
    "jewelerTip": "Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz.",
    "ttsText": "Truncated Cone komutu. Türkçe anlamı: SubD Kesik Koni. Alt-üst çapı farklı koni hamur. Püf noktası: Kutu hamuruyla başlayıp yüzleri çekiştirerek hayvan başı veya pençe modelleyebilirsiniz."
  },
  "clo_crt_append": {
    "id": "clo_crt_append",
    "name": "Append Face",
    "trName": "Poligon Ekle (Append)",
    "meaning": "Poligon Ekle (Append)",
    "shortDesc": "Mevcut hamura tıklayarak yeni poligon yüzü örer.",
    "icon": "icons/clayoo/subtools/clo_crt_append.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooAppendFace",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooAppendFace",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Append Face komutu. Türkçe anlamı: Poligon Ekle (Append). Mevcut hamura tıklayarak yeni poligon yüzü örer. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_from_crv": {
    "id": "clo_crt_from_crv",
    "name": "From Curve",
    "trName": "Eğriden SubD Çıkar",
    "meaning": "Eğriden SubD Çıkar",
    "shortDesc": "2D çizgiyi organik şerit yüzeye dönüştürür.",
    "icon": "icons/clayoo/subtools/clo_crt_from_crv.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooFromCrv",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFromCrv",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "From Curve komutu. Türkçe anlamı: Eğriden SubD Çıkar. 2D çizgiyi organik şerit yüzeye dönüştürür. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_from_2crv": {
    "id": "clo_crt_from_2crv",
    "name": "From 2 Curves",
    "trName": "2 Eğri Arasını Ör",
    "meaning": "2 Eğri Arasını Ör",
    "shortDesc": "İki ray arasına organik köprü kurar.",
    "icon": "icons/clayoo/subtools/clo_crt_from_2crv.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooFrom2Crv",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFrom2Crv",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "From 2 Curves komutu. Türkçe anlamı: 2 Eğri Arasını Ör. İki ray arasına organik köprü kurar. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_loft": {
    "id": "clo_crt_loft",
    "name": "Loft",
    "trName": "Organik Loft",
    "meaning": "Organik Loft",
    "shortDesc": "Sıralı eğriler arasından yumuşak SubD yüzey geçirir.",
    "icon": "icons/clayoo/subtools/clo_crt_loft.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooLoft",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooLoft",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Loft komutu. Türkçe anlamı: Organik Loft. Sıralı eğriler arasından yumuşak SubD yüzey geçirir. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_sweep1": {
    "id": "clo_crt_sweep1",
    "name": "Sweep 1",
    "trName": "1 Raylı SubD Süpürme",
    "meaning": "1 Raylı SubD Süpürme",
    "shortDesc": "Tek ray boyunca organik form sürer.",
    "icon": "icons/clayoo/subtools/clo_crt_sweep1.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooSweep1",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSweep1",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Sweep 1 komutu. Türkçe anlamı: 1 Raylı SubD Süpürme. Tek ray boyunca organik form sürer. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_sweep2": {
    "id": "clo_crt_sweep2",
    "name": "Sweep 2",
    "trName": "2 Raylı SubD Süpürme",
    "meaning": "2 Raylı SubD Süpürme",
    "shortDesc": "İki ray arasında profil yüzeyi örer.",
    "icon": "icons/clayoo/subtools/clo_crt_sweep2.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooSweep2",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSweep2",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Sweep 2 komutu. Türkçe anlamı: 2 Raylı SubD Süpürme. İki ray arasında profil yüzeyi örer. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_pipe": {
    "id": "clo_crt_pipe",
    "name": "Pipe",
    "trName": "Organik Boru (Pipe)",
    "meaning": "Organik Boru (Pipe)",
    "shortDesc": "Eğriyi yumuşak SubD boruya dönüştürür.",
    "icon": "icons/clayoo/subtools/clo_crt_pipe.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooPipe",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooPipe",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Pipe komutu. Türkçe anlamı: Organik Boru (Pipe). Eğriyi yumuşak SubD boruya dönüştürür. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_revolve": {
    "id": "clo_crt_revolve",
    "name": "Revolve",
    "trName": "Döndürerek Organik Katı",
    "meaning": "Döndürerek Organik Katı",
    "shortDesc": "360 derece dönel kadeh/rozet üretir.",
    "icon": "icons/clayoo/subtools/clo_crt_revolve.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooRevolve",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooRevolve",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Revolve komutu. Türkçe anlamı: Döndürerek Organik Katı. 360 derece dönel kadeh/rozet üretir. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_ext_iso": {
    "id": "clo_crt_ext_iso",
    "name": "Extract Isocurve",
    "trName": "İzokürv Çıkar",
    "meaning": "İzokürv Çıkar",
    "shortDesc": "Organik yüzeyden kılavuz akış çizgisi alır.",
    "icon": "icons/clayoo/subtools/clo_crt_ext_iso.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooExtractIso",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooExtractIso",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Extract Isocurve komutu. Türkçe anlamı: İzokürv Çıkar. Organik yüzeyden kılavuz akış çizgisi alır. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_ring": {
    "id": "clo_crt_ring",
    "name": "Ring",
    "trName": "SubD Yüzük Gövdesi",
    "meaning": "SubD Yüzük Gövdesi",
    "shortDesc": "Tek tıkla parmak ölçüsünde organik yüzük halkası kurar.",
    "icon": "icons/clayoo/subtools/clo_crt_ring.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooRing",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooRing",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Ring komutu. Türkçe anlamı: SubD Yüzük Gövdesi. Tek tıkla parmak ölçüsünde organik yüzük halkası kurar. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_signet": {
    "id": "clo_crt_signet",
    "name": "Signet Ring",
    "trName": "SubD Şövalye Yüzük",
    "meaning": "SubD Şövalye Yüzük",
    "shortDesc": "Organik mühür yüzüğü kasası üretir.",
    "icon": "icons/clayoo/subtools/clo_crt_signet.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooSignetRing",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSignetRing",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Signet Ring komutu. Türkçe anlamı: SubD Şövalye Yüzük. Organik mühür yüzüğü kasası üretir. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_crt_bezel": {
    "id": "clo_crt_bezel",
    "name": "Bezel",
    "trName": "SubD Sıvama Yuva",
    "meaning": "SubD Sıvama Yuva",
    "shortDesc": "Organik yumuşak hatlı taş yuvası örer.",
    "icon": "icons/clayoo/subtools/clo_crt_bezel.png",
    "isFlyoutSub": true,
    "parentId": "clo_creation",
    "parentName": "Creation",
    "rhinoCommand": "_ClayooBezel",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooBezel",
        "desc": "Eğrileri seçip yüzey örün."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır.",
    "ttsText": "Bezel komutu. Türkçe anlamı: SubD Sıvama Yuva. Organik yumuşak hatlı taş yuvası örer. Püf noktası: Clayoo Ring komutuyla başlayan bir yüzük, köşe yırtılması yaşamadan döküme uygun pürüzsüz kalır."
  },
  "clo_edt_divide": {
    "id": "clo_edt_divide",
    "name": "Divide",
    "trName": "Yüzü Böl (Divide)",
    "meaning": "Yüzü Böl (Divide)",
    "shortDesc": "Poligonu dört parçaya bölerek detay ekler.",
    "icon": "icons/clayoo/subtools/clo_edt_divide.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooDivide",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooDivide",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Divide komutu. Türkçe anlamı: Yüzü Böl (Divide). Poligonu dört parçaya bölerek detay ekler. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_split": {
    "id": "clo_edt_split",
    "name": "Split",
    "trName": "Kenar Böl",
    "meaning": "Kenar Böl",
    "shortDesc": "Kenarı yeni noktalarla ayırır.",
    "icon": "icons/clayoo/subtools/clo_edt_split.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooSplit",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSplit",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Split komutu. Türkçe anlamı: Kenar Böl. Kenarı yeni noktalarla ayırır. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_inset": {
    "id": "clo_edt_inset",
    "name": "Inset",
    "trName": "İç Çerçeve Aç (Inset)",
    "meaning": "İç Çerçeve Aç (Inset)",
    "shortDesc": "Poligonun içine orantılı mikro çerçeve açar.",
    "icon": "icons/clayoo/subtools/clo_edt_inset.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooInset",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooInset",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Inset komutu. Türkçe anlamı: İç Çerçeve Aç (Inset). Poligonun içine orantılı mikro çerçeve açar. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_extrude": {
    "id": "clo_edt_extrude",
    "name": "Extrude",
    "trName": "Poligon Yükselt (Extrude)",
    "meaning": "Poligon Yükselt (Extrude)",
    "shortDesc": "Seçili yüzü dışarı çekerek yeni hacim uzatır.",
    "icon": "icons/clayoo/subtools/clo_edt_extrude.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooExtrude",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooExtrude",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Extrude komutu. Türkçe anlamı: Poligon Yükselt (Extrude). Seçili yüzü dışarı çekerek yeni hacim uzatır. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_bridge": {
    "id": "clo_edt_bridge",
    "name": "Bridge",
    "trName": "Köprü Kur (Bridge)",
    "meaning": "Köprü Kur (Bridge)",
    "shortDesc": "İki bağımsız yüzey arasında tünel köprü bağlar.",
    "icon": "icons/clayoo/subtools/clo_edt_bridge.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooBridge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooBridge",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Bridge komutu. Türkçe anlamı: Köprü Kur (Bridge). İki bağımsız yüzey arasında tünel köprü bağlar. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_shell": {
    "id": "clo_edt_shell",
    "name": "Shell",
    "trName": "İçini Boşalt (Shell)",
    "meaning": "İçini Boşalt (Shell)",
    "shortDesc": "Katı hamurun içini boşaltıp et kalınlığı verir.",
    "icon": "icons/clayoo/subtools/clo_edt_shell.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooShell",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooShell",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Shell komutu. Türkçe anlamı: İçini Boşalt (Shell). Katı hamurun içini boşaltıp et kalınlığı verir. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_weld": {
    "id": "clo_edt_weld",
    "name": "Weld",
    "trName": "Noktaları Kaynat (Weld)",
    "meaning": "Noktaları Kaynat (Weld)",
    "shortDesc": "İki noktayı üst üste yapıştırıp dikiş diker.",
    "icon": "icons/clayoo/subtools/clo_edt_weld.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooWeld",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooWeld",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Weld komutu. Türkçe anlamı: Noktaları Kaynat (Weld). İki noktayı üst üste yapıştırıp dikiş diker. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_collapse": {
    "id": "clo_edt_collapse",
    "name": "Collapse",
    "trName": "Noktayı Erit",
    "meaning": "Noktayı Erit",
    "shortDesc": "Kenarı eriterek tek noktaya çeker.",
    "icon": "icons/clayoo/subtools/clo_edt_collapse.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooCollapse",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooCollapse",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Collapse komutu. Türkçe anlamı: Noktayı Erit. Kenarı eriterek tek noktaya çeker. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_offset": {
    "id": "clo_edt_offset",
    "name": "Offset",
    "trName": "Kalınlık Ötele (Offset)",
    "meaning": "Kalınlık Ötele (Offset)",
    "shortDesc": "Tüm hamura eşit mikron et kalınlığı verir.",
    "icon": "icons/clayoo/subtools/clo_edt_offset.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooOffset",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooOffset",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Offset komutu. Türkçe anlamı: Kalınlık Ötele (Offset). Tüm hamura eşit mikron et kalınlığı verir. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_extract": {
    "id": "clo_edt_extract",
    "name": "Extract",
    "trName": "Yüzü Kopar (Extract)",
    "meaning": "Yüzü Kopar (Extract)",
    "shortDesc": "Seçili poligonu ayrı hamura böler.",
    "icon": "icons/clayoo/subtools/clo_edt_extract.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooExtract",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooExtract",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Extract komutu. Türkçe anlamı: Yüzü Kopar (Extract). Seçili poligonu ayrı hamura böler. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_fill": {
    "id": "clo_edt_fill",
    "name": "Fill",
    "trName": "Deliği Kapat (Fill)",
    "meaning": "Deliği Kapat (Fill)",
    "shortDesc": "Açık kalan poligon deliğini örter.",
    "icon": "icons/clayoo/subtools/clo_edt_fill.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooFill",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFill",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Fill komutu. Türkçe anlamı: Deliği Kapat (Fill). Açık kalan poligon deliğini örter. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_match": {
    "id": "clo_edt_match",
    "name": "Match",
    "trName": "Kenarı Eğriye Eşle",
    "meaning": "Kenarı Eğriye Eşle",
    "shortDesc": "Hamur kenarını kılavuz eğriye kilitler.",
    "icon": "icons/clayoo/subtools/clo_edt_match.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooMatch",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooMatch",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Match komutu. Türkçe anlamı: Kenarı Eğriye Eşle. Hamur kenarını kılavuz eğriye kilitler. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_knife": {
    "id": "clo_edt_knife",
    "name": "Knife",
    "trName": "Bıçak Kesimi (Knife)",
    "meaning": "Bıçak Kesimi (Knife)",
    "shortDesc": "Hamur üzerinden serbest hatlı kesim çizgisi geçirir.",
    "icon": "icons/clayoo/subtools/clo_edt_knife.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooKnife",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooKnife",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Knife komutu. Türkçe anlamı: Bıçak Kesimi (Knife). Hamur üzerinden serbest hatlı kesim çizgisi geçirir. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_wrap": {
    "id": "clo_edt_wrap",
    "name": "Wrap",
    "trName": "Yüzeye Sar (Wrap)",
    "meaning": "Yüzeye Sar (Wrap)",
    "shortDesc": "Hamuru başka bir katının etrafına shrink-wrap gibi sarar.",
    "icon": "icons/clayoo/subtools/clo_edt_wrap.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooWrap",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooWrap",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Wrap komutu. Türkçe anlamı: Yüzeye Sar (Wrap). Hamuru başka bir katının etrafına shrink-wrap gibi sarar. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_symmetry": {
    "id": "clo_edt_symmetry",
    "name": "Symmetry",
    "trName": "Canlı Simetri Modu",
    "meaning": "Canlı Simetri Modu",
    "shortDesc": "Sağ yarıda yapılan her şeyi canlı sol yarıya yansıtır.",
    "icon": "icons/clayoo/subtools/clo_edt_symmetry.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooSymmetry",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSymmetry",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Symmetry komutu. Türkçe anlamı: Canlı Simetri Modu. Sağ yarıda yapılan her şeyi canlı sol yarıya yansıtır. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_crease": {
    "id": "clo_edt_crease",
    "name": "Crease",
    "trName": "Keskin Çizgi Yap (Crease)",
    "meaning": "Keskin Çizgi Yap (Crease)",
    "shortDesc": "Seçilen kenarı jilet gibi keskinleştirir.",
    "icon": "icons/clayoo/subtools/clo_edt_crease.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooCrease",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooCrease",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Crease komutu. Türkçe anlamı: Keskin Çizgi Yap (Crease). Seçilen kenarı jilet gibi keskinleştirir. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_uncrease": {
    "id": "clo_edt_uncrease",
    "name": "Uncrease",
    "trName": "Keskinliği Yumuşat",
    "meaning": "Keskinliği Yumuşat",
    "shortDesc": "Keskin kenarı tekrar pürüzsüz kavise çevirir.",
    "icon": "icons/clayoo/subtools/clo_edt_uncrease.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooUncrease",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooUncrease",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Uncrease komutu. Türkçe anlamı: Keskinliği Yumuşat. Keskin kenarı tekrar pürüzsüz kavise çevirir. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_flip": {
    "id": "clo_edt_flip",
    "name": "Flip",
    "trName": "Ters Çevir",
    "meaning": "Ters Çevir",
    "shortDesc": "Yüzey normallerini dışa döndürür.",
    "icon": "icons/clayoo/subtools/clo_edt_flip.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooFlip",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFlip",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Flip komutu. Türkçe anlamı: Ters Çevir. Yüzey normallerini dışa döndürür. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_unify": {
    "id": "clo_edt_unify",
    "name": "Unify Normals",
    "trName": "Normalleri Birleştir",
    "meaning": "Normalleri Birleştir",
    "shortDesc": "Tüm normalleri dışa hizalar.",
    "icon": "icons/clayoo/subtools/clo_edt_unify.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooUnify",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooUnify",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Unify Normals komutu. Türkçe anlamı: Normalleri Birleştir. Tüm normalleri dışa hizalar. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_proj": {
    "id": "clo_edt_proj",
    "name": "Project To Target",
    "trName": "Hedefe İzdüşür",
    "meaning": "Hedefe İzdüşür",
    "shortDesc": "Noktaları referans katının üzerine kilitler.",
    "icon": "icons/clayoo/subtools/clo_edt_proj.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooProject",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooProject",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "Project To Target komutu. Türkçe anlamı: Hedefe İzdüşür. Noktaları referans katının üzerine kilitler. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_edt_subd_lvl": {
    "id": "clo_edt_subd_lvl",
    "name": "SubD Level",
    "trName": "Yumuşatma Seviyesi (Tab)",
    "meaning": "Yumuşatma Seviyesi (Tab)",
    "shortDesc": "Poligon kafes ile pürüzsüz mod arasında geçiş yapar.",
    "icon": "icons/clayoo/subtools/clo_edt_subd_lvl.png",
    "isFlyoutSub": true,
    "parentId": "clo_edit",
    "parentName": "Edit",
    "rhinoCommand": "_ClayooToggleDisplay",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooToggleDisplay",
        "desc": "Seçili yüzey veya kenarlara uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin.",
    "ttsText": "SubD Level komutu. Türkçe anlamı: Yumuşatma Seviyesi (Tab). Poligon kafes ile pürüzsüz mod arasında geçiş yapar. Püf noktası: Tab tuşu veya SubD Level ile düşük poligon kafesinde çalışıp son dokunuşta pürüzsüzleştirin."
  },
  "clo_sel_ring": {
    "id": "clo_sel_ring",
    "name": "Select Ring",
    "trName": "Kenar Halkasını Seç",
    "meaning": "Kenar Halkasını Seç",
    "shortDesc": "Paralel giden tüm kenarları tek tıkla seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_ring.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectRing",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectRing",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Ring komutu. Türkçe anlamı: Kenar Halkasını Seç. Paralel giden tüm kenarları tek tıkla seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_loop": {
    "id": "clo_sel_loop",
    "name": "Loop Selection",
    "trName": "Döngü Seç (Loop)",
    "meaning": "Döngü Seç (Loop)",
    "shortDesc": "Uç uca giden hat boyunca tüm kenarları zincirleme seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_loop.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectLoop",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectLoop",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Loop Selection komutu. Türkçe anlamı: Döngü Seç (Loop). Uç uca giden hat boyunca tüm kenarları zincirleme seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_u": {
    "id": "clo_sel_u",
    "name": "Select U",
    "trName": "U Yönü Seçimi",
    "meaning": "U Yönü Seçimi",
    "shortDesc": "U koordinatı sırasını seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_u.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectU",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectU",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select U komutu. Türkçe anlamı: U Yönü Seçimi. U koordinatı sırasını seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_v": {
    "id": "clo_sel_v",
    "name": "Select V",
    "trName": "V Yönü Seçimi",
    "meaning": "V Yönü Seçimi",
    "shortDesc": "V koordinatı sırasını seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_v.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectV",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectV",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select V komutu. Türkçe anlamı: V Yönü Seçimi. V koordinatı sırasını seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_creased": {
    "id": "clo_sel_creased",
    "name": "Select Creased",
    "trName": "Keskin Kenarları Seç",
    "meaning": "Keskin Kenarları Seç",
    "shortDesc": "Crease uygulanmış tüm jilet kenarları yakalar.",
    "icon": "icons/clayoo/subtools/clo_sel_creased.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectCreased",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectCreased",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Creased komutu. Türkçe anlamı: Keskin Kenarları Seç. Crease uygulanmış tüm jilet kenarları yakalar. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_uncreased": {
    "id": "clo_sel_uncreased",
    "name": "Select Uncreased",
    "trName": "Yumuşak Kenarları Seç",
    "meaning": "Yumuşak Kenarları Seç",
    "shortDesc": "Pürüzsüz kenarları seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_uncreased.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectUncreased",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectUncreased",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Uncreased komutu. Türkçe anlamı: Yumuşak Kenarları Seç. Pürüzsüz kenarları seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_naked": {
    "id": "clo_sel_naked",
    "name": "Select Naked Edges",
    "trName": "Açık Kenarları Yakala",
    "meaning": "Açık Kenarları Yakala",
    "shortDesc": "Açık delik kenarlarını tek tıkla işaretler.",
    "icon": "icons/clayoo/subtools/clo_sel_naked.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectNaked",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectNaked",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Naked Edges komutu. Türkçe anlamı: Açık Kenarları Yakala. Açık delik kenarlarını tek tıkla işaretler. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_paint": {
    "id": "clo_sel_paint",
    "name": "Paint Selection",
    "trName": "Fırçayla Boyayarak Seç",
    "meaning": "Fırçayla Boyayarak Seç",
    "shortDesc": "Farenin değdiği poligonları boyayarak seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_paint.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooPaintSelect",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooPaintSelect",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Paint Selection komutu. Türkçe anlamı: Fırçayla Boyayarak Seç. Farenin değdiği poligonları boyayarak seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_coplanar": {
    "id": "clo_sel_coplanar",
    "name": "Select Coplanar",
    "trName": "Aynı Düzlemdeki Yüzleri Seç",
    "meaning": "Aynı Düzlemdeki Yüzleri Seç",
    "shortDesc": "Düz yüzeyleri topluca seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_coplanar.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectCoplanar",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectCoplanar",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Coplanar komutu. Türkçe anlamı: Aynı Düzlemdeki Yüzleri Seç. Düz yüzeyleri topluca seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_grow": {
    "id": "clo_sel_grow",
    "name": "Grow Selection (+)",
    "trName": "Seçimi Genişlet (+)",
    "meaning": "Seçimi Genişlet (+)",
    "shortDesc": "Seçili bölgeyi komşu poligonlara doğru büyütür.",
    "icon": "icons/clayoo/subtools/clo_sel_grow.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooGrowSelect",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooGrowSelect",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Grow Selection (+) komutu. Türkçe anlamı: Seçimi Genişlet (+). Seçili bölgeyi komşu poligonlara doğru büyütür. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_shrink": {
    "id": "clo_sel_shrink",
    "name": "Shrink Selection (-)",
    "trName": "Seçimi Daralt (-)",
    "meaning": "Seçimi Daralt (-)",
    "shortDesc": "Seçili bölgeyi bir kademe küçültür.",
    "icon": "icons/clayoo/subtools/clo_sel_shrink.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooShrinkSelect",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooShrinkSelect",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Shrink Selection (-) komutu. Türkçe anlamı: Seçimi Daralt (-). Seçili bölgeyi bir kademe küçültür. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_invert": {
    "id": "clo_sel_invert",
    "name": "Select Invert",
    "trName": "Seçimi Ters Çevir",
    "meaning": "Seçimi Ters Çevir",
    "shortDesc": "Seçili olanları bırakıp dışındakileri seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_invert.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooInvertSelect",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooInvertSelect",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Invert komutu. Türkçe anlamı: Seçimi Ters Çevir. Seçili olanları bırakıp dışındakileri seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_all": {
    "id": "clo_sel_all",
    "name": "Select All",
    "trName": "Tümünü Seç",
    "meaning": "Tümünü Seç",
    "shortDesc": "Modeldeki tüm SubD yüzleri seçer.",
    "icon": "icons/clayoo/subtools/clo_sel_all.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectAll",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectAll",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select All komutu. Türkçe anlamı: Tümünü Seç. Modeldeki tüm SubD yüzleri seçer. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_none": {
    "id": "clo_sel_none",
    "name": "Select None",
    "trName": "Seçimi Bırak",
    "meaning": "Seçimi Bırak",
    "shortDesc": "Tüm seçimleri temizler.",
    "icon": "icons/clayoo/subtools/clo_sel_none.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooDeselectAll",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooDeselectAll",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select None komutu. Türkçe anlamı: Seçimi Bırak. Tüm seçimleri temizler. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_sel_sets": {
    "id": "clo_sel_sets",
    "name": "Select Sets",
    "trName": "Kayıtlı Seçim Grupları",
    "meaning": "Kayıtlı Seçim Grupları",
    "shortDesc": "Sık seçilen yüzleri hafıza grubuna kaydeder.",
    "icon": "icons/clayoo/subtools/clo_sel_sets.png",
    "isFlyoutSub": true,
    "parentId": "clo_selection",
    "parentName": "Selection",
    "rhinoCommand": "_ClayooSelectSets",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSelectSets",
        "desc": "Seçim aracını kullanın."
      }
    ],
    "options": [],
    "jewelerTip": "Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz.",
    "ttsText": "Select Sets komutu. Türkçe anlamı: Kayıtlı Seçim Grupları. Sık seçilen yüzleri hafıza grubuna kaydeder. Püf noktası: Loop Selection ile yüzük kolu etrafındaki hattı çift tıklamayla saniyeler içinde seçebilirsiniz."
  },
  "clo_cnv_subd": {
    "id": "clo_cnv_subd",
    "name": "Convert SubD",
    "trName": "SubD'ye Dönüştür",
    "meaning": "SubD'ye Dönüştür",
    "shortDesc": "Rhino yüzeyini veya mesh nesnesini Clayoo SubD'ye çevirir.",
    "icon": "icons/clayoo/subtools/clo_cnv_subd.png",
    "isFlyoutSub": true,
    "parentId": "clo_convert",
    "parentName": "Convert",
    "rhinoCommand": "_ClayooFromNURBS",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFromNURBS",
        "desc": "Dönüştürme parametrelerini onaylayın."
      }
    ],
    "options": [],
    "jewelerTip": "Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz.",
    "ttsText": "Convert SubD komutu. Türkçe anlamı: SubD'ye Dönüştür. Rhino yüzeyini veya mesh nesnesini Clayoo SubD'ye çevirir. Püf noktası: Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz."
  },
  "clo_cnv_mesh": {
    "id": "clo_cnv_mesh",
    "name": "Convert Mesh",
    "trName": "Mesh'e Dönüştür (STL)",
    "meaning": "Mesh'e Dönüştür (STL)",
    "shortDesc": "Modeli doğrudan 3D baskı üçgenlerine çevirir.",
    "icon": "icons/clayoo/subtools/clo_cnv_mesh.png",
    "isFlyoutSub": true,
    "parentId": "clo_convert",
    "parentName": "Convert",
    "rhinoCommand": "_ClayooToMesh",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooToMesh",
        "desc": "Dönüştürme parametrelerini onaylayın."
      }
    ],
    "options": [],
    "jewelerTip": "Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz.",
    "ttsText": "Convert Mesh komutu. Türkçe anlamı: Mesh'e Dönüştür (STL). Modeli doğrudan 3D baskı üçgenlerine çevirir. Püf noktası: Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz."
  },
  "clo_cnv_tspline": {
    "id": "clo_cnv_tspline",
    "name": "Convert TSplines",
    "trName": "T-Splines İçe Aktar",
    "meaning": "T-Splines İçe Aktar",
    "shortDesc": "Eski T-Splines dosyalarını Clayoo'ya entegre eder.",
    "icon": "icons/clayoo/subtools/clo_cnv_tspline.png",
    "isFlyoutSub": true,
    "parentId": "clo_convert",
    "parentName": "Convert",
    "rhinoCommand": "_ClayooFromTSplines",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFromTSplines",
        "desc": "Dönüştürme parametrelerini onaylayın."
      }
    ],
    "options": [],
    "jewelerTip": "Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz.",
    "ttsText": "Convert TSplines komutu. Türkçe anlamı: T-Splines İçe Aktar. Eski T-Splines dosyalarını Clayoo'ya entegre eder. Püf noktası: Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz."
  },
  "clo_cnv_nurbs": {
    "id": "clo_cnv_nurbs",
    "name": "Convert To NURBS",
    "trName": "Rhino Katısına Dönüştür (NURBS)",
    "meaning": "Rhino Katısına Dönüştür (NURBS)",
    "shortDesc": "SubD heykelini su geçirmez katı poliyüzeye çevirir.",
    "icon": "icons/clayoo/subtools/clo_cnv_nurbs.png",
    "isFlyoutSub": true,
    "parentId": "clo_convert",
    "parentName": "Convert",
    "rhinoCommand": "_ClayooToNURBS",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooToNURBS",
        "desc": "Dönüştürme parametrelerini onaylayın."
      }
    ],
    "options": [],
    "jewelerTip": "Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz.",
    "ttsText": "Convert To NURBS komutu. Türkçe anlamı: Rhino Katısına Dönüştür (NURBS). SubD heykelini su geçirmez katı poliyüzeye çevirir. Püf noktası: Convert To NURBS işlemi sonrası parçayı Boolean ile kesebilir ve üzerine taş dizimi yapabilirsiniz."
  },
  "clo_emb_std": {
    "id": "clo_emb_std",
    "name": "Emboss",
    "trName": "Rölyef Oluşturucu (Emboss)",
    "meaning": "Rölyef Oluşturucu (Emboss)",
    "shortDesc": "2D eğrilerden ve logolardan 3D kabartma tabla üretir.",
    "icon": "icons/clayoo/subtools/clo_emb_std.png",
    "isFlyoutSub": true,
    "parentId": "clo_emboss",
    "parentName": "Emboss",
    "rhinoCommand": "_ClayooEmboss",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooEmboss",
        "desc": "Kabartma profilini seçip yüksekliği girin."
      }
    ],
    "options": [],
    "jewelerTip": "Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz.",
    "ttsText": "Emboss komutu. Türkçe anlamı: Rölyef Oluşturucu (Emboss). 2D eğrilerden ve logolardan 3D kabartma tabla üretir. Püf noktası: Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz."
  },
  "clo_emb_resources": {
    "id": "clo_emb_resources",
    "name": "Resources",
    "trName": "Rölyef Kütüphanesi",
    "meaning": "Rölyef Kütüphanesi",
    "shortDesc": "Hazır yaprak, arma, çiçek ve harf kabartmaları.",
    "icon": "icons/clayoo/subtools/clo_emb_resources.png",
    "isFlyoutSub": true,
    "parentId": "clo_emboss",
    "parentName": "Emboss",
    "rhinoCommand": "_ClayooEmbossResources",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooEmbossResources",
        "desc": "Kabartma profilini seçip yüksekliği girin."
      }
    ],
    "options": [],
    "jewelerTip": "Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz.",
    "ttsText": "Resources komutu. Türkçe anlamı: Rölyef Kütüphanesi. Hazır yaprak, arma, çiçek ve harf kabartmaları. Püf noktası: Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz."
  },
  "clo_emb_texture": {
    "id": "clo_emb_texture",
    "name": "Texture Creator",
    "trName": "3D Doku Üretici",
    "meaning": "3D Doku Üretici",
    "shortDesc": "Piramit, balıksırtı ve hasır dokularını kabartır.",
    "icon": "icons/clayoo/subtools/clo_emb_texture.png",
    "isFlyoutSub": true,
    "parentId": "clo_emboss",
    "parentName": "Emboss",
    "rhinoCommand": "_ClayooEmbossTexture",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooEmbossTexture",
        "desc": "Kabartma profilini seçip yüksekliği girin."
      }
    ],
    "options": [],
    "jewelerTip": "Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz.",
    "ttsText": "Texture Creator komutu. Türkçe anlamı: 3D Doku Üretici. Piramit, balıksırtı ve hasır dokularını kabartır. Püf noktası: Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz."
  },
  "clo_emb_text_crv": {
    "id": "clo_emb_text_crv",
    "name": "Text On Curve",
    "trName": "Eğri Üzerine 3D Rölyef Yazı",
    "meaning": "Eğri Üzerine 3D Rölyef Yazı",
    "shortDesc": "Madalyon kenarına kavisli kabartma harfler yazar.",
    "icon": "icons/clayoo/subtools/clo_emb_text_crv.png",
    "isFlyoutSub": true,
    "parentId": "clo_emboss",
    "parentName": "Emboss",
    "rhinoCommand": "_ClayooEmbossText",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooEmbossText",
        "desc": "Kabartma profilini seçip yüksekliği girin."
      }
    ],
    "options": [],
    "jewelerTip": "Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz.",
    "ttsText": "Text On Curve komutu. Türkçe anlamı: Eğri Üzerine 3D Rölyef Yazı. Madalyon kenarına kavisli kabartma harfler yazar. Püf noktası: Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz."
  },
  "clo_emb_decimator": {
    "id": "clo_emb_decimator",
    "name": "Decimator",
    "trName": "Rölyef Sadeleştirici",
    "meaning": "Rölyef Sadeleştirici",
    "shortDesc": "Milyonlarca poligonlu rölyefi detayı kaybetmeden hafifletir.",
    "icon": "icons/clayoo/subtools/clo_emb_decimator.png",
    "isFlyoutSub": true,
    "parentId": "clo_emboss",
    "parentName": "Emboss",
    "rhinoCommand": "_ClayooDecimator",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooDecimator",
        "desc": "Kabartma profilini seçip yüksekliği girin."
      }
    ],
    "options": [],
    "jewelerTip": "Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz.",
    "ttsText": "Decimator komutu. Türkçe anlamı: Rölyef Sadeleştirici. Milyonlarca poligonlu rölyefi detayı kaybetmeden hafifletir. Püf noktası: Emboss ile Osmanlı tuğrası, Atatürk silueti ve özel müşteri logolarını madalyon üstüne 0.4mm kabartabilirsiniz."
  },
  "clo_scl_sculpt": {
    "id": "clo_scl_sculpt",
    "name": "Sculpt Mode",
    "trName": "Heykeltıraş Modu",
    "meaning": "Heykeltıraş Modu",
    "shortDesc": "Serbest fırça ile şekillendirmeyi açar.",
    "icon": "icons/clayoo/subtools/clo_scl_sculpt.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooSculpt",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSculpt",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Sculpt Mode komutu. Türkçe anlamı: Heykeltıraş Modu. Serbest fırça ile şekillendirmeyi açar. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_brush": {
    "id": "clo_scl_brush",
    "name": "Brush",
    "trName": "Standart Kabartma Fırçası",
    "meaning": "Standart Kabartma Fırçası",
    "shortDesc": "Farenin geçtiği yeri hafifçe kabartır.",
    "icon": "icons/clayoo/subtools/clo_scl_brush.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Brush komutu. Türkçe anlamı: Standart Kabartma Fırçası. Farenin geçtiği yeri hafifçe kabartır. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_crease": {
    "id": "clo_scl_crease",
    "name": "Crease Brush",
    "trName": "Yiv / Oluk Açma Fırçası",
    "meaning": "Yiv / Oluk Açma Fırçası",
    "shortDesc": "Keskin damar ve tırnak izi çizer.",
    "icon": "icons/clayoo/subtools/clo_scl_crease.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooCreaseBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooCreaseBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Crease Brush komutu. Türkçe anlamı: Yiv / Oluk Açma Fırçası. Keskin damar ve tırnak izi çizer. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_flatten": {
    "id": "clo_scl_flatten",
    "name": "Flatten",
    "trName": "Düzleme Fırçası",
    "meaning": "Düzleme Fırçası",
    "shortDesc": "Tümsekleri ütüleyip düzler.",
    "icon": "icons/clayoo/subtools/clo_scl_flatten.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooFlattenBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooFlattenBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Flatten komutu. Türkçe anlamı: Düzleme Fırçası. Tümsekleri ütüleyip düzler. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_inflate": {
    "id": "clo_scl_inflate",
    "name": "Inflate",
    "trName": "Balon Gibi Şişirme Fırçası",
    "meaning": "Balon Gibi Şişirme Fırçası",
    "shortDesc": "Hamuru hacimlendirip şişirir.",
    "icon": "icons/clayoo/subtools/clo_scl_inflate.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooInflateBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooInflateBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Inflate komutu. Türkçe anlamı: Balon Gibi Şişirme Fırçası. Hamuru hacimlendirip şişirir. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_pinch": {
    "id": "clo_scl_pinch",
    "name": "Pinch",
    "trName": "Çimdikleme / Sıkıştırma",
    "meaning": "Çimdikleme / Sıkıştırma",
    "shortDesc": "İki tepeyi birbirine doğru daraltıp keskinleştirir.",
    "icon": "icons/clayoo/subtools/clo_scl_pinch.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooPinchBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooPinchBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Pinch komutu. Türkçe anlamı: Çimdikleme / Sıkıştırma. İki tepeyi birbirine doğru daraltıp keskinleştirir. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_smooth": {
    "id": "clo_scl_smooth",
    "name": "Smooth Brush",
    "trName": "Pürüzsüzleştirme (Shift)",
    "meaning": "Pürüzsüzleştirme (Shift)",
    "shortDesc": "Fırça izlerini ipeksi pürüzsüzleştirir.",
    "icon": "icons/clayoo/subtools/clo_scl_smooth.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooSmoothBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSmoothBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Smooth Brush komutu. Türkçe anlamı: Pürüzsüzleştirme (Shift). Fırça izlerini ipeksi pürüzsüzleştirir. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_drag": {
    "id": "clo_scl_drag",
    "name": "Drag",
    "trName": "Çekiştirme Fırçası (Move)",
    "meaning": "Çekiştirme Fırçası (Move)",
    "shortDesc": "Hamurun bir bölgesini serbest uzatır.",
    "icon": "icons/clayoo/subtools/clo_scl_drag.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooDragBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooDragBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Drag komutu. Türkçe anlamı: Çekiştirme Fırçası (Move). Hamurun bir bölgesini serbest uzatır. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_scl_twist": {
    "id": "clo_scl_twist",
    "name": "Twist Brush",
    "trName": "Döndürme / Burulma Fırçası",
    "meaning": "Döndürme / Burulma Fırçası",
    "shortDesc": "Dairesel burgu efekti verir.",
    "icon": "icons/clayoo/subtools/clo_scl_twist.png",
    "isFlyoutSub": true,
    "parentId": "clo_sculpt",
    "parentName": "Sculpt",
    "rhinoCommand": "_ClayooTwistBrush",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooTwistBrush",
        "desc": "Fırça çapı ve şiddetini belirleyip yüzeyde sürükleyin."
      }
    ],
    "options": [],
    "jewelerTip": "Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz.",
    "ttsText": "Twist Brush komutu. Türkçe anlamı: Döndürme / Burulma Fırçası. Dairesel burgu efekti verir. Püf noktası: Fırça kullanırken Shift tuşuna basılı tutarak anında Smooth (yumuşatma) fırçasına geçebilirsiniz."
  },
  "clo_stg_hotkeys": {
    "id": "clo_stg_hotkeys",
    "name": "Hotkeys",
    "trName": "Kısayol Tuşları",
    "meaning": "Kısayol Tuşları",
    "shortDesc": "Fırça ve seçim kısayollarını düzenler.",
    "icon": "icons/clayoo/subtools/clo_stg_hotkeys.png",
    "isFlyoutSub": true,
    "parentId": "clo_settings",
    "parentName": "Settings",
    "rhinoCommand": "_ClayooHotkeys",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooHotkeys",
        "desc": "Ayar penceresini açın."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin.",
    "ttsText": "Hotkeys komutu. Türkçe anlamı: Kısayol Tuşları. Fırça ve seçim kısayollarını düzenler. Püf noktası: Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin."
  },
  "clo_stg_set_plane": {
    "id": "clo_stg_set_plane",
    "name": "Set Plane",
    "trName": "Çalışma Düzlemi Seç",
    "meaning": "Çalışma Düzlemi Seç",
    "shortDesc": "Heykel yaparken referans düzlemi kilitler.",
    "icon": "icons/clayoo/subtools/clo_stg_set_plane.png",
    "isFlyoutSub": true,
    "parentId": "clo_settings",
    "parentName": "Settings",
    "rhinoCommand": "_ClayooSetPlane",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooSetPlane",
        "desc": "Ayar penceresini açın."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin.",
    "ttsText": "Set Plane komutu. Türkçe anlamı: Çalışma Düzlemi Seç. Heykel yaparken referans düzlemi kilitler. Püf noktası: Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin."
  },
  "clo_stg_reset_plane": {
    "id": "clo_stg_reset_plane",
    "name": "Reset Plane",
    "trName": "Düzlemi Sıfırla",
    "meaning": "Düzlemi Sıfırla",
    "shortDesc": "Referans düzlemini sıfırlar.",
    "icon": "icons/clayoo/subtools/clo_stg_reset_plane.png",
    "isFlyoutSub": true,
    "parentId": "clo_settings",
    "parentName": "Settings",
    "rhinoCommand": "_ClayooResetPlane",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooResetPlane",
        "desc": "Ayar penceresini açın."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin.",
    "ttsText": "Reset Plane komutu. Türkçe anlamı: Düzlemi Sıfırla. Referans düzlemini sıfırlar. Püf noktası: Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin."
  },
  "clo_stg_about": {
    "id": "clo_stg_about",
    "name": "About Clayoo",
    "trName": "Clayoo Hakkında",
    "meaning": "Clayoo Hakkında",
    "shortDesc": "Sürüm ve lisans bilgisi.",
    "icon": "icons/clayoo/subtools/clo_stg_about.png",
    "isFlyoutSub": true,
    "parentId": "clo_settings",
    "parentName": "Settings",
    "rhinoCommand": "_ClayooAbout",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ClayooAbout",
        "desc": "Ayar penceresini açın."
      }
    ],
    "options": [],
    "jewelerTip": "Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin.",
    "ttsText": "About Clayoo komutu. Türkçe anlamı: Clayoo Hakkında. Sürüm ve lisans bilgisi. Püf noktası: Clayoo kısayollarını özelleştirerek W (Taşı), E (Döndür), R (Ölçekle) kontrollerine anında erişin."
  }
};

function findClayooCommand(cmdId) {
  if (!cmdId) return null;
  if (clayooCommandsCatalog[cmdId]) return clayooCommandsCatalog[cmdId];
  return null;
}

window.clayooRibbonRows = clayooRibbonRows;
window.clayooFlyoutDrawers = clayooFlyoutDrawers;
window.clayooCommandsCatalog = clayooCommandsCatalog;
window.findClayooCommand = findClayooCommand;
