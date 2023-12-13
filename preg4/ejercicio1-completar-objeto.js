// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.9 );
	light.position.set( 2, 3, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xE39B1F, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
    
    var migeometria = new THREE.Geometry();
	//capa 1
	migeometria.vertices.push(new THREE.Vector3(-0.1,0.9,0.1))//0
	migeometria.vertices.push(new THREE.Vector3(0.0,1.1,0.0))//1
	migeometria.vertices.push(new THREE.Vector3(0.1,0.9,0.1))//2
	migeometria.vertices.push(new THREE.Vector3(0.1,0.9,-0.1))//3
	migeometria.vertices.push(new THREE.Vector3(-0.1,0.9,-0.1))//4

	migeometria.faces.push(new THREE.Face3(2,1,0));
	migeometria.faces.push(new THREE.Face3(3,1,2));
	migeometria.faces.push(new THREE.Face3(4,1,3));
	migeometria.faces.push(new THREE.Face3(0,1,4));
	migeometria.faces.push(new THREE.Face3(3,2,0));
	migeometria.faces.push(new THREE.Face3(3,0,4));
	//capa 2
	migeometria.vertices.push(new THREE.Vector3(-0.2,0.7,0.2))//5
	migeometria.vertices.push(new THREE.Vector3(0.0,1.0,0.0))//6
	migeometria.vertices.push(new THREE.Vector3(0.2,0.7,0.2))//7
	migeometria.vertices.push(new THREE.Vector3(0.2,0.7,-0.2))//8
	migeometria.vertices.push(new THREE.Vector3(-0.2,0.7,-0.2))//9

	migeometria.faces.push(new THREE.Face3(7,6,5));
	migeometria.faces.push(new THREE.Face3(8,6,7));
	migeometria.faces.push(new THREE.Face3(9,6,8));
	migeometria.faces.push(new THREE.Face3(5,6,9));
	migeometria.faces.push(new THREE.Face3(8,7,5));
	migeometria.faces.push(new THREE.Face3(8,5,9));
	//capa 3
	migeometria.vertices.push(new THREE.Vector3(-0.3,0.5,0.3))//10
	migeometria.vertices.push(new THREE.Vector3(0.0,0.9,0.0))//11
	migeometria.vertices.push(new THREE.Vector3(0.3,0.5,0.3))//12
	migeometria.vertices.push(new THREE.Vector3(0.3,0.5,-0.3))//13
	migeometria.vertices.push(new THREE.Vector3(-0.3,0.5,-0.3))//14

	migeometria.faces.push(new THREE.Face3(12,11,10));
	migeometria.faces.push(new THREE.Face3(13,11,12));
	migeometria.faces.push(new THREE.Face3(14,11,13));
	migeometria.faces.push(new THREE.Face3(10,11,14));
	migeometria.faces.push(new THREE.Face3(13,12,10));
	migeometria.faces.push(new THREE.Face3(13,10,14));
	//capa 4
	migeometria.vertices.push(new THREE.Vector3(-0.4,0.3,0.4))//15
	migeometria.vertices.push(new THREE.Vector3(0.0,0.8,0.0))//16
	migeometria.vertices.push(new THREE.Vector3(0.4,0.3,0.4))//17
	migeometria.vertices.push(new THREE.Vector3(0.4,0.3,-0.4))//18
	migeometria.vertices.push(new THREE.Vector3(-0.4,0.3,-0.4))//19

	migeometria.faces.push(new THREE.Face3(17,16,15));
	migeometria.faces.push(new THREE.Face3(18,16,17));
	migeometria.faces.push(new THREE.Face3(19,16,18));
	migeometria.faces.push(new THREE.Face3(15,16,19));
	migeometria.faces.push(new THREE.Face3(18,17,15));
	migeometria.faces.push(new THREE.Face3(18,15,19));
	//capa 5
	migeometria.vertices.push(new THREE.Vector3(-0.5,0.1,0.5))//20
	migeometria.vertices.push(new THREE.Vector3(0.0,0.7,0.0))//21
	migeometria.vertices.push(new THREE.Vector3(0.5,0.1,0.5))//22
	migeometria.vertices.push(new THREE.Vector3(0.5,0.1,-0.5))//23
	migeometria.vertices.push(new THREE.Vector3(-0.5,0.1,-0.5))//24

	migeometria.faces.push(new THREE.Face3(22,21,20));
	migeometria.faces.push(new THREE.Face3(23,21,22));
	migeometria.faces.push(new THREE.Face3(24,21,23));
	migeometria.faces.push(new THREE.Face3(20,21,24));
	migeometria.faces.push(new THREE.Face3(23,22,20));
	migeometria.faces.push(new THREE.Face3(23,20,24));
	//capa 6
	migeometria.vertices.push(new THREE.Vector3(-0.6,-0.1,0.6))//25
	migeometria.vertices.push(new THREE.Vector3(0.0,0.6,0.0))//26
	migeometria.vertices.push(new THREE.Vector3(0.6,-0.1,0.6))//27
	migeometria.vertices.push(new THREE.Vector3(0.6,-0.1,-0.6))//28
	migeometria.vertices.push(new THREE.Vector3(-0.6,-0.1,-0.6))//29

	migeometria.faces.push(new THREE.Face3(27,26,25));
	migeometria.faces.push(new THREE.Face3(28,26,27));
	migeometria.faces.push(new THREE.Face3(29,26,28));
	migeometria.faces.push(new THREE.Face3(25,26,29));
	migeometria.faces.push(new THREE.Face3(28,27,25));
	migeometria.faces.push(new THREE.Face3(28,25,29));

	var palo = new THREE.Geometry();

	palo.vertices.push(new THREE.Vector3(-0.2,-0.1,0.2))//0 a
	palo.vertices.push(new THREE.Vector3(0.2,-0.1,0.2))//1 b
	palo.vertices.push(new THREE.Vector3(0.2,-0.1,-0.2))//2 c
	palo.vertices.push(new THREE.Vector3(-0.2,-0.1,-0.2))//3 d
	palo.vertices.push(new THREE.Vector3(-0.2,-0.5,0.2))//4 e
	palo.vertices.push(new THREE.Vector3(0.2,-0.5,0.2))//5 f
	palo.vertices.push(new THREE.Vector3(-0.2,-0.5,-0.2))//6 g
	palo.vertices.push(new THREE.Vector3(0.2,-0.5,-0.2))//7 h
	
	palo.faces.push(new THREE.Face3(2,1,0));
	palo.faces.push(new THREE.Face3(0,3,2));
	palo.faces.push(new THREE.Face3(5,1,0));
	palo.faces.push(new THREE.Face3(0,4,5));
	palo.faces.push(new THREE.Face3(0,3,6));
	palo.faces.push(new THREE.Face3(6,4,0));
	palo.faces.push(new THREE.Face3(6,3,2));
	palo.faces.push(new THREE.Face3(2,7,6));
	palo.faces.push(new THREE.Face3(2,1,5));
	palo.faces.push(new THREE.Face3(5,7,2));
	palo.faces.push(new THREE.Face3(5,4,6));
	palo.faces.push(new THREE.Face3(6,7,5));
	
    var material = new THREE.MeshBasicMaterial( { color: 0x139006 } );
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto

	var material2 = new THREE.MeshBasicMaterial( { color: 0x362405 } );
    var miobjeto2 = new THREE.Mesh (palo, material2); // Crea el objeto
	
	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	scene.add( miobjeto );
	scene.add( miobjeto2 );
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
