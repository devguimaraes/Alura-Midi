const teclado = document.querySelectorAll('.tecla');

const setIdAudio = (idAudio) => {
	const elemento = document.querySelector(`#som_${idAudio}`);

	if (elemento && elemento.localName === 'audio') {
		elemento.play();
	} else {
		console.error('O parametro passado está incorreto ou é invalido');
	}
};

const preencherCorTecla = (atributo, classCss) => {
	atributo.onkeydown = (event) => {
		if (event.code === 'Enter' || event.code === 'Space') {
			atributo.classList.add(classCss);
		}
	};

	atributo.onkeyup = () => {
		atributo.classList.remove(classCss);
	};
};

const tecladoMusical = () => {
	for (const teclasDoTeclado of teclado) {
		const idDoAudio = teclasDoTeclado.classList[1];
		teclasDoTeclado.addEventListener('click', () => {
			preencherCorTecla(teclasDoTeclado, 'test');
			setIdAudio(idDoAudio);
		});
	}
};

tecladoMusical();
