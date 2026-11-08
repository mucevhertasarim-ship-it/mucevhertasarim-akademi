// MATRIXGOLD & RHINO - SURFACE (YÜZEYLER DÜNYASI) VERİ KATALOĞU
// 28 Ana Şerit Komutu + 11 Alt Çekmece + 47 Alt Araç (Toplam 75 Yüzey Aracı)

const surfaceRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: Temel Yüzey Oluşturma, Süpürme & Katı Düzlemler",
    "tools": [
      {
        "id": "profile_sweep",
        "name": "Profile Sweep",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_profile_sweep.png"
      },
      {
        "id": "pull_push",
        "name": "Pull Push",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_pull_push.png"
      },
      {
        "id": "sweep_2",
        "name": "Sweep 2",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_sweep_2.png"
      },
      {
        "id": "sweep_1",
        "name": "Sweep 1",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_sweep_1.png"
      },
      {
        "id": "planes",
        "name": "Planes",
        "hasFlyout": true,
        "flyoutKey": "planes",
        "subCount": 6,
        "icon": "icons/surface/ribbon/surf_planes.png"
      },
      {
        "id": "loft",
        "name": "Loft",
        "hasFlyout": true,
        "flyoutKey": "loft",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_loft.png"
      },
      {
        "id": "sweep",
        "name": "Sweep",
        "hasFlyout": true,
        "flyoutKey": "sweep",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_sweep.png"
      },
      {
        "id": "revolve",
        "name": "Revolve",
        "hasFlyout": true,
        "flyoutKey": "revolve",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_revolve.png"
      },
      {
        "id": "curve_network",
        "name": "Curve Network",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_curve_network.png"
      },
      {
        "id": "corner_points",
        "name": "Corner Points",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_corner_points.png"
      },
      {
        "id": "edit_tools",
        "name": "Edit Tools",
        "hasFlyout": true,
        "flyoutKey": "edit_tools",
        "subCount": 14,
        "icon": "icons/surface/ribbon/surf_edit_tools.png"
      },
      {
        "id": "planar_curves",
        "name": "Planar Curves",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_planar_curves.png"
      },
      {
        "id": "point_grid",
        "name": "Point Grid",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_point_grid.png"
      },
      {
        "id": "extrude",
        "name": "Extrude",
        "hasFlyout": true,
        "flyoutKey": "extrude",
        "subCount": 6,
        "icon": "icons/surface/ribbon/surf_extrude.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: Yüzey Düzenleme, Kenar Araçları, Radyus & Kalıp Açılımları",
    "tools": [
      {
        "id": "patch",
        "name": "Patch",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_patch.png"
      },
      {
        "id": "edge_curves",
        "name": "Edge Curves",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_edge_curves.png"
      },
      {
        "id": "drape",
        "name": "Drape",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_drape.png"
      },
      {
        "id": "extend_surface",
        "name": "Extend Surface",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_extend_surface.png"
      },
      {
        "id": "edge_tools",
        "name": "Edge Tools",
        "hasFlyout": true,
        "flyoutKey": "edge_tools",
        "subCount": 7,
        "icon": "icons/surface/ribbon/surf_edge_tools.png"
      },
      {
        "id": "blend",
        "name": "Blend",
        "hasFlyout": true,
        "flyoutKey": "blend",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_blend.png"
      },
      {
        "id": "fillet",
        "name": "Fillet",
        "hasFlyout": true,
        "flyoutKey": "fillet",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_fillet.png"
      },
      {
        "id": "chamfer",
        "name": "Chamfer",
        "hasFlyout": true,
        "flyoutKey": "chamfer",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_chamfer.png"
      },
      {
        "id": "connect_srfs",
        "name": "Connect Srfs",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_connect_srfs.png"
      },
      {
        "id": "heightfield_from_image",
        "name": "Heightfield From Image",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_heightfield_from_image.png"
      },
      {
        "id": "offset",
        "name": "Offset",
        "hasFlyout": true,
        "flyoutKey": "offset",
        "subCount": 2,
        "icon": "icons/surface/ribbon/surf_offset.png"
      },
      {
        "id": "unroll_srf",
        "name": "Unroll Srf",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_unroll_srf.png"
      },
      {
        "id": "smash",
        "name": "Smash",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_smash.png"
      },
      {
        "id": "tween_srf",
        "name": "Tween Srf",
        "hasFlyout": false,
        "icon": "icons/surface/ribbon/surf_tween_srf.png"
      }
    ]
  }
];

const surfaceFlyoutDrawers = {
  "planes": {
    "key": "planes",
    "title": "Planes",
    "trTitle": "Düzlemsel Yüzey Araçları",
    "count": 6,
    "fullStrip": "icons/surface/full_drawer_planes.png",
    "subIds": [
      "srf_plane_center",
      "srf_plane_3pt",
      "srf_plane_corner",
      "srf_plane_vertical",
      "srf_plane_through_pts",
      "srf_plane_cutting"
    ]
  },
  "loft": {
    "cmdOptions": [{"name": "Normal", "desc": "Standart kavisle kesitleri bağlar."}, {"name": "Tight", "desc": "Gergin Kavis: Kesitlere tam yapışan sıkı yüzey üretir."}, {"name": "ClosedLoft=Yes", "desc": "Kapalı Halka: İlk ve son kesiti birbirine bağlayarak boru veya halka yapar."}],
    "cmdPrompt": "Command: _Loft\nSelect curves to loft ( Normal  Loose  Tight  ClosedLoft ):",
    "key": "loft",
    "title": "Loft",
    "trTitle": "Eğriler Boyunca Yüzey Örme (Loft)",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_loft.png",
    "subIds": [
      "srf_loft_to_point",
      "srf_loft"
    ]
  },
  "sweep": {
    "key": "sweep",
    "title": "Sweep",
    "trTitle": "Süpürme Ray Yüzeyleri",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_sweep.png",
    "subIds": [
      "srf_sweep_2",
      "srf_sweep_1"
    ]
  },
  "revolve": {
    "cmdOptions": [{"name": "FullCircle", "desc": "Tam Tur: 360 derece tam dairesel kapalı yüzey örer."}, {"name": "Deformable=Yes", "desc": "Esnek Yüzey: Üzerine kontrol noktaları ekleyerek sonradan serbest çekiştirme imkanı verir."}],
    "cmdPrompt": "Command: _Revolve\nStart of revolve axis:\nEnd of revolve axis:\nStart angle (0): <Enter>\nRevolution angle (360): <Enter>",
    "key": "revolve",
    "title": "Revolve",
    "trTitle": "Döndürerek Yüzey Örme Araçları",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_revolve.png",
    "subIds": [
      "srf_rail_revolve",
      "srf_revolve"
    ]
  },
  "edit_tools": {
    "key": "edit_tools",
    "title": "Edit Tools",
    "trTitle": "Yüzey Geometrisi Düzenleme Araçları",
    "count": 14,
    "fullStrip": "icons/surface/full_drawer_edit_tools.png",
    "subIds": [
      "srf_merge",
      "srf_refit_tolerance",
      "srf_untrim",
      "srf_detach_trim",
      "srf_adjust_seam",
      "srf_split_isocurve",
      "srf_shrink_trimmed",
      "srf_shrink_edge",
      "srf_match",
      "srf_adjust_end_bulge",
      "srf_divide_isocurve",
      "srf_soft_edit",
      "srf_rebuild_uv",
      "srf_set_tangent"
    ]
  },
  "extrude": {
    "key": "extrude",
    "title": "Extrude",
    "trTitle": "Yüzey Yükseltme & Ekstrüzyon Araçları",
    "count": 6,
    "fullStrip": "icons/surface/full_drawer_extrude.png",
    "subIds": [
      "srf_extrude_along_curve",
      "srf_extrude_to_point",
      "srf_extrude_tapered",
      "srf_extrude_ribbon",
      "srf_extrude_normal",
      "srf_extrude_straight"
    ]
  },
  "edge_tools": {
    "key": "edge_tools",
    "title": "Edge Tools",
    "trTitle": "Yüzey Kenar ve Birleşim Düzenleme",
    "count": 7,
    "fullStrip": "icons/surface/full_drawer_edge_tools.png",
    "subIds": [
      "srf_split_edge",
      "srf_merge_edge",
      "srf_join_naked_edges",
      "srf_unjoin_edge",
      "srf_rebuild_edges",
      "srf_remove_edge",
      "srf_show_edges"
    ]
  },
  "blend": {
    "key": "blend",
    "title": "Blend",
    "trTitle": "Yüzey Yumuşatma & Teğet Geçişler",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_blend.png",
    "subIds": [
      "srf_variable_blend",
      "srf_blend"
    ]
  },
  "fillet": {
    "key": "fillet",
    "title": "Fillet",
    "trTitle": "Yüzey Radyus & Yuvarlatma Araçları",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_fillet.png",
    "subIds": [
      "srf_variable_fillet",
      "srf_fillet"
    ]
  },
  "chamfer": {
    "key": "chamfer",
    "title": "Chamfer",
    "trTitle": "Yüzey Pah Kırma Araçları",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_chamfer.png",
    "subIds": [
      "srf_variable_chamfer",
      "srf_chamfer"
    ]
  },
  "offset": {
    "cmdOptions": [{"name": "Distance", "desc": "Et Kalınlığı: Döküm için min 0.30 mm, yüzük alt kolu için min 1.20 mm."}, {"name": "Solid=Yes", "desc": "Kapalı Katı: Yan duvarları kapatıp katı yapar."}],
    "cmdPrompt": "Command: _OffsetSrf\nSelect surface to offset ( Distance=1.20  Solid=Yes ):",
    "key": "offset",
    "title": "Offset",
    "trTitle": "Yüzey Öteleme & Et Kalınlığı",
    "count": 2,
    "fullStrip": "icons/surface/full_drawer_offset.png",
    "subIds": [
      "srf_variable_offset",
      "srf_offset"
    ]
  }
};

const surfaceCommandsCatalog = {
  "profile_sweep": {
    "cmdOptions": [{"name": "AutoCap=Yes", "desc": "Otomatik Kapak: Kol uçlarını döküme uygun katı gövdeyle kapatır."}],
    "cmdPrompt": "Command: _ProfileSweep\nSelect ring rail with profiles ( AutoCap=Yes ):",
    "id": "profile_sweep",
    "name": "Profile Sweep",
    "trName": "Profil Yüzey Süpürme",
    "meaning": "Profil Yüzey Süpürme",
    "shortDesc": "Öğrenci Adımları: 1. Profile Placer ile profilleri dizilmiş Ring Rail'i seçin. 2. Profile Sweep simgesine Sol Tıklayın. 3. Cap=Flat veya Cap=Dome seçin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; yüzük kolu parametrik katı olarak tek hamlede örülür.",
    "icon": "icons/surface/ribbon/surf_profile_sweep.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ProfileSweep",
    "mouseAction": "Sol Tık: Parametrik MatrixGold kol süpürme motoru | Sağ Tık: Son kolu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ProfileSweep",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: MatrixGold'un en güçlü yüzey motorudur; yüzük profilleri değiştirildiğinde kol yüzeyi gerçek zamanlı olarak kendiliğinden güncellenir.",
    "ttsText": "Profile Sweep komutu. Yüzük rayı ve profillerinden parametrik akıllı yüzük kolu yüzeyleri örer."
  },
  "pull_push": {
    "cmdOptions": [{"name": "Distance", "desc": "İtme/Çekme Mesafesi: Milimetrik kalınlaştırma ölçüsü."}],
    "cmdPrompt": "Command: _PullPush\nSelect face to push or pull ( Distance=0.50 ):",
    "id": "pull_push",
    "name": "Pull Push",
    "trName": "Yüzey Çek-İt Modelleme",
    "meaning": "Yüzey Çek-İt Modelleme",
    "shortDesc": "Öğrenci Adımları: 1. Katının bir yüzünü seçin. 2. Pull Push simgesine Sol Tıklayın. 3. Fareyi dışa doğru çekerek kalınlaştırın veya içe iterek inceltin. 4. Ölçüyü girip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/surface/ribbon/surf_pull_push.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_PullPush",
    "mouseAction": "Sol Tık: Yüzeyi canlı itip çeker (Pull Push) | Sağ Tık: Son mesafeyi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _PullPush",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Model bittikten sonra taş yuvasının kenar duvarını 0.20 mm kalınlaştırmak veya tırnak boyunu uzatmak için baştan çizmeye gerek bırakmaz.",
    "ttsText": "Pull Push komutu. Katı yüzeyleri fareyle itip çekerek doğrudan boyutlandırır."
  },
  "sweep_2": {
    "cmdOptions": [{"name": "MaintainHeight=Yes", "desc": "Yüksekliği Koru: Raylar daralıp genişlese bile kesitin et kalınlığı yüksekliğini sabit tutar."}, {"name": "SimpleSweep", "desc": "Sade Yüzey: Fazla kontrol noktası üretmeden hafif yüzey örer."}],
    "cmdPrompt": "Command: _Sweep2\nSelect first rail:\nSelect second rail:\nSelect cross section curves ( MaintainHeight=Yes ):",
    "id": "sweep_2",
    "name": "Sweep 2",
    "trName": "2 Raylı Yüzey Örme",
    "meaning": "2 Raylı Yüzey Örme",
    "shortDesc": "Öğrenci Adımları: 1. Sweep 2 simgesine Sol Tıklayın. 2. Birinci dış rayı seçin. 3. İkinci iç rayı seçin. 4. İki rayı birbirine bağlayan kesit profillerini sırayla seçip Enter'a (veya Sağ Tık / Space tuşuna) basın; iki ray arasında kusursuz geçiş yüzeyi örülür.",
    "icon": "icons/surface/ribbon/surf_sweep_2.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Sweep2",
    "mouseAction": "Sol Tık: İki raylı yüzey süpürme (Sweep 2) | Sağ Tık: Son süpürmeyi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Sweep2",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük montürlerinde kolun genişleyip daraldığı kısımlarda tek ray yerine mutlaka Sweep 2 Rail kullanın. İki ray kontrolü sağladığı için montürün yanlarında bombe çökmesi yaşanmaz.",
    "ttsText": "Sweep 2 komutu. İki kılavuz ray arasında kesit profillerini süpürerek hassas montür yüzeyleri örer."
  },
  "sweep_1": {
    "cmdOptions": [{"name": "RoadlikeTop", "desc": "Üstten Düzlem Kilidi: Kolun profilinin sağa sola bükülmeden parmağa dik kalmasını kilitler."}, {"name": "ClosedSweep=Yes", "desc": "Kapalı Döngü: 360 derece tam halka yüzük kolunu dikiş izi bırakmadan pürüzsüz kapatır."}],
    "cmdPrompt": "Command: _Sweep1\nSelect rail:\nSelect cross section curves:\nSweep1 Options ( Freeform  RoadlikeTop  ClosedSweep=Yes ):",
    "id": "sweep_1",
    "name": "Sweep 1",
    "trName": "1 Raylı Yüzey Örme",
    "meaning": "1 Raylı Yüzey Örme",
    "shortDesc": "Öğrenci Adımları: 1. Sweep 1 simgesine Sol Tıklayın. 2. Tek ray olan kılavuz eğriyi (örn: yüzük halkası) seçin. 3. Kesit profil eğrilerini seçip Enter'a (veya Sağ Tık / Space tuşuna) basın. 4. Önizleme penceresinden Freeform veya Roadlike ayarını kontrol edip Enter ile yüzeyi tamamlayın.",
    "icon": "icons/surface/ribbon/surf_sweep_1.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Sweep1",
    "mouseAction": "Sol Tık: Tek raylı yüzey süpürme (Sweep 1) | Sağ Tık: Son süpürmeyi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Sweep1",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük kollarında profilin yana devrilmesini önlemek için mutlaka Roadlike Top seçeneğini kullanın! Böylece profil yüzüğün tepesinde de altında da tam dik açısını korur (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Sweep 1 komutu. Tek bir kılavuz ray boyunca kesit profillerini süpürerek yüzük kolu ve tırnak yüzeyleri örer."
  },
  "planes": {
    "id": "planes",
    "name": "Planes",
    "trName": "Düzlemsel Yüzeyler",
    "meaning": "Düzlemsel Yüzeyler",
    "shortDesc": "Farklı geometrik yöntemlerle kusursuz düzlem yüzeyler üretir.",
    "icon": "icons/surface/ribbon/surf_planes.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Plane",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Plane",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Planes komutu. Türkçe anlamı: Düzlemsel Yüzeyler. Farklı geometrik yöntemlerle kusursuz düzlem yüzeyler üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "loft": {
    "cmdOptions": [{"name": "Normal", "desc": "Standart kavisle kesitleri bağlar."}, {"name": "Tight", "desc": "Gergin Kavis: Kesitlere tam yapışan sıkı yüzey üretir."}, {"name": "ClosedLoft=Yes", "desc": "Kapalı Halka: İlk ve son kesiti birbirine bağlayarak boru veya halka yapar."}],
    "cmdPrompt": "Command: _Loft\nSelect curves to loft ( Normal  Loose  Tight  ClosedLoft ):",
    "id": "loft",
    "name": "Loft",
    "trName": "Eğriler Arası Yüzey (Loft)",
    "meaning": "Eğriler Arası Yüzey (Loft)",
    "shortDesc": "Öğrenci Adımları: 1. Loft simgesine Sol Tıklayın. 2. Birbirine bağlanacak kesit eğrilerini sırayla aynı yönde tıklayarak seçin. 3. Enter'a (veya Sağ Tık / Space tuşuna) basın. 4. Dikiş yönü oklarının aynı yöne baktığından emin olun (ters yöne bakarsa yüzey burgulu çıkar!) ve Enter ile yüzeyi kumaş gibi örün.",
    "icon": "icons/surface/ribbon/surf_loft.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Loft",
    "mouseAction": "Sol Tık: Kesitler arasını yüzeyle bağlar (Loft) | Sağ Tık: Son loft ayarını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Loft",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Taş kadehleri ve damla formlarında dikiş oklarının (seam arrows) hepsi aynı yöne bakmalıdır. Bir ok ters dönerse yüzey kendi içine burgu yapar ve bozulur!",
    "ttsText": "Loft komutu. Farklı kesit eğrilerini kumaş gibi gerdirerek akıcı yüzeyler örer."
  },
  "sweep": {
    "id": "sweep",
    "name": "Sweep",
    "trName": "Süpürme Yüzeyleri",
    "meaning": "Süpürme Yüzeyleri",
    "shortDesc": "1 ve 2 raylı süpürme komutlarını tek çatı altında toplayan çekmece aracıdır.",
    "icon": "icons/surface/ribbon/surf_sweep.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Sweep2",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sweep2",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Sweep komutu. Türkçe anlamı: Süpürme Yüzeyleri. 1 ve 2 raylı süpürme komutlarını tek çatı altında toplayan çekmece aracıdır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "revolve": {
    "cmdOptions": [{"name": "FullCircle", "desc": "Tam Tur: 360 derece tam dairesel kapalı yüzey örer."}, {"name": "Deformable=Yes", "desc": "Esnek Yüzey: Üzerine kontrol noktaları ekleyerek sonradan serbest çekiştirme imkanı verir."}],
    "cmdPrompt": "Command: _Revolve\nStart of revolve axis:\nEnd of revolve axis:\nStart angle (0): <Enter>\nRevolution angle (360): <Enter>",
    "id": "revolve",
    "name": "Revolve",
    "trName": "Döndürerek Yüzey Örme",
    "meaning": "Döndürerek Yüzey Örme",
    "shortDesc": "Öğrenci Adımları: 1. Dönecek profil eğrisini seçin. 2. Revolve simgesine Sol Tıklayın. 3. Dönme ekseninin başlangıç ve bitiş noktalarını tıklayın (örn: F4 merkezinden yukarı Z ekseni). 4. Başlangıç açısı 0, Bitiş açısı 360 yazıp Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/surface/ribbon/surf_revolve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Revolve",
    "mouseAction": "Sol Tık: 360 derece döndürerek yüzey örer | Sağ Tık: Açılı döndürme",
    "commandSteps": [
      {
        "prompt": "Command: _Revolve",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yuvarlak taş kadehleri, konik sıvama kasalar (bezel) ve dairesel madalyon gövdelerini saniyeler içinde hatasız ve kusursuz et kalınlığıyla üretir.",
    "ttsText": "Revolve komutu. Bir kesit eğrisini merkez eksen etrafında 360 derece döndürerek dairesel kadeh ve kasalar örer."
  },
  "curve_network": {
    "cmdOptions": [{"name": "EdgeContinuity", "desc": "Kenar Sürekliliği: Komşu yüzeylere G1 (teğet) veya G2 (eğrilik) pürüzsüzlüğünde kenetlenme sağlar."}],
    "cmdPrompt": "Command: _NetworkSrf\nSelect curves in network ( Continuity=Position/Tangent/Curvature ):",
    "id": "curve_network",
    "name": "Curve Network",
    "trName": "Eğri Ağı Yüzeyi (NetworkSrf)",
    "meaning": "Eğri Ağı Yüzeyi (NetworkSrf)",
    "shortDesc": "Öğrenci Adımları: 1. Birbirini kesen ağ şeklindeki kılavuz çizgileri seçin (enine ve boyuna en az 2'şer eğri). 2. Curve Network simgesine Sol Tıklayın. 3. Kenar süreklilik toleranslarını onaylayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak pürüzsüz 3D kubbe yüzeyi elde edin.",
    "icon": "icons/surface/ribbon/surf_curve_network.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_NetworkSrf",
    "mouseAction": "Sol Tık: Eğri ağından yüzey örer (NetworkSrf) | Sağ Tık: Son toleranslarla yineler",
    "commandSteps": [
      {
        "prompt": "Command: _NetworkSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Bombe erkek mühür tablaları ve dalgalı gerdanlık gövdelerinde en pürüzsüz ve dökümde çökme yapmayan yüzeyi Curve Network örer.",
    "ttsText": "Curve Network komutu. Kesişen eğri ağlarından yüksek kaliteli pürüzsüz üç boyutlu yüzeyler örer."
  },
  "corner_points": {
    "id": "corner_points",
    "name": "Corner Points",
    "trName": "3 veya 4 Köşe Noktasından Yüzey",
    "meaning": "3 veya 4 Köşe Noktasından Yüzey",
    "shortDesc": "Uzayda işaretlenen 3 veya 4 serbest köşeden yüzey üretir.",
    "icon": "icons/surface/ribbon/surf_corner_points.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SrfPt",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SrfPt",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Corner Points komutu. Türkçe anlamı: 3 veya 4 Köşe Noktasından Yüzey. Uzayda işaretlenen 3 veya 4 serbest köşeden yüzey üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "edit_tools": {
    "id": "edit_tools",
    "name": "Edit Tools",
    "trName": "Yüzey Düzenleme Araçları",
    "meaning": "Yüzey Düzenleme Araçları",
    "shortDesc": "Budanmış yüzeyleri onarma, bölme, eşleştirme ve UV düzenleme paketi.",
    "icon": "icons/surface/ribbon/surf_edit_tools.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EditTools",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EditTools",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Edit Tools komutu. Türkçe anlamı: Yüzey Düzenleme Araçları. Budanmış yüzeyleri onarma, bölme, eşleştirme ve UV düzenleme paketi. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "planar_curves": {
    "cmdOptions": [{"name": "PlanarOnly", "desc": "Çizginin tüm noktalarının aynı 2D düzlemde olmasını şart koşar."}],
    "cmdPrompt": "Command: _PlanarSrf\nSelect planar curves to build surface:",
    "id": "planar_curves",
    "name": "Planar Curves",
    "trName": "Düzlemsel Eğrilerden Yüzey",
    "meaning": "Düzlemsel Eğrilerden Yüzey",
    "shortDesc": "Öğrenci Adımları: 1. Aynı düzlemde bulunan kapalı eğriyi (örn: profil veya taş tablası dış çizgisi) seçin. 2. Planar Curves simgesine Sol Tıklayın. 3. Enter'a (veya Sağ Tık / Space tuşuna) basın. Çizginin içi anında düzlemsel kapalı yüzeyle dolar.",
    "icon": "icons/surface/ribbon/surf_planar_curves.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_PlanarSrf",
    "mouseAction": "Sol Tık: Düzlemsel kapalı eğrileri yüzeye çevirir | Sağ Tık: Son seçimi tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _PlanarSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: İçi boş delikli desenlerde dış ve iç çizgileri aynı anda seçip Planar Srf yaparsanız, iç delikler otomatik boşluklu olarak açılır.",
    "ttsText": "Planar Curves komutu. Düzlemsel kapalı çizgilerin içini yüzeyle doldurur."
  },
  "point_grid": {
    "id": "point_grid",
    "name": "Point Grid",
    "trName": "Nokta Izgarasından Yüzey",
    "meaning": "Nokta Izgarasından Yüzey",
    "shortDesc": "Dizili nokta matrisinden enterpolasyonlu organik yüzey geçirir.",
    "icon": "icons/surface/ribbon/surf_point_grid.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SrfPtGrid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SrfPtGrid",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Point Grid komutu. Türkçe anlamı: Nokta Izgarasından Yüzey. Dizili nokta matrisinden enterpolasyonlu organik yüzey geçirir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "extrude": {
    "id": "extrude",
    "name": "Extrude",
    "trName": "Yüzey Yükseltme (Ekstrüzyon)",
    "meaning": "Yüzey Yükseltme (Ekstrüzyon)",
    "shortDesc": "Eğrileri dik, açılı veya kılavuz yol boyunca uzatarak yüzey duvarları örer.",
    "icon": "icons/surface/ribbon/surf_extrude.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtrudeCrv",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrv",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude komutu. Türkçe anlamı: Yüzey Yükseltme (Ekstrüzyon). Eğrileri dik, açılı veya kılavuz yol boyunca uzatarak yüzey duvarları örer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "patch": {
    "id": "patch",
    "name": "Patch",
    "trName": "Yama Yüzey",
    "meaning": "Yama Yüzey",
    "shortDesc": "Karmaşık açık eğri ve nokta bulutlarının üzerinden elastik sabun köpüğü gibi esnek yüzey gerer.",
    "icon": "icons/surface/ribbon/surf_patch.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Patch",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Patch",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Organik yaprak, çiçek ve bozuk kenar tamirlerinde cankurtarandır.",
    "ttsText": "Patch komutu. Türkçe anlamı: Yama Yüzey. Karmaşık açık eğri ve nokta bulutlarının üzerinden elastik sabun köpüğü gibi esnek yüzey gerer. Püf noktası: Organik yaprak, çiçek ve bozuk kenar tamirlerinde cankurtarandır."
  },
  "edge_curves": {
    "id": "edge_curves",
    "name": "Edge Curves",
    "trName": "Kenar Eğrilerinden Yüzey",
    "meaning": "Kenar Eğrilerinden Yüzey",
    "shortDesc": "2, 3 veya 4 kenar eğrisi arasındaki boşluğu yüzey ile kapatır.",
    "icon": "icons/surface/ribbon/surf_edge_curves.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EdgeSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EdgeSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Edge Curves komutu. Türkçe anlamı: Kenar Eğrilerinden Yüzey. 2, 3 veya 4 kenar eğrisi arasındaki boşluğu yüzey ile kapatır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "drape": {
    "id": "drape",
    "name": "Drape",
    "trName": "Örtü/Kumaş Yüzey Giydirme",
    "meaning": "Örtü/Kumaş Yüzey Giydirme",
    "shortDesc": "Seçili 3D nesnelerin üzerine yukarıdan sanal ipek örtü bırakıp rölyef yüzeyi çıkarır.",
    "icon": "icons/surface/ribbon/surf_drape.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Drape",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Drape",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Taşlı pavé modellerde astar arkası zemin kabartması çıkarmak için kullanılır.",
    "ttsText": "Drape komutu. Türkçe anlamı: Örtü/Kumaş Yüzey Giydirme. Seçili 3D nesnelerin üzerine yukarıdan sanal ipek örtü bırakıp rölyef yüzeyi çıkarır. Püf noktası: Taşlı pavé modellerde astar arkası zemin kabartması çıkarmak için kullanılır."
  },
  "extend_surface": {
    "id": "extend_surface",
    "name": "Extend Surface",
    "trName": "Yüzey Kenarını Uzatma",
    "meaning": "Yüzey Kenarını Uzatma",
    "shortDesc": "Mevcut bir yüzeyin kenarını aynı eğrilik ve teğetlikte dışarı doğru uzatır.",
    "icon": "icons/surface/ribbon/surf_extend_surface.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtendSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtendSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extend Surface komutu. Türkçe anlamı: Yüzey Kenarını Uzatma. Mevcut bir yüzeyin kenarını aynı eğrilik ve teğetlikte dışarı doğru uzatır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "edge_tools": {
    "id": "edge_tools",
    "name": "Edge Tools",
    "trName": "Yüzey Kenar Araçları",
    "meaning": "Yüzey Kenar Araçları",
    "shortDesc": "Çıplak kenarları (naked edges) tespit etme, bölme ve kaynatma araçları.",
    "icon": "icons/surface/ribbon/surf_edge_tools.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EdgeTools",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EdgeTools",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Edge Tools komutu. Türkçe anlamı: Yüzey Kenar Araçları. Çıplak kenarları (naked edges) tespit etme, bölme ve kaynatma araçları. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "blend": {
    "id": "blend",
    "name": "Blend",
    "trName": "Yüzeyler Arası Yumuşak Geçiş",
    "meaning": "Yüzeyler Arası Yumuşak Geçiş",
    "shortDesc": "İki ayrı yüzey arasına G1/G2 sürekliliğinde pürüzsüz geçiş köprüsü kurar.",
    "icon": "icons/surface/ribbon/surf_blend.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BlendSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BlendSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Dökümde çapaklanmayı önleyen yumuşak pahlar üretir.",
    "ttsText": "Blend komutu. Türkçe anlamı: Yüzeyler Arası Yumuşak Geçiş. İki ayrı yüzey arasına G1/G2 sürekliliğinde pürüzsüz geçiş köprüsü kurar. Püf noktası: Dökümde çapaklanmayı önleyen yumuşak pahlar üretir."
  },
  "fillet": {
    "id": "fillet",
    "name": "Fillet",
    "trName": "Yüzey Radyus / Yuvarlatma",
    "meaning": "Yüzey Radyus / Yuvarlatma",
    "shortDesc": "Kesişen yüzeyler arasına dairesel kavisli radyus ekler.",
    "icon": "icons/surface/ribbon/surf_fillet.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_FilletSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _FilletSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Taş yuvası tırnak diplerinde 0.15 - 0.25mm radyus ile mukavemet artırılır.",
    "ttsText": "Fillet komutu. Türkçe anlamı: Yüzey Radyus / Yuvarlatma. Kesişen yüzeyler arasına dairesel kavisli radyus ekler. Püf noktası: Taş yuvası tırnak diplerinde 0.15 - 0.25mm radyus ile mukavemet artırılır."
  },
  "chamfer": {
    "id": "chamfer",
    "name": "Chamfer",
    "trName": "Yüzey Pah Kırma",
    "meaning": "Yüzey Pah Kırma",
    "shortDesc": "Kesişen kenarlara düz açılı şık faset pahı kırar.",
    "icon": "icons/surface/ribbon/surf_chamfer.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ChamferSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ChamferSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Chamfer komutu. Türkçe anlamı: Yüzey Pah Kırma. Kesişen kenarlara düz açılı şık faset pahı kırar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "connect_srfs": {
    "id": "connect_srfs",
    "name": "Connect Srfs",
    "trName": "Yüzeyleri Birleştir & Bağla",
    "meaning": "Yüzeyleri Birleştir & Bağla",
    "shortDesc": "Aralarında boşluk olan iki yüzeyi uzatarak birbirine kilitler.",
    "icon": "icons/surface/ribbon/surf_connect_srfs.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ConnectSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ConnectSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Connect Srfs komutu. Türkçe anlamı: Yüzeyleri Birleştir & Bağla. Aralarında boşluk olan iki yüzeyi uzatarak birbirine kilitler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "heightfield_from_image": {
    "id": "heightfield_from_image",
    "name": "Heightfield From Image",
    "trName": "Resimden Rölyef/Kabartma Yüzey",
    "meaning": "Resimden Rölyef/Kabartma Yüzey",
    "shortDesc": "Gri tonlamalı siyah-beyaz fotoğraftan 3D takı madalyon kabartması üretir.",
    "icon": "icons/surface/ribbon/surf_heightfield_from_image.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Heightfield",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Heightfield",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Madalyon, para ve mühür rölyeflerinde piksel parlaklığını Z ekseninde derinliğe dönüştürür.",
    "ttsText": "Heightfield From Image komutu. Türkçe anlamı: Resimden Rölyef/Kabartma Yüzey. Gri tonlamalı siyah-beyaz fotoğraftan 3D takı madalyon kabartması üretir. Püf noktası: Madalyon, para ve mühür rölyeflerinde piksel parlaklığını Z ekseninde derinliğe dönüştürür."
  },
  "offset": {
    "cmdOptions": [{"name": "Distance", "desc": "Et Kalınlığı: Döküm için min 0.30 mm, yüzük alt kolu için min 1.20 mm."}, {"name": "Solid=Yes", "desc": "Kapalı Katı: Yan duvarları kapatıp katı yapar."}],
    "cmdPrompt": "Command: _OffsetSrf\nSelect surface to offset ( Distance=1.20  Solid=Yes ):",
    "id": "offset",
    "name": "Offset",
    "trName": "Yüzey Öteleme & Kalınlık",
    "meaning": "Yüzey Öteleme & Kalınlık",
    "shortDesc": "Öğrenci Adımları: 1. Yüzeyi seçin. 2. Offset Surface simgesine Sol Tıklayın. 3. Distance ölçüsünü girin (döküm için asla 0.30 mm altına inilmez!). 4. Solid=Yes seçip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/surface/ribbon/surf_offset.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_OffsetSrf",
    "mouseAction": "Sol Tık: Yüzeye et kalınlığı verir | Sağ Tık: Yönü ters çevirir (Flip)",
    "commandSteps": [
      {
        "prompt": "Command: _OffsetSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: 0.30 mm (300 mikron) altın kuralı: 0.30 mm altı dökümde dolmaz, delinir ve üretilemez! Yüzük kasalarında min 0.80 mm et payı şarttır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Offset Surface komutu. Yüzeylere paralel et kalınlığı vererek döküme uygun katı gövde oluşturur."
  },
  "unroll_srf": {
    "id": "unroll_srf",
    "name": "Unroll Srf",
    "trName": "Yüzeyi Düzleme Açma (Kalıp Açılımı)",
    "meaning": "Yüzeyi Düzleme Açma (Kalıp Açılımı)",
    "shortDesc": "Geliştirilebilir silindirik veya konik yüzeyleri 2D sac kalıp olarak masaya açar.",
    "icon": "icons/surface/ribbon/surf_unroll_srf.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_UnrollSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _UnrollSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Bilezik ve alyans desenlerini düz plakada çizip sonradan yuvarlamak için kilit araçtır.",
    "ttsText": "Unroll Srf komutu. Türkçe anlamı: Yüzeyi Düzleme Açma (Kalıp Açılımı). Geliştirilebilir silindirik veya konik yüzeyleri 2D sac kalıp olarak masaya açar. Püf noktası: Bilezik ve alyans desenlerini düz plakada çizip sonradan yuvarlamak için kilit araçtır."
  },
  "smash": {
    "id": "smash",
    "name": "Smash",
    "trName": "Ezerek Düzleme Açma",
    "meaning": "Ezerek Düzleme Açma",
    "shortDesc": "Çift eğrilikli (küresel) yüzeyleri esneme faktörünü ezerek düzleme açar.",
    "icon": "icons/surface/ribbon/surf_smash.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Smash",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Smash",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Smash komutu. Türkçe anlamı: Ezerek Düzleme Açma. Çift eğrilikli (küresel) yüzeyleri esneme faktörünü ezerek düzleme açar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "tween_srf": {
    "id": "tween_srf",
    "name": "Tween Srf",
    "trName": "İki Yüzey Arası Ara Form Üretme",
    "meaning": "İki Yüzey Arası Ara Form Üretme",
    "shortDesc": "İki farklı yüzey arasında eşit basamaklı ara formlar üretir.",
    "icon": "icons/surface/ribbon/surf_tween_srf.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_TweenSurfaces",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _TweenSurfaces",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Tween Srf komutu. Türkçe anlamı: İki Yüzey Arası Ara Form Üretme. İki farklı yüzey arasında eşit basamaklı ara formlar üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_plane_center": {
    "id": "srf_plane_center",
    "name": "Plane: Center, Corner",
    "trName": "Merkezden Düzlem",
    "meaning": "Merkezden Düzlem",
    "shortDesc": "Merkez noktası ve köşe belirterek düzlem üretir.",
    "icon": "icons/surface/subtools/srf_plane_center.png",
    "isFlyoutSub": true,
    "parentId": "planes",
    "parentName": "Planes",
    "rhinoCommand": "_Plane _Center",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Plane _Center",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Plane: Center, Corner komutu. Türkçe anlamı: Merkezden Düzlem. Merkez noktası ve köşe belirterek düzlem üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_plane_3pt": {
    "id": "srf_plane_3pt",
    "name": "Plane: 3 Points",
    "trName": "3 Noktadan Düzlem",
    "meaning": "3 Noktadan Düzlem",
    "shortDesc": "Uzayda üç nokta ile açılı düzlem oluşturur.",
    "icon": "icons/surface/subtools/srf_plane_3pt.png",
    "isFlyoutSub": true,
    "parentId": "planes",
    "parentName": "Planes",
    "rhinoCommand": "_Plane _3Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Plane _3Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Plane: 3 Points komutu. Türkçe anlamı: 3 Noktadan Düzlem. Uzayda üç nokta ile açılı düzlem oluşturur. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_plane_corner": {
    "id": "srf_plane_corner",
    "name": "Plane: Corner To Corner",
    "trName": "Köşeden Köşeye Düzlem",
    "meaning": "Köşeden Köşeye Düzlem",
    "shortDesc": "İki çapraz köşe tıklayarak dikdörtgen düzlem açar.",
    "icon": "icons/surface/subtools/srf_plane_corner.png",
    "isFlyoutSub": true,
    "parentId": "planes",
    "parentName": "Planes",
    "rhinoCommand": "_Plane",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Plane",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Plane: Corner To Corner komutu. Türkçe anlamı: Köşeden Köşeye Düzlem. İki çapraz köşe tıklayarak dikdörtgen düzlem açar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_plane_vertical": {
    "id": "srf_plane_vertical",
    "name": "Plane: Vertical",
    "trName": "Dikey Düzlem",
    "meaning": "Dikey Düzlem",
    "shortDesc": "Çalışma düzlemine 90 derece dik düzlem çizer.",
    "icon": "icons/surface/subtools/srf_plane_vertical.png",
    "isFlyoutSub": true,
    "parentId": "planes",
    "parentName": "Planes",
    "rhinoCommand": "_Plane _Vertical",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Plane _Vertical",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Plane: Vertical komutu. Türkçe anlamı: Dikey Düzlem. Çalışma düzlemine 90 derece dik düzlem çizer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_plane_through_pts": {
    "id": "srf_plane_through_pts",
    "name": "Plane: Through Points",
    "trName": "Noktalar Arası Düzlem",
    "meaning": "Noktalar Arası Düzlem",
    "shortDesc": "Dağınık noktalar kümesine en yakın ortalama düzlemi oturtur.",
    "icon": "icons/surface/subtools/srf_plane_through_pts.png",
    "isFlyoutSub": true,
    "parentId": "planes",
    "parentName": "Planes",
    "rhinoCommand": "_PlaneThroughPt",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _PlaneThroughPt",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Plane: Through Points komutu. Türkçe anlamı: Noktalar Arası Düzlem. Dağınık noktalar kümesine en yakın ortalama düzlemi oturtur. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_plane_cutting": {
    "id": "srf_plane_cutting",
    "name": "Cutting Plane",
    "trName": "Kesme Düzlemi",
    "meaning": "Kesme Düzlemi",
    "shortDesc": "Seçili nesneleri ikiye bölecek sonsuz bıçak düzlemi çıkarır.",
    "icon": "icons/surface/subtools/srf_plane_cutting.png",
    "isFlyoutSub": true,
    "parentId": "planes",
    "parentName": "Planes",
    "rhinoCommand": "_CutPlane",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _CutPlane",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Cutting Plane komutu. Türkçe anlamı: Kesme Düzlemi. Seçili nesneleri ikiye bölecek sonsuz bıçak düzlemi çıkarır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_loft_to_point": {
    "id": "srf_loft_to_point",
    "name": "Loft To Point",
    "trName": "Noktaya Loft",
    "meaning": "Noktaya Loft",
    "shortDesc": "Eğrileri son bir tepe noktasına toplayarak konik yüzey örer.",
    "icon": "icons/surface/subtools/srf_loft_to_point.png",
    "isFlyoutSub": true,
    "parentId": "loft",
    "parentName": "Loft",
    "rhinoCommand": "_Loft _Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Loft _Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Loft To Point komutu. Türkçe anlamı: Noktaya Loft. Eğrileri son bir tepe noktasına toplayarak konik yüzey örer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_loft": {
    "id": "srf_loft",
    "name": "Loft (Standard)",
    "trName": "Standart Loft",
    "meaning": "Standart Loft",
    "shortDesc": "Eğriler arası sıralı yüzey örer.",
    "icon": "icons/surface/subtools/srf_loft.png",
    "isFlyoutSub": true,
    "parentId": "loft",
    "parentName": "Loft",
    "rhinoCommand": "_Loft",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Loft",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Loft (Standard) komutu. Türkçe anlamı: Standart Loft. Eğriler arası sıralı yüzey örer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_sweep_2": {
    "id": "srf_sweep_2",
    "name": "Sweep 2 Rails",
    "trName": "2 Raylı Süpürme",
    "meaning": "2 Raylı Süpürme",
    "shortDesc": "İki kenar rayı arasında kesit profilini sürerek yüzey örer.",
    "icon": "icons/surface/subtools/srf_sweep_2.png",
    "isFlyoutSub": true,
    "parentId": "sweep",
    "parentName": "Sweep",
    "rhinoCommand": "_Sweep2",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sweep2",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Sweep 2 Rails komutu. Türkçe anlamı: 2 Raylı Süpürme. İki kenar rayı arasında kesit profilini sürerek yüzey örer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_sweep_1": {
    "id": "srf_sweep_1",
    "name": "Sweep 1 Rail",
    "trName": "1 Raylı Süpürme",
    "meaning": "1 Raylı Süpürme",
    "shortDesc": "Tek ray boyunca kesiti sürer.",
    "icon": "icons/surface/subtools/srf_sweep_1.png",
    "isFlyoutSub": true,
    "parentId": "sweep",
    "parentName": "Sweep",
    "rhinoCommand": "_Sweep1",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sweep1",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Sweep 1 Rail komutu. Türkçe anlamı: 1 Raylı Süpürme. Tek ray boyunca kesiti sürer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_rail_revolve": {
    "id": "srf_rail_revolve",
    "name": "Rail Revolve",
    "trName": "Raylı Döndürme",
    "meaning": "Raylı Döndürme",
    "shortDesc": "Merkez eksen ve dış ray sınırıyla dönel yüzey oluşturur.",
    "icon": "icons/surface/subtools/srf_rail_revolve.png",
    "isFlyoutSub": true,
    "parentId": "revolve",
    "parentName": "Revolve",
    "rhinoCommand": "_RailRevolve",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RailRevolve",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Rail Revolve komutu. Türkçe anlamı: Raylı Döndürme. Merkez eksen ve dış ray sınırıyla dönel yüzey oluşturur. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_revolve": {
    "id": "srf_revolve",
    "name": "Revolve (360)",
    "trName": "Eksenel Döndürme",
    "meaning": "Eksenel Döndürme",
    "shortDesc": "360 derece dönel simetrik yüzey üretir.",
    "icon": "icons/surface/subtools/srf_revolve.png",
    "isFlyoutSub": true,
    "parentId": "revolve",
    "parentName": "Revolve",
    "rhinoCommand": "_Revolve",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Revolve",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Revolve (360) komutu. Türkçe anlamı: Eksenel Döndürme. 360 derece dönel simetrik yüzey üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_merge": {
    "id": "srf_merge",
    "name": "Merge Surface",
    "trName": "Yüzeyleri Kaynat",
    "meaning": "Yüzeyleri Kaynat",
    "shortDesc": "Aynı derece ve yapıdaki iki bitişik yüzeyi tek parçaya dönüştürür.",
    "icon": "icons/surface/subtools/srf_merge.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_MergeSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MergeSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Merge Surface komutu. Türkçe anlamı: Yüzeyleri Kaynat. Aynı derece ve yapıdaki iki bitişik yüzeyi tek parçaya dönüştürür. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_refit_tolerance": {
    "id": "srf_refit_tolerance",
    "name": "Refit To Tolerance",
    "trName": "Toleransa Uyarla",
    "meaning": "Toleransa Uyarla",
    "shortDesc": "Bozulmuş yüzeyi belirlenen toleransla yeniden hesaplar.",
    "icon": "icons/surface/subtools/srf_refit_tolerance.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_FitSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _FitSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Refit To Tolerance komutu. Türkçe anlamı: Toleransa Uyarla. Bozulmuş yüzeyi belirlenen toleransla yeniden hesaplar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_untrim": {
    "id": "srf_untrim",
    "name": "Untrim Surface",
    "trName": "Budamayı Geri Al",
    "meaning": "Budamayı Geri Al",
    "shortDesc": "Budanmış yüzey sınırlarını kaldırarak orijinal tam yüzeye döner.",
    "icon": "icons/surface/subtools/srf_untrim.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Untrim",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Untrim",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Untrim Surface komutu. Türkçe anlamı: Budamayı Geri Al. Budanmış yüzey sınırlarını kaldırarak orijinal tam yüzeye döner. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_detach_trim": {
    "id": "srf_detach_trim",
    "name": "Detach Trimmed Face",
    "trName": "Budanmış Yüzü Ayır",
    "meaning": "Budanmış Yüzü Ayır",
    "shortDesc": "Kombine katının budanmış bir yüzeyini ana gövdeden koparır.",
    "icon": "icons/surface/subtools/srf_detach_trim.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_DetachTrim",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _DetachTrim",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Detach Trimmed Face komutu. Türkçe anlamı: Budanmış Yüzü Ayır. Kombine katının budanmış bir yüzeyini ana gövdeden koparır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_adjust_seam": {
    "id": "srf_adjust_seam",
    "name": "Adjust Closed Surface Seam",
    "trName": "Dikiş Çizgisini Değiştir",
    "meaning": "Dikiş Çizgisini Değiştir",
    "shortDesc": "Silindir ve yüzük gibi kapalı yüzeylerin dikiş birleşim noktasını görünmeyen tarafa kaydırır.",
    "icon": "icons/surface/subtools/srf_adjust_seam.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_SrfSeam",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SrfSeam",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Adjust Closed Surface Seam komutu. Türkçe anlamı: Dikiş Çizgisini Değiştir. Silindir ve yüzük gibi kapalı yüzeylerin dikiş birleşim noktasını görünmeyen tarafa kaydırır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_split_isocurve": {
    "id": "srf_split_isocurve",
    "name": "Split At Isocurve",
    "trName": "İzokürvden Kes",
    "meaning": "İzokürvden Kes",
    "shortDesc": "Yüzeyi kendi akış çizgisi (isocurve) boyunca temizce böler.",
    "icon": "icons/surface/subtools/srf_split_isocurve.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Split",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Split",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Split At Isocurve komutu. Türkçe anlamı: İzokürvden Kes. Yüzeyi kendi akış çizgisi (isocurve) boyunca temizce böler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_shrink_trimmed": {
    "id": "srf_shrink_trimmed",
    "name": "Shrink Trimmed Surface",
    "trName": "Budanmış Yüzeyi Sıkıştır",
    "meaning": "Budanmış Yüzeyi Sıkıştır",
    "shortDesc": "Budanmış yüzeyin görünmeyen dış kontrol kafesini gerçek kenarlara daraltır.",
    "icon": "icons/surface/subtools/srf_shrink_trimmed.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_ShrinkTrimmedSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ShrinkTrimmedSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Shrink Trimmed Surface komutu. Türkçe anlamı: Budanmış Yüzeyi Sıkıştır. Budanmış yüzeyin görünmeyen dış kontrol kafesini gerçek kenarlara daraltır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_shrink_edge": {
    "id": "srf_shrink_edge",
    "name": "Shrink Surface To Edge",
    "trName": "Kenara Sıkıştır",
    "meaning": "Kenara Sıkıştır",
    "shortDesc": "Kontrol kafesini kenarlara sıfırlar, model dosya boyutunu hafifletir.",
    "icon": "icons/surface/subtools/srf_shrink_edge.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_ShrinkTrimmedSrfToEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ShrinkTrimmedSrfToEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Shrink Surface To Edge komutu. Türkçe anlamı: Kenara Sıkıştır. Kontrol kafesini kenarlara sıfırlar, model dosya boyutunu hafifletir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_match": {
    "id": "srf_match",
    "name": "Match Surface",
    "trName": "Yüzey Sürekliliği Eşle",
    "meaning": "Yüzey Sürekliliği Eşle",
    "shortDesc": "İki bağımsız yüzeyin kenarlarını G0, G1 (teğet) veya G2 (eğrilik) sürekliliğinde birbirine kaynaştırır.",
    "icon": "icons/surface/subtools/srf_match.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_MatchSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MatchSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Match Surface komutu. Türkçe anlamı: Yüzey Sürekliliği Eşle. İki bağımsız yüzeyin kenarlarını G0, G1 (teğet) veya G2 (eğrilik) sürekliliğinde birbirine kaynaştırır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_adjust_end_bulge": {
    "id": "srf_adjust_end_bulge",
    "name": "Adjust End Bulge",
    "trName": "Uç Bombesini Ayarla",
    "meaning": "Uç Bombesini Ayarla",
    "shortDesc": "Yüzey ucundaki şişkinlik ve bombelik miktarını interaktif kontrol oklarıyla düzenler.",
    "icon": "icons/surface/subtools/srf_adjust_end_bulge.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_EndBulge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EndBulge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Adjust End Bulge komutu. Türkçe anlamı: Uç Bombesini Ayarla. Yüzey ucundaki şişkinlik ve bombelik miktarını interaktif kontrol oklarıyla düzenler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_divide_isocurve": {
    "id": "srf_divide_isocurve",
    "name": "Divide By Isocurve",
    "trName": "İzokürv ile Böl",
    "meaning": "İzokürv ile Böl",
    "shortDesc": "Yüzeyi UV yönlerinde eşit parçalara ayırır.",
    "icon": "icons/surface/subtools/srf_divide_isocurve.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_DivideAlongCreases",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _DivideAlongCreases",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Divide By Isocurve komutu. Türkçe anlamı: İzokürv ile Böl. Yüzeyi UV yönlerinde eşit parçalara ayırır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_soft_edit": {
    "id": "srf_soft_edit",
    "name": "Soft Edit Surface",
    "trName": "Yumuşak Yüzey Çekiştirme",
    "meaning": "Yumuşak Yüzey Çekiştirme",
    "shortDesc": "Yüzeyin bir noktasını çekiştirirken çevresini yumuşak Gauss eğrisiyle deforme eder.",
    "icon": "icons/surface/subtools/srf_soft_edit.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_SoftEditSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SoftEditSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Soft Edit Surface komutu. Türkçe anlamı: Yumuşak Yüzey Çekiştirme. Yüzeyin bir noktasını çekiştirirken çevresini yumuşak Gauss eğrisiyle deforme eder. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_rebuild_uv": {
    "id": "srf_rebuild_uv",
    "name": "Rebuild UV",
    "trName": "UV Kafesini Yeniden Kur",
    "meaning": "UV Kafesini Yeniden Kur",
    "shortDesc": "Yüzeyin kontrol noktası sayısını (U ve V) yeniden belirleyerek dalgalanmaları ütüler.",
    "icon": "icons/surface/subtools/srf_rebuild_uv.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Rebuild",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Rebuild",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Rebuild UV komutu. Türkçe anlamı: UV Kafesini Yeniden Kur. Yüzeyin kontrol noktası sayısını (U ve V) yeniden belirleyerek dalgalanmaları ütüler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_set_tangent": {
    "id": "srf_set_tangent",
    "name": "Set Tangent At Edge",
    "trName": "Kenar Teğetliği Ata",
    "meaning": "Kenar Teğetliği Ata",
    "shortDesc": "Yüzey kenarının komşu yüzeyle yapacağı teğetlik açısını kilitler.",
    "icon": "icons/surface/subtools/srf_set_tangent.png",
    "isFlyoutSub": true,
    "parentId": "edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_SetSurfaceTangent",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SetSurfaceTangent",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Set Tangent At Edge komutu. Türkçe anlamı: Kenar Teğetliği Ata. Yüzey kenarının komşu yüzeyle yapacağı teğetlik açısını kilitler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_extrude_along_curve": {
    "id": "srf_extrude_along_curve",
    "name": "Extrude Along Curve",
    "trName": "Eğri Boyunca Yükselt",
    "meaning": "Eğri Boyunca Yükselt",
    "shortDesc": "Profili açılı bir kılavuz eğri doğrultusunda uzatarak boru/yüzey çıkarır.",
    "icon": "icons/surface/subtools/srf_extrude_along_curve.png",
    "isFlyoutSub": true,
    "parentId": "extrude",
    "parentName": "Extrude",
    "rhinoCommand": "_ExtrudeCrvAlongCrv",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvAlongCrv",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude Along Curve komutu. Türkçe anlamı: Eğri Boyunca Yükselt. Profili açılı bir kılavuz eğri doğrultusunda uzatarak boru/yüzey çıkarır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_extrude_to_point": {
    "id": "srf_extrude_to_point",
    "name": "Extrude To Point",
    "trName": "Noktaya Yükselt",
    "meaning": "Noktaya Yükselt",
    "shortDesc": "Taban eğrisini tek tepe noktasına doğru piramidal koni şeklinde uzatır.",
    "icon": "icons/surface/subtools/srf_extrude_to_point.png",
    "isFlyoutSub": true,
    "parentId": "extrude",
    "parentName": "Extrude",
    "rhinoCommand": "_ExtrudeCrvToPoint",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvToPoint",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude To Point komutu. Türkçe anlamı: Noktaya Yükselt. Taban eğrisini tek tepe noktasına doğru piramidal koni şeklinde uzatır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_extrude_tapered": {
    "id": "srf_extrude_tapered",
    "name": "Extrude Tapered",
    "trName": "Açılı (Konik) Yükselt",
    "meaning": "Açılı (Konik) Yükselt",
    "shortDesc": "Kalıptan kolay çıkması için belirlenen döküm açısıyla (örn: 5 derece) genişleyerek yükseltir.",
    "icon": "icons/surface/subtools/srf_extrude_tapered.png",
    "isFlyoutSub": true,
    "parentId": "extrude",
    "parentName": "Extrude",
    "rhinoCommand": "_ExtrudeCrvTapered",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvTapered",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude Tapered komutu. Türkçe anlamı: Açılı (Konik) Yükselt. Kalıptan kolay çıkması için belirlenen döküm açısıyla (örn: 5 derece) genişleyerek yükseltir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_extrude_ribbon": {
    "id": "srf_extrude_ribbon",
    "name": "Extrude Ribbon",
    "trName": "Şerit Yükseltme",
    "meaning": "Şerit Yükseltme",
    "shortDesc": "Eğriyi yüzey normaline dik şerit halinde uzatır.",
    "icon": "icons/surface/subtools/srf_extrude_ribbon.png",
    "isFlyoutSub": true,
    "parentId": "extrude",
    "parentName": "Extrude",
    "rhinoCommand": "_Ribbon",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Ribbon",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude Ribbon komutu. Türkçe anlamı: Şerit Yükseltme. Eğriyi yüzey normaline dik şerit halinde uzatır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_extrude_normal": {
    "id": "srf_extrude_normal",
    "name": "Extrude Normal",
    "trName": "Yüzey Normaline Yükselt",
    "meaning": "Yüzey Normaline Yükselt",
    "shortDesc": "Eğriyi yapışık olduğu yüzeyin dik doğrultusunda kabartır.",
    "icon": "icons/surface/subtools/srf_extrude_normal.png",
    "isFlyoutSub": true,
    "parentId": "extrude",
    "parentName": "Extrude",
    "rhinoCommand": "_ExtrudeCrvNormal",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvNormal",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude Normal komutu. Türkçe anlamı: Yüzey Normaline Yükselt. Eğriyi yapışık olduğu yüzeyin dik doğrultusunda kabartır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_extrude_straight": {
    "id": "srf_extrude_straight",
    "name": "Extrude Straight",
    "trName": "Düz Doğrusal Yükseltme",
    "meaning": "Düz Doğrusal Yükseltme",
    "shortDesc": "Z veya belirlenen eksende düz duvar yükseltir.",
    "icon": "icons/surface/subtools/srf_extrude_straight.png",
    "isFlyoutSub": true,
    "parentId": "extrude",
    "parentName": "Extrude",
    "rhinoCommand": "_ExtrudeCrv",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrv",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Extrude Straight komutu. Türkçe anlamı: Düz Doğrusal Yükseltme. Z veya belirlenen eksende düz duvar yükseltir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_split_edge": {
    "id": "srf_split_edge",
    "name": "Split Edge",
    "trName": "Kenar Böl",
    "meaning": "Kenar Böl",
    "shortDesc": "Yüzey kenarını belirli bir noktadan iki bağımsız kenara ayırır.",
    "icon": "icons/surface/subtools/srf_split_edge.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_SplitEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SplitEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Split Edge komutu. Türkçe anlamı: Kenar Böl. Yüzey kenarını belirli bir noktadan iki bağımsız kenara ayırır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_merge_edge": {
    "id": "srf_merge_edge",
    "name": "Merge Edge",
    "trName": "Kenar Birleştir",
    "meaning": "Kenar Birleştir",
    "shortDesc": "Bölünmüş kenar parçalarını tek bir kesintisiz kenarda toplar.",
    "icon": "icons/surface/subtools/srf_merge_edge.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_MergeEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MergeEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Merge Edge komutu. Türkçe anlamı: Kenar Birleştir. Bölünmüş kenar parçalarını tek bir kesintisiz kenarda toplar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_join_naked_edges": {
    "id": "srf_join_naked_edges",
    "name": "Join 2 Naked Edges",
    "trName": "Açık Kenarları Kaynat",
    "meaning": "Açık Kenarları Kaynat",
    "shortDesc": "Tolerans dışı kalarak açık kalan kenarları zorla birbirine kenetler.",
    "icon": "icons/surface/subtools/srf_join_naked_edges.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_JoinEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _JoinEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Join 2 Naked Edges komutu. Türkçe anlamı: Açık Kenarları Kaynat. Tolerans dışı kalarak açık kalan kenarları zorla birbirine kenetler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_unjoin_edge": {
    "id": "srf_unjoin_edge",
    "name": "Unjoin Edge",
    "trName": "Kenarı Kopar",
    "meaning": "Kenarı Kopar",
    "shortDesc": "Katı gövdedeki kenar dikişini serbest bırakır.",
    "icon": "icons/surface/subtools/srf_unjoin_edge.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_UnjoinEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _UnjoinEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Unjoin Edge komutu. Türkçe anlamı: Kenarı Kopar. Katı gövdedeki kenar dikişini serbest bırakır. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_rebuild_edges": {
    "id": "srf_rebuild_edges",
    "name": "Rebuild Edges",
    "trName": "Kenarları Yeniden Kur",
    "meaning": "Kenarları Yeniden Kur",
    "shortDesc": "Mikro bozulmaya uğramış kenarları toleransa göre sıfırlar.",
    "icon": "icons/surface/subtools/srf_rebuild_edges.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_RebuildEdges",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RebuildEdges",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Rebuild Edges komutu. Türkçe anlamı: Kenarları Yeniden Kur. Mikro bozulmaya uğramış kenarları toleransa göre sıfırlar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_remove_edge": {
    "id": "srf_remove_edge",
    "name": "Remove Edge",
    "trName": "Gereksiz Kenarı Sil",
    "meaning": "Gereksiz Kenarı Sil",
    "shortDesc": "Yüzey üzerinde kalmış lüzumsuz bölme kenarını temizler.",
    "icon": "icons/surface/subtools/srf_remove_edge.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_RemoveEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RemoveEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Remove Edge komutu. Türkçe anlamı: Gereksiz Kenarı Sil. Yüzey üzerinde kalmış lüzumsuz bölme kenarını temizler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_show_edges": {
    "id": "srf_show_edges",
    "name": "Show Edges",
    "trName": "Kenarları Teşhis Et",
    "meaning": "Kenarları Teşhis Et",
    "shortDesc": "Modeldeki tüm açık delikleri ve çıplak kenarları fosforlu pembe renkle gösterir.",
    "icon": "icons/surface/subtools/srf_show_edges.png",
    "isFlyoutSub": true,
    "parentId": "edge_tools",
    "parentName": "Edge Tools",
    "rhinoCommand": "_ShowEdges",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ShowEdges",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Show Edges komutu. Türkçe anlamı: Kenarları Teşhis Et. Modeldeki tüm açık delikleri ve çıplak kenarları fosforlu pembe renkle gösterir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_variable_blend": {
    "id": "srf_variable_blend",
    "name": "Variable Blend Surface",
    "trName": "Değişken Yarıçaplı Yumuşatma",
    "meaning": "Değişken Yarıçaplı Yumuşatma",
    "shortDesc": "Kenar boyunca farklı radyus değerleriyle yumuşak geçiş köprüsü kurar.",
    "icon": "icons/surface/subtools/srf_variable_blend.png",
    "isFlyoutSub": true,
    "parentId": "blend",
    "parentName": "Blend",
    "rhinoCommand": "_VariableBlendSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _VariableBlendSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Variable Blend Surface komutu. Türkçe anlamı: Değişken Yarıçaplı Yumuşatma. Kenar boyunca farklı radyus değerleriyle yumuşak geçiş köprüsü kurar. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_blend": {
    "id": "srf_blend",
    "name": "Blend Surface (Std)",
    "trName": "Standart Yüzey Yumuşatma",
    "meaning": "Standart Yüzey Yumuşatma",
    "shortDesc": "İki kenar arasına teğet geçiş yüzeyi örer.",
    "icon": "icons/surface/subtools/srf_blend.png",
    "isFlyoutSub": true,
    "parentId": "blend",
    "parentName": "Blend",
    "rhinoCommand": "_BlendSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BlendSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Blend Surface (Std) komutu. Türkçe anlamı: Standart Yüzey Yumuşatma. İki kenar arasına teğet geçiş yüzeyi örer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_variable_fillet": {
    "id": "srf_variable_fillet",
    "name": "Variable Fillet Surface",
    "trName": "Değişken Radyus",
    "meaning": "Değişken Radyus",
    "shortDesc": "Köşelerde başlayıp incelen değişken radyus yüzeyi üretir.",
    "icon": "icons/surface/subtools/srf_variable_fillet.png",
    "isFlyoutSub": true,
    "parentId": "fillet",
    "parentName": "Fillet",
    "rhinoCommand": "_VariableFilletSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _VariableFilletSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Variable Fillet Surface komutu. Türkçe anlamı: Değişken Radyus. Köşelerde başlayıp incelen değişken radyus yüzeyi üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_fillet": {
    "id": "srf_fillet",
    "name": "Fillet Surface (Std)",
    "trName": "Standart Radyus",
    "meaning": "Standart Radyus",
    "shortDesc": "Sabit yarıçaplı dairesel kavis yüzeyi oluşturur.",
    "icon": "icons/surface/subtools/srf_fillet.png",
    "isFlyoutSub": true,
    "parentId": "fillet",
    "parentName": "Fillet",
    "rhinoCommand": "_FilletSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _FilletSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Fillet Surface (Std) komutu. Türkçe anlamı: Standart Radyus. Sabit yarıçaplı dairesel kavis yüzeyi oluşturur. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_variable_chamfer": {
    "id": "srf_variable_chamfer",
    "name": "Variable Chamfer Surface",
    "trName": "Değişken Pah",
    "meaning": "Değişken Pah",
    "shortDesc": "Mesafeleri kenar boyunca değişen faset pah yüzeyi örer.",
    "icon": "icons/surface/subtools/srf_variable_chamfer.png",
    "isFlyoutSub": true,
    "parentId": "chamfer",
    "parentName": "Chamfer",
    "rhinoCommand": "_VariableChamferSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _VariableChamferSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Variable Chamfer Surface komutu. Türkçe anlamı: Değişken Pah. Mesafeleri kenar boyunca değişen faset pah yüzeyi örer. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_chamfer": {
    "id": "srf_chamfer",
    "name": "Chamfer Surface (Std)",
    "trName": "Standart Pah",
    "meaning": "Standart Pah",
    "shortDesc": "Sabit açılı düz pah yüzeyi üretir.",
    "icon": "icons/surface/subtools/srf_chamfer.png",
    "isFlyoutSub": true,
    "parentId": "chamfer",
    "parentName": "Chamfer",
    "rhinoCommand": "_ChamferSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ChamferSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Chamfer Surface (Std) komutu. Türkçe anlamı: Standart Pah. Sabit açılı düz pah yüzeyi üretir. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_variable_offset": {
    "id": "srf_variable_offset",
    "name": "Variable Offset Surface",
    "trName": "Değişken Et Kalınlığı",
    "meaning": "Değişken Et Kalınlığı",
    "shortDesc": "Farklı bölgelerde farklı kalınlık vererek yüzeyi öteler.",
    "icon": "icons/surface/subtools/srf_variable_offset.png",
    "isFlyoutSub": true,
    "parentId": "offset",
    "parentName": "Offset",
    "rhinoCommand": "_VariableOffsetSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _VariableOffsetSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Variable Offset Surface komutu. Türkçe anlamı: Değişken Et Kalınlığı. Farklı bölgelerde farklı kalınlık vererek yüzeyi öteler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  },
  "srf_offset": {
    "id": "srf_offset",
    "name": "Offset Surface (Std)",
    "trName": "Standart Yüzey Öteleme",
    "meaning": "Standart Yüzey Öteleme",
    "shortDesc": "Yüzeyin tamamını eşit mesafede paralel öteler.",
    "icon": "icons/surface/subtools/srf_offset.png",
    "isFlyoutSub": true,
    "parentId": "offset",
    "parentName": "Offset",
    "rhinoCommand": "_OffsetSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _OffsetSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select curves or surfaces: <Enter>",
        "desc": "İlgili eğri veya yüzeyleri seçip Enter tuşuna basın."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal çizimleri işlemden sonra siler (Yes/No)."
      },
      {
        "key": "Tolerance",
        "desc": "Yüzey hassasiyet toleransı (varsayılan 0.001 mm)."
      }
    ],
    "jewelerTip": "Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır.",
    "ttsText": "Offset Surface (Std) komutu. Türkçe anlamı: Standart Yüzey Öteleme. Yüzeyin tamamını eşit mesafede paralel öteler. Püf noktası: Kuyumculukta temiz ve manifold yüzeyler döküm kalitesi ve 3D reçine baskı başarısı için şarttır."
  }
};

function findSurfaceCommand(cmdId) {
  if (!cmdId) return null;
  if (surfaceCommandsCatalog[cmdId]) return surfaceCommandsCatalog[cmdId];
  return null;
}

window.surfaceRibbonRows = surfaceRibbonRows;
window.surfaceFlyoutDrawers = surfaceFlyoutDrawers;
window.surfaceCommandsCatalog = surfaceCommandsCatalog;
window.findSurfaceCommand = findSurfaceCommand;
