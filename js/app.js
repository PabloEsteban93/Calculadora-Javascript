
var calculadora = {

	teclas: document.getElementsByTagName("img"),
	on : document.getElementById("on"),
	signo : document.getElementById("sign"),
	display : document.getElementById("display"),
	punto : document.getElementById("punto"),
		
	cero : document.getElementById("0"),
	uno : document.getElementById("1"),
	dos : document.getElementById("2"),
	tres : document.getElementById("3"),
	cuatro : document.getElementById("4"),
	cinco : document.getElementById("5"),
	seis : document.getElementById("6"),
	siete : document.getElementById("7"),
	ocho : document.getElementById("8"),
	nueve : document.getElementById("9"),

	igual : document.getElementById("igual"),
	mas : document.getElementById("mas"),
	menos: document.getElementById("menos"),
	por : document.getElementById("por"),
	dividido: document.getElementById("dividido"),
	raiz: document.getElementById("raiz"),

	inicializar: function () {

		
		calculadora.raiz.addEventListener("mouseup", function() {
		aumentar(calculadora.raiz);
		});
		calculadora.raiz.addEventListener("mousedown", function() {
		disminuir(calculadora.raiz);
		});


		calculadora.cero.addEventListener("click", function() {
		mostrarNumero(calculadora.cero.alt);
		});
		calculadora.cero.addEventListener("mouseup", function() {
		aumentar(calculadora.cero);
		});
		calculadora.cero.addEventListener("mousedown", function() {
		disminuir(calculadora.cero);
		});

		calculadora.uno.addEventListener("click", function() {
		mostrarNumero(calculadora.uno.alt);
		});
		calculadora.uno.addEventListener("mouseup", function() {
		aumentar(calculadora.uno);
		});
		calculadora.uno.addEventListener("mousedown", function() {
		disminuir(calculadora.uno);
		});

		calculadora.dos.addEventListener("click", function() {
		mostrarNumero(calculadora.dos.alt);
		});
		calculadora.dos.addEventListener("mouseup", function() {
		aumentar(calculadora.dos);
		});
		calculadora.dos.addEventListener("mousedown", function() {
		disminuir(calculadora.dos);
		});

		calculadora.tres.addEventListener("click", function() {
		mostrarNumero(calculadora.tres.alt);
		});
		calculadora.tres.addEventListener("mouseup", function() {
		aumentar(calculadora.tres);
		});
		calculadora.tres.addEventListener("mousedown", function() {
		disminuir(calculadora.tres);
		});

		calculadora.cuatro.addEventListener("click", function() {
		mostrarNumero(calculadora.cuatro.alt);
		});
		calculadora.cuatro.addEventListener("mouseup", function() {
		aumentar(calculadora.cuatro);
		});
		calculadora.cuatro.addEventListener("mousedown", function() {
		disminuir(calculadora.cuatro);
		});

		calculadora.cinco.addEventListener("click", function() {
		mostrarNumero(calculadora.cinco.alt);
		});
		calculadora.cinco.addEventListener("mouseup", function() {
		aumentar(calculadora.cinco);
		});
		calculadora.cinco.addEventListener("mousedown", function() {
		disminuir(calculadora.cinco);
		});

		calculadora.seis.addEventListener("click", function() {
		mostrarNumero(calculadora.seis.alt);
		});
		calculadora.seis.addEventListener("mouseup", function() {
		aumentar(calculadora.seis);
		});
		calculadora.seis.addEventListener("mousedown", function() {
		disminuir(calculadora.seis);
		});

		calculadora.siete.addEventListener("click", function() {
		mostrarNumero(calculadora.siete.alt);
		});
		calculadora.siete.addEventListener("mouseup", function() {
		aumentar(calculadora.siete);
		});
		calculadora.siete.addEventListener("mousedown", function() {
		disminuir(calculadora.siete);
		});

		calculadora.ocho.addEventListener("click", function() {
		mostrarNumero(calculadora.ocho.alt);
		});
		calculadora.ocho.addEventListener("mouseup", function() {
		aumentar(calculadora.ocho);
		});
		calculadora.ocho.addEventListener("mousedown", function() {
		disminuir(calculadora.ocho);
		});

		calculadora.nueve.addEventListener("click", function() {
		mostrarNumero(calculadora.nueve.alt);
		});
		calculadora.nueve.addEventListener("mouseup", function() {
		aumentar(calculadora.nueve);
		});
		calculadora.nueve.addEventListener("mousedown", function() {
		disminuir(calculadora.nueve);
		});

		calculadora.punto.addEventListener("click", function() {
		mostrarNumero(".");
		});
		calculadora.punto.addEventListener("mouseup", function() {
		aumentar(calculadora.punto);
		});
		calculadora.punto.addEventListener("mousedown", function() {
		disminuir(calculadora.punto);
		});

		calculadora.mas.addEventListener("click", function() {
		operar("+");
		});
		calculadora.mas.addEventListener("mouseup", function() {
		aumentarmas(calculadora.mas);
		});
		calculadora.mas.addEventListener("mousedown", function() {
		disminuirmas(calculadora.mas);
		});

		calculadora.menos.addEventListener("click", function() {
		operar("-");
		});
		calculadora.menos.addEventListener("mouseup", function() {
		aumentar(calculadora.menos);
		});
		calculadora.menos.addEventListener("mousedown", function() {
		disminuir(calculadora.menos);
		});

		calculadora.por.addEventListener("click", function() {
		operar("*");
		});
		calculadora.por.addEventListener("mouseup", function() {
		aumentar(calculadora.por);
		});
		calculadora.por.addEventListener("mousedown", function() {
		disminuir(calculadora.por);
		});

		calculadora.dividido.addEventListener("click", function() {
		operar("/");
		});
		calculadora.dividido.addEventListener("mouseup", function() {
		aumentar(calculadora.dividido);
		});
		calculadora.dividido.addEventListener("mousedown", function() {
		disminuir(calculadora.dividido);
		});

		calculadora.igual.addEventListener("click", function() {
		igualar();
		calculadora.igual.addEventListener("mouseup", function() {
		aumentar(calculadora.igual);
		});
		calculadora.igual.addEventListener("mousedown", function() {
		disminuir(calculadora.igual);
		});

		});
		calculadora.on.addEventListener("click", function() {
		enCero();
		});
		calculadora.on.addEventListener("mouseup", function() {
		aumentar(calculadora.on);
		});
		calculadora.on.addEventListener("mousedown", function() {
		disminuir(calculadora.on);
		});

		calculadora.signo.addEventListener("click", function() {
		cambiarSigno();
		});
		calculadora.signo.addEventListener("mouseup", function() {
		aumentar(calculadora.signo);
		});
		calculadora.signo.addEventListener("mousedown", function() {
		disminuir(calculadora.signo);
		});

		var pantalla = calculadora.display;
		var numero="0";
		var iniciar=true;
		var punto=false;
		var numGuardado="";
		var opRep = false;
		var op = "no";
		var signo = false;
		var resultado="";
		


		

		function mostrarNumero(input) {
			
			if (numero.length<8) {
				if (numero == "0" && iniciar == true ) {//empezar a escribir el numero
					punto=false;
					
					if (input == "." ) {//cuando ingresa el punto
						pantalla.innerHTML = "0.";
						numero+=".";
						punto=true;
					}else if (input == "0" ) {//cuando ingresa el cero
						pantalla.innerHTML = "0";
						numero="0";
						resultado="";
						
					}

					else{
						pantalla.innerHTML = input;
						numero=input;
					}
				}			
				else {//continua escribiendo un numero
					if (numero=="0" && input!=".") {//
					 pantalla.innerHTML =input;
					 numero=input;
					
					 
					}else if (numero=="0" && input =="." && punto==false ) {//
					 pantalla.innerHTML ="0.";
					 numero="0.";
					 punto=true
					 
					}
					else if (input =="." && punto==false &&  numero!="0" ) {
						
							pantalla.innerHTML +=input;
							numero+=input;	
							punto = true;
						
					}
					else if (input =="." && punto==true ) {}
					else {

					pantalla.innerHTML +=input;
					numero+=input;
					}
				
				}
			}
			
		iniciar=false;	
		
			

		};

		function operar(operador) {
			if (opRep == true) {
				
				var n1=parseFloat(numGuardado);
				var n2=parseFloat(numero);
				var aux
				aux=eval(n1+op+n2)
				numGuardado=aux;
				
				
				numero="0";
				op=operador;
				opRep=true;
				iniciar=true;

			}else if (resultado!="" && numero=="0") {
				pantalla.innerHTML = "";
				numGuardado=resultado;
				op=operador;
				iniciar=true;
				opRep=true;
				numero="0";
			}
			else{
				pantalla.innerHTML = "";
				numGuardado=numero;
				op=operador;
				iniciar=true;
				opRep=true;
				numero="0";

			}
		};

		function igualar() {
			
			if (resultado!="" && numero=="0") {
				var dbigual = eval(resultado+op+numGuardado);
				var auxi=dbigual.toString();
				
				if(auxi.length<8){
					pantalla.innerHTML = auxi;
					resultado=auxi;
				}else{
					var r = auxi.toPrecision(8);
					pantalla.innerHTML = r;
					resultado=auxi;

				}
				iniciar=true;
				
				numero="0";
				punto=false;
				opRep=false;
			}

			else{ 
				resultado=eval(numGuardado+op+numero);
				var resp=resultado.toString();
				
				if(resp.length<8){
					pantalla.innerHTML = resp;
				}else{
					var res = resultado.toPrecision(8);
					pantalla.innerHTML = res;
				}
				iniciar=true;
				numGuardado=numero;
				numero="0";
				punto=false;
				opRep=false;
			
			}

		};
		function enCero() {
			pantalla.innerHTML = "0";
			numero="0";
			iniciar=true;
			punto=false;
			numGuardado="";
			opRep = false;
			op = "no";
			signo = false;
			resultado="";
		};

		function cambiarSigno() {

			if (resultado!="") {
				var nx=Number(resultado); 
	         ny=-nx; 
	         resultado=String(ny); 
	         if(resultado.length<8){
					pantalla.innerHTML = resultado;
				}else{
					var res = resultado.toPrecision(8);
					pantalla.innerHTML = res;
				}
	         pantalla.innerHTML=resultado;
			} else{
				 var nx=Number(numero); 
	         ny=-nx; 
	         numero=String(ny); 
	         pantalla.innerHTML=numero;
			}
			 
			
		};

		function aumentar(t) {
			t.style.padding = "0px 0px 0px 0px";
		}
		function disminuir(t) {
			t.style.padding = "7px 6px 2px 5px";
		}
		function aumentarmas(t) {
			t.style.padding = "0px 0px 0px 0px";
		}
		function disminuirmas(t) {
			t.style.padding = "2px 2px 2px 2px";
		}
	}
}

window.onload = calculadora.inicializar();



