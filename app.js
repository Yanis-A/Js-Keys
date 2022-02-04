import * as THREE from 'https://cdn.skypack.dev/three@0.137.5';

//import Stats from 'https://cdn.skypack.dev/three@0.137.5/examples/jsm/libs/stats.module.js';

import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.137.5/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, ambient, sLight, stats;

// Window resize manager

const onResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
};

// init three.js

function init() {
	// scene
	scene = new THREE.Scene();

	// lights
	ambient = new THREE.AmbientLight(0xffffff, 0);
	scene.add(ambient);

	sLight = new THREE.SpotLight(0xffffff,0.95);
	sLight.position.set(-10, 700, 100);
	scene.add(sLight);

	// stats
	//stats = new Stats();
	//document.body.appendChild(stats.dom);

	// camera
	const aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 5000);
	camera.position.set(0,10,15);	
	camera.rotateX(0)
	

	// renderer
	renderer = new THREE.WebGLRenderer({ antialias: true , alpha : true });

	document.body.appendChild(renderer.domElement);

	window.addEventListener('resize', onResize);

	onResize();
}

init();

// MY APP

// gltf loader

const loader = new GLTFLoader();
loader.load('./resources/scene.gltf', (gltf) => {
    console.log(gltf)
    scene.add(gltf.scene)
    requestAnimationFrame(render);
});

// overkeys

//visible value : white y = 6.625, black y = 7.125
//hidden value : white y = 6.525, black y = 7.025

const geometry = new THREE.BoxGeometry(0.8,0.2,1.8);
const geometry2 = new THREE.BoxGeometry(0.4,0.2,0.75);
const material = new THREE.MeshPhongMaterial({color: 0x57a3b3});

const overkey1 = new THREE.Mesh(geometry,material);
	overkey1.position.set(-5.25,6.525,3.35);
    scene.add(overkey1);

const overkey2 = new THREE.Mesh(geometry2,material);
	overkey2.position.set(-4.825,7.025,1.55);
    scene.add(overkey2);

const overkey3 = new THREE.Mesh(geometry,material);
    overkey3.position.set(-4.2,6.525,3.35);
    scene.add(overkey3);

const overkey4 = new THREE.Mesh(geometry2,material);
	overkey4.position.set(-3.525,7.025,1.55);
    scene.add(overkey4);

const overkey5 = new THREE.Mesh(geometry,material);
    overkey5.position.set(-3.15,6.525,3.35);
    scene.add(overkey5);

const overkey6 = new THREE.Mesh(geometry,material);
    overkey6.position.set(-2.1,6.525,3.35);
    scene.add(overkey6);

const overkey7 = new THREE.Mesh(geometry2,material);
	overkey7.position.set(-1.625,7.025,1.55);
    scene.add(overkey7);

const overkey8 = new THREE.Mesh(geometry,material);
    overkey8.position.set(-1.05,6.525,3.35);
    scene.add(overkey8);

const overkey9 = new THREE.Mesh(geometry2,material);
	overkey9.position.set(-0.525,7.025,1.55);
    scene.add(overkey9);

const overkey10 = new THREE.Mesh(geometry,material);
    overkey10.position.set(0,6.525,3.35);
    scene.add(overkey10);

const overkey11 = new THREE.Mesh(geometry2,material);
	overkey11.position.set(0.55,7.025,1.55);
    scene.add(overkey11);

const overkey12 = new THREE.Mesh(geometry,material);
    overkey12.position.set(1.05,6.525,3.35);
    scene.add(overkey12);

const overkey13 = new THREE.Mesh(geometry,material);
    overkey13.position.set(2.1,6.525,3.35);
    scene.add(overkey13);

const overkey14 = new THREE.Mesh(geometry2,material);
	overkey14.position.set(2.51,7.025,1.55);
    scene.add(overkey14);

const overkey15 = new THREE.Mesh(geometry,material);
    overkey15.position.set(3.15,6.525,3.35);
    scene.add(overkey15);

const overkey16 = new THREE.Mesh(geometry2,material);
	overkey16.position.set(3.82,7.025,1.55);
    scene.add(overkey16);

const overkey17 = new THREE.Mesh(geometry,material);
    overkey17.position.set(4.2,6.525,3.35);
    scene.add(overkey17);

const overkey18 = new THREE.Mesh(geometry,material);
	overkey18.position.set(5.25,6.525,3.35);
    scene.add(overkey18);


// keyboard control

let keys = {
	playC : false,
	playCs : false,
	playD : false,
	playDs : false,
	playE : false,
	playF : false,
	playFs : false,
	playG : false,
	playGs : false,
	playA : false,
	playAs : false,
	playB : false,
	playC2 : false,
	playCs2 : false,
	playD2 : false,
	playDs2 : false,
	playE2 : false,
	playF2 : false,
}

let up = true;

const onKeyDown = function ( event ) {

	if(up==false)	return;

	switch ( event.code ) {

		case 'KeyQ':
			var noteC = new Audio('./resources/samples/C.mp3');
			keys.playC = true;
			overkey1.position.y = 6.625;
			noteC.play();
			up = false;
			break;

		case 'Digit2':
			var noteCs = new Audio('./resources/samples/Cs.mp3');
			keys.playCs = true;
			overkey2.position.y = 7.125;
			noteCs.play();
			up = false;
			break;

		case 'KeyW':
			var noteD = new Audio('./resources/samples/D.mp3');
			keys.playD = true;
			overkey3.position.y = 6.625;
			noteD.play();
			up = false;
			break;

		case 'Digit3':
			var noteDs = new Audio('./resources/samples/Ds.mp3');
			keys.playDs = true;
			overkey4.position.y = 7.125;
			noteDs.play();
			up = false;
			break;

		case 'KeyE':
			var noteE = new Audio('./resources/samples/E.mp3');
			keys.playE = true;
			overkey5.position.y = 6.625;
			noteE.play();
			up = false;
			break;

		case 'KeyR':
			var noteF = new Audio('./resources/samples/F.mp3');
			keys.playF = true;
			overkey6.position.y = 6.625;
			noteF.play();
			up = false;
			break;

		case 'Digit5':
			var noteFs = new Audio('./resources/samples/Fs.mp3');
			keys.playFs = true;
			overkey7.position.y = 7.125;
			noteFs.play();
			up = false;
			break;

		case 'KeyT':
			var noteG = new Audio('./resources/samples/G.mp3');
			keys.playG = true;
			overkey8.position.y = 6.625;
			noteG.play();
			up = false;
			break;

		case 'Digit6':
			var noteGs = new Audio('./resources/samples/Gs.mp3');
			keys.playGs = true;
			overkey9.position.y = 7.125;
			noteGs.play();
			up = false;
			break;

		case 'KeyY':
			var noteA = new Audio('./resources/samples/A.mp3');
			keys.playA = true;
			overkey10.position.y = 6.625;
			noteA.play();
			up = false;
			break;

		case 'Digit7':
			var noteAs = new Audio('./resources/samples/As.mp3');
			keys.playAs = true;
			overkey11.position.y = 7.125;
			noteAs.play();
			up = false;
			break;

		case 'KeyU':
			var noteB = new Audio('./resources/samples/B.mp3');
			keys.playB = true;
			overkey12.position.y = 6.625;
			noteB.play();
			up = false;
			break;

		case 'KeyI':
			var noteC2 = new Audio('./resources/samples/C2.mp3');
			keys.playC2 = true;
			overkey13.position.y = 6.625;
			noteC2.play();
			up = false;
			break;

		case 'Digit9':
			var noteCs2 = new Audio('./resources/samples/Cs2.mp3');
			keys.playCs2 = true;
			overkey14.position.y = 7.125;
			noteCs2.play();
			up = false;
			break;

		case 'KeyO':
			var noteD2 = new Audio('./resources/samples/D2.mp3');
			keys.playD2 = true;
			overkey15.position.y = 6.625;
			noteD2.play();
			up = false;
			break;

		case 'Digit0':
			var noteDs2 = new Audio('./resources/samples/Ds2.mp3');
			keys.playDs2 = true;
			overkey16.position.y = 7.125;
			noteDs2.play();
			up = false;
			break;

		case 'KeyP':
			var noteE2 = new Audio('./resources/samples/E2.mp3');
			keys.playE2 = true;
			overkey17.position.y = 6.625;
			noteE2.play();
			up = false;
			break;

		case 'BracketLeft':
			var noteF2 = new Audio('./resources/samples/F2.mp3');
			keys.playF2 = true;
			overkey18.position.y = 6.625;
			noteF2.play();
			up = false;
			break;
	}
};

const onKeyUp = function ( event ) {

	up = true;

	switch ( event.code ) {

		case 'KeyQ':
			keys.playC = false;
			overkey1.position.y = 6.525;
			break;

		case 'Digit2':
			keys.playCs = true;
			overkey2.position.y = 7.025;
			break;

		case 'KeyW':
			keys.playD = true;
			overkey3.position.y = 6.525;
			break;

		case 'Digit3':
			keys.playDs = true;
			overkey4.position.y = 7.025;
			break;

		case 'KeyE':
			keys.playE = true;
			overkey5.position.y = 6.525;
			break;

		case 'KeyR':
			keys.playF = true;
			overkey6.position.y = 6.525;
			break;

		case 'Digit5':
			keys.playFs = true;
			overkey7.position.y = 7.025;
			break;

		case 'KeyT':
			keys.playG = true;
			overkey8.position.y = 6.525;
			break;

		case 'Digit6':
			keys.playGs = true;
			overkey9.position.y = 7.025;
			break;

		case 'KeyY':
			keys.playA = true;
			overkey10.position.y = 6.525;
			break;

		case 'Digit7':
			keys.playAs = true;
			overkey11.position.y = 7.025;
			break;

		case 'KeyU':
			keys.playB = true;
			overkey12.position.y = 6.525;
			break;

		case 'KeyI':
			keys.playC2 = true;
			overkey13.position.y = 6.525;
			break;

		case 'Digit9':
			keys.playCs2 = true;
			overkey14.position.y = 7.025;
			break;

		case 'KeyO':
			keys.playD2 = true;
			overkey15.position.y = 6.525;
			break;

		case 'Digit0':
			keys.playDs2 = true;
			overkey16.position.y = 7.025;
			break;

		case 'KeyP':
			keys.playE2 = true;
			overkey17.position.y = 6.525;
			break;

		case 'BracketLeft':
			keys.playF2 = true;
			overkey18.position.y = 6.525;
			break;
	}
};

document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );

function render() {
	// rendu final

	renderer.render(scene, camera);

	//stats.update();

	requestAnimationFrame(render);
}

requestAnimationFrame(render);
