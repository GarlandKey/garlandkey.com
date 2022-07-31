/* TODO -- refector so it doesn't look like a baddie did this. */

const home = document.querySelector('.event-home')
const services = document.querySelector('.event-services')
const portfolio = document.querySelector('.event-portfolio')
const contact = document.querySelector('.event-contact')

const sectionHome = document.querySelector('#home')
const sectionServices = document.querySelector('#services')
const sectionPortfolio = document.querySelector('#portfolio')
const sectionContact = document.querySelector('#contact')

home.addEventListener('click', showHome)
services.addEventListener('click', showServices)
portfolio.addEventListener('click', showPortfolio)
contact.addEventListener('click', showContact)

function showHome() {
    sectionHome.classList.remove('hidden')
    sectionServices.classList.add('hidden')
    sectionPortfolio.classList.add('hidden')
    sectionContact.classList.add('hidden')
}

function showServices() {
    sectionHome.classList.add('hidden')
    sectionServices.classList.remove('hidden')
    sectionPortfolio.classList.add('hidden')
    sectionContact.classList.add('hidden')
}

function showPortfolio() {
    sectionHome.classList.add('hidden')
    sectionServices.classList.add('hidden')
    sectionPortfolio.classList.remove('hidden')
    sectionContact.classList.add('hidden')
}

function showContact() {
    sectionHome.classList.add('hidden')
    sectionServices.classList.add('hidden')
    sectionPortfolio.classList.add('hidden') 
    sectionContact.classList.remove('hidden')
}