import "./style.css"
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";
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

const buttons = document.querySelectorAll('button');
for (let button of buttons){
    button.addEventListener('click',function(){
        container.classList.remove('menupage')
        if (button.classList[0] == 'home'){
            loadHomePage();
        }
        else if (button.classList[0]=='menu'){
            container.classList.add('menupage')
            loadMenuPage();

        }
        else if (button.classList[0]=='about'){
            container.classList.remove('menupage')
            loadAboutPage();
        }
    })
}

