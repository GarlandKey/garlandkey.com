let colors = {
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
    pBlurb: document.querySelector('#pBlurb'),
    pCSS: document.querySelector('#pCSS'),
    pHTML: document.querySelector('#pHTML'),
    pJS: document.querySelector('#pJS'),
    pMongo: document.querySelector('#pMongo'),
    pNode: document.querySelector('#pNode'),
    pSQL: document.querySelector('#pSQL'),
    pReact: document.querySelector('#pReact')
}

function cssInfo() {
    console.log('hover detected')
    selectors.skills.style.backgroundColor = colors.css
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pCSS.classList.toggle('hidden')
}

function htmlInfo() {
    console.log('hover detected') 
    selectors.skills.style.backgroundColor = colors.html
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pHTML.classList.toggle('hidden')
}

function jsInfo() {
    console.log('hover detected') 
    selectors.skills.style.classList.remove('white')
    selectors.skills.style.classList.add('black')
    selectors.pJS.style.color = '#000'
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pJS.classList.toggle('hidden')
}

function mongoInfo() {
    console.log('hover detected') 
    selectors.skills.style.backgroundColor = colors.mongo
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pMongo.classList.toggle('hidden')
}

function nodeInfo() {
    console.log('hover detected') 
    selectors.skills.style.backgroundColor = colors.node
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pNode.classList.toggle('hidden')
}

function sqlInfo() {
    console.log('hover detected') 
    selectors.skills.style.backgroundColor = colors.sql
    Array.from(document.querySelectorAll('.blurb')).forEach(selector => selector.classList.add('hidden'))
    selectors.pSQL.classList.toggle('hidden')
}

function reactInfo() {
    console.log('hover detected') 
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