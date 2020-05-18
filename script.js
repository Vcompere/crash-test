 
 // var test = "123456";
 // $("#msg").append(test[0]);
 var lyrics = "Gang Bang Gang comme un présage futuriste! Ta mère sans capote AKA l'amour du risque! T'as voulus nous tester, la lourdeur t'as palpé, même ThiboInShape ne parviendrait pas à nous soulever!";
 var db = ['Foutre', 'King of the Foutre', 'GBG dcc', 'GBZ dcp', 'GangBang Gang', 'Double cornetto croise', 'Fougere', 'Queen of the Foutre'];
 var liste = [];
		var showText = function (target, message, index, interval) {   
 	if (index < message.length) {
 		$(target).append(message[index++]);
 		var r = getRandomInt(0,255);
 		var g = getRandomInt(0,255);
 		var b = getRandomInt(0,255);
 		$("#body").css("background", "radial-gradient(rgb("+r+","+g+","+b+"), rgb(0,0,0))");
 		$("#logoBig").attr("src", getRandomInt(0,12)+".png");
 		$("#logoBig").css("width", getRandomInt(1,40)+"%");
 		$("#logoBig").css("top", getRandomInt(0,100)+"%");
 		$("#logoBig").css("left", getRandomInt(0,100)+"%");

 		$("#logoBig1").attr("src", getRandomInt(0,12)+".png");
 		$("#logoBig1").css("width", getRandomInt(1,40)+"%");
 		$("#logoBig1").css("top", getRandomInt(0,100)+"%");
 		$("#logoBig1").css("left", getRandomInt(0,100)+"%");

 		$("#logoBig2").attr("src", getRandomInt(0,12)+".png");
 		$("#logoBig2").css("width", getRandomInt(1,40)+"%");
 		$("#logoBig2").css("top", getRandomInt(0,100)+"%");
 		$("#logoBig2").css("left", getRandomInt(0,100)+"%");

 		$("#logoBig3").attr("src", getRandomInt(0,12)+".png");
 		$("#logoBig3").css("width", getRandomInt(1,40)+"%");
 		$("#logoBig3").css("top", getRandomInt(0,100)+"%");
 		$("#logoBig3").css("left", getRandomInt(0,100)+"%");

 		$("#logoBig4").attr("src", getRandomInt(0,12)+".png");
 		$("#logoBig4").css("width", getRandomInt(1,40)+"%");
 		$("#logoBig4").css("top", getRandomInt(0,100)+"%");
 		$("#logoBig4").css("left", getRandomInt(0,100)+"%");
 		setTimeout(function () { showText(target, message, index, interval); }, interval);
		}
	}


for(let i=0; i<=5000; i++){
	var fontSize = getRandomInt(1,5);
	liste[i] ='<span style="color: rgba(255,255,255,'+Math.random()*1.1+'); font-size:'+fontSize+'.'+getRandomInt(0,10)+'rem">'+db[getRandomInt(0,db.length-1)]+' </span>';
}

showText("#zizi", liste, 0, 400);   

$("#logoBig").click(function(){
	$("#bonjour").append('<audio autoplay preload="auto" class="playerAudio">\n'+
					        '<source src="bonjour.mp3" type="audio/mp3" />\n'+		
					    '</audio>');
});


function getRandomInt(min, max) {
	do{
		var result = Math.floor(Math.random() * Math.floor(max+1.5));
	}while(result < min);

    return result;
}
