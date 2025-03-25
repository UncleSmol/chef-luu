/**
 * Culinary Works Data
 * Sample dishes created by Chef Luyanda Ndhlovu
 * Includes detailed information about each dish including ingredients, recipes, and chef's notes
 */

// Import images to ensure they're properly bundled by webpack
import chakalaka from '../../assets/images/dishes/chakalaka-chicken.jpg';
import trout from '../../assets/images/dishes/trout-citrus.jpg';
import malva from '../../assets/images/dishes/amarula-malva.jpg';
import pannaCotta from '../../assets/images/dishes/rooibos-panna-cotta.jpg';
import icedTea from '../../assets/images/dishes/rooibos-iced-tea.jpg';
import espressoMartini from '../../assets/images/dishes/espresso-martini.jpg';
import springRolls from '../../assets/images/dishes/bobotie-spring-rolls.jpg';
import scallops from '../../assets/images/dishes/peri-peri-scallops.jpg';

export const culinaryWorks = [
  // MAIN COURSES
  {
    id: 1,
    name: "Chakalaka Stuffed Chicken Roulade",
    category: "mains",
    categoryName: "Main Course",
    image: chakalaka,
    description: "A South African-inspired dish featuring chicken breast stuffed with traditional chakalaka, served with pap and seasonal vegetables.",
    prepTime: "30 mins",
    cookTime: "45 mins",
    difficulty: "Intermediate",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "1 cup chakalaka (South African vegetable relish)",
      "2 cups maize meal (for pap)",
      "4 cups water",
      "1 tbsp butter",
      "Salt and pepper to taste",
      "2 tbsp olive oil",
      "Assorted seasonal vegetables",
      "Fresh herbs for garnish"
    ],
    recipe: [
      "Butterfly each chicken breast and pound to even thickness.",
      "Season with salt and pepper on both sides.",
      "Spread chakalaka evenly over each chicken breast.",
      "Roll the chicken tightly and secure with kitchen twine.",
      "Heat olive oil in a pan and sear the chicken roulades on all sides.",
      "Transfer to a preheated oven (180°C) and bake for 25-30 minutes.",
      "Meanwhile, prepare the pap by bringing water to a boil, adding salt, and gradually stirring in maize meal.",
      "Reduce heat and simmer for 30 minutes, stirring occasionally.",
      "Finish pap with butter and adjust seasoning.",
      "Prepare seasonal vegetables as desired.",
      "Slice chicken roulades and serve over pap with vegetables and additional chakalaka."
    ],
    chefNotes: "This dish celebrates my South African heritage. The chakalaka adds a spicy, vibrant element that complements the tender chicken. For an authentic experience, serve with a side of traditional pap (maize porridge)."
  },
  {
    id: 2,
    name: "Pan-Seared Trout with Citrus Herb Butter",
    category: "mains",
    categoryName: "Main Course",
    image: trout,
    description: "Delicate trout fillets pan-seared to perfection, topped with a zesty citrus herb butter and served with roasted fingerling potatoes.",
    prepTime: "15 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    ingredients: [
      "4 fresh trout fillets, skin on",
      "2 tbsp olive oil",
      "Salt and freshly ground black pepper",
      "100g butter, softened",
      "Zest of 1 lemon and 1 orange",
      "2 tbsp mixed fresh herbs (dill, parsley, chives), finely chopped",
      "1 clove garlic, minced",
      "500g fingerling potatoes, halved",
      "2 tbsp olive oil",
      "Fresh herbs for garnish"
    ],
    recipe: [
      "Preheat oven to 200°C. Toss halved potatoes with olive oil, salt, and pepper. Roast for 20-25 minutes until golden and tender.",
      "Meanwhile, prepare the citrus herb butter by mixing softened butter with citrus zest, chopped herbs, minced garlic, and a pinch of salt.",
      "Pat the trout fillets dry and season both sides with salt and pepper.",
      "Heat olive oil in a large non-stick skillet over medium-high heat.",
      "Place the trout fillets skin-side down and cook for 3-4 minutes until the skin is crispy.",
      "Carefully flip and cook for another 2 minutes until just cooked through.",
      "Top each fillet with a generous dollop of the citrus herb butter and allow it to melt.",
      "Serve immediately with the roasted fingerling potatoes and a wedge of lemon."
    ],
    chefNotes: "The key to this dish is getting the skin perfectly crispy while keeping the flesh moist and tender. Don't move the fish around once it's in the pan - let the skin crisp up undisturbed. The citrus herb butter can be made ahead and refrigerated."
  },
  
  // DESSERTS
  {
    id: 3,
    name: "Amarula Malva Pudding with Gold Dust",
    category: "desserts",
    categoryName: "Dessert",
    image: malva,
    description: "A luxurious twist on the traditional South African dessert, infused with Amarula cream liqueur and finished with edible gold dust.",
    prepTime: "20 mins",
    cookTime: "45 mins",
    difficulty: "Intermediate",
    ingredients: [
      "1 cup sugar",
      "2 large eggs",
      "1 tbsp apricot jam",
      "1 cup all-purpose flour",
      "1 tsp baking soda",
      "Pinch of salt",
      "1 tbsp butter",
      "1 tbsp vinegar",
      "1 cup milk",
      "For the sauce: 1 cup heavy cream, 1/2 cup butter, 1/2 cup sugar, 1/4 cup Amarula cream liqueur, 1/4 cup hot water",
      "Edible gold dust for garnish",
      "Fresh berries and mint for serving"
    ],
    recipe: [
      "Preheat oven to 180°C and grease a baking dish.",
      "Beat sugar and eggs until light and fluffy.",
      "Add apricot jam and mix well.",
      "Sift flour, baking soda, and salt together.",
      "Melt butter and add vinegar and milk.",
      "Alternately add dry ingredients and milk mixture to the egg mixture, mixing well after each addition.",
      "Pour batter into prepared dish and bake for 30-35 minutes until golden and springy to touch.",
      "For the sauce, combine all sauce ingredients except Amarula in a saucepan and bring to a boil.",
      "Remove from heat and stir in Amarula liqueur.",
      "Pour hot sauce over the pudding as soon as it comes out of the oven.",
      "Let it stand for 10 minutes to absorb the sauce.",
      "Before serving, dust with edible gold dust and garnish with fresh berries and mint."
    ],
    chefNotes: "This is my elegant take on a beloved South African classic. The Amarula adds a creamy, caramel-like flavor that elevates the traditional malva pudding. The gold dust creates a stunning visual effect that makes this dessert perfect for special occasions."
  },
  {
    id: 4,
    name: "Rooibos Tea Panna Cotta with Cape Gooseberry Compote",
    category: "desserts",
    categoryName: "Dessert",
    image: pannaCotta,
    description: "Silky smooth panna cotta infused with South African rooibos tea, paired with a tangy-sweet Cape gooseberry compote.",
    prepTime: "20 mins",
    cookTime: "10 mins (plus 4 hours setting time)",
    difficulty: "Intermediate",
    ingredients: [
      "500ml heavy cream",
      "100ml milk",
      "80g sugar",
      "3 rooibos tea bags",
      "7g gelatin sheets (or 2 tsp powdered gelatin)",
      "1 tsp vanilla extract",
      "For the compote: 200g Cape gooseberries (physalis), 50g sugar, 2 tbsp water, 1 star anise, 1 cinnamon stick",
      "Fresh mint leaves for garnish"
    ],
    recipe: [
      "If using gelatin sheets, soak in cold water for 5 minutes.",
      "In a saucepan, combine cream, milk, and sugar. Bring to a simmer.",
      "Add rooibos tea bags, remove from heat, and let steep for 10 minutes.",
      "Remove tea bags, squeezing out excess liquid.",
      "Return mixture to low heat. If using powdered gelatin, sprinkle over 2 tbsp cold water, let stand for 5 minutes, then add to the warm cream mixture.",
      "If using soaked gelatin sheets, squeeze out excess water and add to the warm cream mixture.",
      "Stir until gelatin is completely dissolved.",
      "Add vanilla extract and stir well.",
      "Pour into ramekins or glasses and refrigerate for at least 4 hours or overnight.",
      "For the compote, remove husks from gooseberries and rinse.",
      "Combine gooseberries, sugar, water, star anise, and cinnamon in a saucepan.",
      "Simmer for 5-7 minutes until berries start to burst and sauce thickens slightly.",
      "Remove spices and let cool completely.",
      "To serve, spoon compote over set panna cotta and garnish with fresh mint."
    ],
    chefNotes: "The earthy, slightly sweet flavor of rooibos tea pairs beautifully with the tart Cape gooseberries. For a more dramatic presentation, unmold the panna cotta onto plates before topping with the compote. The dessert can be made up to 2 days in advance."
  },
  
  // BEVERAGES
  {
    id: 5,
    name: "Spiced Rooibos & Cinnamon Iced Tea",
    category: "drinks",
    categoryName: "Beverage",
    image: icedTea,
    description: "A refreshing South African-inspired iced tea made with rooibos, cinnamon, and citrus, perfect for hot summer days.",
    prepTime: "10 mins",
    cookTime: "5 mins (plus cooling time)",
    difficulty: "Easy",
    ingredients: [
      "6 rooibos tea bags",
      "1.5 liters boiling water",
      "2 cinnamon sticks",
      "4 whole cloves",
      "2 star anise",
      "1 orange, sliced",
      "1 lemon, sliced",
      "60ml honey or to taste",
      "Fresh mint leaves",
      "Ice cubes",
      "Orange and lemon slices for garnish"
    ],
    recipe: [
      "Place tea bags, cinnamon sticks, cloves, and star anise in a large heat-proof pitcher or container.",
      "Pour boiling water over and let steep for 10 minutes.",
      "Remove tea bags and stir in honey until dissolved.",
      "Add orange and lemon slices.",
      "Allow to cool to room temperature, then refrigerate until cold (at least 2 hours).",
      "Serve over ice with fresh mint leaves and additional citrus slices.",
      "For a special touch, garnish with a cinnamon stick stirrer."
    ],
    chefNotes: "This caffeine-free iced tea showcases rooibos, a staple South African herbal tea known for its health benefits. The spices add warmth and complexity, while the citrus brings brightness. For an adult version, add a splash of South African Amarula cream liqueur or bourbon."
  },
  {
    id: 6,
    name: "Cape Velvet Espresso Martini",
    category: "drinks",
    categoryName: "Beverage",
    image: espressoMartini,
    description: "A sophisticated cocktail blending freshly brewed espresso with Cape Velvet cream liqueur for a South African twist on the classic Espresso Martini.",
    prepTime: "5 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    ingredients: [
      "50ml vodka",
      "25ml Cape Velvet cream liqueur (or substitute with Amarula)",
      "25ml freshly brewed espresso, cooled",
      "15ml simple syrup",
      "Ice cubes",
      "3 coffee beans for garnish"
    ],
    recipe: [
      "Fill a cocktail shaker with ice.",
      "Add vodka, Cape Velvet liqueur, cooled espresso, and simple syrup.",
      "Shake vigorously for 20 seconds until well-chilled and frothy.",
      "Strain into a chilled martini glass.",
      "Garnish with three coffee beans placed in the center of the foam (representing health, wealth, and happiness)."
    ],
    chefNotes: "The key to a perfect Espresso Martini is achieving that beautiful frothy top, which comes from shaking the cocktail vigorously. The Cape Velvet liqueur adds a creamy, caramel note that complements the coffee beautifully. For best results, use freshly brewed espresso that has been allowed to cool slightly."
  },
  
  // APPETIZERS
  {
    id: 7,
    name: "Bobotie Spring Rolls with Apricot Chutney",
    category: "appetizers",
    categoryName: "Appetizer",
    image: springRolls,
    description: "A fusion appetizer featuring traditional South African bobotie wrapped in crispy spring roll wrappers, served with tangy apricot chutney.",
    prepTime: "30 mins",
    cookTime: "20 mins",
    difficulty: "Intermediate",
    ingredients: [
      "500g ground beef or lamb",
      "1 onion, finely chopped",
      "2 garlic cloves, minced",
      "1 tbsp curry powder",
      "1 tsp turmeric",
      "1 tsp ground coriander",
      "1/2 tsp ground cumin",
      "2 tbsp apricot jam",
      "2 tbsp mango chutney",
      "2 tbsp raisins, soaked in hot water and drained",
      "2 tbsp slivered almonds, toasted",
      "1 slice bread, soaked in milk and mashed",
      "1 egg",
      "Salt and pepper to taste",
      "12-15 spring roll wrappers",
      "1 egg, beaten (for sealing)",
      "Vegetable oil for frying",
      "For the chutney: 200g dried apricots, 1 onion, 1 apple, 100ml vinegar, 100g brown sugar, 1 tsp ginger, 1 cinnamon stick, pinch of salt"
    ],
    recipe: [
      "Heat oil in a pan and sauté onion until translucent.",
      "Add garlic and spices, cook for 1 minute until fragrant.",
      "Add ground meat and cook until browned.",
      "Stir in apricot jam, mango chutney, raisins, and almonds.",
      "Add the soaked bread and mix well.",
      "Beat in the egg and season with salt and pepper.",
      "Simmer for 10 minutes, then remove from heat and cool completely.",
      "For the chutney, chop apricots, onion, and apple. Combine with remaining ingredients in a saucepan.",
      "Simmer chutney for 30-40 minutes until thick. Remove cinnamon stick and cool.",
      "Place 2 tablespoons of bobotie filling on each spring roll wrapper.",
      "Fold sides in and roll up tightly, sealing the edge with beaten egg.",
      "Heat oil to 180°C and fry spring rolls until golden brown and crispy.",
      "Drain on paper towels and serve hot with apricot chutney."
    ],
    chefNotes: "These spring rolls are a perfect example of fusion cuisine, combining the beloved South African bobotie with Asian-inspired presentation. The filling can be made a day ahead to develop flavors. For a lighter version, these can be baked at 200°C for 15-20 minutes instead of fried."
  },
  {
    id: 8,
    name: "Seared Scallops with Peri-Peri Butter and Microgreens",
    category: "appetizers",
    categoryName: "Appetizer",
    image: scallops,
    description: "Perfectly seared scallops topped with spicy peri-peri butter and garnished with delicate microgreens for an elegant starter.",
    prepTime: "15 mins",
    cookTime: "5 mins",
    difficulty: "Intermediate",
    ingredients: [
      "12 large sea scallops, patted dry",
      "Salt and freshly ground black pepper",
      "2 tbsp neutral oil with high smoke point (grapeseed or avocado)",
      "For the peri-peri butter: 100g unsalted butter (softened), 2 tsp peri-peri sauce, 1 tsp lemon zest, 1 tsp fresh lemon juice, 1 clove garlic (minced), 1 tbsp fresh parsley (chopped), pinch of salt",
      "Assorted microgreens for garnish",
      "Lemon wedges for serving"
    ],
    recipe: [
      "First, make the peri-peri butter by combining all butter ingredients in a bowl. Mix well.",
      "Transfer the butter mixture onto a piece of plastic wrap, roll into a log shape, and refrigerate until firm.",
      "Remove the small side muscle from the scallops if attached.",
      "Pat scallops very dry with paper towels (this is crucial for a good sear).",
      "Season scallops with salt and pepper on both sides.",
      "Heat oil in a large skillet over high heat until almost smoking.",
      "Add scallops to the pan, making sure they're not touching each other.",
      "Sear for 1.5-2 minutes without moving them, until a golden crust forms.",
      "Flip and cook for another 1-1.5 minutes until just cooked through.",
      "Remove from heat immediately to avoid overcooking.",
      "Slice the chilled peri-peri butter into rounds.",
      "Place scallops on serving plates and top each with a slice of the peri-peri butter.",
      "Garnish with microgreens and serve with lemon wedges."
    ],
    chefNotes: "The secret to perfectly seared scallops is ensuring they're completely dry before cooking and using a very hot pan. The peri-peri butter adds a South African-inspired heat that complements the sweet scallops beautifully. This dish is all about timing - have everything ready before you start cooking the scallops as they only take minutes to prepare."
  }
];
