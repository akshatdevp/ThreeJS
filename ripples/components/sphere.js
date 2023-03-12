import {SphereGeometry,MeshStandardMaterial, Mesh} from 'three';

const createSphere = () => {
	const geometry = new SphereGeometry(15,32,16)
	const material = new MeshStandardMaterial( { color : 0x529ca7, wireframe : true } )
	return { initialSphere : new Mesh(geometry,material), geometry : geometry } 
}

export {createSphere}
