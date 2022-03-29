//* Cada tecla es detectada cuando se presiona y cuando se suelta para mejor movimiento
//? Se añadirán más teclas para futuras mejoras de la paleta

export default class manejar_entradas {
	constructor(paleta, juego) {
		// Detectar cuando se presiona una tecla de forma que se ejecute la última pulsada
		//! Se deberá cambiar para cuando se presione dos teclas y se suelte la última, la primera se continúe
		document.addEventListener('keydown', (event) => {
			switch (event.key) {
				case "ArrowLeft":
				case "a":
					paleta.mover_izquierda();
					break;
				case "ArrowRight":
				case "d":
					paleta.mover_derecha();
					break;
				case "p":
					juego.cambiar_pausa();
					break;
				case " ":
					if (juego.estado == 2) {
						juego.comienza()
					}
					break;
			}
		})

		// Detectar cuando se suelta para parar la ejecución
		document.addEventListener('keyup', (event) => {
			switch (event.key) {
				case "ArrowLeft":
				case "a":
					if (paleta.velocidad < 0)
						paleta.parar();
					break;
				case "ArrowRight":
				case "d":
					if (paleta.velocidad > 0)
						paleta.parar();
					break;
			}
		})
	}
}