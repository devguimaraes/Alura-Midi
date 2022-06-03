const teclado = document.querySelectorAll('.tecla');

const setIdAudio = (idAudio) => {
	document.querySelector(`#som_${idAudio}`).play();
};

const tecladoMusical = () => {
	for (const teclasDoTeclado of teclado) {
		const idDoAudio = teclasDoTeclado.classList[1];
		teclasDoTeclado.addEventListener('click', () => {
			setIdAudio(idDoAudio);
		});
	}
};

tecladoMusical();
