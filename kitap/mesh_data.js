// MATRIXGOLD & RHINO - MESH (STL, 3D BASKI AĞ YAPISI & TAMİR) VERİ KATALOĞU
// 20 Ana Şerit Komutu + 6 Alt Çekmece + 50 Alt Araç

const meshRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: MESH (STL, 3D BASKI AĞ YAPISI & TAMİR)",
    "tools": [
      {
        "id": "msh_from_nurbs",
        "name": "From NURBS",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_from_nurbs.png"
      },
      {
        "id": "msh_primitives",
        "name": "Primitives",
        "hasFlyout": true,
        "flyoutKey": "primitives",
        "subCount": 9,
        "icon": "icons/mesh/ribbon/msh_primitives.png"
      },
      {
        "id": "msh_offset",
        "name": "Offset Mesh",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_offset.png"
      },
      {
        "id": "msh_apply_to_srf",
        "name": "Apply To Surface",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_apply_to_srf.png"
      },
      {
        "id": "msh_apply_uv",
        "name": "Apply Mesh UV",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_apply_uv.png"
      },
      {
        "id": "msh_extract_from_srf",
        "name": "Extract From Surface",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_extract_from_srf.png"
      },
      {
        "id": "msh_from_points",
        "name": "From Points",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_from_points.png"
      },
      {
        "id": "msh_heightfield",
        "name": "Height Field",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_heightfield.png"
      },
      {
        "id": "msh_from_control",
        "name": "From Control Polygon",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_from_control.png"
      },
      {
        "id": "msh_intersect",
        "name": "Intersect",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_intersect.png"
      },
      {
        "id": "msh_patch",
        "name": "Patch",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_patch.png"
      },
      {
        "id": "msh_planar",
        "name": "Planar Mesh",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_planar.png"
      },
      {
        "id": "msh_repair_tools",
        "name": "Repair Tools",
        "hasFlyout": true,
        "flyoutKey": "repair_tools",
        "subCount": 13,
        "icon": "icons/mesh/ribbon/msh_repair_tools.png"
      },
      {
        "id": "msh_edit_tools",
        "name": "Edit Tools",
        "hasFlyout": true,
        "flyoutKey": "edit_tools",
        "subCount": 10,
        "icon": "icons/mesh/ribbon/msh_edit_tools.png"
      }
    ]
  },
  {
    "id": "row_2",
    "title": "2. Şerit: MESH (STL, 3D BASKI AĞ YAPISI & TAMİR)",
    "tools": [
      {
        "id": "msh_collapse",
        "name": "Collapse",
        "hasFlyout": true,
        "flyoutKey": "collapse",
        "subCount": 7,
        "icon": "icons/mesh/ribbon/msh_collapse.png"
      },
      {
        "id": "msh_extract",
        "name": "Extract",
        "hasFlyout": true,
        "flyoutKey": "extract",
        "subCount": 7,
        "icon": "icons/mesh/ribbon/msh_extract.png"
      },
      {
        "id": "msh_delete_faces",
        "name": "Delete Faces",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_delete_faces.png"
      },
      {
        "id": "msh_triangulate_quads",
        "name": "Triangulate Quads",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_triangulate_quads.png"
      },
      {
        "id": "msh_boolean",
        "name": "Boolean",
        "hasFlyout": true,
        "flyoutKey": "boolean",
        "subCount": 4,
        "icon": "icons/mesh/ribbon/msh_boolean.png"
      },
      {
        "id": "msh_render_props",
        "name": "Render Mesh Properties",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/mesh/ribbon/msh_render_props.png"
      }
    ]
  }
];

const meshFlyoutDrawers = {
  "primitives": {
    "key": "primitives",
    "title": "Primitives",
    "trTitle": "Temel İlkel Mesh Katıları",
    "count": 9,
    "subIds": [
      "msh_3d_face",
      "msh_plane",
      "msh_box",
      "msh_sphere",
      "msh_ellipsoid",
      "msh_cone",
      "msh_tc_cone",
      "msh_cylinder",
      "msh_torus"
    ]
  },
  "repair_tools": {
    "key": "repair_tools",
    "title": "Repair Tools",
    "trTitle": "STL Tamir ve Delik Kapatma",
    "count": 13,
    "subIds": [
      "msh_match_edge",
      "msh_fill_hole",
      "msh_fill_all_holes",
      "msh_patch_face",
      "msh_unify_normals",
      "msh_align_vertices",
      "msh_split_edge",
      "msh_swap_edge",
      "msh_extract_nonmanifold",
      "msh_split_disjoint",
      "msh_check",
      "msh_cull_deg",
      "msh_rebuild_normals"
    ]
  },
  "edit_tools": {
    "key": "edit_tools",
    "title": "Edit Tools",
    "trTitle": "Mesh Dikiş ve Kaynak Takımı",
    "count": 10,
    "subIds": [
      "msh_unweld",
      "msh_unweld_sel",
      "msh_weld",
      "msh_weld_sel",
      "msh_trim",
      "msh_split",
      "msh_merge_faces",
      "msh_extract_edge",
      "msh_extract_render_mesh",
      "msh_split_crv"
    ]
  },
  "collapse": {
    "key": "collapse",
    "title": "Collapse",
    "trTitle": "Poligon Azaltma & Sadeleştirme",
    "count": 7,
    "subIds": [
      "msh_col_area",
      "msh_col_aspect",
      "msh_col_edge_len",
      "msh_col_edge",
      "msh_col_face",
      "msh_col_vertex",
      "msh_col_rebuild"
    ]
  },
  "extract": {
    "key": "extract",
    "title": "Extract",
    "trTitle": "Yüz Ayıklama ve Koparma",
    "count": 7,
    "subIds": [
      "msh_ext_draft",
      "msh_ext_area",
      "msh_ext_curv",
      "msh_ext_connected",
      "msh_ext_duplicate",
      "msh_ext_hole_bound",
      "msh_ext_part"
    ]
  },
  "boolean": {
    "key": "boolean",
    "title": "Boolean",
    "trTitle": "Mesh Birleşim ve Kesme",
    "count": 4,
    "subIds": [
      "msh_bool_union",
      "msh_bool_diff",
      "msh_bool_inters",
      "msh_bool_split"
    ]
  }
};

const meshCommandsCatalog = {
  "msh_from_nurbs": {
    "id": "msh_from_nurbs",
    "name": "From NURBS",
    "trName": "NURBS Katısından Mesh Üret (Mesh from NURBS)",
    "meaning": "3D Yazıcı İçin STL Poligon Ağı Çıkarıcı",
    "shortDesc": "Öğrenci Adımları: 1. 3D yazıcıya göndereceğiniz yüzüğü veya takı katısını seçin. 2. Mesh from NURBS simgesine Sol Tıklayın. 3. Açılan ayar penceresinde kaydırıcıyı sağa (More Polygons) çekerek kuyumculuk toleransını 0.01 mm yapın. 4. Enter veya Sağ Tık ile onaylayıp STL dışa aktarımına hazır hale getirin.",
    "icon": "icons/mesh/ribbon/msh_from_nurbs.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Mesh",
    "mouseAction": "Sol Tık: Katıyı yüksek kaliteli üçgen mesh ağına çevirir | Sağ Tık: Son mesh ayarlarını yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzüğü STL yaparken poligon yoğunluğunu çok düşük tutarsanız bombeli alyanslarda ve tırnaklarda faset kırılmaları (köşeli çizgiler) dökümde aynen çıkar! Her zaman 'Smooth and Slower' yüksek poligon seçeneğini tercih edin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mesh from NURBS komutu. Takı modellerinizi 3D reçine yazıcıların anlayacağı yüksek kaliteli STL mesh poligon ağına dönüştürür. Katıyı seçip toleransı belirleyin ve Enter ile onaylayın.",
    "cmdPrompt": "Command: _Mesh\\nSelect polysurfaces for polygon mesh generation <Enter>:",
    "cmdOptions": [
      {
        "name": "DetailedOptions",
        "desc": "Detaylı Ayarlar: Maksimum kenar uzunluğu ve yüzey toleransı (0.005 mm)."
      },
      {
        "name": "Preview",
        "desc": "Önizleme: Mesh yoğunluğunu ekranda görme."
      }
    ]
  },
  "msh_primitives": {
    "id": "msh_primitives",
    "name": "Primitives",
    "trName": "Mesh Temel Kütleler (Primitives)",
    "meaning": "Poligon Tabanlı Kutu, Küre ve Silindir",
    "shortDesc": "Öğrenci Adımları: 1. Primitives simgesine Sol Tıklayın. 2. Mesh Kutu (Box) veya Mesh Küre (Sphere) seçin. 3. F4 merkezine yerleştirip boyutlarını girin. 4. Enter ile doğrudan üçgen poligon bloğu oluşturun.",
    "icon": "icons/mesh/ribbon/msh_primitives.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshBox",
    "mouseAction": "Sol Tık: Hazır poligon kütlesi ekler | Sağ Tık: Son kütleyi yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: ZBrush veya Clayoo gibi heykeltraşlık programlarına parça aktarırken temel kütleleri doğrudan Mesh Primitives olarak oluşturmak geometri dönüşüm kayıplarını önler (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mesh Primitives komutu. Doğrudan poligon yapılı kutu, küre veya silindir blokları oluşturur. Kütleyi seçip sahneye yerleştirin.",
    "cmdPrompt": "Command: _MeshBox\\nPick start corner for mesh box <Enter>:",
    "cmdOptions": [
      {
        "name": "Cube",
        "desc": "Küp: Eşit kenarlı poligon blok."
      },
      {
        "name": "Resolution",
        "desc": "Yüzey Sayısı: Kütle üzerindeki üçgen poligon sıklığı."
      }
    ]
  },
  "msh_offset": {
    "id": "msh_offset",
    "name": "Offset Mesh",
    "trName": "Mesh Et Kalınlığı & İçini Boşaltma (Offset Mesh)",
    "meaning": "Poligon Modeline Homojen Et Payı Verme",
    "shortDesc": "Öğrenci Adımları: 1. STL heykel veya hayvan figürünü seçin. 2. Offset Mesh simgesine Sol Tıklayın. 3. Mesafe olarak et payını (Distance = 0.35 - 0.45 mm) girin ve 'Solid = Yes' seçeneğini işaretleyin. 4. Enter veya Sağ Tık ile figürün içini boşaltıp hafifletin.",
    "icon": "icons/mesh/ribbon/msh_offset.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_OffsetMesh",
    "mouseAction": "Sol Tık: Mesh nesnesine homojen et kalınlığı verir | Sağ Tık: Son ofset mesafesini yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Heykelli büyük bir yüzüğün içi dolu dökülürse 50-60 gram altın tutar ve satılamaz! Offset Mesh ile modelin içini boşaltıp 0.40 mm et kalınlığı bırakarak gramajı 15-20 grama düşürebilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Offset Mesh komutu. Mesh modellerine eşit et kalınlığı verir veya büyük figürlerin içini boşaltarak döküm gramajını düşürür. Et payını girip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _OffsetMesh\\nOffset distance ( Solid=Yes  BothSides=No ):",
    "cmdOptions": [
      {
        "name": "Solid",
        "desc": "Katı Yap: İçi boş iki kabuk arasını kapatıp dökülebilir katı üretir."
      },
      {
        "name": "Distance",
        "desc": "Et Payı: Kuyumculuk asgari standardı 0.35 mm - 0.45 mm."
      }
    ]
  },
  "msh_apply_to_srf": {
    "id": "msh_apply_to_srf",
    "name": "Apply To Surface",
    "trName": "Yüzeye Mesh Giydir",
    "meaning": "Yüzeye Mesh Giydir",
    "shortDesc": "Düz mesh desenini 3D kavisli yüzeyin üzerine sarar.",
    "icon": "icons/mesh/ribbon/msh_apply_to_srf.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ApplyMesh",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "Apply To Surface komutu. Türkçe anlamı: Yüzeye Mesh Giydir. Düz mesh desenini 3D kavisli yüzeyin üzerine sarar. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_apply_uv": {
    "id": "msh_apply_uv",
    "name": "Apply Mesh UV",
    "trName": "Mesh UV Koordinatı Ata",
    "meaning": "Mesh UV Koordinatı Ata",
    "shortDesc": "Doku kaplamaları için UV koordinatlarını mesh'e kilitler.",
    "icon": "icons/mesh/ribbon/msh_apply_uv.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ApplyMeshUV",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "Apply Mesh UV komutu. Türkçe anlamı: Mesh UV Koordinatı Ata. Doku kaplamaları için UV koordinatlarını mesh'e kilitler. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_extract_from_srf": {
    "id": "msh_extract_from_srf",
    "name": "Extract From Surface",
    "trName": "Yüzeyden Render Meshini Çıkar",
    "meaning": "Yüzeyden Render Meshini Çıkar",
    "shortDesc": "Görüntüleme üçgenlerini bağımsız mesh objesi yapar.",
    "icon": "icons/mesh/ribbon/msh_extract_from_srf.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtractRenderMesh",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "Extract From Surface komutu. Türkçe anlamı: Yüzeyden Render Meshini Çıkar. Görüntüleme üçgenlerini bağımsız mesh objesi yapar. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_from_points": {
    "id": "msh_from_points",
    "name": "From Points",
    "trName": "Nokta Bulutundan Mesh",
    "meaning": "Nokta Bulutundan Mesh",
    "shortDesc": "3D lazer tarayıcı nokta bulutundan tek parça STL örer.",
    "icon": "icons/mesh/ribbon/msh_from_points.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshFromPoints",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "Taranmış heykel veya parmak modellerini STL'e dönüştürür.",
    "ttsText": "From Points komutu. Türkçe anlamı: Nokta Bulutundan Mesh. 3D lazer tarayıcı nokta bulutundan tek parça STL örer. Püf noktası: Taranmış heykel veya parmak modellerini STL'e dönüştürür."
  },
  "msh_heightfield": {
    "id": "msh_heightfield",
    "name": "Height Field",
    "trName": "Görselden 3D Doku Mesh (Heightfield)",
    "meaning": "Gri Tonlamalı Resimden Üç Boyutlu Yüzey Üretici",
    "shortDesc": "Öğrenci Adımları: 1. Heightfield simgesine Sol Tıklayın. 2. Bilgisayarınızdan kabartılacak bir resim (ör: deri dokusu, ahşap damarı, amblem) seçin. 3. Zemin genişliğini ve Z yüksekliğini (ör: 0.40 mm) belirleyin. 4. Enter ile 3D doku meshini oluşturun.",
    "icon": "icons/mesh/ribbon/msh_heightfield.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Heightfield",
    "mouseAction": "Sol Tık: Fotoğraftan rölyef mesh kabartması çıkarır | Sağ Tık: Son görseli yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Alyans yüzeylerine çekiç vurma dokusu (hammered finish) veya kum dokusu vermek için internetten siyah-beyaz bir doku bulup Heightfield ile yüzüğe giydirmek harika bir atölye kısayoludur (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Heightfield komutu. Resimlerdeki ışık ve gölgeleri üç boyutlu kabartma mesh dokusuna çevirir. Resmi seçip kabartma yüksekliğini girin ve Enter ile onaylayın.",
    "cmdPrompt": "Command: _Heightfield\\nPick bitmap image file for heightfield generation <Enter>:",
    "cmdOptions": [
      {
        "name": "Height",
        "desc": "Kabartma Kotu: Kuyumculuk için 0.35 mm - 0.50 mm ideal kabartma."
      },
      {
        "name": "SamplePoints",
        "desc": "Örnekleme Yoğunluğu: Resim detayını yakalamak için piksel sayısı."
      }
    ]
  },
  "msh_from_control": {
    "id": "msh_from_control",
    "name": "From Control Polygon",
    "trName": "Kontrol Kafesinden Mesh",
    "meaning": "Kontrol Kafesinden Mesh",
    "shortDesc": "NURBS kontrol kafesini doğrudan mesh poligonuna çevirir.",
    "icon": "icons/mesh/ribbon/msh_from_control.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshPoly",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "From Control Polygon komutu. Türkçe anlamı: Kontrol Kafesinden Mesh. NURBS kontrol kafesini doğrudan mesh poligonuna çevirir. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_intersect": {
    "id": "msh_intersect",
    "name": "Intersect",
    "trName": "Mesh Kesişimi",
    "meaning": "Mesh Kesişimi",
    "shortDesc": "İki mesh nesnesinin çakıştığı kesişim eğrilerini çıkarır.",
    "icon": "icons/mesh/ribbon/msh_intersect.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshIntersect",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "Intersect komutu. Türkçe anlamı: Mesh Kesişimi. İki mesh nesnesinin çakıştığı kesişim eğrilerini çıkarır. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_patch": {
    "id": "msh_patch",
    "name": "Patch",
    "trName": "Mesh Yama",
    "meaning": "Mesh Yama",
    "shortDesc": "Açık delikli mesh sınırlarının üzerine yama örer.",
    "icon": "icons/mesh/ribbon/msh_patch.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshPatch",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "Patch komutu. Türkçe anlamı: Mesh Yama. Açık delikli mesh sınırlarının üzerine yama örer. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_planar": {
    "id": "msh_planar",
    "name": "Planar Mesh",
    "trName": "Düzlemsel Mesh Örücü (Planar Mesh)",
    "meaning": "Kapalı Eğriden Düz Mesh Yüzeyi",
    "shortDesc": "Öğrenci Adımları: 1. Düzlemdeki kapalı bir eğriyi seçin. 2. Planar Mesh simgesine Sol Tıklayın. 3. Eğrinin içini dolduran düzlemsel bir poligon kapağı örülür. 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/mesh/ribbon/msh_planar.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshPlane",
    "mouseAction": "Sol Tık: Kapalı eğriden düzlem mesh yüzeyi üretir | Sağ Tık: Son eğriyle yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Açık ağızlı bir mesh yüzüğün altına kapak takmak veya astar kapatmak istediğinizde sınır eğrisinden Planar Mesh ile tek hamlede kapak üretebilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Planar Mesh komutu. Düzlemsel kapalı çizgilerin içini poligon yüzeyiyle doldurur. Eğriyi seçip Enter veya Sağ Tık ile onaylayın.",
    "cmdPrompt": "Command: _MeshPolyline\\nSelect planar closed curves <Enter>:",
    "cmdOptions": [
      {
        "name": "MeshTolerance",
        "desc": "Hassasiyet: Eğri kavisini takip eden sınır üçgenlerinin sıklığı."
      }
    ]
  },
  "msh_repair_tools": {
    "id": "msh_repair_tools",
    "name": "Repair Tools",
    "trName": "Mesh Onarım ve Delik Kapatma (Repair Tools)",
    "meaning": "3D Baskı Öncesi Su Geçirmez (Watertight) Katı Yapıcı",
    "shortDesc": "Öğrenci Adımları: 1. Dışarıdan indirdiğiniz veya bozuk olan STL mesh modelini seçin. 2. Repair Tools simgesine Sol Tıklayın. 3. 'Fill All Holes' (Tüm Delikleri Kapat) ve 'Unify Normals' seçeneklerine basın. 4. Model su sızdırmaz kusursuz bir katıya dönüşür. Enter ile onaylayın.",
    "icon": "icons/mesh/ribbon/msh_repair_tools.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Check",
    "mouseAction": "Sol Tık: Açık delikleri ve bozuk yüzeyleri otomatik onarır | Sağ Tık: Onarım sihirbazını açar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: 3D yazıcı dilimleyicileri (ChituBox, Formlabs PreForm) açık delikli modelleri 'Manifold Değil' diyerek basmayı reddeder. Repair Tools ile delikleri kapatıp modeli tamamen kapalı (Closed Mesh) yapın (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mesh Repair Tools komutu. STL dosyalarındaki açık delikleri kapatır ve ters dönmüş yüzeyleri düzelterek 3D baskıya hazır su sızdırmaz katı haline getirir. Modeli seçip Enter ile onarın.",
    "cmdPrompt": "Command: _FillMeshHoles\\nSelect mesh with open naked edges <Enter>:",
    "cmdOptions": [
      {
        "name": "FillHole",
        "desc": "Delik Kapat: Açıkta kalan poligon deliklerini yeni üçgenlerle örer."
      },
      {
        "name": "UnifyNormals",
        "desc": "Yönleri Eşitle: Ters dönmüş siyah yüzeyleri dışa doğru çevirir."
      }
    ]
  },
  "msh_edit_tools": {
    "id": "msh_edit_tools",
    "name": "Edit Tools",
    "trName": "Mesh Düzenleme (Mesh Edit / Split & Weld)",
    "meaning": "Mesh Kesme, Ayırma ve Kaynak Araçları",
    "shortDesc": "Öğrenci Adımları: 1. Düzenlenecek mesh nesnesini seçin. 2. Edit Tools simgesine Sol Tıklayın. 3. Eğriyle kesmek için Mesh Split, ayrık kenarları kaynatmak için Mesh Weld seçeneğini kullanın. 4. Enter veya Sağ Tık ile işlemi sabitleyin.",
    "icon": "icons/mesh/ribbon/msh_edit_tools.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Weld",
    "mouseAction": "Sol Tık: Mesh kesme ve kaynatma menüsünü açar | Sağ Tık: Son işlemi yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: STL olarak gelen bir yüzük modelini ortadan ikiye bölüp parmak ölçüsünü büyütmek istediğinizde Mesh Split ile temizce kesip araya uzatma parçası kaynatabilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mesh Edit Tools komutu. STL poligon modellerini kesmenizi, budamanızı ve ayrık kenarları birbirine kaynatmanızı sağlar. Seçimi yapıp Enter ile onaylayın.",
    "cmdPrompt": "Command: _MeshSplit\\nSelect cutting curves or intersecting mesh <Enter>:",
    "cmdOptions": [
      {
        "name": "MeshWeld",
        "desc": "Kenar Kaynağı: Yan yana duran kopuk kenarları birbirine lehimleyip tek kabuk yapar."
      },
      {
        "name": "MeshSplit",
        "desc": "Mesh Kes: Çizgi veya düzlemle mesh modelini ikiye böler."
      }
    ]
  },
  "msh_collapse": {
    "id": "msh_collapse",
    "name": "Collapse",
    "trName": "Mesh Sadeleştirme (Collapse)",
    "meaning": "Mesh Sadeleştirme (Collapse)",
    "shortDesc": "Gereksiz üçgenleri eriterek dosya boyutunu hafifletir.",
    "icon": "icons/mesh/ribbon/msh_collapse.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CollapseMesh",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "Ağır STL dosyalarını hafifletmekte kullanılır.",
    "ttsText": "Collapse komutu. Türkçe anlamı: Mesh Sadeleştirme (Collapse). Gereksiz üçgenleri eriterek dosya boyutunu hafifletir. Püf noktası: Ağır STL dosyalarını hafifletmekte kullanılır."
  },
  "msh_extract": {
    "id": "msh_extract",
    "name": "Extract",
    "trName": "Mesh Yüzü Kopar (Extract)",
    "meaning": "Mesh Yüzü Kopar (Extract)",
    "shortDesc": "Seçili üçgenleri ana gövdeden ayırır.",
    "icon": "icons/mesh/ribbon/msh_extract.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ExtractMeshFaces",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "Hatalı veya delik üçgenleri gövdeden söker.",
    "ttsText": "Extract komutu. Türkçe anlamı: Mesh Yüzü Kopar (Extract). Seçili üçgenleri ana gövdeden ayırır. Püf noktası: Hatalı veya delik üçgenleri gövdeden söker."
  },
  "msh_delete_faces": {
    "id": "msh_delete_faces",
    "name": "Delete Faces",
    "trName": "Mesh Yüzeylerini Sil (Delete Mesh Faces)",
    "meaning": "Bozuk veya İstenmeyen Poligonları Kaldırma",
    "shortDesc": "Öğrenci Adımları: 1. Delete Faces simgesine Sol Tıklayın. 2. Model üzerinde silmek istediğiniz fazlalık veya bozuk üçgenlere Sol Tıklayın (birden fazla seçebilirsiniz). 3. Enter'a veya klavyeden Delete tuşuna basarak yüzeyleri kaldırın.",
    "icon": "icons/mesh/ribbon/msh_delete_faces.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DeleteMeshFaces",
    "mouseAction": "Sol Tık: İstenmeyen poligon yüzeylerini seçer | Sağ Tık / Enter: Seçilenleri siler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: STL olarak taranmış antika takılarda bazen parçanın içinde görünmeyen çapaklar kalır. Delete Mesh Faces ile içteki gereksiz poligonları silmek dosya boyutunu küçültür ve baskıyı hızlandırır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Delete Mesh Faces komutu. Modeldeki hatalı, çapaklı veya istenmeyen poligon yüzeylerini temizler. Yüzeyleri seçip Enter veya Sağ Tık ile silin.",
    "cmdPrompt": "Command: _DeleteMeshFaces\\nSelect mesh faces to delete <Enter to finish>:",
    "cmdOptions": [
      {
        "name": "BrushSelect",
        "desc": "Fırçayla Seç: Farenin tuşunu basılı tutup gezdirerek toplu poligon seçimi."
      }
    ]
  },
  "msh_triangulate_quads": {
    "id": "msh_triangulate_quads",
    "name": "Triangulate Quads",
    "trName": "Dörtgenleri Üçgenle (Triangulate Quads)",
    "meaning": "STL Formatı İçin Tüm Yüzeyleri Üçgenleme",
    "shortDesc": "Öğrenci Adımları: 1. Dörtgen yüzeyli (Quad) mesh nesnesini seçin. 2. Triangulate Quads simgesine Sol Tıklayın. 3. Tüm yüzeyler kusursuz üçgenlere bölünür. 4. Enter veya Sağ Tık ile onaylayın.",
    "icon": "icons/mesh/ribbon/msh_triangulate_quads.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_TriangulateMesh",
    "mouseAction": "Sol Tık: 4 kenarlı yüzeyleri 3 kenarlı katı üçgenlere dönüştürür | Sağ Tık: Hızlı üçgenleme",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Reçine 3D yazıcılar sadece üçgen poligonları (Triangles) okur. Dörtgen yüzeyler bazı dilimleyicilerde bükülme hatalarına yol açabileceğinden baskı öncesi Triangulate uygulamak işi sağlama alır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Triangulate Quads komutu. Dört kenarlı poligonları 3D yazıcıların en rahat işlediği üçgen poligonlara böler. Modeli seçip Enter ile işlemi tamamlayın.",
    "cmdPrompt": "Command: _TriangulateMesh\\nSelect mesh with quad polygons <Enter>:",
    "cmdOptions": [
      {
        "name": "Beauty",
        "desc": "Akıcı Üçgenleme: En dengeli açıları seçerek gerilimsiz üçgenler kurar."
      }
    ]
  },
  "msh_boolean": {
    "id": "msh_boolean",
    "name": "Boolean",
    "trName": "Mesh Boolean (Birleştir / Çıkar)",
    "meaning": "STL Nesneleri Arasında Kaynak ve Delik Açma",
    "shortDesc": "Öğrenci Adımları: 1. Birleştirilecek veya birbirinden kesilecek mesh nesnelerini seçin. 2. Mesh Boolean simgesine Sol Tıklayın. 3. Union (Kaynat) veya Difference (Çıkar) işlemini seçin. 4. Enter veya Sağ Tık ile meshleri tek parça haline getirin.",
    "icon": "icons/mesh/ribbon/msh_boolean.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshBooleanUnion",
    "mouseAction": "Sol Tık: Poligon ağları arasında Boolean kesim ve birleşim yapar | Sağ Tık: Son Boolean'ı yineler",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Farklı yerlerden gelen iki STL figürünü (örneğin bir kartal kafası ile yüzük gövdesini) birbirine eklerken standart Boolean çalışmaz; mutlaka Mesh Boolean Union kullanmalısınız (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Mesh Boolean komutu. STL ve mesh formatındaki nesneleri birbirine kaynatır veya birinden diğerini kesip çıkarır. Nesneleri seçip Enter veya Sağ Tık ile işlemi uygulayın.",
    "cmdPrompt": "Command: _MeshBooleanUnion\\nSelect meshes to combine into single solid <Enter>:",
    "cmdOptions": [
      {
        "name": "Difference",
        "desc": "Fark / Kes: Birinci mesh nesnesinden ikincisini oyup delik çıkarır."
      },
      {
        "name": "Union",
        "desc": "Birleştir: İki ayrı STL parçasını tek gövdede kaynatır."
      }
    ]
  },
  "msh_render_props": {
    "id": "msh_render_props",
    "name": "Render Mesh Properties",
    "trName": "Mesh Görünüm Detay Ayarı",
    "meaning": "Mesh Görünüm Detay Ayarı",
    "shortDesc": "Ekranda pürüzsüz görünmesi için poligon hassasiyetini belirler.",
    "icon": "icons/mesh/ribbon/msh_render_props.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MeshProperties",
    "mouseAction": "Sol Tık: Komutu Başlatır | Sağ Tık: Son Ayarlarla Tekrarlar",
    "options": [
      {
        "key": "Density",
        "desc": "Poligon yoğunluğu"
      }
    ],
    "jewelerTip": "3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır.",
    "ttsText": "Render Mesh Properties komutu. Türkçe anlamı: Mesh Görünüm Detay Ayarı. Ekranda pürüzsüz görünmesi için poligon hassasiyetini belirler. Püf noktası: 3D baskı hazırlığı, STL onarımı ve döküm için kritik mesh aracıdır."
  },
  "msh_3d_face": {
    "id": "msh_3d_face",
    "name": "3-D Face",
    "trName": "3D Poligon Yüzü",
    "meaning": "3D Poligon Yüzü",
    "shortDesc": "Noktalar işaretleyerek tek parça poligon yüz oluşturur.",
    "icon": "icons/mesh/subtools/msh_3d_face.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_3dFace",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _3dFace",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "3-D Face komutu. Türkçe anlamı: 3D Poligon Yüzü. Noktalar işaretleyerek tek parça poligon yüz oluşturur. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_plane": {
    "id": "msh_plane",
    "name": "Mesh Plane",
    "trName": "Mesh Düzlemi",
    "meaning": "Mesh Düzlemi",
    "shortDesc": "Poligon ızgaralı düzlem katı üretir.",
    "icon": "icons/mesh/subtools/msh_plane.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshPlane",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshPlane",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Plane komutu. Türkçe anlamı: Mesh Düzlemi. Poligon ızgaralı düzlem katı üretir. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_box": {
    "id": "msh_box",
    "name": "Mesh Box",
    "trName": "Mesh Kutu",
    "meaning": "Mesh Kutu",
    "shortDesc": "Düşük poligonlu kutu gövde kurar.",
    "icon": "icons/mesh/subtools/msh_box.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshBox",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshBox",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Box komutu. Türkçe anlamı: Mesh Kutu. Düşük poligonlu kutu gövde kurar. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_sphere": {
    "id": "msh_sphere",
    "name": "Mesh Sphere",
    "trName": "Mesh Küre",
    "meaning": "Mesh Küre",
    "shortDesc": "Üçgen ağlardan oluşan küre üretir.",
    "icon": "icons/mesh/subtools/msh_sphere.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshSphere",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshSphere",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Sphere komutu. Türkçe anlamı: Mesh Küre. Üçgen ağlardan oluşan küre üretir. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_ellipsoid": {
    "id": "msh_ellipsoid",
    "name": "Mesh Ellipsoid",
    "trName": "Mesh Elipsoid",
    "meaning": "Mesh Elipsoid",
    "shortDesc": "Basık mesh küre üretir.",
    "icon": "icons/mesh/subtools/msh_ellipsoid.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshEllipsoid",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshEllipsoid",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Ellipsoid komutu. Türkçe anlamı: Mesh Elipsoid. Basık mesh küre üretir. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_cone": {
    "id": "msh_cone",
    "name": "Mesh Cone",
    "trName": "Mesh Koni",
    "meaning": "Mesh Koni",
    "shortDesc": "Poligonal koni gövde açar.",
    "icon": "icons/mesh/subtools/msh_cone.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshCone",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshCone",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Cone komutu. Türkçe anlamı: Mesh Koni. Poligonal koni gövde açar. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_tc_cone": {
    "id": "msh_tc_cone",
    "name": "Mesh Truncated Cone",
    "trName": "Mesh Kesik Koni",
    "meaning": "Mesh Kesik Koni",
    "shortDesc": "Alt ve üst çapı farklı külah üretir.",
    "icon": "icons/mesh/subtools/msh_tc_cone.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshTCone",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshTCone",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Truncated Cone komutu. Türkçe anlamı: Mesh Kesik Koni. Alt ve üst çapı farklı külah üretir. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_cylinder": {
    "id": "msh_cylinder",
    "name": "Mesh Cylinder",
    "trName": "Mesh Silindir",
    "meaning": "Mesh Silindir",
    "shortDesc": "Poligon silindir diker.",
    "icon": "icons/mesh/subtools/msh_cylinder.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshCylinder",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshCylinder",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Cylinder komutu. Türkçe anlamı: Mesh Silindir. Poligon silindir diker. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_torus": {
    "id": "msh_torus",
    "name": "Mesh Torus",
    "trName": "Mesh Simit / Halka",
    "meaning": "Mesh Simit / Halka",
    "shortDesc": "Poligon simit halka üretir.",
    "icon": "icons/mesh/subtools/msh_torus.png",
    "isFlyoutSub": true,
    "parentId": "msh_primitives",
    "parentName": "Primitives",
    "rhinoCommand": "_MeshTorus",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshTorus",
        "desc": "Geometri parametrelerini girin."
      }
    ],
    "options": [],
    "jewelerTip": "Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır.",
    "ttsText": "Mesh Torus komutu. Türkçe anlamı: Mesh Simit / Halka. Poligon simit halka üretir. Püf noktası: Mesh ilkel geometriler SubD ve organik şekillendirmeye başlarken temel iskelet olarak kullanılır."
  },
  "msh_match_edge": {
    "id": "msh_match_edge",
    "name": "Match Mesh Edge",
    "trName": "Kenar Boşluğunu Kapat",
    "meaning": "Kenar Boşluğunu Kapat",
    "shortDesc": "Aralık kalmış mesh kenarlarını birbirine yapıştırır.",
    "icon": "icons/mesh/subtools/msh_match_edge.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_MatchMeshEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MatchMeshEdge",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Match Mesh Edge komutu. Türkçe anlamı: Kenar Boşluğunu Kapat. Aralık kalmış mesh kenarlarını birbirine yapıştırır. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_fill_hole": {
    "id": "msh_fill_hole",
    "name": "Fill Mesh Hole",
    "trName": "Tek Deliği Kapat",
    "meaning": "Tek Deliği Kapat",
    "shortDesc": "Tıklanan açık deliği üçgenlerle yamayarak kapatır.",
    "icon": "icons/mesh/subtools/msh_fill_hole.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_FillMeshHole",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _FillMeshHole",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Fill Mesh Hole komutu. Türkçe anlamı: Tek Deliği Kapat. Tıklanan açık deliği üçgenlerle yamayarak kapatır. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_fill_all_holes": {
    "id": "msh_fill_all_holes",
    "name": "Fill Mesh Holes (All)",
    "trName": "Tüm Delikleri Kapat",
    "meaning": "Tüm Delikleri Kapat",
    "shortDesc": "Modeldeki tüm açık delikleri tek tıkla su geçirmez kapatır.",
    "icon": "icons/mesh/subtools/msh_fill_all_holes.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_FillMeshHoles",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _FillMeshHoles",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Fill Mesh Holes (All) komutu. Türkçe anlamı: Tüm Delikleri Kapat. Modeldeki tüm açık delikleri tek tıkla su geçirmez kapatır. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_patch_face": {
    "id": "msh_patch_face",
    "name": "Patch Single Face",
    "trName": "Tek Yüzü Yamala",
    "meaning": "Tek Yüzü Yamala",
    "shortDesc": "Eksik kalmış poligon deliğini örer.",
    "icon": "icons/mesh/subtools/msh_patch_face.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_PatchSingleFace",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _PatchSingleFace",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Patch Single Face komutu. Türkçe anlamı: Tek Yüzü Yamala. Eksik kalmış poligon deliğini örer. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_unify_normals": {
    "id": "msh_unify_normals",
    "name": "Unify Mesh Normals",
    "trName": "Normalleri Dışa Hizala",
    "meaning": "Normalleri Dışa Hizala",
    "shortDesc": "İçe dönük ters üçgenleri otomatik dışa çevirir.",
    "icon": "icons/mesh/subtools/msh_unify_normals.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_UnifyMeshNormals",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _UnifyMeshNormals",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Unify Mesh Normals komutu. Türkçe anlamı: Normalleri Dışa Hizala. İçe dönük ters üçgenleri otomatik dışa çevirir. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_align_vertices": {
    "id": "msh_align_vertices",
    "name": "Align Mesh Vertices",
    "trName": "Noktaları Hizala",
    "meaning": "Noktaları Hizala",
    "shortDesc": "Yakın duran noktaları toleransla üst üste kilitler.",
    "icon": "icons/mesh/subtools/msh_align_vertices.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_AlignMeshVertices",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _AlignMeshVertices",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Align Mesh Vertices komutu. Türkçe anlamı: Noktaları Hizala. Yakın duran noktaları toleransla üst üste kilitler. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_split_edge": {
    "id": "msh_split_edge",
    "name": "Split Mesh Edge",
    "trName": "Mesh Kenarını Böl",
    "meaning": "Mesh Kenarını Böl",
    "shortDesc": "Poligon kenarını ikiye ayırır.",
    "icon": "icons/mesh/subtools/msh_split_edge.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_SplitMeshEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SplitMeshEdge",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Split Mesh Edge komutu. Türkçe anlamı: Mesh Kenarını Böl. Poligon kenarını ikiye ayırır. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_swap_edge": {
    "id": "msh_swap_edge",
    "name": "Swap Mesh Edge",
    "trName": "Kenar Yönünü Çaprazla",
    "meaning": "Kenar Yönünü Çaprazla",
    "shortDesc": "İki üçgen arasındaki diyagonal dikiş yönünü ters çevirir.",
    "icon": "icons/mesh/subtools/msh_swap_edge.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_SwapMeshEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SwapMeshEdge",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Swap Mesh Edge komutu. Türkçe anlamı: Kenar Yönünü Çaprazla. İki üçgen arasındaki diyagonal dikiş yönünü ters çevirir. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_extract_nonmanifold": {
    "id": "msh_extract_nonmanifold",
    "name": "Extract Non-Manifold Edges",
    "trName": "Manifold Olmayan Kenarları Ayır",
    "meaning": "Manifold Olmayan Kenarları Ayır",
    "shortDesc": "Kendi üstüne katlanmış döküm hatası kenarları ayıklar.",
    "icon": "icons/mesh/subtools/msh_extract_nonmanifold.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_ExtractNonManifoldMeshEdges",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractNonManifoldMeshEdges",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Extract Non-Manifold Edges komutu. Türkçe anlamı: Manifold Olmayan Kenarları Ayır. Kendi üstüne katlanmış döküm hatası kenarları ayıklar. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_split_disjoint": {
    "id": "msh_split_disjoint",
    "name": "Split Disjoint Mesh",
    "trName": "Ayrık Parçaları Böl",
    "meaning": "Ayrık Parçaları Böl",
    "shortDesc": "Birbirine temas etmeyen parçaları bağımsız objelere ayırır.",
    "icon": "icons/mesh/subtools/msh_split_disjoint.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_SplitDisjointMesh",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SplitDisjointMesh",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Split Disjoint Mesh komutu. Türkçe anlamı: Ayrık Parçaları Böl. Birbirine temas etmeyen parçaları bağımsız objelere ayırır. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_check": {
    "id": "msh_check",
    "name": "Check Mesh",
    "trName": "Mesh Sağlık Kontrolü",
    "meaning": "Mesh Sağlık Kontrolü",
    "shortDesc": "Delik, ters yüzey ve manifold hatalarını denetler.",
    "icon": "icons/mesh/subtools/msh_check.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_Check",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Check",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Check Mesh komutu. Türkçe anlamı: Mesh Sağlık Kontrolü. Delik, ters yüzey ve manifold hatalarını denetler. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_cull_deg": {
    "id": "msh_cull_deg",
    "name": "Cull Degenerate Faces",
    "trName": "Sıfır Alanlı Yüzleri Temizle",
    "meaning": "Sıfır Alanlı Yüzleri Temizle",
    "shortDesc": "Alansız çizgi haline gelmiş bozuk poligonları siler.",
    "icon": "icons/mesh/subtools/msh_cull_deg.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_CullDegenerateMeshFaces",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CullDegenerateMeshFaces",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Cull Degenerate Faces komutu. Türkçe anlamı: Sıfır Alanlı Yüzleri Temizle. Alansız çizgi haline gelmiş bozuk poligonları siler. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_rebuild_normals": {
    "id": "msh_rebuild_normals",
    "name": "Rebuild Mesh Normals",
    "trName": "Normalleri Yeniden Kur",
    "meaning": "Normalleri Yeniden Kur",
    "shortDesc": "Yüzey ışık yansıması normallerini baştan hesaplar.",
    "icon": "icons/mesh/subtools/msh_rebuild_normals.png",
    "isFlyoutSub": true,
    "parentId": "msh_repair_tools",
    "parentName": "Repair Tools",
    "rhinoCommand": "_RebuildMeshNormals",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _RebuildMeshNormals",
        "desc": "Tamir edilecek mesh'i seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller.",
    "ttsText": "Rebuild Mesh Normals komutu. Türkçe anlamı: Normalleri Yeniden Kur. Yüzey ışık yansıması normallerini baştan hesaplar. Püf noktası: Fill Mesh Holes ve Unify Mesh Normals, 3D reçine baskı makinesinin 'file has holes' hatası vermesini engeller."
  },
  "msh_unweld": {
    "id": "msh_unweld",
    "name": "Unweld Mesh",
    "trName": "Kaynakları Çöz (Unweld)",
    "meaning": "Kaynakları Çöz (Unweld)",
    "shortDesc": "Tüm köşe dikişlerini keskin fasetlere ayırır.",
    "icon": "icons/mesh/subtools/msh_unweld.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Unweld",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Unweld",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Unweld Mesh komutu. Türkçe anlamı: Kaynakları Çöz (Unweld). Tüm köşe dikişlerini keskin fasetlere ayırır. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_unweld_sel": {
    "id": "msh_unweld_sel",
    "name": "Unweld Selected Edge",
    "trName": "Seçili Kenarın Kaynağını Çöz",
    "meaning": "Seçili Kenarın Kaynağını Çöz",
    "shortDesc": "Sadece işaretlenen kenarı keskin çizgi yapar.",
    "icon": "icons/mesh/subtools/msh_unweld_sel.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_UnweldEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _UnweldEdge",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Unweld Selected Edge komutu. Türkçe anlamı: Seçili Kenarın Kaynağını Çöz. Sadece işaretlenen kenarı keskin çizgi yapar. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_weld": {
    "id": "msh_weld",
    "name": "Weld Mesh",
    "trName": "Mesh Kaynat (Weld)",
    "meaning": "Mesh Kaynat (Weld)",
    "shortDesc": "Açı toleransıyla (ör: 25°) üçgen köşelerini teğet pürüzsüzleştirir.",
    "icon": "icons/mesh/subtools/msh_weld.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Weld",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Weld",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Weld Mesh komutu. Türkçe anlamı: Mesh Kaynat (Weld). Açı toleransıyla (ör: 25°) üçgen köşelerini teğet pürüzsüzleştirir. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_weld_sel": {
    "id": "msh_weld_sel",
    "name": "Weld Selected Edge",
    "trName": "Seçili Kenarları Kaynat",
    "meaning": "Seçili Kenarları Kaynat",
    "shortDesc": "İşaretlenen kenar dikişlerini kaynaştırır.",
    "icon": "icons/mesh/subtools/msh_weld_sel.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_WeldEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _WeldEdge",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Weld Selected Edge komutu. Türkçe anlamı: Seçili Kenarları Kaynat. İşaretlenen kenar dikişlerini kaynaştırır. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_trim": {
    "id": "msh_trim",
    "name": "Trim Mesh",
    "trName": "Mesh Buda / Kes",
    "meaning": "Mesh Buda / Kes",
    "shortDesc": "Eğri veya yüzeyle meshin fazlalıklarını kesip atar.",
    "icon": "icons/mesh/subtools/msh_trim.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Trim",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Trim",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Trim Mesh komutu. Türkçe anlamı: Mesh Buda / Kes. Eğri veya yüzeyle meshin fazlalıklarını kesip atar. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_split": {
    "id": "msh_split",
    "name": "Split Mesh",
    "trName": "Mesh Böl",
    "meaning": "Mesh Böl",
    "shortDesc": "Mesh nesnesini kesici çizgi boyunca ayırır.",
    "icon": "icons/mesh/subtools/msh_split.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Split",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Split",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Split Mesh komutu. Türkçe anlamı: Mesh Böl. Mesh nesnesini kesici çizgi boyunca ayırır. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_merge_faces": {
    "id": "msh_merge_faces",
    "name": "Merge 2 Mesh Faces",
    "trName": "2 Yüzü Birleştir",
    "meaning": "2 Yüzü Birleştir",
    "shortDesc": "Bitişik iki üçgeni dörtgen yapar.",
    "icon": "icons/mesh/subtools/msh_merge_faces.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_Merge2MeshFaces",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Merge2MeshFaces",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Merge 2 Mesh Faces komutu. Türkçe anlamı: 2 Yüzü Birleştir. Bitişik iki üçgeni dörtgen yapar. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_extract_edge": {
    "id": "msh_extract_edge",
    "name": "Extract Mesh Edge",
    "trName": "Mesh Kenarını Çizgi Olarak Al",
    "meaning": "Mesh Kenarını Çizgi Olarak Al",
    "shortDesc": "Poligon kenarlarından 3D eğri çıkarır.",
    "icon": "icons/mesh/subtools/msh_extract_edge.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_ExtractMeshEdges",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractMeshEdges",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Extract Mesh Edge komutu. Türkçe anlamı: Mesh Kenarını Çizgi Olarak Al. Poligon kenarlarından 3D eğri çıkarır. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_extract_render_mesh": {
    "id": "msh_extract_render_mesh",
    "name": "Extract Render Mesh",
    "trName": "Render Ağını Ayıkla",
    "meaning": "Render Ağını Ayıkla",
    "shortDesc": "NURBS yüzeyin render üçgenlerini kopyalar.",
    "icon": "icons/mesh/subtools/msh_extract_render_mesh.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_ExtractRenderMesh",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractRenderMesh",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Extract Render Mesh komutu. Türkçe anlamı: Render Ağını Ayıkla. NURBS yüzeyin render üçgenlerini kopyalar. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_split_crv": {
    "id": "msh_split_crv",
    "name": "Split Mesh With Curve",
    "trName": "Eğri ile Mesh Kes",
    "meaning": "Eğri ile Mesh Kes",
    "shortDesc": "Çizilen 2D desen boyunca STL gövdeyi dilimler.",
    "icon": "icons/mesh/subtools/msh_split_crv.png",
    "isFlyoutSub": true,
    "parentId": "msh_edit_tools",
    "parentName": "Edit Tools",
    "rhinoCommand": "_MeshSplit",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshSplit",
        "desc": "Düzenleme işlemini uygulayın."
      }
    ],
    "options": [],
    "jewelerTip": "Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz.",
    "ttsText": "Split Mesh With Curve komutu. Türkçe anlamı: Eğri ile Mesh Kes. Çizilen 2D desen boyunca STL gövdeyi dilimler. Püf noktası: Weld Mesh komutuna 40 derece açı vererek renderda poligon çizgilerinin kaybolup pürüzsüz görünmesini sağlayabilirsiniz."
  },
  "msh_col_area": {
    "id": "msh_col_area",
    "name": "Collapse By Area",
    "trName": "Alana Göre Erit",
    "meaning": "Alana Göre Erit",
    "shortDesc": "Belirli bir mm²'den küçük poligonları eritir.",
    "icon": "icons/mesh/subtools/msh_col_area.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_CollapseMeshByArea",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CollapseMeshByArea",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Collapse By Area komutu. Türkçe anlamı: Alana Göre Erit. Belirli bir mm²'den küçük poligonları eritir. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_col_aspect": {
    "id": "msh_col_aspect",
    "name": "Collapse By Aspect Ratio",
    "trName": "En-Boy Oranına Göre Erit",
    "meaning": "En-Boy Oranına Göre Erit",
    "shortDesc": "İnce uzun kılcal üçgenleri temizler.",
    "icon": "icons/mesh/subtools/msh_col_aspect.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_CollapseMeshByAspectRatio",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CollapseMeshByAspectRatio",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Collapse By Aspect Ratio komutu. Türkçe anlamı: En-Boy Oranına Göre Erit. İnce uzun kılcal üçgenleri temizler. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_col_edge_len": {
    "id": "msh_col_edge_len",
    "name": "Collapse By Edge Length",
    "trName": "Kenar Boyuna Göre Erit",
    "meaning": "Kenar Boyuna Göre Erit",
    "shortDesc": "Mikron boyundaki minik kenarları yok eder.",
    "icon": "icons/mesh/subtools/msh_col_edge_len.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_CollapseMeshByEdgeLength",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CollapseMeshByEdgeLength",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Collapse By Edge Length komutu. Türkçe anlamı: Kenar Boyuna Göre Erit. Mikron boyundaki minik kenarları yok eder. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_col_edge": {
    "id": "msh_col_edge",
    "name": "Collapse Edge",
    "trName": "Tek Kenarı Erit",
    "meaning": "Tek Kenarı Erit",
    "shortDesc": "Seçilen kenarı tek noktaya çökertir.",
    "icon": "icons/mesh/subtools/msh_col_edge.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_CollapseMeshEdge",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CollapseMeshEdge",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Collapse Edge komutu. Türkçe anlamı: Tek Kenarı Erit. Seçilen kenarı tek noktaya çökertir. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_col_face": {
    "id": "msh_col_face",
    "name": "Collapse Face",
    "trName": "Tek Yüzü Erit",
    "meaning": "Tek Yüzü Erit",
    "shortDesc": "Seçili poligonu merkeze toplayıp siler.",
    "icon": "icons/mesh/subtools/msh_col_face.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_CollapseMeshFace",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CollapseMeshFace",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Collapse Face komutu. Türkçe anlamı: Tek Yüzü Erit. Seçili poligonu merkeze toplayıp siler. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_col_vertex": {
    "id": "msh_col_vertex",
    "name": "Collapse Vertex",
    "trName": "Noktayı Erit",
    "meaning": "Noktayı Erit",
    "shortDesc": "Seçili tepe noktasını komşusuna kilitler.",
    "icon": "icons/mesh/subtools/msh_col_vertex.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_CollapseMeshVertex",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _CollapseMeshVertex",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Collapse Vertex komutu. Türkçe anlamı: Noktayı Erit. Seçili tepe noktasını komşusuna kilitler. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_col_rebuild": {
    "id": "msh_col_rebuild",
    "name": "Reduce Mesh",
    "trName": "Poligon Sayısını Düşür (%50)",
    "meaning": "Poligon Sayısını Düşür (%50)",
    "shortDesc": "Detayı koruyarak poligon sayısını yarıya indirir.",
    "icon": "icons/mesh/subtools/msh_col_rebuild.png",
    "isFlyoutSub": true,
    "parentId": "msh_collapse",
    "parentName": "Collapse",
    "rhinoCommand": "_ReduceMesh",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ReduceMesh",
        "desc": "Sadeleştirme oranını belirleyin."
      }
    ],
    "options": [],
    "jewelerTip": "ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz.",
    "ttsText": "Reduce Mesh komutu. Türkçe anlamı: Poligon Sayısını Düşür (%50). Detayı koruyarak poligon sayısını yarıya indirir. Püf noktası: ReduceMesh ile 500 MB boyutundaki ağır tarama modellerini 50 MB'a düşürüp kasmadan çalışabilirsiniz."
  },
  "msh_ext_draft": {
    "id": "msh_ext_draft",
    "name": "Extract By Draft Angle",
    "trName": "Kalıp Açısına Göre Yüz Ayır",
    "meaning": "Kalıp Açısına Göre Yüz Ayır",
    "shortDesc": "Kalıptan çıkmayan ters açılı üçgenleri ayıklar.",
    "icon": "icons/mesh/subtools/msh_ext_draft.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractMeshFacesByDraftAngle",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractMeshFacesByDraftAngle",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract By Draft Angle komutu. Türkçe anlamı: Kalıp Açısına Göre Yüz Ayır. Kalıptan çıkmayan ters açılı üçgenleri ayıklar. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_ext_area": {
    "id": "msh_ext_area",
    "name": "Extract By Face Area",
    "trName": "Alana Göre Yüz Ayır",
    "meaning": "Alana Göre Yüz Ayır",
    "shortDesc": "Büyük veya küçük üçgenleri seçip koparır.",
    "icon": "icons/mesh/subtools/msh_ext_area.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractMeshFacesByArea",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractMeshFacesByArea",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract By Face Area komutu. Türkçe anlamı: Alana Göre Yüz Ayır. Büyük veya küçük üçgenleri seçip koparır. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_ext_curv": {
    "id": "msh_ext_curv",
    "name": "Extract By Curvature",
    "trName": "Eğriliğe Göre Ayır",
    "meaning": "Eğriliğe Göre Ayır",
    "shortDesc": "Kavisli bölgeleri düz bölgelerden ayırır.",
    "icon": "icons/mesh/subtools/msh_ext_curv.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractMeshFacesByCurvature",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractMeshFacesByCurvature",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract By Curvature komutu. Türkçe anlamı: Eğriliğe Göre Ayır. Kavisli bölgeleri düz bölgelerden ayırır. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_ext_connected": {
    "id": "msh_ext_connected",
    "name": "Extract Connected Faces",
    "trName": "Bağlantılı Yüzleri Ayır",
    "meaning": "Bağlantılı Yüzleri Ayır",
    "shortDesc": "Aynı yüzey parçasındaki tüm üçgenleri seçip koparır.",
    "icon": "icons/mesh/subtools/msh_ext_connected.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractConnectedMeshFaces",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractConnectedMeshFaces",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract Connected Faces komutu. Türkçe anlamı: Bağlantılı Yüzleri Ayır. Aynı yüzey parçasındaki tüm üçgenleri seçip koparır. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_ext_duplicate": {
    "id": "msh_ext_duplicate",
    "name": "Extract Duplicate Faces",
    "trName": "Çift / Mükerrer Yüzleri Ayır",
    "meaning": "Çift / Mükerrer Yüzleri Ayır",
    "shortDesc": "Üst üste binmiş ikinci kopya poligonları ayıklar.",
    "icon": "icons/mesh/subtools/msh_ext_duplicate.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractDuplicateMeshFaces",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractDuplicateMeshFaces",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract Duplicate Faces komutu. Türkçe anlamı: Çift / Mükerrer Yüzleri Ayır. Üst üste binmiş ikinci kopya poligonları ayıklar. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_ext_hole_bound": {
    "id": "msh_ext_hole_bound",
    "name": "Extract Hole Boundary",
    "trName": "Delik Çerçevesini Eğri Olarak Al",
    "meaning": "Delik Çerçevesini Eğri Olarak Al",
    "shortDesc": "Deliklerin etrafındaki çıplak kenarları 3D eğri yapar.",
    "icon": "icons/mesh/subtools/msh_ext_hole_bound.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractMeshHoleBoundary",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractMeshHoleBoundary",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract Hole Boundary komutu. Türkçe anlamı: Delik Çerçevesini Eğri Olarak Al. Deliklerin etrafındaki çıplak kenarları 3D eğri yapar. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_ext_part": {
    "id": "msh_ext_part",
    "name": "Extract Mesh Part",
    "trName": "Bağımsız Parçayı Kopar",
    "meaning": "Bağımsız Parçayı Kopar",
    "shortDesc": "Modelin bir kolunu veya parçasını ana gövdeden ayırır.",
    "icon": "icons/mesh/subtools/msh_ext_part.png",
    "isFlyoutSub": true,
    "parentId": "msh_extract",
    "parentName": "Extract",
    "rhinoCommand": "_ExtractMeshFaces",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ExtractMeshFaces",
        "desc": "Ayıklanacak üçgenleri seçin."
      }
    ],
    "options": [],
    "jewelerTip": "Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler.",
    "ttsText": "Extract Mesh Part komutu. Türkçe anlamı: Bağımsız Parçayı Kopar. Modelin bir kolunu veya parçasını ana gövdeden ayırır. Püf noktası: Extract Duplicate Faces komutu 3D baskıda dilimleme (slicing) hatası yaratan çift katmanlı yüzleri temizler."
  },
  "msh_bool_union": {
    "id": "msh_bool_union",
    "name": "Mesh Boolean Union",
    "trName": "Mesh Katı Birleştir",
    "meaning": "Mesh Katı Birleştir",
    "shortDesc": "İki bağımsız STL/mesh gövdeyi tek parça kapalı STL yapar.",
    "icon": "icons/mesh/subtools/msh_bool_union.png",
    "isFlyoutSub": true,
    "parentId": "msh_boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_MeshBooleanUnion",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshBooleanUnion",
        "desc": "Mesh nesneleri seçip Enter'a basın."
      }
    ],
    "options": [],
    "jewelerTip": "NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz.",
    "ttsText": "Mesh Boolean Union komutu. Türkçe anlamı: Mesh Katı Birleştir. İki bağımsız STL/mesh gövdeyi tek parça kapalı STL yapar. Püf noktası: NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz."
  },
  "msh_bool_diff": {
    "id": "msh_bool_diff",
    "name": "Mesh Boolean Difference",
    "trName": "Mesh Fark / Çıkarma",
    "meaning": "Mesh Fark / Çıkarma",
    "shortDesc": "İlk STL gövdeden ikinci STL gövdeyi oyup çıkarır.",
    "icon": "icons/mesh/subtools/msh_bool_diff.png",
    "isFlyoutSub": true,
    "parentId": "msh_boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_MeshBooleanDifference",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshBooleanDifference",
        "desc": "Mesh nesneleri seçip Enter'a basın."
      }
    ],
    "options": [],
    "jewelerTip": "NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz.",
    "ttsText": "Mesh Boolean Difference komutu. Türkçe anlamı: Mesh Fark / Çıkarma. İlk STL gövdeden ikinci STL gövdeyi oyup çıkarır. Püf noktası: NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz."
  },
  "msh_bool_inters": {
    "id": "msh_bool_inters",
    "name": "Mesh Boolean Intersection",
    "trName": "Mesh Kesişim",
    "meaning": "Mesh Kesişim",
    "shortDesc": "Ortak çakışan hacmi korur.",
    "icon": "icons/mesh/subtools/msh_bool_inters.png",
    "isFlyoutSub": true,
    "parentId": "msh_boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_MeshBooleanIntersection",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshBooleanIntersection",
        "desc": "Mesh nesneleri seçip Enter'a basın."
      }
    ],
    "options": [],
    "jewelerTip": "NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz.",
    "ttsText": "Mesh Boolean Intersection komutu. Türkçe anlamı: Mesh Kesişim. Ortak çakışan hacmi korur. Püf noktası: NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz."
  },
  "msh_bool_split": {
    "id": "msh_bool_split",
    "name": "Mesh Boolean Split",
    "trName": "Mesh Boolean Bölme",
    "meaning": "Mesh Boolean Bölme",
    "shortDesc": "Mesh nesnesini diğer mesh ile dilimlere ayırır.",
    "icon": "icons/mesh/subtools/msh_bool_split.png",
    "isFlyoutSub": true,
    "parentId": "msh_boolean",
    "parentName": "Boolean",
    "rhinoCommand": "_MeshBooleanSplit",
    "mouseAction": "Sol Tık: Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _MeshBooleanSplit",
        "desc": "Mesh nesneleri seçip Enter'a basın."
      }
    ],
    "options": [],
    "jewelerTip": "NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz.",
    "ttsText": "Mesh Boolean Split komutu. Türkçe anlamı: Mesh Boolean Bölme. Mesh nesnesini diğer mesh ile dilimlere ayırır. Püf noktası: NURBS Boolean hata veriyorsa nesneleri yüksek çözünürlüklü mesh yapıp MeshBoolean ile garantili kesebilirsiniz."
  }
};

function findMeshCommand(cmdId) {
  if (!cmdId) return null;
  if (meshCommandsCatalog[cmdId]) return meshCommandsCatalog[cmdId];
  return null;
}

window.meshRibbonRows = meshRibbonRows;
window.meshFlyoutDrawers = meshFlyoutDrawers;
window.meshCommandsCatalog = meshCommandsCatalog;
window.findMeshCommand = findMeshCommand;
