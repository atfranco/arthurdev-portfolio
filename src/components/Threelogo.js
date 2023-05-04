import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import styles from '../styles/Threelogo.module.css'
import {OrbitControls} from "../../node_modules/three-orbit-controls";
import { RoomEnvironment } from '../../node_modules/three/examples/jsm/environments/RoomEnvironment';
import { FontLoader } from '../../node_modules/three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from '../../node_modules/three/examples/jsm/geometries/TextGeometry';
import * as BufferGeometryUtils from "../../node_modules/three/examples/jsm/utils/BufferGeometryUtils";


export default function Threelogo() {
 
  const logoRef = useRef(null);
  useEffect(() => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 1, 5000);
    camera.position.set(0, 0, 10).setLength(500);
    let renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(renderer.domElement);
    window.addEventListener("resize", event => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    })

const pmremGenerator = new THREE.PMREMGenerator( renderer );
let env = pmremGenerator.fromScene( new RoomEnvironment(), 0.3 ).texture;
const loader = new FontLoader();

loader.load( 'https://cdn.skypack.dev/three@0.136.0/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
  console.log(font);
	const g = new TextGeometry( '{arthur.dev}', {
		font: font,
		size: 30,
		height: 10,
		curveSegments: 10,
		bevelEnabled: true,
		bevelThickness: 5,
		bevelSize: 2,
		bevelOffset: 0,
		bevelSegments: 2
	} );
  
  g.center();
  g.deleteAttribute("uv");
  g.deleteAttribute("normal");
  BufferGeometryUtils.mergeVertices(g);
  g.computeVertexNormals();
  
  let m = new THREE.MeshNormalMaterial();
  
  let text = new THREE.Mesh(g, m);
  scene.add(text);
} );

let clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  let t = clock.getElapsedTime();
  renderer.render(scene, camera);
});  
});
}
