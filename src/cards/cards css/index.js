var menu = document.querySelector("#menu");
		menu.onclick = function(){
			var btn = document.querySelector(".side-menu");
			btn.classList.toggle("hide");
		};


		var slideIndex = 1;
		showDivs(slideIndex);
		function plusDivs(n) {
		showDivs(slideIndex += n);
		}
		function showDivs(n) {
		var i;
		var x = document.getElementsByClassName("slides");
		if (n > x.length) {slideIndex = 1}
		if (n < 1) {slideIndex = x.length}
		for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		}
		x[slideIndex-1].style.display = "block";
		}

		function verMas() {
            var descripcion = document.getElementById("descripcion");
            var boton = document.getElementById("ver-mas-btn");
            var textoCompleto = descripcion.getAttribute("data-texto-completo");

            if (descripcion.classList.contains("mostrar")) {
                descripcion.innerText = textoCompleto.substring(0, textoCompleto.length / 2) + "...";
                descripcion.classList.remove("mostrar");
                boton.innerText = "Ver más";
            } else {
                descripcion.innerText = textoCompleto;
                descripcion.classList.add("mostrar");
                boton.innerText = "Ver menos";
            }
        }

        window.onload = function() {
            var descripcion = document.getElementById("descripcion");
            var textoCompleto = descripcion.innerText;
            descripcion.setAttribute("data-texto-completo", textoCompleto);
            descripcion.innerText = textoCompleto.substring(0, textoCompleto.length / 2) + "...";
        }