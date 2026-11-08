// MATRIXGOLD & RHINO - VIEW (GÖRÜNÜM, KAMERA & ÇALIŞMA DÜZLEMLERİ) VERİ KATALOĞU
// 21 Ana Şerit Komutu + 4 Alt Çekmece + 57 Alt Araç

const viewRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: VIEW (GÖRÜNÜM, KAMERA & ÇALIŞMA DÜZLEMLERİ)",
    "tools": [
      {
        "id": "viw_restore_vp",
        "name": "Restore Viewports",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_restore_vp.png"
      },
      {
        "id": "viw_surface_view",
        "name": "Surface View",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_surface_view.png"
      },
      {
        "id": "viw_pan",
        "name": "Pan",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_pan.png"
      },
      {
        "id": "viw_rotate",
        "name": "Rotate View",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_rotate.png"
      },
      {
        "id": "viw_zoom",
        "name": "Zoom",
        "hasFlyout": true,
        "flyoutKey": "zoom",
        "subCount": 10,
        "icon": "icons/view/ribbon/viw_zoom.png"
      },
      {
        "id": "viw_set_obj_disp",
        "name": "Set Object Display",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_set_obj_disp.png"
      },
      {
        "id": "viw_show_z_buf",
        "name": "Show Z Buffer",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_show_z_buf.png"
      },
      {
        "id": "viw_walk_about",
        "name": "Walk About",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_walk_about.png"
      },
      {
        "id": "viw_clipping_plane",
        "name": "Clipping Plane",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_clipping_plane.png"
      },
      {
        "id": "viw_new_float_vp",
        "name": "New Floating Viewport",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_new_float_vp.png"
      },
      {
        "id": "viw_toggle_float",
        "name": "Toggle Floating Viewport",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_toggle_float.png"
      },
      {
        "id": "viw_set_cplane",
        "name": "Set C-Plane",
        "hasFlyout": true,
        "flyoutKey": "cplane",
        "subCount": 17,
        "icon": "icons/view/ribbon/viw_set_cplane.png"
      },
      {
        "id": "viw_set_camera",
        "name": "Set Camera",
        "hasFlyout": true,
        "flyoutKey": "camera",
        "subCount": 19,
        "icon": "icons/view/ribbon/viw_set_camera.png"
      },
      {
        "id": "viw_background_bmp",
        "name": "Background Bitmap",
        "hasFlyout": true,
        "flyoutKey": "background_bmp",
        "subCount": 11,
        "icon": "icons/view/ribbon/viw_background_bmp.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: VIEW (GÖRÜNÜM, KAMERA & ÇALIŞMA DÜZLEMLERİ)",
    "tools": [
      {
        "id": "viw_grid_options",
        "name": "Grid Options",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_grid_options.png"
      },
      {
        "id": "viw_capture_view",
        "name": "Capture Viewport",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_capture_view.png"
      },
      {
        "id": "viw_viewport_prop",
        "name": "Viewport Properties",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_viewport_prop.png"
      },
      {
        "id": "viw_gumball_reset",
        "name": "Gumball Reset",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_gumball_reset.png"
      },
      {
        "id": "viw_undo_view",
        "name": "Undo View Change",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_undo_view.png"
      },
      {
        "id": "viw_redo_view",
        "name": "Redo View Change",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_redo_view.png"
      },
      {
        "id": "viw_gem_view",
        "name": "Gem View",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/view/ribbon/viw_gem_view.png"
      }
    ]
  }
];

const viewFlyoutDrawers = {
  "zoom": {
    "key": "zoom",
    "title": "Zoom",
    "trTitle": "Yakınlaştırma & Odak Takımı",
    "count": 10,
    "subIds": [
      "viw_zm_window",
      "viw_zm_target",
      "viw_zm_dynamic",
      "viw_zm_extents",
      "viw_zm_all_extents",
      "viw_zm_selected",
      "viw_zm_all_selected",
      "viw_zm_1to1",
      "viw_zm_calib",
      "viw_zm_naked"
    ]
  },
  "cplane": {
    "key": "cplane",
    "title": "Set C-Plane",
    "trTitle": "Çalışma Düzlemi (C-Plane)",
    "count": 17,
    "subIds": [
      "viw_cp_undo",
      "viw_cp_redo",
      "viw_cp_mobile",
      "viw_cp_elevation",
      "viw_cp_rotate",
      "viw_cp_3pt",
      "viw_cp_to_obj",
      "viw_cp_to_view",
      "viw_cp_vertical",
      "viw_cp_perp_crv",
      "viw_cp_origin",
      "viw_cp_xaxis",
      "viw_cp_zaxis",
      "viw_cp_world_top",
      "viw_cp_world_right",
      "viw_cp_world_front",
      "viw_cp_named"
    ]
  },
  "camera": {
    "key": "camera",
    "title": "Set Camera",
    "trTitle": "Kamera & Bakış Açıları",
    "count": 19,
    "subIds": [
      "viw_cam_cp_top",
      "viw_cam_cp_bot",
      "viw_cam_cp_left",
      "viw_cam_cp_right",
      "viw_cam_cp_front",
      "viw_cam_cp_back",
      "viw_cam_place_target",
      "viw_cam_center_view",
      "viw_cam_place_cam",
      "viw_cam_move_cam",
      "viw_cam_orient",
      "viw_cam_match_vp",
      "viw_cam_sync_views",
      "viw_cam_turntable",
      "viw_cam_show_cam",
      "viw_cam_rotate",
      "viw_cam_tilt",
      "viw_cam_adjust_lens",
      "viw_cam_dolly"
    ]
  },
  "background_bmp": {
    "key": "background_bmp",
    "title": "Background Bitmap",
    "trTitle": "Arka Plan Referans Resmi",
    "count": 11,
    "subIds": [
      "viw_bmp_place",
      "viw_bmp_refresh",
      "viw_bmp_remove",
      "viw_bmp_extract",
      "viw_bmp_hide",
      "viw_bmp_show",
      "viw_bmp_move",
      "viw_bmp_align",
      "viw_bmp_scale",
      "viw_bmp_grayscale",
      "viw_bmp_picture_frame"
    ]
  }
};

const viewCommandsCatalog = {
  "viw_restore_vp": {
    "id": "viw_restore_vp",
    "name": "Restore Viewports",
    "trName": "4 Görünüşü Sıfırla (Restore Viewports)",
    "meaning": "Standart Top, Front, Right ve Perspektif Pencerelerine Dönüş",
    "shortDesc": "Öğrenci Adımları: 1. Restore Viewports simgesine Sol Tıklayın. 2. Ekran düzeniniz kaybolmuş veya tek ekranda takılı kalmışsa anında standart 4 pencereli kuyumcu çalışma düzenine döner. 3. Enter ile onaylayın.",
    "icon": "icons/view/ribbon/viw_restore_vp.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_4View",
    "mouseAction": "Sol Tık: Standart 4 çalışma penceresini geri yükler | Sağ Tık: 3 ekran moduna geçer",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Ekran pencerelerinizden biri yanlışlıkla kapandığında veya bozulduğunda panik yapmayın; Restore Viewports'a tek tıkla tıkladığınızda fabrika ayarlarına anında geri dönersiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Restore Viewports komutu. Standart dörtlü çalışma pencerelerini geri yükler. Ekran düzeninizi sıfırlamak için tıklayın.",
    "cmdPrompt": "Command: _4View\\nResetting to standard 4 viewport layout <Enter>:",
    "cmdOptions": [
      {
        "name": "DefaultLayout",
        "desc": "Varsayılan Düzen: Üst (Top), Ön (Front), Sağ (Right) ve Perspektif (Perspective)."
      }
    ]
  },
  "viw_surface_view": {
    "id": "viw_surface_view",
    "name": "Surface View",
    "trName": "Yüzeye Dik Çalışma Ekranı (Surface View)",
    "meaning": "Eğik Yüzeyin Karşısına Geçip Düz Çizim Yapma (C-Plane to Surface)",
    "shortDesc": "Öğrenci Adımları: 1. Üzerine çizim yapacağınız eğik veya kavisli yüzeyi seçin. 2. Surface View simgesine Sol Tıklayın. 3. Çalışma ızgarası (C-Plane) tam o yüzeye yapışır ve kamera yüzeye 90 derece dik bakar. Artık düz bir kağıda çizer gibi rahatça taş yuvası açabilirsiniz.",
    "icon": "icons/view/ribbon/viw_surface_view.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Plan",
    "mouseAction": "Sol Tık: C-Plane ızgarasını yüzeye teğet yapıştırır | Sağ Tık: Dünya C-Plane'e sıfırlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Fantezi yüzüklerin eğik yan yüzeylerine yazı yazarken veya delik delerken Surface View açmazsanız delikleriniz yüzeye eğik girer! Her zaman yüzeye dik bakın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Surface View komutu. Çalışma düzlemini seçtiğiniz eğik yüzeye yapıştırarak doğrudan karşısına geçer. Yüzeye dik çizim yapmanızı sağlar. Yüzeyi seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _CPlaneToSurface\\nSelect surface for construction plane alignment <Enter>:",
    "cmdOptions": [
      {
        "name": "FlipNormal",
        "desc": "Normale Çevir: Izgarayı yüzeyin ön veya arka yüzüne yapıştırır."
      }
    ]
  },
  "viw_pan": {
    "id": "viw_pan",
    "name": "Pan",
    "trName": "Ekranı Kaydır (Pan)",
    "meaning": "Kamera Açısını Bozmadan Sağa-Sola-Yukarı Kaydırma",
    "shortDesc": "Öğrenci Adımları: 1. Klavyeden Shift tuşuna basılı tutarken farenin Sağ Tuşuna basıp sürükleyin (veya Pan simgesine Sol Tıklayın). 2. Çalışma alanınız kamera açısı dönmeden paralel olarak kayar.",
    "icon": "icons/view/ribbon/viw_pan.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Pan",
    "mouseAction": "Sol Tık: Pan el aracını aktif eder | Shift + Sağ Tık: Hızlı kaydırma",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğün sağ kolunu çizerken açıyı bozmadan sol kola geçmek için Shift + Sağ Tık ile kaydırmak kuyumcu tasarımcıların en çok kullandığı refleks refakatçisidir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Pan komutu. Kamera açınızı bozmadan ekranı sağa sola veya yukarı aşağı kaydırır. Shift tuşuyla farenin sağ tuşuna basarak hızlıca kullanabilirsiniz.",
    "cmdPrompt": "Command: _Pan\\nClick and drag to pan viewport camera <Enter>:",
    "cmdOptions": [
      {
        "name": "SmoothPan",
        "desc": "Akıcı Kaydırma: Donma olmadan yumuşak zemin hareketi."
      }
    ]
  },
  "viw_rotate": {
    "id": "viw_rotate",
    "name": "Rotate View",
    "trName": "Kamera Açısını Döndür (Rotate View)",
    "meaning": "Perspektif Ekranda Takıyı 360 Derece Çevirme",
    "shortDesc": "Öğrenci Adımları: 1. Perspektif penceresinde farenin Sağ Tuşuna basılı tutun ve fareyi hareket ettirin. 2. Takının etrafında 360 derece dönerek altını, üstünü ve tırnak diplerini inceleyin.",
    "icon": "icons/view/ribbon/viw_rotate.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_RotateView",
    "mouseAction": "Sağ Tık Basılı Tutarak Sürükle: 3D uzayda serbest kamera dönüşü | Sol Tık: Merkezli dönüş",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğü döndürürken takla atıp başınızı döndürmemesi için Rhino Seçenekleri'nden Kamera Dönüşünü 'Turntable' moduna ayarlayın; takı vitrin tablasında döner gibi sabit eksende döner (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Rotate View komutu. Perspektif ekranda farenin sağ tuşuna basılı tutarak takınızın etrafında üç boyutlu dönmenizi sağlar.",
    "cmdPrompt": "Command: _RotateView\\nRotate perspective camera around target point <Enter>:",
    "cmdOptions": [
      {
        "name": "Turntable",
        "desc": "Kuyumcu Döner Tablası: Z eksenini dik tutarak takının devrilmeden dönmesini sağlar."
      }
    ]
  },
  "viw_zoom": {
    "id": "viw_zoom",
    "name": "Zoom",
    "trName": "Seçilene / Sahneye Odaklan (Zoom Extents)",
    "meaning": "Farenin Kaybolan Modeli Ekrana Tam Boy Getirmesi",
    "shortDesc": "Öğrenci Adımları: 1. Ekrana sığdırmak istediğiniz taşı veya yüzüğü seçin. 2. Zoom simgesine Sol Tıklayın (veya klavyeden Z -> S yapın). 3. Seçili nesne ekranın tam merkezine en büyük ve net boyutta odaklanır.",
    "icon": "icons/view/ribbon/viw_zoom.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Zoom",
    "mouseAction": "Sol Tık: Seçili nesneye tam ekran yaklaşır | Sağ Tık: Sahnedeki tüm parçaları ekrana sığdırır",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Mikro pırlanta tırnaklarını düzenlerken ekranda kaybolmamak için tırnağı seçip Zoom Selected yapmak mikroskop altına koymuş gibi net çalışma kolaylığı sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Zoom Extents komutu. Seçtiğiniz nesneyi veya tüm sahneyi ekranın tam merkezine odaklar. Tıklayarak parçayı ekrana tam boy getirin.",
    "cmdPrompt": "Command: _Zoom\\nExtents of selected objects <Enter>:",
    "cmdOptions": [
      {
        "name": "Selected",
        "desc": "Seçilene Yaklaş: Sadece seçili parçayı ekrana odaklar."
      },
      {
        "name": "All",
        "desc": "Tümünü Sığdır: Sahnedeki her şeyi 4 pencerede birden ekrana sığdırır."
      }
    ]
  },
  "viw_set_obj_disp": {
    "id": "viw_set_obj_disp",
    "name": "Set Object Display",
    "trName": "Özel Nesne Görünüm Modu",
    "meaning": "Özel Nesne Görünüm Modu",
    "shortDesc": "Seçili nesneye şeffaf (Ghosted) veya tel kafes (Wireframe) görünümü atar.",
    "icon": "icons/view/ribbon/viw_set_obj_disp.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SetObjectDisplayMode",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Set Object Display komutu. Türkçe anlamı: Özel Nesne Görünüm Modu. Seçili nesneye şeffaf (Ghosted) veya tel kafes (Wireframe) görünümü atar. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_show_z_buf": {
    "id": "viw_show_z_buf",
    "name": "Show Z Buffer",
    "trName": "Derinlik Haritası (Z-Buffer)",
    "meaning": "Derinlik Haritası (Z-Buffer)",
    "shortDesc": "Kameraya olan mesafeyi gri tonlamalı derinlikte gösterir.",
    "icon": "icons/view/ribbon/viw_show_z_buf.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ShowZBuffer",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Show Z Buffer komutu. Türkçe anlamı: Derinlik Haritası (Z-Buffer). Kameraya olan mesafeyi gri tonlamalı derinlikte gösterir. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_walk_about": {
    "id": "viw_walk_about",
    "name": "Walk About",
    "trName": "Serbest Gezinme (Walkabout)",
    "meaning": "Serbest Gezinme (Walkabout)",
    "shortDesc": "Modelin içinde birinci şahıs oyun kamerası gibi gezinir.",
    "icon": "icons/view/ribbon/viw_walk_about.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_WalkAbout",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Walk About komutu. Türkçe anlamı: Serbest Gezinme (Walkabout). Modelin içinde birinci şahıs oyun kamerası gibi gezinir. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_clipping_plane": {
    "id": "viw_clipping_plane",
    "name": "Clipping Plane",
    "trName": "Canlı Kesit Düzlemi (Clipping Plane)",
    "meaning": "Yüzüğün İç Astarını ve Külahlarını Canlı Gösteren Bıçak Düzlemi",
    "shortDesc": "Öğrenci Adımları: 1. Clipping Plane simgesine Sol Tıklayın. 2. Yüzüğün tam ortasından geçecek bir dikdörtgen düzlem çizin. 3. Düzlemin arkasında kalan metal şeffaflaşır; yüzüğün iç et payını, tırnak gömülmelerini ve taş külahlarını canlı kesit olarak incelersiniz. 4. İşiniz bitince düzlemi silin.",
    "icon": "icons/view/ribbon/viw_clipping_plane.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ClippingPlane",
    "mouseAction": "Sol Tık: Sahneye canlı kesit düzlemi yerleştirir | Sağ Tık: Kesit yönünü ters çevirir",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğün içine astar oturturken taşların sivri külahlarının astara çarpıp çarpmadığını görmek için Clipping Plane mucizevi bir denetim aracıdır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Clipping Plane komutu. Modele canlı bir kesit bıçağı atarak yüzüğün iç yapısını ve taş külahlarının derinliğini görmenizi sağlar. Düzlemi çizin ve iç detayı inceleyin.",
    "cmdPrompt": "Command: _ClippingPlane\\nFirst corner of clipping plane rectangle <Enter>:",
    "cmdOptions": [
      {
        "name": "FlipDirection",
        "desc": "Kesit Yönü: Kesilen tarafı tersine çevirir."
      },
      {
        "name": "ActiveViews",
        "desc": "Hangi Pencereler: Kesitin sadece Perspektifte mi yoksa 4 ekranda birden mi görüneceğini seçer."
      }
    ]
  },
  "viw_new_float_vp": {
    "id": "viw_new_float_vp",
    "name": "New Floating Viewport",
    "trName": "Yeni Bağımsız Pencere",
    "meaning": "Yeni Bağımsız Pencere",
    "shortDesc": "İkinci monitöre taşınabilir bağımsız görünüm ekranı açar.",
    "icon": "icons/view/ribbon/viw_new_float_vp.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_NewFloatingViewport",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "New Floating Viewport komutu. Türkçe anlamı: Yeni Bağımsız Pencere. İkinci monitöre taşınabilir bağımsız görünüm ekranı açar. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_toggle_float": {
    "id": "viw_toggle_float",
    "name": "Toggle Floating Viewport",
    "trName": "Pencereyi Tam Ekran Yap",
    "meaning": "Pencereyi Tam Ekran Yap",
    "shortDesc": "Seçili pencereyi tek tıkla büyütüp küçültür.",
    "icon": "icons/view/ribbon/viw_toggle_float.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ToggleFloatingViewport",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Toggle Floating Viewport komutu. Türkçe anlamı: Pencereyi Tam Ekran Yap. Seçili pencereyi tek tıkla büyütüp küçültür. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_set_cplane": {
    "id": "viw_set_cplane",
    "name": "Set C-Plane",
    "trName": "Çalışma Düzlemini Ayarla (Set C-Plane)",
    "meaning": "Çizim Izgarasını (Top, Front, Right veya Orijin) Değiştirme",
    "shortDesc": "Öğrenci Adımları: 1. Set C-Plane simgesine Sol Tıklayın. 2. Izgaranın gitmesini istediğiniz düzlemi (Top, Front, Right veya 3 Nokta) seçin. 3. Çizim düzleminiz oraya taşınır. F4 tuşuna basarak tekrar merkeze sıfırlayabilirsiniz.",
    "icon": "icons/view/ribbon/viw_set_cplane.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CPlane",
    "mouseAction": "Sol Tık: C-Plane koordinat menüsünü açar | Sağ Tık: Dünya Orijinine (0,0,0) sıfırlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Çizim yaparken bir anda çizgileriniz havada uçuşmaya başladıysa C-Plane'iniz kaymıştır! Hemen Set C-Plane -> World Top yaparak ızgarayı yere sabitleyin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Set C-Plane komutu. Çizim yaptığınız matematiksel ızgarayı istediğiniz konuma veya nesneye taşır. Düzlemi seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _CPlane\\nChoose construction plane mode ( World  Top  Front  Surface ):",
    "cmdOptions": [
      {
        "name": "WorldTop",
        "desc": "Dünya Üst: Standart üstten bakış sıfır ızgarasına sıfırlar."
      },
      {
        "name": "Origin",
        "desc": "Orijin Taşı: Izgaranın merkezini seçtiğiniz taşa veya noktaya taşır."
      }
    ]
  },
  "viw_set_camera": {
    "id": "viw_set_camera",
    "name": "Set Camera",
    "trName": "Kamera ve Bakış Açıları",
    "meaning": "Kamera ve Bakış Açıları",
    "shortDesc": "Standart üst, alt, ön, yan bakışlar ve hedef odak noktası.",
    "icon": "icons/view/ribbon/viw_set_camera.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SetDisplayMode",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Hassas simetri kontrolü için Top ve Right bakışları kilitler.",
    "ttsText": "Set Camera komutu. Türkçe anlamı: Kamera ve Bakış Açıları. Standart üst, alt, ön, yan bakışlar ve hedef odak noktası. Püf noktası: Hassas simetri kontrolü için Top ve Right bakışları kilitler."
  },
  "viw_background_bmp": {
    "id": "viw_background_bmp",
    "name": "Background Bitmap",
    "trName": "Arka Plan Referans Resmi (Background Bitmap)",
    "meaning": "Görünüş Pencerelerine Karakalem Eskiz Fotoğrafı Ekleme",
    "shortDesc": "Öğrenci Adımları: 1. Üstten veya yandan bakış ekranına (Top veya Front) geçin. 2. Background Bitmap simgesine Sol Tıklayın. 3. 'Place' (Yerleştir) seçip bilgisayarınızdaki takı çizimini seçin. 4. Ekranda iki köşe tıklayarak resmi parmak ölçünüze göre ölçekleyin. Enter ile sabitleyin.",
    "icon": "icons/view/ribbon/viw_background_bmp.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BackgroundBitmap",
    "mouseAction": "Sol Tık: Arka plana referans fotoğraf yapıştırır | Sağ Tık: Resmi gizler/kaldırır",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşterinin getirdiği antika bir broşun fotoğrafını Background Bitmap ile Front ekranına koyup Scale seçeneğiyle cetvel çizgisinden tam milimetresine ölçekleyerek üzerinden çizmek birebir replika yapmayı sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Background Bitmap komutu. Çalışma ekranınızın arka planına takı fotoğraflarını ve müşteri çizimlerini yerleştirir. Resmi ölçekleyip üzerinden çizim yapabilirsiniz.",
    "cmdPrompt": "Command: _BackgroundBitmap\\nChoose bitmap action ( Place  Scale  Move  Align  Hide ):",
    "cmdOptions": [
      {
        "name": "Place",
        "desc": "Yerleştir: Bilgisayardan resim seçip ekrana serer."
      },
      {
        "name": "Scale",
        "desc": "Ölçekle: Resimdeki yüzüğü tam 1'e 1 milimetre parmak ölçüsüne getirir."
      }
    ]
  },
  "viw_grid_options": {
    "id": "viw_grid_options",
    "name": "Grid Options",
    "trName": "Izgara & Milimetre Ayarları",
    "meaning": "Izgara & Milimetre Ayarları",
    "shortDesc": "Santim ve milimetre ızgara sıklığını ayarlar.",
    "icon": "icons/view/ribbon/viw_grid_options.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Grid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Grid Options komutu. Türkçe anlamı: Izgara & Milimetre Ayarları. Santim ve milimetre ızgara sıklığını ayarlar. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_capture_view": {
    "id": "viw_capture_view",
    "name": "Capture Viewport",
    "trName": "Ekran Görüntüsü Kaydet",
    "meaning": "Ekran Görüntüsü Kaydet",
    "shortDesc": "Sahneyi arka plansız şeffaf PNG olarak panoya veya dosyaya kopyalar.",
    "icon": "icons/view/ribbon/viw_capture_view.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ViewCaptureToFile",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Müşteriye WhatsApp'tan hızlı tasarım taslağı göndermek için kullanılır.",
    "ttsText": "Capture Viewport komutu. Türkçe anlamı: Ekran Görüntüsü Kaydet. Sahneyi arka plansız şeffaf PNG olarak panoya veya dosyaya kopyalar. Püf noktası: Müşteriye WhatsApp'tan hızlı tasarım taslağı göndermek için kullanılır."
  },
  "viw_viewport_prop": {
    "id": "viw_viewport_prop",
    "name": "Viewport Properties",
    "trName": "Görünüm Özellikleri",
    "meaning": "Görünüm Özellikleri",
    "shortDesc": "Kamera lens açısı (ör: 50mm) ve perspektif derinliğini ayarlar.",
    "icon": "icons/view/ribbon/viw_viewport_prop.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ViewportProperties",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Viewport Properties komutu. Türkçe anlamı: Görünüm Özellikleri. Kamera lens açısı (ör: 50mm) ve perspektif derinliğini ayarlar. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_gumball_reset": {
    "id": "viw_gumball_reset",
    "name": "Gumball Reset",
    "trName": "Gumball Orijinini Sıfırla",
    "meaning": "Gumball Orijinini Sıfırla",
    "shortDesc": "Taşıma okunu nesnenin kendi eksenine yeniden hizalar.",
    "icon": "icons/view/ribbon/viw_gumball_reset.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GumballReset",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Gumball Reset komutu. Türkçe anlamı: Gumball Orijinini Sıfırla. Taşıma okunu nesnenin kendi eksenine yeniden hizalar. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_undo_view": {
    "id": "viw_undo_view",
    "name": "Undo View Change",
    "trName": "Kamera Hareketini Geri Al",
    "meaning": "Kamera Hareketini Geri Al",
    "shortDesc": "Yanlışlıkla bozulan kamera bakış açısını bir önceki açıya döndürür.",
    "icon": "icons/view/ribbon/viw_undo_view.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_UndoView",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Undo View Change komutu. Türkçe anlamı: Kamera Hareketini Geri Al. Yanlışlıkla bozulan kamera bakış açısını bir önceki açıya döndürür. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_redo_view": {
    "id": "viw_redo_view",
    "name": "Redo View Change",
    "trName": "Kamera Hareketini İleri Al",
    "meaning": "Kamera Hareketini İleri Al",
    "shortDesc": "Geri alınan kamera açısına tekrar gider.",
    "icon": "icons/view/ribbon/viw_redo_view.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_RedoView",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Redo View Change komutu. Türkçe anlamı: Kamera Hareketini İleri Al. Geri alınan kamera açısına tekrar gider. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_gem_view": {
    "id": "viw_gem_view",
    "name": "Gem View",
    "trName": "Taşa Odaklı Bakış",
    "meaning": "Taşa Odaklı Bakış",
    "shortDesc": "Seçilen taşın tablasına dik özel kamera açısı kurar.",
    "icon": "icons/view/ribbon/viw_gem_view.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemView",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "LensLength",
        "desc": "Kamera lens odak mesafesi"
      }
    ],
    "jewelerTip": "Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır.",
    "ttsText": "Gem View komutu. Türkçe anlamı: Taşa Odaklı Bakış. Seçilen taşın tablasına dik özel kamera açısı kurar. Püf noktası: Kuyumculuk modelleme ve kamera açılarının hassas kontrolünde kullanılır."
  },
  "viw_zm_window": {
    "id": "viw_zm_window",
    "name": "Zoom Window",
    "trName": "Pencere İçini Yakınlaştır",
    "meaning": "Pencere İçini Yakınlaştır",
    "shortDesc": "Çerçeve içine alınan bölgeyi ekrana doldurur.",
    "icon": "icons/view/subtools/viw_zm_window.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _Window",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _Window",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom Window komutu. Türkçe anlamı: Pencere İçini Yakınlaştır. Çerçeve içine alınan bölgeyi ekrana doldurur. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_target": {
    "id": "viw_zm_target",
    "name": "Zoom Target",
    "trName": "Hedefe Odaklan",
    "meaning": "Hedefe Odaklan",
    "shortDesc": "Tıklanan merkezi ekranın tam ortasına alır.",
    "icon": "icons/view/subtools/viw_zm_target.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _Target",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _Target",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom Target komutu. Türkçe anlamı: Hedefe Odaklan. Tıklanan merkezi ekranın tam ortasına alır. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_dynamic": {
    "id": "viw_zm_dynamic",
    "name": "Zoom Dynamic",
    "trName": "Dinamik Yakınlaştırma",
    "meaning": "Dinamik Yakınlaştırma",
    "shortDesc": "Fareyi sürükleyerek pürüzsüz yaklaşır.",
    "icon": "icons/view/subtools/viw_zm_dynamic.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _Dynamic",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _Dynamic",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom Dynamic komutu. Türkçe anlamı: Dinamik Yakınlaştırma. Fareyi sürükleyerek pürüzsüz yaklaşır. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_extents": {
    "id": "viw_zm_extents",
    "name": "Zoom Extents",
    "trName": "Tüm Çizimi Ekrana Sığdır",
    "meaning": "Tüm Çizimi Ekrana Sığdır",
    "shortDesc": "Sahnede çizilmiş her şeyi tek ekranda toplar.",
    "icon": "icons/view/subtools/viw_zm_extents.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _Extents",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _Extents",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom Extents komutu. Türkçe anlamı: Tüm Çizimi Ekrana Sığdır. Sahnede çizilmiş her şeyi tek ekranda toplar. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_all_extents": {
    "id": "viw_zm_all_extents",
    "name": "Zoom All Extents",
    "trName": "Tüm Pencerelerde Sığdır",
    "meaning": "Tüm Pencerelerde Sığdır",
    "shortDesc": "4 ekranda birden tüm modeli tam ortalar.",
    "icon": "icons/view/subtools/viw_zm_all_extents.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _All _Extents",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _All _Extents",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom All Extents komutu. Türkçe anlamı: Tüm Pencerelerde Sığdır. 4 ekranda birden tüm modeli tam ortalar. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_selected": {
    "id": "viw_zm_selected",
    "name": "Zoom Selected",
    "trName": "Seçili Nesneye Odaklan (ZS)",
    "meaning": "Seçili Nesneye Odaklan (ZS)",
    "shortDesc": "Yalnızca seçilen taş veya kola odaklanır.",
    "icon": "icons/view/subtools/viw_zm_selected.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _Selected",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _Selected",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom Selected komutu. Türkçe anlamı: Seçili Nesneye Odaklan (ZS). Yalnızca seçilen taş veya kola odaklanır. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_all_selected": {
    "id": "viw_zm_all_selected",
    "name": "Zoom All Selected",
    "trName": "Tüm Pencerelerde Seçiliye Odaklan",
    "meaning": "Tüm Pencerelerde Seçiliye Odaklan",
    "shortDesc": "4 görünümde birden seçili nesneyi merkeze alır.",
    "icon": "icons/view/subtools/viw_zm_all_selected.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _All _Selected",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _All _Selected",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom All Selected komutu. Türkçe anlamı: Tüm Pencerelerde Seçiliye Odaklan. 4 görünümde birden seçili nesneyi merkeze alır. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_1to1": {
    "id": "viw_zm_1to1",
    "name": "Zoom 1-To-1",
    "trName": "Gerçek 1:1 Boyut (Birebir Cetvel)",
    "meaning": "Gerçek 1:1 Boyut (Birebir Cetvel)",
    "shortDesc": "Ekranda modeli gerçek santim/milimetre boyutunda gösterir.",
    "icon": "icons/view/subtools/viw_zm_1to1.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _1To1",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _1To1",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom 1-To-1 komutu. Türkçe anlamı: Gerçek 1:1 Boyut (Birebir Cetvel). Ekranda modeli gerçek santim/milimetre boyutunda gösterir. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_calib": {
    "id": "viw_zm_calib",
    "name": "Calibrate 1-To-1",
    "trName": "1:1 Ekran Kalibrasyonu",
    "meaning": "1:1 Ekran Kalibrasyonu",
    "shortDesc": "Monitör piksel cetvelini kalibre eder.",
    "icon": "icons/view/subtools/viw_zm_calib.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_Zoom _Calibrate",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Zoom _Calibrate",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Calibrate 1-To-1 komutu. Türkçe anlamı: 1:1 Ekran Kalibrasyonu. Monitör piksel cetvelini kalibre eder. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_zm_naked": {
    "id": "viw_zm_naked",
    "name": "Zoom Naked Edges",
    "trName": "Açık Kenara Odaklan",
    "meaning": "Açık Kenara Odaklan",
    "shortDesc": "Dökümü engelleyen delik kenarın tam üstüne zoom yapar.",
    "icon": "icons/view/subtools/viw_zm_naked.png",
    "isFlyoutSub": true,
    "parentId": "viw_zoom",
    "parentName": "Zoom",
    "rhinoCommand": "_ZoomNaked",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ZoomNaked",
        "desc": "Yakınlaştırma komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz.",
    "ttsText": "Zoom Naked Edges komutu. Türkçe anlamı: Açık Kenara Odaklan. Dökümü engelleyen delik kenarın tam üstüne zoom yapar. Püf noktası: Kısayol: ZS (Zoom Selected). Bir taşı seçip ZS yazarak anında dibine kadar odaklanabilirsiniz."
  },
  "viw_cp_undo": {
    "id": "viw_cp_undo",
    "name": "Undo C-Plane",
    "trName": "C-Plane Geri Al",
    "meaning": "C-Plane Geri Al",
    "shortDesc": "Önceki çalışma düzlemine döner.",
    "icon": "icons/view/subtools/viw_cp_undo.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Undo",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Undo",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Undo C-Plane komutu. Türkçe anlamı: C-Plane Geri Al. Önceki çalışma düzlemine döner. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_redo": {
    "id": "viw_cp_redo",
    "name": "Redo C-Plane",
    "trName": "C-Plane İleri Al",
    "meaning": "C-Plane İleri Al",
    "shortDesc": "Geri alınan düzleme tekrar gider.",
    "icon": "icons/view/subtools/viw_cp_redo.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Redo",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Redo",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Redo C-Plane komutu. Türkçe anlamı: C-Plane İleri Al. Geri alınan düzleme tekrar gider. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_mobile": {
    "id": "viw_cp_mobile",
    "name": "Mobile C-Plane",
    "trName": "Hareketli Düzlem",
    "meaning": "Hareketli Düzlem",
    "shortDesc": "Nesneye yapışan ve nesneyle birlikte dönen ızgara kurar.",
    "icon": "icons/view/subtools/viw_cp_mobile.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_Mplane",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Mplane",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Mobile C-Plane komutu. Türkçe anlamı: Hareketli Düzlem. Nesneye yapışan ve nesneyle birlikte dönen ızgara kurar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_elevation": {
    "id": "viw_cp_elevation",
    "name": "C-Plane Elevation",
    "trName": "Düzlem Yüksekliği (Z)",
    "meaning": "Düzlem Yüksekliği (Z)",
    "shortDesc": "Izgarayı Z ekseninde yukarı/aşağı kaydırır.",
    "icon": "icons/view/subtools/viw_cp_elevation.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Elevation",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Elevation",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "C-Plane Elevation komutu. Türkçe anlamı: Düzlem Yüksekliği (Z). Izgarayı Z ekseninde yukarı/aşağı kaydırır. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_rotate": {
    "id": "viw_cp_rotate",
    "name": "Rotate C-Plane",
    "trName": "Düzlemi Döndür",
    "meaning": "Düzlemi Döndür",
    "shortDesc": "Izgarayı X/Y/Z etrafında açılı çevirir.",
    "icon": "icons/view/subtools/viw_cp_rotate.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Rotate",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Rotate",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Rotate C-Plane komutu. Türkçe anlamı: Düzlemi Döndür. Izgarayı X/Y/Z etrafında açılı çevirir. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_3pt": {
    "id": "viw_cp_3pt",
    "name": "3 Point C-Plane",
    "trName": "3 Noktadan Düzlem",
    "meaning": "3 Noktadan Düzlem",
    "shortDesc": "Orijin, X yönü ve Y yönü tıklayarak açılı ızgara kurar.",
    "icon": "icons/view/subtools/viw_cp_3pt.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _3Point",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _3Point",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "3 Point C-Plane komutu. Türkçe anlamı: 3 Noktadan Düzlem. Orijin, X yönü ve Y yönü tıklayarak açılı ızgara kurar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_to_obj": {
    "id": "viw_cp_to_obj",
    "name": "C-Plane To Object",
    "trName": "Nesneye Düzlem Oturt",
    "meaning": "Nesneye Düzlem Oturt",
    "shortDesc": "Seçili katı yüzeyin tam üstüne çizim ızgarasını kilitler.",
    "icon": "icons/view/subtools/viw_cp_to_obj.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Object",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Object",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "C-Plane To Object komutu. Türkçe anlamı: Nesneye Düzlem Oturt. Seçili katı yüzeyin tam üstüne çizim ızgarasını kilitler. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_to_view": {
    "id": "viw_cp_to_view",
    "name": "C-Plane To View",
    "trName": "Kameraya Dik Düzlem",
    "meaning": "Kameraya Dik Düzlem",
    "shortDesc": "Ekran bakış açısını çizim masası yapar.",
    "icon": "icons/view/subtools/viw_cp_to_view.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _View",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _View",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "C-Plane To View komutu. Türkçe anlamı: Kameraya Dik Düzlem. Ekran bakış açısını çizim masası yapar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_vertical": {
    "id": "viw_cp_vertical",
    "name": "Vertical C-Plane",
    "trName": "Dikey Düzlem",
    "meaning": "Dikey Düzlem",
    "shortDesc": "Mevcut ızgaraya 90 derece dik ızgara kurar.",
    "icon": "icons/view/subtools/viw_cp_vertical.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Vertical",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Vertical",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Vertical C-Plane komutu. Türkçe anlamı: Dikey Düzlem. Mevcut ızgaraya 90 derece dik ızgara kurar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_perp_crv": {
    "id": "viw_cp_perp_crv",
    "name": "C-Plane Perpendicular To Curve",
    "trName": "Eğriye Dik Düzlem",
    "meaning": "Eğriye Dik Düzlem",
    "shortDesc": "Eğrinin ucuna dik ızgara açar (profil çizmek için).",
    "icon": "icons/view/subtools/viw_cp_perp_crv.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Curve",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Curve",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "C-Plane Perpendicular To Curve komutu. Türkçe anlamı: Eğriye Dik Düzlem. Eğrinin ucuna dik ızgara açar (profil çizmek için). Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_origin": {
    "id": "viw_cp_origin",
    "name": "C-Plane Origin",
    "trName": "Izgara Başlangıç Noktası (0,0)",
    "meaning": "Izgara Başlangıç Noktası (0,0)",
    "shortDesc": "Izgaranın (0,0,0) merkezini işaretlenen noktaya taşır.",
    "icon": "icons/view/subtools/viw_cp_origin.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _Origin",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _Origin",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "C-Plane Origin komutu. Türkçe anlamı: Izgara Başlangıç Noktası (0,0). Izgaranın (0,0,0) merkezini işaretlenen noktaya taşır. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_xaxis": {
    "id": "viw_cp_xaxis",
    "name": "X Axis C-Plane",
    "trName": "X Eksenli Düzlem",
    "meaning": "X Eksenli Düzlem",
    "shortDesc": "X yönünü yeniden hizalar.",
    "icon": "icons/view/subtools/viw_cp_xaxis.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _XAxis",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _XAxis",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "X Axis C-Plane komutu. Türkçe anlamı: X Eksenli Düzlem. X yönünü yeniden hizalar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_zaxis": {
    "id": "viw_cp_zaxis",
    "name": "Z Axis C-Plane",
    "trName": "Z Eksenli Düzlem",
    "meaning": "Z Eksenli Düzlem",
    "shortDesc": "Z diklik eksenini tanımlar.",
    "icon": "icons/view/subtools/viw_cp_zaxis.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _ZAxis",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _ZAxis",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Z Axis C-Plane komutu. Türkçe anlamı: Z Eksenli Düzlem. Z diklik eksenini tanımlar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_world_top": {
    "id": "viw_cp_world_top",
    "name": "World Top",
    "trName": "Dünya Üst Düzlemi (Top)",
    "meaning": "Dünya Üst Düzlemi (Top)",
    "shortDesc": "Orijinal fabrika üst ızgarasına sıfırlar.",
    "icon": "icons/view/subtools/viw_cp_world_top.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _World _Top",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _World _Top",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "World Top komutu. Türkçe anlamı: Dünya Üst Düzlemi (Top). Orijinal fabrika üst ızgarasına sıfırlar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_world_right": {
    "id": "viw_cp_world_right",
    "name": "World Right",
    "trName": "Dünya Yan Düzlemi (Right)",
    "meaning": "Dünya Yan Düzlemi (Right)",
    "shortDesc": "Fabrika sağ yan ızgarasına sıfırlar.",
    "icon": "icons/view/subtools/viw_cp_world_right.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _World _Right",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _World _Right",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "World Right komutu. Türkçe anlamı: Dünya Yan Düzlemi (Right). Fabrika sağ yan ızgarasına sıfırlar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_world_front": {
    "id": "viw_cp_world_front",
    "name": "World Front",
    "trName": "Dünya Ön Düzlemi (Front)",
    "meaning": "Dünya Ön Düzlemi (Front)",
    "shortDesc": "Fabrika ön ızgarasına sıfırlar.",
    "icon": "icons/view/subtools/viw_cp_world_front.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_CPlane _World _Front",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CPlane _World _Front",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "World Front komutu. Türkçe anlamı: Dünya Ön Düzlemi (Front). Fabrika ön ızgarasına sıfırlar. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cp_named": {
    "id": "viw_cp_named",
    "name": "Named C-Plane",
    "trName": "Kayıtlı Düzlemler Paneli",
    "meaning": "Kayıtlı Düzlemler Paneli",
    "shortDesc": "Özel açılı düzlemleri hafızaya kaydeder.",
    "icon": "icons/view/subtools/viw_cp_named.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_cplane",
    "parentName": "Set C-Plane",
    "rhinoCommand": "_NamedCPlane",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _NamedCPlane",
        "desc": "Çalışma düzlemini ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun.",
    "ttsText": "Named C-Plane komutu. Türkçe anlamı: Kayıtlı Düzlemler Paneli. Özel açılı düzlemleri hafızaya kaydeder. Püf noktası: Eğriye dik profil çizmek için Perpendicular to Curve komutuyla ızgarayı rayın ucuna dik oturtun."
  },
  "viw_cam_cp_top": {
    "id": "viw_cam_cp_top",
    "name": "C-Plane Top",
    "trName": "Düzlem Üst Bakış",
    "meaning": "Düzlem Üst Bakış",
    "shortDesc": "Aktif C-Plane'e göre üstten bakar.",
    "icon": "icons/view/subtools/viw_cam_cp_top.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Plan",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Plan",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "C-Plane Top komutu. Türkçe anlamı: Düzlem Üst Bakış. Aktif C-Plane'e göre üstten bakar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_cp_bot": {
    "id": "viw_cam_cp_bot",
    "name": "C-Plane Bottom",
    "trName": "Düzlem Alttan Bakış",
    "meaning": "Düzlem Alttan Bakış",
    "shortDesc": "Aktif C-Plane'e göre alttan bakar.",
    "icon": "icons/view/subtools/viw_cam_cp_bot.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SetView _Bottom",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetView _Bottom",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "C-Plane Bottom komutu. Türkçe anlamı: Düzlem Alttan Bakış. Aktif C-Plane'e göre alttan bakar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_cp_left": {
    "id": "viw_cam_cp_left",
    "name": "C-Plane Left",
    "trName": "Düzlem Sol Bakış",
    "meaning": "Düzlem Sol Bakış",
    "shortDesc": "Aktif C-Plane'e göre soldan bakar.",
    "icon": "icons/view/subtools/viw_cam_cp_left.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SetView _Left",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetView _Left",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "C-Plane Left komutu. Türkçe anlamı: Düzlem Sol Bakış. Aktif C-Plane'e göre soldan bakar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_cp_right": {
    "id": "viw_cam_cp_right",
    "name": "C-Plane Right",
    "trName": "Düzlem Sağ Bakış",
    "meaning": "Düzlem Sağ Bakış",
    "shortDesc": "Aktif C-Plane'e göre sağdan bakar.",
    "icon": "icons/view/subtools/viw_cam_cp_right.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SetView _Right",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetView _Right",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "C-Plane Right komutu. Türkçe anlamı: Düzlem Sağ Bakış. Aktif C-Plane'e göre sağdan bakar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_cp_front": {
    "id": "viw_cam_cp_front",
    "name": "C-Plane Front",
    "trName": "Düzlem Ön Bakış",
    "meaning": "Düzlem Ön Bakış",
    "shortDesc": "Aktif C-Plane'e göre önden bakar.",
    "icon": "icons/view/subtools/viw_cam_cp_front.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SetView _Front",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetView _Front",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "C-Plane Front komutu. Türkçe anlamı: Düzlem Ön Bakış. Aktif C-Plane'e göre önden bakar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_cp_back": {
    "id": "viw_cam_cp_back",
    "name": "C-Plane Back",
    "trName": "Düzlem Arkadan Bakış",
    "meaning": "Düzlem Arkadan Bakış",
    "shortDesc": "Aktif C-Plane'e göre arkadan bakar.",
    "icon": "icons/view/subtools/viw_cam_cp_back.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SetView _Back",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetView _Back",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "C-Plane Back komutu. Türkçe anlamı: Düzlem Arkadan Bakış. Aktif C-Plane'e göre arkadan bakar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_place_target": {
    "id": "viw_cam_place_target",
    "name": "Place Target",
    "trName": "Kamera Hedef Noktası Koy",
    "meaning": "Kamera Hedef Noktası Koy",
    "shortDesc": "Kameranın odaklanacağı hedef noktayı tıklar.",
    "icon": "icons/view/subtools/viw_cam_place_target.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Camera _Target",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Camera _Target",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Place Target komutu. Türkçe anlamı: Kamera Hedef Noktası Koy. Kameranın odaklanacağı hedef noktayı tıklar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_center_view": {
    "id": "viw_cam_center_view",
    "name": "Center View",
    "trName": "Görünümü Ortala",
    "meaning": "Görünümü Ortala",
    "shortDesc": "Bakış açısını hedefe kilitler.",
    "icon": "icons/view/subtools/viw_cam_center_view.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_PlaceTarget",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _PlaceTarget",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Center View komutu. Türkçe anlamı: Görünümü Ortala. Bakış açısını hedefe kilitler. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_place_cam": {
    "id": "viw_cam_place_cam",
    "name": "Place Camera",
    "trName": "Kamera Yerleştir",
    "meaning": "Kamera Yerleştir",
    "shortDesc": "Kameranın uzaydaki fiziksel konumunu belirler.",
    "icon": "icons/view/subtools/viw_cam_place_cam.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Camera _Place",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Camera _Place",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Place Camera komutu. Türkçe anlamı: Kamera Yerleştir. Kameranın uzaydaki fiziksel konumunu belirler. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_move_cam": {
    "id": "viw_cam_move_cam",
    "name": "Move Camera",
    "trName": "Kamerayı Taşı",
    "meaning": "Kamerayı Taşı",
    "shortDesc": "Kamerayı hedefini bozmadan kaydırır.",
    "icon": "icons/view/subtools/viw_cam_move_cam.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Camera _Move",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Camera _Move",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Move Camera komutu. Türkçe anlamı: Kamerayı Taşı. Kamerayı hedefini bozmadan kaydırır. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_orient": {
    "id": "viw_cam_orient",
    "name": "Orient Camera",
    "trName": "Kamera Yönlendir",
    "meaning": "Kamera Yönlendir",
    "shortDesc": "Kamerayı iki hedef doğrultusunda hizalar.",
    "icon": "icons/view/subtools/viw_cam_orient.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_OrientCamera",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _OrientCamera",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Orient Camera komutu. Türkçe anlamı: Kamera Yönlendir. Kamerayı iki hedef doğrultusunda hizalar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_match_vp": {
    "id": "viw_cam_match_vp",
    "name": "Match Viewport",
    "trName": "Ekran Bakışını Eşle",
    "meaning": "Ekran Bakışını Eşle",
    "shortDesc": "Bir pencerenin bakış açısını diğerine birebir kopyalar.",
    "icon": "icons/view/subtools/viw_cam_match_vp.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_MatchViewport",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MatchViewport",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Match Viewport komutu. Türkçe anlamı: Ekran Bakışını Eşle. Bir pencerenin bakış açısını diğerine birebir kopyalar. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_sync_views": {
    "id": "viw_cam_sync_views",
    "name": "Synchronize Views",
    "trName": "Görünümleri Senkronize Et",
    "meaning": "Görünümleri Senkronize Et",
    "shortDesc": "Bir ekranda yakınlaşınca diğer 3 ekranda da aynı oranda yakınlaşır.",
    "icon": "icons/view/subtools/viw_cam_sync_views.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SynchronizeViews",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SynchronizeViews",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Synchronize Views komutu. Türkçe anlamı: Görünümleri Senkronize Et. Bir ekranda yakınlaşınca diğer 3 ekranda da aynı oranda yakınlaşır. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_turntable": {
    "id": "viw_cam_turntable",
    "name": "Turntable",
    "trName": "Dönen Döner Tabla Simülasyonu",
    "meaning": "Dönen Döner Tabla Simülasyonu",
    "shortDesc": "Modeli ekranda vitrin gibi kesintisiz döndürür.",
    "icon": "icons/view/subtools/viw_cam_turntable.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Turntable",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Turntable",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Turntable komutu. Türkçe anlamı: Dönen Döner Tabla Simülasyonu. Modeli ekranda vitrin gibi kesintisiz döndürür. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_show_cam": {
    "id": "viw_cam_show_cam",
    "name": "Show Camera (F6)",
    "trName": "Kamera Çerçevesini Aç (F6)",
    "meaning": "Kamera Çerçevesini Aç (F6)",
    "shortDesc": "Diğer pencerelerde kameranın piramit konisini gösterir.",
    "icon": "icons/view/subtools/viw_cam_show_cam.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Camera _Show",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Camera _Show",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Show Camera (F6) komutu. Türkçe anlamı: Kamera Çerçevesini Aç (F6). Diğer pencerelerde kameranın piramit konisini gösterir. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_rotate": {
    "id": "viw_cam_rotate",
    "name": "Rotate Camera",
    "trName": "Kamerayı Çevir",
    "meaning": "Kamerayı Çevir",
    "shortDesc": "Kamera gövdesini eksen etrafında döndürür.",
    "icon": "icons/view/subtools/viw_cam_rotate.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_RotateCamera",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _RotateCamera",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Rotate Camera komutu. Türkçe anlamı: Kamerayı Çevir. Kamera gövdesini eksen etrafında döndürür. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_tilt": {
    "id": "viw_cam_tilt",
    "name": "Tilt View",
    "trName": "Kamerayı Yatır (Tilt)",
    "meaning": "Kamerayı Yatır (Tilt)",
    "shortDesc": "Kamerayı sağa/sola açılı eğer.",
    "icon": "icons/view/subtools/viw_cam_tilt.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_TiltView",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _TiltView",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Tilt View komutu. Türkçe anlamı: Kamerayı Yatır (Tilt). Kamerayı sağa/sola açılı eğer. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_adjust_lens": {
    "id": "viw_cam_adjust_lens",
    "name": "Adjust Camera Lens Length",
    "trName": "Lens Açısı Ayarla (mm)",
    "meaning": "Lens Açısı Ayarla (mm)",
    "shortDesc": "Geniş açı (28mm) veya telefoto (105mm) takı lensi seçer.",
    "icon": "icons/view/subtools/viw_cam_adjust_lens.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_SetDisplayMode",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetDisplayMode",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Adjust Camera Lens Length komutu. Türkçe anlamı: Lens Açısı Ayarla (mm). Geniş açı (28mm) veya telefoto (105mm) takı lensi seçer. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_cam_dolly": {
    "id": "viw_cam_dolly",
    "name": "Adjust Camera Dolly",
    "trName": "Kamera Dolly (İleri-Geri)",
    "meaning": "Kamera Dolly (İleri-Geri)",
    "shortDesc": "Kamerayı hedef ray boyunca ileri sürer.",
    "icon": "icons/view/subtools/viw_cam_dolly.png",
    "isFlyoutSub": true,
    "parentId": "viw_set_camera",
    "parentName": "Set Camera",
    "rhinoCommand": "_Dolly",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Dolly",
        "desc": "Kamera açısını ayarlayın."
      }
    ],
    "options": [],
    "jewelerTip": "Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür.",
    "ttsText": "Adjust Camera Dolly komutu. Türkçe anlamı: Kamera Dolly (İleri-Geri). Kamerayı hedef ray boyunca ileri sürer. Püf noktası: Turntable komutu müşteriye bilgisayar ekranında canlı sunum yaparken yüzüğü kendi etrafında akıcı döndürür."
  },
  "viw_bmp_place": {
    "id": "viw_bmp_place",
    "name": "Place Background Bitmap",
    "trName": "Referans Resmi Yerleştir",
    "meaning": "Referans Resmi Yerleştir",
    "shortDesc": "Çalışma masasına 2D takı fotoğrafı veya çizim serer.",
    "icon": "icons/view/subtools/viw_bmp_place.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Place",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Place",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Place Background Bitmap komutu. Türkçe anlamı: Referans Resmi Yerleştir. Çalışma masasına 2D takı fotoğrafı veya çizim serer. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_refresh": {
    "id": "viw_bmp_refresh",
    "name": "Refresh Background Bitmap",
    "trName": "Resmi Yenile",
    "meaning": "Resmi Yenile",
    "shortDesc": "Dosyası güncellenen resmi ekranda tazeler.",
    "icon": "icons/view/subtools/viw_bmp_refresh.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Refresh",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Refresh",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Refresh Background Bitmap komutu. Türkçe anlamı: Resmi Yenile. Dosyası güncellenen resmi ekranda tazeler. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_remove": {
    "id": "viw_bmp_remove",
    "name": "Remove Background Bitmap",
    "trName": "Resmi Kaldır / Sil",
    "meaning": "Resmi Kaldır / Sil",
    "shortDesc": "Arka plandaki resmi sahneden temizler.",
    "icon": "icons/view/subtools/viw_bmp_remove.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Remove",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Remove",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Remove Background Bitmap komutu. Türkçe anlamı: Resmi Kaldır / Sil. Arka plandaki resmi sahneden temizler. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_extract": {
    "id": "viw_bmp_extract",
    "name": "Extract Background Bitmap",
    "trName": "Resmi Dışa Aktar",
    "meaning": "Resmi Dışa Aktar",
    "shortDesc": "Gömülü arka plan resmini bilgisayara kaydeder.",
    "icon": "icons/view/subtools/viw_bmp_extract.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Extract",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Extract",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Extract Background Bitmap komutu. Türkçe anlamı: Resmi Dışa Aktar. Gömülü arka plan resmini bilgisayara kaydeder. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_hide": {
    "id": "viw_bmp_hide",
    "name": "Hide Background Bitmap",
    "trName": "Resmi Gizle",
    "meaning": "Resmi Gizle",
    "shortDesc": "Çizim yaparken resmi geçici görünmez yapar.",
    "icon": "icons/view/subtools/viw_bmp_hide.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Hide",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Hide",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Hide Background Bitmap komutu. Türkçe anlamı: Resmi Gizle. Çizim yaparken resmi geçici görünmez yapar. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_show": {
    "id": "viw_bmp_show",
    "name": "Show Background Bitmap",
    "trName": "Resmi Göster",
    "meaning": "Resmi Göster",
    "shortDesc": "Gizlenen referans resmi geri açar.",
    "icon": "icons/view/subtools/viw_bmp_show.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Show",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Show",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Show Background Bitmap komutu. Türkçe anlamı: Resmi Göster. Gizlenen referans resmi geri açar. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_move": {
    "id": "viw_bmp_move",
    "name": "Move Background Bitmap",
    "trName": "Resmi Taşı",
    "meaning": "Resmi Taşı",
    "shortDesc": "Referans resmi modelin altına denk gelecek şekilde kaydırır.",
    "icon": "icons/view/subtools/viw_bmp_move.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Move",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Move",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Move Background Bitmap komutu. Türkçe anlamı: Resmi Taşı. Referans resmi modelin altına denk gelecek şekilde kaydırır. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_align": {
    "id": "viw_bmp_align",
    "name": "Align Background Bitmap",
    "trName": "Resmi Hizala",
    "meaning": "Resmi Hizala",
    "shortDesc": "Resimdeki referans çizgiyi eksene oturtur.",
    "icon": "icons/view/subtools/viw_bmp_align.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Align",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Align",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Align Background Bitmap komutu. Türkçe anlamı: Resmi Hizala. Resimdeki referans çizgiyi eksene oturtur. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_scale": {
    "id": "viw_bmp_scale",
    "name": "Scale Background Bitmap",
    "trName": "Resmi 1:1 Boyutlandır (Ölçekle)",
    "meaning": "Resmi 1:1 Boyutlandır (Ölçekle)",
    "shortDesc": "Resimdeki taş veya yüzük çapını gerçek milimetreye eşitler.",
    "icon": "icons/view/subtools/viw_bmp_scale.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Scale",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Scale",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Scale Background Bitmap komutu. Türkçe anlamı: Resmi 1:1 Boyutlandır (Ölçekle). Resimdeki taş veya yüzük çapını gerçek milimetreye eşitler. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_grayscale": {
    "id": "viw_bmp_grayscale",
    "name": "Grayscale Background Bitmap",
    "trName": "Siyah-Beyaz Yap (Gri Ton)",
    "meaning": "Siyah-Beyaz Yap (Gri Ton)",
    "shortDesc": "Resmin renklerini griye çevirerek çizgi görmeyi kolaylaştırır.",
    "icon": "icons/view/subtools/viw_bmp_grayscale.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_BackgroundBitmap _Gray",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BackgroundBitmap _Gray",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Grayscale Background Bitmap komutu. Türkçe anlamı: Siyah-Beyaz Yap (Gri Ton). Resmin renklerini griye çevirerek çizgi görmeyi kolaylaştırır. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  },
  "viw_bmp_picture_frame": {
    "id": "viw_bmp_picture_frame",
    "name": "Picture Frame",
    "trName": "Resim Çerçevesi (Picture)",
    "meaning": "Resim Çerçevesi (Picture)",
    "shortDesc": "Resmi 3D düzlem yüzey olarak sahneye çağırır.",
    "icon": "icons/view/subtools/viw_bmp_picture_frame.png",
    "isFlyoutSub": true,
    "parentId": "viw_background_bmp",
    "parentName": "Background Bitmap",
    "rhinoCommand": "_Picture",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Picture",
        "desc": "Referans resim komutunu uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz.",
    "ttsText": "Picture Frame komutu. Türkçe anlamı: Resim Çerçevesi (Picture). Resmi 3D düzlem yüzey olarak sahneye çağırır. Püf noktası: Scale komutuyla resimdeki yüzük ölçüsünü (ör: 17mm) cetvelle işaretleyip gerçek boyuta büyütebilirsiniz."
  }
};

function findViewCommand(cmdId) {
  if (!cmdId) return null;
  if (viewCommandsCatalog[cmdId]) return viewCommandsCatalog[cmdId];
  return null;
}

window.viewRibbonRows = viewRibbonRows;
window.viewFlyoutDrawers = viewFlyoutDrawers;
window.viewCommandsCatalog = viewCommandsCatalog;
window.findViewCommand = findViewCommand;
