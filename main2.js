import './style.css'
import * as T from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


const scene = new T.Scene(); // co-ordinate system space

const camera = new T.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);// FOV, viewport, view frustrum(depth) begin/end

const renderer = new T.WebGLRenderer({ // renders onto the canvas
	canvas : document.querySelector('#canvas')
})

renderer.setSize(window.innerWidth,window.innerHeight)  // to put in container, document.querySelector(container).innerWidth/Height
renderer.setPixelRatio(window.devicePixelRatio); // prevent blurring

camera.position.setZ(50);


const geometry = new T.SphereGeometry(15,64,32)
const material = new T.MeshStandardMaterial( { color : 0xffff00, wireframe : true  } );
const sphere = new T.Mesh(geometry, material)
scene.add(sphere)

// const boxGeometry = new T.BoxBufferGeometry(10,10,10)
// const boxMaterial = new T.MeshBasicMaterial({ color : 0xffff00,wireframe : true});
// const box = new T.Mesh(boxGeometry,boxMaterial)
// scene.add(box);

const pointLight = new T.PointLight(0xffffff)
pointLight.position.set(10,5,30)
scene.add(pointLight)

// const ambientLight = new T.AmbientLight(0xffffff)
// scene.add(ambientLight)

// const lightHelper = new T.PointLightHelper(pointLight)
// scene.add(lightHelper)

const gridHelper = new T.GridHelper(100,20)
scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);



function animate() {
	requestAnimationFrame(animate)

	// sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.005;
	sphere.rotation.z += 0.005;

	controls.update();

	renderer.render(scene,camera);

}
animate()
