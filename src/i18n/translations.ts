import { Language } from '../types';

export interface Translations {
  appName: string;
  appTagline: string;
  langName: string;
  langShort: string;
  flag: string;

  // Nav
  navHome: string;
  navRecipes: string;
  navSauces: string;
  navKitchen: string;

  // Header & VIP simulator
  vipBadge: string;
  standardBadge: string;
  vipSimulator: string;
  toggleVip: string;
  switchLanguage: string;

  // Home
  greeting: string;
  gamificationTitle: string;
  recipesMastered: string;
  rankBeginner: string;
  rankIntermediate: string;
  rankAdvanced: string;
  rankMaster: string;
  recipeOfTheDay: string;
  recipeOfTheDayBadge: string;
  viewRecipe: string;
  exploreChapters: string;
  quickTools: string;
  toolTimer: string;
  toolFavorites: string;
  toolList: string;
  toolSauces: string;

  // Upsell Banner
  upsellTitle: string;
  upsellSubtitle: string;
  upsellCta: string;
  upsellPrice: string;
  upsellOriginalPrice: string;

  // Chapters
  chapter1: string;
  chapter2: string;
  chapter3: string;
  chapter4: string;
  chapter5: string;
  chapter6: string;

  // Sauces categories
  sauceCat1: string;
  sauceCat2: string;
  sauceCat3: string;
  sauceCat4: string;

  // Recipes Tab
  searchPlaceholder: string;
  filterAllChapters: string;
  filterFavorites: string;
  filterCompleted: string;
  filterMaxTime: string;
  filterAnyTime: string;
  under15Min: string;
  from15to25Min: string;
  over25Min: string;
  totalRecipesFound: string;
  noRecipesFound: string;
  clearFilters: string;
  basketTime: string;
  tempLabel: string;
  completedBadge: string;

  // Recipe Modal
  portionCalc: string;
  portions: string;
  prepTime: string;
  ingredientsTitle: string;
  stepsTitle: string;
  chefTipTitle: string;
  addAllToList: string;
  addedToListSuccess: string;
  recommendedSaucesTitle: string;
  recommendedSaucesSubtitle: string;
  startRecipeTimer: string;
  markCompleted: string;
  completedStatus: string;
  removeFromCompleted: string;
  favorite: string;
  favorited: string;
  close: string;

  // Sauces Tab & Unlock Modal
  saucesCatalogTitle: string;
  saucesCatalogSubtitle: string;
  allCategories: string;
  lockedBadge: string;
  unlockedBadge: string;
  unlockModalTitle: string;
  unlockModalSubtitle: string;
  unlockBenefit1: string;
  unlockBenefit2: string;
  unlockBenefit3: string;
  unlockBenefit4: string;
  unlockGuarantee: string;
  unlockSocialProof: string;
  unlockButton: string;
  unlockSuccess: string;
  alreadyUnlockedNotice: string;
  compatibleRecipes: string;

  // Kitchen Tab
  kitchenTitle: string;
  kitchenSubtitle: string;
  timerTab: string;
  listTab: string;
  converterTab: string;

  // Timer
  timerTitle: string;
  timerMinutes: string;
  timerTemp: string;
  timerShakeAlert: string;
  timerShakeAlertDesc: string;
  timerStart: string;
  timerPause: string;
  timerResume: string;
  timerReset: string;
  timerShakeNow: string;
  timerShakeHint: string;
  timerDone: string;

  // Shopping List
  listTitle: string;
  listEmpty: string;
  listAddPlaceholder: string;
  listAddBtn: string;
  listClearChecked: string;
  listClearAll: string;
  listShareWhatsapp: string;
  listSharedSuccess: string;

  // Converter Guide
  converterTitle: string;
  converterSubtitle: string;
  ovenTemp: string;
  airFryerTemp: string;
  timeReduction: string;
  converterNote: string;

  // PWA Prompt
  pwaInstallTitle: string;
  pwaInstallDesc: string;
  pwaInstallBtn: string;
  pwaDismiss: string;
}

export const translations: Record<Language, Translations> = {
  pt: {
    appName: "Air Fryer Secrets",
    appTagline: "60 Receitas Virais dos EUA + 40 Molhos Secretos",
    langName: "Português",
    langShort: "PT",
    flag: "🇧🇷",

    // Nav
    navHome: "Início",
    navRecipes: "Receitas",
    navSauces: "40 Molhos",
    navKitchen: "Cozinha",

    // Header & VIP simulator
    vipBadge: "ALUNO VIP",
    standardBadge: "ALUNO PADRÃO",
    vipSimulator: "Simulador de Acesso VIP",
    toggleVip: "Alternar Status VIP (Teste)",
    switchLanguage: "Idioma",

    // Home
    greeting: "Olá, Chef!",
    gamificationTitle: "Seu Progresso de Mestre",
    recipesMastered: "receitas virais dominadas",
    rankBeginner: "Iniciante da Cesta Dourada",
    rankIntermediate: "Mestre da Crocância",
    rankAdvanced: "Chef Viral dos EUA",
    rankMaster: "Lenda Suprema da Air Fryer",
    recipeOfTheDay: "Receita em Destaque do Dia",
    recipeOfTheDayBadge: "Viral dos EUA",
    viewRecipe: "Ver Receita Completa",
    exploreChapters: "Capítulos Temáticos",
    quickTools: "Utilitários de Cozinha",
    toolTimer: "Timer Pro",
    toolFavorites: "Favoritas",
    toolList: "Lista de Compras",
    toolSauces: "Pack 40 Molhos",

    // Upsell Banner
    upsellTitle: "🔥 DESBLOQUEIE O PACK VIP DE 40 MOLHOS",
    upsellSubtitle: "As receitas secretas dos fast-foods e diners americanos (Shack, Cane's, In-N-Out, Chick-fil-A, Buffalo e mais) para elevar seus pratos.",
    upsellCta: "Desbloquear 40 Molhos por R$ 19,90",
    upsellPrice: "R$ 19,90",
    upsellOriginalPrice: "R$ 67,00",

    // Chapters
    chapter1: "Cap 1: Pequenos Petiscos",
    chapter2: "Cap 2: Surpresas Crocantes",
    chapter3: "Cap 3: Fusão & Inovações",
    chapter4: "Cap 4: O Lado Doce",
    chapter5: "Cap 5: Versões Fast-Food",
    chapter6: "Cap 6: Reaquecimento & Truques",

    // Sauces categories
    sauceCat1: "Ícones de Fast-Food",
    sauceCat2: "Wings, BBQ & Queijos",
    sauceCat3: "Dips Cremosos, Ervas & Alho",
    sauceCat4: "Fusões Orientais & Picantes",

    // Recipes Tab
    searchPlaceholder: "Buscar por nome, ingrediente ou receita...",
    filterAllChapters: "Todos os Capítulos",
    filterFavorites: "Favoritas",
    filterCompleted: "Concluídas",
    filterMaxTime: "Tempo",
    filterAnyTime: "Qualquer tempo",
    under15Min: "Até 15 min",
    from15to25Min: "15 a 25 min",
    over25Min: "Mais de 25 min",
    totalRecipesFound: "receitas encontradas",
    noRecipesFound: "Nenhuma receita encontrada com esses filtros.",
    clearFilters: "Limpar Filtros",
    basketTime: "Cesto",
    tempLabel: "Temp",
    completedBadge: "Concluída",

    // Recipe Modal
    portionCalc: "Calculadora de Porções",
    portions: "porções",
    prepTime: "Preparo",
    ingredientsTitle: "Ingredientes Necessários",
    stepsTitle: "Passo a Passo de Preparo",
    chefTipTitle: "Dica de Ouro do Chef Americano",
    addAllToList: "Adicionar Todos à Lista de Compras",
    addedToListSuccess: "Ingredientes adicionados à lista!",
    recommendedSaucesTitle: "Molhos Secretos que Combinam:",
    recommendedSaucesSubtitle: "Harmonização perfeita criada por nossos chefs",
    startRecipeTimer: "Iniciar Timer da Receita",
    markCompleted: "Marcar como Preparada",
    completedStatus: "Receita Dominada 🎉",
    removeFromCompleted: "Desmarcar conclusão",
    favorite: "Favoritar",
    favorited: "Favoritada",
    close: "Fechar",

    // Sauces Tab & Unlock Modal
    saucesCatalogTitle: "Pack Secreto: 40 Molhos & Dips dos EUA",
    saucesCatalogSubtitle: "O segredo do sabor dos maiores restaurantes americanos e redes de fast-food no conforto da sua casa.",
    allCategories: "Todas as Categorias",
    lockedBadge: "ÁREA VIP BLOQUEADA",
    unlockedBadge: "ACESSO VIP LIBERADO",
    unlockModalTitle: "Desbloqueie o Pack Secreto de 40 Molhos",
    unlockModalSubtitle: "O complemento indispensável para suas 60 receitas virais na Air Fryer.",
    unlockBenefit1: "40 Fichas Técnicas dos Molhos Mais Famosos dos EUA (Shack, Cane's, Chick-Style, In-N-Out, Buffalo e mais)",
    unlockBenefit2: "Guia de Harmonização Direta com as 60 Receitas da Air Fryer",
    unlockBenefit3: "Segredos de Conservação e Armazenamento em Geladeira (até 30 dias)",
    unlockBenefit4: "Acesso Vitalício Imediato com Atualizações Gratuitas",
    unlockGuarantee: "Garantia Incondicional de 7 Dias: Ame ou receba 100% de volta",
    unlockSocialProof: "Mais de 14.850 alunos já desbloquearam e aprovaram este Pack VIP!",
    unlockButton: "Desbloquear 40 Molhos Agora (R$ 19,90)",
    unlockSuccess: "Parabéns! O Pack de 40 Molhos foi Desbloqueado com Sucesso!",
    alreadyUnlockedNotice: "Você já possui acesso VIP vitalício a todos os 40 molhos.",
    compatibleRecipes: "Combina perfeitamente com:",

    // Kitchen Tab
    kitchenTitle: "Cozinha & Ferramentas Inteligentes",
    kitchenSubtitle: "Temporizador inteligente, lista de compras integrada e guia de conversão.",
    timerTab: "Air Fryer Timer Pro",
    listTab: "Lista de Compras",
    converterTab: "Guia de Conversão Forno",

    // Timer
    timerTitle: "Air Fryer Timer Pro",
    timerMinutes: "Minutos",
    timerTemp: "Temperatura",
    timerShakeAlert: "Alerta de Sacudir a Cesta",
    timerShakeAlertDesc: "Bipe sonoro especial na metade do tempo para virar os alimentos e garantir crocância máxima.",
    timerStart: "Iniciar Temporizador",
    timerPause: "Pausar",
    timerResume: "Continuar",
    timerReset: "Zerar Timer",
    timerShakeNow: "🔔 HORA DE SACUDIR A CESTA!",
    timerShakeHint: "Abra a cesta, sacuda bem os alimentos ou vire com pinça para dourar por igual.",
    timerDone: "🎉 TEMPO ESGOTADO! RETIRE SEU PRATO CROCANTE!",

    // Shopping List
    listTitle: "Lista de Compras Inteligente",
    listEmpty: "Sua lista de compras está vazia. Adicione ingredientes a partir das receitas!",
    listAddPlaceholder: "Digitar novo item manual...",
    listAddBtn: "Adicionar",
    listClearChecked: "Remover Marcados",
    listClearAll: "Limpar Toda a Lista",
    listShareWhatsapp: "Compartilhar Lista no WhatsApp",
    listSharedSuccess: "Link do WhatsApp gerado!",

    // Converter Guide
    converterTitle: "Tabela Mestre: Forno Convencional ➔ Air Fryer",
    converterSubtitle: "A regra de ouro dos chefs: reduza a temperatura em cerca de 20°C e o tempo de preparo de 20% a 25%.",
    ovenTemp: "Forno Convencional",
    airFryerTemp: "Air Fryer Sugerida",
    timeReduction: "Redução de Tempo",
    converterNote: "Dica: Em porções pequenas ou carnes finas, verifique 5 minutos antes para não ressecar.",

    // PWA Prompt
    pwaInstallTitle: "Instale o InfoApp no seu Celular",
    pwaInstallDesc: "Adicione à tela inicial para ter acesso instantâneo na cozinha, mesmo sem internet.",
    pwaInstallBtn: "Como Instalar",
    pwaDismiss: "Agora não",
  },

  en: {
    appName: "Air Fryer Secrets",
    appTagline: "60 Viral US Recipes + 40 Secret Sauces",
    langName: "English (US)",
    langShort: "EN",
    flag: "🇺🇸",

    // Nav
    navHome: "Home",
    navRecipes: "Recipes",
    navSauces: "40 Sauces",
    navKitchen: "Kitchen",

    // Header & VIP simulator
    vipBadge: "VIP MEMBER",
    standardBadge: "STANDARD MEMBER",
    vipSimulator: "VIP Access Simulator",
    toggleVip: "Toggle VIP Status (Demo)",
    switchLanguage: "Language",

    // Home
    greeting: "Hello, Chef!",
    gamificationTitle: "Your Master Progress",
    recipesMastered: "viral recipes mastered",
    rankBeginner: "Golden Basket Novice",
    rankIntermediate: "Crispiness Crafter",
    rankAdvanced: "US Viral Chef",
    rankMaster: "Air Fryer Supreme Legend",
    recipeOfTheDay: "Today's Featured Recipe",
    recipeOfTheDayBadge: "Viral Hit",
    viewRecipe: "View Full Recipe",
    exploreChapters: "Recipe Chapters",
    quickTools: "Kitchen Tools",
    toolTimer: "Timer Pro",
    toolFavorites: "Favorites",
    toolList: "Shopping List",
    toolSauces: "40 Sauces Pack",

    // Upsell Banner
    upsellTitle: "🔥 UNLOCK THE 40 VIP SECRET SAUCES PACK",
    upsellSubtitle: "Secret recipes from America's top fast-food chains & diners (Shack, Cane's, In-N-Out, Chick-fil-A, Buffalo & more) to level up your dishes.",
    upsellCta: "Unlock 40 Sauces for $9.90",
    upsellPrice: "$9.90",
    upsellOriginalPrice: "$29.00",

    // Chapters
    chapter1: "Ch 1: Bite-Sized Snacks",
    chapter2: "Ch 2: Crispy Surprises",
    chapter3: "Ch 3: Fusion & Innovations",
    chapter4: "Ch 4: The Sweet Side",
    chapter5: "Ch 5: Fast-Food Remakes",
    chapter6: "Ch 6: Reheating & Master Hacks",

    // Sauces categories
    sauceCat1: "Fast-Food Icons",
    sauceCat2: "Wings, BBQ & Cheeses",
    sauceCat3: "Creamy Dips, Herbs & Garlic",
    sauceCat4: "Asian Fusion & Spicy Glazes",

    // Recipes Tab
    searchPlaceholder: "Search by recipe name, ingredient or tag...",
    filterAllChapters: "All Chapters",
    filterFavorites: "Favorites",
    filterCompleted: "Completed",
    filterMaxTime: "Time",
    filterAnyTime: "Any time",
    under15Min: "Under 15 min",
    from15to25Min: "15 to 25 min",
    over25Min: "Over 25 min",
    totalRecipesFound: "recipes found",
    noRecipesFound: "No recipes found matching these filters.",
    clearFilters: "Clear Filters",
    basketTime: "Basket",
    tempLabel: "Temp",
    completedBadge: "Done",

    // Recipe Modal
    portionCalc: "Portion Scaler",
    portions: "servings",
    prepTime: "Prep",
    ingredientsTitle: "Required Ingredients",
    stepsTitle: "Step-by-Step Instructions",
    chefTipTitle: "American Chef's Golden Secret",
    addAllToList: "Add All to Shopping List",
    addedToListSuccess: "Ingredients added to your list!",
    recommendedSaucesTitle: "Secret Sauces That Pair Best:",
    recommendedSaucesSubtitle: "Signature pairing crafted by culinary experts",
    startRecipeTimer: "Launch Recipe Timer",
    markCompleted: "Mark as Mastered",
    completedStatus: "Recipe Mastered 🎉",
    removeFromCompleted: "Unmark completion",
    favorite: "Save Favorite",
    favorited: "Favorited",
    close: "Close",

    // Sauces Tab & Unlock Modal
    saucesCatalogTitle: "Secret Pack: 40 US Sauces & Dips",
    saucesCatalogSubtitle: "The trade secrets behind the sauces of iconic American burger joints and smokehouses in your kitchen.",
    allCategories: "All Categories",
    lockedBadge: "LOCKED VIP CONTENT",
    unlockedBadge: "VIP ACCESS UNLOCKED",
    unlockModalTitle: "Unlock the Secret Pack of 40 Sauces",
    unlockModalSubtitle: "The must-have upgrade for your 60 viral Air Fryer recipes.",
    unlockBenefit1: "40 Complete Technical Cards of America's Most Famous Sauces (Shack, Cane's, Chick-Style, In-N-Out, Buffalo & more)",
    unlockBenefit2: "Direct Pairing Guide with all 60 Air Fryer Recipes",
    unlockBenefit3: "Refrigerator Storage & Preservation Secrets (stays fresh up to 30 days)",
    unlockBenefit4: "Instant Lifetime Access with All Future Updates Included",
    unlockGuarantee: "7-Day Unconditional Money-Back Guarantee: 100% risk-free",
    unlockSocialProof: "Over 14,850 cooks have already unlocked and loved this VIP Pack!",
    unlockButton: "Unlock 40 Sauces Now ($9.90)",
    unlockSuccess: "Congratulations! The 40 Sauces Pack is now fully unlocked!",
    alreadyUnlockedNotice: "You already have lifetime VIP access to all 40 sauces.",
    compatibleRecipes: "Pairs exceptionally well with:",

    // Kitchen Tab
    kitchenTitle: "Smart Kitchen & Utilities",
    kitchenSubtitle: "Intelligent timer, synchronized shopping list, and oven conversion table.",
    timerTab: "Air Fryer Timer Pro",
    listTab: "Shopping List",
    converterTab: "Oven Conversion Guide",

    // Timer
    timerTitle: "Air Fryer Timer Pro",
    timerMinutes: "Minutes",
    timerTemp: "Temperature",
    timerShakeAlert: "Basket Shake Reminder",
    timerShakeAlertDesc: "Plays a signature chime at halfway mark to flip or shake your food for peak crispiness.",
    timerStart: "Start Timer",
    timerPause: "Pause",
    timerResume: "Resume",
    timerReset: "Reset",
    timerShakeNow: "🔔 TIME TO SHAKE THE BASKET!",
    timerShakeHint: "Slide open the basket, give it a vigorous shake or flip with tongs for even browning.",
    timerDone: "🎉 TIME'S UP! YOUR CRISPY DISH IS READY!",

    // Shopping List
    listTitle: "Smart Shopping List",
    listEmpty: "Your shopping list is empty. Add ingredients straight from recipes!",
    listAddPlaceholder: "Type custom grocery item...",
    listAddBtn: "Add Item",
    listClearChecked: "Remove Checked",
    listClearAll: "Clear Entire List",
    listShareWhatsapp: "Share List on WhatsApp",
    listSharedSuccess: "WhatsApp message generated!",

    // Converter Guide
    converterTitle: "Master Table: Conventional Oven ➔ Air Fryer",
    converterSubtitle: "Chef's golden rule: reduce cooking temperature by ~20°C (25°F-30°F) and time by 20% to 25%.",
    ovenTemp: "Conventional Oven",
    airFryerTemp: "Suggested Air Fryer",
    timeReduction: "Time Reduction",
    converterNote: "Pro-tip: For thin cuts or small bites, check 5 minutes early to avoid drying out.",

    // PWA Prompt
    pwaInstallTitle: "Install InfoApp on Your Phone",
    pwaInstallDesc: "Add to home screen for instant access in your kitchen, works offline.",
    pwaInstallBtn: "How to Install",
    pwaDismiss: "Not now",
  },

  es: {
    appName: "Air Fryer Secrets",
    appTagline: "60 Recetas Virales de EE.UU. + 40 Salsas Secretas",
    langName: "Español (LatAm)",
    langShort: "ES",
    flag: "🇲🇽",

    // Nav
    navHome: "Inicio",
    navRecipes: "Recetas",
    navSauces: "40 Salsas",
    navKitchen: "Cocina",

    // Header & VIP simulator
    vipBadge: "MIEMBRO VIP",
    standardBadge: "MIEMBRO ESTÁNDAR",
    vipSimulator: "Simulador de Acceso VIP",
    toggleVip: "Alternar Estado VIP (Demo)",
    switchLanguage: "Idioma",

    // Home
    greeting: "¡Hola, Chef!",
    gamificationTitle: "Tu Progreso Maestro",
    recipesMastered: "recetas virales dominadas",
    rankBeginner: "Novato de la Cesta Dorada",
    rankIntermediate: "Maestro del Crujiente",
    rankAdvanced: "Chef Viral de EE.UU.",
    rankMaster: "Leyenda Suprema de la Air Fryer",
    recipeOfTheDay: "Receta Destacada del Día",
    recipeOfTheDayBadge: "Viral de EE.UU.",
    viewRecipe: "Ver Receta Completa",
    exploreChapters: "Capítulos Temáticos",
    quickTools: "Herramientas de Cocina",
    toolTimer: "Temporizador Pro",
    toolFavorites: "Favoritas",
    toolList: "Lista de Compras",
    toolSauces: "Pack 40 Salsas",

    // Upsell Banner
    upsellTitle: "🔥 DESBLOQUEA EL PACK VIP DE 40 SALSAS SECRETAS",
    upsellSubtitle: "Las recetas secretas de los restaurantes y cadenas de EE.UU. (Shack, Cane's, In-N-Out, Chick-fil-A, Buffalo y más) para elevar tus platillos.",
    upsellCta: "Desbloquear 40 Salsas por $9.90 USD",
    upsellPrice: "$9.90 USD",
    upsellOriginalPrice: "$29.00 USD",

    // Chapters
    chapter1: "Cap 1: Bocadillos Crujientes",
    chapter2: "Cap 2: Sorpresas Doradas",
    chapter3: "Cap 3: Fusión e Innovación",
    chapter4: "Cap 4: El Lado Dulce",
    chapter5: "Cap 5: Versiones Fast-Food",
    chapter6: "Cap 6: Recalentado y Trucos",

    // Sauces categories
    sauceCat1: "Íconos de Fast-Food",
    sauceCat2: "Wings, BBQ y Quesos",
    sauceCat3: "Dips Cremosos, Hierbas y Ajo",
    sauceCat4: "Fusiones Orientales y Picantes",

    // Recipes Tab
    searchPlaceholder: "Buscar por nombre, ingrediente o etiqueta...",
    filterAllChapters: "Todos los Capítulos",
    filterFavorites: "Favoritas",
    filterCompleted: "Completadas",
    filterMaxTime: "Tiempo",
    filterAnyTime: "Cualquier tiempo",
    under15Min: "Hasta 15 min",
    from15to25Min: "15 a 25 min",
    over25Min: "Más de 25 min",
    totalRecipesFound: "recetas encontradas",
    noRecipesFound: "No se encontraron recetas con estos filtros.",
    clearFilters: "Limpiar Filtros",
    basketTime: "Cesta",
    tempLabel: "Temp",
    completedBadge: "Hecha",

    // Recipe Modal
    portionCalc: "Calculadora de Porciones",
    portions: "porciones",
    prepTime: "Preparación",
    ingredientsTitle: "Ingredientes Necesarios",
    stepsTitle: "Paso a Paso de Elaboración",
    chefTipTitle: "Consejo de Oro del Chef",
    addAllToList: "Agregar Todos a la Lista de Compras",
    addedToListSuccess: "¡Ingredientes agregados a tu lista!",
    recommendedSaucesTitle: "Salsas Secretas que Combinan:",
    recommendedSaucesSubtitle: "Maridaje culinario perfecto creado por chefs",
    startRecipeTimer: "Iniciar Temporizador de la Receta",
    markCompleted: "Marcar como Preparada",
    completedStatus: "Receta Dominada 🎉",
    removeFromCompleted: "Desmarcar completada",
    favorite: "Guardar Favorita",
    favorited: "En Favoritas",
    close: "Cerrar",

    // Sauces Tab & Unlock Modal
    saucesCatalogTitle: "Pack Secreto: 40 Salsas & Dips de EE.UU.",
    saucesCatalogSubtitle: "Los secretos de sabor de los restaurantes y cadenas de comida rápida más icónicos en tu propia casa.",
    allCategories: "Todas las Categorías",
    lockedBadge: "ÁREA VIP BLOQUEADA",
    unlockedBadge: "ACCESO VIP LIBERADO",
    unlockModalTitle: "Desbloquea el Pack Secreto de 40 Salsas",
    unlockModalSubtitle: "El complemento indispensable para tus 60 recetas virales en Air Fryer.",
    unlockBenefit1: "40 Fichas Técnicas de las Salsas Más Famosas de EE.UU. (Shack, Cane's, Chick-Style, In-N-Out, Buffalo y más)",
    unlockBenefit2: "Guía de Maridaje Directo con las 60 Recetas de Air Fryer",
    unlockBenefit3: "Secretos de Conservación y Almacenamiento en Nevera (hasta 30 días)",
    unlockBenefit4: "Acceso Vitalicio Inmediato con Todas las Actualizaciones Gratuitas",
    unlockGuarantee: "Garantía Incondicional de 7 Días: 100% de devolución si no te encanta",
    unlockSocialProof: "¡Más de 14,850 cocineros ya desbloquearon y disfrutan este Pack VIP!",
    unlockButton: "Desbloquear 40 Salsas Ahora ($9.90 USD)",
    unlockSuccess: "¡Felicidades! ¡El Pack de 40 Salsas ha sido desbloqueado con éxito!",
    alreadyUnlockedNotice: "Ya cuentas con acceso VIP vitalicio a las 40 salsas.",
    compatibleRecipes: "Combina a la perfección con:",

    // Kitchen Tab
    kitchenTitle: "Cocina & Herramientas Inteligentes",
    kitchenSubtitle: "Temporizador con aviso sonoro, lista de compras inteligente y tabla de conversión.",
    timerTab: "Air Fryer Timer Pro",
    listTab: "Lista de Compras",
    converterTab: "Guía de Conversión Horno",

    // Timer
    timerTitle: "Air Fryer Timer Pro",
    timerMinutes: "Minutos",
    timerTemp: "Temperatura",
    timerShakeAlert: "Aviso para Agitar la Cesta",
    timerShakeAlertDesc: "Emite un timbre sonoro a mitad de tiempo para sacudir o voltear la comida y lograr el máximo crujiente.",
    timerStart: "Iniciar Temporizador",
    timerPause: "Pausar",
    timerResume: "Continuar",
    timerReset: "Reiniciar",
    timerShakeNow: "🔔 ¡HORA DE SACUDIR LA CESTA!",
    timerShakeHint: "Abre la cesta, sacude los alimentos o gíralos con pinzas para un dorado parejo.",
    timerDone: "🎉 ¡TIEMPO CUMPLIDO! ¡RETIRA TU PLATILLO CRUJIENTE!",

    // Shopping List
    listTitle: "Lista de Compras Inteligente",
    listEmpty: "Tu lista de compras está vacía. ¡Agrega ingredientes directamente desde las recetas!",
    listAddPlaceholder: "Escribir artículo de mercado...",
    listAddBtn: "Agregar",
    listClearChecked: "Eliminar Marcados",
    listClearAll: "Limpiar Toda la Lista",
    listShareWhatsapp: "Compartir Lista por WhatsApp",
    listSharedSuccess: "¡Enlace de WhatsApp generado!",

    // Converter Guide
    converterTitle: "Tabla Maestra: Horno Convencional ➔ Air Fryer",
    converterSubtitle: "Regla de oro de los chefs: reduce la temperatura en aprox. 20°C y el tiempo de cocción entre 20% y 25%.",
    ovenTemp: "Horno Convencional",
    airFryerTemp: "Air Fryer Sugerida",
    timeReduction: "Reducción de Tiempo",
    converterNote: "Consejo pro: En piezas delgadas o aperitivos pequeños, revisa 5 minutos antes.",

    // PWA Prompt
    pwaInstallTitle: "Instala el InfoApp en tu Móvil",
    pwaInstallDesc: "Agrégalo a la pantalla de inicio para cocinar con acceso rápido e instantáneo.",
    pwaInstallBtn: "Cómo Instalar",
    pwaDismiss: "Ahora no",
  }
};
