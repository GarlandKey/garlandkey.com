import WebGLFluid from 'https://unpkg.com/webgl-fluid@0.1.0/dist/webgl-fluid.es.js'

WebGLFluid(document.querySelector('canvas'), {
    IMMEDIATE: true, // 'true' || 'false'
    TRIGGER: 'hover', // 'click' || 'hover'
    SIM_RESOLUTION: 128, // default: 128 | range: 32,64,128,256
    DYE_RESOLUTION: 1024, // default: 1024 | range: ???
    CAPTURE_RESOLUTION: 512, // deafult: 512 | range: ???
    DENSITY_DISSIPATION: 1, // default: 1 | range: 0-4
    VELOCITY_DISSIPATION: 0.2, // default: 0.2 | range: 0-4
    PRESSURE: 0.8, // default: 0.8 | range: 0-1
    PRESSURE_ITERATIONS: 20, // default: 20 | range: ???
    CURL: 30, // default: 30 | range: ???
    SPLAT_RADIUS: 0.25, // default: 0.25 | range: 0-1
    SPLAT_FORCE: 4000, // default: 6000 | range: ???
    SHADING: true, // 'true' || 'false'
    COLORFUL: true, // 'true' || 'false'
    COLOR_UPDATE_SPEED: 10, // default: 10 | range: ???
    PAUSED: false, // 'true' || 'false'
    BACK_COLOR: { r: 0, g: 0, b: 0 }, // default: { r: 0, g: 0, b: 0 }
    TRANSPARENT: false, // 'true' || 'false'
    BLOOM: true, // 'true' || 'false'
    BLOOM_ITERATIONS: 8, // default: 8 | range: ???
    BLOOM_RESOLUTION: 256, // 256
    BLOOM_INTENSITY: 0.8, // default: 0.8 | range: 0-2
    BLOOM_THRESHOLD: 0.6, // default: 0.6 | range: 0-1
    BLOOM_SOFT_KNEE: 0.7, // default: 0.7 | range: ???
    SUNRAYS: true, // 'true' || 'false'
    SUNRAYS_RESOLUTION: 196, // default: 196 | range: ???
    SUNRAYS_WEIGHT: 1.0 // default: 1.0 | range: 0-1
})