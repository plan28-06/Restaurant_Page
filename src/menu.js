export function loadMenuPage(){
    if (container.classList[0]=='homepage'){
        container.classList.toggle('homepage');
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const img= document.createElement('img');
    img.setAttribute('src','https://github.com/plan28-06/Restaurant_Page/blob/main/src/imgs/menuimg.png?raw=true');
    img.setAttribute('height','600px');
    img.setAttribute('width','1000px');
    img.setAttribute('alt','Menu');
    container.appendChild(img)
}