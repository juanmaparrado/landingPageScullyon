const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas2")});
renderer.setSize(window.innerWidth, window.innerHeight);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeTexture = new THREE.TextureLoader().load('../recursos/slider2.jpg');
const cubeMaterial = new THREE.MeshBasicMaterial({map: cubeTexture});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sphereTexture = new THREE.TextureLoader().load('../recursos/slider1.jpg');
const sphereMaterial = new THREE.MeshBasicMaterial({map: sphereTexture});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -2;
scene.add(sphere);

const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
const coneTexture = new THREE.TextureLoader().load('../recursos/slider4.jpg');
const coneMaterial = new THREE.MeshBasicMaterial({map: coneTexture});
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = 2;
scene.add(cone);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;
  renderer.render(scene, camera);
}

//funcion para intentar hacerlo responsive 
//para que funcione hay que recargar el browser
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize);

animate();



