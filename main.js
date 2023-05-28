import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

// enable color management
THREE.ColorManagement.enabled = true;

const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 35000 );
const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 300, 200, 1000 );
controls.update();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild( renderer.domElement );

// add light
const light = new THREE.PointLight(0xffffff, 1, 600);
light.position.set( 100, 200, 100 );
scene.add(light);

// add light2
const light2 = new THREE.AmbientLight( 0xffffff, 0.2 ); // soft white light
scene.add( light2 );

// create cube
const geometry = new THREE.BoxGeometry( 200, 200, 200 );

// create material
const material = new THREE.MeshPhongMaterial( {
    color: '#049ef4',
    shininess: 100,
} );

// add cubes
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.set(0,0,0)

// add cube2
const cube2 = new THREE.Mesh( geometry, material );
scene.add( cube2 );
cube2.position.set(200,0,0)

const raute = new THREE.Shape();

raute.moveTo( 0, 0 );
raute.lineTo(60,40);
raute.lineTo(100,100);
raute.lineTo(40,60);
raute.lineTo(0,0);

let extrudeSettings = {
    amount : 200
};
let geometry2 = new THREE.ExtrudeGeometry( raute, extrudeSettings );
const mesh = new THREE.Mesh( geometry2, material ) ;
scene.add( mesh );
mesh.position.set(400,0,0);



const geometry3 = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
    -100.0, -100.0,  100.0, // v0
    100.0, -100.0,  100.0, // v1
    100.0,  100.0,  100.0, // v2

    100.0,  100.0,  100.0, // v3
    -100.0,  100.0,  100.0, // v4
    -100.0, -100.0,  100.0  // v5
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry3.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material3 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh3 = new THREE.Mesh( geometry3, material3 );

scene.add(mesh3);
mesh3.position.set(600,0,0);










animate();

function animate() {
    requestAnimationFrame( animate );

    //cube.rotation.x += 0.005;
    //cube.rotation.y += 0.005;

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render( scene, camera );
}
