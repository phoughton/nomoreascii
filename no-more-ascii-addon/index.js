var self = require('sdk/self');
var nmam = require("sdk/context-menu");
var cm = require("sdk/context-menu");
var control_m = require("sdk/context-menu");

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
var rtl_cm = control_m.Item({
  label: "Right To Left indicator:       'Ọkọ afategun-sare mi kun fun ẹja arọ'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x200F);' +
                 '});'});


var about_nmam = nmam.Item({
  label: "About. (Investigating Software)",
  contentScript: 'self.on("click", function (node, data) { window.location.assign("http://www.investigatingsoftware.co.uk");})' +
                 ';'});


var languageMenu = cm.Menu({
  label: "Languages/Scripts",
  items: [arabic_std_cm,cherokee_cm,csimplified_cm,ctraditional_cm,georgian_cm,greek_mod_cm,hebrew_cm,hindi_cm,inuktitut_cm,kannada_cm,khmer_cm,korean_cm,russian_cm,sp_cm,swedish_cm,yoruba_cm]
});

var controlMenu = control_m.Menu({
  label: "Control Characters/code-points",
  items: [rtl_cm]
});


var nomoreMenu = nmam.Menu({
  label: "No More ASCII",
  context: nmam.SelectorContext("input,textarea"),
  items: [languageMenu,controlMenu,about_nmam]
});



