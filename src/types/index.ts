export type Language = 'pt' | 'en' | 'es';

export interface Ingredient {
  nome: string;
  nome_en?: string;
  nome_es?: string;
  qtd: number;
  unidade: string;
  unidade_en?: string;
  unidade_es?: string;
}

export interface Recipe {
  id: number;
  capitulo: number; // 1 to 6
  titulo: string;
  titulo_en: string;
  titulo_es: string;
  subtitulo: string;
  subtitulo_en: string;
  subtitulo_es: string;
  tempoPreparo: number; // minutes
  tempoAirFryer: number; // minutes
  temperatura: number; // °C
  rendimento: number; // base portions
  rendimentoUnidade: string;
  rendimentoUnidade_en: string;
  rendimentoUnidade_es: string;
  caloriasAprox?: number;
  dificuldade: 'facil' | 'medio' | 'avancado';
  tags: string[];
  ingredientes: Ingredient[];
  passos: string[];
  passos_en: string[];
  passos_es: string[];
  dicaDoChef: string;
  dicaDoChef_en: string;
  dicaDoChef_es: string;
  molhosSugeridosIds: number[];
  shakeBasketMinute?: number;
  icone?: string;
  imagem?: string;
}

export interface Sauce {
  id: number;
  categoria: number; // 1 to 4
  titulo: string;
  titulo_en: string;
  titulo_es: string;
  estilo: string;
  estilo_en: string;
  estilo_es: string;
  tempoPreparo: number; // minutes
  picancia?: 0 | 1 | 2 | 3; // spice level 0 to 3
  descricao: string;
  descricao_en: string;
  descricao_es: string;
  ingredientes: string[];
  ingredientes_en: string[];
  ingredientes_es: string[];
  passos: string[];
  passos_en: string[];
  passos_es: string[];
  receitasCompativeisIds: number[];
  icone?: string;
  imagem?: string;
  corTema?: string;
}

export interface ShoppingItem {
  id: string;
  nome: string;
  checked: boolean;
  recipeTitle?: string;
}
