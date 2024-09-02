import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.152.0/examples/jsm/loaders/GLTFLoader.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D model
const loader = new GLTFLoader();
loader.load('./skull_downloadable.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Optional: Set the position, scale, or rotation of the model
    model.position.set(0, -1, 0);
    model.scale.set(1, 1, 1);

    // Optional: Add lighting if needed
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft ambient light
    scene.add(ambientLight);

    camera.position.z = 5;

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; // Rotate the model for effect
        renderer.render(scene, camera);
    }

    animate();
}, undefined, function (error) {
    console.error('An error occurred while loading the model:', error);
});

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
