export interface Animal {
   id: number;
   postDate:Date;
   url:string;
   description:string;
   allwComments:boolean;
   likes:number;
   comments:number;
   userId:number;


}
//colecao de animais
export type Animais = Array<Animal>;
