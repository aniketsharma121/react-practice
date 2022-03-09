import React from 'react';
export default function Profile ({text}){
  console.log(text.name);
   return (
     <>
       <button onClick={text.clickFun}>Click</button>
     </>
   );
}
