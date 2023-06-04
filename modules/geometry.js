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

export function createDiamondWithCircle(size = 125, extrude = 100, ninetyDeg = false) {

    let line2y = size / 12.5;
    let line3y = -(size / 4.16666666);

    if (ninetyDeg) {
        line2y = line3y;
    }

    let boxShape = new THREE.Shape();

    boxShape
        .arc( -(size / 8.333333 ), -(size / 8.333333 ), (size / 0.8928571), THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(80), false )
        .lineTo(0, size)
        .lineTo(0, line2y)
        .lineTo(size, line3y)

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


export function createCurve(size = 100, extrude = 100) {
    let path = new THREE.Shape()
        .moveTo(size/5, size)
        .lineTo(size/5, size)
        .lineTo(size, size)
        .lineTo(size, 0)
        .arc( -size, 0, size, THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(60), false )

    // die vektoren für den pfad
    const extrudeStart = new THREE.Vector3(0, 0, extrude/-2);
    const extrudeEnd = new THREE.Vector3(0, 0, extrude/2);

    // der pfad, der die form der geometrie angibt. (hier eine gerade bezierkurve)
    const extrudePath = new THREE.Path();
    extrudePath.add(new THREE.CubicBezierCurve3(extrudeStart, extrudeEnd, extrudeEnd, extrudeEnd));

    const geometry = new THREE.ExtrudeGeometry(path, {
        steps: 100,
        extrudePath
    });

    return geometry;
}
