let colors = {
    css: '#264de4',
    html: '#e44d26',
    illustrator: '#330000',
    js: '#f4dd40',
    lightroom: '#001e36',
    mongodb: '#00684a',
    nodejs: '#333333',
    photoshop: '#001e36',
    postgresql: '#336791',
    react: '#282c34'
}

let selectors = {
    blurb: document.querySelector('.blurb'),
    skills: document.querySelector('.skills'),
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
    pCSS: document.querySelector('#pCSS'),
    pHTML: document.querySelector('#pHTML'),
    pJS: document.querySelector('#pJS'),
    pMongo: document.querySelector('#pMongo'),
    pNode: document.querySelector('#pNode'),
    pSQL: document.querySelector('#pSQL'),
    pReact: document.querySelector('#pReact')
}

function css() {
    console.log('hover detected')
    console.log(colors.css)
    selectors.skills.style.backgroundColor = colors.css
    selectors.blurb.classList.toggle('hidden')
    selectors.pCSS.classList.toggle('hidden')
}

selectors.imgCSS.addEventListener('mouseover', css);