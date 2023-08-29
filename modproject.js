
const header = document.querySelector(".header");
const submit = document.querySelector("button");
const inputFromOption = document.querySelector("select");
const ingredientList = document.querySelector(".ingredientList");
const possibleDrinksList = document.querySelector("#possibleDrinks");
const clearButton = document.querySelector(".clear");



let ingredientArray = [];
const cocktailsThatYouCanMake = [];
const addedDrinks = [];

const drinkURLs = {
    'Gin Martini': 'https://example.com/gin-martini',
    'Vodka Martini': 'https://example.com/vodka-martini',
    'Mojito': 'https://example.com/mojito',
    'Margarita': 'https://example.com/margarita',
    'Old Fashioned': 'https://example.com/old-fashioned',
    'Daiquiri': 'https://example.com/daiquiri',
    'Strawberry Margarita': 'https://example.com/strawberry-margarita',
    'Bees Knees': 'https://example.com/bees-knees',
    'Espresso Martini': 'https://example.com/espresso-martini',
    'Manhattan': 'https://example.com/manhattan',
    'Whiskey Ginger': 'https://example.com/whiskey-ginger',
    'Screwdriver': 'https://example.com/screwdriver',
    'Gimlet': 'https://example.com/gimlet',
    'Godfather': 'https://example.com/godfather',
    'Corpse Reviver': 'https://example.com/corpse-reviver',
    'Penicillin': 'https://example.com/penicillin',
    'Derby': 'https://example.com/derby',
    "Lion's Tail": 'https://example.com/lions-tail',
    'Old Cuban': 'https://example.com/old-cuban',
    'Preakness Cocktail': 'https://example.com/preakness-cocktail',
    'Fourth Regiment': 'https://example.com/fourth-regiment',
    'Scofflaw': 'https://example.com/scofflaw',
    'Martinez': 'https://example.com/martinez',
    'Sidecar': 'https://example.com/sidecar',
    'White Russian': 'https://example.com/white-russian',
    'Cosmopolitan': 'https://example.com/cosmopolitan',
    'Negroni': 'https://example.com/negroni',
    'Tom Collins': 'https://example.com/tom-collins',
    'Tequila Sunrise': 'https://example.com/tequila-sunrise',
    'Harvey Wallbanger': 'https://example.com/harvey-wallbanger',
    'Brandy Alexander': 'https://example.com/brandy-alexander',
    'Piña Colada': 'https://example.com/pina-colada',
    'Mai Tai': 'https://example.com/mai-tai',
    'Rob Roy': 'https://example.com/rob-roy',
    'Singapore Sling': 'https://example.com/singapore-sling',
    'Zombie': 'https://example.com/zombie',
    'Sex on the Beach': 'https://example.com/sex-on-the-beach',
    'Blue Lagoon': 'https://example.com/blue-lagoon',
    'Sea Breeze': 'https://example.com/sea-breeze',
    'Mimosa': 'https://example.com/mimosa',
    'Black Russian': 'https://example.com/black-russian',
    'Kahlua and Soda': 'https://example.com/kahlua-and-soda',
    'Tequila Soda': 'https://example.com/tequila-soda',
    'Vodka Soda': 'https://example.com/vodka-soda',
    'Whiskey Soda': 'https://example.com/whiskey-soda',
    'Campari Soda': 'https://example.com/campari-soda',
    'Aperol Spritz': 'https://example.com/aperol-spritz',
};


submit.addEventListener("click", function (e) {
    e.preventDefault();

    const ingredientValue = inputFromOption.value;

    if (!ingredientArray.includes(ingredientValue)) {
        const ingredient = document.createElement("li");
        ingredient.textContent = ingredientValue;
        ingredientList.appendChild(ingredient);
        ingredientArray.push(ingredientValue);
        console.log(ingredientArray);
    }

    cocktailsThatYouCanMake.length = 0; // Clear the array

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
});



const classicCocktails = [
    {
        name: 'Gin Martini',
        ingredients: ['Gin', 'Dry Vermouth', 'Olive']
    },
    {
        name: 'Vodka Martini',
        ingredients: ['Vodka', 'Dry Vermouth', 'Olive']
    },
    {
        name: 'Mojito',
        ingredients: ['Rum', 'Mint', 'Lime', 'Syrup', 'Soda Water']
    },
    {
        name: 'Margarita',
        ingredients: ['Tequila', 'Triple Sec', 'Lime', 'Salt']
    },
    {
        name: 'Old Fashioned',
        ingredients: ['Whiskey', 'Sugar', 'Bitters', 'Orange', 'Cherries']
    },
    {
        name: 'Daiquiri',
        ingredients: ['Rum', 'Lime Juice', 'Syrup']
    },
    {
        name: 'Strawberry Margarita',
        ingredients: ['Tequila', 'Triple Sec', 'Lime', 'Strawberries', 'Salt']
    },
    {
        name: 'Bees Knees',
        ingredients: ['Gin', 'Honey', 'Lime', 'Salt', 'Lavender']
    },
    {
        name: 'Espresso Martini',
        ingredients: ['Vodka', 'Sugar', 'Coffee', 'Coffee Liqueur', 'Cream']
    },
    {
        name: 'Manhattan',
        ingredients: ['Whiskey', 'Vermouth', 'Bitters']
    },
    {
        name: 'Whiskey Ginger',
        ingredients: ['Whiskey', 'Ginger Beer']
    },
    {
        name: 'Screwdriver',
        ingredients: ['Vodka', 'Orange Juice']
    },
    {
        name: 'Gimlet',
        ingredients: ['Gin', 'Lime Juice', 'Simple Syrup']
    },
    {
        name: 'Godfather',
        ingredients: ['Scotch', 'Amaretto']
    },
    {
        name: 'Corpse Reviver',
        ingredients: ['Gin', 'Cointreau', 'Lillet Blanc', 'Absinthe']
    },
    {
        name: 'Penicillin',
        ingredients: ['Scotch', 'Honey Syrup', 'Ginger Syrup', 'Lemon Juice', 'Islay Scotch Float']
    },
    {
        name: 'Derby',
        ingredients: ['Bourbon', 'Sweet Vermouth', 'Orange Curacao', 'Orange Bitters']
    },
    {
        name: "Lion's Tail",
        ingredients: ['Bourbon', 'Allspice Dram', 'Lime Juice', 'Simple Syrup', 'Angostura Bitters']
    },
    {
        name: 'Old Cuban',
        ingredients: ['Champagne', 'Aged Rum', 'Simple Syrup', 'Angostura Bitters', 'Champagne']
    },
    {
        name: 'Preakness Cocktail',
        ingredients: ['Rye Whiskey', 'Sweet Vermouth', 'Benedictine', 'Peach Bitters']
    },
    {
        name: 'Fourth Regiment',
        ingredients: ['Whiskey', ' Vermouth', 'Celery Bitters', 'Bitters']
    },
    {
        name: 'Scofflaw',
        ingredients: ['Rye Whiskey', 'Dry Vermouth', 'Lemon Juice', 'Grenadine', 'Orange Bitters']
    },
    {
        name: 'Martinez',
        ingredients: ['Gin', 'Sweet Vermouth', 'Maraschino Liqueur', 'Orange Bitters']
    },
    {
        name: 'Sidecar',
        ingredients: ['Brandy', 'Triple Sec', 'Lemon Juice']
    },
    {
        name: 'White Russian',
        ingredients: ['Vodka', 'Coffee Liqueur', 'Cream']
    },
    {
        name: 'Cosmopolitan',
        ingredients: ['Vodka', 'Cointreau', 'Cranberry Juice', 'Lime Juice']
    },
    {
        name: 'Negroni',
        ingredients: ['Gin', 'Sweet Vermouth', 'Campari']
    },
    {
        name: 'Tom Collins',
        ingredients: ['Gin', 'Lemon Juice', 'Simple Syrup', 'Soda Water']
    },
    {
        name: 'Tequila Sunrise',
        ingredients: ['Tequila', 'Orange Juice', 'Grenadine']
    },
    {
        name: 'Harvey Wallbanger',
        ingredients: ['Vodka', 'Orange Juice', 'Galliano']
    },
    {
        name: 'Brandy Alexander',
        ingredients: ['Brandy', 'Dark Creme de Cacao', 'Cream', 'Nutmeg']
    },
    {
        name: 'Piña Colada',
        ingredients: ['White Rum', 'Coconut Cream', 'Pineapple Juice']
    },
    {
        name: 'Mai Tai',
        ingredients: ['Light Rum', 'Dark Rum', 'Lime Juice', 'Orgeat Syrup', 'Orange Curacao']
    },
    {
        name: 'Tequila Sunrise',
        ingredients: ['Tequila', 'Orange Juice', 'Grenadine']
    },
    {
        name: 'Rob Roy',
        ingredients: ['Scotch', 'Sweet Vermouth', 'Angostura Bitters']
    },
    {
        name: 'Singapore Sling',
        ingredients: ['Gin', 'Cherry Brandy', 'Cointreau', 'Pineapple Juice', 'Lime Juice', 'Grenadine']
    },
    {
        name: 'Zombie',
        ingredients: ['Light Rum', 'Dark Rum', 'Apricot Brandy', 'Lime Juice', 'Pineapple Juice', 'Grenadine']
    },
    {
        name: 'Sex on the Beach',
        ingredients: ['Vodka', 'Peach Schnapps', 'Orange Juice', 'Cranberry Juice']
    },
    {
        name: 'Blue Lagoon',
        ingredients: ['Vodka', 'Blue Curacao', 'Lemonade']
    },
    {
        name: 'Sea Breeze',
        ingredients: ['Vodka', 'Cranberry Juice', 'Grapefruit Juice']
    },
    {
        name: 'Mimosa',
        ingredients: ['Champagne', 'Orange Juice']
    },
    {
        name: 'Black Russian',
        ingredients: ['Vodka', 'Coffee Liqueur']
    },
    {
        name: 'Kahlua and Soda',
        ingredients: ['Soda Water', 'Coffee Liqueur']
    },
    {
        name: 'Tequila Soda',
        ingredients: ['Soda Water', 'Tequila']
    },
    {
        name: 'Vodka Soda',
        ingredients: ['Soda Water', 'Vodka']
    },
    {
        name: 'Whiskey Soda',
        ingredients: ['Soda Water', 'Whiskey']
    },
    {
        name: 'Scotch and Soda',
        ingredients: ['Soda Water', 'Scotch']
    },
    {
        name: 'Campari Soda',
        ingredients: ['Soda Water', 'Campari']
    },
    {
        name: 'Aperol Spritz',
        ingredients: ['Aperol', 'Prosecco', 'Soda Water', 'Orange Slice']
    },

];














