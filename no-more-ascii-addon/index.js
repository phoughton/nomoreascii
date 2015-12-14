var self = require('sdk/self');
var nmam = require("sdk/context-menu");
var cm = require("sdk/context-menu");
var control_m = require("sdk/context-menu");
var currency_m = require("sdk/context-menu");

var ctraditional_cm = cm.Item({
  label: "Chinese (Mandarin) Traditional:   '我的氣墊船裝滿了鱔魚'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="我的氣墊船裝滿了鱔魚";' +
                 '});'});

var csimplified_cm = cm.Item({
  label: "Chinese (Mandarin) Simplified:    '我的气垫船装满了鳝鱼'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="我的气垫船装满了鳝鱼";' +
                 '});'});


// http://www.omniglot.com/language/phrases/inuktitut.php
var inuktitut_cm = cm.Item({
  label: "Inuktitut:      'ᐊᑏ ᐅᖄᓚᓗᐊᙱᓚᑎᑦ'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="ᐊᑏ ᐅᖄᓚᓗᐊᙱᓚᑎᑦ";' +
                 '});'});

// https://en.wikipedia.org/wiki/Swedish_language
var swedish_cm = cm.Item({
  label: "Swedish:      'Vad var det för ord – var det långt eller kort'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Vad var det för ord – var det långt eller kort";' +
                 '});'});

// http://www.omniglot.com/language/phrases/georgian.php
var georgian_cm = cm.Item({
  label: "Georgian:     'წარმატებებს გისურვებთ'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="წარმატებებს გისურვებთ";' +
                 '});'});
// http://www.omniglot.com/language/phrases/hovercraft.htm
var greek_mod_cm = cm.Item({
  label: "Greek (Modern):    'Το Χόβερκράφτ μου είναι γεμάτο χέλια'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Το Χόβερκράφτ μου είναι γεμάτο χέλια";' +
                 '});'});

// http://www.omniglot.com/language/phrases/hebrew.php
var hebrew_cm = cm.Item({
  label: "Hebrew:       " + String.fromCodePoint(0x200F) + String.fromCodePoint(1492) + String.fromCodePoint(1512) + String.fromCodePoint(1495) + String.fromCodePoint(1508) + String.fromCodePoint(1514) +" "+ String.fromCodePoint(1513) + String.fromCodePoint(1500) + String.fromCodePoint(1497) +" "+ String.fromCodePoint(1502) + String.fromCodePoint(1500) + String.fromCodePoint(1488) + String.fromCodePoint(1492) +" "+ String.fromCodePoint(1489) + String.fromCodePoint(1510) + String.fromCodePoint(1500) + String.fromCodePoint(1493) + String.fromCodePoint(1508) + String.fromCodePoint(1495) + String.fromCodePoint(1497) + String.fromCodePoint(1501) + String.fromCodePoint(8206) ,
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x200F) + String.fromCodePoint(1492) + String.fromCodePoint(1512) + String.fromCodePoint(1495) + String.fromCodePoint(1508) + String.fromCodePoint(1514) +" "+ String.fromCodePoint(1513) + String.fromCodePoint(1500) + String.fromCodePoint(1497) +" "+ String.fromCodePoint(1502) + String.fromCodePoint(1500) + String.fromCodePoint(1488) + String.fromCodePoint(1492) +" "+ String.fromCodePoint(1489) + String.fromCodePoint(1510) + String.fromCodePoint(1500) + String.fromCodePoint(1493) + String.fromCodePoint(1508) + String.fromCodePoint(1495) + String.fromCodePoint(1497) + String.fromCodePoint(1501)+ String.fromCodePoint(8206);' +
                 '});'});

// http://www.omniglot.com/language/phrases/hovercraft.htm
var arabic_std_cm = cm.Item({
  label: "Arabic (Modern Standard):    " + String.fromCodePoint(0x200F) + String.fromCodePoint(1581) + String.fromCodePoint(1614) + String.fromCodePoint(1608) + String.fromCodePoint(1617) + String.fromCodePoint(1575) + String.fromCodePoint(1605) + String.fromCodePoint(1578) + String.fromCodePoint(1610) +  " " + String.fromCodePoint(1605) + String.fromCodePoint(1615) + String.fromCodePoint(1605) + String.fromCodePoint(1618) + String.fromCodePoint(1578) + String.fromCodePoint(1616) + String.fromCodePoint(1604) + String.fromCodePoint(1574) + String.fromCodePoint(1577) + " " + String.fromCodePoint(1576) + String.fromCodePoint(1616) + String.fromCodePoint(1571) + String.fromCodePoint(1614) + String.fromCodePoint(1606) + String.fromCodePoint(1618) + String.fromCodePoint(1602) + String.fromCodePoint(1614) + String.fromCodePoint(1604) + String.fromCodePoint(1614) + String.fromCodePoint(1610) + String.fromCodePoint(1618) + String.fromCodePoint(1587) + String.fromCodePoint(1608) + String.fromCodePoint(1606) + String.fromCodePoint(8206) ,
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x200F) + String.fromCodePoint(1581) + String.fromCodePoint(1614) + String.fromCodePoint(1608) + String.fromCodePoint(1617) + String.fromCodePoint(1575) + String.fromCodePoint(1605) + String.fromCodePoint(1578) + String.fromCodePoint(1610) + " " +  String.fromCodePoint(1605) + String.fromCodePoint(1615) + String.fromCodePoint(1605) + String.fromCodePoint(1618) + String.fromCodePoint(1578) + String.fromCodePoint(1616) + String.fromCodePoint(1604) + String.fromCodePoint(1574) + String.fromCodePoint(1577) + " " + String.fromCodePoint(1576) + String.fromCodePoint(1616) + String.fromCodePoint(1571) + String.fromCodePoint(1614) + String.fromCodePoint(1606) + String.fromCodePoint(1618) + String.fromCodePoint(1602) + String.fromCodePoint(1614) + String.fromCodePoint(1604) + String.fromCodePoint(1614) + String.fromCodePoint(1610) + String.fromCodePoint(1618) + String.fromCodePoint(1587) + String.fromCodePoint(1608) + String.fromCodePoint(1606) + String.fromCodePoint(8206);' +
                 '});'});

// http://www.omniglot.com/language/phrases/spanish.php
var sp_cm = cm.Item({
  label: "Spanish:      '¿De dónde eres?'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="¿De dónde eres?";' +
                 '});'});

// http://www.omniglot.com/language/phrases/russian.php
var russian_cm = cm.Item({
  label: "Russian:      'Моё судно на воздушной подушке полно угрей'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Моё судно на воздушной подушке полно угрей";' +
                 '});'});

// http://www.omniglot.com/language/phrases/korean.php
var korean_cm = cm.Item({
  label: "Korean:       '내 호버크라프트는 장어로 가득 차 있어요'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="내 호버크라프트는 장어로 가득 차 있어요";' +
                 '});'});

// https://en.wikipedia.org/wiki/Hindi
var hindi_cm = cm.Item({
  label: "Hindi (Devanagari):  'सभी मनुष्यों को गौरव और अधिकारों के विषय में जन्मजात स्वतन्त्रता औरैं'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="सभी मनुष्यों को गौरव और अधिकारों के विषय में जन्मजात स्वतन्त्रता और";' +
                 '});'});

// https://en.wikipedia.org/wiki/Cherokee_language
var cherokee_cm = cm.Item({
  label: "Cherokee:     'Ꮎ ᎠᏍᎦᏯ ᎠᎩᏙᏓ'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Ꮎ ᎠᏍᎦᏯ ᎠᎩᏙᏓ";' +
                 '});'});


//http://www.omniglot.com/language/phrases/useful.htm
var kannada_cm = cm.Item({
  label: "Kannada:      'ಅದು ಬಾಗಿಲಾ ಕಿಟಿಕಿಯಾ?'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="ಅದು ಬಾಗಿಲಾ ಕಿಟಿಕಿಯಾ?";' +
                 '});'});

// http://www.omniglot.com/language/phrases/useful.htm
var khmer_cm = cm.Item({
  label: "Khmer:        'សុទ្ធ​តែ​អន្ទង់​ពេញ​ទូក​ហោះ​យើង'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="សុទ្ធ​តែ​អន្ទង់​ពេញ​ទូក​ហោះ​យើង";' +
                 '});'});

// http://www.omniglot.com/language/phrases/hovercraft.htm
var yoruba_cm = cm.Item({
  label: "Yoruba:       'Ọkọ afategun-sare mi kun fun ẹja arọ'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Ọkọ afategun-sare mi kun fun ẹja arọ";' +
                 '});'});

// Control Characters
// http://unicode.org/reports/tr9/
// 
var rtl_cm = control_m.Item({
  label: "Right To Left marker",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x200F);' +
                 '});'});
var ltr_cm = control_m.Item({
  label: "Left To Right marker",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x200E);' +
                 '});'});


var rle_cm = control_m.Item({
  label: "Right-to-Left Embedding",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x202B);' +
                 '});'});

var lre_cm = control_m.Item({
  label: "Left-to-Right Embedding",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x202A);' +
                 '});'});


var rlo_cm = control_m.Item({
  label: "Right-to-Left Override",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x202E);' +
                 '});'});
var lro_cm = control_m.Item({
  label: "Left-to-Right Override",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x202D);' +
                 '});'});

var shift_out_cm = control_m.Item({
  label: "ASCII Shift Out",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x000E);' +
                 '});'});
var shift_in_cm = control_m.Item({
  label: "ASCII Shift In",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x000F);' +
                 '});'});


var pop_cm = control_m.Item({
  label: "Pop Directional Formatting",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x202C);' +
                 '});'});

var annot_cm = control_m.Item({
  label: "Interlinear Annotation Anchor",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0xFFF9);' +
                 '});'});

// Currency Symbols
var Genericm = currency_m.Item({
  label: "Generic Currency Symbol: ¤",
  contentScript: 'self.on("click", function (node, data) {  node.value+="¤"; });'});

var AFNm = currency_m.Item({
  label: "Afghan afghani (AFN): ؋",
  contentScript: 'self.on("click", function (node, data) {  node.value+="؋"; });'});

var DZDm = currency_m.Item({
  label: "Algerian dinar (DZD): د.ج",
  contentScript: 'self.on("click", function (node, data) {  node.value+="د.ج"; });'});

var AZNm = currency_m.Item({
  label: "Azerbaijani manat (AZN): ₼",
  contentScript: 'self.on("click", function (node, data) {  node.value+="₼"; });'});

var BDTm = currency_m.Item({
  label: "Bangladeshi taka (BDT): ৳",
  contentScript: 'self.on("click", function (node, data) {  node.value+="৳"; });'});

var KHRm = currency_m.Item({
  label: "Cambodian riel (KHR):  ៛",
  contentScript: 'self.on("click", function (node, data) {  node.value+="៛"; });'});
var centm = currency_m.Item({
  label: "Cent (USD etc):  ¢",
  contentScript: 'self.on("click", function (node, data) {  node.value+="¢"; });'});

var CRCm = currency_m.Item({
  label: "Costa Rican colón (CRC): ₡",
  contentScript: 'self.on("click", function (node, data) {  node.value+="¢"; });'});

var CZKm = currency_m.Item({
  label: "Czech koruna (CZK): Kč",
  contentScript: 'self.on("click", function (node, data) {  node.value+="Kč"; });'});

var EGPm = currency_m.Item({
  label: "Egyptian pound (EGP): ج.م;",
  contentScript: 'self.on("click", function (node, data) {  node.value+="ج.م;"; });'});

var EURm = currency_m.Item({
  label: "Euro (EUR): €",
  contentScript: 'self.on("click", function (node, data) {  node.value+="€"; });'});

var GBPm = currency_m.Item({
  label: "British Pound Sterling (GBP): £",
  contentScript: 'self.on("click", function (node, data) {  node.value+="£"; });'});

var GELm = currency_m.Item({
  label: "Georgian lari (GEL) " + String.fromCodePoint(0x20BE),
  contentScript: 'self.on("click", function (node, data) {  node.value+=String.fromCodePoint(0x20BE); });'});

var INRm = currency_m.Item({
  label: "Indian rupee (INR) " + String.fromCodePoint(0x20B9),
  contentScript: 'self.on("click", function (node, data) {  node.value+=String.fromCodePoint(0x20B9); });'});

var JPYm = currency_m.Item({
  label: "Japanese yen (JPY): ¥",
  contentScript: 'self.on("click", function (node, data) {  node.value+="¥"; });'});

var MNTm = currency_m.Item({
  label: "Mongolian tögrög (MNT): ₮",
  contentScript: 'self.on("click", function (node, data) {  node.value+="₮"; });'});

var PLNm = currency_m.Item({
  label: "Polish złoty (PLN): zł",
  contentScript: 'self.on("click", function (node, data) {  node.value+="zł"; });'});

var NGNm = currency_m.Item({
  label: "Nigerian naira (NGN): ₦",
  contentScript: 'self.on("click", function (node, data) {  node.value+="₦"; });'});

var KPWm = currency_m.Item({
  label: "North Korean won (KPW): ₩",
  contentScript: 'self.on("click", function (node, data) {  node.value+="₩"; });'});

var RUBm = currency_m.Item({
  label: "Russian ruble (RUB): ₽",
  contentScript: 'self.on("click", function (node, data) {  node.value+="₽"; });'});

var BHTm = currency_m.Item({
  label: "Thai baht (BHT): ฿",
  contentScript: 'self.on("click", function (node, data) {  node.value+="฿"; });'});

var TRYm = currency_m.Item({
  label: "Turkish lira (TRY): ₺",
  contentScript: 'self.on("click", function (node, data) {  node.value+="₺"; });'});

var USDm = currency_m.Item({
  label: "United States Dollar (USD): $",
  contentScript: 'self.on("click", function (node, data) {  node.value+="$"; });'});

var sep1_cm = control_m.Separator();
var sep2_cm = control_m.Separator();
var sep3_cm = control_m.Separator();
var sep4_cm = control_m.Separator();
var sep5_cm = control_m.Separator();
var sep6_cm = control_m.Separator();
var sep7_cm = control_m.Separator();

var about_nmam = nmam.Item({
  label: "About. (Investigating Software)",
  contentScript: 'self.on("click", function (node, data) { window.location.assign("http://www.investigatingsoftware.co.uk");})' +
                 ';'});

// Menu structure
var languageMenu = cm.Menu({
  label: "Languages/Scripts",
  items: [arabic_std_cm,cherokee_cm,csimplified_cm,ctraditional_cm,georgian_cm,greek_mod_cm,hebrew_cm,hindi_cm,inuktitut_cm,kannada_cm,khmer_cm,korean_cm,russian_cm,sp_cm,swedish_cm,yoruba_cm]
});

var controlMenu = control_m.Menu({
  label: "Control Characters/code-points",
  items: [rtl_cm, ltr_cm,sep1_cm, rle_cm,lre_cm,sep2_cm,rlo_cm,lro_cm,sep4_cm,pop_cm,sep5_cm,shift_out_cm,shift_in_cm,sep6_cm,annot_cm]
});

var currencyMenu = currency_m.Menu({
  label: "Currency Symbols",
  items: [Genericm,sep7_cm,AFNm,DZDm,AZNm,BDTm,GBPm,KHRm,centm,CRCm,CZKm,EGPm,EURm,GELm,INRm,JPYm,MNTm,NGNm,KPWm,PLNm,RUBm,BHTm,TRYm,USDm]
});

var nomoreMenu = nmam.Menu({
  label: "No More ASCII",
  context: nmam.SelectorContext("input,textarea"),
  items: [languageMenu,controlMenu,currencyMenu,sep3_cm,about_nmam]
});



