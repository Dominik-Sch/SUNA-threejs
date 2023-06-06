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
camera.position.set( -400, 500, 2200 );
//controls.update() must be called after any manual changes to the camera's transform
controls.update();
controls.target.set(-200, 800, 0);

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
const pointLight = new THREE.PointLight(0xffffff, 100, 1800);
pointLight.position.set( 0, 800, 1500 );
scene.add(pointLight);

/**
 * licht 2 hinzufügen
 * @type {AmbientLight}
 */
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 ); // soft white light
scene.add( ambientLight );

// create cube
const cubeGeometry = GEOMETRY.createCube( 300, 300);

// create material
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

let sceneGroup = new THREE.Object3D();

// add cubes
let group0= new THREE.Object3D();
for(let i = 0; i < 6; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[1] === undefined)
        cubeArray[1] = [];
    cubeArray[1][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group0.add(tempCube);
}
sceneGroup.add(group0);
group0.position.set(0, 0, 0);
group0.rotateZ(THREE.MathUtils.degToRad(0));

let group1= new THREE.Object3D();
for(let i = 0; i < 6; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[1] === undefined)
        cubeArray[1] = [];
    cubeArray[1][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group1.add(tempCube);
}

sceneGroup.add(group1);
group1.position.set(-159, 227, 0);
group1.rotateZ(THREE.MathUtils.degToRad(70));

let group2= new THREE.Object3D();
for(let i = 0; i < 6; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[2] === undefined)
        cubeArray[2] = [];
    cubeArray[2][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group2.add(tempCube);
}
sceneGroup.add(group2);
group2.position.set(1227, 159, 0);
group2.rotateZ(THREE.MathUtils.degToRad(70));

let group3= new THREE.Object3D();
for(let i = 0; i < 6; i++) {
    let tempCube = new THREE.Mesh( cubeGeometry, material );
    if (cubeArray[3] === undefined)
        cubeArray[3] = [];
    cubeArray[3][i] = tempCube;
    let position = 200 * i;

    // cube drehen
    tempCube.position.set(position,0,0);
    group3.add(tempCube);
}
sceneGroup.add(group3);
group3.position.set(410, 1323, 0);
group3.rotateZ(THREE.MathUtils.degToRad(0));

// create cube
const cubeGeometry2 = GEOMETRY.createCube( 150, 150);

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
sceneGroup.add(innerGroup1);
innerGroup1.position.set(100, 150 + 241 + 75, 0);
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
sceneGroup.add(innerGroup2);
innerGroup2.position.set(700, 150 + 241 + 150 + 241 + 75, 0);
innerGroup2.rotateZ(THREE.MathUtils.degToRad(0));


let diamondGeometry = GEOMETRY.createDiamond(180);
/**
 * raute links unten
 */
const object1 = new THREE.Mesh(
    diamondGeometry,
    material
);
sceneGroup.add(object1);
object1.position.set(-245.5,-2.5,0);
object1.rotateZ(THREE.MathUtils.degToRad(-55));

/**
 * raute rechts unten
 */
const object2 = new THREE.Mesh(
    diamondGeometry,
    material
);
sceneGroup.add(object2);
object2.position.set(1171,-3,0);
object2.rotateZ(THREE.MathUtils.degToRad(-55));

/**
 * raute rechts oben
 */
const object3 = new THREE.Mesh(
    diamondGeometry,
    material
);
sceneGroup.add(object3);
object3.position.set(1654,1325.5,0);
object3.rotateZ(THREE.MathUtils.degToRad(-55));

/**
 * raute links oben
 */
const object4 = new THREE.Mesh(
    diamondGeometry,
    material
);
sceneGroup.add(object4);
object4.position.set(237.5,1326,0);
object4.rotateZ(THREE.MathUtils.degToRad(-55));

let diamondGeometry2 = GEOMETRY.createCustomFourSideShape([[75, -75],[75, 75*multiplier/2],[-75, 75],[-75, -75]], 100);
/**
 * viereck innen ende
 */
const object5 = new THREE.Mesh(
    diamondGeometry2,
    material
);
sceneGroup.add(object5);
object5.position.set(500,150 + 241 + 75,0);

let createDiamondWithCircle = GEOMETRY.createDiamondWithCircle(150);
/**
 * raute freistehend innen eine ecke rund
 */
const object6 = new THREE.Mesh(
    createDiamondWithCircle,
    material
);
sceneGroup.add(object6);
object6.position.set(800,150 + 241 + 150,0);


let createDiamondWithCircle2 = GEOMETRY.createDiamondWithCircle(150, 100, true);
/**
 * raute verbunden eine ecke rund
 */
const object7 = new THREE.Mesh(
    createDiamondWithCircle2,
    material
);
sceneGroup.add(object7);
object7.position.set(600,782,0);
object7.rotateY(THREE.MathUtils.degToRad(180));
object7.rotateX(THREE.MathUtils.degToRad(180));


let createCurve = GEOMETRY.createCurve(400);
const object8 = new THREE.Mesh(
    createCurve,
    material
);
sceneGroup.add(object8);
object8.position.set(780,550,0);

let createCurve2 = GEOMETRY.createCurve(400);
const object9 = new THREE.Mesh(
    createCurve2,
    material
);
sceneGroup.add(object9);
object9.position.set(620,775,0);
object9.rotateZ(THREE.MathUtils.degToRad(180));

scene.add(sceneGroup);
sceneGroup.rotateZ(THREE.MathUtils.degToRad(55))

let frameCount = 0;

function animate() {
    let count = 0;
    frameCount++;
    console.log(frameCount);
    requestAnimationFrame( animate );

    // required if controls.enableDamping or controls.autoRotate are set to true
    //sceneGroup.rotation.y += 0.005;
    controls.update();
    sceneGroup.traverse(function (object) {

        if (object.isMesh && frameCount > 200) {
            count++;
            if (count % 2 === 0) {
                //object.position.y -= Math.sin(((count) * (count))) * 10;
                //object.position.x -= Math.cos(((count) * (count))) * 10;
            } else {
                //object.position.y += Math.sin(((count) * (count))) * 10;
                //object.position.x += Math.cos(((count) * (count))) * 10;
                //object.material.opacity -= 0.0001;
                //object.material.transparent = true;
            }
        }
    })

    renderer.render( scene, camera );
}

animate();