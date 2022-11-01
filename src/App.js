import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import React,{useEffect} from 'react';
import * as THREE from 'three';
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earth from './img/earth_atmos_2048.jpg';
import moon from './img/moon.jpg'
import Space from './img/space.jpg'
import venus from './img/venus.jpg'
function App() {
   
  useEffect(() => {

    // creating scene and camera
     
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const canvas = document.querySelector(".homeCanvas")
    const renderer =new THREE.WebGLRenderer({canvas});
// creating texture loader
    const textureLoader = new THREE.TextureLoader();
    const earthImage =textureLoader.load(earth);
    const MoonTexture =textureLoader.load(moon);
    const spaceTexture =textureLoader.load(Space);
    const venusTexture =textureLoader.load(venus);
// paricales


const particalsGeo = new THREE.BufferGeometry;
const particalsCnt = 5000;

const posArray = new Float32Array(particalsCnt * 3);
for (let i = 0; i < particalsCnt*3; i++) {
    // posArray[i] = Math.random()
    posArray[i] = (Math.random()-0.5)*3

    
}

particalsGeo.setAttribute('position', new THREE.BufferAttribute(posArray,3))

// Materials

const material = new THREE.PointsMaterial(
    {
        size:0.0005
    }
)
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () =>
{
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
 
 
})

const particalsMesh =new THREE.Points(particalsGeo,material);
scene.add(particalsMesh)
particalsMesh.position.z=9
// document.addEventListener('mousemove',animateParticales)
///


//mouse
let mouseY=0
let mouseX =0

//animate

function animateParticales(event){

        mouseX =event.clientX
        mouseY = event.clientY
}


const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    
    particalsMesh.rotation.y =-.1*elapsedTime
    if(mouseX>0){
    particalsMesh.rotation.y = -mouseX *(elapsedTime*0.00009)
    particalsMesh.rotation.x = -mouseY *(elapsedTime*0.00009)
}
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
    
    
//creating geometry of Earth
    const EarthGeometry =new THREE.SphereGeometry(3,64,64);
    const EarthMaterial =new THREE.MeshStandardMaterial({map : earthImage});
    const Earth =new THREE.Mesh(EarthGeometry,EarthMaterial);
  
const moonGeo = new THREE.SphereGeometry(1.01,75,75);
const moonMaterial = new THREE.MeshStandardMaterial({
  map: MoonTexture,
  transparent: true
});
let Moon = new THREE.Mesh(moonGeo,moonMaterial);



Moon.material.opacity = 0.9;



// positions
 Earth.position.x=3
 Earth.position.y=0
    Earth.position.z=2
Moon.position.x=-3;
Moon.position.y=5.5;

Moon.position.z=-4;
// scene.add(moon);


  
    // light
    const pointLight= new THREE.PointLight(0xffffff,1);
    pointLight.position.x =-15;
    const pointLight2= new THREE.PointLight(0xffffff,1);
    pointLight2.position.z =13;
    //controls
    // const canvas1= document.getElementsByTagName("canvas");
    // const controls = new OrbitControls(camera,canvas1)
    //adding scenes
   
    // 
    scene.add(Earth);
    // scene.add(controls)
    scene.add(Moon);
    scene.add(pointLight)
    scene.add(pointLight2)
   
    camera.position.z = 10;
    
    // event listner
 
    const speed=0.01;
    window.addEventListener("mousemove", (e)=>{
        if (e.clientX<=window.innerWidth/2) {
            Earth.rotation.y +=speed;
            Earth.rotation.x +=speed;
            

        }
        if (e.clientY>window.innerWidth/2) {
            Earth.rotation.y -=speed;
            Earth.rotation.z -=speed;
            Earth.rotation.x -=speed;
            
        }
    })
   
 
     





    

    const animate = () =>{ 
        requestAnimationFrame(animate);
        Earth.rotation.y +=0.01;
        Earth.rotation.z +=0.01;
        Earth.rotation.x +=0.01;
        //moon
        Moon.rotation.y +=0.01;
        Moon.rotation.x +=0.01;
       
        
          
        
        
        
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.render(scene,camera);

    }
  animate();
  
   


 
    
}, []);
  return (
    <>
    <div className="appMain">
          <canvas className="homeCanvas " id="c"></canvas>

      
    <div
      className="App"
     
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      {/* <Portfolio /> */}
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    </div>
    </>
  );
}

export default App;
