'use strict'

// Efecto scroll \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function efectoScroll($elemento, $clase, $momento) {
	let $pixel
	let $distanciaVertical

	$(window).on({
		scroll: function () {
			let alturaVentana = $(window).height()
			$pixel = $(window).scrollTop()
			$distanciaVertical = $($elemento).offset().top

			if ($pixel >= $distanciaVertical - alturaVentana / $momento) {
				$($elemento).addClass($clase)
			} else {
				$($elemento).removeClass($clase)
			}
			// console.log($pixel, $distanciaVertical, alturaVentana);
		},
	})
	$(window).on({
		resize: function () {
			$distanciaVertical = $($elemento).offset().top
			alturaVentana = $(window).height()
		},
	})
}
for (const cadaSection of $('.watch__img')) {
	efectoScroll(cadaSection, 'ver', 1.7)
}
for (const cadaSection of $('.watch__txt')) {
	efectoScroll(cadaSection, 'ver', 1)
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// console.clear()

function scrollTranslate(clase, momento, desplazamineto) {
	$(window).on({
		scroll: function () {
			let pixel = $(window).scrollTop()

			let alturaVentan = $(window).height()
			let distancia = $(clase).offset().top
			let activa = distancia - alturaVentan / momento

			if (pixel >= activa) {
				$(clase).css('transform', `translateY(${(pixel - activa) / desplazamineto}px)`)
			} else {
				$(clase).css('transform', `translateY(0px)`)
			}
		},
	})
}

scrollTranslate('.big__izq', 4, 8)
scrollTranslate('.big__der', 4, -4)
