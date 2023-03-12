import {BoxBufferGeometry, MeshBasicMaterial, Mesh} from 'three';

function createBox(){
	const boxGeometry = new BoxBufferGeometry(1,1,1)
	const boxMaterial = new MeshBasicMaterial({ color : "yellow",wireframe : true});
	const box 	  = new Mesh(boxGeometry,boxMaterial)
	// console.log(box);
	return box;
}

export {createBox}
