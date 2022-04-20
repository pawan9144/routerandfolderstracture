import React from "react"

export function isValidate(character){

   {
  let emailValidate =   new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');   

    if(emailValidate.test(character)){
        return true
    }else{
        return false
    }

   }
 
}

export function isfnvalidate(fname){
    {
        let fnamevalidate =   new RegExp('^[a-zA-Z ]{2,30}$');   
      
          if(fnamevalidate.test(fname)){
              return true
          }else{
              return false
          }
      
         }
}