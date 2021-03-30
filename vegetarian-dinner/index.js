const dishes=[{
    name: "eggplant Parmesan",
    isVagetarian: true
}, {
    name: "Meatball Spaghetti",
    isVagetarian: false
},
{
    name: "Tomato Soup",
    isVagetarian: true
},
{
    name: "Beef Tartar",
    isVagetarian: false
}]

const menuEl = document.querySelector('#menu');

const vegetarianDishes = dishes.filter((dish)=>{
    return dish.isVagetarian === true
})
console.log(vegetarianDishes)
vegetarianDishes.forEach((vegeDish)=>{
    if (vegetarianDishes.length > 0){

            let dishEl = document.createElement('li');
            dishEl.textContent = vegeDish.name;
            menuEl.appendChild(dishEl);
    }
})

