import * as THREE from "three";

export function createCube(x = 100, y = 100, z = 100) {
    return new THREE.BoxGeometry( x, y, z );
}

export function createDiamond(size = 100, extrude = 100) {

    // die form der geometrie (hier ein quadrat)
    // reihenfolge gegen den uhrzeigersinn
    let constant = 68/96;
    const boxShape = new THREE.Shape([
        new THREE.Vector2(2*size*constant, 0), // links unten
        new THREE.Vector2(0, size), // rechts unten
        new THREE.Vector2(-2*size*constant, 0), // rechts oben
        new THREE.Vector2(0, -size), // links oben
    ]);

    // die vektoren für den pfad
    const extrudeStart = new THREE.Vector3(0, 0, extrude/-2);
    const extrudeEnd = new THREE.Vector3(0, 0, extrude/2);

    // der pfad, der die form der geometrie angibt. (hier eine gerade bezierkurve)
    const extrudePath = new THREE.Path();
    extrudePath.add(new THREE.CubicBezierCurve3(extrudeStart, extrudeEnd, extrudeEnd, extrudeEnd));

    const geometry = new THREE.ExtrudeGeometry(boxShape, {
        steps: 100,
        extrudePath
    });

    return geometry;
}

export function createDiamondWithCircle(size = 100, extrude = 100) {

    let constant = 68/96;
    const boxShape = new THREE.Shape();
    boxShape
        .arc( -15, -15, 140, THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(80), false )
        .lineTo(0, 125)
        .lineTo(0, 10)
        .lineTo(125, -30)

    // die vektoren für den pfad
    const extrudeStart = new THREE.Vector3(0, 0, extrude/-2);
    const extrudeEnd = new THREE.Vector3(0, 0, extrude/2);

    // der pfad, der die form der geometrie angibt. (hier eine gerade bezierkurve)
    const extrudePath = new THREE.Path();
    extrudePath.add(new THREE.CubicBezierCurve3(extrudeStart, extrudeEnd, extrudeEnd, extrudeEnd));

    const geometry = new THREE.ExtrudeGeometry(boxShape, {
        steps: 100,
        extrudePath
    });

    return geometry;
}


export function createCustomFourSideShape(corners = [[100, -100],[100, 100],[-100, 100],[-100, -100]], extrude = 100) {

    // die form der geometrie (hier ein quadrat)
    // reihenfolge gegen den uhrzeigersinn
    const boxShape = new THREE.Shape([
        new THREE.Vector2(corners[0][0], corners[0][1]), // links unten
        new THREE.Vector2(corners[1][0], corners[1][1]), // rechts unten
        new THREE.Vector2(corners[2][0], corners[2][1]), // rechts oben
        new THREE.Vector2(corners[3][0], corners[3][1]), // links oben
    ]);

    // die vektoren für den pfad
    const extrudeStart = new THREE.Vector3(0, 0, extrude/-2);
    const extrudeEnd = new THREE.Vector3(0, 0, extrude/2);

    // der pfad, der die form der geometrie angibt. (hier eine gerade bezierkurve)
    const extrudePath = new THREE.Path();
    extrudePath.add(new THREE.CubicBezierCurve3(extrudeStart, extrudeEnd, extrudeEnd, extrudeEnd));

    const geometry = new THREE.ExtrudeGeometry(boxShape, {
        steps: 100,
        extrudePath
    });

    return geometry;
}
