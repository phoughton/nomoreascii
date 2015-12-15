var self = require('sdk/self');
var nmam = require("sdk/context-menu");
var cm = require("sdk/context-menu");
var control_cm = require("sdk/context-menu");
var currency_cm = require("sdk/context-menu");
var emoji_cm = require("sdk/context-menu");

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


var controlMenu=control_cm.Menu({
  label: "Control Characters/code-points",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		cm.Item({ label: "Right To Left marker", 	data: String.fromCodePoint(0x200F) }),
		cm.Item({ label: "Left To Right marker", 	data: String.fromCodePoint(0x200E) }),
		control_cm.Separator(),
		cm.Item({ label: "Right-to-Left Embedding", 	data: String.fromCodePoint(0x202B) }),
		cm.Item({ label: "Left-to-Right Embedding", 	data: String.fromCodePoint(0x202A) }),
		control_cm.Separator(),
		cm.Item({ label: "Right-to-Left Override", 	data: String.fromCodePoint(0x202E) }),
		cm.Item({ label: "Left-to-Right Override", 	data: String.fromCodePoint(0x202D) }),
		control_cm.Separator(),
		cm.Item({ label: "ASCII Shift Out", 		data: String.fromCodePoint(0x000E) }),
		cm.Item({ label: "ASCII Shift In", 		data: String.fromCodePoint(0x000F) }),
		control_cm.Separator(),
		cm.Item({ label: "Pop Directional Formatting", 	data: String.fromCodePoint(0x202C) }),
		cm.Item({ label: "Interlinear Annotation Anchor", data: String.fromCodePoint(0xFFF9) }),
  	]
});


// Currency Symbols
var sep7_it = control_cm.Separator();
var currencyMenu=currency_cm.Menu({
  label: "Currency Symbols",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		cm.Item({ label: "¤  Generic Currency Symbol", 	data: "¤" }),
		currency_cm.Separator(),
    		cm.Item({ label: "؋  Afghan afghani (AFN)",   	data: "؋" }),
    		cm.Item({ label: "د.ج  Algerian dinar (DZD)", 	data: "د.ج" }),
    		cm.Item({ label: "₼  Azerbaijani manat (AZN)",	data: "₼" }),
    		cm.Item({ label: "৳  Bangladeshi taka (BDT)",	data: "৳" }),
    		cm.Item({ label: "៛  Cambodian riel (KHR)",	data: "៛" }),
    		cm.Item({ label: "¢  Cent (USD etc)",		data: "¢" }),
    		cm.Item({ label: "₡  Costa Rican colón (CRC)",	data: "₡" }),
    		cm.Item({ label: "Kč  Czech koruna (CZK)",	data: "Kč" }),
    		cm.Item({ label: "ج.م;  Egyptian pound (EGP)",	data: "ج.م;" }),
    		cm.Item({ label: "€  Euro (EUR)",		data: "€" }),
    		cm.Item({ label: "£  British Pound Sterling (GBP)",	data: "£" }),
    		cm.Item({ label: String.fromCodePoint(0x20BE) + "  Georgian lari (GEL)",	data: String.fromCodePoint(0x20BE) }),
    		cm.Item({ label: String.fromCodePoint(0x20B9) + "  Indian rupee (INR)" ,	data: String.fromCodePoint(0x20B9) }),
    		cm.Item({ label: "¥  Japanese yen (JPY)",	data: "¥" }),
    		cm.Item({ label: "₮  Mongolian tögrög (MNT)",	data: "₮" }),
    		cm.Item({ label: "zł  Polish złoty (PLN)",	data: "zł" }),
    		cm.Item({ label: "₦  Nigerian naira (NGN)",	data: "₦" }),
    		cm.Item({ label: "₩  North Korean won (KPW)",	data: "₩" }),
    		cm.Item({ label: "₽  Russian ruble (RUB)",	data: "₽" }),
    		cm.Item({ label: "฿  Thai baht (BHT)",		data: "฿" }),
    		cm.Item({ label: "₺  Turkish lira (TRY)",	data: "₺" }),
    		cm.Item({ label: "$  United States Dollar (USD)",	data: "$" })
  	]
});

// Emoji
var emojiMenu=emoji_cm.Menu({
  label: "Emoji (Surrogate Pairs)",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		cm.Item({ label: String.fromCodePoint(0x1F600) + "  GRINNING FACE", 			data: String.fromCodePoint(0x1F600) }),
    		cm.Item({ label: String.fromCodePoint(0x1F601) + "  GRINNING FACE WITH SMILING EYES",   data: String.fromCodePoint(0x1F601) }),
    		cm.Item({ label: String.fromCodePoint(0x1F602) + "  FACE WITH TEARS OF JOY",   		data: String.fromCodePoint(0x1F602) }),
    		cm.Item({ label: String.fromCodePoint(0x1F603) + "  SMILING FACE WITH OPEN MOUTH",   	data: String.fromCodePoint(0x1F603) }),
    		cm.Item({ label: String.fromCodePoint(0x1F604) + "  SMILING FACE WITH OPEN MOUTH AND SMILING EYES",   	data: String.fromCodePoint(0x1F604) }),
    		cm.Item({ label: String.fromCodePoint(0x1F605) + "  SMILING FACE WITH OPEN MOUTH AND COLDSWEAT",   	data: String.fromCodePoint(0x1F605) }),
    		cm.Item({ label: String.fromCodePoint(0x1F606) + "  SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",   	data: String.fromCodePoint(0x1F606) }),
    		cm.Item({ label: String.fromCodePoint(0x1F607) + "  SMILING FACE WITH HALO",   		data: String.fromCodePoint(0x1F607) }),
    		cm.Item({ label: String.fromCodePoint(0x1F608) + "  SMILING FACE WITH HORNS",   	data: String.fromCodePoint(0x1F608) }),
    		cm.Item({ label: String.fromCodePoint(0x1F609) + "  WINKING FACE",   			data: String.fromCodePoint(0x1F609) }),
    		cm.Item({ label: String.fromCodePoint(0x1F60A) + "  SMILING FACE WITH SMILING EYES",   	data: String.fromCodePoint(0x1F60A) }),
    		cm.Item({ label: String.fromCodePoint(0x1F60B) + "  FACE SAVOURING DELICIOUS FOOD",   	data: String.fromCodePoint(0x1F60B) }),
    		cm.Item({ label: String.fromCodePoint(0x1F60C) + "  RELIEVED FACE",   			data: String.fromCodePoint(0x1F60C) }),
    		cm.Item({ label: String.fromCodePoint(0x1F60D) + "  SMILING FACE WITH HEART-SHAPED EYES",		data: String.fromCodePoint(0x1F60D) }),
    		cm.Item({ label: String.fromCodePoint(0x1F60E) + "  SMILING FACE WITH SUNGLASSES",	data: String.fromCodePoint(0x1F60E) }),
    		cm.Item({ label: String.fromCodePoint(0x1F60F) + "  SMIRKING FACE",			data: String.fromCodePoint(0x1F60F) }),
    		cm.Item({ label: String.fromCodePoint(0x1F610) + "  NEUTRAL FACE",			data: String.fromCodePoint(0x1F610) }),
    		cm.Item({ label: String.fromCodePoint(0x1F611) + "  EXPRESSIONLESS FACE",		data: String.fromCodePoint(0x1F611) }),
    		cm.Item({ label: String.fromCodePoint(0x1F612) + "  UNAMUSED FACE",			data: String.fromCodePoint(0x1F612) }),
    		cm.Item({ label: String.fromCodePoint(0x1F613) + "  FACE WITH COLD SWEAT",		data: String.fromCodePoint(0x1F613) }),
    		cm.Item({ label: String.fromCodePoint(0x1F614) + "  PENSIVE FACE",			data: String.fromCodePoint(0x1F614) }),
    		cm.Item({ label: String.fromCodePoint(0x1F615) + "  CONFUSED FACE",			data: String.fromCodePoint(0x1F615) }),
    		cm.Item({ label: String.fromCodePoint(0x1F616) + "  CONFOUNDED FACE",			data: String.fromCodePoint(0x1F616) })
  	]
});


var about_nmam = nmam.Item({
  label: "About. (Investigating Software)",
  contentScript: 'self.on("click", function (node, data) { window.location.assign("http://www.investigatingsoftware.co.uk");})' +
                 ';'});

// Menu structure
var languageMenu = cm.Menu({
  label: "Languages/Scripts",
  items: [arabic_std_cm,cherokee_cm,csimplified_cm,ctraditional_cm,georgian_cm,greek_mod_cm,hebrew_cm,hindi_cm,inuktitut_cm,kannada_cm,khmer_cm,korean_cm,russian_cm,sp_cm,swedish_cm,yoruba_cm]
});

var nomoreMenu = nmam.Menu({
  label: "No More ASCII",
  context: nmam.SelectorContext("input,textarea,div[contenteditable=true]"),
  items: [languageMenu,controlMenu,currencyMenu,emojiMenu,nmam.Separator(),about_nmam]
});



