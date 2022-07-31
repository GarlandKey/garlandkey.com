import webglFluid from './webgl-fluid.es.js'

webglFluid(document.querySelector('canvas'), {

    /* interactivity */
    TRIGGER: 'click', //----------------------  default: 'hover' | range: 'click','hover'

    /* toggle options */
    BLOOM: true, //---------------------------  default: 'true'  | range: 'true','false'
    COLORFUL: false, //------------------------  default: 'true'  | range: 'true','false'
    IMMEDIATE: true, //-----------------------  default: 'true'  | range: 'true','false'
    PAUSED: false, //-------------------------  default: 'false' | range: 'true','false'
    SHADING: true, //-------------------------  default: 'true'  | range: 'true','false'
    SUNRAYS: true, //-------------------------  default: 'true'  | range: 'true','false'
    TRANSPARENT: false, //--------------------  default: 'false' | range: 'true','false'

    /* bloom */

    BLOOM_INTENSITY: 0.8, //------------------  default: 0.8     | range: 0-2
    BLOOM_ITERATIONS: 8, //-------------------  default: 8       | range: ???
    BLOOM_SOFT_KNEE: 0.7, //------------------  default: 0.7     | range: ???
    BLOOM_THRESHOLD: 0.6, //------------------  default: 0.6     | range: 0-1

    /* colors */
    BACK_COLOR: { r: 0, g: 0, b: 0 }, //------  default: { r: 0, g: 0, b: 0 }
    COLOR_UPDATE_SPEED: 10, //----------------  default: 10      | range: ???

    /* physics */
    DENSITY_DISSIPATION: 1, //----------------  default: 1       | range: 0-4
    VELOCITY_DISSIPATION: 0.2, //-------------  default: 0.2     | range: 0-4
    PRESSURE: 0.8, //-------------------------  default: 0.8     | range: 0-1
    PRESSURE_ITERATIONS: 20, //---------------  default: 20      | range: ???
    CURL: 30, //------------------------------  default: 30      | range: ??? 
    SPLAT_RADIUS: 0.25, //--------------------  default: 0.25    | range: 0-1
    SPLAT_FORCE: 4000, //---------------------  default: 6000    | range: ???
    
    /* resolutions */
    BLOOM_RESOLUTION: 256, //-----------------  default: 256     | range: 32,64,128,256
    CAPTURE_RESOLUTION: 512, //---------------  deafult: 512     | range: ???
    DYE_RESOLUTION: 1024, //------------------  default: 1024    | range: ???
    SIM_RESOLUTION: 128, //-------------------  default: 128     | range: 32,64,128,256
    SUNRAYS_RESOLUTION: 196, //---------------  default: 196     | range: ???

    /* sunrays */
    SUNRAYS_WEIGHT: 1.0 //--------------------  default: 1.0     | range: 0-1
})