
const header = document.querySelector(".header");
const ingredientInput = document.querySelector(".inputField")
const ingredientList = document.querySelector(".ingredientList");
const possibleDrinksList = document.querySelector("#possibleDrinks");
const feelingLucky = document.querySelector(".feelingLucky")
const dealersChoice = document.getElementById("dealersChoiceButton")
const backgroundAudio = document.getElementById("backgroundAudio");
const playAudioButton = document.getElementById("playAudioButton");
const clearButton = document.querySelector(".clear")




let ingredientArray = [];
const cocktailsThatYouCanMake = [];
const addedDrinks = [];

const drinkURLs = {
    'Gin Martini': 'https://www.thespruceeats.com/classic-gin-martini-recipe-759739',
    'Vodka Martini': 'https://www.thespruceeats.com/vodka-martini-recipe-759289',
    'Mojito': 'https://www.loveandlemons.com/mojito-recipe/',
    'Margarita': 'https://www.liquor.com/recipes/margarita/',
    'Old Fashioned': 'https://www.liquor.com/recipes/old-fashioned/',
    'Daiquiri': 'https://www.liquor.com/recipes/daiquiri/',
    'Strawberry Margarita': 'https://www.culinaryhill.com/strawberry-margarita-recipe/',
    'Bees Knees': 'https://www.liquor.com/recipes/bees-knees/',
    'Espresso Martini': 'https://www.liquor.com/recipes/espresso-martini/',
    'Manhattan': 'https://www.liquor.com/recipes/manhattan-2/',
    'Whiskey Ginger': 'https://www.thespruceeats.com/whiskey-ginger-recipe-760169',
    'Screwdriver': 'https://www.liquor.com/recipes/screwdriver/',
    'Gimlet': 'https://www.liquor.com/recipes/gimlet/',
    'Godfather': 'https://www.liquor.com/recipes/godfather/',
    'Corpse Reviver': 'https://www.liquor.com/recipes/corpse-reviver-2/',
    'Penicillin': 'https://www.liquor.com/recipes/penicillin/',
    'Derby': 'https://leitesculinaria.com/80627/recipes-the-derby-cocktail.html',
    "Lion's Tail": 'https://www.liquor.com/recipes/lions-tail/',
    'Old Cuban': 'https://www.liquor.com/recipes/old-cuban/',
    'Preakness Cocktail': 'https://www.liquor.com/recipes/preakness-cocktail/',
    'Fourth Regiment': 'https://imbibemagazine.com/recipe/fourth-regiment-cocktail/',
    'Scofflaw': 'https://www.liquor.com/recipes/scofflaw/',
    'Martinez': 'https://www.liquor.com/recipes/martinez/',
    'Sidecar': 'https://www.liquor.com/recipes/sidecar/',
    'White Russian': 'https://www.liquor.com/recipes/white-russian/',
    'Cosmopolitan': 'https://www.allrecipes.com/recipe/221891/cosmopolitan-cocktail/',
    'Negroni': 'https://www.thespruceeats.com/negroni-cocktail-recipe-759327',
    'Tom Collins': 'https://www.liquor.com/recipes/tom-collins-2/',
    'Tequila Sunrise': 'https://www.thespruceeats.com/tequila-sunrise-recipe-759450',
    'Harvey Wallbanger': 'https://www.liquor.com/recipes/harvey-wallbanger/',
    'Brandy Alexander': 'https://www.liquor.com/recipes/brandy-alexander/',
    'Pina Colada': 'https://www.crazyforcrust.com/easy-pina-colada-recipe/',
    'Mai Tai': 'https://www.liquor.com/recipes/traditional-mai-tai/',
    'Rob Roy': 'https://www.liquor.com/recipes/rob-roy/',
    'Singapore Sling': 'https://www.liquor.com/recipes/singapore-sling/',
    'Zombie': 'https://www.liquor.com/recipes/zombie/',
    'Sex on the Beach': 'https://www.thespruceeats.com/sex-on-the-beach-recipe-759285',
    'Blue Lagoon': 'https://www.liquor.com/recipes/blue-lagoon/',
    'Sea Breeze': 'https://www.liquor.com/recipes/sea-breeze/',
    'Mimosa': 'https://www.loveandlemons.com/mimosa-recipe/',
    'Black Russian': 'https://www.liquor.com/recipes/black-russian/',
    'Kahlua and Soda': 'https://unsophisticook.com/kahlua-club-soda/',
    'Tequila Soda': 'https://www.thespruceeats.com/tequila-soda-recipe-759451',
    'Long Island Iced Tea':'https://www.allrecipes.com/recipe/228491/the-real-long-island-iced-tea/',
    'Aperol Spritz': 'https://cookieandkate.com/classic-aperol-spritz-recipe/',
    'Mudslide': 'https://www.delish.com/cooking/recipe-ideas/a30212606/mudslide-cocktail-recipe/',
    'Sangria': 'https://minimalistbaker.com/easy-traditional-red-sangria/',
    'Dark and Stormy': 'https://www.liquor.com/recipes/dark-n-stormy/',
    'Sex on the Beach': 'https://www.delish.com/cooking/recipe-ideas/a30275456/sex-on-the-beach-cocktail-recipe/',
    'South Side': 'https://www.liquor.com/recipes/south-side/',
    'Green Point': 'https://www.liquor.com/recipes/greenpoint/',
    'Bijoux Cocktail': 'https://www.liquor.com/recipes/bijou/',
    'Last Word': 'https://www.liquor.com/recipes/the-last-word/',
    'Black Manhattan': 'https://www.liquor.com/black-manhattan-cocktail-recipe-5184291',
    'Tipperary': 'https://www.liquor.com/recipes/tipperary/',
    'Rosita': 'https://www.liquor.com/rosita-cocktail-recipe-7487591',
   'Preakness':'https://www.liquor.com/recipes/preakness/',
    'Vert Chaud':'https://tuxedono2.com/verte-chaud-cocktail-recipe',
    'Hanky Panky':'https://www.liquor.com/recipes/hanky-panky/',
    'Tequila Sunrise':'https://www.liquor.com/recipes/tequila-sunrise/',

};


const classicCocktails = [
    {
        name: 'Aperol Spritz',
        ingredients: ['Aperol', 'Prosecco', 'Soda Water', 'Orange']
    },
    {
        name: 'Bees Knees',
        ingredients: ['Gin', 'Honey', 'Lime', 'Salt', 'Lavender']
    },
    {
        name: 'Black Russian',
        ingredients: ['Vodka', 'Coffee Liqueur']
    },
    {
        name: 'Blue Lagoon',
        ingredients: ['Vodka', 'Blue Curacao', 'Lemonade']
    },
    {
        name: 'Brandy Alexander',
        ingredients: ['Brandy', 'Creme de Cacao', 'Cream', 'Nutmeg']
    },
    {
        name: 'Campari Soda',
        ingredients: ['Soda Water', 'Campari']
    },
    {
        name: 'Cosmopolitan',
        ingredients: ['Vodka', 'Cointreau', 'Cranberry ', 'Lime']
    },
    {
        name: 'Corpse Reviver',
        ingredients: ['Gin', 'Cointreau', 'Lillet Blanc', 'Absinthe']
    },
    {
        name: 'Daiquiri',
        ingredients: ['Rum', 'Lime', 'Syrup']
    },
    {
        name: 'Derby',
        ingredients: ['Bourbon', 'Vermouth', 'Orange Curacao', 'Orange Bitters']
    },
    {
        name: 'Espresso Martini',
        ingredients: ['Vodka', 'Sugar', 'Coffee', 'Coffee Liqueur', 'Cream']
    },
    {
        name: 'Fourth Regiment',
        ingredients: ['Whiskey', ' Vermouth', 'Celery Bitters', 'Bitters']
    },
    {
        name: "Lion's Tail",
        ingredients: ['Bourbon', 'Allspice Dram', 'Lime', 'Sugar', 'Bitters']
    },
    {
        name: 'Gimlet',
        ingredients: ['Gin', 'Lime', 'Sugar']
    },
    {
        name: 'Godfather',
        ingredients: ['Scotch', 'Amaretto']
    },
    {
        name: 'Gin Martini',
        ingredients: ['Gin', 'Dry Vermouth', 'Olive']
    },
    {
        name: 'Harvey Wallbanger',
        ingredients: ['Vodka', 'Orange ', 'Galliano']
    },
    {
        name: 'Kahlua and Soda',
        ingredients: ['Soda ', 'Coffee Liqueur']
    },
    {
        name: 'Mai Tai',
        ingredients: [' Rum', 'Dark Rum', 'Lime', 'Orgeat', 'Orange Curacao']
    },
    {
        name: 'Manhattan',
        ingredients: ['Whiskey', 'Vermouth', 'Bitters']
    },
    {
        name: 'Margarita',
        ingredients: ['Tequila', 'Triple Sec', 'Lime', 'Salt']
    },
    {
        name: 'Martinez',
        ingredients: ['Gin', 'Vermouth', 'Maraschino Liqueur', 'Orange Bitters']
    },
    {
        name: 'Mimosa',
        ingredients: ['Champagne', 'Orange Juice']
    },
    {
        name: 'Mojito',
        ingredients: ['Rum', 'Mint', 'Lime', 'Syrup', 'Soda Water']
    },
    {
        name: 'Negroni',
        ingredients: ['Gin', 'Sweet Vermouth', 'Campari']
    },
    {
        name: 'Old Cuban',
        ingredients: ['Champagne', ' Rum', 'Sugar', ' Bitters', 'Champagne']
    },
    {
        name: 'Old Fashioned',
        ingredients: ['Whiskey', 'Sugar', 'Bitters', 'Orange', 'Cherries']
    },
    {
        name: 'Penicillin',
        ingredients: ['Scotch', 'Honey Syrup', 'Ginger ', 'Lemon ', ]
    },
    {
        name: 'Piña Colada',
        ingredients: ['Rum', 'Coconut Cream', 'Pineapple']
    },
    {
        name: 'Preakness Cocktail',
        ingredients: ['Whiskey', 'Vermouth', 'Benedictine', 'Peach Bitters']
    },
    {
        name: 'Rob Roy',
        ingredients: ['Scotch', 'Vermouth', ' Bitters']
    },
    {
        name: 'Scofflaw',
        ingredients: ['Rye Whiskey', 'Dry Vermouth', 'Lemon ', 'Grenadine', 'Orange Bitters']
    },
    {
        name: 'Sea Breeze',
        ingredients: ['Vodka', 'Cranberry ', 'Grapefruit ']
    },
    {
        name: 'Sex on the Beach',
        ingredients: ['Vodka', 'Peach Schnapps', 'Orange ', 'Cranberry ']
    },
    {
        name: 'Sidecar',
        ingredients: ['Brandy', 'Triple Sec', 'Lemon ']
    },
    {
        name: 'Singapore Sling',
        ingredients: ['Gin', 'Cherry Brandy', 'Cointreau', 'Pineapple ', 'Lime ', 'Grenadine']
    },
    {
        name: 'Screwdriver',
        ingredients: ['Vodka', 'Orange ']
    },
    {
        name: 'Strawberry Margarita',
        ingredients: ['Tequila', 'Triple Sec', 'Lime', 'Strawberries', 'Salt']
    },
    {
        name: 'Tequila Soda',
        ingredients: ['Soda', 'Tequila']
    },
    {
        name: 'Tequila Sunrise',
        ingredients: ['Tequila', 'Orange ', 'Grenadine']
    },
    {
        name: 'Tom Collins',
        ingredients: ['Gin', 'Lemon ', 'Sugar', 'Soda ']
    },
    {
        name: 'Vodka Martini',
        ingredients: ['Vodka', 'Dry Vermouth', 'Olive']
    },
    {
        name: 'Vodka Soda',
        ingredients: ['Soda ', 'Vodka']
    },
    {
        name: 'White Russian',
        ingredients: ['Vodka', 'Coffee Liqueur', 'Cream']
    },
    {
        name: 'Whiskey Ginger',
        ingredients: ['Whiskey', 'Ginger Beer']
    },
    {
        name: 'Whiskey Soda',
        ingredients: ['Soda ', 'Whiskey']
    },
    {
        name: 'Zombie',
        ingredients: [' Rum', 'Dark Rum', 'Apricot Brandy', 'Lime ', 'Pineapple ',]
    },
    {
        name: 'Long Island Iced Tea',
        ingredients: ['Vodka', 'Rum', 'Gin', 'Tequila', 'Triple Sec', 'Lemon ', 'Sugar', 'Coke']
    },
    {
        name: 'Mai Tai',
        ingredients: [' Rum', 'Dark Rum', 'Orange Curacao', 'Orgeat ', 'Lime ', 'Pineapple ']
    },
    {
        name: 'Pina Colada',
        ingredients: [' Rum', 'Coconut Cream', 'Pineapple ']
    },
    {
        name: 'White Russian',
        ingredients: ['Vodka', 'Coffee Liqueur', 'Cream']
    },
    {
        name: 'Mai Tai',
        ingredients: [' Rum', 'Dark Rum', 'Lime ', 'Orgeat ', 'Orange Curacao']
    },
    {
        name: 'Sangria',
        ingredients: ['Red Wine', 'Brandy', 'Orange ', 'Sugar', 'Soda ', 'Fruits']
    },
    {
        name: 'Mojito',
        ingredients: [' Rum', 'Mint ', 'Lime ', 'Sugar', 'Soda ']
    },
    {
        name: 'Dark and Stormy',
        ingredients: [' Rum', 'Ginger Beer', 'Lime']
    },
    {
        name: 'Amaretto Sour',
        ingredients: ['Amaretto', 'Lemon ', 'Sugar']
    },
    {
        name: 'Mudslide',
        ingredients: ['Vodka', 'Coffee Liqueur', 'Irish Cream', 'Cream']
    },
    {
        name: 'Tipperary',
        ingredients: ['Chartreuse', 'Irish whiskey', 'vermouth']
    },
    {
        name: 'Green Point',
        ingredients: ['Chartreuse', ' whiskey', 'vermouth']
    },
    {
        name: 'Chartreuse and Root Beer',
        ingredients: ['Chartreuse', ' root beer',]
    },
    {
        name: 'Vert Chaud',
        ingredients: ['Chartreuse', ' hot chocolate',]
    },
    {
        name: 'Hanky Panky',
        ingredients: ['fernet branca', ' gin', 'vermouth','orange']
    },
    {
        name: 'Rosita',
        ingredients: ['tequila', ' campari', 'dry vermouth','orange']
    },
    {
        name: 'Black Manhattan',
        ingredients: ['whiskey', ' amaro', 'orange', 'bitters']
    },
    {
        name: 'South Side',
        ingredients: ['gin', ' mint', 'lemon', 'soda', 'sugar']
    },
];





ingredientInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter" && ingredientInput.value.trim() !== "") {
        const ingredientValue = ingredientInput.value.toLowerCase();
        if (!ingredientArray.includes(ingredientValue)) {
            const ingredient = document.createElement("li");
            ingredient.textContent = ingredientValue;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                ingredientList.removeChild(ingredient);
                ingredientArray = ingredientArray.filter(item => item !== ingredientValue);
            });
            
            ingredient.appendChild(deleteButton);
            
            ingredientList.appendChild(ingredient);
            ingredientList.appendChild(ingredient);
            ingredientArray.push(ingredientValue);

            ingredientInput.value = "";
            console.log(ingredientArray);
        }

        cocktailsThatYouCanMake.length = 0;
        

        for (let cocktail of classicCocktails) {
            const cocktailIngredients = cocktail.ingredients;
            const hasAllIngredients = cocktailIngredients.every(ingredient =>
                ingredientArray.includes(ingredient)
            );

            if (hasAllIngredients) {
                cocktailsThatYouCanMake.push(cocktail.name);
            }
        }

        possibleDrinksList.innerHTML = '';
     
       
       

        for (const drinkName of cocktailsThatYouCanMake) {
            const drinkURL = drinkURLs[drinkName];
            const drinkItem = document.createElement("li");
            const drinkLink = document.createElement("a");
            drinkLink.textContent = drinkName;
            drinkLink.target = "_blank";
            drinkItem.style.color = "hotPink";

            if (drinkURL) {
                drinkLink.href = drinkURL;
                drinkItem.appendChild(drinkLink);
                possibleDrinksList.appendChild(drinkItem);
            } else {
                drinkItem.textContent = drinkName;
                possibleDrinksList.appendChild(drinkItem);
            }
          
        }
      
         }
    
   
});
     ingredientInput.value = "";

    



for (const cocktail of classicCocktails) {
    
    for (let i = 0; i < cocktail.ingredients.length; i++) {
        cocktail.ingredients[i] = cocktail.ingredients[i].toLowerCase();
    }
}


dealersChoice.addEventListener("click", function (e) {
    e.preventDefault();
    let getRandomIndex = (array) => {
        let randomIndex = Math.floor(Math.random() * array.length);
        return randomIndex;
    }

    let cocktailIndex = getRandomIndex(classicCocktails);
    let randomCocktail = classicCocktails[cocktailIndex];
    console.log(randomCocktail)

    possibleDrinksList.innerHTML = '';

    const drinkItem = document.createElement("li");
    const drinkLink = document.createElement("a");
    drinkLink.textContent = randomCocktail.name;
    drinkLink.target = "_blank";
    drinkItem.style.color = "hotPink";

    const drinkURL = drinkURLs[randomCocktail.name];
    if (drinkURL) {
        drinkLink.href = drinkURL;
        drinkItem.appendChild(drinkLink);
        possibleDrinksList.appendChild(drinkItem);
    } else {
        drinkItem.textContent = randomCocktail.name;
        possibleDrinksList.appendChild(drinkItem);
    }
});




ingredientInput.addEventListener("keyup", function(e) {
    if(e.key === "Enter"){
    ingredientInput.value = "";
    }
})


// plays audio
playAudioButton.addEventListener("click", function () {
    backgroundAudio.play();
});

// suppose to clear the selection
clearButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    possibleDrinksList.innerHTML = "";
    ingredientList.innerHTML = ""; 
    ingredientArray = [];
});










