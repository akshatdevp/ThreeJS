import {WebGLRenderer} from 'three';

function createRenderer(container){
	if(!container || !container.innerWidth || !container.innerHeight) container = window
	const renderer = new WebGLRenderer()

	renderer.setSize(window.innerWidth,window.innerHeight)  // to put in container, document.querySelector(container).innerWidth/Height
	renderer.setSize(container.innerWidth,container.innerHeight)  
	renderer.setPixelRatio(window.devicePixelRatio); // prevent blurring
	return renderer;
}

export {createRenderer}
