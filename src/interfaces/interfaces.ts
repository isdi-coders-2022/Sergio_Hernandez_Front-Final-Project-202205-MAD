export interface iIngredient {
  id: string;
  name: string;
  category: string;
}
export interface iRecipe {
  id?: string;
  title: string;
  origin: string;
  content: string;
  img: string;
  ingredients: Array<iFood>;
  keyword: Array<string>;
}
export interface iFood {
  ingredient: string;
  amount: number;
  measure: string;
}
export interface iUser {
  id?: string;
  userName: string;
  email: string;
  passwd: string;
  avatar: string;
  recipes?: Array<iRecipe>;
}