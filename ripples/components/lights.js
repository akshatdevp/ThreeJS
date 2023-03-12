import {AmbientLight} from 'three';

const createAmbientLight = () => {
	const ambientLight = new AmbientLight(0xffffff)
	return ambientLight;
}

export {createAmbientLight}
