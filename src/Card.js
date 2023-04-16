import React from 'react';
import 'tachyons';
const Card=({name,email,id})=>{

  return(
    <div className="tc bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5">
    <img src={`https://robohash.org/${id}?set=set4`} alt="robot"/>
    <div>
    <h2>{name}</h2>
    <p>{email}</p>
    </div>

    </div>
  );

}
export default Card;
