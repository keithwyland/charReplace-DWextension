function canAcceptCommand(){
    return true
}

function replaceChars() {
  var theDOM = dw.getDocumentDOM();
	var theDocEl = theDOM.documentElement;
	var theWholeDoc = theDocEl.outerHTML;
	var countDblquot = 0;
	var countDash = 0;
	var countSglquot = 0;
	var countFrac = 0;
	var countCopyreg = 0;
	var countEllip = 0;
	var countWordsp = 0;
	
	while(theWholeDoc.search(/½/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(½)/, "&frac12;");
		countFrac++;
	}
	
	while(theWholeDoc.search(/¼/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(¼)/, "&frac14;");
		countFrac++;
	}
	
	while(theWholeDoc.search(/¾/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(¾)/, "&frac34;");
		countFrac++;
	}
	
	while(theWholeDoc.search(/©/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(©)/, "&#169;");
		countCopyreg++;
	}
	
	while(theWholeDoc.search(/®/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(®)/, "&#174;");
		countCopyreg++;
	}
	
	while(theWholeDoc.search(/™/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(™)/, "&#153;");
		countCopyreg++;
	}
	
	while(theWholeDoc.search(/…|&hellip\;/) != "-1"){
		theWholeDoc = theWholeDoc.replace(/(…|&hellip\;)/, "&hellip;");
		countEllip++;
	}
	
	while(theWholeDoc.search(/ /) != "-1"){
		theWholeDoc = theWholeDoc.replace(/( )/, " ");
		countWordsp++;
	}
	
	theDocEl.outerHTML = theWholeDoc;
	
	window.close();
	
	var alertMsg = "Replaced: \n" +
				countFrac + " fractions \n" +
				countCopyreg + " copy, reg, tm symbols \n" +
				countEllip + " ellipses \n" +
				countWordsp + " funky Word spaces \n" +
				"\n Stay calm and code on!";
				
	alert(alertMsg);
	
	return;
}
