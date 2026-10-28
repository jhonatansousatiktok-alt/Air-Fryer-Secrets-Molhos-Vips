import { Recipe } from '../types';
import { recipeImageMap } from './recipeImages';

export const recipesData: Recipe[] = [
  // ==========================================
  // CAPÍTULO 1: PEQUENOS PETISCOS (1 A 10)
  // ==========================================
  {
    id: 1,
    capitulo: 1,
    titulo: "Pasta Chips Super Crocantes do TikTok",
    titulo_en: "Viral TikTok Crispy Pasta Chips",
    titulo_es: "Chips de Pasta Súper Crujientes de TikTok",
    subtitulo: "O aperitivo mais viral do mundo com queijo parmesão e orégano",
    subtitulo_en: "The global viral snack tossed with Parmesan, oregano, and olive oil",
    subtitulo_es: "El bocadillo más viral del mundo con queso parmesano y orégano",
    tempoPreparo: 10,
    tempoAirFryer: 10,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["viral", "petisco", "queijo", "crocante"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Macarrão penne ou rigatoni cozido al dente", nome_en: "Penne or rigatoni pasta, cooked al dente", nome_es: "Pasta penne o rigatoni cocida al dente", qtd: 250, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Azeite de oliva extravirgem", nome_en: "Extra virgin olive oil", nome_es: "Aceite de oliva virgen extra", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Queijo parmesão ralado na hora", nome_en: "Freshly grated Parmesan cheese", nome_es: "Queso parmesano recién rallado", qtd: 50, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Orégano desidratado e alho em pó", nome_en: "Dried oregano and garlic powder", nome_es: "Orégano seco y ajo en polvo", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" },
      { nome: "Páprica defumada e sal marinho", nome_en: "Smoked paprika and sea salt", nome_es: "Pimentón ahumado y sal marina", qtd: 1, unidade: "pitada", unidade_en: "pinch", unidade_es: "pizca" }
    ],
    passos: [
      "Cozinhe a massa em água salgada até ficar al dente. Escorra muito bem e seque o excesso de umidade em um pano limpo.",
      "Em uma tigela ampla, envolva a massa com o azeite de oliva, o alho em pó, a páprica e o queijo parmesão até cobrir cada pedaço.",
      "Pré-aqueça a air fryer a 200°C por 3 minutos.",
      "Coloque a massa na cesta em uma única camada sem amontoar.",
      "Asse por 10 minutos a 200°C, sacudindo a cesta com vigor aos 5 minutos para dourar por igual.",
      "Retire quando estiver dourada e estalando de crocante. Sirva imediatamente."
    ],
    passos_en: [
      "Cook pasta in salted water until al dente. Drain thoroughly and pat dry with paper towels.",
      "Toss warm pasta in a bowl with olive oil, garlic powder, paprika, and grated Parmesan until evenly coated.",
      "Preheat air fryer to 200°C (390°F) for 3 minutes.",
      "Spread pasta evenly in the basket in a single layer.",
      "Cook for 10 minutes at 200°C, shaking vigorously at minute 5 for uniform crunch.",
      "Remove when blistered and crisp. Serve warm with signature dips."
    ],
    passos_es: [
      "Cocina la pasta en agua con sal hasta que esté al dente. Escurre y seca muy bien.",
      "En un bol grande, mezcla la pasta con aceite de oliva, ajo en polvo, pimentón y parmesano.",
      "Precalienta la air fryer a 200°C por 3 minutos.",
      "Coloca la pasta en una sola capa en la cesta.",
      "Cocina durante 10 minutos a 200°C, sacudiendo la cesta al minuto 5.",
      "Retira cuando esté dorada y bien crujiente. Sirve de inmediato."
    ],
    dicaDoChef: "O segredo número 1 para a crocância perfeita é secar muito bem o macarrão antes de temperar; água residual na superfície gera vapor e amolece a casquinha.",
    dicaDoChef_en: "The #1 secret for crunch is drying the cooked pasta thoroughly with paper towels before seasoning; leftover surface moisture creates steam.",
    dicaDoChef_es: "El secreto número 1 para el crujiente ideal es secar muy bien la pasta con papel de cocina antes de sazonar para evitar vapor.",
    molhosSugeridosIds: [23, 1, 37]
  },
  {
    id: 2,
    capitulo: 1,
    titulo: "Twisted Bacon Caramelizado com Maple",
    titulo_en: "Candied Maple Twisted Bacon",
    titulo_es: "Twisted Bacon Caramelizado con Maple",
    subtitulo: "Tiras de bacon torcidas crocantes por fora e macias por dentro",
    subtitulo_en: "Crispy-chewy spiraled bacon glazed with brown sugar and real maple",
    subtitulo_es: "Tiras de tocino en espiral caramelizadas con azúcar moreno y arce",
    tempoPreparo: 5,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["bacon", "caramelo", "doce-salgado", "cafe-da-manha"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Fatias grossas de bacon de boa qualidade", nome_en: "Thick-cut smoked bacon strips", nome_es: "Tiras gruesas de tocino ahumado", qtd: 8, unidade: "fatias", unidade_en: "slices", unidade_es: "tiras" },
      { nome: "Açúcar mascavo escuro", nome_en: "Dark brown sugar", nome_es: "Azúcar moreno", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Xarope de bordo puro ou mel", nome_en: "Pure maple syrup or honey", nome_es: "Jarabe de arce puro o miel", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Pimenta-do-reino preta moída", nome_en: "Freshly ground black pepper", nome_es: "Pimienta negra recién molida", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Segure as duas pontas de cada fatia de bacon e torça em espiral firme (como um espaguete torcido).",
      "Pincele suavemente com o xarope de bordo e polvilhe com o açúcar mascavo e pimenta-do-reino.",
      "Disponha as espirais na cesta da air fryer lado a lado, sem sobrepor.",
      "Asse a 190°C por 12 a 14 minutos, virando na metade do tempo.",
      "Retire e deixe descansar em uma grelha por 3 minutos: o açúcar vai endurecer em uma casquinha de vidro caramelizada irresistível."
    ],
    passos_en: [
      "Hold both ends of each bacon strip and twist tightly into a spiral stick.",
      "Brush with maple syrup and dust with brown sugar and cracked pepper.",
      "Arrange the twists side by side in the air fryer basket.",
      "Air fry at 190°C (375°F) for 12 to 14 mins, flipping halfway.",
      "Rest on a wire rack for 3 minutes so the sugar cools into a glossy crunchy candy glaze."
    ],
    passos_es: [
      "Sujeta los extremos de cada tira de tocino y gíralos formando una espiral firme.",
      "Pincela con jarabe de arce y espolvorea azúcar moreno y pimienta.",
      "Coloca las espirales en la cesta una junto a otra sin encimar.",
      "Cocina a 190°C por 12-14 minutos, volteando a la mitad.",
      "Deja reposar 3 minutos sobre una rejilla para que el caramelo cristalice crujiente."
    ],
    dicaDoChef: "Torcer o bacon retém a umidade no centro enquanto as bordas espiraladas caramelizam em alta temperatura, criando contraste textural sublime.",
    dicaDoChef_en: "Twisting the bacon concentrates rich fat and juices inside while outer ridges crisp up into crunchy caramel ridges.",
    dicaDoChef_es: "Torcer el tocino conserva la jugosidad interior mientras los bordes se doran caramelizados al máximo.",
    molhosSugeridosIds: [40, 2, 10]
  },
  {
    id: 3,
    capitulo: 1,
    titulo: "Palitos de Mussarela com Casquinha Crocante",
    titulo_en: "Gooey Mozzarella Sticks with Herb Crust",
    titulo_es: "Palitos de Mozzarella Ultra Crujientes",
    subtitulo: "Queijo esticando infinito sem vazar na cesta da Air Fryer",
    subtitulo_en: "Maximum cheese pull without leaking in your air fryer basket",
    subtitulo_es: "Queso elástico infinito sin derramarse en la cesta",
    tempoPreparo: 15,
    tempoAirFryer: 6,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["queijo", "petisco", "empanado", "criancas"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Queijo mussarela em bastões firmes", nome_en: "Low-moisture mozzarella cheese sticks", nome_es: "Bastones firmes de queso mozzarella", qtd: 8, unidade: "unidades", unidade_en: "sticks", unidade_es: "unidades" },
      { nome: "Farinha de trigo", nome_en: "All-purpose flour", nome_es: "Harina de trigo común", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Ovos batidos com 1 colher de leite", nome_en: "Eggs beaten with 1 tbsp milk", nome_es: "Huevos batidos con 1 cda de leche", qtd: 2, unidade: "unidades", unidade_en: "large eggs", unidade_es: "unidades" },
      { nome: "Farinha panko temperada com orégano e alho", nome_en: "Panko breadcrumbs with garlic & oregano", nome_es: "Pan panko sazonado con ajo y orégano", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Azeite em spray para dourar", nome_en: "Olive oil spray", nome_es: "Aceite en spray", qtd: 1, unidade: "fio", unidade_en: "mist", unidade_es: "rociado" }
    ],
    passos: [
      "Corte a mussarela em bastões de cerca de 8 cm.",
      "Passe os palitos primeiro na farinha de trigo, depois no ovo batido e na farinha panko.",
      "TRUQUE OBRIGATÓRIO: Repita o processo (passe de novo no ovo e de novo no panko) para criar uma blindagem dupla.",
      "Leve os palitos ao congelador por no mínimo 40 minutos (devem estar bem congelados!).",
      "Borrife azeite em spray na cesta e nos palitos. Asse na air fryer a 200°C por apenas 5 a 6 minutos até ficarem bem dourados."
    ],
    passos_en: [
      "Cut mozzarella into 8cm (3-inch) sturdy sticks.",
      "Dredge sticks in flour, dip into beaten egg, then roll in seasoned panko crumbs.",
      "CRITICAL CHEF TRICK: Double-dip back into the egg and once more into panko for an armor shield.",
      "Freeze sticks solid in the freezer for at least 40 minutes.",
      "Mist basket and sticks with olive oil spray. Air fry at 200°C (400°F) for just 5-6 mins until crisp."
    ],
    passos_es: [
      "Corta la mozzarella en bastones de 8 cm de largo.",
      "Pasa cada bastón por harina, luego por huevo batido y después por panko.",
      "TRUCO INFALIBLE: Repite el proceso (otra vez huevo y otra vez panko) para sellar el queso.",
      "Congela los palitos durante al menos 40 minutos (deben estar bien firmes).",
      "Rocía aceite en spray y cocina a 200°C por 5-6 minutos hasta dorar."
    ],
    dicaDoChef: "O empanamento duplo somado ao congelamento prévio é a única maneira científica de impedir que a mussarela derreta e escorra antes da casquinha dourar.",
    dicaDoChef_en: "Double breading plus solid pre-freezing is the proven scientific method to ensure molten cheese pull without any blowouts in the basket.",
    dicaDoChef_es: "El doble rebozado y la congelación previa garantizan que el queso se funda elástico por dentro sin derramarse.",
    molhosSugeridosIds: [37, 4, 15]
  },
  {
    id: 4,
    capitulo: 1,
    titulo: "Batatas Rústicas com Alecrim e Parmesão",
    titulo_en: "Golden Rosemary & Parmesan Wedges",
    titulo_es: "Gajos de Papa Rústica con Romero y Parmesano",
    subtitulo: "Interior macio como purê e casquinha que quebra na mordida",
    subtitulo_en: "Puffy fluffy interior with an acoustic, shattered-glass exterior",
    subtitulo_es: "Interior suave como puré y exterior crujiente inolvidable",
    tempoPreparo: 10,
    tempoAirFryer: 18,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["batata", "rustica", "crocante", "vegetariano"],
    shakeBasketMinute: 9,
    ingredientes: [
      { nome: "Batatas inglesas médias com casca lavadas", nome_en: "Medium russet potatoes, scrubbed", nome_es: "Papas medianas lavadas con piel", qtd: 4, unidade: "unidades", unidade_en: "potatoes", unidade_es: "unidades" },
      { nome: "Azeite de oliva", nome_en: "Olive oil", nome_es: "Aceite de oliva", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Alecrim fresco picado", nome_en: "Fresh chopped rosemary", nome_es: "Romero fresco picado", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Alho em pó e páprica doce", nome_en: "Garlic powder and sweet paprika", nome_es: "Ajo en polvo y pimentón dulce", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" },
      { nome: "Queijo parmesão ralado fininho", nome_en: "Finely grated Parmesan", nome_es: "Queso parmesano rallado", qtd: 3, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Corte as batatas ao meio e depois em gomos (wedges) de tamanho uniforme.",
      "Deixe de molho em água bem gelada por 15 minutos para eliminar o excesso de amido superficial. Seque 100% com pano limpo.",
      "Tempere os gomos com azeite, alho em pó, páprica, alecrim e sal marinho.",
      "Asse na air fryer a 200°C por 18 minutos, sacudindo a cesta a cada 6 minutos.",
      "Nos últimos 2 minutos, polvilhe o parmesão ralado por cima para gratinar."
    ],
    passos_en: [
      "Cut potatoes into uniform chunky wedges.",
      "Soak in ice water for 15 minutes to release excess surface starch, then dry thoroughly.",
      "Toss with olive oil, rosemary, garlic powder, paprika, and sea salt.",
      "Air fry at 200°C (400°F) for 18 minutes, shaking basket every 6 minutes.",
      "Sprinkle Parmesan over wedges for the final 2 minutes to melt and crisp."
    ],
    passos_es: [
      "Corta las papas en gajos uniformes con su piel.",
      "Remójalas en agua helada por 15 minutos para quitar el almidón superficial y sécalas muy bien.",
      "Condimenta con aceite, ajo en polvo, romero, pimentón y sal.",
      "Cocina en air fryer a 200°C por 18 minutos agitando cada 6 minutos.",
      "Espolvorea el queso parmesano en los últimos 2 minutos para gratinar."
    ],
    dicaDoChef: "A água gelada remove o amido livre que faz a batata grudar ou amolecer, resultando no melhor contraste de casca estaladiça e miolo cremoso.",
    dicaDoChef_en: "Ice water soak washes away loose starch that causes sogginess, allowing the edges to form a crisp blistered shell.",
    dicaDoChef_es: "El remojo en agua helada retira el almidón libre, logrando una corteza dorada y centro súper tierno.",
    molhosSugeridosIds: [5, 23, 13]
  },
  {
    id: 5,
    capitulo: 1,
    titulo: "Jalapeño Poppers Recheados com Cream Cheese e Bacon",
    titulo_en: "Bacon-Wrapped Jalapeño Poppers",
    titulo_es: "Jalapeño Poppers Rellenos con Tocino",
    subtitulo: "Pimentas jalapeño recheadas com blend de queijos e envoltas em bacon",
    subtitulo_en: "Spicy peppers stuffed with 3 cheeses and wrapped in crispy bacon",
    subtitulo_es: "Chiles jalapeños rellenos con crema de queso y envueltos en tocino",
    tempoPreparo: 12,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["picante", "bacon", "queijo", "tex-mex"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Pimentas jalapeño frescas cortadas ao meio sem sementes", nome_en: "Fresh jalapeño peppers, halved and seeded", nome_es: "Chiles jalapeños frescos cortados a la mitad sin semillas", qtd: 6, unidade: "unidades", unidade_en: "peppers", unidade_es: "unidades" },
      { nome: "Cream cheese em temperatura ambiente", nome_en: "Cream cheese, softened", nome_es: "Queso crema a temperatura ambiente", qtd: 150, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Queijo cheddar ralado fino", nome_en: "Sharp cheddar, shredded", nome_es: "Queso cheddar rallado fino", qtd: 50, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Fatias finas de bacon", nome_en: "Thin bacon strips", nome_es: "Tiras delgadas de tocino", qtd: 6, unidade: "fatias", unidade_en: "slices", unidade_es: "tiras" },
      { nome: "Alho em pó e cebolinha picada", nome_en: "Garlic powder and chopped scallions", nome_es: "Ajo en polvo y cebollín picado", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Abra os jalapeños ao meio no sentido longitudinal e retire as sementes e membranas brancas com uma colher pequena.",
      "Misture o cream cheese com o queijo cheddar, alho em pó e cebolinha.",
      "Preencha as metades das pimentas com o creme de queijo.",
      "Envolva cada metade com meia fatia de bacon, prendendo se necessário com palito.",
      "Asse na air fryer a 190°C por 12 minutos até o bacon ficar bem dourado e o queijo borbulhante."
    ],
    passos_en: [
      "Halve jalapeños lengthwise and scrape out seeds and ribs with a spoon.",
      "Mix cream cheese with shredded cheddar, garlic powder, and scallions.",
      "Fill pepper cavities with cheese mixture.",
      "Wrap each half with a slice of bacon, securing with a toothpick if desired.",
      "Air fry at 190°C (375°F) for 12 minutes until bacon is browned and cheese is bubbling."
    ],
    passos_es: [
      "Corta los jalapeños por la mitad a lo largo y retira las semillas.",
      "Mezcla el queso crema con el cheddar, ajo en polvo y cebollín.",
      "Rellena cada mitad con la crema de quesos.",
      "Envuelve cada una con una tira de tocino asegurando si deseas con un palillo.",
      "Cocina en air fryer a 190°C por 12 minutos hasta que el tocino esté bien dorado."
    ],
    dicaDoChef: "Ao retirar as sementes e a membrana branca interna, você elimina o ardor excessivo, mantendo apenas o perfume do pimentão e sabor delicioso.",
    dicaDoChef_en: "Scraping away all the white pith and seeds controls the heat, leaving pure chili aroma and zero harsh burn.",
    dicaDoChef_es: "Al quitar las venas blancas y semillas regulas el picor, dejando un aroma fresco y delicioso.",
    molhosSugeridosIds: [13, 20, 2]
  },
  {
    id: 6,
    capitulo: 1,
    titulo: "Cogumelos Paris Empanados Dourados",
    titulo_en: "Golden Air-Fried Crispy Mushrooms",
    titulo_es: "Champiñones Crujientes con Ajo y Hierbas",
    subtitulo: "Cogumelos inteiros suculentos por dentro e crosta panko aromática",
    subtitulo_en: "Whole juicy mushrooms encased in seasoned, acoustic panko crunch",
    subtitulo_es: "Champiñones jugosos por dentro con rebozado crujiente de panko",
    tempoPreparo: 10,
    tempoAirFryer: 8,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["cogumelos", "vegetariano", "petisco"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Cogumelos Paris inteiros limpos", nome_en: "Whole fresh button mushrooms", nome_es: "Champiñones frescos enteros limpios", qtd: 250, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Ovos batidos", nome_en: "Beaten eggs", nome_es: "Huevos batidos", qtd: 2, unidade: "unidades", unidade_en: "eggs", unidade_es: "unidades" },
      { nome: "Farinha panko com alho e salsinha seca", nome_en: "Panko breadcrumbs with garlic & parsley", nome_es: "Pan panko sazonado con ajo y perejil", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha de trigo com sal e pimenta", nome_en: "Seasoned all-purpose flour", nome_es: "Harina sazonada", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Limpe os cogumelos com pano úmido (não lave em água corrente para não encharcar).",
      "Passe os cogumelos na farinha de trigo, depois no ovo e cubra bem com panko.",
      "Borrife azeite e asse na air fryer a 190°C por 8 a 9 minutos.",
      "Retire e sirva imediatamente bem crocante com molho de alho."
    ],
    passos_en: [
      "Wipe mushrooms clean with damp cloth (never submerge in water).",
      "Dredge in flour, dip in egg, then press into seasoned panko.",
      "Lightly spray with oil and air fry at 190°C (375°F) for 8 to 9 mins.",
      "Serve piping hot with a creamy garlic dipping sauce."
    ],
    passos_es: [
      "Limpia los champiñones con un paño húmedo sin sumergirlos en agua.",
      "Pásalos por harina, huevo y cúbrelos con panko sazonado.",
      "Rocía aceite y cocina a 190°C por 8-9 minutos.",
      "Sirve de inmediato con dip cremoso de ajo."
    ],
    dicaDoChef: "Nunca lave cogumelos em água abundante; eles funcionam como esponjas e liberariam água na air fryer, estragando a casquinha crocante.",
    dicaDoChef_en: "Never soak mushrooms in water; they act like sponges and would steam out from the inside, ruining your crisp exterior.",
    dicaDoChef_es: "Nunca sumerjas los champiñones en agua; límpialos con paño para que no absorban humedad.",
    molhosSugeridosIds: [23, 5, 17]
  },
  {
    id: 7,
    capitulo: 1,
    titulo: "Chips de Abobrinha com Parmesão e Limão",
    titulo_en: "Crispy Parmesan Zucchini Chips",
    titulo_es: "Chips de Calabacín con Parmesano y Limón",
    subtitulo: "Leve, crocante e saudável para beliscar sem culpa",
    subtitulo_en: "Guilt-free golden wafers seasoned with Parmesan and lemon pepper",
    subtitulo_es: "Crujiente y saludable para picar sin remordimientos",
    tempoPreparo: 8,
    tempoAirFryer: 10,
    temperatura: 180,
    rendimento: 3,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["low-carb", "saudavel", "chips", "vegetariano"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Abobrinhas italianas médias fatiadas finas (rodelas)", nome_en: "Medium Italian zucchinis, sliced thin", nome_es: "Calabacines medianos en rodajas finas", qtd: 2, unidade: "unidades", unidade_en: "zucchinis", unidade_es: "unidades" },
      { nome: "Queijo parmesão ralado fininho", nome_en: "Finely grated Parmesan", nome_es: "Queso parmesano rallado", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha panko ou fubá fino", nome_en: "Panko breadcrumbs or fine cornmeal", nome_es: "Pan panko o harina de maíz fina", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Azeite e lemon pepper a gosto", nome_en: "Olive oil and lemon pepper seasoning", nome_es: "Aceite de oliva y lemon pepper", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" }
    ],
    passos: [
      "Fatie as abobrinhas em rodelas de 3mm de espessura.",
      "Salpique sal e deixe sobre papel toalha por 5 minutos para suar o excesso de líquido.",
      "Passe levemente no azeite e pressione as duas faces na mistura de parmesão, panko e lemon pepper.",
      "Asse a 180°C por 10 minutos até dourarem e secarem.",
      "Deixe esfriar por 2 minutos para ganhar rigidez e crocância."
    ],
    passos_en: [
      "Slice zucchini into 3mm uniform thin rounds.",
      "Sprinkle salt and rest on paper towels for 5 minutes to weep moisture.",
      "Lightly oil and press both sides into Parmesan, panko, and lemon pepper.",
      "Air fry at 180°C (360°F) for 10 minutes until golden and dry.",
      "Let cool 2 minutes on the counter to crisp up into sturdy chips."
    ],
    passos_es: [
      "Corta los calabacines en rodajas de 3 mm.",
      "Colócalos sobre papel absorbente con sal por 5 minutos para retirar líquido.",
      "Unta con aceite y pasa por la mezcla de parmesano, panko y lemon pepper.",
      "Cocina a 180°C por 10 minutos hasta que estén dorados y secos.",
      "Deja reposar 2 minutos para que alcancen su máxima firmeza."
    ],
    dicaDoChef: "A etapa de desidratação prévia com papel toalha garante que a abobrinha fique sequinha como um chip, em vez de mole e empapada.",
    dicaDoChef_en: "Salting and weeping the zucchini first prevents moisture build-up, turning them into wafer-crisp snacks.",
    dicaDoChef_es: "Secar las rodajas con papel toalla evita que el calabacín suelte agua y garantiza chips crujientes.",
    molhosSugeridosIds: [27, 21, 6]
  },
  {
    id: 8,
    capitulo: 1,
    titulo: "Espetinhos de Frango Enrolados no Bacon com BBQ",
    titulo_en: "Bacon-Wrapped BBQ Chicken Skewers",
    titulo_es: "Brochetas de Pollo con Tocino y BBQ",
    subtitulo: "Cubos de peito de frango super macios abraçados por bacon tostado",
    subtitulo_en: "Tender chicken breast bites wrapped in smoky bacon and caramelized BBQ",
    subtitulo_es: "Bocados de pollo tiernos envueltos en tocino y glaseados con BBQ",
    tempoPreparo: 10,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["frango", "bacon", "bbq", "petisco"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Peito de frango cortado em cubos de 3 cm", nome_en: "Chicken breast, cut into 1-inch cubes", nome_es: "Pechuga de pollo en cubos de 3 cm", qtd: 400, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Bacon em tiras", nome_en: "Bacon strips", nome_es: "Tiras de tocino", qtd: 8, unidade: "fatias", unidade_en: "slices", unidade_es: "tiras" },
      { nome: "Molho barbecue defumado para pincelar", nome_en: "Smoky BBQ sauce for glazing", nome_es: "Salsa BBQ ahumada para glasear", qtd: 3, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Páprica doce, alho e sal", nome_en: "Paprika, garlic, and sea salt", nome_es: "Pimentón, ajo y sal", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Tempere o frango com páprica, alho em pó e sal.",
      "Enrole meia fatia de bacon em cada cubo de frango e espete em palitos de madeira (cortados no tamanho da sua air fryer).",
      "Asse a 190°C por 9 minutos.",
      "Abra a cesta, pincele molho barbecue generosamente e volte por mais 3 minutos para caramelizar."
    ],
    passos_en: [
      "Season chicken cubes with paprika, garlic powder, and salt.",
      "Wrap each cube with half a bacon slice and thread onto trimmed bamboo skewers.",
      "Air fry at 190°C (375°F) for 9 minutes.",
      "Brush liberally with BBQ sauce and return for 3 minutes to bubble and glaze."
    ],
    passos_es: [
      "Sazona el pollo con pimentón, ajo en polvo y sal.",
      "Envuelve cada cubo con tocino y ensarta en brochetas cortadas al tamaño de la cesta.",
      "Cocina a 190°C por 9 minutos.",
      "Pincela salsa BBQ abundante y cocina 3 minutos más para caramelizar."
    ],
    dicaDoChef: "A gordura do bacon derrete e penetra no peito de frango, mantendo a carne incrivelmente suculenta enquanto o exterior fica caramelizado.",
    dicaDoChef_en: "The rendering bacon bakes flavor right into the lean chicken breast, preventing dryness entirely.",
    dicaDoChef_es: "La grasa del tocino hidrata la pechuga de pollo haciéndola jugosísima por dentro.",
    molhosSugeridosIds: [12, 18, 13]
  },
  {
    id: 9,
    capitulo: 1,
    titulo: "Bites de Mac & Cheese Empanados e Dourados",
    titulo_en: "Crispy Fried Mac & Cheese Bites",
    titulo_es: "Bocados de Mac & Cheese Fritos Crujientes",
    subtitulo: "A reinvenção do clássico americano em esferas crocantes de puro queijo",
    subtitulo_en: "The American diner staple turned into bite-sized golden molten cheese bombs",
    subtitulo_es: "El clásico americano convertido en esferas doradas de puro queso",
    tempoPreparo: 15,
    tempoAirFryer: 8,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "medio",
    tags: ["mac-and-cheese", "queijo", "empanado", "viral"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Mac & cheese cremoso gelado da geladeira", nome_en: "Cold leftover creamy mac and cheese", nome_es: "Mac & cheese frío y firme de la nevera", qtd: 300, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Farinha panko", nome_en: "Panko breadcrumbs", nome_es: "Pan panko", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Ovos batidos", nome_en: "Eggs, beaten", nome_es: "Huevos batidos", qtd: 2, unidade: "unidades", unidade_en: "eggs", unidade_es: "unidades" },
      { nome: "Farinha de trigo", nome_en: "All-purpose flour", nome_es: "Harina de trigo", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Use sobras de mac & cheese bem geladas e firmes.",
      "Com uma colher de sorvete, modele bolinhas compactas e aperte com as mãos.",
      "Passe na farinha de trigo, depois nos ovos batidos e por fim na farinha panko.",
      "Congele as bolinhas por 30 minutos.",
      "Borrife azeite e asse na air fryer a 200°C por 8 minutos até a casca ficar dourada e crocante."
    ],
    passos_en: [
      "Use firmly chilled leftover mac and cheese.",
      "Scoop with an ice cream scoop and press firmly into compact balls.",
      "Roll in flour, dip in beaten eggs, and coat thoroughly with panko.",
      "Freeze for 30 minutes until solid.",
      "Mist with oil spray and air fry at 200°C (400°F) for 8 minutes until golden crisp."
    ],
    passos_es: [
      "Usa mac & cheese bien frío y consistente.",
      "Forma bolitas apretadas con una cuchara de helado.",
      "Pásalas por harina, huevo y luego cúbrelas con panko.",
      "Congélalas por 30 minutos.",
      "Rocía aceite y cocina en air fryer a 200°C por 8 minutos hasta dorar."
    ],
    dicaDoChef: "O mac & cheese precisa estar gelado e as bolinhas devem ser congeladas antes de ir à cesta, para garantir que o queijo derreta sem desmanchar o formato.",
    dicaDoChef_en: "Cold mac & cheese and pre-freezing are mandatory so the crust browns before the rich cheese fondue expands.",
    dicaDoChef_es: "El mac & cheese debe estar bien frío y congelado antes de hornear para que no se desarme.",
    molhosSugeridosIds: [15, 1, 3]
  },
  {
    id: 10,
    capitulo: 1,
    titulo: "Pipoca de Couve-Flor Crocante com Páprica e Alho",
    titulo_en: "Crispy Spiced Cauliflower Popcorn Bites",
    titulo_es: "Palomitas de Coliflor Crujiente con Pimentón",
    subtitulo: "Floretes crocantes e viciantes que substituem qualquer salgadinho",
    subtitulo_en: "Crispy snackable florets seasoned with nutritional yeast, garlic & paprika",
    subtitulo_es: "Floretes crocantes y adictivos que reemplazan cualquier botana",
    tempoPreparo: 6,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["vegetariano", "petisco", "saudavel", "crocante"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Couve-flor cortada em mini floretes (tamanho de pipoca)", nome_en: "Cauliflower head, cut into bite-sized popcorn florets", nome_es: "Coliflor cortada en floretes pequeños tamaño bocado", qtd: 1, unidade: "cabeça média", unidade_en: "medium head", unidade_es: "cabeza mediana" },
      { nome: "Azeite de oliva", nome_en: "Olive oil", nome_es: "Aceite de oliva", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Páprica doce e defumada", nome_en: "Sweet and smoked paprika", nome_es: "Pimentón dulce y ahumado", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" },
      { nome: "Alho em pó, cebola em pó e sal marinho", nome_en: "Garlic powder, onion powder & sea salt", nome_es: "Ajo en polvo, cebolla en polvo y sal", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Corte a couve-flor em pedaços pequenos e seque bem.",
      "Misture o azeite e os temperos secos em uma tigela grande.",
      "Jogue os floretes e massageie com as mãos para que o azeite vermelho e aromático cubra todas as reentrâncias.",
      "Asse a 190°C por 12 minutos, sacudindo a cesta aos 6 minutos.",
      "Retire quando as pontinhas estiverem tostadas e bem crocantes."
    ],
    passos_en: [
      "Cut cauliflower into uniform small bites and dry well.",
      "Whisk olive oil and spices in a large bowl.",
      "Toss florets and massage so spices penetrate all nooks and crannies.",
      "Air fry at 190°C (375°F) for 12 minutes, shaking at the 6-minute mark.",
      "Serve hot when florets show deep browned crispy edges."
    ],
    passos_es: [
      "Corta la coliflor en trozos pequeños y sécala bien.",
      "Mezcla el aceite con las especias en un tazón.",
      "Incorpora la coliflor masajeando para que el sazonador penetre en cada florete.",
      "Cocina a 190°C por 12 minutos, agitando al minuto 6.",
      "Sirve caliente con los bordes bien doraditos."
    ],
    dicaDoChef: "Corte os floretes todos no mesmo tamanho pequeno: isso permite que as pontinhas caramelizem e fiquem crocantes como pipoca.",
    dicaDoChef_en: "Keep florets small and uniform; this exposes more surface area to caramelize into crisp popcorn-like clusters.",
    dicaDoChef_es: "Corta trozos pequeños y parejos para multiplicar la superficie crujiente caramelizada.",
    molhosSugeridosIds: [6, 3, 21]
  },

  // ==========================================
  // CAPÍTULO 2: SURPRESAS CROCANTES (11 A 20)
  // ==========================================
  {
    id: 11,
    capitulo: 2,
    titulo: "Buffalo Wings Crocantes Sem Nenhuma Gota de Óleo",
    titulo_en: "Ultimate Ultra-Crispy Buffalo Wings",
    titulo_es: "Alitas Buffalo Ultra Crujientes Sin Aceite",
    subtitulo: "A técnica secreta do fermento químico que estala como fritura profunda",
    subtitulo_en: "The restaurant baking powder secret for skin that shatters like deep-fried",
    subtitulo_es: "El secreto del polvo de hornear para una piel crujiente de restaurante",
    tempoPreparo: 8,
    tempoAirFryer: 22,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["asas", "frango", "buffalo", "campeao"],
    shakeBasketMinute: 11,
    ingredientes: [
      { nome: "Asinhas e meias-asas de frango (tulipas e coxinhas)", nome_en: "Chicken wings, split into drumettes & flats", nome_es: "Alitas de pollo divididas en tambor y ala", qtd: 1, unidade: "kg", unidade_en: "kg", unidade_es: "kg" },
      { nome: "Fermento químico em pó (sem alumínio)", nome_en: "Aluminum-free baking powder", nome_es: "Polvo para hornear (levadura química)", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Sal fino e alho em pó", nome_en: "Fine salt and garlic powder", nome_es: "Sal fina y ajo en polvo", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" },
      { nome: "Molho Buffalo artesanal para envolver", nome_en: "Buffalo wing sauce to toss", nome_es: "Salsa Buffalo para envolver", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "PASSO FUNDAMENTAL: Seque a pele do frango com papel toalha até ficar 100% seca ao toque.",
      "Em uma tigela, misture o fermento em pó com o sal e alho em pó.",
      "Envolva as asinhas nessa mistura seca (vai criar microbolhas na pele sob o calor intenso).",
      "Disponha na cesta da air fryer com a pele virada para cima sem amontoar.",
      "Asse a 195°C por 20 a 22 minutos, virando aos 11 minutos.",
      "Transfira para uma tigela funda, despeje o molho Buffalo e sacuda para cobrir cada pedaço."
    ],
    passos_en: [
      "CRUCIAL STEP: Pat chicken wings bone-dry with paper towels until zero moisture remains.",
      "Toss dry wings in a bowl with baking powder, salt, and garlic powder.",
      "Arrange wings in single layer skin-side up in the basket.",
      "Air fry at 195°C (385°F) for 22 minutes, flipping at minute 11.",
      "Transfer blistering hot wings to a bowl, pour over Buffalo sauce and toss vigorously."
    ],
    passos_es: [
      "PASO CRUCIAL: Seca muy bien la piel del pollo con papel toalla.",
      "Mezcla el polvo de hornear con la sal y el ajo en polvo.",
      "Cubre las alitas con esta mezcla seca.",
      "Coloca en la cesta con la piel hacia arriba en una sola capa.",
      "Cocina a 195°C por 22 minutos, volteando al minuto 11.",
      "Pasa a un tazón, vierte la salsa Buffalo y agita para bañar por completo."
    ],
    dicaDoChef: "O fermento químico eleva o pH da pele do frango, quebrando as proteínas da superfície e criando incontáveis micro-bolhas crocantes sem precisar de farinha de trigo ou imersão em óleo.",
    dicaDoChef_en: "Baking powder alters the skin's pH balance, breaking down proteins to create millions of tiny crispy bubbles just like a commercial deep fryer.",
    dicaDoChef_es: "El polvo para hornear altera el pH de la piel, creando microburbujas súper crujientes idénticas a la fritura profunda.",
    molhosSugeridosIds: [11, 13, 14]
  },
  {
    id: 12,
    capitulo: 2,
    titulo: "Hot Dog Coreano no Palito com Queijo e Crosta Panko",
    titulo_en: "Viral Korean Corn Dog with Cheese Pull",
    titulo_es: "Hot Dog Coreano con Queso y Panko",
    subtitulo: "Salsicha e bloco de queijo mussarela esticando com crosta dourada",
    subtitulo_en: "Half-sausage half-block mozzarella stick coated in craggy panko crunch",
    subtitulo_es: "Mitad salchicha y mitad mozzarella elástica rebozada en panko",
    tempoPreparo: 15,
    tempoAirFryer: 10,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "dogs",
    rendimentoUnidade_es: "unidades",
    dificuldade: "medio",
    tags: ["coreano", "k-food", "queijo", "viral"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Salsichas tipo Viena ou artesanais cortadas ao meio", nome_en: "Quality hot dog sausages, halved", nome_es: "Salchichas de buena calidad cortadas a la mitad", qtd: 2, unidade: "unidades", unidade_en: "sausages", unidade_es: "unidades" },
      { nome: "Queijo mussarela em blocos retangulares firmes", nome_en: "Sturdy blocks of mozzarella cheese", nome_es: "Bloques firmes de queso mozzarella", qtd: 4, unidade: "blocos", unidade_en: "blocks", unidade_es: "bloques" },
      { nome: "Farinha de trigo", nome_en: "All-purpose flour", nome_es: "Harina de trigo", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Leite, 1 ovo e fermento para massa densa", nome_en: "Milk, 1 egg & baking powder for thick batter", nome_es: "Leche, 1 huevo y levadura para masa espesa", qtd: 1, unidade: "preparo", unidade_en: "batter", unidade_es: "mezcla" },
      { nome: "Farinha panko japonesa abundante", nome_en: "Coarse Japanese panko breadcrumbs", nome_es: "Pan panko japonés abundante", qtd: 1.5, unidade: "xícaras", unidade_en: "cups", unidade_es: "tazas" }
    ],
    passos: [
      "Espete meio pedaço de salsicha e um bloco de queijo no mesmo palito de madeira grosso.",
      "Misture a farinha, ovo, leite e fermento para obter uma massa grossa e pegajosa.",
      "Banhe o espeto na massa e role imediatamente na farinha panko apertando com as mãos.",
      "Congele por 20 minutos para firmar.",
      "Borrife azeite e asse na air fryer a 190°C por 10 minutos até ficar dourado e crocante."
    ],
    passos_en: [
      "Thread half a sausage followed by a block of cheese onto sturdy wooden skewers.",
      "Whisk flour, egg, milk, and pinch of baking powder into a thick clingy batter.",
      "Dip skewered stick into batter, then immediately press into coarse panko.",
      "Freeze 20 minutes to set.",
      "Spray generously with oil and air fry at 190°C (375°F) for 10 minutes until deeply golden."
    ],
    passos_es: [
      "Ensarta media salchicha y un bloque de mozzarella en brochetas gruesas.",
      "Prepara una masa espesa con harina, huevo, leche y polvo de hornear.",
      "Baña la brocheta en la masa y rueda de inmediato en panko presionando.",
      "Congela 20 minutos para fijar.",
      "Rocía aceite y cocina en air fryer a 190°C por 10 minutos hasta que esté bien crujiente."
    ],
    dicaDoChef: "Pressione o panko firmemente com a palma das mãos sobre a massa para criar a textura áspera e espinhosa característica das ruas de Seul.",
    dicaDoChef_en: "Firmly press panko with your palms into the batter to build that spiky, super-crunchy street-vendor crust.",
    dicaDoChef_es: "Presiona el panko con las manos contra la masa para formar esa costra crujiente de Seúl.",
    molhosSugeridosIds: [38, 2, 7]
  },
  {
    id: 13,
    capitulo: 2,
    titulo: "Crookies Virais de Paris (Croissant + Cookie de Chocolate)",
    titulo_en: "Viral Parisian Crookies (Croissant + Cookie)",
    titulo_es: "Crookies Virales de París (Croissant + Cookie)",
    subtitulo: "Croissant folhado recheado e coberto com massa de cookies americanos",
    subtitulo_en: "Buttery French croissant filled and capped with chocolate chip cookie dough",
    subtitulo_es: "Croissant de mantequilla relleno y cubierto con masa de galletas con chispas",
    tempoPreparo: 8,
    tempoAirFryer: 7,
    temperatura: 175,
    rendimento: 2,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "crookies",
    rendimentoUnidade_es: "unidades",
    dificuldade: "facil",
    tags: ["sobremesa", "viral", "chocolate", "doce"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Croissants folhados de manteiga (do dia anterior ou frescos)", nome_en: "Day-old or fresh butter croissants", nome_es: "Croissants de mantequilla", qtd: 2, unidade: "unidades", unidade_en: "croissants", unidade_es: "unidades" },
      { nome: "Massa de cookies clássica com gotas de chocolate meio amargo", nome_en: "Chocolate chip cookie dough", nome_es: "Masa de galleta con chispas de chocolate", qtd: 150, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Gotas extras de chocolate e flor de sal", nome_en: "Extra chocolate chips & sea salt flakes", nome_es: "Chispas extra de chocolate y sal en escamas", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" }
    ],
    passos: [
      "Abra os croissants ao meio na horizontal, como um pão de sanduíche.",
      "Coloque uma camada generosa de massa de cookie crua dentro do croissant.",
      "Feche e coloque outro pedaço achatado de massa de cookie por cima da casca do croissant.",
      "Forre o cesto da air fryer com papel manteiga perfurado e asse a 175°C por 7 a 8 minutos.",
      "O topo ficará tostado e crocante com o interior do cookie quente e derretendo."
    ],
    passos_en: [
      "Slice croissants horizontally like a sandwich bun.",
      "Stuff the center with a generous slab of raw chocolate chip cookie dough.",
      "Close up and flatten another piece of cookie dough directly over the croissant top.",
      "Line air fryer basket with parchment and bake at 175°C (350°F) for 7-8 minutes.",
      "The crust turns ultra crispy while the inside becomes gooey molten bliss."
    ],
    passos_es: [
      "Corta los croissants por la mitad de forma horizontal.",
      "Rellena con una porción generosa de masa de cookie cruda.",
      "Cierra y coloca otra porción aplanada de masa encima del croissant.",
      "Coloca papel para hornear en la cesta y hornea a 175°C por 7-8 minutos.",
      "La masa exterior quedará tostada y el interior fundido y suave."
    ],
    dicaDoChef: "Utilizar croissants do dia anterior funciona ainda melhor: a massa folhada absorve a manteiga derretida do cookie e fica mais crocante.",
    dicaDoChef_en: "Slightly day-old croissants crisp up even better, drinking in melting butter from the baking cookie dough.",
    dicaDoChef_es: "Los croissants del día anterior son perfectos porque absorben la mantequilla de la cookie y quedan más crujientes.",
    molhosSugeridosIds: [40, 2, 10]
  },
  {
    id: 14,
    capitulo: 2,
    titulo: "Dumplings e Guiozas Dourados Express",
    titulo_en: "Crispy Golden Pan-Fried Style Dumplings",
    titulo_es: "Dumplings y Gyozas Doradas Express",
    subtitulo: "Base super crocante e recheio de carne e legumes aromáticos",
    subtitulo_en: "Ultra-crisp bottom with juicy pork and aromatics filling",
    subtitulo_es: "Base crujiente y relleno jugoso de carne y vegetales",
    tempoPreparo: 5,
    tempoAirFryer: 8,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["asiatico", "dumpling", "crocante", "express"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Guiozas ou dumplings congelados de carne ou legumes", nome_en: "Frozen pork or vegetable dumplings / gyozas", nome_es: "Gyozas o dumplings congelados de carne o verduras", qtd: 12, unidade: "unidades", unidade_en: "pieces", unidade_es: "unidades" },
      { nome: "Óleo de gergelim torrado e azeite", nome_en: "Toasted sesame oil & neutral oil", nome_es: "Aceite de sésamo tostado y aceite común", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Água limpa em borrifador", nome_en: "Water in spray bottle", nome_es: "Agua en spray", qtd: 1, unidade: "borrifada", unidade_en: "spray", unidade_es: "rociado" }
    ],
    passos: [
      "Pincele as guiozas congeladas com o óleo de gergelim torrado.",
      "Coloque na cesta da air fryer com a base plana virada para baixo.",
      "Dê 2 borrifadas de água limpa por cima para criar umidade de vapor inicial.",
      "Asse a 195°C por 8 minutos até a base estalar de dourada.",
      "Sirva com molho oriental agridoce ou picante."
    ],
    passos_en: [
      "Brush frozen dumplings with fragrant toasted sesame oil.",
      "Place flat-side down in the air fryer basket.",
      "Spritz twice with clean water to generate a quick burst of initial steam.",
      "Air fry at 195°C (385°F) for 8 minutes until skins are golden brown and blistered.",
      "Serve hot with sweet chili or dipping sauces."
    ],
    passos_es: [
      "Pincela las gyozas congeladas con aceite de sésamo.",
      "Colócalas con la base plana hacia abajo en la cesta.",
      "Rocía 2 veces con agua para generar vapor inicial.",
      "Cocina a 195°C por 8 minutos hasta dorar la base.",
      "Sirve con salsa dulce picante."
    ],
    dicaDoChef: "As duas borrifadas de água nos primeiros 30 segundos cozinham a massa no vapor enquanto o calor de convecção doura a base plana instantaneamente.",
    dicaDoChef_en: "A quick mist of water cooks the wrapper tender with steam while hot vortex air fries the flat bottom into crisp gold.",
    dicaDoChef_es: "El rocío de agua hidrata la masa al vapor mientras la base se dora al instante.",
    molhosSugeridosIds: [32, 38, 7]
  },
  {
    id: 15,
    capitulo: 2,
    titulo: "Camarões Empanados no Coco Crocante da Flórida",
    titulo_en: "Florida Crispy Coconut Butterfly Shrimp",
    titulo_es: "Camarones al Coco Crujientes de Florida",
    subtitulo: "Camarões grandes empanados em flocos de coco tostados e panko",
    subtitulo_en: "Jumbo butterflied shrimp breaded in sweet toasted coconut flakes and panko",
    subtitulo_es: "Camarones grandes con escamas de coco tostado y panko crujiente",
    tempoPreparo: 12,
    tempoAirFryer: 7,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["frutos-do-mar", "coco", "florida", "crocante"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Camarões médios ou grandes limpos (com rabo)", nome_en: "Jumbo shrimp, peeled and deveined, tails on", nome_es: "Camarones grandes limpios con cola", qtd: 400, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Coco ralado em flocos sem açúcar", nome_en: "Unsweetened shredded coconut flakes", nome_es: "Coco rallado en escamas sin azúcar", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha panko crocante", nome_en: "Crispy panko crumbs", nome_es: "Pan panko crujiente", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Claras de ovo batidas com sal e páprica", nome_en: "Egg whites whisked with salt & paprika", nome_es: "Claras de huevo batidas con sal y pimentón", qtd: 2, unidade: "unidades", unidade_en: "whites", unidade_es: "unidades" },
      { nome: "Farinha de trigo para empanar", nome_en: "Flour for dusting", nome_es: "Harina para enharinar", qtd: 1/3, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Abra os camarões em borboleta pela lateral e tempere com sal e limão.",
      "Misture o coco ralado com a farinha panko.",
      "Passe os camarões na farinha de trigo, depois nas claras batidas e pressione firmemente na mistura de coco e panko.",
      "Asse a 190°C por 7 minutos, virando com cuidado na metade do tempo até o coco ficar perfumado e dourado.",
      "Sirva com molho de pimenta doce ou manga."
    ],
    passos_en: [
      "Butterfly shrimp and season with salt and lime.",
      "Toss shredded coconut flakes and panko crumbs together.",
      "Dredge shrimp in flour, dip in foamy egg whites, and press into coconut-panko mixture.",
      "Air fry at 190°C (375°F) for 7 minutes, flipping gently at minute 4.",
      "Serve golden brown with sweet chili or mango dip."
    ],
    passos_es: [
      "Abre los camarones en mariposa y sazona con sal y limón.",
      "Mezcla el coco rallado con el panko.",
      "Pasa por harina, claras batidas y presiona en la mezcla de coco.",
      "Cocina a 190°C por 7 minutos volteando a la mitad.",
      "Sirve con dip de mango o sweet chili."
    ],
    dicaDoChef: "Misturar o coco em flocos com panko impede que o coco queime antes do camarão cozinhar, resultando em doçura e crocância balanceadas.",
    dicaDoChef_en: "Blending coconut with panko moderates sugar browning, ensuring the shrimp cooks juicy without burning the coconut.",
    dicaDoChef_es: "Combinar coco y panko evita que el coco se queme antes de cocinar el camarón.",
    molhosSugeridosIds: [33, 16, 32]
  },
  {
    id: 16,
    capitulo: 2,
    titulo: "Rolinhos Primavera Super Crocantes",
    titulo_en: "Glass-Crust Spring Rolls",
    titulo_es: "Rollitos Primavera Extra Crujientes",
    subtitulo: "Massa ultrafina recheada com legumes e carne suína que derrete",
    subtitulo_en: "Shatter-crisp wafer wrappers packed with pork, cabbage, and ginger",
    subtitulo_es: "Masa fina rellena de verduras y carne con crujiente perfecto",
    tempoPreparo: 15,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "medio",
    tags: ["asiatico", "rolinho", "crocante", "vegetais"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Folhas para rolinho primavera (spring roll pastry)", nome_en: "Spring roll pastry wrappers", nome_es: "Hojas de masa para rollitos primavera", qtd: 8, unidade: "folhas", unidade_en: "sheets", unidade_es: "hojas" },
      { nome: "Repolho fatiado bem fininho", nome_en: "Finely shredded cabbage", nome_es: "Repollo rallado muy fino", qtd: 2, unidade: "xícaras", unidade_en: "cups", unidade_es: "tazas" },
      { nome: "Cenoura ralada e cebolinha", nome_en: "Shredded carrots and scallions", nome_es: "Zanahoria rallada y cebollín", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Óleo de gergelim e shoyu para refogar", nome_en: "Sesame oil and soy sauce", nome_es: "Aceite de sésamo y salsa de soya", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Azeite em spray para pincelar a casca", nome_en: "Oil spray for basting", nome_es: "Aceite en spray para pincelar", qtd: 1, unidade: "fio", unidade_en: "mist", unidade_es: "rociado" }
    ],
    passos: [
      "Refogue rapidamente os vegetais com shoyu e óleo de gergelim até murcharem. Espere esfriar completamente.",
      "Coloque 2 colheres de recheio na ponta da folha de massa, dobre as laterais para dentro e enrole firme.",
      "Pincele as pontas com água para colar o fechamento.",
      "Pincele os rolinhos com azeite por todos os lados.",
      "Asse a 190°C por 12 minutos, virando na metade até ficarem dourados como vidro."
    ],
    passos_en: [
      "Quickly stir-fry vegetables with soy sauce and sesame oil; cool completely.",
      "Place 2 tablespoons filling onto pastry sheet, fold in sides and roll tightly.",
      "Seal edge with a brush of water.",
      "Brush all sides generously with neutral oil.",
      "Air fry at 190°C (375°F) for 12 minutes, turning once until blistered."
    ],
    passos_es: [
      "Saltea los vegetales brevemente con soya y aceite de sésamo; deja enfriar.",
      "Coloca 2 cucharadas de relleno en la masa, dobla laterales y enrolla firme.",
      "Sella el borde con un poco de agua.",
      "Pincela con aceite por ambos lados.",
      "Cocina a 190°C por 12 minutos hasta que doren crujientes."
    ],
    dicaDoChef: "O recheio DEVE estar 100% frio e sem líquidos escorrendo antes de enrolar, caso contrário o vapor interno amolece a massa fina.",
    dicaDoChef_en: "Filling MUST be cold and thoroughly drained before rolling; excess warm liquid creates steam that softens the wrapper.",
    dicaDoChef_es: "El relleno DEBE estar completamente frío y seco para no ablandar la masa.",
    molhosSugeridosIds: [32, 33, 21]
  },
  {
    id: 17,
    capitulo: 2,
    titulo: "Mini Calzones de Queijo e Pepperoni",
    titulo_en: "Flaky Pepperoni & Mozzarella Pocket Puffs",
    titulo_es: "Mini Calzones de Queso y Pepperoni",
    subtitulo: "Envelopes folhados recheados com molho marinara, pepperoni e queijo esticando",
    subtitulo_en: "Flaky pizza dough pockets loaded with marinara, pepperoni, and stretchy mozzarella",
    subtitulo_es: "Bolsitas de pizza rellenas con salsa marinara, pepperoni y queso fundido",
    tempoPreparo: 10,
    tempoAirFryer: 9,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "pockets",
    rendimentoUnidade_es: "unidades",
    dificuldade: "facil",
    tags: ["pizza", "calzone", "lanche", "pepperoni"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Disco de massa de pizza fina ou massa folhada pronta", nome_en: "Thin pizza dough or puff pastry sheets", nome_es: "Masa fina de pizza o masa de hojaldre", qtd: 1, unidade: "rolo", unidade_en: "sheet", unidade_es: "lámina" },
      { nome: "Fatias de pepperoni americano", nome_en: "Pepperoni slices", nome_es: "Rodajas de pepperoni", qtd: 16, unidade: "fatias", unidade_en: "slices", unidade_es: "rodajas" },
      { nome: "Queijo mussarela ralado grosso", nome_en: "Coarsely shredded mozzarella", nome_es: "Queso mozzarella rallado grueso", qtd: 150, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Molho de tomate rústico marinara", nome_en: "Marinara sauce", nome_es: "Salsa marinara de tomate", qtd: 4, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Gema de ovo batida e orégano para pincelar", nome_en: "Egg wash & oregano for topping", nome_es: "Huevo batido y orégano para pincelar", qtd: 1, unidade: "unidade", unidade_en: "egg", unidade_es: "unidad" }
    ],
    passos: [
      "Abra a massa e corte em 4 retângulos iguais.",
      "Em uma das metades de cada retângulo, coloque 1 colher de molho, fatias de pepperoni e queijo abundante.",
      "Dobre a massa por cima e aperte as bordas com os dentes de um garfo para selar.",
      "Pincele gema de ovo e polvilhe orégano e queijo ralado por cima.",
      "Asse a 190°C por 9 minutos até inflar e dourar intensamente."
    ],
    passos_en: [
      "Roll out dough and slice into 4 equal rectangles.",
      "Layer marinara sauce, pepperoni, and mozzarella onto one half of each piece.",
      "Fold over and crimp edges tightly using fork tines.",
      "Brush with egg wash and sprinkle oregano and Parmesan over the tops.",
      "Air fry at 190°C (375°F) for 9 minutes until puffed, golden, and flaky."
    ],
    passos_es: [
      "Estira la masa y córtala en 4 rectángulos iguales.",
      "Coloca salsa, pepperoni y abundante mozzarella en una mitad.",
      "Dobla la masa y sella los bordes presionando con un tenedor.",
      "Pincela con yema de huevo y espolvorea orégano.",
      "Cocina a 190°C por 9 minutos hasta que inflen dorados."
    ],
    dicaDoChef: "Aperte as bordas duas vezes com o garfo para criar uma barreira impenetrável; o queijo borbulha sob pressão e precisa ficar retido dentro da massa folhada.",
    dicaDoChef_en: "Double-crimp the edges with a fork to lock in the bubbling molten mozzarella completely.",
    dicaDoChef_es: "Sella dos veces con el tenedor para evitar que el queso hirviendo se escape.",
    molhosSugeridosIds: [17, 37, 4]
  },
  {
    id: 18,
    capitulo: 2,
    titulo: "Wontons Crocantes de Queijo e Salmão",
    titulo_en: "Crispy Salmon & Cream Cheese Wontons",
    titulo_es: "Wontons Crujientes de Salmón y Queso",
    subtitulo: "Triângulos crocantes recheados com salmão e cream cheese temperado",
    subtitulo_en: "Crunchy golden wonton triangles filled with salmon, scallions & cream cheese",
    subtitulo_es: "Triángulos crujientes rellenos de salmón y queso crema sazonado",
    tempoPreparo: 10,
    tempoAirFryer: 6,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["asiatico", "salmao", "queijo", "petisco"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Massa de wonton ou guioza quadrada", nome_en: "Square wonton wrappers", nome_es: "Láminas cuadradas de masa para wonton", qtd: 12, unidade: "unidades", unidade_en: "wrappers", unidade_es: "unidades" },
      { nome: "Salmão fresco ou defumado picadinho", nome_en: "Fresh or smoked salmon, finely diced", nome_es: "Salmón fresco o ahumado picadito", qtd: 120, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Cream cheese amolecido", nome_en: "Softened cream cheese", nome_es: "Queso crema suave", qtd: 100, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Cebolinha verde e óleo de gergelim", nome_en: "Green onions and sesame oil", nome_es: "Cebollín fresco y aceite de sésamo", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Misture o salmão picadinho com o cream cheese e a cebolinha verde.",
      "Coloque uma colherzinha no centro de cada folha de wonton.",
      "Molhe as bordas com água e dobre em triângulo, apertando bem o ar para fora.",
      "Borrife azeite e asse na air fryer a 195°C por 6 minutos.",
      "Retire quando a massa formar bolhas estaladiças douradas."
    ],
    passos_en: [
      "Mix diced salmon, softened cream cheese, and green onions.",
      "Spoon a dollop into center of each wonton square.",
      "Moisten edges with water, fold diagonally into a triangle, pressing out air.",
      "Spray with oil and air fry at 195°C (385°F) for 6 minutes.",
      "Serve immediately while wrappers are bubbly and crackling."
    ],
    passos_es: [
      "Mezcla el salmón picado con queso crema y cebollín.",
      "Coloca una porción en el centro de cada lámina de wonton.",
      "Humedece los bordes con agua y dobla en triángulo sacando el aire.",
      "Rocía con aceite y hornea a 195°C por 6 minutos.",
      "Sirve mientras la masa esté burbujeante y crujiente."
    ],
    dicaDoChef: "Pressione todo o ar para fora antes de selar o triângulo; bolsas de ar internas expandem com o calor e estouram a casquinha do wonton.",
    dicaDoChef_en: "Squeeze out all trapped air pockets prior to sealing so steam doesn't burst the delicate wonton corners.",
    dicaDoChef_es: "Retira todo el aire antes de sellar para que el vapor no rompa el envoltorio.",
    molhosSugeridosIds: [33, 7, 36]
  },
  {
    id: 19,
    capitulo: 2,
    titulo: "Avocado Fries com Crosta Panko e Lemon Pepper",
    titulo_en: "Crispy Avocado Fries with Lime",
    titulo_es: "Bastones de Aguacate Crujientes con Lima",
    subtitulo: "Fatias de abacate cremoso envolvidas em casquinha super crocante",
    subtitulo_en: "Creamy warm avocado spears wrapped in seasoned golden panko crust",
    subtitulo_es: "Gajos de aguacate cremoso con rebozado crujiente de panko y limón",
    tempoPreparo: 10,
    tempoAirFryer: 8,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["vegetariano", "abacate", "crocante", "saudavel"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Avocados maduros porém bem firmes cortados em fatias", nome_en: "Firm ripe avocados, sliced into spears", nome_es: "Aguacates maduros pero firmes en gajos", qtd: 2, unidade: "unidades", unidade_en: "avocados", unidade_es: "unidades" },
      { nome: "Farinha panko temperada", nome_en: "Seasoned panko breadcrumbs", nome_es: "Pan panko sazonado", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Ovos batidos", nome_en: "Beaten eggs", nome_es: "Huevos batidos", qtd: 2, unidade: "unidades", unidade_en: "eggs", unidade_es: "unidades" },
      { nome: "Farinha de trigo com sal e pimenta", nome_en: "Flour seasoned with salt & chili", nome_es: "Harina sazonada con sal y chile", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Corte os avocados ao meio e fatie em bastões de cerca de 1,5 cm de espessura.",
      "Passe os bastões na farinha de trigo, depois no ovo e cubra bem com panko.",
      "Borrife azeite em spray generosamente.",
      "Asse a 200°C por 8 minutos até a casquinha dourar e ficar estaladiça.",
      "Finalize com suco de limão fresco espremido na hora."
    ],
    passos_en: [
      "Cut avocados into 1.5cm thick wedges.",
      "Dredge in flour, dip into egg wash, then coat in panko.",
      "Spray generously with oil spray.",
      "Air fry at 200°C (400°F) for 8 minutes until golden crisp.",
      "Spritz fresh lime juice and flaky salt over hot fries."
    ],
    passos_es: [
      "Corta los aguacates en bastones de 1.5 cm de grosor.",
      "Pásalos por harina, huevo y luego cúbrelos bien con panko.",
      "Rocía aceite en spray.",
      "Cocina a 200°C por 8 minutos hasta que doren crujientes.",
      "Termina con jugo de lima fresca recién exprimida."
    ],
    dicaDoChef: "Escolha avocados que estejam maduros mas ainda firmes ao toque; se estiverem muito moles, amassarão ao empanar.",
    dicaDoChef_en: "Pick avocados that yield slightly to pressure but remain firm so they don't break during dredging.",
    dicaDoChef_es: "Usa aguacates firmes para que no se desarmen al empanar.",
    molhosSugeridosIds: [28, 30, 6]
  },
  {
    id: 20,
    capitulo: 2,
    titulo: "Tofu Dourado Agridoce Super Crocante",
    titulo_en: "Ultra-Crispy Sweet Chili Glazed Tofu",
    titulo_es: "Tofu Dorado Agridulce Super Crujiente",
    subtitulo: "Cubos de tofu sequinhos por fora com crosta de amido e molho caramelizado",
    subtitulo_en: "Golden tofu cubes blistered in cornstarch and tossed in sticky sweet glaze",
    subtitulo_es: "Cubos de tofu dorados con almidón y bañados en glaseado agridulce",
    tempoPreparo: 10,
    tempoAirFryer: 12,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["vegano", "tofu", "asiatico", "saudavel"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Tofu firme ou extra firme espremido e em cubos", nome_en: "Extra-firm tofu, pressed and cubed", nome_es: "Tofu firme prensado y cortado en cubos", qtd: 400, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Amido de milho (maizena)", nome_en: "Cornstarch", nome_es: "Almidón de maíz (maicena)", qtd: 3, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Óleo de gergelim e azeite", nome_en: "Sesame oil and neutral oil", nome_es: "Aceite de sésamo y aceite común", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Molho de soja (shoyu) e alho ralado", nome_en: "Soy sauce and grated garlic", nome_es: "Salsa de soya y ajo rallado", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" }
    ],
    passos: [
      "Pressione o bloco de tofu entre toalhas de papel com um peso por 10 minutos para tirar a água.",
      "Corte em cubos de 2,5 cm e regue com o shoyu e óleo de gergelim.",
      "Polvilhe o amido de milho e balance na tigela até formar uma fina camada branca seca em volta de cada cubo.",
      "Asse a 200°C por 12 a 14 minutos sacudindo na metade do tempo.",
      "Misture ao molho agridoce assim que sair da cesta."
    ],
    passos_en: [
      "Press tofu between paper towels with a heavy pot for 10 minutes to expel moisture.",
      "Cut into 1-inch cubes and drizzle with soy sauce and sesame oil.",
      "Toss in cornstarch until each cube has a thin powdery white coating.",
      "Air fry at 200°C (400°F) for 12-14 minutes, shaking halfway.",
      "Toss immediately into your favorite sweet sticky glaze."
    ],
    passos_es: [
      "Prensa el tofu con papel toalla y un peso encima por 10 minutos para drenar el agua.",
      "Corta en cubos y condimenta con soya y aceite de sésamo.",
      "Espolvorea maicena y sacude hasta que todos los cubos queden cubiertos con una capa blanca.",
      "Cocina a 200°C por 12-14 minutos agitando a la mitad.",
      "Baña en salsa agridulce caliente."
    ],
    dicaDoChef: "O amido de milho absorve qualquer gota residual e se transforma em uma película estaladiça inigualável sob ar quente forçado.",
    dicaDoChef_en: "Cornstarch binds with exterior moisture to form an impenetrable glass-shatter skin in circulating hot air.",
    dicaDoChef_es: "La maicena sella la superficie creando una película súper crujiente y liviana.",
    molhosSugeridosIds: [38, 32, 7]
  },

  // ==========================================
  // CAPÍTULO 3: FUSÃO E INOVAÇÕES (21 A 30)
  // ==========================================
  {
    id: 21,
    capitulo: 3,
    titulo: "Birria Tacos Dourados com Queijo e Consommé",
    titulo_en: "Crispy Cheesy Quesabirria Tacos",
    titulo_es: "Quesabirria Tacos Crujientes con Consomé",
    subtitulo: "Tortilhas banhadas no caldo aromático e tostadas com carne desfiada e queijo",
    subtitulo_en: "Tortillas dipped in rich birria broth, loaded with beef & cheese, fried crisp",
    subtitulo_es: "Tortillas sumergidas en caldo, rellenas de carne y queso derretido",
    tempoPreparo: 12,
    tempoAirFryer: 8,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "tacos",
    rendimentoUnidade_en: "tacos",
    rendimentoUnidade_es: "tacos",
    dificuldade: "medio",
    tags: ["mexicano", "taco", "birria", "queijo"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Tortilhas de milho macias", nome_en: "Soft corn tortillas", nome_es: "Tortillas de maíz suaves", qtd: 4, unidade: "unidades", unidade_en: "tortillas", unidade_es: "tortillas" },
      { nome: "Carne bovina desfiada temperada com caldo de birria", nome_en: "Shredded beef in birria chili broth", nome_es: "Carne deshebrada con caldo de birria", qtd: 250, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Queijo Oaxaca ou mussarela ralada", nome_en: "Oaxaca or shredded mozzarella cheese", nome_es: "Queso Oaxaca o mozzarella rallado", qtd: 150, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Caldo de birria aromático morno para banhar", nome_en: "Warm rich birria consommé for dipping", nome_es: "Caldo de birria tibio para remojar", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Cebola picadinha e coentro fresco", nome_en: "Finely diced onion and fresh cilantro", nome_es: "Cebolla picada y cilantro fresco", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Passe rapidamente cada tortilha de milho no caldo vermelho da carne (apenas um mergulho rápido nas duas faces).",
      "Coloque as tortilhas na tábua, cubra com o queijo e a carne desfiada suculenta em uma das metades.",
      "Dobre ao meio formando meia-lua.",
      "Disponha na cesta da air fryer e asse a 200°C por 8 minutos, virando aos 4 minutos até a casca ficar vermelha e crocante.",
      "Sirva com potinho de caldo de birria fumegante com cebola e coentro para mergulhar a cada mordida."
    ],
    passos_en: [
      "Quickly dip each corn tortilla into the top layer of rich chili broth.",
      "Lay flat, cover one half with shredded cheese and juicy braised beef.",
      "Fold over into a half-moon taco.",
      "Place in air fryer and cook at 200°C (400°F) for 8 minutes, flipping at minute 4 until crunchy.",
      "Serve hot with a small bowl of hot consommé with chopped onion and cilantro for dunking."
    ],
    passos_es: [
      "Pasa cada tortilla de maíz por el caldo rojo de la carne rápidamente.",
      "Coloca queso y carne deshebrada en una mitad de la tortilla.",
      "Dobla en forma de media luna.",
      "Cocina en air fryer a 200°C por 8 minutos volteando al minuto 4 hasta que dore.",
      "Sirve con consomé caliente, cebolla y cilantro para remojar cada bocado."
    ],
    dicaDoChef: "Banhar a tortilha na gordura temperada da superfície do caldo antes de ir para a air fryer é o que confere a coloração avermelhada vibrante e a textura ultra crocante.",
    dicaDoChef_en: "Dipping the tortilla into the spiced broth oil right before air frying is what creates that trademark fiery red, shatteringly crisp shell.",
    dicaDoChef_es: "Remojar la tortilla en la grasita del caldo antes de hornear es el secreto para lograr ese color rojo y crujiente de birria.",
    molhosSugeridosIds: [35, 20, 25]
  },
  {
    id: 22,
    capitulo: 3,
    titulo: "Mandioca Frita Crocante Estilo Steakhouses (Yuca Fries)",
    titulo_en: "Crispy Garlic Yuca Fries",
    titulo_es: "Yuca Frita Crujiente Estilo Steakhouse",
    subtitulo: "Cozida e depois tostada com casca vitrificada e miolo macio",
    subtitulo_en: "Steamed tender yuca wedges air-fried to a glass-shattering golden crunch",
    subtitulo_es: "Bastones de yuca cocida y dorada con textura crujiente insuperable",
    tempoPreparo: 15,
    tempoAirFryer: 16,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["mandioca", "petisco", "brasileiro", "crocante"],
    shakeBasketMinute: 8,
    ingredientes: [
      { nome: "Mandioca (aipim/yuca) cozida em água e sal, cortada em palitos", nome_en: "Yuca root, boiled in salted water and sliced into thick wedges", nome_es: "Yuca cocida con sal en bastones gruesos", qtd: 500, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Azeite de oliva ou manteiga de garrafa", nome_en: "Olive oil or clarified butter", nome_es: "Aceite de oliva o mantequilla clarificada", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Sal grosso moído e alho em pó", nome_en: "Sea salt and garlic powder", nome_es: "Sal gruesa molida y ajo en polvo", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Cozinhe a mandioca até ficar macia (mas firme para não desmanchar). Deixe esfriar completamente e seque bem.",
      "Corte em palitos grossos e remova o fio central duro.",
      "Regue com o azeite, alho em pó e sal, misturando com cuidado.",
      "Asse a 200°C por 16 minutos sacudindo a cesta aos 8 minutos.",
      "Sirva fumegante com maionese artesanal."
    ],
    passos_en: [
      "Boil yuca until fork-tender yet sturdy; cool completely and pat dry.",
      "Cut into chunky fries and remove the fibrous central root string.",
      "Toss with olive oil, garlic powder, and coarse sea salt.",
      "Air fry at 200°C (400°F) for 16 minutes, shaking basket at minute 8.",
      "Serve steaming hot with mojo garlic mayo or chimichurri."
    ],
    passos_es: [
      "Cocina la yuca en agua con sal hasta que esté tierna; enfría y seca muy bien.",
      "Corta en bastones y retira la hebra central dura.",
      "Condimenta con aceite, ajo en polvo y sal.",
      "Cocina a 200°C por 16 minutos agitando a la mitad.",
      "Sirve bien caliente con salsa tártara o mojo de ajo."
    ],
    dicaDoChef: "A mandioca deve estar 100% fria antes de entrar na air fryer; se entrar quente e úmida, a casquinha fica borrachuda em vez de vitrificada.",
    dicaDoChef_en: "Cooling boiled yuca completely firms up its starches, producing a much thicker glassy crunch.",
    dicaDoChef_es: "Deja enfriar la yuca por completo antes de llevar a la air fryer para que forme una capa crocante.",
    molhosSugeridosIds: [9, 22, 26]
  },
  {
    id: 23,
    capitulo: 3,
    titulo: "Pollo Campero Empanado Secreto com Citrus",
    titulo_en: "Secret Citrus & Spiced Fried Chicken",
    titulo_es: "Pollo Campero Secreto Marinado en Cítricos",
    subtitulo: "Sobrecoxas marinadas no limão e especiarias com casca dourada crocante",
    subtitulo_en: "Citrus-marinated chicken thighs with double-seasoned golden crackle",
    subtitulo_es: "Contramuslos de pollo marinados en limón y especias con piel crujiente",
    tempoPreparo: 15,
    tempoAirFryer: 22,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "medio",
    tags: ["frango", "campero", "citrico", "crocante"],
    shakeBasketMinute: 11,
    ingredientes: [
      { nome: "Sobrecoxas de frango desossadas com pele", nome_en: "Boneless chicken thighs with skin", nome_es: "Contramuslos de pollo con piel sin hueso", qtd: 600, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Suco de 1 limão e raspas de laranja", nome_en: "Lime juice and orange zest", nome_es: "Jugo de limón y ralladura de naranja", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Farinha de trigo temperada com orégano, páprica e alho", nome_en: "Flour with oregano, paprika, garlic", nome_es: "Harina sazonada con orégano, pimentón y ajo", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Leite com vinagre (buttermilk caseiro)", nome_en: "Buttermilk (milk + vinegar)", nome_es: "Leche con vinagre (buttermilk)", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Marine o frango no limão, alho e sal por 15 minutos.",
      "Passe o frango na farinha temperada, depois no buttermilk e novamente na farinha, apertando com força para criar escamas crocantes.",
      "Borrife azeite e asse na air fryer a 190°C por 22 minutos, virando na metade.",
      "Retire quando estiver dourado escuro e borbulhando crocante."
    ],
    passos_en: [
      "Marinate chicken in lime juice, garlic, and salt for 15 minutes.",
      "Dredge in seasoned flour, dip in buttermilk, and dredge in flour again, squeezing to create craggy ridges.",
      "Spray generously with oil spray and air fry at 190°C (375°F) for 22 mins, flipping halfway.",
      "Rest 3 minutes before cutting."
    ],
    passos_es: [
      "Marina el pollo con limón, ajo y sal por 15 minutos.",
      "Pásalo por la harina sazonada, luego por la leche y de nuevo por la harina apretando con fuerza para crear pliegues crujientes.",
      "Rocía aceite y cocina a 190°C por 22 minutos volteando a la mitad.",
      "Deja reposar 3 minutos antes de servir."
    ],
    dicaDoChef: "Apertar a carne na farinha cria pelotas irregulares de massa que se transformam nas escamas crocantes típicas dos melhores restaurantes latinos.",
    dicaDoChef_en: "Squeezing flour onto wet chicken forms jagged crags that fry into ultra-crisp ridges.",
    dicaDoChef_es: "Apretar el pollo en la harina crea bordes irregulares que doran con máximo crujiente.",
    molhosSugeridosIds: [6, 9, 31]
  },
  {
    id: 24,
    capitulo: 3,
    titulo: "Tacos de Pescado Baja California com Repolho Roxo",
    titulo_en: "Baja Crispy Fish Tacos with Slaw",
    titulo_es: "Tacos de Pescado Crujiente Baja California",
    subtitulo: "Tiras de peixe branco crocantes em tortilhas quentes com creme de abacate",
    subtitulo_en: "Golden crispy white fish fingers tucked into warm tortillas with lime crema",
    subtitulo_es: "Tiras de pescado blanco crujiente en tortillas calientes con crema de lima",
    tempoPreparo: 12,
    tempoAirFryer: 9,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "tacos",
    rendimentoUnidade_en: "tacos",
    rendimentoUnidade_es: "tacos",
    dificuldade: "facil",
    tags: ["peixe", "mexicano", "tacos", "saudavel"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Filés de peixe branco firme (tilápia ou robalo) em tiras", nome_en: "Firm white fish fillets, sliced into fingers", nome_es: "Filetes de pescado blanco cortados en tiras", qtd: 350, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Farinha de milho fina e panko", nome_en: "Cornmeal and panko crumbs", nome_es: "Harina de maíz fina y panko", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Tortilhas de trigo ou milho", nome_en: "Corn or flour tortillas", nome_es: "Tortillas de maíz o trigo", qtd: 4, unidade: "unidades", unidade_en: "tortillas", unidade_es: "tortillas" },
      { nome: "Repolho roxo ralado fino", nome_en: "Shredded red cabbage", nome_es: "Repollo morado rallado fino", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Tempere as tiras de peixe com limão, cominho e sal.",
      "Empane na mistura de fubá fino e panko para dar textura rústica.",
      "Asse a 200°C por 9 minutos até dourar.",
      "Aqueça as tortilhas na própria cesta por 1 minuto.",
      "Monte os tacos com o peixe crocante, repolho roxo e molho fresco."
    ],
    passos_en: [
      "Season fish strips with fresh lime, ground cumin, and sea salt.",
      "Dredge in cornmeal and panko mixture for authentic Baja crunch.",
      "Air fry at 200°C (400°F) for 9 minutes until crisp and flaky.",
      "Warm tortillas in the basket for 1 minute.",
      "Assemble with crispy fish, shredded cabbage, and creamy avocado sauce."
    ],
    passos_es: [
      "Sazona el pescado con limón, comino y sal.",
      "Empaniza en mezcla de harina de maíz y panko.",
      "Cocina a 200°C por 9 minutos hasta dorar.",
      "Calienta las tortillas en la cesta por 1 minuto.",
      "Arma con pescado crujiente, repollo y crema de aguacate."
    ],
    dicaDoChef: "A combinação de fubá e panko cria a autêntica crosta crocante das praias do México sem precisar de óleo de imersão.",
    dicaDoChef_en: "Mixing cornmeal with panko replicates the traditional street taco texture without a greasy deep fryer.",
    dicaDoChef_es: "Combinar harina de maíz con panko logra la auténtica textura crujiente playera mexicana.",
    molhosSugeridosIds: [28, 30, 29]
  },
  {
    id: 25,
    capitulo: 3,
    titulo: "Coxinhas de Frango com Requeijão e Casca Dourada",
    titulo_en: "Brazilian Crispy Chicken Croquettes (Coxinhas)",
    titulo_es: "Coxinhas Brasileñas Crujientes de Pollo",
    subtitulo: "Massa aveludada recheada com frango desfiado temperado e crosta panko",
    subtitulo_en: "Creamy shredded chicken wrapped in velvety dough with golden panko crunch",
    subtitulo_es: "Masa suave rellena de pollo jugoso y rebozado de panko dorado",
    tempoPreparo: 20,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 6,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "coxinhas",
    rendimentoUnidade_es: "unidades",
    dificuldade: "medio",
    tags: ["brasileiro", "salgado", "frango", "festa"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Coxinhas modeladas com massa tradicional e recheio de frango cremoso", nome_en: "Formed coxinhas filled with seasoned shredded chicken", nome_es: "Coxinhas armadas rellenas con pollo cremoso", qtd: 6, unidade: "unidades", unidade_en: "units", unidade_es: "unidades" },
      { nome: "Azeite de oliva ou óleo para borrifar", nome_en: "Oil spray", nome_es: "Aceite en spray", qtd: 1, unidade: "fio", unidade_en: "mist", unidade_es: "rociado" }
    ],
    passos: [
      "Passe as coxinhas em água gelada e empane no panko para reforçar a crocância.",
      "Borrife azeite generosamente em todas as laterais.",
      "Asse a 190°C por 12 a 14 minutos até dourarem por igual.",
      "Sirva estalando com molho especial de pimenta ou maionese verde."
    ],
    passos_en: [
      "Dip shaped coxinhas into ice water and roll in panko to reinforce crust.",
      "Spray generously with cooking oil mist.",
      "Air fry at 190°C (375°F) for 12-14 mins until deeply golden.",
      "Serve piping hot with artisanal green mayo."
    ],
    passos_es: [
      "Pasa las coxinhas por agua fría y luego por panko para asegurar el crujiente.",
      "Rocía con aceite por todos lados.",
      "Cocina a 190°C por 12-14 minutos hasta que queden doradas y crocantes.",
      "Sirve bien calientes con mayonesa verde."
    ],
    dicaDoChef: "Mergulhar rapidamente em água fria antes do panko faz a farinha grudar com perfeição sem deixar a casca pesada.",
    dicaDoChef_en: "Dipping in ice water rather than egg wash yields a lighter, more shattering exterior.",
    dicaDoChef_es: "Pasar por agua fría antes del panko crea una corteza ligera y muy crujiente.",
    molhosSugeridosIds: [22, 2, 7]
  },
  {
    id: 26,
    capitulo: 3,
    titulo: "Empanadas Argentinas de Carne com Massa Folhada",
    titulo_en: "Flaky Argentine Baked Beef Empanadas",
    titulo_es: "Empanadas Argentinas de Carne Doradas",
    subtitulo: "Recheio suculento de carne cortada na ponta da faca e repulgue perfeito",
    subtitulo_en: "Juicy hand-cut beef, cumin, and olives folded into golden blistered pastry",
    subtitulo_es: "Relleno jugoso de carne cortada a cuchillo con repulgue tradicional",
    tempoPreparo: 15,
    tempoAirFryer: 12,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "empanadas",
    rendimentoUnidade_en: "empanadas",
    rendimentoUnidade_es: "empanadas",
    dificuldade: "medio",
    tags: ["argentina", "empanada", "carne", "forno"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Discos de massa para empanadas argentinas", nome_en: "Argentine empanada dough discs", nome_es: "Discos de masa para empanadas argentinas", qtd: 4, unidade: "discos", unidade_en: "discs", unidade_es: "discos" },
      { nome: "Carne picadinha refogada com cebola, cominho e pimentão", nome_en: "Sautéed beef filling with onions & cumin", nome_es: "Relleno de carne picada con cebolla y comino", qtd: 250, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Azeitonas verdes picadas e ovo cozido", nome_en: "Chopped green olives & boiled egg", nome_es: "Aceitunas verdes picadas y huevo duro", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Gema de ovo para pincelar", nome_en: "Egg yolk for brushing", nome_es: "Yema de huevo para pincelar", qtd: 1, unidade: "unidade", unidade_en: "yolk", unidade_es: "yema" }
    ],
    passos: [
      "Recheie cada disco com a carne fria, azeitonas e ovo cozido.",
      "Umedeça a borda com água e feche fazendo o repulgue característico.",
      "Pincele gema de ovo por cima de cada empanada.",
      "Asse a 195°C por 12 minutos até a massa dourar e inflar lindamente."
    ],
    passos_en: [
      "Fill each dough disc with chilled beef filling, olives, and boiled egg.",
      "Moisten edges with water and crimp tightly with the traditional rope braid.",
      "Brush tops with egg yolk wash.",
      "Air fry at 195°C (385°F) for 12 mins until blistered golden.",
      "Rest 2 minutes to settle juices."
    ],
    passos_es: [
      "Rellena cada disco con carne fría, aceitunas y huevo duro.",
      "Humedece los bordes y cierra con el repulgue tradicional.",
      "Pincela la superficie con yema de huevo.",
      "Cocina a 195°C por 12 minutos hasta que inflen doradas.",
      "Deja reposar 2 minutos antes de comer."
    ],
    dicaDoChef: "Pincelar a gema pura confere aquele acabamento de padaria brilhante e dourado que o ar quente da air fryer realça.",
    dicaDoChef_en: "Pure egg yolk wash gives that signature Argentine bakery high-gloss amber shine.",
    dicaDoChef_es: "Pincelar solo con yema de huevo proporciona un brillo dorado profesional.",
    molhosSugeridosIds: [26, 9, 20]
  },
  {
    id: 27,
    capitulo: 3,
    titulo: "Quesadilla Crocante de 3 Queijos e Jalapeño",
    titulo_en: "Crispy Three-Cheese Jalapeño Quesadilla",
    titulo_es: "Quesadilla Crujiente de 3 Quesos y Jalapeño",
    subtitulo: "Tortilha dourada e crocante com queijo derretido borbulhante",
    subtitulo_en: "Shatteringly crisp golden tortilla packed with melted cheese trio",
    subtitulo_es: "Tortilla dorada y crujiente rellena de trío de quesos fundidos",
    tempoPreparo: 5,
    tempoAirFryer: 6,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["queijo", "mexicano", "lanche", "rapido"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Tortilha grande de trigo", nome_en: "Large flour tortilla", nome_es: "Tortilla grande de harina de trigo", qtd: 2, unidade: "unidades", unidade_en: "tortillas", unidade_es: "unidades" },
      { nome: "Blend de queijo cheddar, mussarela e prato ralados", nome_en: "Blend of shredded cheddar, mozzarella & Monterey", nome_es: "Mezcla de cheddar, mozzarella y queso fundente rallados", qtd: 150, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Fatias de pimenta jalapeño em conserva", nome_en: "Pickled jalapeño slices", nome_es: "Rodajas de jalapeño en conserva", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Manteiga amolecida para pincelar a tortilha", nome_en: "Softened butter for brushing", nome_es: "Mantequilla suave para pincelar la tortilla", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" }
    ],
    passos: [
      "Pincele manteiga em um lado da tortilha (o lado que ficará em contato com o calor).",
      "Vire o lado sem manteiga para cima e espalhe a mistura de queijos e jalapeños em uma metade.",
      "Dobre ao meio e aperte suavemente.",
      "Asse a 200°C por 6 minutos, virando aos 3 minutos.",
      "Corte em triângulos e sirva com guacamole ou sour cream."
    ],
    passos_en: [
      "Brush outer side of tortilla with softened butter.",
      "Flip over and scatter cheese blend and jalapeño on one half.",
      "Fold in half and press gently.",
      "Air fry at 200°C (400°F) for 6 minutes, flipping at minute 3.",
      "Slice into crisp wedges and serve with guacamole."
    ],
    passos_es: [
      "Pincela mantequilla en la parte exterior de la tortilla.",
      "Por el interior coloca los quesos y los jalapeños.",
      "Dobla a la mitad y presiona suavemente.",
      "Cocina a 200°C por 6 minutos volteando al minuto 3.",
      "Corta en triángulos y acompaña con guacamole."
    ],
    dicaDoChef: "Pincelar manteiga em vez de óleo vegetal confere um aroma irresistível de diner americano e doura a massa por igual.",
    dicaDoChef_en: "Softened butter caramelizes faster than vegetable oil, producing a diner-style golden sheen.",
    dicaDoChef_es: "Pincelar mantequilla en lugar de aceite da un aroma tostado y dorado parejo.",
    molhosSugeridosIds: [25, 20, 30]
  },
  {
    id: 28,
    capitulo: 3,
    titulo: "Taquitos Dourados de Carne Seca e Requeijão",
    titulo_en: "Crunchy Rolled Taquitos (Flautas)",
    titulo_es: "Taquitos Dorados de Carne y Crema",
    subtitulo: "Tubinhos crocantes de tortilha de milho recheados e dourados",
    subtitulo_en: "Crisp corn tortilla flutes rolled with savory shredded beef and cheese",
    subtitulo_es: "Flautas crujientes de maíz rellenas de carne sazonada y queso",
    tempoPreparo: 10,
    tempoAirFryer: 8,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "taquitos",
    rendimentoUnidade_en: "taquitos",
    rendimentoUnidade_es: "taquitos",
    dificuldade: "facil",
    tags: ["mexicano", "taquitos", "carne", "crocante"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Tortilhas pequenas de milho aquecidas", nome_en: "Small warm corn tortillas", nome_es: "Tortillas pequeñas de maíz tibias", qtd: 6, unidade: "unidades", unidade_en: "tortillas", unidade_es: "unidades" },
      { nome: "Carne bovina desfiada ou carne seca dessalgada", nome_en: "Shredded beef or brisket filling", nome_es: "Carne deshebrada sazonada", qtd: 200, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Queijo cremoso ou requeijão", nome_en: "Melting cheese or crema", nome_es: "Queso crema o requesón", qtd: 3, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Azeite em spray para dourar", nome_en: "Oil spray", nome_es: "Aceite en spray", qtd: 1, unidade: "fio", unidade_en: "mist", unidade_es: "rociado" }
    ],
    passos: [
      "Aqueça as tortilhas de milho por 15 segundos para ficarem flexíveis sem quebrar.",
      "Coloque uma linha de recheio e queijo e enrole como um charuto apertado.",
      "Coloque na cesta com a emenda virada para baixo.",
      "Borrife azeite e asse a 200°C por 8 minutos até ficarem bem crocantes."
    ],
    passos_en: [
      "Warm corn tortillas 15 seconds in microwave so they roll without cracking.",
      "Place filling in a thin line and roll into tight cigars.",
      "Place seam-side down in the air fryer basket.",
      "Mist with oil spray and air fry at 200°C (400°F) for 8 mins until shatter-crisp."
    ],
    passos_es: [
      "Calienta las tortillas de maíz para que no se quiebren al enrollar.",
      "Coloca una línea de carne y queso y enrolla apretado.",
      "Coloca con el pliegue hacia abajo en la cesta.",
      "Rocía aceite y hornea a 200°C por 8 minutos hasta que queden bien dorados."
    ],
    dicaDoChef: "Aquecer as tortilhas de milho antes de enrolar é essencial para liberar a maleabilidade do milho e evitar que a casca rache.",
    dicaDoChef_en: "Warming the tortillas unlocks elasticity, preventing tears while rolling.",
    dicaDoChef_es: "Calentar las tortillas de maíz antes evita que se rompan al enrollar.",
    molhosSugeridosIds: [25, 30, 20]
  },
  {
    id: 29,
    capitulo: 3,
    titulo: "Poke Bites de Salmão Crocante com Shoyu e Gergelim",
    titulo_en: "Crispy Salmon Poke Rice Bites",
    titulo_es: "Bocados Crujientes de Arroz y Salmón Poke",
    subtitulo: "Cubos de arroz dourados na air fryer com salmão temperado fresco",
    subtitulo_en: "Crispy pan-style sushi rice blocks crowned with spicy sesame salmon",
    subtitulo_es: "Bloques de arroz crujiente coronados con salmón fresco marinado",
    tempoPreparo: 15,
    tempoAirFryer: 12,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "medio",
    tags: ["japones", "salmao", "arroz", "viral"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Arroz de sushi cozido e prensado em cubos pequenos", nome_en: "Cooked sushi rice, pressed into squares and chilled", nome_es: "Arroz de sushi cocido prensado en cubos fríos", qtd: 2, unidade: "xícaras", unidade_en: "cups", unidade_es: "tazas" },
      { nome: "Óleo de gergelim para pincelar", nome_en: "Sesame oil for brushing", nome_es: "Aceite de sésamo para pincelar", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Salmão fresco em cubos mínimos", nome_en: "Fresh raw sushi-grade salmon, diced tiny", nome_es: "Salmón fresco en cubitos diminutos", qtd: 200, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Molho sriracha e maionese japonesa", nome_en: "Spicy mayo (sriracha + kewpie)", nome_es: "Mayonesa picante (sriracha + mayonesa)", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Pressione o arroz cozido em uma forma e leve para gelar até endurecer. Corte em cubinhos de 4x4 cm.",
      "Pincele os cubos de arroz com óleo de gergelim.",
      "Asse a 200°C por 12 minutos virando na metade, até o arroz criar uma casca dourada estaladiça.",
      "Cubra os cubos quentes com o salmão temperado gelado e sirva."
    ],
    passos_en: [
      "Pack warm sushi rice into a container, chill until solid, and slice into 2-inch squares.",
      "Brush rice blocks with toasted sesame oil.",
      "Air fry at 200°C (400°F) for 12 minutes, flipping halfway until toasted crisp.",
      "Top warm crunchy rice with cold spicy salmon and green scallions."
    ],
    passos_es: [
      "Compacta el arroz en un molde, enfría y córtalo en cubos.",
      "Pincela con aceite de sésamo.",
      "Cocina a 200°C por 12 minutos volteando a la mitad hasta dorar.",
      "Corona el arroz caliente con el salmón fresco sazonado."
    ],
    dicaDoChef: "O contraste entre o bloco de arroz estalando de crocante e quente com o salmão fresco gelado e maionese picante é a assinatura dos melhores izakayas modernos.",
    dicaDoChef_en: "The temperature contrast between hot crunchy rice blocks and cool silky tartare is culinary magic.",
    dicaDoChef_es: "El contraste térmico entre el arroz caliente y el salmón fresco es un manjar.",
    molhosSugeridosIds: [7, 36, 38]
  },
  {
    id: 30,
    capitulo: 3,
    titulo: "Tostones de Plátano Verde Super Crocantes",
    titulo_en: "Caribbean Crispy Garlic Tostones",
    titulo_es: "Tostones de Plátano Verde Crujientes",
    subtitulo: "Fatias de banana-da-terra verde prensadas e tostadas com alho",
    subtitulo_en: "Twice-cooked green plantains pressed thin and air-fried with garlic salt",
    subtitulo_es: "Rodajas de plátano verde aplastadas y doradas con toque de ajo",
    tempoPreparo: 10,
    tempoAirFryer: 12,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["caribenho", "banana", "petisco", "vegetariano"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Bananas-da-terra bem verdes descascadas e em rodelas grossas", nome_en: "Green plantains, peeled and cut into 1-inch discs", nome_es: "Plátanos verdes pelados en rodajas de 2 cm", qtd: 2, unidade: "unidades", unidade_en: "plantains", unidade_es: "unidades" },
      { nome: "Azeite de oliva", nome_en: "Olive oil", nome_es: "Aceite de oliva", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Sal e alho em pó", nome_en: "Garlic salt", nome_es: "Sal con ajo", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Pincele as rodelas grossas com azeite e asse na air fryer a 180°C por 6 minutos para amaciar.",
      "Retire e amasse cada rodela usando a base de um copo pesado com papel manteiga até achatar em discos finos.",
      "Borrife azeite nas duas faces e volte para a air fryer a 200°C por mais 6 minutos até dourar e estalar.",
      "Polvilhe sal e alho em pó imediatamente."
    ],
    passos_en: [
      "Toss plantain rounds with oil and air fry at 180°C (360°F) for 6 mins to soften.",
      "Remove and smash each piece flat using the bottom of a heavy glass over parchment paper.",
      "Spray both sides with oil and return to air fryer at 200°C (400°F) for 6 more mins until crackling.",
      "Sprinkle garlic salt immediately while hot."
    ],
    passos_es: [
      "Pincela las rodajas con aceite y cocina a 180°C por 6 minutos para ablandar.",
      "Retira y aplasta cada rodaja con el fondo de un vaso pesado formando discos finos.",
      "Rocía aceite por ambos lados y hornea a 200°C por 6 minutos más hasta que queden crujientes.",
      "Espolvorea sal de ajo inmediatamente."
    ],
    dicaDoChef: "A dupla etapa (primeiro amaciar a fibra do plátano e depois achatar fino para dourar) é o clássico método caribenho agora sem imersão em óleo.",
    dicaDoChef_en: "The two-step method (par-cook to soften starch, smash thin, then blast at high heat) creates maximum acoustic crunch.",
    dicaDoChef_es: "El método de doble cocción ablanda el almidón y luego crea una corteza dorada perfecta.",
    molhosSugeridosIds: [9, 25, 28]
  },

  // ==========================================
  // CAPÍTULO 4: O LADO DOCE (31 A 40)
  // ==========================================
  {
    id: 31,
    capitulo: 4,
    titulo: "Mini Basque Burnt Cheesecake da Air Fryer",
    titulo_en: "Mini Basque Burnt Cheesecake",
    titulo_es: "Mini Tarta de Queso Vasca Tostada",
    subtitulo: "Topo caramelizado queimadinho clássico e centro cremoso derretendo",
    subtitulo_en: "Caramelized charred exterior with an impossibly molten, silky heart",
    subtitulo_es: "Superficie tostada caramelizada y centro fundente irresistible",
    tempoPreparo: 10,
    tempoAirFryer: 15,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["sobremesa", "cheesecake", "doce", "gourmet"],
    shakeBasketMinute: 8,
    ingredientes: [
      { nome: "Cream cheese em temperatura ambiente", nome_en: "Cream cheese, softened", nome_es: "Queso crema a temperatura ambiente", qtd: 200, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Açúcar cristal ou refinado", nome_en: "Granulated sugar", nome_es: "Azúcar refinada", qtd: 60, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Ovo grande inteiro", nome_en: "Large whole egg", nome_es: "Huevo grande entero", qtd: 1, unidade: "unidade", unidade_en: "egg", unidade_es: "unidad" },
      { nome: "Creme de leite fresco ou nata", nome_en: "Heavy cream", nome_es: "Crema de leche fresca o nata", qtd: 80, unidade: "ml", unidade_en: "ml", unidade_es: "ml" },
      { nome: "Farinha de trigo e essência de baunilha", nome_en: "Flour and vanilla extract", nome_es: "Harina y esencia de vainilla", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Bata o cream cheese com o açúcar até ficar liso e sedoso.",
      "Adicione o ovo, a baunilha e depois o creme de leite e a farinha, misturando sem bater ar em excesso.",
      "Forre um ramequim ou forma pequena com papel manteiga amassado (estilo rústico de San Sebastián).",
      "Despeje a massa e asse a 200°C por 15 minutos até a superfície ficar marrom escura caramelizada e o centro ainda tremer como gelatina.",
      "Deixe esfriar na bancada e depois gele por 2 horas antes de servir."
    ],
    passos_en: [
      "Beat cream cheese and sugar together until completely smooth and lump-free.",
      "Whisk in egg, vanilla, followed by heavy cream and flour without incorporating too much air.",
      "Line a 4-inch ramekin with crumpled parchment paper for that authentic rustic look.",
      "Pour batter and air fry at 200°C (400°F) for 15 mins until the top is deeply caramelized brown with a jiggling center.",
      "Cool completely, then chill for 2 hours before slicing."
    ],
    passos_es: [
      "Bate el queso crema con el azúcar hasta que no queden grumos.",
      "Agrega el huevo, vainilla, la nata y la harina con movimientos suaves.",
      "Forra un molde pequeño con papel para hornear arrugado.",
      "Vierte la mezcla y cocina a 200°C por 15 minutos hasta que la parte superior quede bien tostada y el centro tiemble.",
      "Enfría y refrigera 2 horas antes de disfrutar."
    ],
    dicaDoChef: "A potência do ar forçado a 200°C queima o açúcar na superfície com perfeição enquanto mantém o centro aveludado sem passar do ponto.",
    dicaDoChef_en: "Vigorous hot convection air chars the exterior sugars rapidly while leaving the center silky and custardy.",
    dicaDoChef_es: "El calor directo carameliza la capa superior manteniendo el interior cremoso y suave.",
    molhosSugeridosIds: [31, 37, 40]
  },
  {
    id: 32,
    capitulo: 4,
    titulo: "Vulcão Petit Gâteau com Centro de Chocolate Derretido",
    titulo_en: "Lava Cake Molten Chocolate Volcano",
    titulo_es: "Volcán Petit Gâteau de Chocolate Fundido",
    subtitulo: "Bolinho macio por fora com lava de chocolate escorrendo na primeira colherada",
    subtitulo_en: "Tender chocolate cake casing bursting with rich warm molten fudge center",
    subtitulo_es: "Bizcochito tierno por fuera con cascada de chocolate líquido interior",
    tempoPreparo: 8,
    tempoAirFryer: 8,
    temperatura: 180,
    rendimento: 2,
    rendimentoUnidade: "bolinhos",
    rendimentoUnidade_en: "cakes",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["chocolate", "doce", "sobremesa", "petit-gateau"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Chocolate meio amargo nobre picado", nome_en: "Dark chocolate, chopped", nome_es: "Chocolate semiamargo picado", qtd: 100, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Manteiga sem sal", nome_en: "Unsalted butter", nome_es: "Mantequilla sin sal", qtd: 50, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Ovo inteiro e 1 gema", nome_en: "Whole egg plus 1 yolk", nome_es: "Huevo entero y 1 yema", qtd: 2, unidade: "unidades", unidade_en: "eggs", unidade_es: "huevos" },
      { nome: "Açúcar e farinha de trigo", nome_en: "Sugar and all-purpose flour", nome_es: "Azúcar y harina de trigo", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Derreta o chocolate com a manteiga no micro-ondas por 45 segundos e misture bem.",
      "Bata os ovos com o açúcar até espumar levemente.",
      "Junte o chocolate derretido e adicione a farinha peneirada delicadamente.",
      "Unte ramequins com manteiga e cacau em pó e despeje a massa.",
      "Asse a 180°C por exatamente 8 minutos.",
      "Passe uma faquinha na borda e desenforme no prato: a lava escorrerá quente."
    ],
    passos_en: [
      "Melt chocolate and butter together until silky.",
      "Whisk eggs with sugar until pale and frothy.",
      "Fold in melted chocolate mixture, then sift in flour.",
      "Grease ramekins with butter and dust with cocoa powder.",
      "Air fry at 180°C (360°F) for exactly 8 minutes.",
      "Loosen edges with a knife, invert onto plate, and watch the fudge flow."
    ],
    passos_es: [
      "Derrite el chocolate con la mantequilla.",
      "Bate los huevos con el azúcar.",
      "Une el chocolate e integra la harina tamizada con suavidad.",
      "Engrasa moldes con mantequilla y cacao y vierte la mezcla.",
      "Cocina a 180°C por exactamente 8 minutos.",
      "Desmolda en un plato y disfruta la lava de chocolate fundido."
    ],
    dicaDoChef: "Marque os 8 minutos com precisão no timer: se passar de 9 minutos, o centro cozinha e vira um brownie comum.",
    dicaDoChef_en: "Watch your timer like a hawk: at minute 8 the center stays molten lava; minute 9 turns it into standard cake.",
    dicaDoChef_es: "Respeta exactamente los 8 minutos en el temporizador para conservar el centro líquido.",
    molhosSugeridosIds: [40, 10, 31]
  },
  {
    id: 33,
    capitulo: 4,
    titulo: "Cookies Americanos Clássicos com Casca Crocante e Centro Macio",
    titulo_en: "Bakery-Style Chocolate Chunk Cookies",
    titulo_es: "Cookies Americanas Clásicas con Chispas",
    subtitulo: "Gotas de chocolate derretidas, bordas crocantes e interior puxa-puxa",
    subtitulo_en: "Puffed bakery cookies with golden edges and chewy molten chocolate pockets",
    subtitulo_es: "Bordes crujientes dorados y centro suave repleto de chocolate derretido",
    tempoPreparo: 8,
    tempoAirFryer: 7,
    temperatura: 165,
    rendimento: 4,
    rendimentoUnidade: "cookies",
    rendimentoUnidade_en: "cookies",
    rendimentoUnidade_es: "galletas",
    dificuldade: "facil",
    tags: ["cookie", "chocolate", "americano", "doce"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Manteiga amolecida", nome_en: "Softened butter", nome_es: "Mantequilla blanda", qtd: 60, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Açúcar mascavo e açúcar refinado", nome_en: "Brown sugar and white sugar", nome_es: "Azúcar moreno y azúcar blanco", qtd: 60, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Ovo batido", nome_en: "Beaten egg", nome_es: "Huevo batido", qtd: 1/2, unidade: "unidade", unidade_en: "egg", unidade_es: "unidad" },
      { nome: "Farinha de trigo com bicarbonato de sódio", nome_en: "Flour with baking soda", nome_es: "Harina con bicarbonato", qtd: 100, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Gotas ou pedaços de chocolate meio amargo", nome_en: "Chocolate chips or dark chunks", nome_es: "Chispas o trozos de chocolate", qtd: 70, unidade: "g", unidade_en: "g", unidade_es: "g" }
    ],
    passos: [
      "Bata a manteiga com os dois açúcares até formar um creme.",
      "Adicione o ovo e a baunilha, depois a farinha e bicarbonato.",
      "Misture o chocolate em gotas e modele 4 bolas compactas.",
      "Coloque sobre papel manteiga furado na cesta.",
      "Asse a 165°C por 7 minutos.",
      "Ao retirar, o centro parecerá mole: deixe descansar por 5 minutos para firmar perfeitamente."
    ],
    passos_en: [
      "Cream butter and both sugars until fluffy.",
      "Mix in egg and vanilla, then fold in flour and baking soda.",
      "Fold in chocolate chunks and shape into 4 sturdy balls.",
      "Place spaced apart on perforated parchment paper in the basket.",
      "Bake at 165°C (330°F) for 7 minutes.",
      "Centers will look soft upon removing; rest 5 minutes to set into perfect chewiness."
    ],
    passos_es: [
      "Bate la mantequilla con los dos tipos de azúcar.",
      "Agrega el huevo, vainilla y luego la harina con bicarbonato.",
      "Incorpora el chocolate y forma 4 bolas firmes.",
      "Coloca sobre papel para hornear en la cesta.",
      "Hornea a 165°C por 7 minutos.",
      "Deja reposar 5 minutos al retirar para que adquieran textura perfecta."
    ],
    dicaDoChef: "A temperatura mais branda (165°C) impede que as bordas queimem antes da farinha cozinhar, mantendo o centro com textura 'fudge'.",
    dicaDoChef_en: "Lower heat (165°C / 330°F) bakes the cookie through without charring the chocolate chunks.",
    dicaDoChef_es: "Hornear a 165°C garantiza un borde dorado sin quemar el chocolate interior.",
    molhosSugeridosIds: [40, 37, 10]
  },
  {
    id: 34,
    capitulo: 4,
    titulo: "Churros Espanhóis Crocantes com Doce de Leite",
    titulo_en: "Crispy Cinnamon Sugar Air Fryer Churros",
    titulo_es: "Churros Españoles Crujientes con Dulce de Leche",
    subtitulo: "Estalando de crocantes por fora e polvilhados com açúcar e canela",
    subtitulo_en: "Piped ridged churros dusted with cinnamon sugar and warm caramel dip",
    subtitulo_es: "Estriados crujientes espolvoreados con canela y azúcar",
    tempoPreparo: 12,
    tempoAirFryer: 9,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "medio",
    tags: ["churros", "doce-de-leite", "doce", "sobremesa"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Água com manteiga e pitada de sal", nome_en: "Water, butter, and salt", nome_es: "Agua, mantequilla y pizca de sal", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha de trigo", nome_en: "All-purpose flour", nome_es: "Harina de trigo", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Ovo inteiro batido", nome_en: "Egg, beaten", nome_es: "Huevo batido", qtd: 1, unidade: "unidade", unidade_en: "egg", unidade_es: "unidad" },
      { nome: "Açúcar refinado e canela em pó para rolar", nome_en: "Cinnamon sugar for dusting", nome_es: "Azúcar y canela molida para rebozar", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Ferva a água com manteiga em uma panela, junte a farinha de uma vez e mexa até desgrudar do fundo formando uma bola de massa.",
      "Deixe amornar e incorpore o ovo batido com batedor.",
      "Coloque em saco de confeitar com bico pitanga estrela grossa.",
      "Pingue tiras de 10 cm diretamente na cesta untada cortando a ponta com tesoura.",
      "Asse a 195°C por 9 minutos até dourarem.",
      "Retire, borrife levemente com manteiga e passe no açúcar com canela."
    ],
    passos_en: [
      "Boil water with butter; dump in flour all at once and stir vigorously into a smooth dough ball.",
      "Cool slightly, then beat in the egg until glossy.",
      "Transfer to piping bag fitted with an open star tip.",
      "Pipe 4-inch strips directly into greased air fryer basket, snipping with kitchen shears.",
      "Air fry at 195°C (385°F) for 9 minutes until crisp.",
      "Brush warm churros with melted butter and roll in cinnamon sugar."
    ],
    passos_es: [
      "Hierve el agua con mantequilla, agrega la harina de golpe y revuelve hasta formar una masa compacta.",
      "Deja entibiar e incorpora el huevo batido.",
      "Coloca en manga pastelera con boquilla de estrella.",
      "Forma tiras de 10 cm en la cesta engrasada cortando con tijera.",
      "Hornea a 195°C por 9 minutos.",
      "Pincela mantequilla derretida y pasa por azúcar y canela."
    ],
    dicaDoChef: "O bico estrela é essencial: as estrias aumentam a área de contato com o calor e garantem o estalo crocante clássico.",
    dicaDoChef_en: "A star piping tip creates multiple ridges that crisp up in the air current, giving churros their signature snap.",
    dicaDoChef_es: "La boquilla de estrella crea estrías que maximizan el crujiente exterior.",
    molhosSugeridosIds: [40, 10, 2]
  },
  {
    id: 35,
    capitulo: 4,
    titulo: "French Toast Sticks Caramelizados com Canela",
    titulo_en: "Crispy Brioche French Toast Sticks",
    titulo_es: "Palitos de Tostada Francesa Caramelizados",
    subtitulo: "Bastões de brioche dourados na casca com interior fofo de pudim",
    subtitulo_en: "Thick brioche batons soaked in sweet spiced custard and crusted golden",
    subtitulo_es: "Bastones de brioche bañados en crema especiada y caramelizados",
    tempoPreparo: 6,
    tempoAirFryer: 6,
    temperatura: 190,
    rendimento: 3,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["cafe-da-manha", "doce", "francesa", "canela"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Fatias grossas de pão brioche ou pão de forma firme cortadas em 3 bastões", nome_en: "Thick brioche slices, cut into chunky sticks", nome_es: "Rebanadas gruesas de pan brioche en bastones", qtd: 4, unidade: "fatias", unidade_en: "slices", unidade_es: "rebanadas" },
      { nome: "Ovo batido com 1/4 xícara de leite", nome_en: "Egg whisked with 1/4 cup milk", nome_es: "Huevo batido con 1/4 taza de leche", qtd: 1, unidade: "mistura", unidade_en: "custard", unidade_es: "mezcla" },
      { nome: "Canela em pó e açúcar de baunilha", nome_en: "Cinnamon and vanilla sugar", nome_es: "Canela en polvo y azúcar con vainilla", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Mergulhe os bastões de pão na mistura de ovo e leite rapidamente (não encharque demais).",
      "Passe levemente na mistura de açúcar e canela.",
      "Asse na air fryer a 190°C por 6 minutos, virando aos 3 minutos.",
      "Sirva estalando de crocante com mel ou xarope de bordo."
    ],
    passos_en: [
      "Quickly dip brioche sticks into egg-milk custard (do not oversaturate).",
      "Dredge in cinnamon sugar.",
      "Air fry at 190°C (375°F) for 6 minutes, flipping at minute 3.",
      "Drizzle with warm maple syrup."
    ],
    passos_es: [
      "Pasa los bastones de pan por la mezcla de huevo y leche rápidamente.",
      "Pásalos por azúcar y canela.",
      "Cocina en air fryer a 190°C por 6 minutos volteando a los 3 minutos.",
      "Sirve con miel o jarabe de arce."
    ],
    dicaDoChef: "O pão brioche amanteigado é ideal porque carameliza por fora sem perder o miolo macio de nuvem.",
    dicaDoChef_en: "Brioche has high butter content which crisps and toasts with an unmatched bakery fragrance.",
    dicaDoChef_es: "El pan brioche carameliza por fuera conservando un interior esponjoso y suave.",
    molhosSugeridosIds: [40, 37, 2]
  },
  {
    id: 36,
    capitulo: 4,
    titulo: "Bananas Assadas Caramelizadas com Mel e Nozes",
    titulo_en: "Caramelized Air-Fried Bananas with Walnuts",
    titulo_es: "Plátanos Caramelizados con Miel y Nueces",
    subtitulo: "Sobremesa reconfortante pronta em menos de 7 minutos",
    subtitulo_en: "Sweet warm split bananas caramelized with brown sugar and toasted nuts",
    subtitulo_es: "Plátanos dorados con azúcar moreno, canela y nueces crujientes",
    tempoPreparo: 3,
    tempoAirFryer: 6,
    temperatura: 190,
    rendimento: 2,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["sobremesa", "banana", "saudavel", "rapido"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Bananas maduras cortadas ao meio no comprimento", nome_en: "Ripe bananas, sliced lengthwise", nome_es: "Plátanos maduros cortados por la mitad a lo largo", qtd: 2, unidade: "unidades", unidade_en: "bananas", unidade_es: "plátanos" },
      { nome: "Manteiga derretida e mel", nome_en: "Melted butter and honey", nome_es: "Mantequilla derretida y miel", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Canela em pó e nozes picadas", nome_en: "Ground cinnamon and chopped walnuts", nome_es: "Canela en polvo y nueces picadas", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Pincele as metades de banana com a manteiga e o mel.",
      "Polvilhe com canela em pó e as nozes picadas.",
      "Asse a 190°C por 6 minutos até borbulhar e dourar.",
      "Sirva com sorvete de creme ou iogurte natural."
    ],
    passos_en: [
      "Brush banana halves with melted butter and honey.",
      "Sprinkle with ground cinnamon and walnuts.",
      "Air fry at 190°C (375°F) for 6 minutes until bubbling and caramelized.",
      "Serve warm with vanilla ice cream."
    ],
    passos_es: [
      "Pincela las mitades de plátano con mantequilla y miel.",
      "Espolvorea canela y nueces picadas.",
      "Cocina a 190°C por 6 minutos hasta que caramelice.",
      "Sirve tibio con helado de vainilla."
    ],
    dicaDoChef: "O calor carameliza a frutose natural da banana, dispensando grandes quantidades de açúcar refinado.",
    dicaDoChef_en: "Intense heat concentrates natural fruit sugars into a rich, guilt-free caramel.",
    dicaDoChef_es: "El calor concentra los azúcares naturales de la fruta logrando un caramelo delicioso.",
    molhosSugeridosIds: [40, 31, 2]
  },
  {
    id: 37,
    capitulo: 4,
    titulo: "Apple Crisp Folhado com Aveia e Especiarias",
    titulo_en: "Warm Spiced Air Fryer Apple Crisp",
    titulo_es: "Apple Crisp Crujiente con Avena y Manzana",
    subtitulo: "Cubos de maçã perfumados com canela cobertos por farofa crocante de aveia",
    subtitulo_en: "Tender cinnamon-scented apples under a buttery oat streusel crust",
    subtitulo_es: "Manzanas tiernas con canela bajo una costra dorada de avena y mantequilla",
    tempoPreparo: 8,
    tempoAirFryer: 12,
    temperatura: 175,
    rendimento: 2,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["maca", "sobremesa", "aveia", "outono"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Maçãs fuji ou gala descascadas e em cubos", nome_en: "Apples, peeled and diced", nome_es: "Manzanas peladas en cubos", qtd: 2, unidade: "unidades", unidade_en: "apples", unidade_es: "manzanas" },
      { nome: "Aveia em flocos e farinha de trigo", nome_en: "Rolled oats and flour", nome_es: "Avena en hojuelas y harina", qtd: 1/4, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Açúcar mascavo e manteiga gelada em cubinhos", nome_en: "Brown sugar and cold butter cubes", nome_es: "Azúcar moreno y mantequilla fría en cubitos", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Canela em pó e noz-moscada", nome_en: "Cinnamon and nutmeg", nome_es: "Canela y nuez moscada", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Misture as maçãs picadas com uma colher de açúcar mascavo e canela e coloque no fundo de dois ramequins.",
      "Amasse a aveia, farinha, restante do açúcar e manteiga com as pontas dos dedos até formar uma farofa úmida com pedacinhos.",
      "Cubra as maçãs com a farofa.",
      "Asse a 175°C por 12 minutos até a maçã borbulhar e a cobertura ficar dourada e crocante."
    ],
    passos_en: [
      "Toss diced apples with brown sugar and cinnamon; divide into two small oven-safe dishes.",
      "Rub cold butter into oats, flour, and sugar with fingertips until crumbly.",
      "Scatter crumble topping generously over apples.",
      "Air fry at 175°C (350°F) for 12 minutes until bubbly and crisp.",
      "Top with vanilla ice cream."
    ],
    passos_es: [
      "Mezcla las manzanas con canela y azúcar moreno en moldes aptos para calor.",
      "Frota con los dedos la avena, harina, azúcar y mantequilla fría hasta formar grumos.",
      "Cubre las manzanas con el streusel.",
      "Cocina a 175°C por 12 minutos hasta dorar la superficie.",
      "Acompaña con helado."
    ],
    dicaDoChef: "A manteiga deve estar gelada ao fazer a farofa; isso cria bolsas de crocância irresistíveis na cobertura de aveia.",
    dicaDoChef_en: "Cold butter pockets expand and crisp the oats without turning greasy.",
    dicaDoChef_es: "Usar mantequilla bien fría genera grumos crocantes que no se derriten antes de tiempo.",
    molhosSugeridosIds: [40, 31, 2]
  },
  {
    id: 38,
    capitulo: 4,
    titulo: "Donut Bites Fofinhos com Açúcar e Canela",
    titulo_en: "Pillowy Air Fryer Cinnamon Sugar Donut Holes",
    titulo_es: "Bocaditos de Donut Esponjosos con Canela",
    subtitulo: "Bolinhas aeradas com casquinha crocante e sabor de feira americana",
    subtitulo_en: "Golden fluffy bites tossed in melted butter and cinnamon sugar",
    subtitulo_es: "Esferas esponjosas con costra dorada rebozadas en mantequilla y canela",
    tempoPreparo: 8,
    tempoAirFryer: 5,
    temperatura: 180,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["donut", "doce", "lanche", "rapido"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Massa de pão doce ou massa pronta de bisnaga de croissant", nome_en: "Refrigerated biscuit or sweet dough", nome_es: "Masa lista para bizcochos o medialunas", qtd: 1, unidade: "rolo", unidade_en: "roll", unidade_es: "tubo" },
      { nome: "Manteiga derretida para banhar", nome_en: "Melted butter", nome_es: "Mantequilla derretida", qtd: 3, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Açúcar cristal misturado com canela em pó", nome_en: "Granulated sugar mixed with cinnamon", nome_es: "Azúcar con canela", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Corte a massa em cubos pequenos e enrole em bolinhas do tamanho de uma noz.",
      "Coloque na cesta com espaço entre elas.",
      "Asse a 180°C por apenas 5 minutos até inflarem e dourarem.",
      "Retire quentes, passe na manteiga derretida e depois role abundantemente no açúcar com canela."
    ],
    passos_en: [
      "Cut dough into bite-sized nuggets and roll into balls.",
      "Arrange with breathing space in the basket.",
      "Air fry at 180°C (355°F) for just 5 minutes until puffed and golden.",
      "Immediately dunk in melted butter and roll through cinnamon sugar."
    ],
    passos_es: [
      "Corta la masa y rueda formando bolitas tamaño bocado.",
      "Coloca en la cesta con espacio.",
      "Cocina a 180°C por 5 minutos hasta que inflen y doren.",
      "Pásalas de inmediato por mantequilla derretida y luego por azúcar con canela."
    ],
    dicaDoChef: "Banhar na manteiga derretida logo ao tirar da cesta é o segredo para que a canela e o açúcar cristalizem em volta do donut.",
    dicaDoChef_en: "Butter coating while piping hot glazes the sugar crystals onto the crust instantly.",
    dicaDoChef_es: "Bañar en mantequilla caliente permite que el azúcar cristalice formando una costra deliciosa.",
    molhosSugeridosIds: [40, 2, 10]
  },
  {
    id: 39,
    capitulo: 4,
    titulo: "Brownie Fudgy com Casquinha Rachada na Air Fryer",
    titulo_en: "Fudgy Air Fryer Brownies with Crackly Top",
    titulo_es: "Brownie Meloso con Costra Craquelada",
    subtitulo: "Interior denso e chocolate fudgy com a clássica casquinha craquelada brilhante",
    subtitulo_en: "Rich ultra-dense center beneath that coveted shiny paper-thin crackle",
    subtitulo_es: "Centro denso y chocolatero con la clásica cubierta brillante craquelada",
    tempoPreparo: 10,
    tempoAirFryer: 16,
    temperatura: 160,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["brownie", "chocolate", "doce", "sobremesa"],
    shakeBasketMinute: 8,
    ingredientes: [
      { nome: "Chocolate meio amargo derretido com manteiga", nome_en: "Dark chocolate melted with butter", nome_es: "Chocolate negro fundido con mantequilla", qtd: 120, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Manteiga sem sal", nome_en: "Unsalted butter", nome_es: "Mantequilla", qtd: 60, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Açúcar refinado", nome_en: "Sugar", nome_es: "Azúcar", qtd: 100, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Ovos batidos intensamente", nome_en: "Eggs, beaten vigorously", nome_es: "Huevos batidos enérgicamente", qtd: 2, unidade: "unidades", unidade_en: "eggs", unidade_es: "huevos" },
      { nome: "Farinha de trigo e cacau em pó 100%", nome_en: "Flour and pure cocoa powder", nome_es: "Harina y cacao puro en polvo", qtd: 40, unidade: "g", unidade_en: "g", unidade_es: "g" }
    ],
    passos: [
      "Bata os ovos com o açúcar por 3 minutos até espumar e clarear (essencial para a casquinha).",
      "Incorpore o chocolate derretido com a manteiga morna.",
      "Junte a farinha e o cacau peneirados com movimentos suaves.",
      "Despeje em forma quadrada forrada com papel manteiga.",
      "Asse a 160°C por 16 minutos.",
      "Deixe esfriar completamente na forma antes de cortar os quadrados."
    ],
    passos_en: [
      "Beat eggs and sugar vigorously for 3 minutes until pale and frothy (secret for crackly top).",
      "Stir in melted chocolate and warm butter.",
      "Gently fold in sifted flour and cocoa powder.",
      "Pour into parchment-lined 6-inch pan.",
      "Air fry at 160°C (320°F) for 16 minutes.",
      "Cool completely before slicing into dense fudgy squares."
    ],
    passos_es: [
      "Bate los huevos con el azúcar durante 3 minutos hasta que blanqueen.",
      "Agrega el chocolate derretido con mantequilla tibia.",
      "Tamiza la harina y el cacao integrando con espátula.",
      "Vierte en molde forrado con papel.",
      "Cocina a 160°C por 16 minutos.",
      "Deja enfriar por completo antes de cortar."
    ],
    dicaDoChef: "Bater o açúcar com os ovos até dissolver completamente é a reação físico-química que faz a casquinha espelhada rachar por cima.",
    dicaDoChef_en: "Beating sugar into eggs until fully dissolved is the proven technique that produces that shiny meringue-like crackly paper top.",
    dicaDoChef_es: "Batir bien los huevos con el azúcar es lo que genera esa clásica película brillante craquelada.",
    molhosSugeridosIds: [40, 10, 31]
  },
  {
    id: 40,
    capitulo: 4,
    titulo: "Folhado de Nutella com Morangos Frescos",
    titulo_en: "Warm Nutella & Strawberry Puff Pastry Turnovers",
    titulo_es: "Hojaldre de Nutella y Fresas Crujiente",
    subtitulo: "Triângulos folhados estaladiços recheados de creme de avelã e frutas",
    subtitulo_en: "Golden flaky pastry pockets oozing with warm hazelnut cream and berries",
    subtitulo_es: "Triángulos de hojaldre crujiente rellenos de crema de avellana y fresa",
    tempoPreparo: 6,
    tempoAirFryer: 8,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "turnovers",
    rendimentoUnidade_es: "unidades",
    dificuldade: "facil",
    tags: ["nutella", "morango", "folhado", "doce"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Massa folhada pronta laminada", nome_en: "Ready-rolled puff pastry sheet", nome_es: "Lámina de masa de hojaldre", qtd: 1, unidade: "rolo", unidade_en: "sheet", unidade_es: "lámina" },
      { nome: "Nutella ou creme de avelã", nome_en: "Nutella hazelnut spread", nome_es: "Nutella o crema de avellanas", qtd: 4, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Morangos frescos fatiados", nome_en: "Fresh strawberries, sliced", nome_es: "Fresas frescas en rodajas", qtd: 4, unidade: "unidades", unidade_en: "berries", unidade_es: "fresas" },
      { nome: "Gema de ovo batida e açúcar de confeiteiro", nome_en: "Egg wash & powdered sugar", nome_es: "Yema batida y azúcar glas", qtd: 1, unidade: "unidade", unidade_en: "egg", unidade_es: "unidad" }
    ],
    passos: [
      "Corte a massa folhada em 4 quadrados.",
      "Coloque 1 colher de Nutella e fatias de morango no centro.",
      "Dobre em triângulo e aperte as bordas com um garfo.",
      "Pincele gema de ovo e fure o topo com a ponta de uma faca.",
      "Asse a 190°C por 8 minutos até dourar e inflar folhado.",
      "Polvilhe açúcar de confeiteiro."
    ],
    passos_en: [
      "Cut puff pastry into 4 squares.",
      "Spoon Nutella and strawberry slices onto center.",
      "Fold into triangles and crimp edges tightly with a fork.",
      "Brush with egg wash and cut a small steam vent on top.",
      "Air fry at 190°C (375°F) for 8 minutes until puffed and golden brown.",
      "Dust with powdered sugar."
    ],
    passos_es: [
      "Corta el hojaldre en 4 cuadrados.",
      "Coloca Nutella y rodajas de fresa en el centro.",
      "Dobla en triángulo y sella con tenedor.",
      "Pincela con yema y haz un pequeño corte arriba para que respire el vapor.",
      "Hornea a 190°C por 8 minutos hasta que infle dorado.",
      "Espolvorea con azúcar glas."
    ],
    dicaDoChef: "Faça um furinho no topo da massa antes de assar para o vapor das frutas escapar sem romper o selamento das bordas.",
    dicaDoChef_en: "Cutting a tiny steam slit on top prevents fruit steam from blowing the crimped seams apart.",
    dicaDoChef_es: "Hacer un pequeño corte arriba evita que el vapor de las fresas rompa los bordes.",
    molhosSugeridosIds: [31, 40, 2]
  },

  // ==========================================
  // CAPÍTULO 5: VERSÕES DE FAST-FOOD (41 A 50)
  // ==========================================
  {
    id: 41,
    capitulo: 5,
    titulo: "Smash Burger Duplo com Crosta Caramelizada e Queijo Derretido",
    titulo_en: "Double Smash Burger with American Cheese",
    titulo_es: "Doble Smash Burger con Queso Americano",
    subtitulo: "Discos finos com crosta de ferro fundido e queijo derretido no pão brioche",
    subtitulo_en: "Caramelized charred patties, melted American cheese on toasted brioche",
    subtitulo_es: "Discos dorados caramelizados con queso derretido en pan brioche",
    tempoPreparo: 6,
    tempoAirFryer: 6,
    temperatura: 205,
    rendimento: 1,
    rendimentoUnidade: "hambúrguer",
    rendimentoUnidade_en: "burger",
    rendimentoUnidade_es: "hamburguesa",
    dificuldade: "facil",
    tags: ["burger", "fast-food", "carne", "queijo"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Carne moída bovina fresca com 20% de gordura (acém/peito)", nome_en: "Ground chuck beef (80/20 blend)", nome_es: "Carne molida de res con 20% de grasa", qtd: 160, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Fatias de queijo cheddar americano ou prato", nome_en: "American cheddar cheese slices", nome_es: "Rebanadas de queso cheddar americano", qtd: 2, unidade: "fatias", unidade_en: "slices", unidade_es: "rebanadas" },
      { nome: "Pão brioche selado com manteiga", nome_en: "Toasted brioche bun", nome_es: "Pan brioche tostado con mantequilla", qtd: 1, unidade: "unidade", unidade_en: "bun", unidade_es: "unidad" },
      { nome: "Sal grosso e pimenta-do-reino moída na hora", nome_en: "Coarse salt and black pepper", nome_es: "Sal y pimienta recién molida", qtd: 1, unidade: "pitada", unidade_en: "pinch", unidade_es: "pizca" }
    ],
    passos: [
      "Divida a carne em 2 bolinhas de 80g. Não compacte a carne.",
      "Pré-aqueça a air fryer a 205°C por 3 minutos.",
      "Amasse as bolinhas na cesta formando discos bem finos e salpique sal e pimenta generosos.",
      "Asse a 205°C por 4 minutos, coloque o queijo por cima e deixe mais 1 a 2 minutos com a máquina desligada para o queijo derreter suavemente.",
      "Monte no pão brioche com molho especial."
    ],
    passos_en: [
      "Divide meat into two 80g loose balls. Do not overwork.",
      "Preheat air fryer to 205°C (400°F) for 3 minutes.",
      "Smash balls flat into thin disks, season heavily with salt and coarse pepper.",
      "Cook at 205°C for 4 minutes, top with cheese slices, and close lid 1 minute for gentle melt.",
      "Stack onto buttered toasted brioche bun with signature spread."
    ],
    passos_es: [
      "Divide la carne en dos bolas de 80g sin apretar de más.",
      "Precalienta la air fryer a 205°C por 3 minutos.",
      "Aplana las bolas formando discos delgados y condimenta con sal y pimienta.",
      "Cocina a 205°C por 4 minutos, coloca el queso encima y deja 1 minuto para fundir.",
      "Monta en el pan brioche con salsa especial."
    ],
    dicaDoChef: "A alta temperatura (205°C) é crucial para selar a crosta Maillard em 4 minutos mantendo o interior suculento.",
    dicaDoChef_en: "Maximum heat (205°C / 400°F) locks in the Maillard crust rapidly while keeping the center tender.",
    dicaDoChef_es: "La temperatura máxima permite crear la costra caramelizada sin secar la hamburguesa.",
    molhosSugeridosIds: [1, 4, 8]
  },
  {
    id: 42,
    capitulo: 5,
    titulo: "Chicken Tenders Super Crocantes Estilo Americano",
    titulo_en: "Crispy American Chicken Tenders",
    titulo_es: "Chicken Tenders Crujientes Estilo Americano",
    subtitulo: "Iscas de filé de frango marinadas no leitelho com casca estaladiça",
    subtitulo_en: "Buttermilk-brined chicken tenders coated in seasoned craggy panko crunch",
    subtitulo_es: "Tiras de pollo marinadas en buttermilk con rebozado crujiente de diner",
    tempoPreparo: 15,
    tempoAirFryer: 12,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["frango", "tenders", "fast-food", "crocante"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Sassami de frango (tenders) limpos", nome_en: "Chicken tenders / tenderloins", nome_es: "Solomillos o tiras de pechuga de pollo", qtd: 500, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Buttermilk (leite com 1 colher de suco de limão ou vinagre)", nome_en: "Buttermilk (milk + splash of lemon)", nome_es: "Buttermilk (leche con jugo de limón)", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha de trigo com páprica, alho, cebola e pimenta caiena", nome_en: "Flour seasoned with paprika, garlic & cayenne", nome_es: "Harina sazonada con pimentón, ajo y cayena", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha panko para o toque final crocante", nome_en: "Panko breadcrumbs for maximum crunch", nome_es: "Pan panko para el toque crujiente", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Marine o frango no buttermilk temperado com sal e alho por 20 minutos.",
      "Retire do leitelho e passe na farinha de trigo temperada misturada com o panko, apertando bem.",
      "Borrife azeite generosamente dos dois lados das tiras.",
      "Asse a 195°C por 12 minutos, virando aos 6 minutos.",
      "Retire dourados, suculentos e ultra crocantes."
    ],
    passos_en: [
      "Marinate chicken in seasoned buttermilk for 20 minutes.",
      "Dredge in flour-panko spice mixture, squeezing firmly to form crags.",
      "Spray generously with oil mist on both sides.",
      "Air fry at 195°C (385°F) for 12 minutes, flipping at minute 6.",
      "Serve hot with signature dipping sauces."
    ],
    passos_es: [
      "Marina el pollo en buttermilk con ajo y sal por 20 minutos.",
      "Pasa por la mezcla de harina, especias y panko apretando bien.",
      "Rocía aceite por ambos lados.",
      "Cocina a 195°C por 12 minutos volteando al minuto 6.",
      "Sirve calientes con salsa dip."
    ],
    dicaDoChef: "O ácido lático do buttermilk amacia a fibra do frango garantindo que o tender desmanche na boca enquanto a casca estala.",
    dicaDoChef_en: "Buttermilk's lactic acid tenderizes poultry protein, keeping tenders juicy inside an acoustic crust.",
    dicaDoChef_es: "El ácido del buttermilk ablanda la carne logrando que se deshaga en la boca.",
    molhosSugeridosIds: [3, 2, 6]
  },
  {
    id: 43,
    capitulo: 5,
    titulo: "Onion Rings Gigantes e Dourados dos Diners",
    titulo_en: "Giant Diner-Style Crispy Onion Rings",
    titulo_es: "Aros de Cebolla Gigantes Dorados de Diner",
    subtitulo: "Anéis grossos de cebola doce com crosta de cerveja e panko estaladiça",
    subtitulo_en: "Thick sweet onion rings with batter-dipped, shattered panko crust",
    subtitulo_es: "Aros gruesos de cebolla dulce con rebozado crujiente de panko",
    tempoPreparo: 12,
    tempoAirFryer: 8,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["cebola", "petisco", "fast-food", "crocante"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Cebolas grandes fatiadas em anéis de 1,5 cm de espessura", nome_en: "Large sweet onions, cut into 1/2-inch rings", nome_es: "Cebollas grandes en aros de 1.5 cm de grosor", qtd: 2, unidade: "unidades", unidade_en: "onions", unidade_es: "cebollas" },
      { nome: "Farinha de trigo temperada com páprica doce e sal", nome_en: "Seasoned flour with paprika and salt", nome_es: "Harina sazonada con pimentón y sal", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Cerveja gelada ou água com gás para massa", nome_en: "Cold beer or seltzer water", nome_es: "Cerveza fría o agua con gas", qtd: 3/4, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha panko abundante", nome_en: "Panko breadcrumbs", nome_es: "Pan panko abundante", qtd: 1.5, unidade: "xícaras", unidade_en: "cups", unidade_es: "tazas" }
    ],
    passos: [
      "Destaque os anéis grandes e retire a película interna fina com as mãos (para a massa não escorregar).",
      "Passe os anéis na farinha seca.",
      "Misture a farinha restante com a cerveja gelada até formar uma massa cremosa.",
      "Mergulhe os anéis na massa líquida e cubra com panko pressionando suavemente.",
      "Borrife azeite e asse a 200°C por 8 minutos até dourarem.",
      "Sirva estalando com molho especial."
    ],
    passos_en: [
      "Separate onion rings and peel away the thin inner membrane so batter adheres.",
      "Dust rings in dry flour.",
      "Whisk remaining flour with cold beer/seltzer into a smooth batter.",
      "Dip floured rings into batter, then immediately press into panko.",
      "Spray with oil and air fry at 200°C (400°F) for 8 mins until golden.",
      "Serve with campfire bloom sauce."
    ],
    passos_es: [
      "Separa los aros y retira la película transparente interna de la cebolla.",
      "Pásalos por harina seca.",
      "Prepara una mezcla líquida con harina y cerveza fría o soda.",
      "Pasa los aros por la mezcla y cubre con panko.",
      "Rocía aceite y cocina a 200°C por 8 minutos.",
      "Sirve con salsa campfire."
    ],
    dicaDoChef: "Tirar a película transparente de dentro de cada anel de cebola é o segredo dos restaurantes para que a casquinha não se solte ao morder.",
    dicaDoChef_en: "Peeling the inner papery membrane off each ring is the trade secret that stops batter from sliding off when bitten.",
    dicaDoChef_es: "Retirar la membrana transparente interior evita que el rebozado se despegue al morder.",
    molhosSugeridosIds: [5, 1, 29]
  },
  {
    id: 44,
    capitulo: 5,
    titulo: "Fish & Chips Crocante de Pub Britânico",
    titulo_en: "Authentic British Pub Fish & Chips",
    titulo_es: "Fish & Chips Crujiente de Pub Británico",
    subtitulo: "Filé de peixe empanado com casca que quebra e batatas rústicas perfeitas",
    subtitulo_en: "Beer-battered style golden flaky cod served with chunky chips",
    subtitulo_es: "Filete de pescado blanco crujiente servido con papas rústicas",
    tempoPreparo: 12,
    tempoAirFryer: 12,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["peixe", "pub", "batata", "ingles"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Filés grossos de bacalhau fresco ou peixe branco (robalo/tilápia)", nome_en: "Thick fresh cod or white fish fillets", nome_es: "Filetes gruesos de bacalao o pescado blanco", qtd: 350, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Farinha panko e farinha de trigo", nome_en: "Panko and flour", nome_es: "Panko y harina de trigo", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Ovo batido com 1 colher de vinagre de malte", nome_en: "Egg whisked with malt vinegar", nome_es: "Huevo batido con vinagre", qtd: 1, unidade: "unidade", unidade_en: "egg", unidade_es: "huevo" }
    ],
    passos: [
      "Seque bem os filés de peixe com papel toalha.",
      "Passe na farinha, depois no ovo e cubra com panko grosso temperado com sal e pimenta.",
      "Asse na air fryer a 200°C por 12 minutos, virando aos 6 minutos.",
      "Sirva com rodelas de limão e molho tártaro rústico."
    ],
    passos_en: [
      "Pat fish fillets thoroughly dry with paper towels.",
      "Dredge in flour, dip into egg, then coat with seasoned coarse panko.",
      "Air fry at 200°C (400°F) for 12 minutes, turning at minute 6.",
      "Serve piping hot with malt vinegar, lemon wedges, and tartar sauce."
    ],
    passos_es: [
      "Seca muy bien los filetes con papel toalla.",
      "Pásalos por harina, huevo y panko sazonado con sal y pimienta.",
      "Cocina en air fryer a 200°C por 12 minutos volteando a la mitad.",
      "Sirve con rodajas de limón y salsa tártara."
    ],
    dicaDoChef: "Manter o filé bem espesso garante que o peixe lasque suculento e fumegante enquanto a crosta de panko fica hiper crocante.",
    dicaDoChef_en: "Using chunky center-cut fillets ensures moist, flaky fish that doesn't dry out under intense air heat.",
    dicaDoChef_es: "Usar filetes gruesos garantiza que el interior quede tierno mientras la cubierta queda extra crujiente.",
    molhosSugeridosIds: [29, 34, 7]
  },
  {
    id: 45,
    capitulo: 5,
    titulo: "Batatas Fritas Estilo Diner Crocantes por Horas",
    titulo_en: "Diner-Style French Fries That Stay Crispy",
    titulo_es: "Papas Fritas Estilo Diner Crujientes",
    subtitulo: "A técnica do amido que faz a batata palito estalar sem amolecer",
    subtitulo_en: "The double-dip starch trick for fries that stay shatteringly crisp for hours",
    subtitulo_es: "El truco del almidón para papas doradas que no se ablandan jamás",
    tempoPreparo: 10,
    tempoAirFryer: 16,
    temperatura: 200,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["batata-frita", "fast-food", "crocante", "campeao"],
    shakeBasketMinute: 8,
    ingredientes: [
      { nome: "Batatas inglesas médias descascadas e em palitos finos", nome_en: "Russet potatoes, peeled and cut into shoestring fries", nome_es: "Papas medianas peladas en bastones delgados", qtd: 4, unidade: "unidades", unidade_en: "potatoes", unidade_es: "papas" },
      { nome: "Amido de milho", nome_en: "Cornstarch", nome_es: "Almidón de maíz (maicena)", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Azeite de oliva", nome_en: "Olive oil", nome_es: "Aceite de oliva", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Sal marinho fino", nome_en: "Fine sea salt", nome_es: "Sal fina marina", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Deixe os palitos de batata em água quente por 10 minutos para amaciar o amido natural.",
      "Escorra e seque perfeitamente com um pano limpo.",
      "Coloque na tigela, adicione o azeite e polvilhe o amido de milho, sacudindo para cobrir cada palito com uma película invisível.",
      "Asse a 200°C por 16 minutos, sacudindo a cesta com energia a cada 4 minutos.",
      "Retire e salpique sal marinho imediatamente."
    ],
    passos_en: [
      "Soak potato batons in hot tap water for 10 minutes to soften starch.",
      "Drain and dry completely with a clean kitchen towel.",
      "Toss in a bowl with olive oil, then dust lightly with cornstarch to coat.",
      "Air fry at 200°C (400°F) for 16 minutes, shaking basket vigorously every 4 minutes.",
      "Toss with fine sea salt immediately."
    ],
    passos_es: [
      "Remoja las papas en agua caliente por 10 minutos.",
      "Escurre y seca completamente con paño limpio.",
      "Mezcla con el aceite y espolvorea la maicena para cubrirlas con una fina película.",
      "Cocina a 200°C por 16 minutos sacudiendo cada 4 minutos.",
      "Sazona con sal marina al instante."
    ],
    dicaDoChef: "Uma colher de amido de milho cria uma película externa que bloqueia a perda de vapor e garante que a batata não amoleça nem depois de esfriar.",
    dicaDoChef_en: "A single tablespoon of cornstarch forms a micro-crust that seals in moisture while frying into glass-hard crispness.",
    dicaDoChef_es: "Una cucharada de maicena sella la superficie e impide que la papa se ablande.",
    molhosSugeridosIds: [8, 1, 3]
  },
  {
    id: 46,
    capitulo: 5,
    titulo: "Sanduíche de Frango Crocante Spicy Popeyes Style",
    titulo_en: "Popeyes-Style Spicy Crispy Chicken Sandwich",
    titulo_es: "Sándwich de Pollo Crujiente Spicy Popeyes",
    subtitulo: "Sobrecoxa gigante super suculenta com casca escarpada no pão brioche com picles",
    subtitulo_en: "Giant craggy fried chicken thigh, spicy mayo, and thick-cut pickles on brioche",
    subtitulo_es: "Contramuslo crujiente especiado con mayonesa picante y pepinillos",
    tempoPreparo: 15,
    tempoAirFryer: 16,
    temperatura: 195,
    rendimento: 2,
    rendimentoUnidade: "sanduíches",
    rendimentoUnidade_en: "sandwiches",
    rendimentoUnidade_es: "sándwiches",
    dificuldade: "medio",
    tags: ["frango", "sanduiche", "spicy", "fast-food"],
    shakeBasketMinute: 8,
    ingredientes: [
      { nome: "Sobrecoxas de frango desossadas com pele abertas", nome_en: "Boneless chicken thighs with skin", nome_es: "Contramuslos de pollo sin hueso con piel", qtd: 2, unidade: "unidades", unidade_en: "thighs", unidade_es: "unidades" },
      { nome: "Marinada de buttermilk com pimenta caiena e alho", nome_en: "Buttermilk marinade with cayenne and garlic", nome_es: "Marinada de buttermilk con cayena y ajo", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Farinha temperada com sal, alho, páprica picante e orégano", nome_en: "Spiced flour with paprika and herbs", nome_es: "Harina sazonada con pimentón picante y ajo", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Pães brioche com manteiga e fatias grossas de picles", nome_en: "Brioche buns and thick dill pickles", nome_es: "Pan brioche y pepinillos gruesos", qtd: 2, unidade: "unidades", unidade_en: "buns", unidade_es: "unidades" }
    ],
    passos: [
      "Mergulhe o frango no buttermilk e passe na farinha temperada, repetindo para criar escamas crocantes volumosas.",
      "Borrife azeite e asse na air fryer a 195°C por 16 minutos, virando na metade.",
      "Toste o pão brioche por 1 minuto na cesta.",
      "Monte com maionese spicy cajun na base, fatias grossas de picles crocante e o frango fumegante por cima."
    ],
    passos_en: [
      "Dip chicken in buttermilk and press into seasoned flour, repeating to create thick crags.",
      "Spray with oil and air fry at 195°C (385°F) for 16 minutes, turning halfway.",
      "Toast brioche buns 1 minute in the warm basket.",
      "Assemble with spicy cajun mayo, crinkle-cut pickles, and towering crispy chicken."
    ],
    passos_es: [
      "Pasa el pollo por el buttermilk y harina dos veces para crear pliegues.",
      "Rocía aceite y cocina a 195°C por 16 minutos volteando a la mitad.",
      "Tuesta el pan brioche 1 minuto en la cesta.",
      "Arma con mayonesa cajún picante, pepinillos y el pollo crujiente."
    ],
    dicaDoChef: "A sobrecoxa é muito superior ao peito para este sanduíche: a gordura natural mantém a carne suculenta sem ressecar durante os 16 minutos.",
    dicaDoChef_en: "Thigh meat stays infinitely juicier than breast under convection heat, providing that iconic restaurant crunch-to-juice ratio.",
    dicaDoChef_es: "El contramuslo conserva toda la jugosidad interior mientras la corteza se vuelve híper crujiente.",
    molhosSugeridosIds: [6, 39, 1]
  },
  {
    id: 47,
    capitulo: 5,
    titulo: "Mini Pizzas de Frigideira Tostadas na Air Fryer",
    titulo_en: "Air Fryer Personal Pan Pizzas",
    titulo_es: "Mini Pizzas Caseras Tostadas en Air Fryer",
    subtitulo: "Massa alta e crocante estilo pan pizza com queijo borbulhante",
    subtitulo_en: "Thick golden pan-crust pizza topped with sauce and blistered cheese",
    subtitulo_es: "Masa dorada crujiente estilo sartén con queso fundido borboteante",
    tempoPreparo: 8,
    tempoAirFryer: 7,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "pizzas",
    rendimentoUnidade_en: "pizzas",
    rendimentoUnidade_es: "pizzas",
    dificuldade: "facil",
    tags: ["pizza", "queijo", "lanche", "rapido"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Discos de massa de pizza pré-assada ou pão sírio/pão pita", nome_en: "Mini pizza crusts or thick pita rounds", nome_es: "Mini bases de pizza o pan pita grueso", qtd: 2, unidade: "unidades", unidade_en: "crusts", unidade_es: "unidades" },
      { nome: "Molho de tomate com orégano e azeite", nome_en: "Tomato sauce with oregano", nome_es: "Salsa de tomate con orégano", qtd: 4, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Queijo mussarela ralado", nome_en: "Shredded mozzarella", nome_es: "Queso mozzarella rallado", qtd: 150, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Rodelas de pepperoni ou tomate e manjericão", nome_en: "Pepperoni or basil toppings", nome_es: "Pepperoni o tomate y albahaca", qtd: 8, unidade: "fatias", unidade_en: "slices", unidade_es: "rodajas" }
    ],
    passos: [
      "Coloque a massa na cesta e asse por 2 minutos a 200°C para pré-selar a base.",
      "Retire, espalhe o molho, o queijo mussarela e a cobertura de sua preferência.",
      "Volte à air fryer a 200°C por mais 5 minutos até o queijo dourar e borbulhar.",
      "Sirva estalando de crocante."
    ],
    passos_en: [
      "Place plain crust in basket and par-bake 2 minutes at 200°C (400°F) to crisp the bottom.",
      "Remove, spread sauce, layer mozzarella, and add favorite toppings.",
      "Return to air fryer at 200°C for 5 minutes until cheese bubbles and chars.",
      "Slice and serve steaming hot."
    ],
    passos_es: [
      "Cocina la base sola por 2 minutos a 200°C para sellar el fondo.",
      "Retira, añade la salsa, mozzarella y tus ingredientes favoritos.",
      "Regresa a la air fryer a 200°C por 5 minutos hasta que el queso dore.",
      "Corta y disfruta crujiente."
    ],
    dicaDoChef: "Pré-assar a base vazia por 2 minutos garante que a massa nunca fique empapada pelo molho de tomate.",
    dicaDoChef_en: "Par-baking the naked crust for 2 minutes seals the bottom, preventing any sauce sogginess.",
    dicaDoChef_es: "Hornear la masa sola 2 minutos impermeabiliza la base para que no absorba líquido de la salsa.",
    molhosSugeridosIds: [37, 17, 1]
  },
  {
    id: 48,
    capitulo: 5,
    titulo: "Corn Dogs Americanos de Quermesse sem Óleo",
    titulo_en: "Classic American Fair Corn Dogs",
    titulo_es: "Corn Dogs Tradicionales Americanos",
    subtitulo: "Salsichas no palito envolvidas em massa dourada e fofinha de milho",
    subtitulo_en: "Hot dogs on skewers encased in sweet, golden cornmeal batter",
    subtitulo_es: "Salchichas en brocheta cubiertas de masa de maíz dorada y esponjosa",
    tempoPreparo: 10,
    tempoAirFryer: 8,
    temperatura: 190,
    rendimento: 4,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "corn dogs",
    rendimentoUnidade_es: "unidades",
    dificuldade: "facil",
    tags: ["corn-dog", "fast-food", "criancas", "lanche"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Salsichas espetadas em palitos de madeira", nome_en: "Hot dog wieners on wooden skewers", nome_es: "Salchichas ensartadas en brochetas", qtd: 4, unidade: "unidades", unidade_en: "wieners", unidade_es: "unidades" },
      { nome: "Fubá mimoso fino e farinha de trigo", nome_en: "Cornmeal and flour", nome_es: "Harina de maíz fina y harina de trigo", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Leite, ovo e 1 colher de mel para a massa", nome_en: "Milk, egg, and honey for sweet batter", nome_es: "Leche, huevo y miel para la masa", qtd: 1, unidade: "preparo", unidade_en: "batter", unidade_es: "mezcla" }
    ],
    passos: [
      "Prepare a massa misturando o fubá, trigo, ovo, leite, mel e sal até ficar densa.",
      "Despeje em um copo alto e mergulhe as salsichas para cobrir uniformemente.",
      "Asse a 190°C por 8 minutos em cesto forrado com papel manteiga até dourar.",
      "Sirva com mostarda e ketchup."
    ],
    passos_en: [
      "Whisk cornmeal, flour, egg, milk, honey, and salt into a thick smooth batter.",
      "Pour into a tall glass and dip skewered dogs straight down to coat.",
      "Place on parchment in basket and air fry at 190°C (375°F) for 8 mins until golden.",
      "Serve with yellow mustard and ketchup."
    ],
    passos_es: [
      "Prepara la masa con harina de maíz, trigo, huevo, leche y miel hasta que quede espesa.",
      "Vierte en un vaso alto y sumerge las salchichas.",
      "Hornea a 190°C por 8 minutos sobre papel para hornear hasta dorar.",
      "Sirve con mostaza y kétchup."
    ],
    dicaDoChef: "Colocar a massa em um copo comprido permite banhar a salsicha de uma vez só com cobertura perfeita sem sujeira.",
    dicaDoChef_en: "Pouring the batter into a tall drinking glass allows seamless, mess-free dipping from top to bottom.",
    dicaDoChef_es: "Verter la masa en un vaso alto permite bañar la salchicha completa en un solo movimiento.",
    molhosSugeridosIds: [2, 21, 18]
  },
  {
    id: 49,
    capitulo: 5,
    titulo: "Nuggets Reais de Peito de Frango Caseiro",
    titulo_en: "Homestyle 100% Real Chicken Nuggets",
    titulo_es: "Nuggets Caseros Reales de Pechuga de Pollo",
    subtitulo: "Peito de frango de verdade processado e empanado com casquinha estaladiça",
    subtitulo_en: "Pure whole chicken breast tenders seasoned and crusted with crispy panko",
    subtitulo_es: "Pechuga de pollo 100% real procesada con rebozado crujiente de panko",
    tempoPreparo: 12,
    tempoAirFryer: 10,
    temperatura: 195,
    rendimento: 4,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["nuggets", "frango", "criancas", "saudavel"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Peito de frango moído ou processado", nome_en: "Minced or ground chicken breast", nome_es: "Pechuga de pollo molida o procesada", qtd: 400, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Cebola em pó, alho em pó e sal", nome_en: "Onion powder, garlic powder, and salt", nome_es: "Cebolla en polvo, ajo en polvo y sal", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" },
      { nome: "Farinha panko para empanar", nome_en: "Panko breadcrumbs", nome_es: "Pan panko para rebozar", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Ovo batido", nome_en: "Beaten egg", nome_es: "Huevo batido", qtd: 1, unidade: "unidade", unidade_en: "egg", unidade_es: "huevo" }
    ],
    passos: [
      "Tempere o frango processado e molde em formatos de nuggets com as mãos umedecidas.",
      "Passe no ovo batido e depois na farinha panko.",
      "Borrife azeite e asse a 195°C por 10 minutos sacudindo na metade do tempo.",
      "Sirva com molhos artesanais."
    ],
    passos_en: [
      "Season minced chicken and shape into nugget patties with damp hands.",
      "Dip in beaten egg, then roll into crunchy panko crumbs.",
      "Spray with oil and air fry at 195°C (385°F) for 10 minutes, shaking at minute 5.",
      "Serve warm with dipping sauces."
    ],
    passos_es: [
      "Sazona el pollo y forma figuras de nuggets con las manos húmedas.",
      "Pasa por huevo batido y cubre con panko.",
      "Rocía aceite y cocina a 195°C por 10 minutos agitando a la mitad.",
      "Sirve con tus salsas favoritas."
    ],
    dicaDoChef: "Umedeça as mãos com água gelada para moldar os nuggets sem que a carne grude nos dedos.",
    dicaDoChef_en: "Wetting hands with cold water prevents minced poultry from sticking while shaping nuggets.",
    dicaDoChef_es: "Humedecer las manos con agua fría ayuda a dar forma a los nuggets con facilidad.",
    molhosSugeridosIds: [2, 3, 4]
  },
  {
    id: 50,
    capitulo: 5,
    titulo: "Philly Cheesesteak Tostado com Pimentões e Queijo Fundido",
    titulo_en: "Authentic Philadelphia Cheesesteak Sub",
    titulo_es: "Philly Cheesesteak Tostado con Pimientos y Queso",
    subtitulo: "Carne bovina em lâminas finas com cebola caramelizada e provolone derretido",
    subtitulo_en: "Shaved ribeye beef, sweet peppers, and melted provolone in a toasted hoagie",
    subtitulo_es: "Láminas finas de carne con cebolla caramelizada y queso provolone fundido",
    tempoPreparo: 10,
    tempoAirFryer: 8,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "sanduíches",
    rendimentoUnidade_en: "subs",
    rendimentoUnidade_es: "sándwiches",
    dificuldade: "facil",
    tags: ["carne", "sanduiche", "philly", "queijo"],
    shakeBasketMinute: 4,
    ingredientes: [
      { nome: "Carne bovina (alcatra ou contrafilé) fatiada quase transparente", nome_en: "Thinly shaved ribeye or sirloin beef", nome_es: "Carne de res cortada en láminas casi transparentes", qtd: 300, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Cebola e pimentão verde fatiados em tiras", nome_en: "Sliced onions and green peppers", nome_es: "Cebolla y pimiento verde en tiras", qtd: 1, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" },
      { nome: "Fatias de queijo provolone ou queijo prato", nome_en: "Provolone cheese slices", nome_es: "Rebanadas de queso provolone", qtd: 4, unidade: "fatias", unidade_en: "slices", unidade_es: "rebanadas" },
      { nome: "Pão baguete ou pão de sanduíche macio", nome_en: "Hoagie sub rolls", nome_es: "Pan tipo baguette o pan de sándwich", qtd: 2, unidade: "unidades", unidade_en: "rolls", unidade_es: "unidades" }
    ],
    passos: [
      "Coloque a carne fatiada, cebola e pimentão na cesta com um fio de azeite, sal e pimenta.",
      "Asse a 200°C por 6 minutos sacudindo aos 3 minutos.",
      "Abra os pães, recheie com a carne suculenta e cubra com as fatias de queijo.",
      "Volte à air fryer por 2 minutos para tostar a casca do pão e derreter o queijo provolone."
    ],
    passos_en: [
      "Toss shaved beef, onions, and peppers with olive oil, salt, and pepper in the basket.",
      "Air fry at 200°C (400°F) for 6 minutes, shaking at minute 3.",
      "Stuff hot mixture into hoagie rolls and blanket with provolone slices.",
      "Return to air fryer for 2 minutes to toast the crust and melt the cheese."
    ],
    passos_es: [
      "Coloca la carne, cebolla y pimiento con aceite, sal y pimienta en la cesta.",
      "Cocina a 200°C por 6 minutos agitando al minuto 3.",
      "Rellena los panes con la carne y cubre con queso provolone.",
      "Regresa 2 minutos para tostar el pan y fundir el queso."
    ],
    dicaDoChef: "Congele a peça de carne por 30 minutos antes de cortar: isso permite fatiar lâminas finíssimas como papel com a faca afiada.",
    dicaDoChef_en: "Partially freezing beef for 30 minutes lets you shave it paper-thin with a chef's knife.",
    dicaDoChef_es: "Congelar la carne 30 minutos facilita cortarla en láminas finísimas con el cuchillo.",
    molhosSugeridosIds: [15, 1, 8]
  },

  // ==========================================
  // CAPÍTULO 6: REAQUECIMENTO & TRUQUES DE MESTRE (51 A 60)
  // ==========================================
  {
    id: 51,
    capitulo: 6,
    titulo: "Pizza Revivida Melhor que Nova",
    titulo_en: "Pizza Reheated Better than Fresh",
    titulo_es: "Pizza Recalentada Mejor que Fresca",
    subtitulo: "A técnica perfeita que restaura a massa estaladiça e queijo borbulhante sem endurecer a borda",
    subtitulo_en: "The master hack to revive cold leftover slices into blistered, crunchy perfection",
    subtitulo_es: "La técnica maestra para revivir rebanadas frías dejándolas más crujientes que al salir de la pizzería",
    tempoPreparo: 1,
    tempoAirFryer: 4,
    temperatura: 180,
    rendimento: 2,
    rendimentoUnidade: "fatias",
    rendimentoUnidade_en: "slices",
    rendimentoUnidade_es: "rebanadas",
    dificuldade: "facil",
    tags: ["pizza", "reaquecimento", "truque", "rapido"],
    shakeBasketMinute: 2,
    ingredientes: [
      { nome: "Fatias de pizza gelada da geladeira", nome_en: "Cold leftover pizza slices", nome_es: "Rebanadas de pizza fría de la nevera", qtd: 2, unidade: "fatias", unidade_en: "slices", unidade_es: "rebanadas" },
      { nome: "Água em borrifador (1 leve borrifada)", nome_en: "Water mist (1 light spritz)", nome_es: "Agua en spray (1 rociada ligera)", qtd: 1, unidade: "borrifada", unidade_en: "mist", unidade_es: "rociada" }
    ],
    passos: [
      "Coloque as fatias de pizza na cesta da air fryer sem sobrepor.",
      "Dê UMA única borrifada leve de água por cima do queijo (evita ressecar).",
      "Asse a 180°C por 3 a 4 minutos.",
      "Retire quando a base estiver estaladiça e o queijo derretido borbulhando."
    ],
    passos_en: [
      "Place cold slices in single layer in the basket.",
      "Give ONE quick mist of water over the cheese to prevent hardening.",
      "Air fry at 180°C (360°F) for 3-4 minutes.",
      "Base turns shatteringly crisp while cheese melts like freshly baked."
    ],
    passos_es: [
      "Coloca las rebanadas en la cesta sin encimar.",
      "Aplica UNA ligera rociada de agua sobre el queso para hidratar.",
      "Cocina a 180°C por 3-4 minutos.",
      "La base quedará crocante y el queso fundido burbujeante."
    ],
    dicaDoChef: "Jamais use micro-ondas para pizza: o micro-ondas excita a água da massa tornando-a borrachuda. O ar quente a 180°C vaporiza a umidade da base criando crocância superior à original.",
    dicaDoChef_en: "Never microwave pizza: it turns crust into rubber. Air circulation at 180°C creates acoustic crunch with molten cheese.",
    dicaDoChef_es: "Nunca recalientes pizza en microondas; la air fryer a 180°C devuelve el crujiente exacto de horno de piedra.",
    molhosSugeridosIds: [37, 17, 4]
  },
  {
    id: 52,
    capitulo: 6,
    titulo: "Salgados de Festa Reaquecidos Ultra Crocantes",
    titulo_en: "Party Appetizers Re-Crisping Secret",
    titulo_es: "Bocadillos de Fiesta Recalentados Ultra Crujientes",
    subtitulo: "Coxinhas, quibes e empadas frios estalando como recém-fritos",
    subtitulo_en: "Revive refrigerated croquettes and party bites into piping-hot crackle",
    subtitulo_es: "Empanaditas y croquetas frías tan crujientes como recién fritas",
    tempoPreparo: 1,
    tempoAirFryer: 5,
    temperatura: 190,
    rendimento: 8,
    rendimentoUnidade: "salgadinhos",
    rendimentoUnidade_en: "bites",
    rendimentoUnidade_es: "bocadillos",
    dificuldade: "facil",
    tags: ["salgados", "reaquecimento", "festa", "crocante"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Salgadinhos de festa gelados (coxinhas, quibes, risoles)", nome_en: "Chilled party snacks (croquettes, fritters)", nome_es: "Bocadillos fritos fríos de fiesta", qtd: 8, unidade: "unidades", unidade_en: "pieces", unidade_es: "unidades" }
    ],
    passos: [
      "Disponha os salgados na cesta com espaço entre eles.",
      "Não precisa adicionar nenhuma gota de óleo.",
      "Asse a 190°C por 5 minutos, sacudindo aos 3 minutos.",
      "A gordura interna original será reativada deixando a casca sequinha e crocante."
    ],
    passos_en: [
      "Arrange snacks spaced out in the basket without adding any oil.",
      "Air fry at 190°C (375°F) for 5 minutes, shaking at minute 3.",
      "Internal oils reactivate and drain off, crisping the outer breading."
    ],
    passos_es: [
      "Coloca los bocadillos en la cesta con espacio sin añadir nada de aceite.",
      "Cocina a 190°C por 5 minutos agitando al minuto 3.",
      "La propia grasa interna reactiva el rebozado dejándolo seco y crocante."
    ],
    dicaDoChef: "A própria gordura do salgado é expelida pelo calor e drena para o fundo da cuba, tornando o salgado mais sequinho e crocante que no dia em que foi feito.",
    dicaDoChef_en: "Excess oil drains down into the bottom pan while convection air leaves the surface dry and crunchy.",
    dicaDoChef_es: "El exceso de grasa drena a la bandeja dejando el exterior libre de aceite y muy crujiente.",
    molhosSugeridosIds: [22, 1, 2]
  },
  {
    id: 53,
    capitulo: 6,
    titulo: "Hash Browns Dourados de Café da Manhã Americano",
    titulo_en: "Golden Diner Hash Brown Patties",
    titulo_es: "Hash Browns Dorados de Desayuno Americano",
    subtitulo: "Batata ralada prensada dourada com crocância extrema de lanchonete dos EUA",
    subtitulo_en: "Shredded potato patties blistered to an audible golden crackle",
    subtitulo_es: "Tortitas de papa rallada prensadas con crocancia extrema de diner",
    tempoPreparo: 5,
    tempoAirFryer: 12,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "patties",
    rendimentoUnidade_es: "unidades",
    dificuldade: "facil",
    tags: ["batata", "hash-brown", "cafe-da-manha", "crocante"],
    shakeBasketMinute: 6,
    ingredientes: [
      { nome: "Hash browns congelados (estilo fast-food americano)", nome_en: "Frozen hash brown patties", nome_es: "Tortitas de papa hash brown congeladas", qtd: 2, unidade: "unidades", unidade_en: "patties", unidade_es: "unidades" },
      { nome: "Azeite em spray para borrifar", nome_en: "Cooking spray", nome_es: "Aceite en spray", qtd: 1, unidade: "fio", unidade_en: "mist", unidade_es: "rociado" },
      { nome: "Sal e pimenta a gosto", nome_en: "Salt and pepper", nome_es: "Sal y pimienta", qtd: 1, unidade: "pitada", unidade_en: "pinch", unidade_es: "pizca" }
    ],
    passos: [
      "Coloque as placas de batata congeladas diretamente na cesta.",
      "Borrife um leve fio de azeite dos dois lados.",
      "Asse a 200°C por 12 a 14 minutos, virando na metade com uma espátula.",
      "Sirva estalando de crocante com ovos e bacon."
    ],
    passos_en: [
      "Place frozen hash brown patties straight into the basket.",
      "Mist both sides with a touch of oil.",
      "Air fry at 200°C (400°F) for 12-14 minutes, flipping halfway with a spatula.",
      "Serve shatteringly crisp with fried eggs."
    ],
    passos_es: [
      "Coloca las tortitas de papa congeladas directo en la cesta.",
      "Rocía un poco de aceite por ambos lados.",
      "Cocina a 200°C por 12-14 minutos volteando a la mitad.",
      "Sirve bien crujientes con huevos y tocino."
    ],
    dicaDoChef: "Não descongele os hash browns antes de assar; ir direto do congelador para o ar a 200°C provoca choque térmico que estala a casquinha.",
    dicaDoChef_en: "Never thaw hash browns; thermal shock from freezer straight into 200°C air produces immediate acoustic crunch.",
    dicaDoChef_es: "No descongeles antes; el choque térmico directo del congelador a 200°C produce el crujiente ideal.",
    molhosSugeridosIds: [8, 3, 24]
  },
  {
    id: 54,
    capitulo: 6,
    titulo: "Pão Francês Dormido com Crosta de Padeiro",
    titulo_en: "Day-Old Baguette Fresh Bakery Revival",
    titulo_es: "Pan Francés del Día Anterior con Corteza de Panadería",
    subtitulo: "Pão murcho de ontem transformado em pão de casca estaladiça e miolo quentinho",
    subtitulo_en: "Stale bread transformed back into crackling artisan loaves in 3 minutes",
    subtitulo_es: "Pan viejo recuperado con corteza crocante y miga caliente esponjosa",
    tempoPreparo: 1,
    tempoAirFryer: 3,
    temperatura: 180,
    rendimento: 2,
    rendimentoUnidade: "pães",
    rendimentoUnidade_en: "loaves",
    rendimentoUnidade_es: "panes",
    dificuldade: "facil",
    tags: ["pao", "truque", "cafe-da-manha", "rapido"],
    shakeBasketMinute: 2,
    ingredientes: [
      { nome: "Pães franceses ou baguetes dormidos do dia anterior", nome_en: "Day-old baguettes or French bread rolls", nome_es: "Panes franceses o baguettes del día anterior", qtd: 2, unidade: "unidades", unidade_en: "rolls", unidade_es: "panes" },
      { nome: "Água da torneira para molhar a casca", nome_en: "Water to moisten crust", nome_es: "Agua para humedecer la corteza", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Passe o pão inteiro rapidamente sob um fio de água da torneira (molhe a casca por fora sem encharcar o miolo).",
      "Coloque na cesta da air fryer.",
      "Asse a 180°C por apenas 3 minutos.",
      "Retire e corte: a casquinha vai quebrar como vidro e o miolo parecerá recém-saído do forno."
    ],
    passos_en: [
      "Briefly run the whole roll under a thin stream of tap water to wet the outer crust.",
      "Place into the air fryer basket.",
      "Air fry at 180°C (360°F) for just 3 minutes.",
      "Crust shatters like glass while the interior returns to steamy softness."
    ],
    passos_es: [
      "Pasa el pan brevemente bajo el grifo de agua para humedecer la corteza.",
      "Colócalo en la cesta de la air fryer.",
      "Hornea a 180°C por solo 3 minutos.",
      "La corteza romperá crujiente y la miga quedará como recién horneada."
    ],
    dicaDoChef: "A água na casca vira vapor instantâneo dentro da cesta fechada, gelatinizando o amido superficial antes de evaporar, recriando o forno a vapor dos melhores padeiros.",
    dicaDoChef_en: "Surface water turns to micro-steam, gelatinizing outer starches before baking off into fresh bakery crust.",
    dicaDoChef_es: "El agua exterior se convierte en vapor recreando la inyección de vapor de los hornos profesionales.",
    molhosSugeridosIds: [23, 17, 24]
  },
  {
    id: 55,
    capitulo: 6,
    titulo: "Batata Frita Murcha Ressuscitada",
    titulo_en: "Soggy Cold French Fries Resurrected",
    titulo_es: "Papas Fritas Frías y Blandas Resucitadas",
    subtitulo: "Recupere sobras de batatas fritas de delivery deixando-as ultra crocantes",
    subtitulo_en: "Turn sad, soggy delivery fries back into hot, acoustic golden crunch",
    subtitulo_es: "Recupera papas de delivery blandas y frías dejándolas súper crujientes",
    tempoPreparo: 1,
    tempoAirFryer: 4,
    temperatura: 200,
    rendimento: 2,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["batata", "reaquecimento", "truque", "crocante"],
    shakeBasketMinute: 2,
    ingredientes: [
      { nome: "Batatas fritas murchas que sobraram do delivery", nome_en: "Leftover cold soggy takeout fries", nome_es: "Papas fritas blandas del delivery", qtd: 200, unidade: "g", unidade_en: "g", unidade_es: "g" }
    ],
    passos: [
      "Espalhe as batatas murchas na cesta sem empilhar.",
      "Não coloque óleo (elas já contêm gordura absorvida).",
      "Asse a 200°C por 3 a 4 minutos, sacudindo aos 2 minutos.",
      "Retire imediatamente e adicione uma pitada de sal."
    ],
    passos_en: [
      "Scatter leftover fries in a single layer without adding any oil.",
      "Air fry at 200°C (400°F) for 3-4 minutes, shaking vigorously at minute 2.",
      "Dust with fresh salt and serve immediately."
    ],
    passos_es: [
      "Esparce las papas en la cesta en una sola capa sin agregar aceite.",
      "Cocina a 200°C por 3-4 minutos agitando enérgicamente al minuto 2.",
      "Agrega una pizca de sal y disfruta de inmediato."
    ],
    dicaDoChef: "A circulação rápida de ar a 200°C empurra a umidade retida para fora e frita a batata com sua própria gordura residual.",
    dicaDoChef_en: "200°C forced airflow evaporates trapped humidity and refries the potato with its own residual oil.",
    dicaDoChef_es: "El aire a 200°C evapora la humedad atrapada usando el propio aceite residual de la papa.",
    molhosSugeridosIds: [1, 8, 3]
  },
  {
    id: 56,
    capitulo: 6,
    titulo: "Croissant Quentinho Folhado com Crosta de Manteiga",
    titulo_en: "Flaky Re-Crisped French Croissants",
    titulo_es: "Croissant Caliente Hojaldrado con Mantequilla",
    subtitulo: "Recupere o aroma e as camadas de manteiga crocantes em 3 minutos",
    subtitulo_en: "Restore thousand-layer buttery flaky crispness in just 3 minutes",
    subtitulo_es: "Recupera las mil capas crujientes de mantequilla en solo 3 minutos",
    tempoPreparo: 1,
    tempoAirFryer: 3,
    temperatura: 160,
    rendimento: 2,
    rendimentoUnidade: "unidades",
    rendimentoUnidade_en: "croissants",
    rendimentoUnidade_es: "croissants",
    dificuldade: "facil",
    tags: ["croissant", "cafe-da-manha", "folhado", "rapido"],
    shakeBasketMinute: 2,
    ingredientes: [
      { nome: "Croissants frios ou do dia anterior", nome_en: "Chilled or day-old croissants", nome_es: "Croissants fríos o del día anterior", qtd: 2, unidade: "unidades", unidade_en: "croissants", unidade_es: "croissants" }
    ],
    passos: [
      "Coloque os croissants na cesta da air fryer.",
      "Asse a 160°C por 3 minutos.",
      "As camadas de manteiga derreterão levemente e estalarão folhadas como se tivessem acabado de sair da padaria parisiense."
    ],
    passos_en: [
      "Place croissants directly in the basket.",
      "Air fry at 160°C (320°F) for 3 minutes.",
      "Butter layers wake up, puffing and crackling with authentic Parisian aroma."
    ],
    passos_es: [
      "Coloca los croissants en la cesta.",
      "Calienta a 160°C por 3 minutos.",
      "Las capas de mantequilla se expanden y crujen como recién hechas."
    ],
    dicaDoChef: "Mantenha a temperatura a 160°C: a manteiga delicada do folhado queima se aquecida acima de 170°C.",
    dicaDoChef_en: "Stick to 160°C (320°F): delicate laminated butter burns quickly if heated beyond 170°C.",
    dicaDoChef_es: "Mantén a 160°C para no quemar la delicada mantequilla del hojaldre.",
    molhosSugeridosIds: [40, 2, 10]
  },
  {
    id: 57,
    capitulo: 6,
    titulo: "Salmão com Crosta de Ervas e Limão Siciliano",
    titulo_en: "Herb & Lemon Crusted Salmon Fillet",
    titulo_es: "Salmón con Costra de Hierbas y Limón",
    subtitulo: "Interior rosado e suculento com crosta aromática dourada em 9 minutos",
    subtitulo_en: "Flaky tender pink salmon with crisp golden garlic herb crust in 9 minutes",
    subtitulo_es: "Salmón jugoso y rosado con costra dorada de hierbas en 9 minutos",
    tempoPreparo: 5,
    tempoAirFryer: 9,
    temperatura: 190,
    rendimento: 2,
    rendimentoUnidade: "filés",
    rendimentoUnidade_en: "fillets",
    rendimentoUnidade_es: "filetes",
    dificuldade: "facil",
    tags: ["salmao", "peixe", "saudavel", "gourmet"],
    shakeBasketMinute: 5,
    ingredientes: [
      { nome: "Filés de salmão com pele limpos", nome_en: "Salmon fillets with skin on", nome_es: "Filetes de salmón frescos con piel", qtd: 2, unidade: "unidades", unidade_en: "fillets", unidade_es: "filetes" },
      { nome: "Azeite de oliva e suco de limão siciliano", nome_en: "Olive oil and fresh lemon juice", nome_es: "Aceite de oliva y jugo de limón", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Farinha panko com alho picadinho, dill e salsinha", nome_en: "Panko breadcrumbs with minced garlic & dill", nome_es: "Pan panko con ajo picado, eneldo y perejil", qtd: 3, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" }
    ],
    passos: [
      "Tempere o salmão com sal, azeite e limão siciliano.",
      "Pressione a mistura de panko e ervas frescas por cima da carne rosada.",
      "Coloque na cesta com a pele virada para baixo.",
      "Asse a 190°C por 9 minutos sem mexer.",
      "Retire com espátula: a pele ficará crocante e a carne lascando macia."
    ],
    passos_en: [
      "Season salmon with olive oil, salt, and lemon juice.",
      "Press panko, garlic, and fresh herb mixture firmly over the top.",
      "Place skin-side down in the air fryer basket.",
      "Air fry at 190°C (375°F) for 9 minutes undisturbed.",
      "Skin turns crisp while flesh flakes effortlessly."
    ],
    passos_es: [
      "Sazona el salmón con aceite, sal y jugo de limón.",
      "Presiona la mezcla de panko y hierbas frescas sobre la parte superior.",
      "Coloca con la piel hacia abajo en la cesta.",
      "Cocina a 190°C por 9 minutos sin mover.",
      "La piel quedará crujiente y la carne jugosa."
    ],
    dicaDoChef: "Não vire o salmão durante o preparo: o calor de cima doura o panko com perfeição enquanto a pele em baixo protege a umidade natural do peixe.",
    dicaDoChef_en: "Never flip salmon: top element toasts the herb crumb while bottom skin shields delicate fats.",
    dicaDoChef_es: "No voltees el salmón; la piel inferior protege la humedad de la carne mientras la costra superior se dora.",
    molhosSugeridosIds: [29, 27, 34]
  },
  {
    id: 58,
    capitulo: 6,
    titulo: "Costelinha Suína Desmanchando com Glaze BBQ",
    titulo_en: "Fall-Off-The-Bone BBQ Baby Back Ribs",
    titulo_es: "Costillitas BBQ Deshuesables en Air Fryer",
    subtitulo: "Carne macia soltando do osso com calda barbecue brilhante e caramelizada",
    subtitulo_en: "Tender ribs melting off the bone under a glistening sticky BBQ glaze",
    subtitulo_es: "Carne tierna que se desprende del hueso con glaseado brillante de BBQ",
    tempoPreparo: 10,
    tempoAirFryer: 25,
    temperatura: 170,
    rendimento: 3,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "medio",
    tags: ["costelinha", "porco", "bbq", "smokehouse"],
    shakeBasketMinute: 15,
    ingredientes: [
      { nome: "Costelinha suína em ripas cortadas para caber na cesta", nome_en: "Baby back ribs, portioned to fit basket", nome_es: "Costillas de cerdo cortadas al tamaño de la cesta", qtd: 700, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Dry rub com açúcar mascavo, páprica defumada, alho e cominho", nome_en: "Dry rub (brown sugar, smoked paprika, garlic, cumin)", nome_es: "Dry rub (azúcar moreno, pimentón ahumado, ajo, comino)", qtd: 2, unidade: "colheres de sopa", unidade_en: "tbsp", unidade_es: "cdas" },
      { nome: "Molho barbecue defumado para esmaltar", nome_en: "Smoky barbecue sauce for basting", nome_es: "Salsa BBQ ahumada para glasear", qtd: 1/2, unidade: "xícara", unidade_en: "cup", unidade_es: "taza" }
    ],
    passos: [
      "Retire a membrana prateada de trás dos ossos com uma faca e papel toalha.",
      "Massageie o dry rub por toda a carne.",
      "Asse a 170°C por 20 minutos (10 minutos com o osso para cima e 10 com a carne para cima).",
      "Abra, pincele bastante molho barbecue e suba a temperatura para 200°C por mais 5 minutos para caramelizar."
    ],
    passos_en: [
      "Peel off back bone membrane using a butter knife and paper towel.",
      "Massage dry rub vigorously into meat on all sides.",
      "Air fry at 170°C (340°F) for 20 minutes (flipping after 10 mins).",
      "Brush generously with BBQ sauce and blast at 200°C (400°F) for 5 minutes to bubble and glaze."
    ],
    passos_es: [
      "Retira la membrana blanca posterior de las costillas.",
      "Masajea el sazonador seco por toda la carne.",
      "Cocina a 170°C por 20 minutos volteando a los 10 minutos.",
      "Pincela salsa BBQ abundante y sube a 200°C por 5 minutos para caramelizar."
    ],
    dicaDoChef: "A combinação de 20 minutos a 170°C para amaciar as fibras seguida de 5 minutos a 200°C com o barbecue reproduz o efeito de horas em um defumador texano.",
    dicaDoChef_en: "Two-stage heat (low tenderize, high glaze finish) produces true smokehouse caramelization without boiling.",
    dicaDoChef_es: "Cocinar primero a 170°C y terminar a 200°C carameliza la salsa sin secar la carne.",
    molhosSugeridosIds: [12, 18, 11]
  },
  {
    id: 59,
    capitulo: 6,
    titulo: "Picanha Selada Perfeita na Air Fryer",
    titulo_en: "Brazilian Picanha Steak with Crispy Fat Cap",
    titulo_es: "Picanha Perfecta con Grasa Tostada Crujiente",
    subtitulo: "Capa de gordura pururucada e miolo macio suculento ao ponto ideal",
    subtitulo_en: "Charred crispy fat cap with succulent, tender pink center",
    subtitulo_es: "Capa de grasa dorada crujiente y centro jugoso al punto perfecto",
    tempoPreparo: 5,
    tempoAirFryer: 14,
    temperatura: 200,
    rendimento: 3,
    rendimentoUnidade: "porções",
    rendimentoUnidade_en: "servings",
    rendimentoUnidade_es: "porciones",
    dificuldade: "facil",
    tags: ["picanha", "carne", "churrasco", "gourmet"],
    shakeBasketMinute: 8,
    ingredientes: [
      { nome: "Bifes de picanha de 2 a 3 dedos de espessura (ou peça pequena)", nome_en: "Thick-cut picanha steaks (top sirloin cap)", nome_es: "Filetes gruesos de picanha con capa de grasa", qtd: 500, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Sal grosso para churrasco moído", nome_en: "Coarse sea salt", nome_es: "Sal gruesa para asado", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Pimenta-do-reino moída na hora", nome_en: "Fresh cracked black pepper", nome_es: "Pimienta negra recién molida", qtd: 1, unidade: "colher de chá", unidade_en: "tsp", unidade_es: "cdta" }
    ],
    passos: [
      "Faça cortes em formato de losango na capa de gordura da picanha (sem cortar a carne).",
      "Tempere apenas com o sal grosso moído e pimenta-do-reino.",
      "Asse a 200°C por 8 minutos com a gordura virada para cima até tostar e dourar.",
      "Vire e asse por mais 6 minutos a 190°C para o ponto suculento.",
      "Deixe descansar por 3 minutos antes de fatiar finamente contra a fibra."
    ],
    passos_en: [
      "Score shallow diamond crosshatch pattern into the fat cap.",
      "Rub generously with coarse sea salt and cracked pepper.",
      "Air fry at 200°C (400°F) fat-side UP for 8 minutes to render and crisp the cap.",
      "Flip and cook 6 more minutes at 190°C (375°F) for juicy medium-rare.",
      "Rest 3 minutes before carving against the grain."
    ],
    passos_es: [
      "Haz cortes en forma de rombo en la capa de grasa sin cortar la carne.",
      "Condimenta con sal gruesa y pimienta recién molida.",
      "Cocina a 200°C con la grasa hacia arriba por 8 minutos hasta dorar.",
      "Voltea y cocina 6 minutos más a 190°C.",
      "Deja reposar 3 minutos antes de rebanar contra la fibra."
    ],
    dicaDoChef: "Fazer os cortes losangulares na gordura permite que a gordura derreta e hidrate a carne, criando uma crosta tostada digna de parrilla.",
    dicaDoChef_en: "Crosshatching the fat cap channels rendered fats across the steak, basting the meat in its own rich juices.",
    dicaDoChef_es: "Hacer cortes en rombos sobre la grasa ayuda a fundirla e hidratar la carne durante la cocción.",
    molhosSugeridosIds: [26, 9, 22]
  },
  {
    id: 60,
    capitulo: 6,
    titulo: "Sanduíche de Queijo Quente Grelhado Supremo (Ultimate Grilled Cheese)",
    titulo_en: "Ultimate Golden Grilled Cheese Sandwich",
    titulo_es: "Sándwich de Queso Fundido Supremo Grill",
    subtitulo: "Pão tostado crocante com crosta externa de parmesão e blend de queijos elásticos",
    subtitulo_en: "Parmesan-crusted sourdough bursting with stretchy molten cheddar & mozzarella",
    subtitulo_es: "Pan dorado con costra externa de parmesano y queso derretido elástico",
    tempoPreparo: 4,
    tempoAirFryer: 6,
    temperatura: 195,
    rendimento: 1,
    rendimentoUnidade: "sanduíche",
    rendimentoUnidade_en: "sandwich",
    rendimentoUnidade_es: "sándwich",
    dificuldade: "facil",
    tags: ["queijo-quente", "lanche", "queijo", "rapido"],
    shakeBasketMinute: 3,
    ingredientes: [
      { nome: "Fatias grossas de pão de fermentação natural ou brioche", nome_en: "Slices of sourdough or thick country bread", nome_es: "Rebanadas gruesas de pan de masa madre o brioche", qtd: 2, unidade: "fatias", unidade_en: "slices", unidade_es: "rebanadas" },
      { nome: "Queijo cheddar e queijo mussarela ralados misturados", nome_en: "Shredded sharp cheddar and mozzarella mix", nome_es: "Mezcla de queso cheddar y mozzarella rallados", qtd: 100, unidade: "g", unidade_en: "g", unidade_es: "g" },
      { nome: "Maionese de qualidade para passar por fora do pão", nome_en: "Mayonnaise for brushing the outer bread", nome_es: "Mayonesa para untar la parte exterior del pan", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" },
      { nome: "Queijo parmesão ralado fininho para a crosta externa", nome_en: "Grated Parmesan for outer crust", nome_es: "Queso parmesano rallado para la costra exterior", qtd: 1, unidade: "colher de sopa", unidade_en: "tbsp", unidade_es: "cda" }
    ],
    passos: [
      "Recheie o sanduíche com a abundância de queijo cheddar e mussarela.",
      "Passe uma camada fina de maionese por fora das duas fatias de pão e pressione queijo parmesão ralado por cima da maionese.",
      "Asse na air fryer a 195°C por 6 minutos, virando aos 3 minutos.",
      "Corte na diagonal e admire o queijo esticando infinito."
    ],
    passos_en: [
      "Load bread generously with shredded cheddar and mozzarella.",
      "Spread a thin layer of mayonnaise over the outer surfaces and press grated Parmesan into it.",
      "Air fry at 195°C (385°F) for 6 minutes, flipping at minute 3.",
      "Slice diagonally and enjoy the majestic acoustic cheese pull."
    ],
    passos_es: [
      "Rellena con abundante queso cheddar y mozzarella.",
      "Unta una capa fina de mayonesa por la parte exterior de los panes y presiona parmesano rallado sobre ella.",
      "Cocina a 195°C por 6 minutos volteando a los 3 minutos.",
      "Corta en diagonal y disfruta del queso fundido."
    ],
    dicaDoChef: "Usar maionese em vez de manteiga do lado de fora do pão tem ponto de queima mais alto e garante uma crosta dourada e crocante incomparável.",
    dicaDoChef_en: "Using mayonnaise on the outer bread toasts more evenly than butter due to egg proteins, yielding a crispier shell.",
    dicaDoChef_es: "Untar mayonesa en el exterior en lugar de mantequilla tolera mayor temperatura y produce una corteza dorada insuperable.",
    molhosSugeridosIds: [1, 10, 4]
  }
];

// Enrich all recipes with verified realistic photography
recipesData.forEach(r => {
  if (!r.imagem && recipeImageMap[r.id]) {
    r.imagem = recipeImageMap[r.id];
  }
});
