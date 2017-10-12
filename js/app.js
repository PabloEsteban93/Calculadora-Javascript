
var calculadora = {

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

	inicializar: function () {
		calculadora.cero.addEventListener("click", function() {
		mostrarNumero(calculadora.cero.alt);
		});
		calculadora.uno.addEventListener("click", function() {
		mostrarNumero(calculadora.uno.alt);
		});
		calculadora.dos.addEventListener("click", function() {
		mostrarNumero(calculadora.dos.alt);
		});
		calculadora.tres.addEventListener("click", function() {
		mostrarNumero(calculadora.tres.alt);
		});
		calculadora.cuatro.addEventListener("click", function() {
		mostrarNumero(calculadora.cuatro.alt);
		});
		calculadora.cinco.addEventListener("click", function() {
		mostrarNumero(calculadora.cinco.alt);
		});
		calculadora.seis.addEventListener("click", function() {
		mostrarNumero(calculadora.seis.alt);
		});
		calculadora.siete.addEventListener("click", function() {
		mostrarNumero(calculadora.siete.alt);
		});
		calculadora.ocho.addEventListener("click", function() {
		mostrarNumero(calculadora.ocho.alt);
		});
		calculadora.nueve.addEventListener("click", function() {
		mostrarNumero(calculadora.nueve.alt);
		});
		calculadora.punto.addEventListener("click", function() {
		mostrarNumero(".");
		});

		calculadora.mas.addEventListener("click", function() {
		operar("+");
		});
		calculadora.menos.addEventListener("click", function() {
		operar("-");
		});
		calculadora.por.addEventListener("click", function() {
		operar("*");
		});
		calculadora.dividido.addEventListener("click", function() {
		operar("/");
		});

		calculadora.igual.addEventListener("click", function() {
		igualar();
		});
		calculadora.on.addEventListener("click", function() {
		enCero();
		});
		calculadora.signo.addEventListener("click", function() {
		cambiarSigno();
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
					
					
					if (input == "." ) {
						pantalla.innerHTML = "0.";
						numero+="0.";
						punto=true;
					}
					else{
						pantalla.innerHTML = input;
						numero=input;
					}
				}			
				else {
					if (numero=="0") {
					 pantalla.innerHTML =input;
					 numero=input;
					 iniciar=true
					 
					}
					else if (input =="." && punto==false ) {
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
				
				var n1=parseInt(numGuardado);
				var n2=parseInt(numero);
				var aux
				aux=eval(n1+op+n2)
				numGuardado=aux;
				pantalla.innerHTML = aux;
				numero="0";
				op=operador;
				opRep=true;
				iniciar=true;

			}else{
				pantalla.innerHTML = "";
				numGuardado=numero;
				op=operador;
				iniciar=true;
				opRep=true;
				numero="0";

			}
		};

		function igualar() {
			resultado=eval(numGuardado+op+numero);
			var resp=resultado.toString();
			console.log(resp.length);
			if(resp.length<8){
				pantalla.innerHTML = resp;
			}else{
				var res = resultado.toPrecision(8);
				pantalla.innerHTML = res;
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
			// body...
		}
	}
}

calculadora.inicializar();



