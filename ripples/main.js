import './style.css'
import { createScene } from './components/scene.js'
import { createCamera } from './components/camera.js'
import { createSphere } from './components/sphere.js'
import { createRenderer } from './actors/renderer'
import { createAmbientLight } from './components/lights'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { rotateRandom } from './action/rotateRandom.js'

let sphereVertexCount
let sphereGeometry 
let position_clone,normals_clone,damping
const main = () => {

	const scene = createScene();
	const camera = createCamera();

	const {initialSphere, geometry} = createSphere();
	sphereGeometry =  geometry
	sphereVertexCount = initialSphere.geometry.attributes.position.count
	scene.add(initialSphere);

	const renderer = createRenderer('#canvas');
	const controls = new OrbitControls(camera, renderer.domElement);
	const ambientLight = createAmbientLight();
	scene.add(ambientLight)

	position_clone = JSON.parse(JSON.stringify(sphereGeometry.attributes.position.array)) 
	normals_clone = JSON.parse(JSON.stringify(sphereGeometry.attributes.normal.array)) 
	damping = 0.4;
	animate(initialSphere,controls,()=>renderer.render(scene,camera))
}
function animate(sphere,controls,render) {
	requestAnimationFrame( () => { animate(sphere,controls,render) } )
	rotateRandom(sphere)
	const now = Date.now() / 200;

        // iterate all vertices
        for (let i = 0; i < sphereVertexCount; i++) {
            // indices
            const ix = i * 3
            const iy = i * 3 + 1
            const iz = i * 3 + 2

            // use uvs to calculate wave
            const uX = sphereGeometry.attributes.uv.getX(i) * Math.PI * 100
            const uY = sphereGeometry.attributes.uv.getY(i) * Math.PI * 100

            // calculate current vertex wave height
            const xangle = (uX + now)
            const xsin = Math.sin(xangle) * damping
            const yangle = (uY + now)
            const ycos = Math.cos(yangle) * damping

            // set new position
            sphereGeometry.attributes.position.setX(i, position_clone[ix] + normals_clone[ix] * (xsin + ycos))
            sphereGeometry.attributes.position.setY(i, position_clone[iy] + normals_clone[iy] * (xsin + ycos))
            sphereGeometry.attributes.position.setZ(i, position_clone[iz] + normals_clone[iz] * (xsin + ycos))
        }
        sphereGeometry.computeVertexNormals();
        sphereGeometry.attributes.position.needsUpdate = true;
	// sphere.rotation.x += 0.01;
	// sphere.rotation.y += 0.005;
	// sphere.rotation.z += 0.005;
	controls.update();
	render();


}
main();
