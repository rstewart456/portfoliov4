var firebaseConfig = {
    apiKey: "AIzaSyClqlVbnlx1V4Se7sj5DmfrPd_7NW0uNpQ",
    authDomain: "portfolio-c6881.firebaseapp.com",
    databaseURL: "https://portfolio-c6881.firebaseio.com",
    projectId: "portfolio-c6881",
    storageBucket: "portfolio-c6881.appspot.com",
    messagingSenderId: "36642616277",
    appId: "1:36642616277:web:3836d5a08908b8a424035c"
};
firebase.initializeApp(firebaseConfig);
let result = ''
var db = firebase.firestore();
document.addEventListener("DOMContentLoaded", () => {
    db.collection('projects').orderBy('createdAt', 'desc').get().then(function (qureSnapShot) {
        qureSnapShot.forEach(function (doc) {
            const data = {
                id: doc.id,
                ...doc.data()
            }
            result += `
            <div class='proj-card'>
            <div class='card-name'>${data.name}</div>
                <img class='card-image' src=${data.image} alt='project' />
                <div class='card-parag'>${data.paragraph}</div>
            <div class='card-links'>
                <a href=${data.location} target='_blank' class='card-link'>Demo</a>
                <a href=${data.github} target='_blank' class='card-link'>Github</a>
            </div>
            </div>
            `;
            document.querySelector('.proj-app').innerHTML = result
        })
    })
})

window.addEventListener('resize', () => {
    if(window.innerWidth <= 850) {
        document.querySelector('.sidebar').style.width = '0'
        document.querySelector('.main-body').style.marginLeft = '0'
        document.querySelector('.fa-bars').style.display = 'block'
        document.querySelector('.fa-times-circle').style.display = 'none'
    } else if(window.innerWidth >= 851) {
        document.querySelector('.sidebar').style.width = '200px'
        document.querySelector('.main-body').style.marginLeft = '200px'
        document.querySelector('.fa-times-circle').style.display = 'none'
        document.querySelector('.fa-bars').style.display = 'none'
    }
})

function openMenu() {
    document.querySelector('.sidebar').style.width = '200px'
    document.querySelector('.fa-times-circle').style.display = 'block'
}
function closeMenu() {
    document.querySelector('.sidebar').style.width = '0px'
    document.querySelector('.fa-times-circle').style.display = 'none'
    document.querySelector('.fa-bars').style.display = 'block'
}
function slideBar() {
    if(window.innerWidth < 850) {
        document.querySelector('.sidebar').style.width = '0px'
        document.querySelector('.main-body').style.marginLeft = '0px'
        document.querySelector('.fa-times-circle').style.display = 'none'
    } else {
        return null
    }
}