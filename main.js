/**
 * imports
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as GEOMETRY from './modules/geometry.js';

/**
 * basic konstanten
 */
const multiplier = 68/96;
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer(
    {
        antialias: true
    }
);
// enable color management
THREE.ColorManagement.enabled = true;

/**
 * kamera erstellen und platzieren
 */
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 35000 );
const controls = new OrbitControls( camera, renderer.domElement );
camera.position.set( 800, 800, 1000 );
//controls.update() must be called after any manual changes to the camera's transform
controls.update();
controls.target.set(800, 500, 0);

/**
 * größe des render-containers festlegen
 * container in den body einfügen
 */
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild( renderer.domElement );

/**
 * licht hinzufügen
 * @type {PointLight}
 */
const pointLight = new THREE.PointLight(0xffffff, 200, 1200);
pointLight.position.set( 400, 400, 1000 );
scene.add(pointLight);

/**
 * licht 2 hinzufügen
 * @type {AmbientLight}
 */
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.1 ); // soft white light
scene.add( ambientLight );

// create cube
const cubeGeometry = GEOMETRY.createCube( 200, 200);

// create material
//const material = new THREE.MeshPhongMaterial( {
//    color: '#049ef4',
//    shininess: 100,
//    emissive: '#000000',
//    specular: '#ffffff',
//} );
const material = new THREE.MeshPhysicalMaterial( {
    color: '#049ef4',
    reflectivity: 1,
    metalness: 0.95,
    roughness: 0,
    clearcoat: 0,
    clearcoatRoughness: 0,
    emissive: '#000000',
    flatShading: true,
} );

const testCubeGeometry = GEOMETRY.createCube( 50, 50, 50);
let testCube = new THREE.Mesh( testCubeGeometry, material );
testCube.position.set(-400,0,0);
//scene.add(testCube);

let cubeArray = [];

// add cubes
let group0= new THREE.Object3D();
for(let i = 0; i < 10; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[1] === undefined)
        cubeArray[1] = [];
    cubeArray[1][i] = tempCube;
    let position = 100 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group0.add(tempCube);
}

scene.add(group0);
group0.position.set(25, 0, 0);
group0.rotateZ(THREE.MathUtils.degToRad(0));

let group1= new THREE.Object3D();
for(let i = 0; i < 5; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[1] === undefined)
        cubeArray[1] = [];
    cubeArray[1][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group1.add(tempCube);
}

scene.add(group1);
group1.position.set(-25, 30, 0);
group1.rotateZ(THREE.MathUtils.degToRad(70));

let group2= new THREE.Object3D();
for(let i = 0; i < 5; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[2] === undefined)
        cubeArray[2] = [];
    cubeArray[2][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group2.add(tempCube);
}
scene.add(group2);
group2.position.set(1000, 30, 0);
group2.rotateZ(THREE.MathUtils.degToRad(70));

let group3= new THREE.Object3D();
for(let i = 0; i < 5; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[3] === undefined)
        cubeArray[3] = [];
    cubeArray[3][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group3.add(tempCube);
}
scene.add(group3);
group3.position.set(400, 900, 0);
group3.rotateZ(THREE.MathUtils.degToRad(0));

// create cube
const cubeGeometry2 = GEOMETRY.createCube( 125, 125);

let innerGroup1= new THREE.Object3D();
for(let i = 0; i < 4; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry2, material );
    if (cubeArray[4] === undefined)
        cubeArray[4] = [];
    cubeArray[4][i] = tempCube;
    let position = 100 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    innerGroup1.add(tempCube);
}
scene.add(innerGroup1);
innerGroup1.position.set(150, 312.5, 0);
innerGroup1.rotateZ(THREE.MathUtils.degToRad(0));

let innerGroup2= new THREE.Object3D();
for(let i = 0; i < 7; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry2, material );
    if (cubeArray[4] === undefined)
        cubeArray[4] = [];
    cubeArray[4][i] = tempCube;
    let position = 100 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    innerGroup2.add(tempCube);
}
scene.add(innerGroup2);
innerGroup2.position.set(600, 312.5+275, 0);
innerGroup2.rotateZ(THREE.MathUtils.degToRad(0));


let diamondGeometry = GEOMETRY.createDiamond(100);
/**
 * raute links unten
 */
const object1 = new THREE.Mesh(
    diamondGeometry,
    material
);
scene.add(object1);
object1.position.set(-62,-18.25,0);
object1.rotateZ(THREE.MathUtils.degToRad(-55));

/**
 * raute rechts unten
 */
const object2 = new THREE.Mesh(
    diamondGeometry,
    material
);
scene.add(object2);
object2.position.set(1002,-18.25,0);
object2.rotateZ(THREE.MathUtils.degToRad(-55));

/**
 * raute rechts oben
 */
const object3 = new THREE.Mesh(
    diamondGeometry,
    material
);
scene.add(object3);
object3.position.set(1342.5,918.125,0);
object3.rotateZ(THREE.MathUtils.degToRad(-55));

/**
 * raute links oben
 */
const object4 = new THREE.Mesh(
    diamondGeometry,
    material
);
scene.add(object4);
object4.position.set(278.5,918.125,0);
object4.rotateZ(THREE.MathUtils.degToRad(-55));

let diamondGeometry2 = GEOMETRY.createCustomFourSideShape([[62.5, -62.5],[62.5, 62.5*multiplier/2],[-62.5, 62.5],[-62.5, -62.5]], 100);
/**
 * viereck innen ende
 */
const object5 = new THREE.Mesh(
    diamondGeometry2,
    material
);
scene.add(object5);
object5.position.set(550,312.5,0);

let createDiamondWithCircle = GEOMETRY.createDiamondWithCircle(100);
/**
 * raute freistehend innen
 */
const object6 = new THREE.Mesh(
    createDiamondWithCircle,
    material
);
scene.add(object6);
object6.position.set(750,375,0);


animate();

function animate() {
    requestAnimationFrame( animate );

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render( scene, camera );
}
