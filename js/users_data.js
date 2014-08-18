// http://ubilabs.github.io/geocomplete/examples/form.html

var users_data = [
  {
    name:         "Alex Mekhovov",
    address:      "st. Georg",
    lat:          53.553056,
    lng:          10.015277999999967,
    url:          "https://www.facebook.com/mekhovov",
    facebook_id:  "mekhovov"
  },
  {
    name:         "Lena Samus",
    address:      "Allermöhe",
    lat:          53.483333,
    lng:          10.149999999999977,
    url:          "https://www.facebook.com/profile.php?id=100001292360308&fref=ufi",
    facebook_id:  "100001292360308"
  },
  {
    name:         "Alexander Harder",
    address:      "Reinbek",
    lat:          53.5170003,
    lng:          10.244339200000013,
    url:          "https://www.facebook.com/alexander.harder.1?fref=ufi",
    facebook_id:  "alexander.harder"
  },
  {
    name:         "Florina Chudnovska",
    address:      "Eidelstedt",
    lat:          53.60707,
    lng:          9.906219999999962,
    url:          "https://www.facebook.com/florina.chudnovska?fref=ufi",
    facebook_id:  "florina.chudnovska"
  },
  {
    name:         "Alona Mekhovova",
    address:      "Eppendorf",
    lat:          53.59555599999999,
    lng:          9.983888999999976,
    url:          "https://www.facebook.com/alona.tarasova?fref=ufi",
    facebook_id:  "alona.tarasova"
  },
  {
    name:         "Tatyana Duncker",
    address:      "Seevetal/Fleestedt",
    lat:          53.409444,
    lng:          9.993056000000024,
    url:          "https://www.facebook.com/tatyana.duncker?fref=ufi",
    facebook_id:  "tatyana.duncker"
  },
  {
    name:         "Tetiana Sosyniuk",
    address:      "Harburg",
    lat:          53.4607681,
    lng:          9.98358440000004,
    url:          "https://www.facebook.com/tetiana.sosyniuk?fref=ufi",
    facebook_id:  "tetiana.sosyniuk"
  },
  {
    name:         "Ірина Макар",
    address:      "st. Georg",
    lat:          53.553056,
    lng:          10.015277999999967,
    url:          "https://www.facebook.com/iryna.makar?fref=ufi",
    facebook_id:  "iryna.makar"
  },
  {
    name:         "Ilona Lock",
    address:      "Barmbek Süd",
    lat:          53.58007300000001,
    lng:          10.040671999999972,
    url:          "https://www.facebook.com/ilona.bystryk?fref=ufi",
    facebook_id:  "ilona.bystryk"
  },
  {
    name:         "Olya Semenyuk",
    address:      "Horn",
    lat:          53.55,
    lng:          10.083333000000039,
    url:          "https://www.facebook.com/ossja?fref=ufi",
    facebook_id:  "ossja"
  },
  {
    name:         "Tetyana Bella",
    address:      "Neustadt",
    lat:          53.55196,
    lng:          9.985580000000027,
    url:          "https://www.facebook.com/tetyankad?fref=ufi",
    facebook_id:  "tetyankad"
  },
  {
    name:         "Oksana Tokar",
    address:      "Stellingen",
    lng:          53.5922,
    lat:          9.928699999999935,
    url:          "https://www.facebook.com/oksana.tokar.5?fref=ufi",
    facebook_id:  "oksana.tokar.5"
  },
  {
    name:         "Tetiana Peczeniuk",
    address:      "Altona",
    lat:          53.55,
    lng:          9.933332999999948,
    url:          "https://www.facebook.com/tanya.pechenyuk.7?fref=ufi",
    facebook_id:  "tanya.pechenyuk.7"
  },
  {
    name:         "Iryna Yeskova",
    address:      "Harburg",
    lat:          53.4607681,
    lng:          9.98358440000004,
    url:          "https://www.facebook.com/rina.yeskova?fref=ufi",
    facebook_id:  "rina.yeskova"
  },
  {
    name:         "Anna Alekseeva",
    address:      "Lokstedt",
    lat:          53.5991339,
    lng:          9.958529399999975,
    url:          "https://www.facebook.com/anna.v.alekseeva?fref=ufi",
    facebook_id:  "anna.v.alekseeva"
  },
  {
    name:         "Ludmila Kachanovetska",
    address:      "Seevetal/Meckelfeld",
    lat:          53.421944,
    lng:          10.020833000000039,
    url:          "https://www.facebook.com/ludmila.kachanovetska?fref=ufi",
    facebook_id:  "ludmila.kachanovetska"
  },
  {
    name:         "Ievgeniia Lucky",
    address:      "Öjensdorf",
    lat:          53.5430876,
    lng:          10.147769400000016,
    url:          "https://www.facebook.com/ievgeniia.lysak?fref=ufi",
    facebook_id:  "ievgeniia.lysak"
  },
  {
    name:         "Ruby Lucas",
    address:      "Fühlsbüttel",
    lat:          53.6225,
    lng:          10.018888999999945,
    url:          "https://www.facebook.com/RedRubyLucas?fref=ufi",
    facebook_id:  "RedRubyLucas"
  },
  {
    name:         "Aljona Alekseeva",
    address:      "Stellingen",
    lng:          53.5922,
    lat:          9.928699999999935,
    url:          "https://www.facebook.com/aljona.alekseeva?fref=ufi",
    facebook_id:  "aljona.alekseeva"
  },
  {
    name:         "Tanya Biz",
    address:      "Eilbek/Wandsbek",
    lat:          53.45583,
    lng:          9.954579999999964,
    url:          "https://www.facebook.com/TanyaBizz?fref=ufi",
    facebook_id:  "TanyaBizz"
  },
  {
    name:         "Vadim Spotty",
    address:      "Harvestehude",
    lat:          53.57765000000001,
    lng:          9.988929999999982,
    url:          "https://www.facebook.com/vadim.spotty?fref=ufi",
    facebook_id:  "vadim.spotty"
  },
  {
    name:         "Myroslava Topylko",
    address:      "Hoheluft-West",
    lat:          53.5809523,
    lng:          9.967582499999935,
    url:          "https://www.facebook.com/profile.php?id=100002039724408&fref=ufi",
    facebook_id:  "100002039724408"
  },
  {
    name:         "Anastassija Mossewytsch",
    address:      "Reinbek",
    lat:          53.5170003,
    lng:          10.244339200000013,
    url:          "https://www.facebook.com/anastassija.mossewytsch?fref=ufi",
    facebook_id:  "anastassija.mossewytsch"
  },
  {
    name:         "Dmytro Artemiev",
    address:      "Barmbek Süd",
    lat:          53.58007300000001,
    lng:          10.040671999999972,
    url:          "https://www.facebook.com/artemyev.dmitriy?fref=ufi",
    facebook_id:  "artemyev.dmitriy"
  },
  {
    name:         "Anna Iskova",
    address:      "Harvestehude",
    url:          "https://www.facebook.com/ann.iskova?fref=ufi",
    facebook_id:  "ann.iskova"
  },
  {
    name:         "Engel Teil",
    address:      "Barmbek-Nord",
    lat:          53.6052,
    lng:          10.03988000000004,
    url:          "https://www.facebook.com/aateil?fref=ufi",
    facebook_id:  "aateil"
  },
  {
    name:         "Olena Kostiana",
    address:      "Neugraben",
    lat:          53.477073,
    lng:          9.857907000000068,
    url:          "https://www.facebook.com/le.mobidik?fref=ufi",
    facebook_id:  "le.mobidik"
  },
  {
    name:         "Ewgenia Kos",
    address:      "Meiendorf",
    lat:          53.6364315,
    lng:          10.162594899999931,
    url:          "https://www.facebook.com/ewgenia.kos?fref=ufi",
    facebook_id:  "ewgenia.kos"
  },
  {
    name:         "Антонина Лямаева",
    address:      "Schenefeld",
    lat:          53.6021622,
    lng:          9.837433000000033,
    url:          "https://www.facebook.com/lyamayeva?fref=ufi",
    facebook_id:  "lyamayeva"
  },
  {
    name:         "Iryna Rotärmel",
    address:      "Langenhorn",
    lat:          53.65000000000001,
    lng:          10,
    url:          "https://www.facebook.com/nadin.maier.5?fref=ufi",
    facebook_id:  "nadin.maier.5"
  },
  {
    name:         "Iryna Zhurakovska",
    address:      "Hohenfelde",
    lat:          53.561667,
    lng:          10.020833000000039,
    url:          "https://www.facebook.com/iryna.zhurakovska?fref=ufi",
    facebook_id:  "iryna.zhurakovska"
  },
  {
    name:         "Natalia Sadovnik",
    address:      "Barmbek-Nord",
    lat:          53.6052,
    lng:          10.03988000000004,
    url:          "https://www.facebook.com/nsadovnik?fref=ufi",
    facebook_id:  "nsadovnik"
  },
  {
    name:         "Maria Sia",
    address:      "Altstadt",
    lat:          53.55,
    lng:          10,
    url:          "https://www.facebook.com/maria.sia.92?fref=ufi",
    facebook_id:  "maria.sia.92"
  },
  {
    name:         "Andrey Martynenko",
    address:      "Harburg",
    lat:          53.4607681,
    lng:          9.98358440000004,
    url:          "https://www.facebook.com/andrey.martynenko.73?fref=ufi",
    facebook_id:  "andrey.martynenko.73"
  },
  {
    name:         "Aleksandra Geylyk",
    address:      "Borgfelde",
    lat:          53.55475,
    lng:          10.034470000000056,
    url:          "https://www.facebook.com/aleksandra.geylyk?fref=ufi",
    facebook_id:  "aleksandra.geylyk"
  },
  {
    name:         "Dima Perunow",
    address:      "Horn",
    lat:          53.55,
    lng:          10.083333000000039,
    url:          "https://www.facebook.com/perunow?fref=ufi",
    facebook_id:  "perunow"
  },
  {
    name:         "Iryna Zhyvotova",
    address:      "Harburg",
    lat:          53.4607681,
    lng:          9.98358440000004,
    url:          "https://www.facebook.com/iryna.zhyvotova?fref=ufi",
    facebook_id:  "iryna.zhyvotova"
  },
  {
    name:         "Vita Naniak",
    address:      "Dammtor",
    lat:          53.5607537,
    lng:          9.991047200000025,
    url:          "https://www.facebook.com/profile.php?id=100002090835906&fref=ufi",
    facebook_id:  "100002090835906"
  },
  {
    name:         "Оксана Ланге",
    address:      "Hitzacker Wendland",
    lat:          53.133333,
    lng:          11.049999999999955,
    url:          "https://www.facebook.com/lange.hitzacker?fref=ufi",
    facebook_id:  "lange.hitzacker"
  },
  {
    name:         "Liana Lianka",
    address:      "Eissendorf, Harburg",
    lat:          53.45583,
    lng:          9.954579999999964,
    url:          "https://www.facebook.com/liana.lianka.94?fref=ufi",
    facebook_id:  "liana.lianka.94"
  },
  {
    name:         "Dimitri Tyshchenko",
    address:      "Barmbek Süd",
    lat:          53.58007300000001,
    lng:          10.040671999999972,
    url:          "https://www.facebook.com/dimavergel?fref=ufi",
    facebook_id:  "dimavergel"
  },
  {
    name:         "Olya Lapa",
    address:      "Blankenese",
    lat:          53.5663436,
    lng:          9.798388799999998,
    url:          "https://www.facebook.com/olya.lapa.9?fref=ufi",
    facebook_id:  "olya.lapa.9"
  },
  {
    name:         "Maria Fedorova",
    address:      "Harburg",
    lat:          53.4607681,
    lng:          9.98358440000004,
    url:          "https://www.facebook.com/mariia.fedorova.5?fref=ufi",
    facebook_id:  "mariia.fedorova.5"
  },
  {
    name:         "Ira Wolf",
    address:      "Harburg",
    lat:          53.4607681,
    lng:          9.98358440000004,
    url:          "https://www.facebook.com/ira.systaluk?fref=ufi",
    facebook_id:  "ira.systaluk"
  },
  {
    name:         "Dima Swetlow",
    address:      "Braunschweig",
    lat:          52.2688736,
    lng:          10.526769599999966,
    url:          "https://www.facebook.com/FCBayernMunchen4ever?fref=ufi",
    facebook_id:  "FCBayernMunchen4ever"
  },
  {
    name:         "Leonid Shenderov",
    address:      "Wedel",
    lat:          53.58238129999999,
    lng:          9.71374650000007,
    url:          "https://www.facebook.com/leonid.shenderov?fref=ufi",
    facebook_id:  "leonid.shenderov"
  },
  {
    name:         "Kristina Stepanenko",
    address:      "Börnsen",
    lat:          53.4687649,
    lng:          10.281987399999934,
    url:          "https://www.facebook.com/kristina.stepanenko.92?fref=ufi",
    facebook_id:  "kristina.stepanenko.92"
  },
  {
    name:         "Uljana Boyda",
    address:      "Izstedt",
    lat:          53.80787180000001,
    lng:          10.157454700000017,
    url:          "https://www.facebook.com/uljana.boyda?fref=ufi",
    facebook_id:  "uljana.boyda"
  },
  {
    name:         "Julia Gabriel",
    address:      "Reinbek",
    lat:          53.5170003,
    lng:          10.244339200000013,
    url:          "https://www.facebook.com/profile.php?id=100005147586282&fref=ufi",
    facebook_id:  "100005147586282"
  },
];




/* 

  {
    name:         "",
    address:      "",
    url:          "",
    facebook_id:  ""
  },

*/
