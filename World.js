import { createCamera } from './components/camera.js';
import { createBox } from './components/box.js';
import { createSphere } from './components/sphere.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createBox();
    const sphere = createSphere();

    scene.add(sphere);
    scene.add(cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
