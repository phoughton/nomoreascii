var self = require('sdk/self');
var main_cm = require("sdk/context-menu");
var language_cm = require("sdk/context-menu");
var control_cm = require("sdk/context-menu");
var currency_cm = require("sdk/context-menu");
var emoji_cm = require("sdk/context-menu");

// Languages
var languageMenu=language_cm.Menu({
  label: "Languages/Scripts",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		language_cm.Item({ label: "Chinese (Mandarin) Traditional:   '我的氣墊船裝滿了鱔魚'", 	data: "我的氣墊船裝滿了鱔魚" }),
		language_cm.Item({ label: "Chinese (Mandarin) Simplified:    '我的气垫船装满了鳝鱼'", 	data: "我的气垫船装满了鳝鱼" }),
		language_cm.Separator(),
		language_cm.Item({ label: "Inuktitut:      'ᐊᑏ ᐅᖄᓚᓗᐊᙱᓚᑎᑦ'", 			data: "ᐊᑏ ᐅᖄᓚᓗᐊᙱᓚᑎᑦ" }),
		language_cm.Item({ label: "Swedish:      'Vad var det för ord – var det långt eller kort'", 	data: "Vad var det för ord – var det långt eller kort" }),
		language_cm.Item({ label: "Georgian:     'წარმატებებს გისურვებთ'", 			data: "წარმატებებს გისურვებთ" }),
		language_cm.Item({ label: "Greek (Modern):    'Το Χόβερκράφτ μου είναι γεμάτο χέλια'", 	data: "Το Χόβερκράφτ μου είναι γεμάτο χέλια" }),
		language_cm.Item({ label: "Hebrew:       " + String.fromCodePoint(0x200F) + String.fromCodePoint(1492) + String.fromCodePoint(1512) + String.fromCodePoint(1495) + String.fromCodePoint(1508) + String.fromCodePoint(1514) +" "+ String.fromCodePoint(1513) + String.fromCodePoint(1500) + String.fromCodePoint(1497) +" "+ String.fromCodePoint(1502) + String.fromCodePoint(1500) + String.fromCodePoint(1488) + String.fromCodePoint(1492) +" "+ String.fromCodePoint(1489) + String.fromCodePoint(1510) + String.fromCodePoint(1500) + String.fromCodePoint(1493) + String.fromCodePoint(1508) + String.fromCodePoint(1495) + String.fromCodePoint(1497) + String.fromCodePoint(1501) + String.fromCodePoint(8206), 		data: String.fromCodePoint(0x200F) + String.fromCodePoint(1492) + String.fromCodePoint(1512) + String.fromCodePoint(1495) + String.fromCodePoint(1508) + String.fromCodePoint(1514) +" "+ String.fromCodePoint(1513) + String.fromCodePoint(1500) + String.fromCodePoint(1497) +" "+ String.fromCodePoint(1502) + String.fromCodePoint(1500) + String.fromCodePoint(1488) + String.fromCodePoint(1492) +" "+ String.fromCodePoint(1489) + String.fromCodePoint(1510) + String.fromCodePoint(1500) + String.fromCodePoint(1493) + String.fromCodePoint(1508) + String.fromCodePoint(1495) + String.fromCodePoint(1497) + String.fromCodePoint(1501)+ String.fromCodePoint(8206) }),
		language_cm.Separator(),
		language_cm.Item({ label: "Arabic (Modern Standard):    " + String.fromCodePoint(0x200F) + String.fromCodePoint(1581) + String.fromCodePoint(1614) + String.fromCodePoint(1608) + String.fromCodePoint(1617) + String.fromCodePoint(1575) + String.fromCodePoint(1605) + String.fromCodePoint(1578) + String.fromCodePoint(1610) +  " " + String.fromCodePoint(1605) + String.fromCodePoint(1615) + String.fromCodePoint(1605) + String.fromCodePoint(1618) + String.fromCodePoint(1578) + String.fromCodePoint(1616) + String.fromCodePoint(1604) + String.fromCodePoint(1574) + String.fromCodePoint(1577) + " " + String.fromCodePoint(1576) + String.fromCodePoint(1616) + String.fromCodePoint(1571) + String.fromCodePoint(1614) + String.fromCodePoint(1606) + String.fromCodePoint(1618) + String.fromCodePoint(1602) + String.fromCodePoint(1614) + String.fromCodePoint(1604) + String.fromCodePoint(1614) + String.fromCodePoint(1610) + String.fromCodePoint(1618) + String.fromCodePoint(1587) + String.fromCodePoint(1608) + String.fromCodePoint(1606) + String.fromCodePoint(8206), 		data: String.fromCodePoint(0x200F) + String.fromCodePoint(1581) + String.fromCodePoint(1614) + String.fromCodePoint(1608) + String.fromCodePoint(1617) + String.fromCodePoint(1575) + String.fromCodePoint(1605) + String.fromCodePoint(1578) + String.fromCodePoint(1610) + " " +  String.fromCodePoint(1605) + String.fromCodePoint(1615) + String.fromCodePoint(1605) + String.fromCodePoint(1618) + String.fromCodePoint(1578) + String.fromCodePoint(1616) + String.fromCodePoint(1604) + String.fromCodePoint(1574) + String.fromCodePoint(1577) + " " + String.fromCodePoint(1576) + String.fromCodePoint(1616) + String.fromCodePoint(1571) + String.fromCodePoint(1614) + String.fromCodePoint(1606) + String.fromCodePoint(1618) + String.fromCodePoint(1602) + String.fromCodePoint(1614) + String.fromCodePoint(1604) + String.fromCodePoint(1614) + String.fromCodePoint(1610) + String.fromCodePoint(1618) + String.fromCodePoint(1587) + String.fromCodePoint(1608) + String.fromCodePoint(1606) + String.fromCodePoint(8206) }),
		language_cm.Separator(),
		language_cm.Item({ label: "Spanish:      '¿De dónde eres?'", 				data: "¿De dónde eres?" }),
		language_cm.Item({ label: "Russian:      'Моё судно на воздушной подушке полно угрей'", 	data: "Моё судно на воздушной подушке полно угрей" }),
		language_cm.Item({ label: "Korean:       '내 호버크라프트는 장어로 가득 차 있어요'", 	data: "내 호버크라프트는 장어로 가득 차 있어요" }),
		language_cm.Item({ label: "Hindi (Devanagari):  'सभी मनुष्यों को गौरव और अधिकारों के विषय में जन्मजात स्वतन्त्रता औरैं'", data: "सभी मनुष्यों को गौरव और अधिकारों के विषय में जन्मजात स्वतन्त्रता और" }),
		language_cm.Item({ label: "Cherokee:     'Ꮎ ᎠᏍᎦᏯ ᎠᎩᏙᏓ'", 				data: "Ꮎ ᎠᏍᎦᏯ ᎠᎩᏙᏓ" }),
		language_cm.Item({ label: "Kannada:      'ಅದು ಬಾಗಿಲಾ ಕಿಟಿಕಿಯಾ?'", data: "ಅದು ಬಾಗಿಲಾ ಕಿಟಿಕಿಯಾ?" }),
		language_cm.Item({ label: "Khmer:        'សុទ្ធ​តែ​អន្ទង់​ពេញ​ទូក​ហោះ​យើង'", data: "សុទ្ធ​តែ​អន្ទង់​ពេញ​ទូក​ហោះ​យើង" }),
		language_cm.Item({ label: "Yoruba:       'Ọkọ afategun-sare mi kun fun ẹja arọ'", data: "Ọkọ afategun-sare mi kun fun ẹja arọ" })
  	]
});


// Control Characters
var controlMenu=control_cm.Menu({
  label: "Control Characters/code-points",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		control_cm.Item({ label: "Right To Left marker", 	data: String.fromCodePoint(0x200F) }),
		control_cm.Item({ label: "Left To Right marker", 	data: String.fromCodePoint(0x200E) }),
		control_cm.Separator(),
		control_cm.Item({ label: "Right-to-Left Embedding", 	data: String.fromCodePoint(0x202B) }),
		control_cm.Item({ label: "Left-to-Right Embedding", 	data: String.fromCodePoint(0x202A) }),
		control_cm.Separator(),
		control_cm.Item({ label: "Right-to-Left Override", 	data: String.fromCodePoint(0x202E) }),
		control_cm.Item({ label: "Left-to-Right Override", 	data: String.fromCodePoint(0x202D) }),
		control_cm.Separator(),
		control_cm.Item({ label: "ASCII Shift Out", 		data: String.fromCodePoint(0x000E) }),
		control_cm.Item({ label: "ASCII Shift In", 		data: String.fromCodePoint(0x000F) }),
		control_cm.Separator(),
		control_cm.Item({ label: "Pop Directional Formatting", 	data: String.fromCodePoint(0x202C) }),
		control_cm.Item({ label: "Interlinear Annotation Anchor", data: String.fromCodePoint(0xFFF9) }),
  	]
});


// Currency Symbols
var currencyMenu=currency_cm.Menu({
  label: "Currency Symbols",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		currency_cm.Item({ label: "¤  Generic Currency Symbol", 	data: "¤" }),
		currency_cm.Separator(),
    		currency_cm.Item({ label: "؋  Afghan afghani (AFN)",   	data: "؋" }),
    		currency_cm.Item({ label: "د.ج  Algerian dinar (DZD)", 	data: "د.ج" }),
    		currency_cm.Item({ label: "₼  Azerbaijani manat (AZN)",	data: "₼" }),
    		currency_cm.Item({ label: "৳  Bangladeshi taka (BDT)",	data: "৳" }),
    		currency_cm.Item({ label: "៛  Cambodian riel (KHR)",	data: "៛" }),
    		currency_cm.Item({ label: "¢  Cent (USD etc)",		data: "¢" }),
    		currency_cm.Item({ label: "₡  Costa Rican colón (CRC)",	data: "₡" }),
    		currency_cm.Item({ label: "Kč  Czech koruna (CZK)",	data: "Kč" }),
    		currency_cm.Item({ label: "ج.م;  Egyptian pound (EGP)",	data: "ج.م;" }),
    		currency_cm.Item({ label: "€  Euro (EUR)",		data: "€" }),
    		currency_cm.Item({ label: "£  British Pound Sterling (GBP)",	data: "£" }),
    		currency_cm.Item({ label: String.fromCodePoint(0x20BE) + "  Georgian lari (GEL)",	data: String.fromCodePoint(0x20BE) }),
    		currency_cm.Item({ label: String.fromCodePoint(0x20B9) + "  Indian rupee (INR)" ,	data: String.fromCodePoint(0x20B9) }),
    		currency_cm.Item({ label: "¥  Japanese yen (JPY)",	data: "¥" }),
    		currency_cm.Item({ label: "₮  Mongolian tögrög (MNT)",	data: "₮" }),
    		currency_cm.Item({ label: "zł  Polish złoty (PLN)",	data: "zł" }),
    		currency_cm.Item({ label: "₦  Nigerian naira (NGN)",	data: "₦" }),
    		currency_cm.Item({ label: "₩  North Korean won (KPW)",	data: "₩" }),
    		currency_cm.Item({ label: "₽  Russian ruble (RUB)",	data: "₽" }),
    		currency_cm.Item({ label: "฿  Thai baht (BHT)",		data: "฿" }),
    		currency_cm.Item({ label: "₺  Turkish lira (TRY)",	data: "₺" }),
    		currency_cm.Item({ label: "$  United States Dollar (USD)",	data: "$" })
  	]
});

// Emoji
var emojiMenu=emoji_cm.Menu({
  label: "Emoji (Surrogate Pairs)",
  contentScript: 'self.on("click", function (node, data) {' +
                 '  node.value+=data;if (node.nodeName=="DIV") {node.innerHTML+=data;};' +
                 '});',
	items: [
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F600) + "  GRINNING FACE", 			data: String.fromCodePoint(0x1F600) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F601) + "  GRINNING FACE WITH SMILING EYES",   	data: String.fromCodePoint(0x1F601) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F602) + "  FACE WITH TEARS OF JOY",   		data: String.fromCodePoint(0x1F602) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F603) + "  SMILING FACE WITH OPEN MOUTH",   	data: String.fromCodePoint(0x1F603) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F604) + "  SMILING FACE WITH OPEN MOUTH AND SMILING EYES",   	data: String.fromCodePoint(0x1F604) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F605) + "  SMILING FACE WITH OPEN MOUTH AND COLDSWEAT",   	data: String.fromCodePoint(0x1F605) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F606) + "  SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",data: String.fromCodePoint(0x1F606) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F607) + "  SMILING FACE WITH HALO",   		data: String.fromCodePoint(0x1F607) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F608) + "  SMILING FACE WITH HORNS",   		data: String.fromCodePoint(0x1F608) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F609) + "  WINKING FACE",   			data: String.fromCodePoint(0x1F609) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F60A) + "  SMILING FACE WITH SMILING EYES",   	data: String.fromCodePoint(0x1F60A) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F60B) + "  FACE SAVOURING DELICIOUS FOOD",   	data: String.fromCodePoint(0x1F60B) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F60C) + "  RELIEVED FACE",   			data: String.fromCodePoint(0x1F60C) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F60D) + "  SMILING FACE WITH HEART-SHAPED EYES",		data: String.fromCodePoint(0x1F60D) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F60E) + "  SMILING FACE WITH SUNGLASSES",	data: String.fromCodePoint(0x1F60E) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F60F) + "  SMIRKING FACE",			data: String.fromCodePoint(0x1F60F) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F610) + "  NEUTRAL FACE",			data: String.fromCodePoint(0x1F610) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F611) + "  EXPRESSIONLESS FACE",			data: String.fromCodePoint(0x1F611) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F612) + "  UNAMUSED FACE",			data: String.fromCodePoint(0x1F612) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F613) + "  FACE WITH COLD SWEAT",		data: String.fromCodePoint(0x1F613) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F614) + "  PENSIVE FACE",			data: String.fromCodePoint(0x1F614) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F615) + "  CONFUSED FACE",			data: String.fromCodePoint(0x1F615) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F616) + "  CONFOUNDED FACE",			data: String.fromCodePoint(0x1F616) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F617) + "  KISSING FACE",			data: String.fromCodePoint(0x1F617) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F618) + "  FACE THROWING A KISS",		data: String.fromCodePoint(0x1F618) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F619) + "  KISSING FACE WITH SMILING EYES",	data: String.fromCodePoint(0x1F619) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F61A) + "  KISSING FACE WITH CLOSED EYES",	data: String.fromCodePoint(0x1F61A) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F61B) + "  FACE WITH STUCK-OUT TONGUE",		data: String.fromCodePoint(0x1F61B) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F61C) + "  FACE WITH STUCK-OUT TONGUE AND WINKING EYE",		data: String.fromCodePoint(0x1F61C) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F61D) + "  FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",	data: String.fromCodePoint(0x1F61D) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F61E) + "  DISAPPOINTED FACE",			data: String.fromCodePoint(0x1F61E) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F61F) + "  WORRIED FACE",			data: String.fromCodePoint(0x1F61F) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F620) + "  ANGRY FACE",				data: String.fromCodePoint(0x1F620) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F621) + "  POUTING FACE",			data: String.fromCodePoint(0x1F621) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F622) + "  CRYING FACE",				data: String.fromCodePoint(0x1F622) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F623) + "  PERSEVERING FACE",			data: String.fromCodePoint(0x1F623) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F624) + "  FACE WITH LOOK OF TRIUMPH",		data: String.fromCodePoint(0x1F624) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F625) + "  DISAPPOINTED BUT RELIEVED FACE",	data: String.fromCodePoint(0x1F625) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F626) + "  FROWNING FACE WITH OPEN MOUTH",	data: String.fromCodePoint(0x1F626) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F627) + "  ANGUISHED FACE",			data: String.fromCodePoint(0x1F627) }),
    		emoji_cm.Item({ label: String.fromCodePoint(0x1F628) + "  FEARFUL FACE",			data: String.fromCodePoint(0x1F628) })
  	]
});


var about_nmam = main_cm.Item({
  label: "About. (Investigating Software)",
  contentScript: 'self.on("click", function (node, data) { window.location.assign("http://www.investigatingsoftware.co.uk");})' +
                 ';'});

var nomoreMenu = main_cm.Menu({
  label: "No More ASCII",
  context: main_cm.SelectorContext("input,textarea,div[contenteditable=true]"),
  items: [languageMenu,controlMenu,currencyMenu,emojiMenu,main_cm.Separator(),about_nmam]
});



