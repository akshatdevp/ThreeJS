import { WebGLRenderer} from 'three';

const createRenderer = (target) => {
	const targetDom = document.querySelector(target)
	const renderer = new WebGLRenderer( {
		canvas : targetDom
	}
	)
	const height = /* targetDom.height ||  */window.innerHeight;
	const width  = /* targetDom.width ||  */window.innerWidth;
	// console.log(targetDom.height, targetDom.width)
	renderer.setSize( width, height)
	renderer.setPixelRatio(window.devicePixelRatio); 
	return renderer;
}

export { createRenderer }
