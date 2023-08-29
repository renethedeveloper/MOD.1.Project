
const header = document.querySelector(".header");
const submit = document.querySelector("button");
const inputFromOption = document.querySelector("select");
const ingredientList = document.querySelector(".ingredientList");
const possibleDrinksList = document.querySelector("#possibleDrinks");
const clearButton = document.querySelector(".clear");



let ingredientArray = [];
const cocktailsThatYouCanMake = [];
const addedDrinks = [];


submit.addEventListener("click", function (e) {
    e.preventDefault();


    const ingredientValue = inputFromOption.value;

    if (!ingredientArray.includes(ingredientValue)) {

        const ingredient = document.createElement("li");

        ingredient.textContent = ingredientValue;

        ingredientList.appendChild(ingredient);

        ingredientArray.push(ingredientValue);

        console.log(ingredientArray);



        for (let cocktail of classicCocktails) {

            const cocktailIngredients = cocktail.ingredients;

            const hasAllIngredients = cocktailIngredients.every(ingredient =>
                ingredientArray.includes(ingredient)
            );

            if (hasAllIngredients) {
                cocktailsThatYouCanMake.push(cocktail.name);
            }
        }


        for (const drinkName of cocktailsThatYouCanMake) {
            if (!addedDrinks.includes(drinkName)) {
                const drinkItem = document.createElement("li");
                drinkItem.textContent = drinkName;
                possibleDrinksList.appendChild(drinkItem);
                drinkItem.style.color = "hotPink";
                addedDrinks.push(drinkName);
            }
        }}
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












