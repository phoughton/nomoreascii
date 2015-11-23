var self = require('sdk/self');
var cm = require("sdk/context-menu");


var ct_cm = cm.Item({
  label: "Chinese (Mandarin) Traditional:   '我的氣墊船裝滿了鱔魚'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="我的氣墊船裝滿了鱔魚";' +
                 '  console.log(node.value)' +
                 '});'});

var cs_cm = cm.Item({
  label: "Chinese (Mandarin) Simplified:    '我的气垫船装满了鳝鱼'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="我的气垫船装满了鳝鱼";' +
                 '  console.log(node.value)' +
                 '});'});


//https://en.wikipedia.org/wiki/Swedish_language
var sw_cm = cm.Item({
  label: "Swedish:           'Vad var det för ord – var det långt eller kort'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Vad var det för ord – var det långt eller kort";' +
                 '  console.log(node.value)' +
                 '});'});

//http://www.omniglot.com/language/phrases/hebrew.php
var he_cm = cm.Item({
  label: "Hebrew:     " + String.fromCodePoint(0x200F) + String.fromCodePoint(1492) + String.fromCodePoint(1512) + String.fromCodePoint(1495) + String.fromCodePoint(1508) + String.fromCodePoint(1514) +" "+ String.fromCodePoint(1513) + String.fromCodePoint(1500) + String.fromCodePoint(1497) +" "+ String.fromCodePoint(1502) + String.fromCodePoint(1500) + String.fromCodePoint(1488) + String.fromCodePoint(1492) +" "+ String.fromCodePoint(1489) + String.fromCodePoint(1510) + String.fromCodePoint(1500) + String.fromCodePoint(1493) + String.fromCodePoint(1508) + String.fromCodePoint(1495) + String.fromCodePoint(1497) + String.fromCodePoint(1501) + String.fromCodePoint(8206) ,
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+=String.fromCodePoint(0x200F) + String.fromCodePoint(1492) + String.fromCodePoint(1512) + String.fromCodePoint(1495) + String.fromCodePoint(1508) + String.fromCodePoint(1514) +" "+ String.fromCodePoint(1513) + String.fromCodePoint(1500) + String.fromCodePoint(1497) +" "+ String.fromCodePoint(1502) + String.fromCodePoint(1500) + String.fromCodePoint(1488) + String.fromCodePoint(1492) +" "+ String.fromCodePoint(1489) + String.fromCodePoint(1510) + String.fromCodePoint(1500) + String.fromCodePoint(1493) + String.fromCodePoint(1508) + String.fromCodePoint(1495) + String.fromCodePoint(1497) + String.fromCodePoint(1501)+ String.fromCodePoint(8206);' +
                 '  console.log(node.value)' +
                 '});'});


//http://www.omniglot.com/language/phrases/spanish.php
var sp_cm = cm.Item({
  label: "Spanish:           '¿De dónde eres?'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="¿De dónde eres?";' +
                 '  console.log(node.value)' +
                 '});'});

//http://www.omniglot.com/language/phrases/russian.php
var ru_cm = cm.Item({
  label: "Russian:           'Моё судно на воздушной подушке полно угрей'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="Моё судно на воздушной подушке полно угрей";' +
                 '  console.log(node.value)' +
                 '});'});

//http://www.omniglot.com/language/phrases/korean.php
var ko_cm = cm.Item({
  label: "Korean:       '내 호버크라프트는 장어로 가득 차 있어요'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="내 호버크라프트는 장어로 가득 차 있어요";' +
                 '  console.log(node.value)' +
                 '});'});
//https://en.wikipedia.org/wiki/Hindi
var hi_cm = cm.Item({
  label: "Hindi (Devanagari): 'सभी मनुष्यों को गौरव और अधिकारों के विषय में जन्मजात स्वतन्त्रता औरैं'",
  contentScript: 'self.on("click", function (node, data) { self.postMessage(node.value);' +
                 '  node.value+="सभी मनुष्यों को गौरव और अधिकारों के विषय में जन्मजात स्वतन्त्रता और";' +
                 '  console.log(node.value)' +
                 '});'});

var ab_cm = cm.Item({
  label: "About. (Investigating Software)",
  contentScript: 'self.on("click", function (node, data) { window.open("http://www.investigatingsoftware.co.uk");})' +
                 ';'});

var searchMenu = cm.Menu({
  label: "No More ASCII",
  context: cm.SelectorContext("input,textarea"),
  items: [cs_cm,ct_cm,he_cm,hi_cm,ko_cm,ru_cm,sp_cm,sw_cm,ab_cm]
});