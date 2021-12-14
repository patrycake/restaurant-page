const homeComp = () => {
    console.log("Home here")
    const homeDiv = document.createElement('div');
    const homeH1 = document.createElement('h1');

    homeH1.innerText = "Restaurant";
    homeDiv.appendChild(homeH1)
    return homeDiv;
}

const contactComp = () => {
    const contactDiv = document.createElement('div');
    const contactH1 = document.createElement('h1');

    contactH1.innerText = "Contact";
    contactDiv.appendChild(contactH1)
    return contactDiv;
}

const menuComp = () => {
    const menuDiv = document.createElement('div');
    const menuH1 = document.createElement('h1');

    menuH1.innerText = "Menu";
    menuDiv.appendChild(menuH1)
    return menuDiv;
}

export {
    homeComp,
    contactComp,
    menuComp
}