import "./style.css"
const container=document.querySelector('#container');
container.classList.add("homepage");

function loadHomePage(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if (container.classList[0]!='homepage'){
        container.classList.toggle('homepage')
    }
}
