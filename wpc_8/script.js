const recipe = {
    "@context":
      "https://www.simplyrecipes.com/recipes/frozen_siesta_cocktail/",
    "@type": "Recipe",
    author: "Maggie Hoffman",
    cookTime: "PREP TIME: 5 mins COOK TIME: 0 mins TOTAL TIME: 5 mins ",

    datePublished: "2021-02-16",
    description:
      "This Strawberry-Basil Moscow Mule is a fruity twist on the classic! Mixed with vodka and spicy ginger beer, it's a perfect cocktail for a hot summer afternoon.",

    recipeIngredient: [
      "INGREDIENT:"],


    info: [
     
      "1/3 water, 1/3 cup sugar, 4 ounces blanco tequila, 1 1/2 ounces chilled 1:1 simple syrup, 1 1/2 ounces Campari, 1 1/2 ounces fresh lime juice, 1 1/2 ounces fresh grapefruit juice, 3 cups ice, Lime wedge and 2 tablespoons kosher salt, for rimming the glass"

 
    ],
  
    name: "Frozen Siesta Cocktail",
    recipeInstructions: [
      " INSTRUCTIONS: "] ,
    
    more: [
      "Make the simple syrup: Mix 1/3 cup warm water and 1/3 cup sugar in a small mason jar. Seal well and shake until completely dissolved. Refrigerate until well chilled, and up to 1 week. Assemble the cocktail, then freeze: Combine tequila, chilled simple syrup, Campari, lime juice, and grapefruit juice in a resealable container. Seal well and place in freezer for at least 4 hours, and up to 1 day. Rim the glasses: Place kosher salt on a small plate. Rub a lime wedge around the rims of 2 rocks glasses, then dip the rims in salt. Place glasses in the freezer to chill. Blend the cocktail: When ready to serve, add the chilled cocktail mix and 3 cups of ice to a blender. Process until smooth, about 25 seconds. Pour into rimmed glasses and serve immediately. Enjoy!"],
      
  



    recipeYield: "SERVINGS: 2 cocktails",
    ending: "Enjoy!"
  };
  
  const titleElement = document.getElementById("title");
  
  titleElement.innerText = recipe.name;
  
  document.getElementById("description").innerText = recipe.description;
  
  document.getElementById("author").innerText = recipe.author;
  
  document.getElementById("cookTime").innerText = recipe.cookTime;
  
  document.getElementById("datePublished").innerText = recipe.datePublished;
  
  document.getElementById("recipeYield").innerText = recipe.recipeYield;
  
  document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;

  document.getElementById("info").innerText = recipe.info;
  
  document.getElementById("recipeInstructions").innerText =
    recipe.recipeInstructions;

  document.getElementById("more").innerText =recipe.more;
  
  document.getElementById("ending").innerText = recipe.ending;
  