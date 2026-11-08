// MATRIXGOLD & RHINO - RENDER (FOTOĞRAF & ANİMASYON STÜDYOSU) VERİ KATALOĞU
// 10 Ana Şerit Komutu + 2 Alt Çekmece + 12 Alt Araç

const renderRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: RENDER (FOTOĞRAF & ANİMASYON STÜDYOSU)",
    "tools": [
      {
        "id": "rnd_studio",
        "name": "Render Studio",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_studio.png"
      },
      {
        "id": "rnd_batch",
        "name": "Batch Render",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_batch.png"
      },
      {
        "id": "rnd_anim_studio",
        "name": "Animation Studio",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_anim_studio.png"
      },
      {
        "id": "rnd_render",
        "name": "Render",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_render.png"
      },
      {
        "id": "rnd_shade",
        "name": "Shade",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_shade.png"
      },
      {
        "id": "rnd_preview",
        "name": "Render Preview",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_preview.png"
      },
      {
        "id": "rnd_lights",
        "name": "Lights",
        "hasFlyout": true,
        "flyoutKey": "lights",
        "subCount": 8,
        "icon": "icons/render/ribbon/rnd_lights.png"
      },
      {
        "id": "rnd_effects",
        "name": "Effects",
        "hasFlyout": true,
        "flyoutKey": "effects",
        "subCount": 4,
        "icon": "icons/render/ribbon/rnd_effects.png"
      },
      {
        "id": "rnd_properties",
        "name": "Properties",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_properties.png"
      },
      {
        "id": "rnd_save",
        "name": "Save Render Image",
        "hasFlyout": false,
        "flyoutKey": null,
        "subCount": 0,
        "icon": "icons/render/ribbon/rnd_save.png"
      }
    ]
  }
];

const renderFlyoutDrawers = {
  "lights": {
    "key": "lights",
    "title": "Lights",
    "trTitle": "Stüdyo Işık Takımı",
    "count": 8,
    "subIds": [
      "rnd_spotlight",
      "rnd_point_light",
      "rnd_directional_light",
      "rnd_rect_light",
      "rnd_linear_light",
      "rnd_edit_light",
      "rnd_set_spotlight",
      "rnd_bounce_light"
    ]
  },
  "effects": {
    "key": "effects",
    "title": "Effects",
    "trTitle": "Render & Cila Efektleri",
    "count": 4,
    "subIds": [
      "rnd_apply_disp",
      "rnd_apply_shut",
      "rnd_apply_edge",
      "rnd_apply_curv_piping"
    ]
  }
};

const renderCommandsCatalog = {
  "rnd_studio": {
    "id": "rnd_studio",
    "name": "Render Studio",
    "trName": "Render Stüdyosu (Render Studio)",
    "meaning": "V-Ray Takı Fotoğraf Çadırı ve Malzeme Paneli",
    "shortDesc": "Öğrenci Adımları: 1. Render Studio simgesine Sol Tıklayın. 2. Açılan stüdyo kütüphanesinden zemin ortamını (Beyaz Fon, Siyah Ayna veya Deri Zemin) seçin. 3. Metallere 18K Sarı Altın, Beyaz Altın veya Rose Altın; taşlara Pırlanta malzemesini atayın. 4. Enter ile sahneyi kilitleyin.",
    "icon": "icons/render/ribbon/rnd_studio.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_RenderStudio",
    "mouseAction": "Sol Tık: V-Ray render stüdyo panelini açar | Sağ Tık: Son stüdyo temasını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _RenderStudio",
        "desc": "Render Studio komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Pırlantaların ateşi (kıvılcımı ve renkli kırılmaları) doğru HDR stüdyo ışığı olmadan çıkmaz! Her zaman zemin yansımasını %15-20 seviyesinde tutarak takının havada asılı gibi durmasını önleyin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Render Studio komutu. Takılarınız için profesyonel fotoğraf çadırı, altın malzemeleri ve stüdyo ışıklarını ayarlar. Stüdyonuzu seçip malzemeleri atayın ve Enter ile onaylayın.",
    "cmdPrompt": "Command: _RenderStudio\\nOpening jewelry photo studio environment <Enter>:",
    "cmdOptions": [
      {
        "name": "Environment",
        "desc": "Çevre Ortamı: Stüdyo HDR ışık haritası ve zemin yansıması."
      },
      {
        "name": "Materials",
        "desc": "Malzeme Kütüphanesi: Pırlanta, zümrüt, safir ve 18K altın önayarları."
      },
      {
        "name": "GroundPlane",
        "desc": "Gölge Zemini: Takının altına gerçekçi yumuşak gölge düşürür."
      }
    ]
  },
  "rnd_batch": {
    "id": "rnd_batch",
    "name": "Batch Render",
    "trName": "Toplu Çoklu Açı Render (Batch Render)",
    "meaning": "Otomatik 4 Açı (Perspektif, Üst, Ön, Yan) Çıktı Üretici",
    "shortDesc": "Öğrenci Adımları: 1. Batch Render simgesine Sol Tıklayın. 2. Çıktı alınacak açıları (Perspektif, Ön, Yan, Üst) işaretleyin. 3. 'Start Batch' butonuna basın. Bilgisayar tüm açıları sırayla otomatik renderlayıp klasöre kaydeder.",
    "icon": "icons/render/ribbon/rnd_batch.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_BatchRender",
    "mouseAction": "Sol Tık: Çoklu açı render sırasını başlatır | Sağ Tık: Açı listesini düzenler",
    "commandSteps": [
      {
        "prompt": "Command: _BatchRender",
        "desc": "Batch Render komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Mesai bitiminde Batch Render'ı başlatıp bilgisayarı bırakırsanız, sabah geldiğinizde müşteriniz için hazırlanmış 5 farklı açının tamamını masanızda hazır bulursunuz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Batch Render komutu. Takınızın ön, yan, üst ve perspektif açılarını tek tıkla arka arkaya otomatik renderlar. Açıları seçip başlatın.",
    "cmdPrompt": "Command: _BatchRender\\nQueue viewpoints for automated sequential rendering <Enter>:",
    "cmdOptions": [
      {
        "name": "StandardAngles",
        "desc": "Standart 4 Açı: Kuyumcu kataloğu için perspektif, üst, yan ve montür açısı."
      },
      {
        "name": "AutoSaveDir",
        "desc": "Hedef Klasör: Görsellerin kaydedileceği proje klasörü."
      }
    ]
  },
  "rnd_anim_studio": {
    "id": "rnd_anim_studio",
    "name": "Animation Studio",
    "trName": "360 Döner Video Animasyonu (Animation Studio)",
    "meaning": "Takıyı Kendi Ekseni Etrafında Döndüren Video Üretici",
    "shortDesc": "Öğrenci Adımları: 1. Animation Studio simgesine Sol Tıklayın. 2. Animasyon tipi olarak '360 Turntable' seçin. 3. Dönüş süresini (ör: 5 saniye = 150 kare) ve dönüş merkezini (F4) belirleyin. 4. 'Render Animation' butonuna basarak MP4 video çıktısı alın.",
    "icon": "icons/render/ribbon/rnd_anim_studio.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_AnimationStudio",
    "mouseAction": "Sol Tık: 360 derece döner video animasyon stüdyosunu açar | Sağ Tık: Son animasyonu yineler",
    "commandSteps": [
      {
        "prompt": "Command: _AnimationStudio",
        "desc": "Animation Studio komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: WhatsApp veya Instagram'da müşteriye tek kare fotoğraf yerine 5 saniyelik 360 döner MP4 video göndermek sipariş onay oranını %80 artırır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Animation Studio komutu. Takınızın kendi etrafında 360 derece döndüğü profesyonel video animasyonları üretir. Süreyi belirleyip videoyu hesaplatın.",
    "cmdPrompt": "Command: _AnimationStudio\\nSetup 360 degree turntable video animation <Enter>:",
    "cmdOptions": [
      {
        "name": "Turntable360",
        "desc": "360 Derece Dönüş: Takının kendi ekseninde tam tur dönmesi."
      },
      {
        "name": "DurationSec",
        "desc": "Video Süresi: Genelde 5 veya 6 saniye (sosyal medya için ideal döngü)."
      },
      {
        "name": "VideoFormat",
        "desc": "Video Formatı: MP4 veya hareketli GIF çıktısı."
      }
    ]
  },
  "rnd_render": {
    "id": "rnd_render",
    "name": "Render",
    "trName": "Foto-Gerçekçi Render Al (Render)",
    "meaning": "Yüksek Çözünürlüklü V-Ray Çıktı Hesaplama",
    "shortDesc": "Öğrenci Adımları: 1. Kamerayı istediğiniz en etkileyici açıya getirin. 2. Render simgesine Sol Tıklayın. 3. V-Ray render motoru ışık ışınlarını hesaplamaya başlar; pırlantalar ve altın dokusu fotogerçekçi belirir. 4. Hesaplama bitince Save simgesiyle kaydedin.",
    "icon": "icons/render/ribbon/rnd_render.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Render",
    "mouseAction": "Sol Tık: Nihai yüksek kaliteli görseli renderlar | Sağ Tık: Son render penceresini açar",
    "commandSteps": [
      {
        "prompt": "Command: _Render",
        "desc": "Render komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Render alırken Denoiser (Kumlanma Giderici) kutucuğunu mutlaka işaretleyin. Böylece saatlerce beklemek yerine 2-3 dakikada cam gibi berrak bir pırlanta görseli elde edersiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Render komutu. Takınızın yüksek çözünürlüklü fotoğrafını hesaplar. Kamerayı ayarlayın, Denoiser'ı açın ve render butonuna basarak görüntüyü hesaplatın.",
    "cmdPrompt": "Command: _Render\\nStarting high-resolution raytracing render <Enter>:",
    "cmdOptions": [
      {
        "name": "Denoiser",
        "desc": "Kumlanma Giderici: Renderdaki pürüzleri yapay zekayla temizler (süreyi 3 kat kısaltır)."
      },
      {
        "name": "Quality",
        "desc": "Kalite Seviyesi: Taslak (Draft), Orta (Medium) veya Baskı (High)."
      }
    ]
  },
  "rnd_shade": {
    "id": "rnd_shade",
    "name": "Shade",
    "trName": "Gölgeli Sahne Önizleme (Shade)",
    "meaning": "Gerçek Zamanlı Maden Rengi Görünümü",
    "shortDesc": "Öğrenci Adımları: 1. Shade simgesine Sol Tıklayın. 2. Sahne tel kafesten çıkarak renkli metal ve taş parlaklığına bürünür. 3. Hızlı modelleme yaparken modelin kütlesel duruşunu inceleyin.",
    "icon": "icons/render/ribbon/rnd_shade.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Shade",
    "mouseAction": "Sol Tık: Gölgeli malzeme önizleme modunu açar/kapatır | Sağ Tık: Tel kafes moduna döner",
    "commandSteps": [
      {
        "prompt": "Command: _Shade",
        "desc": "Shade komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Çizim yaparken Shaded modunda çalışmak taşların alttaki metale batıp batmadığını çıplak gözle anında görmenizi sağlar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Shade komutu. Sahneyi gölgeli ve renkli malzeme görünümüne geçirir. Modellerinizin kütlesini ve taş yuvalarını rahatça inceleyebilirsiniz.",
    "cmdPrompt": "Command: _Shaded\\nSwitching viewport to shaded display mode <Enter>:",
    "cmdOptions": [
      {
        "name": "Wireframe",
        "desc": "Tel Kafes: Çizgileri şeffaf görmek için tel kafese döner."
      }
    ]
  },
  "rnd_preview": {
    "id": "rnd_preview",
    "name": "Render Preview",
    "trName": "Etkileşimli Hızlı Önizleme (Render Preview)",
    "meaning": "Canlı Işık ve Malzeme Test Penceresi",
    "shortDesc": "Öğrenci Adımları: 1. Render Preview simgesine Sol Tıklayın. 2. Ekranın bir köşesinde canlı küçük önizleme penceresi açılır. 3. Sahneyi çevirdikçe veya malzeme rengini değiştirdikçe anında güncellenir. 4. Kapatmak için pencereyi çarpıdan kapatın.",
    "icon": "icons/render/ribbon/rnd_preview.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_RenderPreview",
    "mouseAction": "Sol Tık: Canlı etkileşimli render önizlemesini açar/kapatır | Sağ Tık: Çözünürlüğü ayarlar",
    "commandSteps": [
      {
        "prompt": "Command: _RenderPreview",
        "desc": "Render Preview komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Tam render almadan önce taşların içine ışık girip girmediğini veya altının fazla sarı olup olmadığını Preview penceresinde 5 saniyede test edin (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Render Preview komutu. Malzeme ve ışık testleri için anlık canlı önizleme sunar. Tasarım üzerinde çalışırken görselin nasıl çıkacağını hemen kontrol edin.",
    "cmdPrompt": "Command: _RenderPreview\\nToggle real-time interactive viewport render <Enter>:",
    "cmdOptions": [
      {
        "name": "Realtime",
        "desc": "Canlı Güncelleme: Kamerayı hareket ettirirken anlık render görüntüsü."
      },
      {
        "name": "Resolution",
        "desc": "Önizleme Boyutu: Hızlı çalışabilmek için düşük piksel modu."
      }
    ]
  },
  "rnd_lights": {
    "id": "rnd_lights",
    "name": "Lights",
    "trName": "Stüdyo Işıkları (Lights)",
    "meaning": "Spot, Panel ve Parıltı Işıkları",
    "shortDesc": "Öğrenci Adımları: 1. Lights simgesine Sol Tıklayın. 2. Sahneye eklemek istediğiniz ışık tipini (Spot Light veya Dikdörtgen Panel / Rectangular Light) seçin. 3. Işığı takının üzerine 45 derece açıyla konumlandırın. 4. Enter ile sabitleyin.",
    "icon": "icons/render/ribbon/rnd_lights.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Lights",
    "mouseAction": "Sol Tık: Sahneye yönlü stüdyo ışığı yerleştirir | Sağ Tık: Işık yoğunluk panelini açar",
    "commandSteps": [
      {
        "prompt": "Command: _Lights",
        "desc": "Lights komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Profesyonel kuyumcu fotoğrafçılığında 3 nokta kuralı geçerlidir: Biri ana ışık (Key Light), biri gölgeleri yumuşatan dolgu ışığı (Fill Light), biri de taşın arkasından vuran kontur ışığıdır (Rim Light) (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Lights komutu. Sahneye spot ve yumuşak panel ışıklar ekler. Taşların ışıldamasını ve altın yüzeylerin parlamasını sağlar. Işığı konumlandırıp Enter ile onaylayın.",
    "cmdPrompt": "Command: _AddLight\\nPick light position and target <Enter>:",
    "cmdOptions": [
      {
        "name": "SpotLight",
        "desc": "Spot Işık: Pırlanta fasetlerine doğrudan vurup ateş çıkaran odaklı ışık."
      },
      {
        "name": "RectLight",
        "desc": "Panel Işık: Altın yüzeylerde yumuşak ve geniş beyaz ışık şeritleri oluşturur."
      }
    ]
  },
  "rnd_effects": {
    "id": "rnd_effects",
    "name": "Effects",
    "trName": "Işıltı & Parıltı Efektleri (Effects / Glare)",
    "meaning": "Taş Fasetlerine Yıldız Parıltısı Ekleme",
    "shortDesc": "Öğrenci Adımları: 1. Effects simgesine Sol Tıklayın. 2. 'Glare / Bloom' (Yıldız Parıltısı) kutusunu aktif edin. 3. Işıltı boyutunu ve ışın sayısını (4'lü veya 6'lı yıldız) ayarlayın. 4. Renderdaki pırlantalar göz alıcı şekilde parlar.",
    "icon": "icons/render/ribbon/rnd_effects.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Effects",
    "mouseAction": "Sol Tık: Parlama ve ışıltı post-prodüksiyon efektlerini açar | Sağ Tık: Efektleri sıfırlar",
    "commandSteps": [
      {
        "prompt": "Command: _Effects",
        "desc": "Effects komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Sosyal medya için hazırlanan görsellerde taşların üzerine hafif bir Glare (Yıldız Parıltısı) efekti eklemek müşterinin dikkatini doğrudan taşın berraklığına çeker (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Effects komutu. Pırlanta fasetlerinin üzerine yıldız ışıltısı ve parlama efektleri ekler. Taşların göz alıcı görünmesini sağlar. Enter ile onaylayın.",
    "cmdPrompt": "Command: _RenderEffects\\nConfigure lens flare and star glare effects <Enter>:",
    "cmdOptions": [
      {
        "name": "GlareSize",
        "desc": "Yıldız Büyüklüğü: Pırlantadan çıkan ışık huzmesinin boyu."
      },
      {
        "name": "Threshold",
        "desc": "Eşik Değeri: Sadece en parlak fasetlerde parıltı oluşmasını sağlar."
      }
    ]
  },
  "rnd_properties": {
    "id": "rnd_properties",
    "name": "Properties",
    "trName": "Render Çözünürlük & Kalite Ayarları",
    "meaning": "Piksel Ebatları (Full HD, 4K) ve Motor Ayarları",
    "shortDesc": "Öğrenci Adımları: 1. Properties simgesine Sol Tıklayın. 2. Genişlik ve Yükseklik piksellerini belirleyin (Instagram için 1080x1080 kare; katalog için 3840x2160 4K). 3. DPI değerini baskı için 300 yapın. 4. Enter ile kaydedin.",
    "icon": "icons/render/ribbon/rnd_properties.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_DocumentProperties",
    "mouseAction": "Sol Tık: Çözünürlük ve kamera ayar panelini açar | Sağ Tık: 1920x1080'e sıfırlar",
    "commandSteps": [
      {
        "prompt": "Command: _DocumentProperties",
        "desc": "Properties komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Takı renderlarında kamera odak uzaklığını (Lens Focal Length) en az 50 mm - 85 mm yapın. 35 mm altındaki geniş açılı lensler yüzüğün oranlarını balıkgözü gibi bozar (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Render Properties komutu. Görselin piksel çözünürlüğünü ve kamera lens ayarlarını belirler. İhtiyacınız olan çözünürlüğü seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _RenderProperties\\nAdjust output resolution and camera focal length <Enter>:",
    "cmdOptions": [
      {
        "name": "Square1080",
        "desc": "Instagram Kare: 1080 x 1080 piksel."
      },
      {
        "name": "FullHD",
        "desc": "Yatay Sunum: 1920 x 1080 piksel."
      },
      {
        "name": "4K_Print",
        "desc": "Ultra HD Baskı: 3840 x 2160 piksel."
      }
    ]
  },
  "rnd_save": {
    "id": "rnd_save",
    "name": "Save Render Image",
    "trName": "Görseli Kaydet (Save Render)",
    "meaning": "Şeffaf Arka Planlı PNG / JPEG İhracı",
    "shortDesc": "Öğrenci Adımları: 1. Render penceresinde hesaplama bitince Save Image simgesine Sol Tıklayın. 2. Dosya türü olarak 'PNG (with Alpha/Transparency)' seçin. 3. Dosya adını yazıp masaüstünüze kaydedin.",
    "icon": "icons/render/ribbon/rnd_save.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_SaveRenderWindowAs",
    "mouseAction": "Sol Tık: Renderlanan takı fotoğrafını kaydeder | Sağ Tık: Hızlı masaüstü kaydı",
    "commandSteps": [
      {
        "prompt": "Command: _SaveRenderWindowAs",
        "desc": "Save Render Image komutunu çalıştırın."
      }
    ],
    "options": [
      {
        "key": "Quality",
        "desc": "Görüntü kalitesi"
      },
      {
        "key": "Denoise",
        "desc": "Gürültü filtresi"
      }
    ],
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Müşteriye sunum hazırlarken veya e-ticaret sitenize yüklerken mutlaka Alpha (Şeffaf) PNG olarak kaydedin; böylece takıyı istediğiniz banner veya katalog zeminine kolayca yapıştırabilirsiniz (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Save Render Image komutu. Hesaplanan görseli şeffaf arka planlı PNG veya JPEG olarak bilgisayarınıza kaydeder. Formatı seçip Enter ile onaylayın.",
    "cmdPrompt": "Command: _SaveRenderImage\\nChoose file destination and format (PNG/JPEG) <Enter>:",
    "cmdOptions": [
      {
        "name": "AlphaPNG",
        "desc": "Şeffaf Arka Plan: Takının arkasındaki fonu boş bırakarak web sitesine veya kataloğa hazır eder."
      },
      {
        "name": "JPEG",
        "desc": "Standart Fotoğraf: Beyaz veya siyah zeminli sosyal medya formatı."
      }
    ]
  },
  "rnd_spotlight": {
    "id": "rnd_spotlight",
    "name": "Spotlight",
    "trName": "Spot Işık",
    "meaning": "Spot Işık",
    "shortDesc": "Taşın üzerine odaklanan yönlü koni ışık kaynağı.",
    "icon": "icons/render/subtools/rnd_spotlight.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_Spotlight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Spotlight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Spotlight komutu. Türkçe anlamı: Spot Işık. Taşın üzerine odaklanan yönlü koni ışık kaynağı. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_point_light": {
    "id": "rnd_point_light",
    "name": "Point Light",
    "trName": "Noktasal Işık",
    "meaning": "Noktasal Işık",
    "shortDesc": "Her yöne eşit yayılan ampul ışığı.",
    "icon": "icons/render/subtools/rnd_point_light.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_PointLight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _PointLight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Point Light komutu. Türkçe anlamı: Noktasal Işık. Her yöne eşit yayılan ampul ışığı. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_directional_light": {
    "id": "rnd_directional_light",
    "name": "Directional Light",
    "trName": "Güneş / Paralel Işık",
    "meaning": "Güneş / Paralel Işık",
    "shortDesc": "Sonsuz mesafeden gelen paralel güneş ışınları simüle eder.",
    "icon": "icons/render/subtools/rnd_directional_light.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_DirectionalLight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _DirectionalLight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Directional Light komutu. Türkçe anlamı: Güneş / Paralel Işık. Sonsuz mesafeden gelen paralel güneş ışınları simüle eder. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_rect_light": {
    "id": "rnd_rect_light",
    "name": "Rectangular Light",
    "trName": "Softbox / Dikdörtgen Işık",
    "meaning": "Softbox / Dikdörtgen Işık",
    "shortDesc": "Kuyumcu stüdyosu softbox ışık paneli.",
    "icon": "icons/render/subtools/rnd_rect_light.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_RectangularLight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _RectangularLight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Rectangular Light komutu. Türkçe anlamı: Softbox / Dikdörtgen Işık. Kuyumcu stüdyosu softbox ışık paneli. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_linear_light": {
    "id": "rnd_linear_light",
    "name": "Linear Light",
    "trName": "Floresan / Çizgisel Işık",
    "meaning": "Floresan / Çizgisel Işık",
    "shortDesc": "Tüp şeklinde çizgisel yumuşak ışık kaynağı.",
    "icon": "icons/render/subtools/rnd_linear_light.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_LinearLight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _LinearLight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Linear Light komutu. Türkçe anlamı: Floresan / Çizgisel Işık. Tüp şeklinde çizgisel yumuşak ışık kaynağı. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_edit_light": {
    "id": "rnd_edit_light",
    "name": "Edit Light By Highlight",
    "trName": "Parlama Noktasına Işık Taşı",
    "meaning": "Parlama Noktasına Işık Taşı",
    "shortDesc": "Taşın parlamasını istediğiniz noktaya tıklayarak ışığı otomatik yönlendirir.",
    "icon": "icons/render/subtools/rnd_edit_light.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_Highlight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _Highlight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Edit Light By Highlight komutu. Türkçe anlamı: Parlama Noktasına Işık Taşı. Taşın parlamasını istediğiniz noktaya tıklayarak ışığı otomatik yönlendirir. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_set_spotlight": {
    "id": "rnd_set_spotlight",
    "name": "Set Spotlight To View",
    "trName": "Kameraya Spot Işık Ata",
    "meaning": "Kameraya Spot Işık Ata",
    "shortDesc": "Işığı doğrudan bakış açınızdan modele dik gönderir.",
    "icon": "icons/render/subtools/rnd_set_spotlight.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_SetSpotlightToView",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _SetSpotlightToView",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Set Spotlight To View komutu. Türkçe anlamı: Kameraya Spot Işık Ata. Işığı doğrudan bakış açınızdan modele dik gönderir. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_bounce_light": {
    "id": "rnd_bounce_light",
    "name": "Bounce Light",
    "trName": "Yansıma Işığı",
    "meaning": "Yansıma Işığı",
    "shortDesc": "Aynadan veya beyaz reflektörden seken dolgu ışığı.",
    "icon": "icons/render/subtools/rnd_bounce_light.png",
    "isFlyoutSub": true,
    "parentId": "rnd_lights",
    "parentName": "Lights",
    "rhinoCommand": "_BounceLight",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _BounceLight",
        "desc": "Işık kaynağını konumlandırın."
      }
    ],
    "options": [
      {
        "key": "Intensity",
        "desc": "Işık parlaklığı"
      },
      {
        "key": "Color",
        "desc": "Işık rengi"
      }
    ],
    "jewelerTip": "Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın.",
    "ttsText": "Bounce Light komutu. Türkçe anlamı: Yansıma Işığı. Aynadan veya beyaz reflektörden seken dolgu ışığı. Püf noktası: Pırlantada sarı ve beyaz spot ışıkları çapraz yerleştirerek taşın parıltısını (fire) maksimuma çıkarın."
  },
  "rnd_apply_disp": {
    "id": "rnd_apply_disp",
    "name": "Apply Displacement",
    "trName": "Rölyef / Harita Kabartması",
    "meaning": "Rölyef / Harita Kabartması",
    "shortDesc": "Resimdeki siyah-beyaz deseni renderda gerçek 3D derinliğe dönüştürür.",
    "icon": "icons/render/subtools/rnd_apply_disp.png",
    "isFlyoutSub": true,
    "parentId": "rnd_effects",
    "parentName": "Effects",
    "rhinoCommand": "_ApplyDisplacement",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ApplyDisplacement",
        "desc": "Efekt parametrelerini uygulayın."
      }
    ],
    "options": [
      {
        "key": "Radius",
        "desc": "Yumuşatma yarıçapı"
      }
    ],
    "jewelerTip": "Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir.",
    "ttsText": "Apply Displacement komutu. Türkçe anlamı: Rölyef / Harita Kabartması. Resimdeki siyah-beyaz deseni renderda gerçek 3D derinliğe dönüştürür. Püf noktası: Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir."
  },
  "rnd_apply_shut": {
    "id": "rnd_apply_shut",
    "name": "Apply Shutlining",
    "trName": "Kanal Çizgisi Efekti",
    "meaning": "Kanal Çizgisi Efekti",
    "shortDesc": "Kalıp ayrım çizgilerini ve panelleri renderda otomatik oluklandırır.",
    "icon": "icons/render/subtools/rnd_apply_shut.png",
    "isFlyoutSub": true,
    "parentId": "rnd_effects",
    "parentName": "Effects",
    "rhinoCommand": "_ApplyShutlining",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ApplyShutlining",
        "desc": "Efekt parametrelerini uygulayın."
      }
    ],
    "options": [
      {
        "key": "Radius",
        "desc": "Yumuşatma yarıçapı"
      }
    ],
    "jewelerTip": "Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir.",
    "ttsText": "Apply Shutlining komutu. Türkçe anlamı: Kanal Çizgisi Efekti. Kalıp ayrım çizgilerini ve panelleri renderda otomatik oluklandırır. Püf noktası: Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir."
  },
  "rnd_apply_edge": {
    "id": "rnd_apply_edge",
    "name": "Apply Edge Softening",
    "trName": "Kenar Yumuşatma (Cila)",
    "meaning": "Kenar Yumuşatma (Cila)",
    "shortDesc": "Keskin 3D kenarları render motorunda sanal olarak pahlayıp parlatır.",
    "icon": "icons/render/subtools/rnd_apply_edge.png",
    "isFlyoutSub": true,
    "parentId": "rnd_effects",
    "parentName": "Effects",
    "rhinoCommand": "_ApplyEdgeSoftening",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ApplyEdgeSoftening",
        "desc": "Efekt parametrelerini uygulayın."
      }
    ],
    "options": [
      {
        "key": "Radius",
        "desc": "Yumuşatma yarıçapı"
      }
    ],
    "jewelerTip": "Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir.",
    "ttsText": "Apply Edge Softening komutu. Türkçe anlamı: Kenar Yumuşatma (Cila). Keskin 3D kenarları render motorunda sanal olarak pahlayıp parlatır. Püf noktası: Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir."
  },
  "rnd_apply_curv_piping": {
    "id": "rnd_apply_curv_piping",
    "name": "Apply Curve Piping",
    "trName": "Eğriye Sanal Tel Giydir",
    "meaning": "Eğriye Sanal Tel Giydir",
    "shortDesc": "Eğrileri katı boru yapmadan renderda tel gibi parlatır.",
    "icon": "icons/render/subtools/rnd_apply_curv_piping.png",
    "isFlyoutSub": true,
    "parentId": "rnd_effects",
    "parentName": "Effects",
    "rhinoCommand": "_ApplyCurvePiping",
    "mouseAction": "Sol Tık: Komutu Başlatır",
    "commandSteps": [
      {
        "prompt": "Command: _ApplyCurvePiping",
        "desc": "Efekt parametrelerini uygulayın."
      }
    ],
    "options": [
      {
        "key": "Radius",
        "desc": "Yumuşatma yarıçapı"
      }
    ],
    "jewelerTip": "Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir.",
    "ttsText": "Apply Curve Piping komutu. Türkçe anlamı: Eğriye Sanal Tel Giydir. Eğrileri katı boru yapmadan renderda tel gibi parlatır. Püf noktası: Edge Softening ile R=0.15mm yumuşatma vermek, bilgisayar renderını gerçek atölye cilalı altın gibi gösterir."
  }
};

function findRenderCommand(cmdId) {
  if (!cmdId) return null;
  if (renderCommandsCatalog[cmdId]) return renderCommandsCatalog[cmdId];
  return null;
}

window.renderRibbonRows = renderRibbonRows;
window.renderFlyoutDrawers = renderFlyoutDrawers;
window.renderCommandsCatalog = renderCommandsCatalog;
window.findRenderCommand = findRenderCommand;
