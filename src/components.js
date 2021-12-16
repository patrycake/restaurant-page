import bananaImg from "./img/charles-deluvio-0v_1TPz1uXw-unsplash-removebg-preview.png"
const homeComp = () => {
    console.log("Home here")
    document.getElementById("title").innerText = "Restaurant";

    const homeDiv = document.createElement('div');
    const homeP = document.createElement('p');
    homeP.innerText = "We have all the food come eat here!"
    const mainIcon = new Image();
    mainIcon.src = bananaImg;

    homeDiv.appendChild(homeP)
    homeDiv.appendChild(mainIcon)
    return homeDiv;
}

const contactComp = () => {
    document.getElementById("title").innerText = "Contact";

    const contactDiv = document.createElement('div');
    const contactP = document.createElement('p');
    contactP.innerText = "Contact me please!"
    
    contactDiv.appendChild(contactP)
    return contactDiv;
}

const menuComp = () => {
    document.getElementById("title").innerText = "Menu";

    const menuDiv = document.createElement('div');
    const menuP = document.createElement('p');
    menuP.innerText = "Breakfast, Lunch and Dinner we have it all"
    
    menuDiv.appendChild(menuP)
    return menuDiv;
}

export {
    homeComp,
    contactComp,
    menuComp
}