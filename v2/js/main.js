import {
    Color,
    DodecahedronBufferGeometry,
    IcosahedronBufferGeometry,
    InstancedBufferAttribute,
    InstancedMesh,
    MathUtils,
    Object3D,
    PointLight,
    Scene,
    ShaderChunk,
    ShaderLib,
    ShaderMaterial,
    TetrahedronBufferGeometry,
    UniformsUtils,
    Vector2,
    Vector3,
  } from '//cdn.skypack.dev/three@0.125.0/build/three.module.js?min';
  
  import { EffectComposer } from '//cdn.skypack.dev/three@0.125.0/examples/jsm/postprocessing/EffectComposer.js?min';
  import { RenderPass } from '//cdn.skypack.dev/three@0.125.0/examples/jsm/postprocessing/RenderPass.js?min';
  import { UnrealBloomPass } from '//cdn.skypack.dev/three@0.125.0/examples/jsm/postprocessing/UnrealBloomPass.js?min';
  import { ShaderPass } from '//cdn.skypack.dev/three@0.125.0/examples/jsm/postprocessing/ShaderPass.js?min';
  import { FXAAShader } from '//cdn.skypack.dev/three@0.125.0/examples/jsm/shaders/FXAAShader.js?min';
  
  import useThree from 'https://codepen.io/soju22/pen/cb31020fed766eb66bc8ad1879bc3325.js';
  
  App();
  
  function App() {
    let three, scene, composer, iMesh;
    let pointLight;
    let cscale = chroma.scale(['#dd3e1b', '#0b509c']);
  
    const NUM_INSTANCES = 5000;
    const instances = [];
  
    const target = new Vector3();
    const dummy = new Object3D();
    const dummyV = new Vector3();
  
    const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
  
    init();
  
    function init() {
      three = useThree().init({
        canvas: document.getElementById('canvas'),
        antialias: false,
        mouse_move: true,
        mouse_raycast: true,
        camera_ctrl: {
          enableDamping: true,
          dampingFactor: 0.05,
        },
        camera_fov: 50,
        camera_pos: new Vector3(0, 0, 250),
      });
  
      initScene();
      initPostprocessing();
      animate();
    }
  
    function initScene() {
      scene = new Scene();
      pointLight = new PointLight(0xFFC0C0);
      scene.add(pointLight);
  
      // const pointLight1 = new PointLight(0x6060FF);
      // pointLight1.position.x = -100;
      // scene.add(pointLight1);
      // const pointLight2 = new PointLight(0xFF6060);
      // pointLight2.position.x = 100;
      // scene.add(pointLight2);
  
      const geometry = new DodecahedronBufferGeometry(5);
      // const geometry = new IcosahedronBufferGeometry(5);
      // const geometry = new TetrahedronBufferGeometry(5);
      const material = SubSurfaceMaterial();
      iMesh = new InstancedMesh(geometry, material, NUM_INSTANCES);
      scene.add(iMesh);
  
      for (let i = 0; i < NUM_INSTANCES; i++) {
        instances.push({
          position: new Vector3(rndFS(200), rndFS(200), rndFS(200)),
          scale: rnd(0.2, 1),
          velocity: new Vector3(rndFS(2), rndFS(2), rndFS(2)),
          attraction: 0.0025 + rnd(0, 0.01),
          vlimit: 0.3 + rnd(0, 0.2),
        });
      }
  
      for (let i = 0; i < NUM_INSTANCES; i++) {
        const { position, scale } = instances[i];
        dummy.position.copy(position);
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        iMesh.setMatrixAt(i, dummy.matrix);
      }
      iMesh.instanceMatrix.needsUpdate = true;
  
      updateColors();
      document.body.addEventListener('click', randomColors);
    }
  
    function randomColors() {
      const c1 = chroma.random(), c2 = chroma.random();
      console.log(c1.hex(), c2.hex());
      cscale = chroma.scale([c1, c2]);
      updateColors();
    }
  
    function updateColors() {
      const colors = [];
      for (let i = 0; i < NUM_INSTANCES; i++) {
        const color = new Color(cscale(rnd(0, 1)).hex());
        colors.push(color.r, color.g, color.b);
      }
      iMesh.geometry.setAttribute('color', new InstancedBufferAttribute(new Float32Array(colors), 3));
    }
  
    function initPostprocessing() {
      composer = new EffectComposer(three.renderer);
  
      const renderPass = new RenderPass(scene, three.camera);
      composer.addPass(renderPass);
  
      const bloomPass = new UnrealBloomPass(new Vector2(three.size.width, three.size.height), 0.5, 0, 0);
      composer.addPass(bloomPass);
  
      const aaPass = new ShaderPass(FXAAShader);
      composer.addPass(aaPass);
      aaPass.material.uniforms.resolution.value.set(1 / three.size.width, 1 / three.size.height);
  
      three.onAfterResize(() => {
        composer.setSize(three.size.width, three.size.height);
        aaPass.material.uniforms.resolution.value.set(1 / three.size.width, 1 / three.size.height);
      });
    }
  
    function animate() {
      requestAnimationFrame(animate);
      const { renderer, camera, cameraCtrl } = three;
  
      target.copy(three.mouseV3);
      pointLight.position.copy(target);
  
      for (let i = 0; i < NUM_INSTANCES; i++) {
        const { position, scale, velocity, attraction, vlimit } = instances[i];
  
        dummyV.copy(target).sub(position).normalize().multiplyScalar(attraction);
        velocity.add(dummyV).clampScalar(-vlimit, vlimit);
        position.add(velocity);
  
        dummy.position.copy(position);
        dummy.scale.set(scale, scale, scale);
        dummy.lookAt(dummyV.copy(position).add(velocity));
        dummy.updateMatrix();
        iMesh.setMatrixAt(i, dummy.matrix);
      }
      iMesh.instanceMatrix.needsUpdate = true;
  
      if (cameraCtrl) cameraCtrl.update();
      composer.render();
    }
  }
  
  /**
   * ------------------------------------------------------------------------------------------
   * Subsurface Scattering shader
   * Based on three/examples/jsm/shaders/SubsurfaceScatteringShader.js
   * Based on GDC 2011 – Approximating Translucency for a Fast, Cheap and Convincing Subsurface Scattering Look
   * https://colinbarrebrisebois.com/2011/03/07/gdc-2011-approximating-translucency-for-a-fast-cheap-and-convincing-subsurface-scattering-look/
   *------------------------------------------------------------------------------------------
  */
  function SubSurfaceMaterial() {
    const meshphongFragHead = ShaderChunk.meshphong_frag.slice(0, ShaderChunk.meshphong_frag.indexOf('void main() {'));
    const meshphongFragBody = ShaderChunk.meshphong_frag.slice(ShaderChunk.meshphong_frag.indexOf('void main() {'));
  
    return new ShaderMaterial({
      lights: true,
      vertexColors: true,
      flatShading: true,
      uniforms: UniformsUtils.merge([
        ShaderLib.phong.uniforms,
        {
          // diffuse: { value: new Color(0xffffff) },
          thicknessColor: { value: new Color(0x808080) },
          thicknessDistortion: { value: 0.4 },
          thicknessAmbient: { value: 0.01 },
          thicknessAttenuation: { value: 0.7 },
          thicknessPower: { value: 2.0 },
          thicknessScale: { value: 4.0 },
        },
      ]),
  
      vertexShader: `
        #define USE_UV
        ${ShaderChunk.meshphong_vert}
      `,
  
      fragmentShader: `
        #define USE_UV
        #define SUBSURFACE
  
        ${meshphongFragHead}
  
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
        uniform vec3 thicknessColor;
  
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in GeometricContext geometry, inout ReflectedLight reflectedLight) {
          #ifdef USE_COLOR
            vec3 thickness = vColor * thicknessColor;
          #else
            vec3 thickness = thicknessColor;
          #endif
          vec3 scatteringHalf = normalize(directLight.direction + (geometry.normal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometry.viewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * thickness;
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }
      ` + meshphongFragBody.replace(
        '#include <lights_fragment_begin>',
        replaceAll(
          ShaderChunk.lights_fragment_begin,
          'RE_Direct( directLight, geometry, material, reflectedLight );',
          `
            RE_Direct( directLight, geometry, material, reflectedLight );
            #if defined( SUBSURFACE ) && defined( USE_UV )
              RE_Direct_Scattering(directLight, vUv, geometry, reflectedLight);
            #endif
          `
        )
      ),
    });
  
    function replaceAll(string, find, replace) {
      return string.split(find).join(replace);
    }
  };
  


/*---------------------------------------------------------------------------*\
    
\*---------------------------------------------------------------------------*/


let colors = {
    contact: '#ffc107',
    css: '#264de4',
    html: '#e44d26',
    ai: '#330000',
    js: '#f4dd40',
    lr: '#001e36',
    mongo: '#00684a',
    node: '#333333',
    ps: '#001e36',
    sql: '#336791',
    react: '#282c34'
}

let selectors = { // TODO: create objects to seperate website sections
    blurb: document.querySelector('.blurb'),
    bgColor: document.querySelector('.bgColor'),
    skills: document.querySelector('.skills'),
    imgAll: document.querySelectorAll('.imgAll'),
    imgCSS: document.querySelector('#imgCSS'),
    imgHTML: document.querySelector('#imgHTML'),
    imgAI: document.querySelector('#imgAI'),
    imgJS: document.querySelector('#imgJS'),
    imgLR: document.querySelector('#imgLR'),
    imgMongo: document.querySelector('#imgMongo'),
    imgNode: document.querySelector('#imgNode'),
    imgPS: document.querySelector('#imgPS'),
    imgSQL: document.querySelector('#imgSQL'),
    imgReact: document.querySelector('#imgReact'),
    pBlurb: document.querySelector('#pBlurb'),
    pCSS: document.querySelector('#pCSS'),
    pHTML: document.querySelector('#pHTML'),
    pJS: document.querySelector('#pJS'),
    pMongo: document.querySelector('#pMongo'),
    pNode: document.querySelector('#pNode'),
    pSQL: document.querySelector('#pSQL'),
    pReact: document.querySelector('#pReact')
}

function turnTextBlack() {
    selectors.blurb.style.color = '#000'
}

function turnTextWhite() {
    selectors.blurb.style.color = '#fff'
}

function turnImgBlack() {
    Array.from(selectors.imgAll).forEach(selector => selector.classList.remove('filterWhite'))
    Array.from(selectors.imgAll).forEach(selector => selector.classList.add('filterBlack'))
}

function turnImgWhite() {
    Array.from(selectors.imgAll).forEach(selector => selector.classList.remove('filterBlack'))
    Array.from(selectors.imgAll).forEach(selector => selector.classList.add('filterWhite'))
}


function cssInfo() {
    console.log('CSS hover detected')
    turnTextWhite()
    turnImgWhite()
    selectors.skills.style.backgroundColor = colors.css // changes color of background
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden')) // hides all blurbs
    selectors.pCSS.classList.remove('hidden') // displays css blurb
}

function htmlInfo() {
    console.log('HTML hover detected')
    turnTextWhite()
    turnImgWhite()
    selectors.skills.style.backgroundColor = colors.html
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pHTML.classList.toggle('hidden')
}

function jsInfo() {
    console.log('JS hover detected') 
    turnTextBlack()
    turnImgBlack()
    selectors.skills.style.backgroundColor = colors.js
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pJS.classList.toggle('hidden')
}

function mongoInfo() {
    console.log('MongoDB hover detected')
    turnTextWhite()
    turnImgWhite()
    selectors.skills.style.backgroundColor = colors.mongo
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pMongo.classList.toggle('hidden')
}

function nodeInfo() {
    console.log('nodeJS hover detected')
    turnTextWhite()
    turnImgWhite()
    selectors.skills.style.backgroundColor = colors.node
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pNode.classList.toggle('hidden')
}

function sqlInfo() {
    console.log('PostgreSQL hover detected')
    turnTextWhite()
    turnImgWhite()
    selectors.skills.style.backgroundColor = colors.sql
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pSQL.classList.toggle('hidden')
}

function reactInfo() {
    console.log('React hover detected')
    turnTextWhite()
    turnImgWhite()
    selectors.skills.style.backgroundColor = colors.react
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pReact.classList.toggle('hidden')
}

selectors.imgCSS.addEventListener('mouseover', cssInfo);
selectors.imgHTML.addEventListener('mouseover', htmlInfo);
selectors.imgJS.addEventListener('mouseover', jsInfo);
selectors.imgMongo.addEventListener('mouseover', mongoInfo);
selectors.imgNode.addEventListener('mouseover', nodeInfo);
selectors.imgSQL.addEventListener('mouseover', sqlInfo);
selectors.imgReact.addEventListener('mouseover', reactInfo);