import {PerspectiveCamera} from 'three';

const createCamera = () => {

	const camera = new PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);// FOV, viewport, view frustrum(depth) begin/end

	camera.position.setZ(50);
	return camera;
}

export { createCamera }
