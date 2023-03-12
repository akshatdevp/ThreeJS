import {SphereGeometry,MeshStandardMaterial, Mesh} from 'three';

function createSphere(){
	const geometry = new SphereGeometry(5,32,64)
	const material = new MeshStandardMaterial( { color : 0xffff00, wireframe : true  } );
	const sphere = new Mesh(geometry, material)
	return sphere
}

export {createSphere}
