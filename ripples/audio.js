import './style.css'

let file = document.getElementById("audioFile");
let audio = document.getElementById("audio");
file.onchange = function() {

	audio.src = URL.createObjectURL(this.files[0]);
	const audioContext = new AudioContext() // used to create the mediaELementSource / analyzer etc
	const audioSource  = audioContext.createMediaElementSource(audio)// used to get web audio api features

	const analyser     = audioContext.createAnalyser(); // use analyzer.getByteFrequencyData when music is playing for actual data.
	audioSource.connect(analyser);// pass the audio to analyzer first
	analyser.connect(audioContext.destination) // destination refers to the physical device such as speakers. Ignore if you don't wanna listen to the music.

	const canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// const ctx = canvas.getContext("2d");
	// ctx.fillStyle = "#303030";
	// ctx.fillRect(0, 0, canvas.width, canvas.height);

	let data = new Uint8Array(bufferSize);
	function renderFrame() { 

		requestAnimationFrame(renderFrame); // better than setTimeout cus accurate!
		analyser.getByteFrequencyData(data); // $$$$$ gets the bytes into the data as integers!!
	}

	//audio.load
	audio.play();
	renderFrame();
}
