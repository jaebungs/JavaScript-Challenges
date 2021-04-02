// use Set.
function uniqueMenu(){
    const vendor1 = ["pizza", "pasta"];
    const vendor2 = ["pizza", "lobster", "taco"];
    const vendor3 = ["calzones", "noodles"];
    const vendor4 = ["pasta", "noodles"];

    let uniqueMenu = new Set([...vendor1, ...vendor2, ...vendor3, ...vendor4]);

    return uniqueMenu;
}

const textEl = document.querySelector('#combined-menu');
const anotherEl = document.querySelector('#another-way');

const menus = uniqueMenu();

console.log(menus);
menus.forEach((menu)=>{
    const menuEl = document.createElement('span');
    menuEl.textContent = menu
    return textEl.appendChild(menuEl)
})


function removeDuplicate(menus){
    let flatMenus = menus.flat();
    let set = new Set();
    flatMenus.forEach((menu)=>{
        set.add(menu);
    })
    set.forEach((menu)=>{
        const anotherMenu = document.createElement('div')
        anotherMenu.textContent = menu
        anotherEl.appendChild(anotherMenu)
    })
}
removeDuplicate([["pizza", "pasta"], ["pizza", "lobster", "taco"], ["calzones", "noodles"], ["pasta", "noodles"]])