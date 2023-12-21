export interface UserDocument{
    _id:string,
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;  
}


export interface IMobileDocument  {
    _id:string;
    name:string;
    processor:string;
    type?:string;
    images:Array<
        {
         _id:string,   
         public_id:string,
         url:string, 
        }
     >
     
     ram:number,
     rom:number,
     price:number,
     os:string,
     createdAt:string,

}


export const ramMemory=[
    2,4,6,8
  ]
  
 export const romMemory=[
    32,64,128,256
  ]
  
  export const osType=["Android","Ios","Window",""]