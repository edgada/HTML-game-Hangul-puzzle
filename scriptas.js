basicHangul=["ㅏ","ㅑ","ㅓ","ㅕ","ㅗ","ㅛ","ㅜ","ㅠ","ㅡ","ㅣ","ㄱ","ㅋ","ㄴ","ㄷ","ㅌ","ㄹ","ㅁ","ㅂ","ㅍ","ㅅ","ㅈ","ㅎ","ㅊ","ㅇ"];

pirmi = [];
kopija = [];
galutinis = [];
paspaudimas = 0;
pirmas = 99;
pirmoid = 0;
antras = 66;
antroid = 0;
viso = 0;


function pasirinkau(o) {
	
	var x=o.id;
    if(paspaudimas == 0)
	{
		paspaudimas = 1;
		
		document.getElementById(x).innerHTML = basicHangul[galutinis[x-1]];
			
		pirmas = galutinis[x-1];
		pirmoid = x;
		document.getElementById(x).style.backgroundImage = "url('pics/mygtukas_zalias.png')";

		document.getElementById(x).onmouseover = function(){};
		document.getElementById(x).onmouseleave  = function(){};
	}
	else if(paspaudimas == 1 && pirmoid != x)
	{
		paspaudimas = 0
		
		document.getElementById(x).innerHTML = basicHangul[galutinis[x-1]];
		antras = galutinis[x-1];
		antroid = x;
		
		if(pirmas == antras)
		{
			viso = viso + 1;
			
			document.getElementById(pirmoid).style.backgroundImage = "url('pics/ispaustas_mygtukas.png')";
			document.getElementById(pirmoid).style.color = "black";
			document.getElementById(x).style.backgroundImage = "url('pics/ispaustas_mygtukas.png')";
			document.getElementById(x).style.color = "black";
			
			document.getElementById(pirmoid).onmouseover = function(){};
			document.getElementById(x).onmouseover = function(){};
			document.getElementById(pirmoid).onmouseleave  = function(){};
			document.getElementById(x).onmouseleave  = function(){};
			document.getElementById(pirmoid).onclick = function() {};
			document.getElementById(x).onclick = function() {};
			
			if(viso == 20)
			{
				for(i=1;i<41;i++)
				{
					document.getElementById(i).style.backgroundImage = "url('pics/mygtukas_zalias.png')";
				}
			}
		}
		else
		{

			document.getElementById(pirmoid).style.backgroundImage = "url('pics/red.png')";
			document.getElementById(x).style.backgroundImage = "url('pics/red.png')";
			
			skaiciuojam(x, pirmoid);
			
		}
	}

}

function parodyk(o) {
	var x=o.id;
	document.getElementById(x).innerHTML = basicHangul[galutinis[x-1]];
	document.getElementById(x).style.fontSize = "40px";
}

function perkrauti() {
    location.reload();
}

function skaiciuojam(x, y) {  
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
	  document.getElementById(y).style.backgroundImage = "url('pics/mygtukas.png')";
	  document.getElementById(x).style.backgroundImage = "url('pics/mygtukas.png')";
	  document.getElementById(y).innerHTML = "";
	  document.getElementById(x).innerHTML = "";
	  document.getElementById(y).onmouseover = function() 
			{
				document.getElementById(y).style.backgroundImage = "url('pics/mygtukas_zalias.png')";
				parodyk(this);
			}
	  document.getElementById(x).onmouseover = function() 
			{
				document.getElementById(x).style.backgroundImage = "url('pics/mygtukas_zalias.png')";
				parodyk(this);
			}
	  document.getElementById(y).onmouseleave  = function() 
			{
				document.getElementById(y).style.backgroundImage = "url('pics/mygtukas.png')";
				document.getElementById(y).innerHTML = "";
			}
	  document.getElementById(x).onmouseleave  = function() 
			{
				document.getElementById(x).style.backgroundImage = "url('pics/mygtukas.png')";
				document.getElementById(x).innerHTML = "";
			}
    } else {
      pos++; 
    }
  }
}

function laikmatis() {  
  var id = setInterval(update, 1000);
  var sekundes = 0;
  var minutes = 0;
  function update() {
    if (viso == 20) {
      clearInterval(id);

    } else {
		if(sekundes < 59)
		{
			sekundes++;
		}
		else
		{
			minutes = minutes + 1;
			sekundes = 0;
		}
	
		if (minutes < 10)
		{
			if (sekundes < 10)
			{
				document.getElementById('time').innerHTML = "0" + minutes + ":" + "0" + sekundes;
			}
			else
			{
				document.getElementById('time').innerHTML = "0" + minutes + ":" + sekundes;
			}
		}
		else
		{
			if (sekundes < 10)
			{
				document.getElementById('time').innerHTML = minutes + ":" + "0" + sekundes;
			}
			else
			{
				document.getElementById('time').innerHTML = minutes + ":" + sekundes;
			}
		}
    }
  }
}

function sugeneruojamListus()
{
	
	for(i=0;i<20;i++)
	{
		laikinas = random(24);
		while(contains(pirmi, laikinas))
		{
			laikinas = random(24);
		}
		pirmi[i] = laikinas;
		kopija[i] = 0;
	}
	
	for(j=0;j<20;j++)
	{
		laikinas2 = random(20);
		while(kopija[laikinas2] != 0)
		{
			laikinas2 = random(20);
		}
		kopija[laikinas2] = pirmi[j];
	}
	sudedamGalutini();
	laikmatis();
}

function sudedamGalutini()
{
	var i;
	for(i=0;i<40;i++) 
		if(i%2 == 0) galutinis[i] = pirmi[i/2];
		else galutinis[i] = kopija[Math.floor(i/2)]; 
}

function contains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}

function random(y) {
    var x = Math.floor(Math.random() * y);
    return x;
}

function ijungiamVisusMygtukus() {
	var i;
	var dabartineJuosta = "1";
	for(i=1;i<41; i++)
	{
		if (i == 1 || i == 6 || i == 11 || i == 16 || i == 21 || i == 26 || i == 31 || i == 36)
		{
			var juosta = document.createElement("DIV");
			juosta.className = "mygtukuJuosta";
			juosta.id = "k" + i;
			document.getElementById("container").appendChild(juosta);
			dabartineJuosta = "k" + i;
		}
		
		var dv = document.createElement("DIV");
		dv.className = "mygtukas";
		dv.id = i;
		dv.style.cursor = 'pointer';
		dv.onclick =  function() { 
			 pasirinkau(this);
			 };
		dv.onmouseover = onmouseover = function() 
			{
				parodyk(this);
			};
		dv.onmouseleave = function() 
			{
				this.innerHTML = "";
			}
		document.getElementById(dabartineJuosta).appendChild(dv);  
	}
	var meniudv = document.createElement("DIV");
	meniudv.id = "meniuJuosta";
	document.getElementById("container").appendChild(meniudv);
	
		var kaire = document.createElement("DIV");
		kaire.id = "kaire";
		document.getElementById("meniuJuosta").appendChild(kaire);
	
			var resetMygtukas = document.createElement("DIV");
			resetMygtukas.id = "Resetmygtukas";
			resetMygtukas.innerHTML = "Reset";
			resetMygtukas.style.cursor = 'pointer';
			resetMygtukas.onclick = function() {perkrauti();};
			document.getElementById("kaire").appendChild(resetMygtukas);
	
		var laikas = document.createElement("DIV");
		laikas.className = "laikas";
		laikas.id = "time";
		document.getElementById("meniuJuosta").appendChild(laikas);
	
		var appsui = document.createElement("DIV");
		appsui.id = "android";
		appsui.innerHTML = '<a href="https://play.google.com/store/apps/details?id=appinventor.ai_edsoftapps.Easy_Korean" target="_blank"><img src="pics/play.png"></a>';
		document.getElementById("meniuJuosta").appendChild(appsui);
}