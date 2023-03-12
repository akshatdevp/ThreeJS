import {Scene, Color} from 'three';


function createScene(){
	const scene = new Scene(); // co-ordinate system space
	scene.background = new Color('red');
	return scene;
}

export {createScene}
