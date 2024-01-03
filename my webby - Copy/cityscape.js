var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('cityscape').appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);

// Load texture
var textureLoader = new THREE.TextureLoader();
textureLoader.load("./resources/78786.png", function(texture) {
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  animate(cube);
});

camera.position.z = 5;

function animate(cube) {
  requestAnimationFrame(function() { animate(cube); });
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
