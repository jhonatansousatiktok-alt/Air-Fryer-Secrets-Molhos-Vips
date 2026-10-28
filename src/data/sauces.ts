import { Sauce } from '../types';
import { sauceImageMap } from './recipeImages';

export const saucesData: Sauce[] = [
  // Categoria 1: Ícones de Fast-Food (1 a 10)
  {
    id: 1,
    categoria: 1,
    titulo: "ShackBurger Secret Sauce",
    titulo_en: "ShackBurger Secret Sauce",
    titulo_es: "Salsa Secreta ShackBurger",
    estilo: "Diner New York",
    estilo_en: "New York Diner",
    estilo_es: "Diner Neoyorquino",
    tempoPreparo: 5,
    picancia: 1,
    descricao: "O lendário molho rosado de smash burger de Nova York com base de maionese, mostarda Dijon, picles picadinho e páprica defumada.",
    descricao_en: "The iconic NYC smash burger pink sauce featuring premium mayo, Dijon mustard, minced dill relish, and smoked paprika.",
    descricao_es: "La legendaria salsa rosada de smash burger de Nueva York con base de mayonesa, mostaza Dijon, pepinillos y pimentón ahumado.",
    ingredientes: [
      "1/2 xícara de maionese de qualidade",
      "1 colher de sopa de mostarda amarela americana",
      "1/2 colher de chá de mostarda Dijon",
      "1 colher de sopa de relish de picles picado fino",
      "1/4 colher de chá de suco do picles",
      "1/4 colher de chá de páprica defumada",
      "1 pitada de alho em pó e pimenta caiena"
    ],
    ingredientes_en: [
      "1/2 cup quality mayonnaise",
      "1 tbsp yellow mustard",
      "1/2 tsp Dijon mustard",
      "1 tbsp minced dill pickle relish",
      "1/4 tsp pickle brine",
      "1/4 tsp smoked paprika",
      "Pinch of garlic powder and cayenne pepper"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa de buena calidad",
      "1 cda de mostaza amarilla",
      "1/2 cdta de mostaza Dijon",
      "1 cda de relish o pepinillo finamente picado",
      "1/4 cdta de jugo de pepinillo",
      "1/4 cdta de pimentón ahumado",
      "Pizca de ajo en polvo y cayena"
    ],
    passos: [
      "Em uma tigela pequena, adicione a maionese, mostardas e o relish picado.",
      "Incorpore a páprica defumada, alho em pó e o suco do picles.",
      "Misture com batedor de arame até ficar homogêneo e rosado.",
      "Leve à geladeira por 15 minutos para apurar os sabores antes de servir."
    ],
    passos_en: [
      "In a small bowl, whisk together mayo, yellow mustard, and relish.",
      "Blend in smoked paprika, garlic powder, and pickle brine.",
      "Mix until silky smooth and rosy.",
      "Chill for 15 minutes before slathering on warm smash burgers or tenders."
    ],
    passos_es: [
      "En un tazón pequeño, mezcla la mayonesa, mostazas y el relish.",
      "Incorpora el pimentón ahumado, el ajo en polvo y el jugo de pepinillo.",
      "Bate hasta obtener una textura sedosa y rosada.",
      "Refrigera 15 minutos para intensificar los sabores antes de servir."
    ],
    receitasCompativeisIds: [41, 42, 45, 1, 5]
  },
  {
    id: 2,
    categoria: 1,
    titulo: "Chick-Style Honey Mustard Smoke",
    titulo_en: "Chick-Style Honey Mustard Smoke",
    titulo_es: "Salsa Estilo Chick-Fil",
    estilo: "Frango Frito Sulista",
    estilo_en: "Southern Fried Chicken",
    estilo_es: "Pollo Frito Sureño",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "O molho mais viciante da América do Norte: fusão agridoce perfeita entre molho barbecue defumado, mostarda amarela e mel puro.",
    descricao_en: "America's most addictive dipping sauce: a heavenly golden blend of smoky barbecue, yellow mustard, and pure floral honey.",
    descricao_es: "La salsa más adictiva de EE.UU.: unión agridulce perfecta entre salsa barbecue ahumada, mostaza amarilla y miel pura.",
    ingredientes: [
      "1/2 xícara de maionese",
      "2 colheres de sopa de mel puro",
      "1 colher de sopa de molho barbecue defumado (Hickory)",
      "2 colheres de chá de mostarda amarela",
      "1 colher de chá de suco de limão fresco"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "2 tbsp pure honey",
      "1 tbsp smoky hickory barbecue sauce",
      "2 tsp yellow mustard",
      "1 tsp fresh lemon juice"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "2 cdas de miel pura",
      "1 cda de salsa barbecue ahumada",
      "2 cdtas de mostaza amarilla",
      "1 cdta de jugo de limón fresco"
    ],
    passos: [
      "Combine o mel, o molho barbecue e a mostarda até dissolver bem.",
      "Adicione a maionese e o suco de limão aos poucos, misturando vigorosamente.",
      "Deixe descansar na geladeira por 20 minutos."
    ],
    passos_en: [
      "Whisk honey, BBQ sauce, and yellow mustard together until smooth.",
      "Gradually whisk in mayonnaise and lemon juice.",
      "Chill for 20 minutes to develop its iconic amber gold sheen."
    ],
    passos_es: [
      "Mezcla la miel, la salsa BBQ y la mostaza hasta integrar.",
      "Agrega la mayonesa y el jugo de limón batiendo enérgicamente.",
      "Deja reposar 20 minutos en refrigeración."
    ],
    receitasCompativeisIds: [42, 13, 2, 45, 12]
  },
  {
    id: 3,
    categoria: 1,
    titulo: "Cane's Legendary Dip",
    titulo_en: "Cane's Legendary Dip",
    titulo_es: "Dip Legendario Cane's",
    estilo: "Louisiana Dip Especial",
    estilo_en: "Louisiana Chicken Tender Dip",
    estilo_es: "Dip Especial de Louisiana",
    tempoPreparo: 5,
    picancia: 1,
    descricao: "O segredo do culto dos chicken tenders de Louisiana. Notas de molho inglês, pimenta-do-reino moída na hora e alho salgado.",
    descricao_en: "The cult-favorite Louisiana tender dip loaded with Worcestershire notes, coarse black pepper, and salted garlic.",
    descricao_es: "El secreto de culto para chicken tenders en Louisiana. Toques de salsa inglesa, pimienta negra molida y ajo.",
    ingredientes: [
      "1/2 xícara de maionese",
      "1/4 xícara de ketchup tradicional",
      "1 colher de sopa de molho inglês (Worcestershire)",
      "1 colher de chá de alho em pó",
      "1/2 colher de chá de sal temperado",
      "1/2 colher de sopa de pimenta-do-reino preta moída na hora"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "1/4 cup ketchup",
      "1 tbsp Worcestershire sauce",
      "1 tsp garlic powder",
      "1/2 tsp seasoned salt",
      "1/2 tbsp freshly ground coarse black pepper"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "1/4 taza de kétchup tradicional",
      "1 cda de salsa inglesa (Worcestershire)",
      "1 cdta de ajo en polvo",
      "1/2 cdta de sal condimentada",
      "1/2 cda de pimienta negra recién molida"
    ],
    passos: [
      "Bata a maionese com o ketchup e o molho inglês.",
      "Acrescente o alho em pó, o sal temperado e a pimenta-do-reino abundante.",
      "Importante: Guarde na geladeira por pelo menos 1 hora para o sabor da pimenta e do alho perfumar o molho."
    ],
    passos_en: [
      "Whisk mayo, ketchup, and Worcestershire together.",
      "Fold in garlic powder, seasoned salt, and plenty of cracked black pepper.",
      "Key step: Refrigerate for at least 1 hour so the pepper and garlic bloom fully."
    ],
    passos_es: [
      "Bate la mayonesa con el kétchup y la salsa inglesa.",
      "Agrega el ajo en polvo, la sal condimentada y abundante pimienta negra.",
      "Paso clave: Reposa en nevera al menos 1 hora para que la pimienta y el ajo infusionen."
    ],
    receitasCompativeisIds: [42, 45, 1, 10, 15]
  },
  {
    id: 4,
    categoria: 1,
    titulo: "Big Icon Secret Burger Sauce",
    titulo_en: "Big Icon Secret Burger Sauce",
    titulo_es: "Salsa Big Icon Especial",
    estilo: "Fast-Food Clássico",
    estilo_en: "Classic Fast-Food Burger",
    estilo_es: "Clásico Fast-Food Burger",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "O sabor clássico inconfundível do hambúrguer de dois andares mais vendido do planeta, ajustado para air fryer snacks.",
    descricao_en: "The unmistakable sweet-tangy taste of the world's most famous double-decker burger, elevated for air fryer snacks.",
    descricao_es: "El sabor inconfundible de la hamburguesa de dos pisos más famosa del planeta, adaptado para snacks en air fryer.",
    ingredientes: [
      "1/2 xícara de maionese",
      "2 colheres de sopa de molho French ou Thousand Island",
      "1 colher de sopa de relish de pepino doce picado",
      "1 colher de chá de vinagre branco",
      "1 colher de chá de açúcar cristal",
      "1/2 colher de chá de cebola desidratada fininha",
      "1/2 colher de chá de páprica doce"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "2 tbsp French or Thousand Island dressing",
      "1 tbsp sweet pickle relish",
      "1 tsp white vinegar",
      "1 tsp granulated sugar",
      "1/2 tsp dried minced onion",
      "1/2 tsp sweet paprika"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "2 cdas de aderezo Francés o Thousand Island",
      "1 cda de relish dulce de pepinillos",
      "1 cdta de vinagre blanco",
      "1 cdta de azúcar",
      "1/2 cdta de cebolla deshidratada molida",
      "1/2 cdta de pimentón dulce"
    ],
    passos: [
      "Hidrate a cebola desidratada no vinagre branco por 2 minutos.",
      "Junte a maionese, o relish, o molho french e os temperos secos.",
      "Misture até formar um creme sedoso salmão-dourado."
    ],
    passos_en: [
      "Soak the dried onion in white vinegar for 2 minutes.",
      "Add mayo, relish, french dressing, sugar, and paprika.",
      "Whisk until creamy and uniform peach-orange."
    ],
    passos_es: [
      "Hidrata la cebolla deshidratada en el vinagre por 2 minutos.",
      "Agrega la mayonesa, relish, aderezo francés y especias.",
      "Bate hasta lograr una crema naranja suave."
    ],
    receitasCompativeisIds: [41, 45, 51, 3, 5]
  },
  {
    id: 5,
    categoria: 1,
    titulo: "Outback Bloom Onion Sauce (Campfire Dip)",
    titulo_en: "Outback Bloom Onion Campfire Sauce",
    titulo_es: "Salsa Campfire para Cebolla Outback",
    estilo: "Steakhouse Australiano/EUA",
    estilo_en: "Steakhouse Campfire",
    estilo_es: "Steakhouse Australiano",
    tempoPreparo: 5,
    picancia: 2,
    descricao: "O molho picante e aveludado servido com a flor de cebola gigante e anéis crocantes na Air Fryer.",
    descricao_en: "The velvety, kick-packed horseradish dip famously paired with giant blooming onions and crispy rings.",
    descricao_es: "La salsa aterciopelada y picante servida con los aros crujientes y cebollas doradas.",
    ingredientes: [
      "1/2 xícara de maionese",
      "2 colheres de sopa de creme de leite espesso ou sour cream",
      "2 colheres de sopa de ketchup picante",
      "1 colher de sopa de raiz-forte cremosa (horseradish)",
      "1/3 colher de chá de páprica picante",
      "1/4 colher de chá de orégano seco e pimenta caiena",
      "Sal e pimenta a gosto"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "2 tbsp sour cream or heavy cream",
      "2 tbsp spicy ketchup",
      "1 tbsp prepared creamy horseradish",
      "1/3 tsp hot paprika",
      "1/4 tsp dried oregano and cayenne",
      "Salt and pepper to taste"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "2 cdas de sour cream o crema espesa",
      "2 cdas de kétchup picante",
      "1 cda de rábano picante cremoso (horseradish)",
      "1/3 cdta de pimentón picante",
      "1/4 cdta de orégano seco y cayena",
      "Sal y pimienta al gusto"
    ],
    passos: [
      "Misture a maionese com o sour cream até homogeneizar.",
      "Incorpore a raiz-forte, o ketchup e todas as ervas aromáticas.",
      "Prove a picância e ajuste a pimenta caiena a gosto."
    ],
    passos_en: [
      "Blend mayonnaise and sour cream until velvety.",
      "Stir in horseradish, spicy ketchup, oregano, and cayenne.",
      "Taste and adjust heat level with extra cayenne if desired."
    ],
    passos_es: [
      "Mezcla la mayonesa y el sour cream.",
      "Añade el rábano picante, el kétchup y las hierbas secas.",
      "Prueba y ajusta el nivel picante al gusto."
    ],
    receitasCompativeisIds: [43, 45, 1, 15, 22]
  },
  {
    id: 6,
    categoria: 1,
    titulo: "Popeyes Cajun Ranch",
    titulo_en: "Popeyes Cajun Ranch",
    titulo_es: "Cajun Ranch Popeyes",
    estilo: "New Orleans Cajun",
    estilo_en: "New Orleans Cajun",
    estilo_es: "Cajun de Nueva Orleans",
    tempoPreparo: 5,
    picancia: 2,
    descricao: "Ranch rústico temperado com o blend cajun autêntico de Nova Orleans: alho, cebola, páprica, tomilho e pimenta branca.",
    descricao_en: "Rustic buttermilk ranch kicked up with authentic New Orleans blackening cajun spices, thyme, and white pepper.",
    descricao_es: "Ranch rústico con la mezcla cajún de Nueva Orleans: ajo, cebolla, pimentón, tomillo y pimienta blanca.",
    ingredientes: [
      "1/2 xícara de buttermilk (ou iogurte natural + limão)",
      "1/3 xícara de maionese",
      "1 colher de chá de tempero cajun artesanal",
      "1 colher de chá de cebolinha picada",
      "1/2 colher de chá de tomilho fresco picado",
      "1 dente de alho ralado fininho",
      "Suco de meio limão"
    ],
    ingredientes_en: [
      "1/2 cup buttermilk",
      "1/3 cup mayonnaise",
      "1 tsp cajun seasoning blend",
      "1 tsp finely chopped chives",
      "1/2 tsp fresh thyme",
      "1 garlic clove, finely grated",
      "Juice of 1/2 lemon"
    ],
    ingredientes_es: [
      "1/2 taza de buttermilk o yogur natural con gotas de limón",
      "1/3 taza de mayonesa",
      "1 cdta de sazonador cajún",
      "1 cdta de cebollín picado",
      "1/2 cdta de tomillo fresco",
      "1 diente de ajo rallado",
      "Jugo de medio limón"
    ],
    passos: [
      "Emulsione o buttermilk com a maionese com um garfo.",
      "Acrescente o tempero cajun, o alho ralado e o suco cítrico.",
      "Finalize com tomilho e cebolinha fresca e sirva gelado."
    ],
    passos_en: [
      "Whisk buttermilk and mayonnaise until creamy.",
      "Stir in cajun seasoning, grated garlic, and lemon juice.",
      "Finish with fresh thyme and chives; serve cold."
    ],
    passos_es: [
      "Emulsiona el buttermilk y la mayonesa con un batidor.",
      "Añade el condimento cajún, ajo rallado y jugo de limón.",
      "Decora con tomillo y cebollín fresco y sirve frío."
    ],
    receitasCompativeisIds: [42, 23, 11, 45, 12]
  },
  {
    id: 7,
    categoria: 1,
    titulo: "Wendy's Creamy Sriracha",
    titulo_en: "Wendy's Creamy Sriracha",
    titulo_es: "Sriracha Cremosa Wendy's",
    estilo: "Spicy Creamy Dip",
    estilo_en: "Spicy Creamy Dip",
    estilo_es: "Dip Picante Cremoso",
    tempoPreparo: 3,
    picancia: 2,
    descricao: "Equilíbrio arrebatador entre o picante fermentado da sriracha e uma maionese cítrica ultra aveludada.",
    descricao_en: "A vibrant balance between the fermented tang of sriracha chili and rich, velvety citrus mayo.",
    descricao_es: "Equilibrio irresistible entre el picor fermentado de la sriracha y una mayonesa cítrica ultra cremosa.",
    ingredientes: [
      "1/2 xícara de maionese",
      "2 colheres de sopa de molho sriracha autêntico",
      "1 colher de chá de mel ou xarope de agave",
      "1/2 colher de chá de suco de limão",
      "1 pitada de alho granulado"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "2 tbsp authentic sriracha sauce",
      "1 tsp honey or agave nectar",
      "1/2 tsp fresh lime juice",
      "Pinch of granulated garlic"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "2 cdas de salsa sriracha",
      "1 cdta de miel o agave",
      "1/2 cdta de jugo de lima o limón",
      "Pizca de ajo granulado"
    ],
    passos: [
      "Coloque todos os ingredientes numa tigela e bata por 1 minuto.",
      "Ajuste a sriracha caso deseje maior intensidade picante."
    ],
    passos_en: [
      "Combine all ingredients in a bowl and whisk vigorously for 1 minute.",
      "Adjust sriracha to dial in your preferred heat level."
    ],
    passos_es: [
      "Combina todos los ingredientes en un tazón y bate por 1 minuto.",
      "Ajusta la sriracha según la intensidad picante que desees."
    ],
    receitasCompativeisIds: [12, 14, 42, 33, 44]
  },
  {
    id: 8,
    categoria: 1,
    titulo: "In-N-Out Animal Style Spread",
    titulo_en: "In-N-Out Animal Style Spread",
    titulo_es: "Spread Animal Style de California",
    estilo: "Costa Oeste Californiana",
    estilo_en: "West Coast California",
    estilo_es: "Costa Oeste Californiana",
    tempoPreparo: 7,
    picancia: 0,
    descricao: "O icônico molho dos segredos da Califórnia: Thousand island enriquecido com cebola caramelizada bem douradinha.",
    descricao_en: "The secret sauce that made California burger stands legendary: rich spread studded with golden caramelized onions.",
    descricao_es: "La icónica salsa secreta de California: crema Thousand Island enriquecida con cebolla caramelizada dorada.",
    ingredientes: [
      "1/2 xícara de maionese",
      "3 colheres de sopa de ketchup",
      "2 colheres de sopa de relish de picles picado",
      "1/2 colher de chá de vinagre de maçã",
      "2 colheres de sopa de cebola picada caramelizada lentamente",
      "Sal e pimenta a gosto"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "3 tbsp ketchup",
      "2 tbsp sweet pickle relish",
      "1/2 tsp apple cider vinegar",
      "2 tbsp slow-caramelized finely chopped onion",
      "Salt and black pepper to taste"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "3 cdas de kétchup",
      "2 cdas de relish de pepinillo",
      "1/2 cdta de vinagre de manzana",
      "2 cdas de cebolla caramelizada picada fina",
      "Sal y pimienta al gusto"
    ],
    passos: [
      "Frite a cebola picadinha na manteiga até dourar profundamente (ou na air fryer a 180°C por 6 min).",
      "Deixe esfriar e misture com a maionese, ketchup, relish e o vinagre.",
      "Espalhe generosamente sobre batatas rústicas e hambúrgueres."
    ],
    passos_en: [
      "Caramelize diced onions until deep golden brown.",
      "Let cool, then fold into mayo, ketchup, relish, and apple cider vinegar.",
      "Smother over warm fries and juicy burgers."
    ],
    passos_es: [
      "Carameliza cebolla picadita en mantequilla hasta que dore intenso.",
      "Deja enfriar y mézclala con la mayonesa, kétchup, relish y vinagre.",
      "Unta sobre papas fritas y hamburguesas calientes."
    ],
    receitasCompativeisIds: [41, 45, 53, 5, 10]
  },
  {
    id: 9,
    categoria: 1,
    titulo: "Mojo Mayo Diner Blend",
    titulo_en: "Mojo Mayo Diner Blend",
    titulo_es: "Mojo Mayo Estilo Diner",
    estilo: "Miami Floridense / Cubano",
    estilo_en: "Miami Florida / Cuban Diner",
    estilo_es: "Miami / Cubano Diner",
    tempoPreparo: 4,
    picancia: 1,
    descricao: "Fusão ensolarada de Miami: alho assado, suco de laranja azeda ou limão, cominho e coentro fresco na maionese.",
    descricao_en: "Sunny Miami flavor bomb: roasted garlic, bitter orange/lime splash, cumin, and fresh cilantro whisked into mayo.",
    descricao_es: "Sabor soleado de Miami: ajo asado, naranja agria/lima, comino y cilantro fresco en mayonesa suave.",
    ingredientes: [
      "1/2 xícara de maionese",
      "2 dentes de alho esmagados",
      "1 colher de sopa de suco de laranja",
      "1 colher de chá de suco de limão",
      "1/4 colher de chá de cominho em pó",
      "1 colher de sopa de coentro fresco picado"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "2 garlic cloves, crushed",
      "1 tbsp orange juice",
      "1 tsp lime juice",
      "1/4 tsp ground cumin",
      "1 tbsp fresh cilantro, finely chopped"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "2 dientes de ajo machacados",
      "1 cda de jugo de naranja",
      "1 cdta de jugo de lima o limón",
      "1/4 cdta de comino molido",
      "1 cda de cilantro fresco picado"
    ],
    passos: [
      "Esmague o alho com uma pitada de sal para formar uma pasta.",
      "Adicione os sucos cítricos, o cominho e a maionese.",
      "Mexa até ficar aveludado e finalize com o coentro fresco."
    ],
    passos_en: [
      "Mash garlic with a pinch of coarse salt into a paste.",
      "Whisk in citrus juices, cumin, and mayonnaise.",
      "Fold in fresh cilantro and chill before dipping."
    ],
    passos_es: [
      "Tritura el ajo con sal hasta formar una pasta.",
      "Agrega los jugos cítricos, el comino y la mayonesa.",
      "Mezcla hasta que quede sedoso e incorpora el cilantro."
    ],
    receitasCompativeisIds: [22, 23, 41, 14, 5]
  },
  {
    id: 10,
    categoria: 1,
    titulo: "Smoky Bacon Jam",
    titulo_en: "Smoky Bacon Jam Dip",
    titulo_es: "Mermelada Ahumada de Bacon",
    estilo: "Smokehouse Gourmet",
    estilo_en: "Artisanal Smokehouse",
    estilo_es: "Smokehouse Artesanal",
    tempoPreparo: 12,
    picancia: 1,
    descricao: "Geleia artesanal de bacon crocante, açúcar mascavo, cebola caramelizada e toque de café ou vinagre balsâmico.",
    descricao_en: "Gourmet savory jam made of crispy bacon bits, dark brown sugar, sweet onions, and a splash of balsamic glaze.",
    descricao_es: "Mermelada salada gourmet con trozos crujientes de tocino, azúcar moreno, cebolla caramelizada y balsámico.",
    ingredientes: [
      "150g de bacon picadinho em cubos mínimos",
      "1 cebola média roxa picadinha",
      "2 dentes de alho picados",
      "2 colheres de sopa de açúcar mascavo",
      "1 colher de sopa de vinagre balsâmico ou de maçã",
      "1 colher de sopa de café coado forte (opcional)",
      "Pimenta-do-reino a gosto"
    ],
    ingredientes_en: [
      "150g bacon, finely diced",
      "1 medium red onion, minced",
      "2 garlic cloves, minced",
      "2 tbsp dark brown sugar",
      "1 tbsp balsamic or apple cider vinegar",
      "1 tbsp strong brewed coffee (optional secret)",
      "Cracked black pepper to taste"
    ],
    ingredientes_es: [
      "150g de tocino (bacon) en cubitos finos",
      "1 cebolla morada picadita",
      "2 dientes de ajo picados",
      "2 cdas de azúcar moreno",
      "1 cda de vinagre balsámico o de manzana",
      "1 cda de café filtrado cargado (opcional)",
      "Pimienta negra al gusto"
    ],
    passos: [
      "Coloque o bacon na air fryer a 180°C por 7 minutos até dourar e soltar a gordura.",
      "Numa frigideira, refogue a cebola e alho na gordura do bacon até caramelizar.",
      "Adicione o açúcar mascavo, o vinagre e o café, cozinhando em fogo baixo até virar uma calda brilhante com os pedacinhos de bacon.",
      "Sirva morno ou em temperatura ambiente."
    ],
    passos_en: [
      "Air fry diced bacon at 180°C (360°F) for 7 mins until crisp.",
      "Sauté onions and garlic in the rendered bacon drippings until deeply sweet.",
      "Stir in brown sugar, vinegar, and coffee; simmer until syrupy and glossy.",
      "Serve warm over sliders, mozzarella sticks, or burgers."
    ],
    passos_es: [
      "Cocina el tocino en la air fryer a 180°C por 7 minutos hasta dorar.",
      "Sofríe la cebolla y el ajo en la grasita del tocino hasta caramelizar.",
      "Añade el azúcar moreno, vinagre y café; cocina a fuego suave hasta espesar.",
      "Sirve tibio sobre hamburguesas o dedos de queso."
    ],
    receitasCompativeisIds: [2, 41, 3, 5, 45]
  },

  // Categoria 2: Wings, Barbecue & Queijos (11 a 20)
  {
    id: 11,
    categoria: 2,
    titulo: "Buffalo Amanteigado Clássico",
    titulo_en: "Classic Buttery Buffalo Sauce",
    titulo_es: "Buffalo con Mantequilla Clásico",
    estilo: "Buffalo NY Original",
    estilo_en: "Original Buffalo NY",
    estilo_es: "Buffalo NY Original",
    tempoPreparo: 4,
    picancia: 3,
    descricao: "O molho que colocou as asas de frango no mapa mundial. Manteiga derretida aveludada batida com molho de pimenta Frank's RedHot.",
    descricao_en: "The sauce that put wings on the world map: melted unsalted butter whisked with aged cayenne hot sauce and a touch of honey.",
    descricao_es: "La salsa que inmortalizó las alitas de pollo: mantequilla fundida batida con salsa de ají picante y toque de miel.",
    ingredientes: [
      "1/2 xícara de molho de pimenta fermentada (tipo Frank's ou Tabasco)",
      "1/3 xícara de manteiga sem sal derretida morna",
      "1 colher de chá de mel",
      "1/2 colher de chá de molho inglês",
      "1/4 colher de chá de alho em pó"
    ],
    ingredientes_en: [
      "1/2 cup aged cayenne hot sauce (like Frank's RedHot)",
      "1/3 cup melted warm unsalted butter",
      "1 tsp honey",
      "1/2 tsp Worcestershire sauce",
      "1/4 tsp garlic powder"
    ],
    ingredientes_es: [
      "1/2 taza de salsa picante tipo cayenne (Frank's o similar)",
      "1/3 taza de mantequilla derretida tibia",
      "1 cdta de miel",
      "1/2 cdta de salsa inglesa",
      "1/4 cdta de ajo en polvo"
    ],
    passos: [
      "Aqueça a manteiga e o molho de pimenta numa panela pequena ou micro-ondas.",
      "Bata intensamente com um batedor para emulsificar a gordura na pimenta.",
      "Banhe as asinhas de frango recém-saídas da air fryer imediatamente."
    ],
    passos_en: [
      "Warm butter and hot sauce together in a small saucepan.",
      "Whisk vigorously to emulsify the butter with the vinegar-pepper base.",
      "Toss over crispy air-fried wings while piping hot."
    ],
    passos_es: [
      "Calienta la mantequilla con la salsa picante.",
      "Bate con fuerza para emulsionar la mantequilla.",
      "Baña las alitas crujientes recién sacadas de la air fryer."
    ],
    receitasCompativeisIds: [42, 11, 23, 1, 45]
  },
  {
    id: 12,
    categoria: 2,
    titulo: "BBQ Goiabada & Bourbon Defumado",
    titulo_en: "Smoky Bourbon & Guava BBQ",
    titulo_es: "BBQ con Guayaba y Bourbon Ahumado",
    estilo: "Southern Smokehouse Fusion",
    estilo_en: "Southern Smokehouse Fusion",
    estilo_es: "Fusión Sureña Ahumada",
    tempoPreparo: 8,
    picancia: 1,
    descricao: "Fusão suculenta da tradição do sul dos EUA com a goiabada cascão brasileira e toque sutil de bourbon amadeirado.",
    descricao_en: "Succulent cross between Southern oak-smoked pitmaster barbecue, velvety guava paste, and mellow American bourbon.",
    descricao_es: "Fusión deliciosa de la tradición ahumada de EE.UU. con pasta de guayaba dulce y toque de bourbon.",
    ingredientes: [
      "1/2 xícara de molho barbecue tradicional",
      "3 colheres de sopa de pasta ou geleia de goiabada derretida",
      "1 colher de sopa de bourbon ou uísque americano",
      "1 colher de sopa de vinagre de maçã",
      "1/2 colher de chá de fumaça líquida",
      "Pimenta caiena a gosto"
    ],
    ingredientes_en: [
      "1/2 cup classic barbecue sauce",
      "3 tbsp melted guava paste or jam",
      "1 tbsp bourbon whiskey",
      "1 tbsp apple cider vinegar",
      "1/2 tsp liquid smoke",
      "Pinch of cayenne pepper"
    ],
    ingredientes_es: [
      "1/2 taza de salsa barbecue clásica",
      "3 cdas de dulce o mermelada de guayaba derretida",
      "1 cda de bourbon o whisky",
      "1 cda de vinagre de manzana",
      "1/2 cdta de humo líquido",
      "Pizca de cayena"
    ],
    passos: [
      "Derreta a goiabada com 2 colheres de água morna no fogo baixo.",
      "Junte o molho barbecue, o vinagre e o bourbon.",
      "Deixe reduzir por 3 minutos até virar um esmalte brilhante e espesso."
    ],
    passos_en: [
      "Melt guava paste with 2 tbsp warm water over gentle heat.",
      "Stir in BBQ sauce, cider vinegar, and bourbon.",
      "Simmer for 3 minutes until thick, syrupy, and glass-glossy."
    ],
    passos_es: [
      "Funde la guayaba con 2 cdas de agua caliente a fuego bajo.",
      "Agrega la salsa BBQ, el vinagre y el bourbon.",
      "Reduce 3 minutos hasta obtener un glaseado brillante."
    ],
    receitasCompativeisIds: [2, 42, 41, 11, 45]
  },
  {
    id: 13,
    categoria: 2,
    titulo: "Ranch de Ervas Frescas",
    titulo_en: "Fresh Herbs Buttermilk Ranch",
    titulo_es: "Ranch Clásico de Hierbas Frescas",
    estilo: "California Buttermilk",
    estilo_en: "California Buttermilk",
    estilo_es: "California Buttermilk",
    tempoPreparo: 6,
    picancia: 0,
    descricao: "O mais amado molho dos EUA feito de verdade: endro fresco (dill), cebolinha, salsa, alho assado e base láctea aerada.",
    descricao_en: "America's #1 dressing made from scratch: fresh dill, chives, flat parsley, roasted garlic, and tangy buttermilk cream.",
    descricao_es: "El aderezo más amado de EE.UU.: eneldo fresco, cebollín, perejil, ajo y crema suave de buttermilk.",
    ingredientes: [
      "1/3 xícara de maionese",
      "1/3 xícara de sour cream ou iogurte grego",
      "1/4 xícara de leite ou buttermilk",
      "1 colher de sopa de dill fresco picado",
      "1 colher de sopa de cebolinha verde picadinha",
      "1 colher de chá de salsinha fresca",
      "1 dente de alho ralado e raspas de limão",
      "Sal e pimenta moída a gosto"
    ],
    ingredientes_en: [
      "1/3 cup mayonnaise",
      "1/3 cup sour cream or Greek yogurt",
      "1/4 cup buttermilk or milk",
      "1 tbsp chopped fresh dill",
      "1 tbsp chopped green chives",
      "1 tsp fresh Italian parsley",
      "1 grated garlic clove and lemon zest",
      "Sea salt and freshly cracked pepper"
    ],
    ingredientes_es: [
      "1/3 taza de mayonesa",
      "1/3 taza de sour cream o yogur griego",
      "1/4 taza de buttermilk o leche",
      "1 cda de eneldo fresco picado",
      "1 cda de cebollín picado",
      "1 cdta de perejil picado",
      "1 diente de ajo rallado y ralladura de limón",
      "Sal y pimienta al gusto"
    ],
    passos: [
      "Bata o sour cream com a maionese e o buttermilk até obter textura aveludada.",
      "Incorpore todas as ervas frescas picadas finamente.",
      "Deixe na geladeira 30 minutos antes de servir."
    ],
    passos_en: [
      "Whisk sour cream, mayonnaise, and buttermilk until creamy.",
      "Fold in fresh dill, chives, parsley, and garlic.",
      "Refrigerate for 30 minutes to let the aromatic oils perfume the cream."
    ],
    passos_es: [
      "Bate el sour cream con la mayonesa y la leche.",
      "Incorpora todas las hierbas frescas picadas finamente.",
      "Refrigera 30 minutos antes de disfrutar."
    ],
    receitasCompativeisIds: [1, 3, 11, 42, 45]
  },
  {
    id: 14,
    categoria: 2,
    titulo: "Blue Cheese Cremoso de Pub",
    titulo_en: "Classic Pub Blue Cheese Dip",
    titulo_es: "Blue Cheese Cremoso de Pub",
    estilo: "New York Pub",
    estilo_en: "New York Pub",
    estilo_es: "Pub Neoyorquino",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "Pedaços nobres de queijo gorgonzola ou roquefort dissolvidos em sour cream com toque cítrico e pimenta branca.",
    descricao_en: "Crumbled pungent blue cheese folded into velvety sour cream with lemon juice and a touch of Worcestershire.",
    descricao_es: "Trozos de queso azul o gorgonzola integrados en sour cream con toque cítrico y salsa inglesa.",
    ingredientes: [
      "100g de queijo gorgonzola ou blue cheese esfarelado",
      "1/2 xícara de sour cream ou creme de leite fresco",
      "1/4 xícara de maionese",
      "1 colher de chá de vinagre de vinho branco",
      "1 colher de chá de molho inglês",
      "Pimenta branca moída"
    ],
    ingredientes_en: [
      "100g crumbled Danish or Gorgonzola blue cheese",
      "1/2 cup sour cream",
      "1/4 cup mayonnaise",
      "1 tsp white wine vinegar",
      "1 tsp Worcestershire sauce",
      "Pinch of ground white pepper"
    ],
    ingredientes_es: [
      "100g de queso gorgonzola o azul desmenuzado",
      "1/2 taza de sour cream o crema fresca",
      "1/4 taza de mayonesa",
      "1 cdta de vinagre de vino blanco",
      "1 cdta de salsa inglesa",
      "Pizca de pimienta blanca"
    ],
    passos: [
      "Amasse metade do gorgonzola com o garfo junto com o sour cream para criar a base cremosa.",
      "Adicione a maionese, vinagre e molho inglês.",
      "Misture a outra metade dos pedaços de queijo inteiros para dar a textura rústica de pub."
    ],
    passos_en: [
      "Mash half the blue cheese into the sour cream until rich and thick.",
      "Fold in mayo, vinegar, and Worcestershire sauce.",
      "Leave remaining cheese chunks intact for that classic chunky pub texture."
    ],
    passos_es: [
      "Tritura la mitad del queso azul con el sour cream para la base.",
      "Agrega la mayonesa, el vinagre y la salsa inglesa.",
      "Incorpora la otra mitad en trocitos enteros para darle textura rústica."
    ],
    receitasCompativeisIds: [11, 41, 1, 43, 2]
  },
  {
    id: 15,
    categoria: 2,
    titulo: "Cheddar Melt Americano Ultra Cremoso",
    titulo_en: "Ultra Creamy American Cheddar Melt",
    titulo_es: "Cheddar Melt Americano Cremoso",
    estilo: "Stadium Cheese Dip",
    estilo_en: "Stadium Cheese Dip",
    estilo_es: "Queso Fundido de Estadio",
    tempoPreparo: 6,
    picancia: 0,
    descricao: "O creme aveludado de queijo cheddar que nunca talha, ideal para mergulhar batatas fritas, nuggets e nachos.",
    descricao_en: "Silky stadium-style cheddar dip that stays luscious and pourable without breaking or curdling.",
    descricao_es: "La crema aterciopelada de cheddar estilo estadio que nunca se corta, perfecta para papas, aros y nachos.",
    ingredientes: [
      "150g de cheddar inglês ralado ou cheddar americano",
      "1/2 xícara de leite integral evaporado (ou creme de leite leve)",
      "1 colher de chá de amido de milho",
      "1 colher de sopa de manteiga",
      "1 pitada de cúrcuma e páprica para a cor dourada",
      "1 colher de chá de mostarda dijon"
    ],
    ingredientes_en: [
      "150g sharp cheddar cheese, freshly shredded",
      "1/2 cup evaporated milk or light cream",
      "1 tsp cornstarch",
      "1 tbsp butter",
      "Pinch of turmeric and paprika for golden color",
      "1 tsp Dijon mustard"
    ],
    ingredientes_es: [
      "150g de queso cheddar rallado",
      "1/2 taza de leche evaporada o crema ligera",
      "1 cdta de almidón de maíz (maicena)",
      "1 cda de mantequilla",
      "Pizca de cúrcuma y pimentón para color dorado",
      "1 cdta de mostaza dijon"
    ],
    passos: [
      "Misture o amido de milho com o queijo ralado numa tigela para encapar os fios.",
      "Aqueça o leite evaporado com a manteiga até quase ferver.",
      "Adicione o queijo aos poucos em fogo baixíssimo mexendo sempre com batedor até virar uma calda espessa e dourada."
    ],
    passos_en: [
      "Toss shredded cheddar with cornstarch until evenly coated.",
      "Heat evaporated milk and butter in a saucepan over medium-low heat.",
      "Gradually whisk in cheddar until melted into a glossy, velvety fondue."
    ],
    passos_es: [
      "Mezcla el almidón con el queso rallado para cubrir las hebras.",
      "Calienta la leche con la mantequilla a fuego medio-bajo.",
      "Agrega el queso poco a poco batiendo hasta formar una crema dorada y brillante."
    ],
    receitasCompativeisIds: [3, 41, 45, 12, 51]
  },
  {
    id: 16,
    categoria: 2,
    titulo: "Mango Habanero Glaze",
    titulo_en: "Fiery Mango Habanero Glaze",
    titulo_es: "Glaseado de Mango Habanero",
    estilo: "Caribe & Tex-Mex",
    estilo_en: "Caribbean & Tex-Mex",
    estilo_es: "Caribeño y Tex-Mex",
    tempoPreparo: 8,
    picancia: 3,
    descricao: "Doçura tropical suculenta da manga madura seguida pelo calor ardente e aromático da pimenta habanero.",
    descricao_en: "Lush tropical sweetness from ripe mangoes followed by the fiery, fruity sting of real habanero peppers.",
    descricao_es: "Dulzura tropical del mango maduro seguida por el calor ardiente y aromático del chile habanero.",
    ingredientes: [
      "1 xícara de polpa de manga madura batida",
      "1/2 pimenta habanero sem sementes bem picadinha (ou a gosto)",
      "2 colheres de sopa de mel",
      "1 colher de sopa de vinagre de maçã",
      "1 colher de chá de alho em pó",
      "Suco de meio limão"
    ],
    ingredientes_en: [
      "1 cup pureed ripe sweet mango",
      "1/2 fresh habanero pepper, seeded and minced fine",
      "2 tbsp honey",
      "1 tbsp apple cider vinegar",
      "1 tsp garlic powder",
      "Juice of 1/2 lime"
    ],
    ingredientes_es: [
      "1 taza de pulpa de mango maduro licuado",
      "1/2 chile habanero picado muy fino y sin semillas",
      "2 cdas de miel",
      "1 cda de vinagre de manzana",
      "1 cdta de ajo en polvo",
      "Jugo de media lima o limón"
    ],
    passos: [
      "Bata a polpa de manga com o habanero e o suco de limão no liquidificador.",
      "Despeje em uma panelinha com o mel e vinagre.",
      "Cozinhe por 5 minutos mexendo até reduzir e virar uma calda espessa e translúcida."
    ],
    passos_en: [
      "Blend mango pulp with habanero and lime juice until smooth.",
      "Transfer to a saucepan with honey and cider vinegar.",
      "Simmer for 5 minutes until reduced into a shiny, clinging glaze."
    ],
    passos_es: [
      "Licúa el mango con el habanero y jugo de lima.",
      "Vierte en una olla pequeña con la miel y vinagre.",
      "Cocina a fuego lento 5 minutos hasta que espese y brille."
    ],
    receitasCompativeisIds: [11, 42, 21, 23, 1]
  },
  {
    id: 17,
    categoria: 2,
    titulo: "Garlic Parmesan Dourado",
    titulo_en: "Golden Garlic Parmesan Glaze",
    titulo_es: "Glaseado Ajo Parmesano Dorado",
    estilo: "Italian-American Wing Sauce",
    estilo_en: "Italian-American Wing Sauce",
    estilo_es: "Al estilo Italo-Americano",
    tempoPreparo: 6,
    picancia: 0,
    descricao: "Manteiga derretida infundida com alho frito dourado, queijo parmesão ralado na hora, pimenta calabresa e orégano.",
    descricao_en: "Melted butter infused with slow-toasted garlic, heaps of freshly grated Parmigiano-Reggiano, cracked pepper, and oregano.",
    descricao_es: "Mantequilla fundida con ajo dorado, abundante queso parmesano recién rallado, pimienta y orégano.",
    ingredientes: [
      "1/3 xícara de manteiga",
      "4 dentes de alho picadinhos",
      "1/2 xícara de queijo parmesão ralado fino",
      "1 colher de chá de orégano seco",
      "1 colher de sopa de salsinha fresca picada",
      "Pimenta calabresa a gosto"
    ],
    ingredientes_en: [
      "1/3 cup butter",
      "4 garlic cloves, minced fine",
      "1/2 cup finely grated Parmesan cheese",
      "1 tsp dried oregano",
      "1 tbsp fresh parsley, chopped",
      "Red pepper flakes to taste"
    ],
    ingredientes_es: [
      "1/3 taza de mantequilla",
      "4 dientes de ajo picaditos",
      "1/2 taza de queso parmesano rallado fino",
      "1 cdta de orégano seco",
      "1 cda de perejil fresco picado",
      "Hojuelas de chile rojo al gusto"
    ],
    passos: [
      "Derreta a manteiga em fogo baixo e refogue o alho picado por 2 minutos sem queimar.",
      "Tire do fogo e misture imediatamente o queijo parmesão e as ervas.",
      "Banhe asas de frango, batatas ou palitos crocantes ainda quentes."
    ],
    passos_en: [
      "Melt butter over low heat and gently sauté garlic until fragrant and light golden.",
      "Remove from heat and instantly whisk in Parmesan and herbs.",
      "Toss over crispy tenders, wings, or roasted potatoes."
    ],
    passos_es: [
      "Derrite la mantequilla y dora el ajo suavemente por 2 minutos.",
      "Retira del fuego y mezcla de inmediato el parmesano y las hierbas.",
      "Baña las alitas o papas mientras estén bien calientes."
    ],
    receitasCompativeisIds: [1, 3, 11, 42, 5]
  },
  {
    id: 18,
    categoria: 2,
    titulo: "Carolina Gold Mustard BBQ",
    titulo_en: "Carolina Gold Mustard BBQ Sauce",
    titulo_es: "Carolina Gold BBQ de Mostaza",
    estilo: "South Carolina Smokehouse",
    estilo_en: "South Carolina Smokehouse",
    estilo_es: "South Carolina Ahumado",
    tempoPreparo: 5,
    picancia: 1,
    descricao: "O lendário molho amarelo das Carolinas: base de mostarda amarela, vinagre de maçã, açúcar mascavo, molho inglês e pimenta preta.",
    descricao_en: "The Carolinas' golden pride: yellow mustard base simmering with cider vinegar, dark brown sugar, and Worcestershire depth.",
    descricao_es: "El orgullo dorado de las Carolinas: base de mostaza amarilla, vinagre de manzana, azúcar moreno y salsa inglesa.",
    ingredientes: [
      "1/2 xícara de mostarda amarela",
      "3 colheres de sopa de açúcar mascavo",
      "1/4 xícara de vinagre de maçã",
      "1 colher de sopa de ketchup",
      "1 colher de chá de molho inglês",
      "1/2 colher de chá de pimenta-do-reino e alho em pó"
    ],
    ingredientes_en: [
      "1/2 cup yellow mustard",
      "3 tbsp brown sugar",
      "1/4 cup apple cider vinegar",
      "1 tbsp ketchup",
      "1 tsp Worcestershire sauce",
      "1/2 tsp black pepper and garlic powder"
    ],
    ingredientes_es: [
      "1/2 taza de mostaza amarilla",
      "3 cdas de azúcar moreno",
      "1/4 taza de vinagre de manzana",
      "1 cda de kétchup",
      "1 cdta de salsa inglesa",
      "1/2 cdta de pimienta negra y ajo en polvo"
    ],
    passos: [
      "Combine todos os ingredientes numa panela pequena.",
      "Deixe levantar fervura branda por 4 minutos para diluir o açúcar mascavo.",
      "Sirva com carnes suínas desfiadas, frango e petiscos fritos."
    ],
    passos_en: [
      "Combine all ingredients in a small pan.",
      "Simmer gently for 4 minutes until brown sugar is completely dissolved.",
      "Coat pulled pork, smoked chicken, and crispy strips."
    ],
    passos_es: [
      "Combina todos los ingredientes en una cacerola pequeña.",
      "Cocina a fuego lento durante 4 minutos para disolver el azúcar.",
      "Sirve con cerdo desmechado, pollo y snacks crujientes."
    ],
    receitasCompativeisIds: [2, 42, 12, 41, 45]
  },
  {
    id: 19,
    categoria: 2,
    titulo: "Alabama White BBQ Sauce",
    titulo_en: "Alabama White BBQ Sauce",
    titulo_es: "Salsa Blanca Alabama BBQ",
    estilo: "Northern Alabama Pit",
    estilo_en: "Northern Alabama Pit",
    estilo_es: "Norte de Alabama",
    tempoPreparo: 4,
    picancia: 1,
    descricao: "O molho branco para churrasco mais famoso do mundo: base de maionese com alta acidez de vinagre de maçã e rábano picante.",
    descricao_en: "The world's most unique barbecue sauce: silky mayonnaise laced with tangy cider vinegar, grated horseradish, and cayenne.",
    descricao_es: "La salsa barbecue blanca más famosa del mundo: mayonesa con acidez de vinagre de manzana y rábano picante.",
    ingredientes: [
      "1/2 xícara de maionese",
      "2 colheres de sopa de vinagre de maçã",
      "1 colher de chá de mostarda dijon",
      "1 colher de chá de raiz-forte cremosa",
      "1/2 colher de chá de açúcar cristal",
      "Pimenta-do-reino e sal a gosto"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "2 tbsp apple cider vinegar",
      "1 tsp Dijon mustard",
      "1 tsp prepared horseradish",
      "1/2 tsp sugar",
      "Coarse black pepper and salt"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "2 cdas de vinagre de manzana",
      "1 cdta de mostaza dijon",
      "1 cdta de rábano picante cremoso",
      "1/2 cdta de azúcar",
      "Pimienta negra gruesa y sal"
    ],
    passos: [
      "Emulsione o vinagre na maionese até formar um molho fluido mas denso.",
      "Acrescente a raiz-forte e a mostarda dijon.",
      "Banhe o frango assado e as asinhas logo antes de morder."
    ],
    passos_en: [
      "Whisk apple cider vinegar into mayonnaise until pourable yet glossy.",
      "Stir in horseradish, Dijon, and black pepper.",
      "Dunk smoked wings and chicken thighs straight in."
    ],
    passos_es: [
      "Emulsiona el vinagre con la mayonesa.",
      "Añade el rábano picante, la mostaza y la pimienta.",
      "Baña el pollo asado y las alitas calientes."
    ],
    receitasCompativeisIds: [42, 11, 23, 1, 45]
  },
  {
    id: 20,
    categoria: 2,
    titulo: "Spicy Queso Blanco Tex-Mex",
    titulo_en: "Spicy Queso Blanco Dip",
    titulo_es: "Queso Blanco Tex-Mex Picante",
    estilo: "Tex-Mex Cantina",
    estilo_en: "Tex-Mex Cantina",
    estilo_es: "Cantina Tex-Mex",
    tempoPreparo: 7,
    picancia: 2,
    descricao: "O queijo branco derretido dos restaurantes do Texas com pimenta jalapeño picada, tomate em cubinhos e cominho.",
    descricao_en: "Authentic Texas cantina melted white cheese dip infused with pickled jalapeños, diced tomatoes, and cumin.",
    descricao_es: "El queso blanco fundido de los restaurantes de Texas con jalapeño picado, tomate en cubitos y comino.",
    ingredientes: [
      "150g de queijo monterey jack ou queijo minas padrão ralado",
      "1/2 xícara de leite evaporado",
      "2 colheres de sopa de jalapeño picadinho em conserva",
      "2 colheres de sopa de tomate sem semente picadinho",
      "1/4 colher de chá de cominho",
      "1 dente de alho ralado"
    ],
    ingredientes_en: [
      "150g Monterey Jack or melting white cheese, shredded",
      "1/2 cup evaporated milk",
      "2 tbsp minced pickled jalapeños",
      "2 tbsp seeded diced tomatoes",
      "1/4 tsp ground cumin",
      "1 grated garlic clove"
    ],
    ingredientes_es: [
      "150g de queso Monterey Jack o queso blanco fundente rallado",
      "1/2 taza de leche evaporada",
      "2 cdas de jalapeño en conserva picadito",
      "2 cdas de tomate en cubitos sin semillas",
      "1/4 cdta de comino",
      "1 diente de ajo rallado"
    ],
    passos: [
      "Aqueça o leite evaporado com o alho e cominho em panela pequena.",
      "Desligue o fogo e adicione o queijo aos poucos, mexendo até derreter por completo.",
      "Finalize com o jalapeño e tomate fresco."
    ],
    passos_en: [
      "Heat evaporated milk with garlic and cumin over low heat.",
      "Remove from heat and gradually whisk in shredded cheese until smooth.",
      "Fold in jalapeño bits and diced tomatoes."
    ],
    passos_es: [
      "Calienta la leche con el ajo y comino.",
      "Retira del fuego y añade el queso poco a poco batiendo.",
      "Termina agregando el jalapeño y los tomates frescos."
    ],
    receitasCompativeisIds: [21, 3, 22, 45, 51]
  },

  // Categoria 3: Dips Cremosos, Ervas & Alho (21 a 30)
  {
    id: 21,
    categoria: 3,
    titulo: "Honey Mustard Sedoso",
    titulo_en: "Silky Honey Mustard",
    titulo_es: "Mostaza y Miel Sedosa",
    estilo: "Gourmet Bistro",
    estilo_en: "Gourmet Bistro",
    estilo_es: "Bistró Gourmet",
    tempoPreparo: 3,
    picancia: 0,
    descricao: "Equilíbrio aristocrático entre mel silvestre, mostarda Dijon e toque sutil de maionese aveludada.",
    descricao_en: "Lush velvety blend of wild flower honey, sharp Dijon mustard, and rich mayonnaise with a hint of lemon.",
    descricao_es: "Equilibrio fino entre miel silvestre, mostaza Dijon y mayonesa suave con gotas de limón.",
    ingredientes: [
      "1/3 xícara de maionese",
      "2 colheres de sopa de mel",
      "1 colher de sopa de mostarda Dijon",
      "1 colher de sopa de mostarda amarela",
      "1 colher de chá de suco de limão"
    ],
    ingredientes_en: [
      "1/3 cup mayonnaise",
      "2 tbsp pure honey",
      "1 tbsp Dijon mustard",
      "1 tbsp yellow mustard",
      "1 tsp lemon juice"
    ],
    ingredientes_es: [
      "1/3 taza de mayonesa",
      "2 cdas de miel pura",
      "1 cda de mostaza Dijon",
      "1 cda de mostaza amarilla",
      "1 cdta de jugo de limón"
    ],
    passos: [
      "Misture as duas mostardas com o mel até dissolver.",
      "Incorpore a maionese e o suco de limão até ficar ultra brilhante."
    ],
    passos_en: [
      "Whisk both mustards with honey until dissolved.",
      "Blend in mayonnaise and lemon juice until glossy."
    ],
    passos_es: [
      "Mezcla ambas mostazas con la miel.",
      "Incorpora la mayonesa y el limón hasta que quede brillante."
    ],
    receitasCompativeisIds: [42, 12, 1, 45, 3]
  },
  {
    id: 22,
    categoria: 3,
    titulo: "Maionese Verde Especial de Hamburgueria",
    titulo_en: "Artisanal Green Herb Mayo",
    titulo_es: "Mayonesa Verde de Hamburguesería",
    estilo: "Hamburgueria Artesanal",
    estilo_en: "Artisanal Burger Joint",
    estilo_es: "Hamburguesería Artesanal",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "A famosa maionese temperada das lanchonetes: cheiro-verde abundante, alho fresco, limão taiti e azeite extravirgem.",
    descricao_en: "The beloved burger joint green sauce: abundant parsley, scallions, fresh garlic, lime, and cold-pressed olive oil.",
    descricao_es: "La famosa mayonesa verde artesanal: cebollín, perejil, ajo fresco, limón y aceite de oliva.",
    ingredientes: [
      "1/2 xícara de maionese de leite ou tradicional",
      "1/2 xícara de salsinha e cebolinha picadas",
      "1 dente de alho pequeno sem o miolo",
      "1 colher de sopa de azeite de oliva",
      "1 colher de chá de suco de limão",
      "Sal e pimenta a gosto"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "1/2 cup fresh parsley and green scallions",
      "1 small garlic clove, germ removed",
      "1 tbsp extra virgin olive oil",
      "1 tsp fresh lime juice",
      "Salt and pepper"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "1/2 taza de perejil y cebollín fresco",
      "1 diente de ajo pequeño",
      "1 cda de aceite de oliva",
      "1 cdta de jugo de lima o limón",
      "Sal y pimienta"
    ],
    passos: [
      "Bata no mixer ou liquidificador as ervas com o azeite, alho e suco de limão.",
      "Adicione a maionese e pulse até formar uma emulsão verde esmeralda uniforme.",
      "Guarde em bisnaga na geladeira."
    ],
    passos_en: [
      "Blend herbs, olive oil, garlic, and lime juice in a mini processor.",
      "Add mayonnaise and pulse until emerald green and thick.",
      "Chill in a squeeze bottle."
    ],
    passos_es: [
      "Procesa las hierbas con el aceite, ajo y limón.",
      "Agrega la mayonesa y pulsa hasta lograr un verde esmeralda parejo.",
      "Refrigera en botella dosificadora."
    ],
    receitasCompativeisIds: [41, 45, 1, 22, 51]
  },
  {
    id: 23,
    categoria: 3,
    titulo: "Aioli de Alho Assado na Air Fryer",
    titulo_en: "Air-Roasted Garlic Aioli",
    titulo_es: "Aioli de Ajo Asado en Air Fryer",
    estilo: "Provençal / Mediterrâneo",
    estilo_en: "Provençal / Mediterranean",
    estilo_es: "Provenzal / Mediterráneo",
    tempoPreparo: 15,
    picancia: 0,
    descricao: "Cabeça de alho inteira assada na air fryer até virar uma pasta doce e caramelizada batida com azeite e maionese.",
    descricao_en: "Whole garlic head roasted in the air fryer until buttery sweet, whipped into olive oil mayonnaise and lemon.",
    descricao_es: "Cabeza de ajo asada en la air fryer hasta quedar dulce y caramelizada, batida con mayonesa y aceite de oliva.",
    ingredientes: [
      "1 cabeça inteira de alho",
      "1 colher de chá de azeite (para assar o alho)",
      "1/2 xícara de maionese",
      "1 colher de chá de mostarda dijon",
      "1 colher de chá de suco de limão siciliano",
      "Flor de sal e pimenta moída"
    ],
    ingredientes_en: [
      "1 whole head of garlic",
      "1 tsp olive oil (for roasting)",
      "1/2 cup quality mayonnaise",
      "1 tsp Dijon mustard",
      "1 tsp fresh lemon juice",
      "Flaky sea salt and cracked pepper"
    ],
    ingredientes_es: [
      "1 cabeza entera de ajo",
      "1 cdta de aceite de oliva",
      "1/2 taza de mayonesa",
      "1 cdta de mostaza dijon",
      "1 cdta de jugo de limón amarillo",
      "Sal marina y pimienta"
    ],
    passos: [
      "Corte o topo da cabeça de alho, regue com azeite, embrulhe em papel alumínio e asse na air fryer a 190°C por 14 minutos.",
      "Esprema os dentes macios e doces e amasse com garfo.",
      "Misture vigorosamente na maionese com o limão e a dijon."
    ],
    passos_en: [
      "Slice off the garlic head top, drizzle with olive oil, wrap in foil and air fry at 190°C (375°F) for 14 mins.",
      "Squeeze out the softened sweet cloves and mash into a paste.",
      "Whisk into mayonnaise with lemon juice and Dijon."
    ],
    passos_es: [
      "Corta la parte superior del ajo, añade aceite, envuelve en aluminio y cocina en air fryer a 190°C por 14 mins.",
      "Exprime los dientes suaves y aplasta como puré.",
      "Bate con la mayonesa, el limón y la mostaza dijon."
    ],
    receitasCompativeisIds: [1, 22, 45, 11, 41]
  },
  {
    id: 24,
    categoria: 3,
    titulo: "Maionese Defumada de Bacon",
    titulo_en: "Smoky Bacon Mayo Dip",
    titulo_es: "Mayonesa Ahumada de Tocino",
    estilo: "Smokehouse Comfort",
    estilo_en: "Smokehouse Comfort",
    estilo_es: "Smokehouse Confort",
    tempoPreparo: 6,
    picancia: 0,
    descricao: "Maionese cremosa temperada com a própria gordura do bacon assado, pedacinhos crocantes e páprica defumada.",
    descricao_en: "Silky mayonnaise infused with warm rendered bacon drippings, crispy bits, and Spanish smoked paprika.",
    descricao_es: "Mayonesa cremosa enriquecida con la grasita del tocino asado, trocitos crujientes y pimentón ahumado.",
    ingredientes: [
      "1/2 xícara de maionese",
      "3 fatias de bacon assadas crocantes na air fryer picadinhas",
      "1 colher de sopa da gordura do bacon morna",
      "1/2 colher de chá de páprica defumada",
      "1 colher de chá de cebolinha fresca"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "3 strips crispy air-fried bacon, finely crumbled",
      "1 tbsp warm rendered bacon fat",
      "1/2 tsp smoked paprika",
      "1 tsp fresh chives"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "3 tiras de tocino crujiente picado fino",
      "1 cda de grasa de tocino tibia",
      "1/2 cdta de pimentón ahumado",
      "1 cdta de cebollín fresco"
    ],
    passos: [
      "Asse o bacon na air fryer a 190°C por 6 minutos.",
      "Bata a gordura morna na maionese com páprica para emulsionar o sabor defumado.",
      "Acrescente os pedacinhos crocantes e a cebolinha."
    ],
    passos_en: [
      "Air fry bacon at 190°C (375°F) for 6 mins until crispy.",
      "Whisk warm bacon drippings into mayo and paprika.",
      "Fold in crunchy bacon crumbles and chives."
    ],
    passos_es: [
      "Cocina el tocino en air fryer a 190°C por 6 minutos.",
      "Bate la grasa tibia con la mayonesa y pimentón ahumado.",
      "Incorpora los trocitos crujientes de tocino y el cebollín."
    ],
    receitasCompativeisIds: [41, 45, 5, 2, 53]
  },
  {
    id: 25,
    categoria: 3,
    titulo: "Guacamole Express Cremosa",
    titulo_en: "Creamy Express Guacamole",
    titulo_es: "Guacamole Cremoso Express",
    estilo: "Tex-Mex Fresh",
    estilo_en: "Tex-Mex Fresh",
    estilo_es: "Fresco Tex-Mex",
    tempoPreparo: 6,
    picancia: 1,
    descricao: "Abacate nobre amassado rústico com suco de limão, tomate, cebola roxa, coentro e pitada de pimenta jalapeño.",
    descricao_en: "Ripe avocados mashed with lime juice, seeded tomatoes, red onion, fresh cilantro, and minced jalapeño.",
    descricao_es: "Aguacate maduro machacado con jugo de lima, tomate, cebolla morada, cilantro y jalapeño.",
    ingredientes: [
      "1 abacate maduro ou 2 avocados",
      "Suco de 1 limão taiti",
      "1/2 tomate picadinho sem sementes",
      "2 colheres de sopa de cebola roxa picada",
      "2 colheres de sopa de coentro fresco",
      "Sal e azeite a gosto"
    ],
    ingredientes_en: [
      "1 large ripe avocado or 2 Hass avocados",
      "Juice of 1 fresh lime",
      "1/2 tomato, seeded and diced",
      "2 tbsp finely diced red onion",
      "2 tbsp fresh chopped cilantro",
      "Salt and a drizzle of olive oil"
    ],
    ingredientes_es: [
      "1 aguacate maduro o 2 avocados Hass",
      "Jugo de 1 lima o limón",
      "1/2 tomate en cubitos sin semillas",
      "2 cdas de cebolla morada picada",
      "2 cdas de cilantro fresco",
      "Sal y aceite de oliva al gusto"
    ],
    passos: [
      "Amasse os avocados com um garfo deixando alguns pedaços para textura.",
      "Junte imediatamente o suco de limão para evitar oxidação.",
      "Incorpore a cebola roxa, tomate, coentro e sal."
    ],
    passos_en: [
      "Mash avocados with a fork, keeping some chunks for texture.",
      "Immediately stir in lime juice to prevent browning.",
      "Fold in red onion, tomato, cilantro, and season with sea salt."
    ],
    passos_es: [
      "Machaca el aguacate con un tenedor dejando trocitos.",
      "Añade de inmediato el jugo de limón.",
      "Incorpora la cebolla, tomate, cilantro y sal."
    ],
    receitasCompativeisIds: [21, 22, 12, 1, 45]
  },
  {
    id: 26,
    categoria: 3,
    titulo: "Chimichurri Cremoso Especial",
    titulo_en: "Creamy Argentine Chimichurri",
    titulo_es: "Chimichurri Cremoso Especial",
    estilo: "Pampa & Asado",
    estilo_en: "Pampa & Asado",
    estilo_es: "Pampa & Asado",
    tempoPreparo: 6,
    picancia: 1,
    descricao: "O frescor do orégano, alho e salsinha da brasa transformados em um dip cremoso perfeito para carnes na air fryer.",
    descricao_en: "Traditional Argentine grill herbs (parsley, oregano, garlic, red vinegar) whipped into a luscious dipping cream.",
    descricao_es: "El frescor del orégano, ajo y perejil transformados en un dip cremoso para carnes en air fryer.",
    ingredientes: [
      "1/2 xícara de salsinha fresca bem picada",
      "2 colheres de sopa de orégano fresco ou desidratado",
      "2 dentes de alho bem picadinhos",
      "2 colheres de sopa de vinagre de vinho tinto",
      "1/3 xícara de maionese ou azeite emulsionado",
      "Pimenta calabresa e sal a gosto"
    ],
    ingredientes_en: [
      "1/2 cup fresh flat parsley, finely chopped",
      "2 tbsp fresh or dried oregano",
      "2 garlic cloves, finely minced",
      "2 tbsp red wine vinegar",
      "1/3 cup mayonnaise or whipped olive oil",
      "Crushed red chili flakes and salt"
    ],
    ingredientes_es: [
      "1/2 taza de perejil fresco picado",
      "2 cdas de orégano fresco o seco",
      "2 dientes de ajo picaditos",
      "2 cdas de vinagre de vino tinto",
      "1/3 taza de mayonesa o emulsión de oliva",
      "Hojuelas de ají y sal"
    ],
    passos: [
      "Misture as ervas com o alho, vinagre e pimenta calabresa por 3 minutos.",
      "Emulsione na maionese até obter consistência aveludada."
    ],
    passos_en: [
      "Toss herbs, garlic, vinegar, and chili flakes; let sit 3 minutes to bloom.",
      "Whisk into mayonnaise until smooth and herbaceous."
    ],
    passos_es: [
      "Mezcla las hierbas con ajo, vinagre y ají por 3 minutos.",
      "Bate con la mayonesa hasta lograr consistencia cremosa."
    ],
    receitasCompativeisIds: [21, 41, 22, 5, 53]
  },
  {
    id: 27,
    categoria: 3,
    titulo: "Tzatziki Diner Grego-Americano",
    titulo_en: "Greek-American Diner Tzatziki",
    titulo_es: "Tzatziki Estilo Diner Griego",
    estilo: "Mediterranean Diner",
    estilo_en: "Mediterranean Diner",
    estilo_es: "Diner Mediterráneo",
    tempoPreparo: 7,
    picancia: 0,
    descricao: "Iogurte grego espesso e refrescante com pepino japonês ralado e escorrido, endro, alho e azeite extravirgem.",
    descricao_en: "Strained ultra-thick Greek yogurt loaded with grated salted cucumber, fresh dill, minced garlic, and lemon oil.",
    descricao_es: "Yogur griego espeso y refrescante con pepino rallado y escurrido, eneldo, ajo y aceite de oliva.",
    ingredientes: [
      "1 xícara de iogurte grego natural bem firme",
      "1 pepino ralado fino e bem espremido em pano",
      "1 colher de sopa de dill fresco picado",
      "1 dente de alho ralado fininho",
      "1 colher de sopa de azeite de oliva",
      "1 colher de chá de suco de limão siciliano"
    ],
    ingredientes_en: [
      "1 cup thick whole milk Greek yogurt",
      "1 cucumber, grated and thoroughly squeezed dry",
      "1 tbsp fresh chopped dill",
      "1 garlic clove, finely grated",
      "1 tbsp extra virgin olive oil",
      "1 tsp fresh lemon juice"
    ],
    ingredientes_es: [
      "1 taza de yogur griego espeso natural",
      "1 pepino rallado y bien escurrido en paño limpio",
      "1 cda de eneldo fresco picado",
      "1 diente de ajo rallado",
      "1 cda de aceite de oliva",
      "1 cdta de jugo de limón"
    ],
    passos: [
      "Rale o pepino e aperte bem em um pano para extrair toda a água.",
      "Misture o pepino seco no iogurte grego.",
      "Adicione o azeite, o alho ralado, limão e o dill fresco."
    ],
    passos_en: [
      "Grate cucumber and squeeze firmly in a clean kitchen towel to purge water.",
      "Fold dried cucumber shreds into thick yogurt.",
      "Blend in olive oil, grated garlic, lemon juice, and fresh dill."
    ],
    passos_es: [
      "Ralla el pepino y exprime con fuerza en un paño para secar el agua.",
      "Mezcla el pepino seco con el yogur griego.",
      "Añade el aceite de oliva, ajo rallado, limón y eneldo."
    ],
    receitasCompativeisIds: [1, 23, 14, 5, 42]
  },
  {
    id: 28,
    categoria: 3,
    titulo: "Avocado Lime Crema",
    titulo_en: "Avocado Lime Crema",
    titulo_es: "Crema de Aguacate y Lima",
    estilo: "Baja California Dip",
    estilo_en: "Baja California Dip",
    estilo_es: "Dip de Baja California",
    tempoPreparo: 4,
    picancia: 0,
    descricao: "Creme aveludado batido de abacate maduro com sour cream, suco de limão fresco e coentro.",
    descricao_en: "Silky whipped crema featuring Hass avocado, tangy sour cream, lime juice, and sweet cilantro.",
    descricao_es: "Crema sedosa batida con aguacate maduro, sour cream, jugo de lima fresca y cilantro.",
    ingredientes: [
      "1 avocado maduro",
      "1/3 xícara de sour cream ou creme de leite",
      "Suco de 1 limão fresco",
      "1/4 xícara de folhas de coentro",
      "1 pitada de sal marinho e cominho"
    ],
    ingredientes_en: [
      "1 ripe Hass avocado",
      "1/3 cup sour cream or heavy cream",
      "Juice of 1 fresh lime",
      "1/4 cup fresh cilantro leaves",
      "Pinch of sea salt and cumin"
    ],
    ingredientes_es: [
      "1 aguacate maduro",
      "1/3 taza de sour cream o crema fresca",
      "Jugo de 1 lima fresca",
      "1/4 taza de hojas de cilantro",
      "Pizca de sal marina y comino"
    ],
    passos: [
      "Bata todos os ingredientes no mixer até virar um creme verde pastel aveludado.",
      "Sirva como base para tacos, empanadas e petiscos de queijo."
    ],
    passos_en: [
      "Blend all ingredients in a food processor until pale green and velvety.",
      "Dollop over tacos, crispy taquitos, and mozzarella sticks."
    ],
    passos_es: [
      "Licúa todos los ingredientes hasta lograr una crema verde aterciopelada.",
      "Sirve con tacos, empanadas y palitos de queso crujientes."
    ],
    receitasCompativeisIds: [21, 22, 3, 12, 45]
  },
  {
    id: 29,
    categoria: 3,
    titulo: "Dill Tartar Especial de Pescador",
    titulo_en: "Fisherman's Dill Tartar Sauce",
    titulo_es: "Salsa Tártara Especial con Eneldo",
    estilo: "Cape Cod Seafood",
    estilo_en: "Cape Cod Seafood",
    estilo_es: "Marisquería Cape Cod",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "O molho tártaro definitivo da Costa Leste dos EUA: maionese rústica com picles crocante, alcaparras e bastante endro fresco.",
    descricao_en: "The East Coast seafood shack gold standard: rich mayo loaded with dill relish, minced capers, and plenty of fresh dill.",
    descricao_es: "El clásico de los muelles de la Costa Este: mayonesa con pepinillos picados, alcaparras y abundante eneldo fresco.",
    ingredientes: [
      "1/2 xícara de maionese",
      "1 colher de sopa de relish de picles picadinho",
      "1 colher de sopa de alcaparras picadas",
      "1 colher de sopa de dill fresco picado",
      "1 colher de chá de suco de limão siciliano",
      "Pimenta-do-reino moída"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "1 tbsp dill pickle relish",
      "1 tbsp drained chopped capers",
      "1 tbsp fresh chopped dill",
      "1 tsp fresh lemon juice",
      "Coarse black pepper"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "1 cda de relish de pepinillo",
      "1 cda de alcaparras picaditas",
      "1 cda de eneldo fresco picado",
      "1 cdta de jugo de limón amarillo",
      "Pimienta negra molida"
    ],
    passos: [
      "Misture o relish, as alcaparras e o dill na maionese.",
      "Finalize com o limão e pimenta-do-reino.",
      "Ideal para peixes empanados, nuggets e anéis de cebola."
    ],
    passos_en: [
      "Combine relish, capers, and fresh dill with mayonnaise.",
      "Finish with lemon juice and cracked black pepper.",
      "Ideal companion for crispy fried fish, shrimp, and onion rings."
    ],
    passos_es: [
      "Mezcla el relish, alcaparras y el eneldo con la mayonesa.",
      "Termina con jugo de limón y pimienta negra.",
      "Perfecto para pescados empanizados y aros de cebolla."
    ],
    receitasCompativeisIds: [43, 14, 45, 1, 22]
  },
  {
    id: 30,
    categoria: 3,
    titulo: "Cilantro Lime Buttermilk Ranch",
    titulo_en: "Cilantro Lime Buttermilk Ranch",
    titulo_es: "Cilantro Lime Buttermilk Ranch",
    estilo: "Southwestern Cafe",
    estilo_en: "Southwestern Cafe",
    estilo_es: "Suroeste Café",
    tempoPreparo: 5,
    picancia: 1,
    descricao: "Fusão do clássico buttermilk ranch com a vivacidade do coentro fresco, raspas de limão e pimenta verde poblano.",
    descricao_en: "Southwestern twist on buttermilk ranch exploding with fresh cilantro leaves, lime zest, and charred green chili.",
    descricao_es: "Versión del suroeste del buttermilk ranch con cilantro fresco, ralladura de lima y chile verde.",
    ingredientes: [
      "1/2 xícara de buttermilk",
      "1/3 xícara de maionese",
      "1/2 xícara de folhas frescas de coentro",
      "Raspas e suco de 1 limão taiti",
      "1/2 pimenta jalapeño sem sementes",
      "1 dente de alho pequeno",
      "Sal marinho a gosto"
    ],
    ingredientes_en: [
      "1/2 cup buttermilk",
      "1/3 cup mayonnaise",
      "1/2 cup fresh cilantro leaves",
      "Zest and juice of 1 lime",
      "1/2 seeded jalapeño pepper",
      "1 small garlic clove",
      "Sea salt to taste"
    ],
    ingredientes_es: [
      "1/2 taza de buttermilk",
      "1/3 taza de mayonesa",
      "1/2 taza de cilantro fresco",
      "Ralladura y jugo de 1 lima",
      "1/2 jalapeño sin semillas",
      "1 diente de ajo",
      "Sal al gusto"
    ],
    passos: [
      "Bata todos os ingredientes no liquidificador até obter uma cor verde vibrante.",
      "Deixe gelar por 20 minutos antes de servir."
    ],
    passos_en: [
      "Blend all ingredients in a blender until lively vibrant green.",
      "Chill for 20 minutes before dipping."
    ],
    passos_es: [
      "Licúa todos los ingredientes hasta lograr un color verde vibrante.",
      "Refrigera 20 minutos antes de servir."
    ],
    receitasCompativeisIds: [21, 23, 42, 45, 1]
  },

  // Categoria 4: Fusões Orientais & Picantes (31 a 40)
  {
    id: 31,
    categoria: 4,
    titulo: "Sour Cream Tropical com Maracujá",
    titulo_en: "Tropical Passion Fruit Sour Cream",
    titulo_es: "Sour Cream Tropical con Maracuyá",
    estilo: "Floribbean Fusion",
    estilo_en: "Floribbean Fusion",
    estilo_es: "Fusión Caribeña-Florida",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "Creme azedo aveludado combinado com calda concentrada de maracujá e raspas cítricas, perfeito para carnes crocantes.",
    descricao_en: "Velvety sour cream kissed with reduced tart passion fruit reduction and fresh lime zest.",
    descricao_es: "Crema agria aterciopelada combinada con pulpa concentrada de maracuyá y ralladura cítrica.",
    ingredientes: [
      "1/2 xícara de sour cream",
      "2 colheres de sopa de polpa de maracujá concentrada",
      "1 colher de chá de mel",
      "Raspas de 1 limão",
      "1 pitada de sal"
    ],
    ingredientes_en: [
      "1/2 cup sour cream",
      "2 tbsp concentrated passion fruit pulp",
      "1 tsp honey",
      "Zest of 1 lime",
      "Pinch of sea salt"
    ],
    ingredientes_es: [
      "1/2 taza de sour cream",
      "2 cdas de pulpa de maracuyá concentrada",
      "1 cdta de miel",
      "Ralladura de 1 lima",
      "Pizca de sal"
    ],
    passos: [
      "Passe a polpa de maracujá pela peneira para tirar as sementes (reserve algumas para decorar).",
      "Misture suavemente com o sour cream, mel e raspas de limão.",
      "Sirva geladinho com empanados crocantes."
    ],
    passos_en: [
      "Strain passion fruit pulp to discard seeds (reserve a few for garnish).",
      "Gently fold into sour cream with honey and lime zest.",
      "Serve chilled with hot crispy bites."
    ],
    passos_es: [
      "Cuela la pulpa de maracuyá para quitar las semillas.",
      "Mezcla con el sour cream, la miel y la ralladura de lima.",
      "Sirve bien frío con empanizados calientes."
    ],
    receitasCompativeisIds: [23, 22, 14, 42, 12]
  },
  {
    id: 32,
    categoria: 4,
    titulo: "Sweet Chili Artesanal",
    titulo_en: "Artisanal Sweet Chili Sauce",
    titulo_es: "Salsa Sweet Chili Artesanal",
    estilo: "Thai-American Fusion",
    estilo_en: "Thai-American Fusion",
    estilo_es: "Fusión Thai-Americana",
    tempoPreparo: 8,
    picancia: 2,
    descricao: "O molho agridoce picante mais desejado da culinária asiático-americana: pimentas vermelhas picadas em calda de açúcar e alho.",
    descricao_en: "The beloved sweet & spicy dipping glaze: crushed red chilis, minced garlic, rice vinegar, and caramelized sugar.",
    descricao_es: "La salsa agridulce y picante más deseada: chiles rojos, ajo picado, vinagre de arroz y azúcar caramelizada.",
    ingredientes: [
      "1/3 xícara de vinagre de arroz ou vinagre de maçã",
      "1/3 xícara de água",
      "1/3 xícara de açúcar",
      "2 dentes de alho picadinhos",
      "1 colher de sopa de pimenta dedo-de-moça ou pimenta vermelha picada",
      "1 colher de chá de amido de milho dissolvido em 1 colher de água"
    ],
    ingredientes_en: [
      "1/3 cup rice vinegar or apple cider vinegar",
      "1/3 cup water",
      "1/3 cup granulated sugar",
      "2 garlic cloves, finely minced",
      "1 tbsp red chili flakes or fresh minced red chili",
      "1 tsp cornstarch dissolved in 1 tbsp water"
    ],
    ingredientes_es: [
      "1/3 taza de vinagre de arroz o manzana",
      "1/3 taza de agua",
      "1/3 taza de azúcar",
      "2 dientes de ajo picaditos",
      "1 cda de chile rojo fresco picado",
      "1 cdta de maicena disuelta en 1 cda de agua"
    ],
    passos: [
      "Leve o vinagre, água, açúcar, alho e pimenta para ferver em fogo médio por 3 minutos.",
      "Adicione o amido dissolvido e mexa até engrossar e ficar translúcido e brilhante.",
      "Deixe esfriar completamente antes de servir."
    ],
    passos_en: [
      "Bring vinegar, water, sugar, garlic, and chilis to a boil for 3 minutes.",
      "Stir in dissolved cornstarch slurry and whisk until thick and glass-clear.",
      "Allow to cool completely to reach optimal dipping consistency."
    ],
    passos_es: [
      "Hierve el vinagre, agua, azúcar, ajo y chile durante 3 minutos.",
      "Añade la maicena disuelta y revuelve hasta espesar.",
      "Deja enfriar por completo antes de servir."
    ],
    receitasCompativeisIds: [14, 12, 42, 1, 3]
  },
  {
    id: 33,
    categoria: 4,
    titulo: "Bang Bang Dip de Camarão & Frango",
    titulo_en: "Bonefish Bang Bang Sauce",
    titulo_es: "Salsa Bang Bang Camarón y Pollo",
    estilo: "Florida Seafood Grill",
    estilo_en: "Florida Seafood Grill",
    estilo_es: "Grill de Florida",
    tempoPreparo: 4,
    picancia: 2,
    descricao: "O molho crocante que virou febre nos restaurantes dos EUA: combinação perfeita de maionese, sweet chili e sriracha picante.",
    descricao_en: "The viral restaurant sauce that took Florida by storm: harmonious blend of mayo, sweet Thai chili, and fiery sriracha.",
    descricao_es: "La salsa viral que conquistó a Estados Unidos: unión de mayonesa, sweet chili tailandés y sriracha picante.",
    ingredientes: [
      "1/2 xícara de maionese",
      "1/4 xícara de molho sweet chili tailandês",
      "1 colher de sopa de sriracha",
      "1 colher de chá de mel",
      "1 colher de chá de vinagre de arroz"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "1/4 cup Thai sweet chili sauce",
      "1 tbsp sriracha hot sauce",
      "1 tsp honey",
      "1 tsp rice vinegar"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "1/4 taza de salsa sweet chili",
      "1 cda de sriracha",
      "1 cdta de miel",
      "1 cdta de vinagre de arroz"
    ],
    passos: [
      "Misture a maionese com o sweet chili e a sriracha numa tigela.",
      "Adicione o mel e vinagre, batendo com garfo até homogeneizar.",
      "Cubra camarões empanados ou frango crocante da air fryer."
    ],
    passos_en: [
      "Whisk mayo, sweet chili sauce, and sriracha together.",
      "Blend in honey and rice vinegar until smooth and coral-toned.",
      "Toss over crispy air-fried shrimp or chicken nuggets."
    ],
    passos_es: [
      "Mezcla la mayonesa con el sweet chili y la sriracha.",
      "Añade la miel y el vinagre batiendo bien.",
      "Baña camarones empanizados o pollo frito crujiente."
    ],
    receitasCompativeisIds: [42, 14, 45, 12, 1]
  },
  {
    id: 34,
    categoria: 4,
    titulo: "Tártaro Rústico com Alcaparras & Mostarda em Grãos",
    titulo_en: "Rustic Grain Mustard Tartar",
    titulo_es: "Tártaro Rústico con Mostaza Antigua",
    estilo: "Gastropub Inglês / EUA",
    estilo_en: "English-American Gastropub",
    estilo_es: "Gastropub Británico-Americano",
    tempoPreparo: 5,
    picancia: 0,
    descricao: "Textura rica com mostarda ancienne em grãos, alcaparras amassadas, raspas de limão siciliano e ovo cozido picadinho.",
    descricao_en: "Elevated gastropub tartar with whole grain mustard seeds, minced capers, lemon zest, and finely grated boiled egg.",
    descricao_es: "Tártaro rústico gourmet con mostaza en grano, alcaparras, ralladura de limón y huevo duro picado fino.",
    ingredientes: [
      "1/2 xícara de maionese",
      "1 colher de sopa de mostarda em grãos (l'ancienne)",
      "1 colher de sopa de alcaparras picadas",
      "1 ovo cozido ralado fino",
      "1 colher de sopa de salsinha fresca",
      "Suco de meio limão siciliano"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "1 tbsp whole grain Dijon mustard",
      "1 tbsp chopped capers",
      "1 hard-boiled egg, finely grated",
      "1 tbsp chopped fresh parsley",
      "Juice of 1/2 lemon"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "1 cda de mostaza en grano",
      "1 cda de alcaparras picadas",
      "1 huevo duro rallado fino",
      "1 cda de perejil fresco picado",
      "Jugo de medio limón amarillo"
    ],
    passos: [
      "Misture a maionese com a mostarda em grãos e o suco cítrico.",
      "Adicione as alcaparras, o ovo ralado e a salsinha.",
      "Misture delicadamente para preservar a rica textura."
    ],
    passos_en: [
      "Whisk mayonnaise with grain mustard and fresh lemon juice.",
      "Gently fold in capers, grated egg, and parsley.",
      "Refrigerate for a chunky, sophisticated seafood dip."
    ],
    passos_es: [
      "Mezcla la mayonesa con la mostaza en grano y el limón.",
      "Incorpora con cuidado las alcaparras, el huevo rallado y el perejil.",
      "Sirve bien frío con croquetas y aperitivos."
    ],
    receitasCompativeisIds: [43, 14, 22, 1, 45]
  },
  {
    id: 35,
    categoria: 4,
    titulo: "Consommé Express para Dipping de Birria",
    titulo_en: "Birria Express Dipping Consommé",
    titulo_es: "Consomé Express para Dipping de Birria",
    estilo: "Tijuana / Los Angeles Birria",
    estilo_en: "Tijuana / Los Angeles Birria",
    estilo_es: "Tijuana / Los Ángeles Birria",
    tempoPreparo: 10,
    picancia: 2,
    descricao: "O caldo aromático vermelho com especiarias, pimenta guajillo/ancho, canela e louro para mergulhar tacos crocantes.",
    descricao_en: "The intoxicating red broth scented with guajillo chilies, cumin, oregano, and cinnamon for dipping crispy tacos.",
    descricao_es: "El aromático caldo rojo con especias, chiles secos, canela y laurel para remojar tacos dorados.",
    ingredientes: [
      "1 xícara de caldo concentrado de carne",
      "1 colher de sopa de pasta de pimenta vermelha ou páprica defumada",
      "1/2 colher de chá de cominho e orégano mexicano",
      "1 pitada de canela em pó e cravo",
      "2 colheres de sopa de cebola picada e coentro para guarnecer"
    ],
    ingredientes_en: [
      "1 cup rich concentrated beef broth",
      "1 tbsp red chili paste or ancho powder",
      "1/2 tsp ground cumin and Mexican oregano",
      "Pinch of ground cinnamon and cloves",
      "2 tbsp fresh diced white onion and cilantro for topping"
    ],
    ingredientes_es: [
      "1 taza de caldo de res concentrado",
      "1 cda de pasta de chile rojo o pimentón ahumado",
      "1/2 cdta de comino y orégano",
      "Pizca de canela y clavo de olor",
      "2 cdas de cebolla picada y cilantro para decorar"
    ],
    passos: [
      "Ferva o caldo com as especiarias por 7 minutos para concentrar.",
      "Sirva bem quente em potinhos com cebola crua e coentro por cima.",
      "Mergulhe os tacos e queijadilhas douradas na air fryer a cada mordida."
    ],
    passos_en: [
      "Simmer rich broth with spices for 7 minutes to concentrate flavors.",
      "Ladle piping hot into dipping bowls topped with raw onion and cilantro.",
      "Dip crispy air-fried birria tacos before each crunchy bite."
    ],
    passos_es: [
      "Hierve el caldo con las especias durante 7 minutos.",
      "Sirve caliente en tazones con cebolla fresca y cilantro encima.",
      "Sumerge tus tacos crujientes antes de cada bocado."
    ],
    receitasCompativeisIds: [21, 22, 12, 41, 5]
  },
  {
    id: 36,
    categoria: 4,
    titulo: "Spicy Yum Yum Hibachi Sauce",
    titulo_en: "Spicy Yum Yum Hibachi Sauce",
    titulo_es: "Salsa Yum Yum Hibachi Picante",
    estilo: "Japanese-American Steakhouse",
    estilo_en: "Japanese-American Steakhouse",
    estilo_es: "Steakhouse Japonés-Americano",
    tempoPreparo: 4,
    picancia: 1,
    descricao: "O molho rosado mais famoso dos restaurantes hibachi americanos: maionese, manteiga derretida, açúcar, páprica e alho.",
    descricao_en: "The famed pink sauce from American Japanese steakhouses: sweet creamy mayo, melted butter, garlic, and smoked paprika.",
    descricao_es: "La famosa salsa rosada de los restaurantes hibachi: mayonesa dulce, mantequilla fundida, ajo y pimentón ahumado.",
    ingredientes: [
      "1/2 xícara de maionese",
      "1 colher de sopa de manteiga derretida morna",
      "1 colher de sopa de açúcar cristal ou mascavo",
      "1 colher de chá de pasta de tomate ou ketchup",
      "1/2 colher de chá de alho em pó e páprica doce",
      "1 colher de sopa de água morna para ajustar textura"
    ],
    ingredientes_en: [
      "1/2 cup mayonnaise",
      "1 tbsp melted warm butter",
      "1 tbsp sugar",
      "1 tsp tomato paste or ketchup",
      "1/2 tsp garlic powder and sweet paprika",
      "1 tbsp warm water to thin consistency"
    ],
    ingredientes_es: [
      "1/2 taza de mayonesa",
      "1 cda de mantequilla derretida tibia",
      "1 cda de azúcar",
      "1 cdta de pasta de tomate o kétchup",
      "1/2 cdta de ajo en polvo y pimentón dulce",
      "1 cda de agua tibia para ajustar la textura"
    ],
    passos: [
      "Bata a maionese com a manteiga derretida e o açúcar.",
      "Incorpore a pasta de tomate e temperos secos até obter a tonalidade rosada brilhante.",
      "Deixe na geladeira 1 hora antes de servir."
    ],
    passos_en: [
      "Whisk mayonnaise with melted butter and sugar.",
      "Blend in tomato paste, garlic powder, and paprika until salmon pink.",
      "Refrigerate for at least 1 hour for optimal flavor harmony."
    ],
    passos_es: [
      "Bate la mayonesa con la mantequilla derretida y el azúcar.",
      "Añade la pasta de tomate y especias hasta lograr el color rosado.",
      "Refrigera 1 hora antes de servir."
    ],
    receitasCompativeisIds: [14, 42, 1, 45, 12]
  },
  {
    id: 37,
    categoria: 4,
    titulo: "Hot Honey Picante da Carolina",
    titulo_en: "Carolina Hot Honey Glaze",
    titulo_es: "Hot Honey Glaseado Picante",
    estilo: "Brooklyn & Carolina Trend",
    estilo_en: "Brooklyn & Carolina Trend",
    estilo_es: "Tendencia Brooklyn y Carolina",
    tempoPreparo: 6,
    picancia: 2,
    descricao: "Mel puro infusionado em baixa temperatura com pimenta habanero, pimenta calabresa e vinagre de maçã.",
    descricao_en: "Pure wildflower honey gently infused with crushed red chilis, habanero heat, and tangy cider vinegar.",
    descricao_es: "Miel pura infusionada a baja temperatura con chile habanero, hojuelas picantes y vinagre de manzana.",
    ingredientes: [
      "1/2 xícara de mel puro de abelhas",
      "1 colher de sopa de pimenta calabresa em flocos",
      "1/2 pimenta fresca fatiada fina",
      "1 colher de chá de vinagre de maçã",
      "1 pitada de sal marinho"
    ],
    ingredientes_en: [
      "1/2 cup pure wildflower honey",
      "1 tbsp crushed red pepper flakes",
      "1/2 fresh red chili, thinly sliced",
      "1 tsp apple cider vinegar",
      "Pinch of sea salt"
    ],
    ingredientes_es: [
      "1/2 taza de miel pura",
      "1 cda de hojuelas de chile seco",
      "1/2 chile rojo fresco en rodajas",
      "1 cdta de vinagre de manzana",
      "Pizca de sal marina"
    ],
    passos: [
      "Aqueça o mel com as pimentas em fogo bem baixo por 5 minutos sem deixar ferver.",
      "Adicione o vinagre de maçã e tire do fogo.",
      "Derrame sobre pizzas, frango crocante ou palitos de queijo quentes."
    ],
    passos_en: [
      "Warm honey and chilis over very low heat for 5 minutes without boiling.",
      "Stir in cider vinegar and remove from heat.",
      "Drizzle warm over crispy chicken, pizzas, or mozzarella sticks."
    ],
    passos_es: [
      "Calienta la miel con los chiles a fuego muy bajo por 5 minutos sin hervir.",
      "Añade el vinagre de manzana y retira del fuego.",
      "Baña pizzas, pollo frito crujiente o palitos de queso calientes."
    ],
    receitasCompativeisIds: [3, 42, 51, 11, 2]
  },
  {
    id: 38,
    categoria: 4,
    titulo: "Korean Gochujang Glaze",
    titulo_en: "Korean Gochujang Sweet Glaze",
    titulo_es: "Glaseado Coreano Gochujang",
    estilo: "K-Food Street Style",
    estilo_en: "K-Food Street Style",
    estilo_es: "K-Food Street Style",
    tempoPreparo: 6,
    picancia: 2,
    descricao: "O esmalte brilhante do frango frito coreano: pasta fermentada gochujang, mel, shoyu, óleo de gergelim torrado e gengibre.",
    descricao_en: "The glossy coating of legendary Korean fried chicken: fermented gochujang chili paste, honey, soy sauce, toasted sesame oil, and ginger.",
    descricao_es: "El glaseado brillante del pollo frito coreano: pasta fermentada gochujang, miel, salsa de soya, aceite de sésamo y jengibre.",
    ingredientes: [
      "2 colheres de sopa de pasta gochujang",
      "2 colheres de sopa de mel ou xarope de milho",
      "1 colher de sopa de molho de soja (shoyu)",
      "1 colher de chá de óleo de gergelim torrado",
      "1 dente de alho ralado e 1 colher de chá de gengibre ralado",
      "Sementes de gergelim para finalizar"
    ],
    ingredientes_en: [
      "2 tbsp Korean gochujang chili paste",
      "2 tbsp honey or rice syrup",
      "1 tbsp soy sauce",
      "1 tsp toasted sesame oil",
      "1 grated garlic clove and 1 tsp grated ginger",
      "Toasted sesame seeds for garnish"
    ],
    ingredientes_es: [
      "2 cdas de pasta gochujang",
      "2 cdas de miel o jarabe",
      "1 cda de salsa de soya",
      "1 cdta de aceite de sésamo tostado",
      "1 diente de ajo y 1 cdta de jengibre rallado",
      "Semillas de sésamo para decorar"
    ],
    passos: [
      "Cozinhe o gochujang, mel, shoyu, alho e gengibre em panela pequena por 3 minutos.",
      "Desligue e adicione o óleo de gergelim torrado.",
      "Pincele ou envolva os alimentos recém-saídos da cesta da air fryer."
    ],
    passos_en: [
      "Simmer gochujang, honey, soy sauce, garlic, and ginger for 3 minutes.",
      "Remove from heat and swirl in toasted sesame oil.",
      "Toss over crispy wings or Korean corn dogs; sprinkle with sesame seeds."
    ],
    passos_es: [
      "Cocina el gochujang, miel, soya, ajo y jengibre por 3 minutos.",
      "Retira del fuego y mezcla el aceite de sésamo.",
      "Envuelve los bocados crujientes y decora con semillas de sésamo."
    ],
    receitasCompativeisIds: [12, 14, 42, 11, 1]
  },
  {
    id: 39,
    categoria: 4,
    titulo: "Nashville Hot Oil Dip",
    titulo_en: "Nashville Hot Oil Dip",
    titulo_es: "Aceite Picante Nashville Hot",
    estilo: "Tennessee Hot Chicken",
    estilo_en: "Tennessee Hot Chicken",
    estilo_es: "Pollo Picante de Tennessee",
    tempoPreparo: 5,
    picancia: 3,
    descricao: "O óleo vermelho ardente do frango de Nashville: óleo vegetal quente temperado com montanhas de pimenta caiena, açúcar mascavo e páprica.",
    descricao_en: "The incendiary red glaze of Nashville hot chicken: shimmering spiced oil loaded with cayenne, dark brown sugar, and garlic.",
    descricao_es: "El aceite ardiente de Nashville: aceite tibio con abundante cayena, azúcar moreno y pimentón para bañar el pollo crujiente.",
    ingredientes: [
      "1/3 xícara de óleo vegetal ou manteiga derretida",
      "1 colher e meia de sopa de pimenta caiena em pó",
      "1 colher de sopa de açúcar mascavo",
      "1 colher de chá de páprica picante",
      "1 colher de chá de alho em pó",
      "1/2 colher de chá de sal fino"
    ],
    ingredientes_en: [
      "1/3 cup hot frying oil or melted butter",
      "1.5 tbsp cayenne pepper powder",
      "1 tbsp dark brown sugar",
      "1 tsp hot smoked paprika",
      "1 tsp garlic powder",
      "1/2 tsp fine sea salt"
    ],
    ingredientes_es: [
      "1/3 taza de aceite vegetal o mantequilla derretida caliente",
      "1.5 cdas de pimienta de cayena en polvo",
      "1 cda de azúcar moreno",
      "1 cdta de pimentón picante",
      "1 cdta de ajo en polvo",
      "1/2 cdta de sal fina"
    ],
    passos: [
      "Aqueça o óleo com cuidado em uma panelinha.",
      "Coloque todas as especiarias e açúcar numa tigela refratária.",
      "Despeje o óleo quente sobre as especiarias para 'fritar' a pimenta e soltar o aroma defumado inconfundível.",
      "Pincele generosamente no frango crocante."
    ],
    passos_en: [
      "Warm oil carefully in a small pan until shimmering.",
      "Combine all spices and brown sugar in a heatproof bowl.",
      "Pour hot oil over spices to bloom the cayenne and create that iconic dark red hue.",
      "Brush generously onto hot air-fried chicken."
    ],
    passos_es: [
      "Calienta el aceite con cuidado.",
      "Coloca todas las especias y el azúcar en un recipiente resistente al calor.",
      "Vierte el aceite caliente sobre las especias para liberar todo el aroma.",
      "Pincela generosamente sobre el pollo frito."
    ],
    receitasCompativeisIds: [42, 11, 41, 1, 45]
  },
  {
    id: 40,
    categoria: 4,
    titulo: "Maple Dijon Glaze",
    titulo_en: "Pure Maple Dijon Glaze",
    titulo_es: "Glaseado Maple Dijon",
    estilo: "New England Bistro",
    estilo_en: "New England Bistro",
    estilo_es: "Bistró de Nueva Inglaterra",
    tempoPreparo: 4,
    picancia: 0,
    descricao: "Xarope de bordo genuíno (maple syrup) reduzido com mostarda Dijon e um toque de manteiga e pimenta preta moída.",
    descricao_en: "Pure dark amber maple syrup reduced with sharp French Dijon, melted butter, and freshly cracked black pepper.",
    descricao_es: "Jarabe de arce puro (maple) reducido con mostaza Dijon, mantequilla fundida y pimienta negra.",
    ingredientes: [
      "1/3 xícara de xarope de bordo puro (maple syrup)",
      "2 colheres de sopa de mostarda Dijon",
      "1 colher de sopa de manteiga",
      "1/2 colher de chá de vinagre de maçã",
      "Pimenta-do-reino moída na hora"
    ],
    ingredientes_en: [
      "1/3 cup pure dark maple syrup",
      "2 tbsp Dijon mustard",
      "1 tbsp unsalted butter",
      "1/2 tsp apple cider vinegar",
      "Freshly cracked black pepper"
    ],
    ingredientes_es: [
      "1/3 taza de jarabe de arce puro (maple)",
      "2 cdas de mostaza Dijon",
      "1 cda de mantequilla",
      "1/2 cdta de vinagre de manzana",
      "Pimienta negra recién molida"
    ],
    passos: [
      "Aqueça o xarope de bordo com a manteiga até derreter.",
      "Adicione a mostarda Dijon e o vinagre de maçã batendo com um garfo.",
      "Use como esmalte brilhante para bacon, costeletas e sanduíches."
    ],
    passos_en: [
      "Warm maple syrup and butter together until melted.",
      "Whisk in Dijon mustard and apple cider vinegar.",
      "Brush over bacon, ribs, sausages, or fried chicken sliders."
    ],
    passos_es: [
      "Calienta el jarabe de maple con la mantequilla.",
      "Incorpora la mostaza Dijon y el vinagre batiendo.",
      "Pincela sobre tocino, costillitas y bocadillos."
    ],
    receitasCompativeisIds: [2, 42, 41, 11, 45]
  }
];

// Enrich all sauces with verified realistic gourmet sauce photography
saucesData.forEach(s => {
  if (!s.imagem && sauceImageMap[s.id]) {
    s.imagem = sauceImageMap[s.id];
  }
});
