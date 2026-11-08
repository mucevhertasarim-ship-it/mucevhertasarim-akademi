// MATRIXGOLD & RHINO - CUTTERS (KESİCİLER VE KANAL AÇICILAR) VERİ KATALOĞU
// 9 Ana Şerit Komutu

const cuttersRibbonRows = [
  {
    "id": "row_1",
    "title": "1. Şerit: CUTTERS (KESİCİLER VE KANAL AÇICILAR)",
    "tools": [
      {
        "id": "ctr_cut_to_rail",
        "name": "Cut To Ring Rail",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_cut_to_rail.png"
      },
      {
        "id": "ctr_micro_prong_cutter",
        "name": "Micro Prong Cutter",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_micro_prong_cutter.png"
      },
      {
        "id": "ctr_channel_cutter",
        "name": "Channel Cutter",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_channel_cutter.png"
      },
      {
        "id": "ctr_gem_cutter_list",
        "name": "Gem Cutter List",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_gem_cutter_list.png"
      },
      {
        "id": "ctr_gem_cutter",
        "name": "Gem Cutter",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_gem_cutter.png"
      },
      {
        "id": "ctr_hinge",
        "name": "Hinge",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_hinge.png"
      },
      {
        "id": "ctr_hollow_ring",
        "name": "Hollow Ring",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_hollow_ring.png"
      },
      {
        "id": "ctr_micro_prong_2",
        "name": "Micro Prong Channel",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_micro_prong_2.png"
      },
      {
        "id": "ctr_scallop_cutter",
        "name": "Scallop Cutter",
        "hasFlyout": false,
        "icon": "icons/cutters/ribbon/ctr_scallop_cutter.png"
      }
    ]
  }
];

const cuttersFlyoutDrawers = {};

const cuttersCommandsCatalog = {
  "ctr_cut_to_rail": {
    "cmdOptions": [{"name": "OffsetInward", "desc": "İçe Ofset Payı: Parmak konforu için raya sıfır mı yoksa 0.10 mm geriden mi kesileceğini belirler."}],
    "cmdPrompt": "Command: _CutToRail\nSelect objects to trim:\nSelect ring rail curve:",
    "id": "ctr_cut_to_rail",
    "name": "Cut To Ring Rail",
    "trName": "Ray Sınırında Kesici",
    "meaning": "Ray Sınırında Kesici",
    "shortDesc": "Öğrenci Adımları: 1. Parmağın içine taşan tırnak, kadeh veya taş kesicilerini seçin. 2. Cut To Ring Rail simgesine Sol Tıklayın. 3. İç parmak rayını seçin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; halkanın içine taşan tüm fazlalıklar tek hamlede jilet gibi budanır.",
    "icon": "icons/cutters/ribbon/ctr_cut_to_rail.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_CutToRail",
    "mouseAction": "Sol Tık: Ray fazlalıklarını budar | Sağ Tık: Son rayla tekrarlar",
    "commandSteps": [
      {
        "prompt": "Command: _CutToRail",
        "desc": "Komut satırından Cut To Ring Rail aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yüzük içine sarkan tırnak dipleri müşterinin parmağını keser! Cut To Rail ile yüzük içi tamamen pürüzsüz daire haline getirilmelidir (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Cut To Ring Rail komutu. Parmak içine taşan tırnak ve parçaları iç ray sınırında budar."
  },
  "ctr_micro_prong_cutter": {
    "cmdOptions": [{"name": "VCutAngle", "desc": "V-Kesim Açısı: Tırnak aralarına atılacak V-kesik açısı (örn: 45°)."}, {"name": "Depth", "desc": "Kesim Derinliği: Bıçağın tırnak arasına dalma payı."}],
    "cmdPrompt": "Command: _MicroProngCutter\nSelect gems with prongs ( VCutAngle=45  Depth=0.40 ):",
    "id": "ctr_micro_prong_cutter",
    "name": "Micro Prong Cutter",
    "trName": "Mikro Tırnak Kesicisi",
    "meaning": "Mikro Tırnak Kesicisi",
    "shortDesc": "Öğrenci Adımları: 1. Mikro pavé taşları seçin. 2. Micro Prong Cutter simgesine Sol Tıklayın. 3. Tırnak diplerindeki V-kesik açısını ve tırnak kafası boşluğunu ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak tırnakların arasındaki madeni temizleyen mikro bıçakları üretin.",
    "icon": "icons/cutters/ribbon/ctr_micro_prong_cutter.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MicroProngCutter",
    "mouseAction": "Sol Tık: Mikro tırnak kesicisi üretir | Sağ Tık: Son ayarlarla yineler",
    "commandSteps": [
      {
        "prompt": "Command: _MicroProngCutter",
        "desc": "Komut satırından Micro Prong Cutter aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Fiseli (micro prong) yüzüklerde mıhlayıcının tırnak aralarını çelik kalemle oymasına gerek bırakmaz; dökümden tırnaklar ayrık ve pırıl pırıl çıkar.",
    "ttsText": "Micro Prong Cutter komutu. Mikro taş dizimlerinde tırnak aralarını temizleyen V kesici bıçaklar üretir."
  },
  "ctr_channel_cutter": {
    "cmdOptions": [{"name": "Depth", "desc": "Kanal Derinliği: Taşın oturacağı oluk derinliği."}, {"name": "WallGap", "desc": "Yanak Emniyeti: Kanal duvarlarının döküm et payı (min 0.30 mm)."}],
    "cmdPrompt": "Command: _ChannelCutter\nSelect gems for continuous channel cutter ( Depth=1.20  WallGap=0.15 ):",
    "id": "ctr_channel_cutter",
    "name": "Channel Cutter",
    "trName": "Kanal Kesicisi",
    "meaning": "Kanal Kesicisi",
    "shortDesc": "Öğrenci Adımları: 1. Sıralı kanal taşlarını seçin. 2. Channel Cutter simgesine Sol Tıklayın. 3. Kanal derinliği ve yan tırnak payı genişliğini girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak tek parça kanal bıçağını oluşturup Boolean Difference ile kasadan oyun.",
    "icon": "icons/cutters/ribbon/ctr_channel_cutter.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ChannelCutter",
    "mouseAction": "Sol Tık: Kanal oyma bıçağı oluşturur | Sağ Tık: Son kanal ayarlarını yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ChannelCutter",
        "desc": "Komut satırından Channel Cutter aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Kanal duvarlarının et kalınlığı en az 0.60-0.80 mm olmalıdır; ince kalırsa mıhlayıcı taşı çakarken kanal dışa doğru açılır ve taşlar dökülür.",
    "ttsText": "Channel Cutter komutu. Sıralı taş dizilimleri için tek parça kanal boşaltma bıçağı üretir."
  },
  "ctr_gem_cutter_list": {
    "cmdOptions": [{"name": "ProportionalScale", "desc": "Orantılı Boyutlandırma: Her taşın kendi çapına göre otomatik orantılı yuva açar."}],
    "cmdPrompt": "Command: _GemCutterList\nSelect multi-size gem groups:",
    "id": "ctr_gem_cutter_list",
    "name": "Gem Cutter List",
    "trName": "Çoklu Taş Kesici Listesi",
    "meaning": "Çoklu Taş Kesici Listesi",
    "shortDesc": "Öğrenci Adımları: 1. Farklı boyutta dizilmiş kademeli taş grubunu seçin. 2. Gem Cutter List simgesine Sol Tıklayın. 3. Listedeki her taş boyuna göre bıçak parametrelerini topluca onaylayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak tüm bıçakları tek hamlede çıkarın.",
    "icon": "icons/cutters/ribbon/ctr_gem_cutter_list.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemCutterList",
    "mouseAction": "Sol Tık: Çoklu boyutta taş kesici listesi üretir | Sağ Tık: Son listeyi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _GemCutterList",
        "desc": "Komut satırından Gem Cutter List aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: 1.0 mm'den 3.0 mm'ye kadar degradeli dizilmiş gerdanlıklarda her taşa tek tek bıçak üretmekle uğraşmadan tek tıkla yüzlerce farklı yuvayı aynı anda açar.",
    "ttsText": "Gem Cutter List komutu. Farklı boyuttaki taş grupları için toplu kesici bıçak listesi üretir."
  },
  "ctr_gem_cutter": {
    "cmdOptions": [{"name": "SeatDepth", "desc": "Yuva Oturma Derinliği: Taş kemerinin metalin içine kaç milimetre gömüleceği."}, {"name": "CuletScale", "desc": "Külah Uzatma: Taşın altındaki ışık deliğini açmak için külah bıçağını uzatma yüzdesi."}, {"name": "GirdleGap", "desc": "Kemer Genişletme: Mıhlama payı için taş kemerinden dışa doğru bırakılan emniyet genişliği (örn: +%10)."}],
    "cmdPrompt": "Command: _GemCutter\nSelect gems to create seat cutters ( Seat=70%  CuletScale=120% ):",
    "id": "ctr_gem_cutter",
    "name": "Gem Cutter",
    "trName": "Taş Kesicisi (Gem Cutter)",
    "meaning": "Taş Kesicisi (Gem Cutter)",
    "shortDesc": "Öğrenci Adımları: 1. Yuvası açılacak taşları seçin. 2. Gem Cutter simgesine Sol Tıklayın. 3. Külah uzantısını (Culet %110), tabla payını (Table) ve oturma yuvası (Seat) yüzdesini ayarlayın. 4. Apply butonuna basıp ardından katı montürden Boolean Difference ile çıkararak taş yuvasını boşaltın.",
    "icon": "icons/cutters/ribbon/ctr_gem_cutter.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_GemCutter",
    "mouseAction": "Sol Tık: Taş yuvası kesici bıçağı oluşturur | Sağ Tık: Son bıçak ayarlarını uygular",
    "commandSteps": [
      {
        "prompt": "Command: _GemCutter",
        "desc": "Komut satırından Gem Cutter aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Taşların altındaki ışık ve temizlik deliği (culet hole) asla kapalı bırakılmamalıdır! Taşın altı kapalı kalırsa ultrasonik yıkamada ve cilada taşın arkasında pislik birikir ve pırlanta kararır (⚡ Kısayol: Ekranda Sağ Tıklamak veya Space tuşu doğrudan Enter görevi görür).",
    "ttsText": "Gem Cutter komutu. Taşların tam oturacağı yuvaları ve ışık deliklerini açmak için parametrik kesici bıçaklar üretir."
  },
  "ctr_hinge": {
    "cmdOptions": [{"name": "PinDiameter", "desc": "Pim Çapı: Menteşeyi kilitleyecek telin kalınlığı (standart: 0.70 mm - 0.90 mm)."}, {"name": "KnuckleCount", "desc": "Mafsal Sayısı: 3'lü veya 5'li geçmeli menteşe diş adedi."}, {"name": "Clearance", "desc": "Çalışma Boşluğu: Döküm sonrası mafsalların sıkışmaması için aralık (min 0.20 mm)."}],
    "cmdPrompt": "Command: _HingeBuilder\nSelect junction point for hinge ( PinDiameter=0.80  KnuckleCount=3 ):",
    "id": "ctr_hinge",
    "name": "Hinge",
    "trName": "Menteşe Kesicisi",
    "meaning": "Menteşe Kesicisi",
    "shortDesc": "Öğrenci Adımları: 1. Kelepçe bilezik veya küpe modelini seçin. 2. Hinge simgesine Sol Tıklayın. 3. Menteşe pim çapını (örn: 0.80 mm pim teli) ve mafsal kanat genişliklerini ayarlayın. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak erkek-dişi menteşe yuvalarını otomatik oyun.",
    "icon": "icons/cutters/ribbon/ctr_hinge.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_Hinge",
    "mouseAction": "Sol Tık: Parametrik menteşe mekanizması açar | Sağ Tık: Son menteşeyi yineler",
    "commandSteps": [
      {
        "prompt": "Command: _Hinge",
        "desc": "Komut satırından Hinge aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Menteşe mafsallarında dişi ve erkek kanatlar arasına en az 0.20 mm döküm tolerans boşluğu (clearance) bırakın; boşluk bırakılmazsa dökümde maden birbirine kaynar ve menteşe açılmaz!",
    "ttsText": "Hinge komutu. Kelepçe bilezik ve küpeler için erkek-dişi menteşe ve pim mekanizmaları açar."
  },
  "ctr_hollow_ring": {
    "cmdOptions": [{"name": "WallThickness", "desc": "Et Kalınlığı: Boşaltma sonrası yüzük yüzeyinde kalacak metal et payı (min 0.80 mm - 1.00 mm)."}, {"name": "PatternHoles", "desc": "Hafifletme Pencereleri: Yüzük içine açılacak petek veya damla hava delikleri."}],
    "cmdPrompt": "Command: _HollowRing\nSelect solid ring to hollow ( WallThickness=0.90  HoleCount=4 ):",
    "id": "ctr_hollow_ring",
    "name": "Hollow Ring",
    "trName": "Yüzük İçi Boşaltma Kesicisi",
    "meaning": "Yüzük İçi Boşaltma Kesicisi",
    "shortDesc": "Öğrenci Adımları: 1. Dolu katı yüzük modelini seçin. 2. Hollow Ring simgesine Sol Tıklayın. 3. Alt kol ve yan yanak et kalınlığı sınırını (Wall Thickness: min 0.80 mm - 1.00 mm) girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; yüzüğün içi döküm gramajını düşürmek için otomatik boşaltılır.",
    "icon": "icons/cutters/ribbon/ctr_hollow_ring.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_HollowRing",
    "mouseAction": "Sol Tık: Yüzük içi boşaltma motorunu açar | Sağ Tık: Son et payıyla boşaltır",
    "commandSteps": [
      {
        "prompt": "Command: _HollowRing",
        "desc": "Komut satırından Hollow Ring aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Erkek şövalye yüzüklerinde ve büyük montürlerde altın gramajını %30-40 düşürür. Et kalınlığını asla 0.60 mm'nin altına düşürmeyin; dökümde vakum çekerken çöker ve delinir!",
    "ttsText": "Hollow Ring komutu. Dolu yüzüklerin içini boşaltarak hafifletir ve gramaj maliyetini düşürür."
  },
  "ctr_micro_prong_2": {
    "cmdOptions": [{"name": "Width", "desc": "Kanal genişliği."}, {"name": "Depth", "desc": "Kesim derinliği."}],
    "cmdPrompt": "Command: _MicroProngChannel\nSelect channel gems:",
    "id": "ctr_micro_prong_2",
    "name": "Micro Prong Channel",
    "trName": "Mikro Tırnak Kanal Açıcı",
    "meaning": "Mikro Tırnak Kanal Açıcı",
    "shortDesc": "Öğrenci Adımları: 1. Kanal içindeki mikro taşları seçin. 2. Micro Prong Channel simgesine Sol Tıklayın. 3. Tırnak kanal genişliğini belirleyin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basarak yan astar duvarlarını tırnak boyuna göre kesin.",
    "icon": "icons/cutters/ribbon/ctr_micro_prong_2.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_MicroProngChannel",
    "mouseAction": "Sol Tık: Mikro kanal kesici üretir | Sağ Tık: Son ayarları yineler",
    "commandSteps": [
      {
        "prompt": "Command: _MicroProngChannel",
        "desc": "Komut satırından Micro Prong Channel aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Yan duvarları tırnakla aynı hizada keserek ışığın taşın içine yanlardan girmesini sağlar.",
    "ttsText": "Micro Prong Channel komutu. Kanal içi mikro tırnakların yan ışık pencerelerini açar."
  },
  "ctr_scallop_cutter": {
    "cmdOptions": [{"name": "Radius", "desc": "Fise Yarıçapı: Yan yanaklardaki yarımay kavislerin büyüklüğü."}, {"name": "Depth", "desc": "Dalma Derinliği: Kavisin kol içine girme mesafesi."}],
    "cmdPrompt": "Command: _ScallopCutter\nSelect gems for scallop edge ( Radius=1.20  Depth=0.50 ):",
    "id": "ctr_scallop_cutter",
    "name": "Scallop Cutter",
    "trName": "Deniz Kabuğu (Scallop) Kesici",
    "meaning": "Deniz Kabuğu (Scallop) Kesici",
    "shortDesc": "Öğrenci Adımları: 1. Yarımtur taş dizisini seçin. 2. Scallop Cutter simgesine Sol Tıklayın. 3. Yan fise kavis derinliğini (Scallop Depth) girin. 4. Enter'a (veya Sağ Tık / Space tuşuna) basın; yüzüğün yan yanaklarına dalgalı fise pencereleri açan bıçakları oluşturun.",
    "icon": "icons/cutters/ribbon/ctr_scallop_cutter.png",
    "isFlyoutSub": false,
    "parentId": null,
    "parentName": null,
    "rhinoCommand": "_ScallopCutter",
    "mouseAction": "Sol Tık: Fiseli yan kesici oluşturur | Sağ Tık: Son fise kavisini yineler",
    "commandSteps": [
      {
        "prompt": "Command: _ScallopCutter",
        "desc": "Komut satırından Scallop Cutter aracını başlatın."
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
    "jewelerTip": "💡 Kuyumcu Püf Noktası: Klasik Amerikan fiseli yarımtur yüzüklerde taşların yan profilden görünmesini sağlayarak montüre olağanüstü parlaklık ve zarafet katar.",
    "ttsText": "Scallop Cutter komutu. Yarımtur yüzüklerin yanlarına dalgalı fise pencereleri açar."
  }
};

function findCuttersCommand(cmdId) {
  if (!cmdId) return null;
  if (cuttersCommandsCatalog[cmdId]) return cuttersCommandsCatalog[cmdId];
  return null;
}

window.cuttersRibbonRows = cuttersRibbonRows;
window.cuttersFlyoutDrawers = cuttersFlyoutDrawers;
window.cuttersCommandsCatalog = cuttersCommandsCatalog;
window.findCuttersCommand = findCuttersCommand;
