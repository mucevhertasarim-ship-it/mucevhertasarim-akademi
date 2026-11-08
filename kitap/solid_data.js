// MATRIXGOLD & RHINO - SOLID (KATILAR DÜNYASI) VERİ KATALOĞU
// 34 Ana Şerit Komutu + 12 Alt Çekmece + 60 Alt Araç (Toplam 94 Katı Aracı)

const solidRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: Temel Katı Geometrileri, Parametrik MG Objeleri & Boolean İşlemleri",
    "tools": [
      {
        "id": "msr_objects",
        "name": "MSR Objects",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_msr_objects.png"
      },
      {
        "id": "boolean_diff",
        "name": "Boolean Difference",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_boolean_diff.png"
      },
      {
        "id": "boolean_inters",
        "name": "Boolean Intersection",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_boolean_inters.png"
      },
      {
        "id": "boolean_union",
        "name": "Boolean Union",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_boolean_union.png"
      },
      {
        "id": "obj_on_curve",
        "name": "Object On Curve",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_obj_on_curve.png"
      },
      {
        "id": "pipe_mg",
        "name": "Pipe (MG)",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_pipe_mg.png"
      },
      {
        "id": "rope",
        "name": "Rope",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_rope.png"
      },
      {
        "id": "obj_on_surface",
        "name": "Object On Surface",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_obj_on_surface.png"
      },
      {
        "id": "boolean",
        "name": "Boolean",
        "hasFlyout": true,
        "flyoutKey": "boolean",
        "subCount": 6,
        "icon": "icons/solid/ribbon/sld_boolean.png"
      },
      {
        "id": "sphere",
        "name": "Sphere",
        "hasFlyout": true,
        "flyoutKey": "sphere",
        "subCount": 7,
        "icon": "icons/solid/ribbon/sld_sphere.png"
      },
      {
        "id": "box",
        "name": "Box",
        "hasFlyout": true,
        "flyoutKey": "box",
        "subCount": 5,
        "icon": "icons/solid/ribbon/sld_box.png"
      },
      {
        "id": "extrude_planar",
        "name": "Extrude Planar",
        "hasFlyout": true,
        "flyoutKey": "extrude_planar",
        "subCount": 4,
        "icon": "icons/solid/ribbon/sld_extrude_planar.png"
      },
      {
        "id": "cylinder",
        "name": "Cylinder",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_cylinder.png"
      },
      {
        "id": "text",
        "name": "Text",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_text.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: İlkel Katı Koni/Elipsoid, Boru, Kalınlık & Katı Yükseltme",
    "tools": [
      {
        "id": "cone",
        "name": "Cone",
        "hasFlyout": true,
        "flyoutKey": "cone",
        "subCount": 5,
        "icon": "icons/solid/ribbon/sld_cone.png"
      },
      {
        "id": "ellipsoid",
        "name": "Ellipsoid",
        "hasFlyout": true,
        "flyoutKey": "ellipsoid",
        "subCount": 3,
        "icon": "icons/solid/ribbon/sld_ellipsoid.png"
      },
      {
        "id": "paraboloid",
        "name": "Paraboloid",
        "hasFlyout": true,
        "flyoutKey": "paraboloid",
        "subCount": 2,
        "icon": "icons/solid/ribbon/sld_paraboloid.png"
      },
      {
        "id": "tube",
        "name": "Tube",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_tube.png"
      },
      {
        "id": "pipe_rhino",
        "name": "Pipe",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_pipe_rhino.png"
      },
      {
        "id": "multi_pipe",
        "name": "Multi Pipe",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_multi_pipe.png"
      },
      {
        "id": "extract_surface",
        "name": "Extract Surface",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_extract_surface.png"
      },
      {
        "id": "cap_planar",
        "name": "Cap Planar",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_cap_planar.png"
      },
      {
        "id": "shell",
        "name": "Shell",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_shell.png"
      },
      {
        "id": "slab",
        "name": "Slab",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_slab.png"
      },
      {
        "id": "torus",
        "name": "Torus",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_torus.png"
      },
      {
        "id": "extrude_surface_1",
        "name": "Extrude Surface",
        "hasFlyout": true,
        "flyoutKey": "extrude_surface_1",
        "subCount": 4,
        "icon": "icons/solid/ribbon/sld_extrude_surface_1.png"
      },
      {
        "id": "extrude_surface_2",
        "name": "Extrude Surface (Normal)",
        "hasFlyout": true,
        "flyoutKey": "extrude_surface_2",
        "subCount": 4,
        "icon": "icons/solid/ribbon/sld_extrude_surface_2.png"
      },
      {
        "id": "boss",
        "name": "Boss",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_boss.png"
      }
    ]
  },
  {
    "id": "row_3",
    "title": "3. Şerit: Katı Kenar Radyusları, Yüz & Delik Düzenleme, Tel Kesim",
    "tools": [
      {
        "id": "rib",
        "name": "Rib",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_rib.png"
      },
      {
        "id": "fillet_edge",
        "name": "Fillet Edge",
        "hasFlyout": true,
        "flyoutKey": "fillet_edge",
        "subCount": 3,
        "icon": "icons/solid/ribbon/sld_fillet_edge.png"
      },
      {
        "id": "edit_faces",
        "name": "Edit Faces",
        "hasFlyout": true,
        "flyoutKey": "edit_faces",
        "subCount": 7,
        "icon": "icons/solid/ribbon/sld_edit_faces.png"
      },
      {
        "id": "edit_holes",
        "name": "Edit Holes",
        "hasFlyout": true,
        "flyoutKey": "edit_holes",
        "subCount": 10,
        "icon": "icons/solid/ribbon/sld_edit_holes.png"
      },
      {
        "id": "wire_cut",
        "name": "Wire Cut",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_wire_cut.png"
      },
      {
        "id": "edit_edges",
        "name": "Edit Edges",
        "hasFlyout": false,
        "icon": "icons/solid/ribbon/sld_edit_edges.png"
      }
    ]
  }
];

const solidFlyoutDrawers = {
  "boolean": {
    "key": "boolean",
    "title": "Boolean",
    "trTitle": "Boolean Katı Birleşim & Fark Araçları",
    "count": 6,
    "subIds": [
      "sld_boolean_union",
      "sld_boolean_intersection",
      "sld_boolean_two_objects",
      "sld_boolean_split",
      "sld_boolean_create_solid",
      "sld_boolean_difference"
    ]
  },
  "sphere": {
    "key": "sphere",
    "title": "Sphere",
    "trTitle": "Küre Modelleme Araçları",
    "count": 7,
    "subIds": [
      "sld_sphere_2pt",
      "sld_sphere_3pt",
      "sld_sphere_4pt",
      "sld_sphere_around_crv",
      "sld_sphere_tangent",
      "sld_fit_sphere",
      "sld_sphere_center"
    ]
  },
  "box": {
    "key": "box",
    "title": "Box",
    "trTitle": "Kutu & Prizma Katı Araçları",
    "count": 5,
    "subIds": [
      "sld_box_diagonal",
      "sld_box_3pt",
      "sld_box_vertical",
      "sld_box_center",
      "sld_box_std"
    ]
  },
  "extrude_planar": {
    "key": "extrude_planar",
    "title": "Extrude Planar",
    "trTitle": "Düzlemsel Eğriden Katı Yükseltme",
    "count": 4,
    "subIds": [
      "sld_extrude_planar_along_crv",
      "sld_extrude_planar_to_point",
      "sld_extrude_planar_tapered",
      "sld_extrude_planar_straight"
    ]
  },
  "cone": {
    "key": "cone",
    "title": "Cone",
    "trTitle": "Koni & Kesik Koni Modelleme",
    "count": 5,
    "subIds": [
      "sld_cone_2pt",
      "sld_cone_3pt",
      "sld_truncated_cone",
      "sld_truncated_cone_2pt",
      "sld_cone_std"
    ]
  },
  "ellipsoid": {
    "key": "ellipsoid",
    "title": "Ellipsoid",
    "trTitle": "Elipsoid Katı Araçları",
    "count": 3,
    "subIds": [
      "sld_ellipsoid_diameter",
      "sld_ellipsoid_foci",
      "sld_ellipsoid_center"
    ]
  },
  "paraboloid": {
    "key": "paraboloid",
    "title": "Paraboloid",
    "trTitle": "Paraboloid Çanak Araçları",
    "count": 2,
    "subIds": [
      "sld_paraboloid_std",
      "sld_paraboloid_focus"
    ]
  },
  "extrude_surface_1": {
    "key": "extrude_surface_1",
    "title": "Extrude Surface",
    "trTitle": "Yüzeyden Katı Yükseltme (Extrude Srf)",
    "count": 4,
    "subIds": [
      "sld_extrude_srf_along_crv",
      "sld_extrude_srf_to_point",
      "sld_extrude_srf_tapered",
      "sld_extrude_srf_straight"
    ]
  },
  "extrude_surface_2": {
    "key": "extrude_surface_2",
    "title": "Extrude Surface (Normal)",
    "trTitle": "Yüzey Normaline Dik Katı Yükseltme",
    "count": 4,
    "subIds": [
      "sld_extrude_srf_norm_along_crv",
      "sld_extrude_srf_norm_to_point",
      "sld_extrude_srf_norm_tapered",
      "sld_extrude_srf_norm_straight"
    ]
  },
  "fillet_edge": {
    "cmdOptions": [{"name": "NextRadius", "desc": "Radyus Yarıçapı: Kavisin milimetrik büyüklüğü (parmak içi için min 0.50 mm)."}, {"name": "ChainEdges", "desc": "Zincirleme Kenar: Birbirine bağlı tüm teğet kenarları tek tıkla seçer."}],
    "cmdPrompt": "Command: _FilletEdge\nSelect edges to fillet ( NextRadius=0.50  ChainEdges=Yes ):",
    "key": "fillet_edge",
    "title": "Fillet Edge",
    "trTitle": "Katı Kenar Yuvarlatma & Pah Kırma",
    "count": 3,
    "subIds": [
      "sld_blend_edge",
      "sld_chamfer_edge",
      "sld_fillet_edge"
    ]
  },
  "edit_faces": {
    "key": "edit_faces",
    "title": "Edit Faces",
    "trTitle": "Katı Yüzey Düzenleme Araçları",
    "count": 7,
    "subIds": [
      "sld_move_face_to_pt",
      "sld_fold_face",
      "sld_merge_face",
      "sld_merge_all_faces",
      "sld_split_face",
      "sld_move_untrimmed_face",
      "sld_move_face"
    ]
  },
  "edit_holes": {
    "key": "edit_holes",
    "title": "Edit Holes",
    "trTitle": "Katı Delik Açma & Düzenleme Araçları",
    "count": 10,
    "subIds": [
      "sld_place_hole",
      "sld_revolve_hole",
      "sld_round_hole",
      "sld_copy_hole",
      "sld_move_hole",
      "sld_rotate_hole",
      "sld_delete_hole",
      "sld_array_hole",
      "sld_array_hole_polar",
      "sld_make_hole"
    ]
  }
};

const solidCommandsCatalog = {
  "msr_objects": {
    "id": "msr_objects",
    "name": "MSR Objects",
    "trName": "MatrixGold Parametrik Taşı-Döndür-Ölçekle",
    "meaning": "MatrixGold Parametrik Taşı-Döndür-Ölçekle",
    "shortDesc": "Parametrik takı parçalarını (taş, tırnak, kulp) koordinat bazlı hızlı ölçekler ve konumlandırır.",
    "icon": "icons/solid/ribbon/sld_msr_objects.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MSRObjects",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MSRObjects",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Tırnak boyunu ve kadeh yüksekliğini gumball kullanmadan hassas sayısal değerlerle ayarlar.",
    "ttsText": "MSR Objects komutu. Türkçe anlamı: MatrixGold Parametrik Taşı-Döndür-Ölçekle. Parametrik takı parçalarını (taş, tırnak, kulp) koordinat bazlı hızlı ölçekler ve konumlandırır. Püf noktası: Tırnak boyunu ve kadeh yüksekliğini gumball kullanmadan hassas sayısal değerlerle ayarlar."
  },
  "boolean_diff": {
    "cmdOptions": [{"name": "DeleteInput=Yes", "desc": "Bıçağı Sil: Kesim bittikten sonra bıçak nesnesini silerek sadece açılan temiz yuvayı bırakır."}, {"name": "DeleteInput=No", "desc": "Bıçağı Koru: Bıçağı silmeden sahnede tutar."}],
    "cmdPrompt": "Command: _BooleanDifference\nSelect first set of polysurfaces (Ana gövdeyi seçin):\nSelect second set of polysurfaces (Kesici bıçağı seçin) ( DeleteInput=Yes ):",
    "id": "boolean_diff",
    "name": "Boolean Difference",
    "trName": "Katı Fark / Çıkarma (Boolean)",
    "meaning": "Katı Fark / Çıkarma (Boolean)",
    "shortDesc": "Öğrenci Adımları: 1. İçinden parça çıkarılacak ana katıyı (yüzük kolu veya taş kasası) seçip Boolean Difference simgesine Sol Tıklayın. 2. Kesici bıçağı (örn: taş kesicisi veya hafifletme gövdesi) seçin. 3. Enter'a (veya Sağ Tık / Space tuşuna) basın. Bıçak kaybolur ve ana montürün içinde kusursuz yuva boşluğu açılır.",
    "icon": "icons/solid/ribbon/sld_boolean_diff.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BooleanDifference",
    "mouseAction": "Sol Tık: Katıdan parça çıkarır (Boolean Difference) | Sağ Tık: Son Boolean modunu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanDifference",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kuyumcunun ekmek teknesidir! Taş yuvası açma, astar boşaltma ve kilit kanalı açma bu komutla yapılır. İki katı birbirine sadece teğet değiyorsa Boolean hata verebilir; kesici bıçağın ana katının dışına en az 0.10 mm taşması altın kuraldır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür)!",
    "ttsText": "Boolean Difference komutu. Katıdan başka bir katıyı çıkararak boşluk ve yuva açar. Ana katıyı seçip Enter'a basın, ardından kesici bıçağı seçip Enter veya Sağ Tık yapın."
  },
  "boolean_inters": {
    "cmdOptions": [{"name": "DeleteInput", "desc": "Giriş nesnelerini siler."}],
    "cmdPrompt": "Command: _BooleanIntersection\nSelect first and second polysurfaces:",
    "id": "boolean_inters",
    "name": "Boolean Intersection",
    "trName": "Katı Kesişim (Boolean)",
    "meaning": "Katı Kesişim (Boolean)",
    "shortDesc": "Öğrenci Adımları: 1. Kesişen iki katı seçin. 2. Boolean Intersection simgesine Sol Tıklayın. 3. Enter'a (veya Sağ Tık / Space tuşuna) basın. Sadece iki katının birbiriyle çakıştığı ortak hacim kalır, dışarıda kalan kısımlar silinir.",
    "icon": "icons/solid/ribbon/sld_boolean_inters.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BooleanIntersection",
    "mouseAction": "Sol Tık: Ortak kesişim katısını çıkarır | Sağ Tık: Son modu tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanIntersection",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: İki farklı görünüşten katı yükseltip tam kesişimlerini alarak karmaşık fantezi yüzük kasaları türetmede kullanılır.",
    "ttsText": "Boolean Intersection komutu. İki katının ortak kesişim bölgesinden katı gövde türetir."
  },
  "boolean_union": {
    "cmdOptions": [{"name": "DeleteInput", "desc": "Birleştirilen eski parçaları silip tek parça katıyı sahnede bırakır."}],
    "cmdPrompt": "Command: _BooleanUnion\nSelect polysurfaces to union:",
    "id": "boolean_union",
    "name": "Boolean Union",
    "trName": "Katı Birleştirme (Boolean)",
    "meaning": "Katı Birleştirme (Boolean)",
    "shortDesc": "Öğrenci Adımları: 1. Birleştirilecek temas halindeki katı parçaları (yüzük kolu, tırnaklar ve kadeh) seçin. 2. Boolean Union simgesine Sol Tıklayın. 3. Enter'a (veya Sağ Tık / Space tuşuna) basın. Parçaların birbirinin içine giren iç duvarları silinir ve tek parça döküme hazır manifold katı elde edilir.",
    "icon": "icons/solid/ribbon/sld_boolean_union.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BooleanUnion",
    "mouseAction": "Sol Tık: Katıları birleştirir | Sağ Tık: Son seçimi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanUnion",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Döküme (3D baskıya) dosya göndermeden önce tüm montür mutlaka Boolean Union ile tek parça yapılmalıdır! İç içe geçmiş ayrık katılar reçine yazıcıda dilimleme hatası yapar ve dökümde hava boşluğu oluşturur.",
    "ttsText": "Boolean Union komutu. Birbirine temas eden katıları döküm için tek parça haline birleştirir."
  },
  "obj_on_curve": {
    "id": "obj_on_curve",
    "name": "Object On Curve",
    "trName": "Eğri Boyunca Nesne Dizme",
    "meaning": "Eğri Boyunca Nesne Dizme",
    "shortDesc": "Katı nesneleri (küre, tırnak, motif) bir ray eğrisi boyunca eşit veya kademeli mesafelerle dizer.",
    "icon": "icons/solid/ribbon/sld_obj_on_curve.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ObjectOnCurve",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ObjectOnCurve",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Eternity yüzük kolları ve gerdanlık zincirlerinde hạt ve motif dizilimini kusursuzlaştırır.",
    "ttsText": "Object On Curve komutu. Türkçe anlamı: Eğri Boyunca Nesne Dizme. Katı nesneleri (küre, tırnak, motif) bir ray eğrisi boyunca eşit veya kademeli mesafelerle dizer. Püf noktası: Eternity yüzük kolları ve gerdanlık zincirlerinde hạt ve motif dizilimini kusursuzlaştırır."
  },
  "pipe_mg": {
    "cmdOptions": [{"name": "Radius", "desc": "Yarıçap: Tel veya borunun milimetrik et kalınlığı."}, {"name": "Cap=Round", "desc": "Kubbeli Uç: Borunun ucunu yuvarlak pürüzsüz kubbe ile kapatır (tırnak kafaları için şarttır)."}, {"name": "Cap=Flat", "desc": "Düz Uç: Ucu düz kesitle kapatır."}],
    "cmdPrompt": "Command: _Pipe\nSelect rail curve for pipe ( Radius=0.40  Cap=Round  Thick=No ):",
    "id": "pipe_mg",
    "name": "Pipe (MG)",
    "trName": "Parametrik Boru Modelleme",
    "meaning": "Parametrik Boru Modelleme",
    "shortDesc": "Öğrenci Adımları: 1. Kılavuz eğriyi seçin. 2. Pipe simgesine Sol Tıklayın. 3. Yarıçapı (Radius) girin (örn: 0.80 mm tırnak için Radius: 0.40 mm). 4. Cap=Round (Yuvarlak kubbe uç) seçip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/solid/ribbon/sld_pipe_mg.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Pipe(MG)",
    "mouseAction": "Sol Tık: Eğri etrafına silindirik boru/tel örer | Sağ Tık: Değişken çaplı boru",
    "commandSteps": [
      {
        "prompt": "Command: _Pipe(MG)",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tırnak, telkari teli ve küpe pimi yapmanın en hızlı yoludur. Pırlanta tırnaklarında Cap=Round seçmek ciladan sonra tırnağın giysilere takılmasını önler!",
    "ttsText": "Pipe komutu. Eğri etrafına tel veya boru katısı örer. Tırnak çizerken Cap seçeneğini Round yaparak yuvarlak uç elde edin."
  },
  "rope": {
    "cmdOptions": [{"name": "Strands", "desc": "Tel Sayısı: 2'li veya 3'lü sarmal tel sayısı."}, {"name": "WireRadius", "desc": "Tel Kalınlığı: Her bir telin yarıçapı."}],
    "cmdPrompt": "Command: _RopeBuilder\nSelect rail curve ( WireRadius=0.30  Strands=2  Twist=15 ):",
    "id": "rope",
    "name": "Rope",
    "trName": "Burgulu Tel / Halat Modelleme",
    "meaning": "Burgulu Tel / Halat Modelleme",
    "shortDesc": "Öğrenci Adımları: 1. Kılavuz eğriyi seçin. 2. Rope simgesine Sol Tıklayın. 3. Tel kalınlığını (Wire Size: örn: 0.60 mm) ve burgu adımını (Twist) girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; eğri etrafına klasik burgulu altın halat tel sarılır.",
    "icon": "icons/solid/ribbon/sld_rope.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Rope",
    "mouseAction": "Sol Tık: Burgulu halat tel motorunu açar | Sağ Tık: Son halat ayarını uygular",
    "commandSteps": [
      {
        "prompt": "Command: _Rope",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük kollarının kenarlarına veya taş kasalarının etrafına çerçeve olarak atılan klasik burgu tel desenidir; maden tel kalınlığı 0.50 mm altına düşürülmemelidir.",
    "ttsText": "Rope komutu. Çizgi etrafına burgulu altın halat tel örer."
  },
  "obj_on_surface": {
    "id": "obj_on_surface",
    "name": "Object On Surface",
    "trName": "Yüzey Üzerine Nesne Dağıtma",
    "meaning": "Yüzey Üzerine Nesne Dağıtma",
    "shortDesc": "Katı tırnak veya süsleme motiflerini 3D eğrisel yüzeyin üzerine akıllıca oturtur.",
    "icon": "icons/solid/ribbon/sld_obj_on_surface.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ObjectOnSurface",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ObjectOnSurface",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kubbe yüzüklerde taş aralarına tane (grain) ve dekoratif küreler yerleştirmede kullanılır.",
    "ttsText": "Object On Surface komutu. Türkçe anlamı: Yüzey Üzerine Nesne Dağıtma. Katı tırnak veya süsleme motiflerini 3D eğrisel yüzeyin üzerine akıllıca oturtur. Püf noktası: Kubbe yüzüklerde taş aralarına tane (grain) ve dekoratif küreler yerleştirmede kullanılır."
  },
  "boolean": {
    "id": "boolean",
    "name": "Boolean",
    "trName": "Boolean Katı Araçları",
    "meaning": "Boolean Katı Araçları",
    "shortDesc": "Union, Difference, Intersection ve Split komutlarını toplayan çekmece aracı.",
    "icon": "icons/solid/ribbon/sld_boolean.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BooleanUnion",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanUnion",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Boolean komutu. Türkçe anlamı: Boolean Katı Araçları. Union, Difference, Intersection ve Split komutlarını toplayan çekmece aracı. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sphere": {
    "id": "sphere",
    "name": "Sphere",
    "trName": "Küre Katı Araçları",
    "meaning": "Küre Katı Araçları",
    "shortDesc": "Çap, yarıçap, teğet ve nokta bulutundan kusursuz küreler üretir.",
    "icon": "icons/solid/ribbon/sld_sphere.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Sphere",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "İnci yuvaları ve tırnak başı yuvarlatmalarında referans küre oluşturur.",
    "ttsText": "Sphere komutu. Türkçe anlamı: Küre Katı Araçları. Çap, yarıçap, teğet ve nokta bulutundan kusursuz küreler üretir. Püf noktası: İnci yuvaları ve tırnak başı yuvarlatmalarında referans küre oluşturur."
  },
  "box": {
    "id": "box",
    "name": "Box",
    "trName": "Kutu / Prizma Katı Araçları",
    "meaning": "Kutu / Prizma Katı Araçları",
    "shortDesc": "Köşeden köşeye, 3 noktadan veya merkezden katı blok prizmalar oluşturur.",
    "icon": "icons/solid/ribbon/sld_box.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Box",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Box",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Taş kasası taban blokları ve döküm besleme yolları oluşturmada kullanılır.",
    "ttsText": "Box komutu. Türkçe anlamı: Kutu / Prizma Katı Araçları. Köşeden köşeye, 3 noktadan veya merkezden katı blok prizmalar oluşturur. Püf noktası: Taş kasası taban blokları ve döküm besleme yolları oluşturmada kullanılır."
  },
  "extrude_planar": {
    "id": "extrude_planar",
    "name": "Extrude Planar",
    "trName": "Düzlemsel Eğriden Katı Yükseltme",
    "meaning": "Düzlemsel Eğriden Katı Yükseltme",
    "shortDesc": "2D kapalı eğriyi dik veya açılı yükselterek kapalı katı üretir.",
    "icon": "icons/solid/ribbon/sld_extrude_planar.png",
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
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Katı olması için Solid=Yes seçeneği açık olmalıdır.",
    "ttsText": "Extrude Planar komutu. Türkçe anlamı: Düzlemsel Eğriden Katı Yükseltme. 2D kapalı eğriyi dik veya açılı yükselterek kapalı katı üretir. Püf noktası: Katı olması için Solid=Yes seçeneği açık olmalıdır."
  },
  "cylinder": {
    "cmdOptions": [{"name": "Radius", "desc": "Taban yarıçapı."}, {"name": "Solid=Yes", "desc": "İçi dolu katı gövde."}],
    "cmdPrompt": "Command: _Cylinder\nBase of cylinder ( Radius  Direction  Vertical ):",
    "id": "cylinder",
    "name": "Cylinder",
    "trName": "Silindir Katı",
    "meaning": "Silindir Katı",
    "shortDesc": "Öğrenci Adımları: 1. Cylinder simgesine Sol Tıklayın. 2. Taban merkezini tıklayın veya F4 yazın. 3. Yarıçapı girin (örn: 0.40 mm). 4. Yüksekliği girip Enter'a (veya Sağ Tık / Space tuşuna) basın.",
    "icon": "icons/solid/ribbon/sld_cylinder.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Cylinder",
    "mouseAction": "Sol Tık: Silindir katı başlatır | Sağ Tık: İki uçtan silindir",
    "commandSteps": [
      {
        "prompt": "Command: _Cylinder",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Küpe pimleri, menteşe milleri ve düz tırnak sapları üretmek için en temiz katı geometridir.",
    "ttsText": "Cylinder komutu. Taban yarıçapı ve yükseklik ile silindirik katı gövde çizer."
  },
  "text": {
    "id": "text",
    "name": "Text",
    "trName": "3D Katı Yazı / Gravür",
    "meaning": "3D Katı Yazı / Gravür",
    "shortDesc": "Yazı tiplerini katı harflere veya oyma fasetlerine dönüştürür.",
    "icon": "icons/solid/ribbon/sld_text.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_TextObject",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _TextObject",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Yüzük içi damga (925, 585, 750) ve isim gravürlerinde Solid seçeneğiyle kullanılır.",
    "ttsText": "Text komutu. Türkçe anlamı: 3D Katı Yazı / Gravür. Yazı tiplerini katı harflere veya oyma fasetlerine dönüştürür. Püf noktası: Yüzük içi damga (925, 585, 750) ve isim gravürlerinde Solid seçeneğiyle kullanılır."
  },
  "cone": {
    "id": "cone",
    "name": "Cone",
    "trName": "Koni & Kesik Koni Katı",
    "meaning": "Koni & Kesik Koni Katı",
    "shortDesc": "Tabanı dairesel tepe noktası sivri veya kesik koni geometrileri oluşturur.",
    "icon": "icons/solid/ribbon/sld_cone.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Cone",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Cone",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Konik taş yuvaları ve tırnak dipleri oluşturmada temel formdur.",
    "ttsText": "Cone komutu. Türkçe anlamı: Koni & Kesik Koni Katı. Tabanı dairesel tepe noktası sivri veya kesik koni geometrileri oluşturur. Püf noktası: Konik taş yuvaları ve tırnak dipleri oluşturmada temel formdur."
  },
  "ellipsoid": {
    "id": "ellipsoid",
    "name": "Ellipsoid",
    "trName": "Elipsoid Katı",
    "meaning": "Elipsoid Katı",
    "shortDesc": "Üç eksende farklı yarıçaplara sahip basık veya uzatılmış katı küre üretir.",
    "icon": "icons/solid/ribbon/sld_ellipsoid.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Ellipsoid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Ellipsoid",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Markiz ve oval taş astar tabanlarında dolgu hacmi oluşturur.",
    "ttsText": "Ellipsoid komutu. Türkçe anlamı: Elipsoid Katı. Üç eksende farklı yarıçaplara sahip basık veya uzatılmış katı küre üretir. Püf noktası: Markiz ve oval taş astar tabanlarında dolgu hacmi oluşturur."
  },
  "paraboloid": {
    "id": "paraboloid",
    "name": "Paraboloid",
    "trName": "Paraboloid Çanak Katı",
    "meaning": "Paraboloid Çanak Katı",
    "shortDesc": "Odak noktası ve tabanı olan parabolik çanak katı gövde oluşturur.",
    "icon": "icons/solid/ribbon/sld_paraboloid.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Paraboloid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Paraboloid",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Fantezi kadeh yuvalarda derinlikli çanak formu verir.",
    "ttsText": "Paraboloid komutu. Türkçe anlamı: Paraboloid Çanak Katı. Odak noktası ve tabanı olan parabolik çanak katı gövde oluşturur. Püf noktası: Fantezi kadeh yuvalarda derinlikli çanak formu verir."
  },
  "tube": {
    "id": "tube",
    "name": "Tube",
    "trName": "Boru / Halka Katı (Tube)",
    "meaning": "Boru / Halka Katı (Tube)",
    "shortDesc": "İç ve dış yarıçapı olan etli silindirik boru katısı üretir.",
    "icon": "icons/solid/ribbon/sld_tube.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Tube",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Tube",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Düz alyans kasası ve fantezi rondela modelleri için tek tıkla hazır katıdır.",
    "ttsText": "Tube komutu. Türkçe anlamı: Boru / Halka Katı (Tube). İç ve dış yarıçapı olan etli silindirik boru katısı üretir. Püf noktası: Düz alyans kasası ve fantezi rondela modelleri için tek tıkla hazır katıdır."
  },
  "pipe_rhino": {
    "cmdOptions": [{"name": "Radius", "desc": "Boru yarıçapı."}, {"name": "Cap=Flat/Round", "desc": "Kapak tipi."}],
    "cmdPrompt": "Command: _Pipe\nSelect rail curve:",
    "id": "pipe_rhino",
    "name": "Pipe",
    "trName": "Rhino Klasik Boru (Pipe)",
    "meaning": "Rhino Klasik Boru (Pipe)",
    "shortDesc": "Öğrenci Adımları: 1. Eğriyi seçin. 2. Pipe simgesine Sol Tıklayın. 3. Başlangıç ve bitiş yarıçaplarını girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak boru katısını tamamlayın.",
    "icon": "icons/solid/ribbon/sld_pipe_rhino.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Pipe",
    "mouseAction": "Sol Tık: Boru katısı açar | Sağ Tık: Son boru ayarlarını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Pipe",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kademeli kalınlaşan kordon ve kelepçe tellerinde başlangıç ve bitişe farklı yarıçaplar vererek konik boru elde edebilirsiniz.",
    "ttsText": "Pipe komutu. Çizgi etrafına silindirik katı gövde örer."
  },
  "multi_pipe": {
    "id": "multi_pipe",
    "name": "Multi Pipe",
    "trName": "Çoklu Boru / Kafes Ağı (MultiPipe)",
    "meaning": "Çoklu Boru / Kafes Ağı (MultiPipe)",
    "shortDesc": "SubD tabanlı birbirine bağlanan pürüzsüz çoklu boru ağları üretir.",
    "icon": "icons/solid/ribbon/sld_multi_pipe.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MultiPipe",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MultiPipe",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Organik filigran kafesler ve ağaç dalı takı konseptlerinde köşe birleşimlerini teğet kaynatır.",
    "ttsText": "Multi Pipe komutu. Türkçe anlamı: Çoklu Boru / Kafes Ağı (MultiPipe). SubD tabanlı birbirine bağlanan pürüzsüz çoklu boru ağları üretir. Püf noktası: Organik filigran kafesler ve ağaç dalı takı konseptlerinde köşe birleşimlerini teğet kaynatır."
  },
  "extract_surface": {
    "id": "extract_surface",
    "name": "Extract Surface",
    "trName": "Katıdan Yüzey Ayır",
    "meaning": "Katıdan Yüzey Ayır",
    "shortDesc": "Çoklu yüzeyli katıdan seçilen tek bir yüzeyi kopararak bağımsız yapar.",
    "icon": "icons/solid/ribbon/sld_extract_surface.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtractSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Katının sadece astarını veya üst tablasını ayrı düzenlemek istediğinizde kullanılır.",
    "ttsText": "Extract Surface komutu. Türkçe anlamı: Katıdan Yüzey Ayır. Çoklu yüzeyli katıdan seçilen tek bir yüzeyi kopararak bağımsız yapar. Püf noktası: Katının sadece astarını veya üst tablasını ayrı düzenlemek istediğinizde kullanılır."
  },
  "cap_planar": {
    "cmdOptions": [{"name": "PlanarOnly", "desc": "Sadece düzlemsel (planar) açık delikleri kapatır."}],
    "cmdPrompt": "Command: _Cap\nSelect polysurfaces to cap:",
    "id": "cap_planar",
    "name": "Cap Planar",
    "trName": "Düzlemsel Açık Uçları Kapat (Cap)",
    "meaning": "Düzlemsel Açık Uçları Kapat (Cap)",
    "shortDesc": "Öğrenci Adımları: 1. Uçları veya delikleri açık kalmış yüzey/katı modelini seçin. 2. Cap Planar Holes simgesine Sol Tıklayın. 3. Enter'a (veya Sağ Tık / Space tuşuna) basın. Tüm düzlemsel delikler tek tıkla düz kapaklarla kapatılarak model kapalı katı (closed solid polysurface) haline gelir.",
    "icon": "icons/solid/ribbon/sld_cap_planar.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Cap",
    "mouseAction": "Sol Tık: Düzlemsel açık delikleri kapatır | Sağ Tık: Son seçimi tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Cap",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Açık boruların ve yüzük kollarının dökümde katı olabilmesi için Cap vazgeçilmezdir. Delik düzlemsel değilse Cap çalışmaz; o durumda Planar veya Patch yüzey örülmelidir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Cap Planar Holes komutu. Katıların açık kalan düzlemsel deliklerini kapatıp tam katı yapar."
  },
  "shell": {
    "id": "shell",
    "name": "Shell",
    "trName": "Katı Boşaltma / Kabuk Yapma (Shell)",
    "meaning": "Katı Boşaltma / Kabuk Yapma (Shell)",
    "shortDesc": "Katı nesnenin içini oyup belirlenen et kalınlığında içi boşaltılmış kabuk üretir.",
    "icon": "icons/solid/ribbon/sld_shell.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Shell",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Shell",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Döküm gramajını düşürmek ve altın maliyetini hafifletmek için içi boş kasa üretir.",
    "ttsText": "Shell komutu. Türkçe anlamı: Katı Boşaltma / Kabuk Yapma (Shell). Katı nesnenin içini oyup belirlenen et kalınlığında içi boşaltılmış kabuk üretir. Püf noktası: Döküm gramajını düşürmek ve altın maliyetini hafifletmek için içi boş kasa üretir."
  },
  "slab": {
    "id": "slab",
    "name": "Slab",
    "trName": "Poligonal Katı Plaka (Slab)",
    "meaning": "Poligonal Katı Plaka (Slab)",
    "shortDesc": "Çizgi veya poligon etrafına belirlenen kalınlık ve yükseklikte katı duvar plakası çıkarır.",
    "icon": "icons/solid/ribbon/sld_slab.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Slab",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Slab",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Slab komutu. Türkçe anlamı: Poligonal Katı Plaka (Slab). Çizgi veya poligon etrafına belirlenen kalınlık ve yükseklikte katı duvar plakası çıkarır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "torus": {
    "id": "torus",
    "name": "Torus",
    "trName": "Halka / Simit Katı (Torus)",
    "meaning": "Halka / Simit Katı (Torus)",
    "shortDesc": "Dairesel kesitli simit halka katı geometrisi üretir.",
    "icon": "icons/solid/ribbon/sld_torus.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Torus",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Torus",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Halka küpeler ve kolye zincir kilit halkalarında temel katıdır.",
    "ttsText": "Torus komutu. Türkçe anlamı: Halka / Simit Katı (Torus). Dairesel kesitli simit halka katı geometrisi üretir. Püf noktası: Halka küpeler ve kolye zincir kilit halkalarında temel katıdır."
  },
  "extrude_surface_1": {
    "id": "extrude_surface_1",
    "name": "Extrude Surface",
    "trName": "Yüzeyden Katı Yükseltme",
    "meaning": "Yüzeyden Katı Yükseltme",
    "shortDesc": "Mevcut bir yüzeyi kalınlaştırarak katı gövdeye dönüştürür.",
    "icon": "icons/solid/ribbon/sld_extrude_surface_1.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtrudeSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Surface komutu. Türkçe anlamı: Yüzeyden Katı Yükseltme. Mevcut bir yüzeyi kalınlaştırarak katı gövdeye dönüştürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "extrude_surface_2": {
    "id": "extrude_surface_2",
    "name": "Extrude Surface (Normal)",
    "trName": "Yüzey Normaline Yükselt",
    "meaning": "Yüzey Normaline Yükselt",
    "shortDesc": "Eğri yüzeyleri kendi bombeli yönlerine doğru paralel etlendirir.",
    "icon": "icons/solid/ribbon/sld_extrude_surface_2.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtrudeSrfNormal",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfNormal",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Surface (Normal) komutu. Türkçe anlamı: Yüzey Normaline Yükselt. Eğri yüzeyleri kendi bombeli yönlerine doğru paralel etlendirir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "boss": {
    "id": "boss",
    "name": "Boss",
    "trName": "Yüzeye Çıkıntı / Yükselti Ekle (Boss)",
    "meaning": "Yüzeye Çıkıntı / Yükselti Ekle (Boss)",
    "shortDesc": "Katı bir yüzey üzerine kapalı profilden yükselen silindirik veya prizmatik kule ekler.",
    "icon": "icons/solid/ribbon/sld_boss.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Boss",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Boss",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kasa arkası vida kuleleri ve kilit yuvası yükseltmelerinde kullanılır.",
    "ttsText": "Boss komutu. Türkçe anlamı: Yüzeye Çıkıntı / Yükselti Ekle (Boss). Katı bir yüzey üzerine kapalı profilden yükselen silindirik veya prizmatik kule ekler. Püf noktası: Kasa arkası vida kuleleri ve kilit yuvası yükseltmelerinde kullanılır."
  },
  "rib": {
    "id": "rib",
    "name": "Rib",
    "trName": "Destek Kirişi / Feder (Rib)",
    "meaning": "Destek Kirişi / Feder (Rib)",
    "shortDesc": "İki yüzey veya duvar arasına takviye güçlendirme kanadı (feder) ekler.",
    "icon": "icons/solid/ribbon/sld_rib.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Rib",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Rib",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "İnce kollarda bükülmeyi önlemek için iç kısma mikro takviye federi kurar.",
    "ttsText": "Rib komutu. Türkçe anlamı: Destek Kirişi / Feder (Rib). İki yüzey veya duvar arasına takviye güçlendirme kanadı (feder) ekler. Püf noktası: İnce kollarda bükülmeyi önlemek için iç kısma mikro takviye federi kurar."
  },
  "fillet_edge": {
    "id": "fillet_edge",
    "name": "Fillet Edge",
    "trName": "Katı Kenar Yuvarlatma (FilletEdge)",
    "meaning": "Katı Kenar Yuvarlatma (FilletEdge)",
    "shortDesc": "Katı kenarlarına teğet dairesel radyus veya pah kırar.",
    "icon": "icons/solid/ribbon/sld_fillet_edge.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_FilletEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _FilletEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumcu cilasında parmağı rahatsız etmeyecek iç kavisler için R=0.35 - 0.50mm idealdir.",
    "ttsText": "Fillet Edge komutu. Türkçe anlamı: Katı Kenar Yuvarlatma (FilletEdge). Katı kenarlarına teğet dairesel radyus veya pah kırar. Püf noktası: Kuyumcu cilasında parmağı rahatsız etmeyecek iç kavisler için R=0.35 - 0.50mm idealdir."
  },
  "edit_faces": {
    "id": "edit_faces",
    "name": "Edit Faces",
    "trName": "Katı Yüzleri Düzenleme",
    "meaning": "Katı Yüzleri Düzenleme",
    "shortDesc": "Katı gövdenin yüzlerini taşıma, katlama, kaynatma ve bölme araçları.",
    "icon": "icons/solid/ribbon/sld_edit_faces.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EditFaces",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EditFaces",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Edit Faces komutu. Türkçe anlamı: Katı Yüzleri Düzenleme. Katı gövdenin yüzlerini taşıma, katlama, kaynatma ve bölme araçları. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "edit_holes": {
    "id": "edit_holes",
    "name": "Edit Holes",
    "trName": "Katı Delik Araçları",
    "meaning": "Katı Delik Araçları",
    "shortDesc": "Katı üzerine delik delme, delikleri taşıma, çoğaltma ve silme takımı.",
    "icon": "icons/solid/ribbon/sld_edit_holes.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EditHoles",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EditHoles",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Edit Holes komutu. Türkçe anlamı: Katı Delik Araçları. Katı üzerine delik delme, delikleri taşıma, çoğaltma ve silme takımı. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "wire_cut": {
    "id": "wire_cut",
    "name": "Wire Cut",
    "trName": "Tel Kesim Katı Bölme (WireCut)",
    "meaning": "Tel Kesim Katı Bölme (WireCut)",
    "shortDesc": "Eğri profilini sıcak tel gibi katının içinden geçirerek kesip çıkarır.",
    "icon": "icons/solid/ribbon/sld_wire_cut.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_WireCut",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _WireCut",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Yüzük gövdesine yan pencereler açmak ve fantezi ajur kesimleri için kusursuzdur.",
    "ttsText": "Wire Cut komutu. Türkçe anlamı: Tel Kesim Katı Bölme (WireCut). Eğri profilini sıcak tel gibi katının içinden geçirerek kesip çıkarır. Püf noktası: Yüzük gövdesine yan pencereler açmak ve fantezi ajur kesimleri için kusursuzdur."
  },
  "edit_edges": {
    "id": "edit_edges",
    "name": "Edit Edges",
    "trName": "Katı Kenarları Düzenleme",
    "meaning": "Katı Kenarları Düzenleme",
    "shortDesc": "Katının kenar sürekliliğini ve dikişlerini düzenleme aracı.",
    "icon": "icons/solid/ribbon/sld_edit_edges.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_EditEdges",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _EditEdges",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Edit Edges komutu. Türkçe anlamı: Katı Kenarları Düzenleme. Katının kenar sürekliliğini ve dikişlerini düzenleme aracı. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_boolean_union": {
    "id": "sld_boolean_union",
    "name": "Boolean Union",
    "trName": "Katı Birleştirme",
    "meaning": "Katı Birleştirme",
    "shortDesc": "Seçilen tüm katı gövdeleri tek parça kapalı katıya dönüştürür.",
    "icon": "icons/solid/subtools/sld_boolean_union.png",
    "isFlyoutSub": true,
    "parentId": "boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_BooleanUnion",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanUnion",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Boolean Union komutu. Türkçe anlamı: Katı Birleştirme. Seçilen tüm katı gövdeleri tek parça kapalı katıya dönüştürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_boolean_intersection": {
    "id": "sld_boolean_intersection",
    "name": "Boolean Intersection",
    "trName": "Katı Kesişim",
    "meaning": "Katı Kesişim",
    "shortDesc": "Katıların ortak çakışan hacmini korur, dış fazlalıkları atar.",
    "icon": "icons/solid/subtools/sld_boolean_intersection.png",
    "isFlyoutSub": true,
    "parentId": "boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_BooleanIntersection",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanIntersection",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Boolean Intersection komutu. Türkçe anlamı: Katı Kesişim. Katıların ortak çakışan hacmini korur, dış fazlalıkları atar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_boolean_two_objects": {
    "id": "sld_boolean_two_objects",
    "name": "Boolean 2 Objects",
    "trName": "2 Nesne Arası İnteraktif Boolean",
    "meaning": "2 Nesne Arası İnteraktif Boolean",
    "shortDesc": "İki nesne arasındaki tüm birleşim ve çıkarma kombinasyonlarını interaktif önizler.",
    "icon": "icons/solid/subtools/sld_boolean_two_objects.png",
    "isFlyoutSub": true,
    "parentId": "boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_Boolean2Objects",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Boolean2Objects",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Boolean 2 Objects komutu. Türkçe anlamı: 2 Nesne Arası İnteraktif Boolean. İki nesne arasındaki tüm birleşim ve çıkarma kombinasyonlarını interaktif önizler. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_boolean_split": {
    "id": "sld_boolean_split",
    "name": "Boolean Split",
    "trName": "Boolean Bölme",
    "meaning": "Boolean Bölme",
    "shortDesc": "Katıyı diğer katının hacim sınırları boyunca parçalara ayırır ama silmez.",
    "icon": "icons/solid/subtools/sld_boolean_split.png",
    "isFlyoutSub": true,
    "parentId": "boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_BooleanSplit",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanSplit",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Boolean Split komutu. Türkçe anlamı: Boolean Bölme. Katıyı diğer katının hacim sınırları boyunca parçalara ayırır ama silmez. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_boolean_create_solid": {
    "id": "sld_boolean_create_solid",
    "name": "Create Solid",
    "trName": "Kesişen Yüzeylerden Katı Üret",
    "meaning": "Kesişen Yüzeylerden Katı Üret",
    "shortDesc": "Kesişen açık yüzey gruplarının içindeki kapalı hacmi bularak katıya dönüştürür.",
    "icon": "icons/solid/subtools/sld_boolean_create_solid.png",
    "isFlyoutSub": true,
    "parentId": "boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_CreateSolid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _CreateSolid",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Create Solid komutu. Türkçe anlamı: Kesişen Yüzeylerden Katı Üret. Kesişen açık yüzey gruplarının içindeki kapalı hacmi bularak katıya dönüştürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_boolean_difference": {
    "id": "sld_boolean_difference",
    "name": "Boolean Difference",
    "trName": "Katı Fark / Çıkarma",
    "meaning": "Katı Fark / Çıkarma",
    "shortDesc": "Ana gövdeden kesici katıyı eksilterek oyuk oluşturur.",
    "icon": "icons/solid/subtools/sld_boolean_difference.png",
    "isFlyoutSub": true,
    "parentId": "boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_BooleanDifference",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BooleanDifference",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Boolean Difference komutu. Türkçe anlamı: Katı Fark / Çıkarma. Ana gövdeden kesici katıyı eksilterek oyuk oluşturur. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_sphere_2pt": {
    "id": "sld_sphere_2pt",
    "name": "Sphere: 2 Points",
    "trName": "2 Noktadan Küre",
    "meaning": "2 Noktadan Küre",
    "shortDesc": "Çapın iki uç noktasını tıklayarak küre çizer.",
    "icon": "icons/solid/subtools/sld_sphere_2pt.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere _2Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere _2Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Sphere: 2 Points komutu. Türkçe anlamı: 2 Noktadan Küre. Çapın iki uç noktasını tıklayarak küre çizer. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_sphere_3pt": {
    "id": "sld_sphere_3pt",
    "name": "Sphere: 3 Points",
    "trName": "3 Noktadan Küre",
    "meaning": "3 Noktadan Küre",
    "shortDesc": "Uzayda üç çevre noktasıyla küre tanımlar.",
    "icon": "icons/solid/subtools/sld_sphere_3pt.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere _3Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere _3Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Sphere: 3 Points komutu. Türkçe anlamı: 3 Noktadan Küre. Uzayda üç çevre noktasıyla küre tanımlar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_sphere_4pt": {
    "id": "sld_sphere_4pt",
    "name": "Sphere: 4 Points",
    "trName": "4 Noktadan Küre",
    "meaning": "4 Noktadan Küre",
    "shortDesc": "Dört noktadan geçen benzersiz küreyi hesaplar.",
    "icon": "icons/solid/subtools/sld_sphere_4pt.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere _4Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere _4Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Sphere: 4 Points komutu. Türkçe anlamı: 4 Noktadan Küre. Dört noktadan geçen benzersiz küreyi hesaplar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_sphere_around_crv": {
    "id": "sld_sphere_around_crv",
    "name": "Sphere: Around Curve",
    "trName": "Eğri Etrafında Küre",
    "meaning": "Eğri Etrafında Küre",
    "shortDesc": "Eğrinin merkez noktasına dik küre yerleştirir.",
    "icon": "icons/solid/subtools/sld_sphere_around_crv.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere _AroundCurve",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere _AroundCurve",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Sphere: Around Curve komutu. Türkçe anlamı: Eğri Etrafında Küre. Eğrinin merkez noktasına dik küre yerleştirir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_sphere_tangent": {
    "id": "sld_sphere_tangent",
    "name": "Sphere: Tangent",
    "trName": "Teğet Küre",
    "meaning": "Teğet Küre",
    "shortDesc": "Yüzey veya eğrilere teğet oturan küre üretir.",
    "icon": "icons/solid/subtools/sld_sphere_tangent.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere _Tangent",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere _Tangent",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Sphere: Tangent komutu. Türkçe anlamı: Teğet Küre. Yüzey veya eğrilere teğet oturan küre üretir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_fit_sphere": {
    "id": "sld_fit_sphere",
    "name": "Fit Sphere",
    "trName": "Noktalara Uyan Küre",
    "meaning": "Noktalara Uyan Küre",
    "shortDesc": "Dağınık nokta kümesine en iyi oturan küreyi hesaplar.",
    "icon": "icons/solid/subtools/sld_fit_sphere.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere _FitPoints",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere _FitPoints",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Fit Sphere komutu. Türkçe anlamı: Noktalara Uyan Küre. Dağınık nokta kümesine en iyi oturan küreyi hesaplar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_sphere_center": {
    "id": "sld_sphere_center",
    "name": "Sphere: Center, Radius",
    "trName": "Merkez & Yarıçaptan Küre",
    "meaning": "Merkez & Yarıçaptan Küre",
    "shortDesc": "Merkez noktası ve yarıçap girerek standart küre oluşturur.",
    "icon": "icons/solid/subtools/sld_sphere_center.png",
    "isFlyoutSub": true,
    "parentId": "sphere",
    "parentName": "Sphere",
    "rhinoCommand": "_Sphere",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Sphere",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Sphere: Center, Radius komutu. Türkçe anlamı: Merkez & Yarıçaptan Küre. Merkez noktası ve yarıçap girerek standart küre oluşturur. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_box_diagonal": {
    "id": "sld_box_diagonal",
    "name": "Box: Diagonal",
    "trName": "Çapraz Köşeden Kutu",
    "meaning": "Çapraz Köşeden Kutu",
    "shortDesc": "İki çapraz zemin noktası ve yükseklik ile kutu üretir.",
    "icon": "icons/solid/subtools/sld_box_diagonal.png",
    "isFlyoutSub": true,
    "parentId": "box",
    "parentName": "Box",
    "rhinoCommand": "_Box",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Box",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Box: Diagonal komutu. Türkçe anlamı: Çapraz Köşeden Kutu. İki çapraz zemin noktası ve yükseklik ile kutu üretir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_box_3pt": {
    "id": "sld_box_3pt",
    "name": "Box: 3 Points",
    "trName": "3 Noktadan Açılı Kutu",
    "meaning": "3 Noktadan Açılı Kutu",
    "shortDesc": "Genişlik, derinlik ve yükseklik yönü belirterek açılı kutu çizer.",
    "icon": "icons/solid/subtools/sld_box_3pt.png",
    "isFlyoutSub": true,
    "parentId": "box",
    "parentName": "Box",
    "rhinoCommand": "_Box _3Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Box _3Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Box: 3 Points komutu. Türkçe anlamı: 3 Noktadan Açılı Kutu. Genişlik, derinlik ve yükseklik yönü belirterek açılı kutu çizer. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_box_vertical": {
    "id": "sld_box_vertical",
    "name": "Box: Vertical",
    "trName": "Dikey Kutu",
    "meaning": "Dikey Kutu",
    "shortDesc": "Çalışma düzlemine dik kutu prizma diker.",
    "icon": "icons/solid/subtools/sld_box_vertical.png",
    "isFlyoutSub": true,
    "parentId": "box",
    "parentName": "Box",
    "rhinoCommand": "_Box _Vertical",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Box _Vertical",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Box: Vertical komutu. Türkçe anlamı: Dikey Kutu. Çalışma düzlemine dik kutu prizma diker. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_box_center": {
    "id": "sld_box_center",
    "name": "Box: Center",
    "trName": "Merkezden Kutu",
    "meaning": "Merkezden Kutu",
    "shortDesc": "Merkez noktasından simetrik genişleyen kutu prizma açar.",
    "icon": "icons/solid/subtools/sld_box_center.png",
    "isFlyoutSub": true,
    "parentId": "box",
    "parentName": "Box",
    "rhinoCommand": "_Box _Center",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Box _Center",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Box: Center komutu. Türkçe anlamı: Merkezden Kutu. Merkez noktasından simetrik genişleyen kutu prizma açar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_box_std": {
    "id": "sld_box_std",
    "name": "Box (Standard)",
    "trName": "Standart Kutu",
    "meaning": "Standart Kutu",
    "shortDesc": "Temel prizma katı aracı.",
    "icon": "icons/solid/subtools/sld_box_std.png",
    "isFlyoutSub": true,
    "parentId": "box",
    "parentName": "Box",
    "rhinoCommand": "_Box",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Box",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Box (Standard) komutu. Türkçe anlamı: Standart Kutu. Temel prizma katı aracı. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_planar_along_crv": {
    "id": "sld_extrude_planar_along_crv",
    "name": "Extrude Along Curve",
    "trName": "Eğri Boyunca Katı Yükselt",
    "meaning": "Eğri Boyunca Katı Yükselt",
    "shortDesc": "Düzlemsel eğriyi bir kılavuz ray doğrultusunda katıya dönüştürür.",
    "icon": "icons/solid/subtools/sld_extrude_planar_along_crv.png",
    "isFlyoutSub": true,
    "parentId": "extrude_planar",
    "parentName": "Extrude Planar",
    "rhinoCommand": "_ExtrudeCrvAlongCrv _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvAlongCrv _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Along Curve komutu. Türkçe anlamı: Eğri Boyunca Katı Yükselt. Düzlemsel eğriyi bir kılavuz ray doğrultusunda katıya dönüştürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_planar_to_point": {
    "id": "sld_extrude_planar_to_point",
    "name": "Extrude To Point",
    "trName": "Noktaya Katı Piramit",
    "meaning": "Noktaya Katı Piramit",
    "shortDesc": "Kapalı eğriyi tepe noktasına doğru piramit gibi daraltarak katı yapar.",
    "icon": "icons/solid/subtools/sld_extrude_planar_to_point.png",
    "isFlyoutSub": true,
    "parentId": "extrude_planar",
    "parentName": "Extrude Planar",
    "rhinoCommand": "_ExtrudeCrvToPoint _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvToPoint _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude To Point komutu. Türkçe anlamı: Noktaya Katı Piramit. Kapalı eğriyi tepe noktasına doğru piramit gibi daraltarak katı yapar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_planar_tapered": {
    "id": "sld_extrude_planar_tapered",
    "name": "Extrude Tapered",
    "trName": "Açılı (Konik) Katı Yükseltme",
    "meaning": "Açılı (Konik) Katı Yükseltme",
    "shortDesc": "Kalıp çıkış açısıyla genişleyen veya daralan katı duvar çıkarır.",
    "icon": "icons/solid/subtools/sld_extrude_planar_tapered.png",
    "isFlyoutSub": true,
    "parentId": "extrude_planar",
    "parentName": "Extrude Planar",
    "rhinoCommand": "_ExtrudeCrvTapered _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrvTapered _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Tapered komutu. Türkçe anlamı: Açılı (Konik) Katı Yükseltme. Kalıp çıkış açısıyla genişleyen veya daralan katı duvar çıkarır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_planar_straight": {
    "id": "sld_extrude_planar_straight",
    "name": "Extrude Straight",
    "trName": "Düz Doğrusal Katı Yükseltme",
    "meaning": "Düz Doğrusal Katı Yükseltme",
    "shortDesc": "Kapalı eğriyi Z ekseninde düz katı bloğa dönüştürür.",
    "icon": "icons/solid/subtools/sld_extrude_planar_straight.png",
    "isFlyoutSub": true,
    "parentId": "extrude_planar",
    "parentName": "Extrude Planar",
    "rhinoCommand": "_ExtrudeCrv _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeCrv _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Straight komutu. Türkçe anlamı: Düz Doğrusal Katı Yükseltme. Kapalı eğriyi Z ekseninde düz katı bloğa dönüştürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_cone_2pt": {
    "id": "sld_cone_2pt",
    "name": "Cone: 2 Points",
    "trName": "2 Noktadan Koni",
    "meaning": "2 Noktadan Koni",
    "shortDesc": "Taban çapı iki noktadan tanımlanan koni.",
    "icon": "icons/solid/subtools/sld_cone_2pt.png",
    "isFlyoutSub": true,
    "parentId": "cone",
    "parentName": "Cone",
    "rhinoCommand": "_Cone _2Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Cone _2Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Cone: 2 Points komutu. Türkçe anlamı: 2 Noktadan Koni. Taban çapı iki noktadan tanımlanan koni. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_cone_3pt": {
    "id": "sld_cone_3pt",
    "name": "Cone: 3 Points",
    "trName": "3 Noktadan Koni",
    "meaning": "3 Noktadan Koni",
    "shortDesc": "Üç çevre noktasından geçen tabanlı koni.",
    "icon": "icons/solid/subtools/sld_cone_3pt.png",
    "isFlyoutSub": true,
    "parentId": "cone",
    "parentName": "Cone",
    "rhinoCommand": "_Cone _3Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Cone _3Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Cone: 3 Points komutu. Türkçe anlamı: 3 Noktadan Koni. Üç çevre noktasından geçen tabanlı koni. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_truncated_cone": {
    "id": "sld_truncated_cone",
    "name": "Truncated Cone",
    "trName": "Kesik Koni",
    "meaning": "Kesik Koni",
    "shortDesc": "Alt ve üst çapları farklı olan kesik külah katı üretir.",
    "icon": "icons/solid/subtools/sld_truncated_cone.png",
    "isFlyoutSub": true,
    "parentId": "cone",
    "parentName": "Cone",
    "rhinoCommand": "_TCone",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _TCone",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Truncated Cone komutu. Türkçe anlamı: Kesik Koni. Alt ve üst çapları farklı olan kesik külah katı üretir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_truncated_cone_2pt": {
    "id": "sld_truncated_cone_2pt",
    "name": "Truncated Cone: 2Pt",
    "trName": "2 Noktadan Kesik Koni",
    "meaning": "2 Noktadan Kesik Koni",
    "shortDesc": "Çap uç noktalarıyla kesik koni oluşturur.",
    "icon": "icons/solid/subtools/sld_truncated_cone_2pt.png",
    "isFlyoutSub": true,
    "parentId": "cone",
    "parentName": "Cone",
    "rhinoCommand": "_TCone _2Point",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _TCone _2Point",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Truncated Cone: 2Pt komutu. Türkçe anlamı: 2 Noktadan Kesik Koni. Çap uç noktalarıyla kesik koni oluşturur. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_cone_std": {
    "id": "sld_cone_std",
    "name": "Cone (Standard)",
    "trName": "Standart Koni",
    "meaning": "Standart Koni",
    "shortDesc": "Merkez ve yarıçap tabanlı katı koni.",
    "icon": "icons/solid/subtools/sld_cone_std.png",
    "isFlyoutSub": true,
    "parentId": "cone",
    "parentName": "Cone",
    "rhinoCommand": "_Cone",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Cone",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Cone (Standard) komutu. Türkçe anlamı: Standart Koni. Merkez ve yarıçap tabanlı katı koni. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_ellipsoid_diameter": {
    "id": "sld_ellipsoid_diameter",
    "name": "Ellipsoid: From Diameter",
    "trName": "Çaptan Elipsoid",
    "meaning": "Çaptan Elipsoid",
    "shortDesc": "İki uç çap noktası ve üçüncü eksenle elipsoid oluşturur.",
    "icon": "icons/solid/subtools/sld_ellipsoid_diameter.png",
    "isFlyoutSub": true,
    "parentId": "ellipsoid",
    "parentName": "Ellipsoid",
    "rhinoCommand": "_Ellipsoid _Diameter",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Ellipsoid _Diameter",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Ellipsoid: From Diameter komutu. Türkçe anlamı: Çaptan Elipsoid. İki uç çap noktası ve üçüncü eksenle elipsoid oluşturur. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_ellipsoid_foci": {
    "id": "sld_ellipsoid_foci",
    "name": "Ellipsoid: From Foci",
    "trName": "Odak Noktalarından Elipsoid",
    "meaning": "Odak Noktalarından Elipsoid",
    "shortDesc": "İki odak noktası ve çevre noktasıyla kusursuz elipsoid üretir.",
    "icon": "icons/solid/subtools/sld_ellipsoid_foci.png",
    "isFlyoutSub": true,
    "parentId": "ellipsoid",
    "parentName": "Ellipsoid",
    "rhinoCommand": "_Ellipsoid _Foci",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Ellipsoid _Foci",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Ellipsoid: From Foci komutu. Türkçe anlamı: Odak Noktalarından Elipsoid. İki odak noktası ve çevre noktasıyla kusursuz elipsoid üretir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_ellipsoid_center": {
    "id": "sld_ellipsoid_center",
    "name": "Ellipsoid: From Center",
    "trName": "Merkezden Elipsoid",
    "meaning": "Merkezden Elipsoid",
    "shortDesc": "Merkez noktası ve 3 eksen yarıçapı ile elipsoid kurar.",
    "icon": "icons/solid/subtools/sld_ellipsoid_center.png",
    "isFlyoutSub": true,
    "parentId": "ellipsoid",
    "parentName": "Ellipsoid",
    "rhinoCommand": "_Ellipsoid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Ellipsoid",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Ellipsoid: From Center komutu. Türkçe anlamı: Merkezden Elipsoid. Merkez noktası ve 3 eksen yarıçapı ile elipsoid kurar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_paraboloid_std": {
    "id": "sld_paraboloid_std",
    "name": "Paraboloid (Standard)",
    "trName": "Standart Paraboloid",
    "meaning": "Standart Paraboloid",
    "shortDesc": "Tepe noktası ve taban yarıçapı ile parabolik çanak üretir.",
    "icon": "icons/solid/subtools/sld_paraboloid_std.png",
    "isFlyoutSub": true,
    "parentId": "paraboloid",
    "parentName": "Paraboloid",
    "rhinoCommand": "_Paraboloid",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Paraboloid",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Paraboloid (Standard) komutu. Türkçe anlamı: Standart Paraboloid. Tepe noktası ve taban yarıçapı ile parabolik çanak üretir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_paraboloid_focus": {
    "id": "sld_paraboloid_focus",
    "name": "Paraboloid: Focus",
    "trName": "Odak Noktalı Paraboloid",
    "meaning": "Odak Noktalı Paraboloid",
    "shortDesc": "Optik odak mesafesi tanımlayarak paraboloid üretir.",
    "icon": "icons/solid/subtools/sld_paraboloid_focus.png",
    "isFlyoutSub": true,
    "parentId": "paraboloid",
    "parentName": "Paraboloid",
    "rhinoCommand": "_Paraboloid _Focus",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _Paraboloid _Focus",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Paraboloid: Focus komutu. Türkçe anlamı: Odak Noktalı Paraboloid. Optik odak mesafesi tanımlayarak paraboloid üretir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_along_crv": {
    "id": "sld_extrude_srf_along_crv",
    "name": "Extrude Srf Along Curve",
    "trName": "Yüzeyi Eğri Boyunca Yükselt",
    "meaning": "Yüzeyi Eğri Boyunca Yükselt",
    "shortDesc": "Mevcut yüzeyi eğri yolu boyunca katılaştırır.",
    "icon": "icons/solid/subtools/sld_extrude_srf_along_crv.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_1",
    "parentName": "Extrude Surface",
    "rhinoCommand": "_ExtrudeSrfAlongCrv _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfAlongCrv _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Along Curve komutu. Türkçe anlamı: Yüzeyi Eğri Boyunca Yükselt. Mevcut yüzeyi eğri yolu boyunca katılaştırır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_to_point": {
    "id": "sld_extrude_srf_to_point",
    "name": "Extrude Srf To Point",
    "trName": "Yüzeyi Noktaya Yükselt",
    "meaning": "Yüzeyi Noktaya Yükselt",
    "shortDesc": "Yüzeyi tek bir piramit tepe noktasına doğru katı yapar.",
    "icon": "icons/solid/subtools/sld_extrude_srf_to_point.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_1",
    "parentName": "Extrude Surface",
    "rhinoCommand": "_ExtrudeSrfToPoint _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfToPoint _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf To Point komutu. Türkçe anlamı: Yüzeyi Noktaya Yükselt. Yüzeyi tek bir piramit tepe noktasına doğru katı yapar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_tapered": {
    "id": "sld_extrude_srf_tapered",
    "name": "Extrude Srf Tapered",
    "trName": "Yüzeyi Açılı Katı Yükselt",
    "meaning": "Yüzeyi Açılı Katı Yükselt",
    "shortDesc": "Yüzeyi kalıp açısıyla genişleterek katılaştırır.",
    "icon": "icons/solid/subtools/sld_extrude_srf_tapered.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_1",
    "parentName": "Extrude Surface",
    "rhinoCommand": "_ExtrudeSrfTapered _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfTapered _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Tapered komutu. Türkçe anlamı: Yüzeyi Açılı Katı Yükselt. Yüzeyi kalıp açısıyla genişleterek katılaştırır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_straight": {
    "id": "sld_extrude_srf_straight",
    "name": "Extrude Srf Straight",
    "trName": "Yüzeyi Doğrusal Katı Yükselt",
    "meaning": "Yüzeyi Doğrusal Katı Yükselt",
    "shortDesc": "Yüzeyden düz katı blok çıkarır.",
    "icon": "icons/solid/subtools/sld_extrude_srf_straight.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_1",
    "parentName": "Extrude Surface",
    "rhinoCommand": "_ExtrudeSrf _Solid=Yes",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrf _Solid=Yes",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Straight komutu. Türkçe anlamı: Yüzeyi Doğrusal Katı Yükselt. Yüzeyden düz katı blok çıkarır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_norm_along_crv": {
    "id": "sld_extrude_srf_norm_along_crv",
    "name": "Extrude Srf Normal Along Crv",
    "trName": "Normal Yönünde Kılavuzlu Yükselt",
    "meaning": "Normal Yönünde Kılavuzlu Yükselt",
    "shortDesc": "Yüzey normalleri doğrultusunda kılavuzlu katı uzatır.",
    "icon": "icons/solid/subtools/sld_extrude_srf_norm_along_crv.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_2",
    "parentName": "Extrude Surface (Normal)",
    "rhinoCommand": "_ExtrudeSrfAlongCrv",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfAlongCrv",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Normal Along Crv komutu. Türkçe anlamı: Normal Yönünde Kılavuzlu Yükselt. Yüzey normalleri doğrultusunda kılavuzlu katı uzatır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_norm_to_point": {
    "id": "sld_extrude_srf_norm_to_point",
    "name": "Extrude Srf Normal To Point",
    "trName": "Normal Yönünde Noktaya Yükselt",
    "meaning": "Normal Yönünde Noktaya Yükselt",
    "shortDesc": "Normalleri koruyarak tepe noktasına bağlar.",
    "icon": "icons/solid/subtools/sld_extrude_srf_norm_to_point.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_2",
    "parentName": "Extrude Surface (Normal)",
    "rhinoCommand": "_ExtrudeSrfToPoint",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfToPoint",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Normal To Point komutu. Türkçe anlamı: Normal Yönünde Noktaya Yükselt. Normalleri koruyarak tepe noktasına bağlar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_norm_tapered": {
    "id": "sld_extrude_srf_norm_tapered",
    "name": "Extrude Srf Normal Tapered",
    "trName": "Normal Yönünde Açılı Yükselt",
    "meaning": "Normal Yönünde Açılı Yükselt",
    "shortDesc": "Normallere göre açılı et kalınlığı verir.",
    "icon": "icons/solid/subtools/sld_extrude_srf_norm_tapered.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_2",
    "parentName": "Extrude Surface (Normal)",
    "rhinoCommand": "_ExtrudeSrfTapered",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrfTapered",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Normal Tapered komutu. Türkçe anlamı: Normal Yönünde Açılı Yükselt. Normallere göre açılı et kalınlığı verir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_extrude_srf_norm_straight": {
    "id": "sld_extrude_srf_norm_straight",
    "name": "Extrude Srf Normal",
    "trName": "Yüzey Normaline Dik Katı Yükselt",
    "meaning": "Yüzey Normaline Dik Katı Yükselt",
    "shortDesc": "Bombeli yüzeyi kendi diklik doğrultusunda etlendirir.",
    "icon": "icons/solid/subtools/sld_extrude_srf_norm_straight.png",
    "isFlyoutSub": true,
    "parentId": "extrude_surface_2",
    "parentName": "Extrude Surface (Normal)",
    "rhinoCommand": "_ExtrudeSrf",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeSrf",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Srf Normal komutu. Türkçe anlamı: Yüzey Normaline Dik Katı Yükselt. Bombeli yüzeyi kendi diklik doğrultusunda etlendirir. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_blend_edge": {
    "id": "sld_blend_edge",
    "name": "Blend Edge",
    "trName": "Yumuşak Geçişli Kenar Radyusu",
    "meaning": "Yumuşak Geçişli Kenar Radyusu",
    "shortDesc": "Katı kenarlarına G2 sürekliliğinde pürüzsüz geçiş köprüsü kurar.",
    "icon": "icons/solid/subtools/sld_blend_edge.png",
    "isFlyoutSub": true,
    "parentId": "fillet_edge",
    "parentName": "Fillet Edge",
    "rhinoCommand": "_BlendEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _BlendEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Blend Edge komutu. Türkçe anlamı: Yumuşak Geçişli Kenar Radyusu. Katı kenarlarına G2 sürekliliğinde pürüzsüz geçiş köprüsü kurar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_chamfer_edge": {
    "cmdOptions": [{"name": "NextDist", "desc": "Pah Mesafesi: Kenardan içeriye doğru kırılacak 45° düz eğim mesafesi."}],
    "cmdPrompt": "Command: _ChamferEdge\nSelect edges to chamfer ( NextDist=0.40 ):",
    "id": "sld_chamfer_edge",
    "name": "Chamfer Edge",
    "trName": "Katı Kenarına Pah Kırma",
    "meaning": "Katı Kenarına Pah Kırma",
    "shortDesc": "Öğrenci Adımları: 1. Chamfer Edge simgesine Sol Tıklayın. 2. Pah mesafesini girin (örn: 0.40 mm). 3. Pah kırılacak kenarları seçin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak 45 derece düz eğimli pah kırın.",
    "icon": "icons/solid/subtools/sld_chamfer_edge.png",
    "isFlyoutSub": true,
    "parentId": "fillet_edge",
    "parentName": "Fillet Edge",
    "rhinoCommand": "_ChamferEdge",
    "mouseAction": "Sol Tık: Katı kenarına pah kırar | Sağ Tık: Son pah mesafesini korur",
    "commandSteps": [
      {
        "prompt": "Command: _ChamferEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Erkek yüzüklerinde ve köşeli baget kasalarda modern ve maskülen fasetli hatlar elde etmek için kullanılır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Chamfer Edge komutu. Katı kenarlarına açılı düz pah kırar."
  },
  "sld_fillet_edge": {
    "id": "sld_fillet_edge",
    "name": "Fillet Edge (Std)",
    "trName": "Standart Kenar Radyusu",
    "meaning": "Standart Kenar Radyusu",
    "shortDesc": "Katı kenarlarına dairesel yarıçaplı radyus ekler.",
    "icon": "icons/solid/subtools/sld_fillet_edge.png",
    "isFlyoutSub": true,
    "parentId": "fillet_edge",
    "parentName": "Fillet Edge",
    "rhinoCommand": "_FilletEdge",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _FilletEdge",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Fillet Edge (Std) komutu. Türkçe anlamı: Standart Kenar Radyusu. Katı kenarlarına dairesel yarıçaplı radyus ekler. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_move_face_to_pt": {
    "id": "sld_move_face_to_pt",
    "name": "Extrude Face / Move To Pt",
    "trName": "Katı Yüzünü Noktaya Uzat",
    "meaning": "Katı Yüzünü Noktaya Uzat",
    "shortDesc": "Katının bir yüzünü seçilen noktaya doğru uzatarak hacmi büyütür.",
    "icon": "icons/solid/subtools/sld_move_face_to_pt.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_ExtrudeFace",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ExtrudeFace",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Extrude Face / Move To Pt komutu. Türkçe anlamı: Katı Yüzünü Noktaya Uzat. Katının bir yüzünü seçilen noktaya doğru uzatarak hacmi büyütür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_fold_face": {
    "id": "sld_fold_face",
    "name": "Fold Face",
    "trName": "Katı Yüzünü Katla / Bük",
    "meaning": "Katı Yüzünü Katla / Bük",
    "shortDesc": "Katı bir yüzeyi menteşe ekseni etrafında açılı bükerek katlar.",
    "icon": "icons/solid/subtools/sld_fold_face.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_FoldFace",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _FoldFace",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Fold Face komutu. Türkçe anlamı: Katı Yüzünü Katla / Bük. Katı bir yüzeyi menteşe ekseni etrafında açılı bükerek katlar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_merge_face": {
    "id": "sld_merge_face",
    "name": "Merge Coplanar Faces",
    "trName": "Aynı Düzlemdeki Yüzleri Kaynat",
    "meaning": "Aynı Düzlemdeki Yüzleri Kaynat",
    "shortDesc": "Aynı düzlemdeki bölünmüş iki yüzeyi tek parça yüze dönüştürür.",
    "icon": "icons/solid/subtools/sld_merge_face.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_MergeFace",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MergeFace",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Merge Coplanar Faces komutu. Türkçe anlamı: Aynı Düzlemdeki Yüzleri Kaynat. Aynı düzlemdeki bölünmüş iki yüzeyi tek parça yüze dönüştürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_merge_all_faces": {
    "id": "sld_merge_all_faces",
    "name": "Merge All Coplanar Faces",
    "trName": "Tüm Düzlem Yüzleri Temizle",
    "meaning": "Tüm Düzlem Yüzleri Temizle",
    "shortDesc": "Katı üzerindeki tüm gereksiz düzlemsel dikişleri tek tıkla ütüler.",
    "icon": "icons/solid/subtools/sld_merge_all_faces.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_MergeAllCoplanarFaces",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MergeAllCoplanarFaces",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Boolean sonrası oluşan parazit kenar çizgilerini yok etmek için sihirli komuttur.",
    "ttsText": "Merge All Coplanar Faces komutu. Türkçe anlamı: Tüm Düzlem Yüzleri Temizle. Katı üzerindeki tüm gereksiz düzlemsel dikişleri tek tıkla ütüler. Püf noktası: Boolean sonrası oluşan parazit kenar çizgilerini yok etmek için sihirli komuttur."
  },
  "sld_split_face": {
    "id": "sld_split_face",
    "name": "Split Face",
    "trName": "Katı Yüzünü Böl",
    "meaning": "Katı Yüzünü Böl",
    "shortDesc": "Katının bir yüzeyini çizgi veya eğri ile bağımsız bölgelere ayırır.",
    "icon": "icons/solid/subtools/sld_split_face.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_SplitFace",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _SplitFace",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Split Face komutu. Türkçe anlamı: Katı Yüzünü Böl. Katının bir yüzeyini çizgi veya eğri ile bağımsız bölgelere ayırır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_move_untrimmed_face": {
    "id": "sld_move_untrimmed_face",
    "name": "Move Untrimmed Face",
    "trName": "Budanmamış Yüzü Taşı",
    "meaning": "Budanmamış Yüzü Taşı",
    "shortDesc": "Budanmamış katı yüzeyini öteleyerek formu dinamik yeniler.",
    "icon": "icons/solid/subtools/sld_move_untrimmed_face.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_MoveUntrimmedFace",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MoveUntrimmedFace",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Move Untrimmed Face komutu. Türkçe anlamı: Budanmamış Yüzü Taşı. Budanmamış katı yüzeyini öteleyerek formu dinamik yeniler. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_move_face": {
    "id": "sld_move_face",
    "name": "Move Face",
    "trName": "Katı Yüzünü Taşı (MoveFace)",
    "meaning": "Katı Yüzünü Taşı (MoveFace)",
    "shortDesc": "Seçili katı yüzünü doğrusal öteler, komşu duvarlar otomatik uzar.",
    "icon": "icons/solid/subtools/sld_move_face.png",
    "isFlyoutSub": true,
    "parentId": "edit_faces",
    "parentName": "Edit Faces",
    "rhinoCommand": "_MoveFace",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MoveFace",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Taş yuvası yüksekliğini veya tırnak boyunu tek tıkla yukarı çekmekte kullanılır.",
    "ttsText": "Move Face komutu. Türkçe anlamı: Katı Yüzünü Taşı (MoveFace). Seçili katı yüzünü doğrusal öteler, komşu duvarlar otomatik uzar. Püf noktası: Taş yuvası yüksekliğini veya tırnak boyunu tek tıkla yukarı çekmekte kullanılır."
  },
  "sld_place_hole": {
    "id": "sld_place_hole",
    "name": "Place Hole",
    "trName": "Delik Yerleştir",
    "meaning": "Delik Yerleştir",
    "shortDesc": "Katı yüzeyine belirlenen çap ve derinlikte delik oturtur.",
    "icon": "icons/solid/subtools/sld_place_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_PlaceHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _PlaceHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Place Hole komutu. Türkçe anlamı: Delik Yerleştir. Katı yüzeyine belirlenen çap ve derinlikte delik oturtur. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_revolve_hole": {
    "id": "sld_revolve_hole",
    "name": "Revolve Hole",
    "trName": "Dönel Delik Aç",
    "meaning": "Dönel Delik Aç",
    "shortDesc": "Kesit profili eksen etrafında döndürerek katıyı oyar.",
    "icon": "icons/solid/subtools/sld_revolve_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_RevolveHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RevolveHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Revolve Hole komutu. Türkçe anlamı: Dönel Delik Aç. Kesit profili eksen etrafında döndürerek katıyı oyar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_round_hole": {
    "id": "sld_round_hole",
    "name": "Round Hole",
    "trName": "Yuvarlak Delik Aç",
    "meaning": "Yuvarlak Delik Aç",
    "shortDesc": "Dairesel vida ve astar deliği deler.",
    "icon": "icons/solid/subtools/sld_round_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_RoundHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RoundHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Pave astar arkası döküm hafifletme deliklerinde kullanılır.",
    "ttsText": "Round Hole komutu. Türkçe anlamı: Yuvarlak Delik Aç. Dairesel vida ve astar deliği deler. Püf noktası: Pave astar arkası döküm hafifletme deliklerinde kullanılır."
  },
  "sld_copy_hole": {
    "id": "sld_copy_hole",
    "name": "Copy Hole",
    "trName": "Deliği Kopyala",
    "meaning": "Deliği Kopyala",
    "shortDesc": "Mevcut bir deliği katı üzerinde başka noktalara çoğaltır.",
    "icon": "icons/solid/subtools/sld_copy_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_CopyHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _CopyHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Copy Hole komutu. Türkçe anlamı: Deliği Kopyala. Mevcut bir deliği katı üzerinde başka noktalara çoğaltır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_move_hole": {
    "id": "sld_move_hole",
    "name": "Move Hole",
    "trName": "Deliği Taşı",
    "meaning": "Deliği Taşı",
    "shortDesc": "Açılmış bir deliği katı yüzeyinde yeni konuma kaydırır.",
    "icon": "icons/solid/subtools/sld_move_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_MoveHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MoveHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Move Hole komutu. Türkçe anlamı: Deliği Taşı. Açılmış bir deliği katı yüzeyinde yeni konuma kaydırır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_rotate_hole": {
    "id": "sld_rotate_hole",
    "name": "Rotate Hole",
    "trName": "Deliği Döndür",
    "meaning": "Deliği Döndür",
    "shortDesc": "Deliğin açısını yüzey normali etrafında döndürür.",
    "icon": "icons/solid/subtools/sld_rotate_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_RotateHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RotateHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Rotate Hole komutu. Türkçe anlamı: Deliği Döndür. Deliğin açısını yüzey normali etrafında döndürür. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_delete_hole": {
    "id": "sld_delete_hole",
    "name": "Delete Hole",
    "trName": "Deliği Kapat / Sil",
    "meaning": "Deliği Kapat / Sil",
    "shortDesc": "Katı üzerindeki deliği kaldırıp yüzeyi orijinal katı haline kapatır.",
    "icon": "icons/solid/subtools/sld_delete_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_UntrimHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _UntrimHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Yanlış açılan taş yuvalarını veya delikleri katıyı bozmadan anında doldurur.",
    "ttsText": "Delete Hole komutu. Türkçe anlamı: Deliği Kapat / Sil. Katı üzerindeki deliği kaldırıp yüzeyi orijinal katı haline kapatır. Püf noktası: Yanlış açılan taş yuvalarını veya delikleri katıyı bozmadan anında doldurur."
  },
  "sld_array_hole": {
    "id": "sld_array_hole",
    "name": "Array Hole",
    "trName": "Delik Matrisi Çoğalt",
    "meaning": "Delik Matrisi Çoğalt",
    "shortDesc": "Delikleri doğrusal X-Y matrisinde çoğaltır.",
    "icon": "icons/solid/subtools/sld_array_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_ArrayHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ArrayHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Array Hole komutu. Türkçe anlamı: Delik Matrisi Çoğalt. Delikleri doğrusal X-Y matrisinde çoğaltır. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  },
  "sld_array_hole_polar": {
    "id": "sld_array_hole_polar",
    "name": "Array Hole Polar",
    "trName": "Dairesel Delik Çoğalt",
    "meaning": "Dairesel Delik Çoğalt",
    "shortDesc": "Delikleri merkez etrafında dairesel eşit aralıklarla çoğaltır.",
    "icon": "icons/solid/subtools/sld_array_hole_polar.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_ArrayHolePolar",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _ArrayHolePolar",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Madalyon ve rozet çevre delikleri için idealdir.",
    "ttsText": "Array Hole Polar komutu. Türkçe anlamı: Dairesel Delik Çoğalt. Delikleri merkez etrafında dairesel eşit aralıklarla çoğaltır. Püf noktası: Madalyon ve rozet çevre delikleri için idealdir."
  },
  "sld_make_hole": {
    "id": "sld_make_hole",
    "name": "Make Hole",
    "trName": "Eğriden Delik Aç",
    "meaning": "Eğriden Delik Aç",
    "shortDesc": "Kapalı 2D eğriyi katının içinden geçirerek delik açar.",
    "icon": "icons/solid/subtools/sld_make_hole.png",
    "isFlyoutSub": true,
    "parentId": "edit_holes",
    "parentName": "Edit Holes",
    "rhinoCommand": "_MakeHole",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _MakeHole",
        "desc": "Komut satırından aracı başlatın."
      },
      {
        "prompt": "Select solid or polysurface: <Enter>",
        "desc": "İşlem yapılacak katı veya çoklu yüzeyi seçin."
      }
    ],
    "options": [
      {
        "key": "DeleteInput",
        "desc": "Orijinal nesneyi işlem sonrası siler (Yes/No)."
      },
      {
        "key": "Cap",
        "desc": "Açık uçları katı kapakla kapatır (Yes/No)."
      }
    ],
    "jewelerTip": "Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur.",
    "ttsText": "Make Hole komutu. Türkçe anlamı: Eğriden Delik Aç. Kapalı 2D eğriyi katının içinden geçirerek delik açar. Püf noktası: Kuyumculukta katı nesnelerin su geçirmez (closed solid polysurface / manifold) olması 3D reçine baskı ve döküm için zorunludur."
  }
};

function findSolidCommand(cmdId) {
  if (!cmdId) return null;
  if (solidCommandsCatalog[cmdId]) return solidCommandsCatalog[cmdId];
  return null;
}

window.solidRibbonRows = solidRibbonRows;
window.solidFlyoutDrawers = solidFlyoutDrawers;
window.solidCommandsCatalog = solidCommandsCatalog;
window.findSolidCommand = findSolidCommand;
