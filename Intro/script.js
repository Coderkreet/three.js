// const  scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(2,2,2);
// const material = new THREE.MeshBasicMaterial( {color: "red"} ); 


// const box = new THREE.Mesh(geometry , material);

// scene.add(box);

// const size ={
//     width : 700,
//     height : 500
// }
// const camera = new THREE.PerspectiveCamera(75, size.width/size.height);
// camera.position.z = 4;
// camera.position.x = 0.1;
// camera.position.y = 0.3;

// scene.add(camera);


// const target = document.querySelector(".wbgl");

// const Renderer = new THREE.WebGLRenderer({canvas : target})

// Renderer.setSize(size.width , size.height);

// Renderer.render(scene , camera);


// // Animate the cube using GSAP
// gsap.to(box.rotation, {
//     y:8, // Rotate 360 degrees
//     x: 4,
//     duration: 4, // Duration of the animation in seconds
//     repeat: -1, // Repeat infinitely
//     ease: "power1.inOut", // Easing function
//   });


// 222________________________

// const scene = new THREE.Scene();

// // Create geometry and material
// const geometry = new THREE.BoxGeometry(2, 2, 2);
// const material = new THREE.MeshBasicMaterial({ color: "red" });

// // Create the cube (mesh)
// const box = new THREE.Mesh(geometry, material);
// scene.add(box);

// // Set up camera
// const size = {
//   width: 700,
//   height: 500,
// };
// const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
// camera.position.z = 4;
// camera.position.x = 0.1;
// camera.position.y = 0.3;

// scene.add(camera);

// // Set up the renderer
// const target = document.querySelector(".wbgl");
// const Renderer = new THREE.WebGLRenderer({ canvas: target });
// Renderer.setSize(size.width, size.height);

// // Animate the cube using GSAP
// gsap.to(box.rotation, {
//   y: Math.PI * 2, // Rotate 360 degrees
//   x: Math.PI * 2,
//   duration: 5, // Duration of the animation in seconds
//   repeat: -1, // Repeat infinitely
//   ease: "power1.inOut", // Easing function
// });

// // Render the scene
// function animate() {
//   Renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

// animate();


// #2222222222222222222222222222222222222


const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

const size = {
  width: 700,
  height: 500,
};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 4;
camera.position.x = 0.1;
camera.position.y = 0.3;

scene.add(camera);

const target = document.querySelector(".wbgl");
const Renderer = new THREE.WebGLRenderer({ canvas: target });
Renderer.setSize(size.width, size.height);

// Variables to store mouse positions
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  // Normalize mouse coordinates (-1 to 1) based on window size
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animate rotation based on mouse position
function animate() {
  // Rotate the cube based on mouse movement
  gsap.to(box.rotation, {
    x: mouseY * Math.PI, // Rotate on x-axis based on vertical mouse movement
    y: mouseX * Math.PI, // Rotate on y-axis based on horizontal mouse movement
    duration: 0.5, // Smooth the animation over 0.5 seconds
    ease: "power1.out", // Easing function for smoother motion
  });

  Renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

