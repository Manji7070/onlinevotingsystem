"use client"
import React, { useState } from 'react';
import '../vote.css';

const Vote = () =>{  
        const [parties,setParties] = useState([
            {name:"All-Unite",vote:0,img:"/All-unite.jpg"},
            {name:"Com-Boys",vote:0,img:"/com-boys.png"},
            {name:"Hard-work",vote:0,img:"/hard-Work.png"},
            {name:"Plan&Aim",vote:0,img:"/plan-aim.png"},
        ]);
 
    const clickHandler = (i) =>{
        let newpartyvote=[...parties];
        newpartyvote[i].vote = newpartyvote[i].vote + 1;
        console.log(newpartyvote)
        setParties(newpartyvote)
        
    }  
    return(
        <div>
            
            <div className="max-w-[800px] parties">
                 {
                    parties.map((party,i)=>
                     <div key={i} className='party flex flex-col'>
                        <img className="partyimage" src={party.img}/>
                         <div className="voteCount">
                             {party.vote}
                         </div>

                         <div className="partyName">
                             {party.name}
                         </div>
                            <button onClick={()=>clickHandler(i)} >Click here</button>

                     </div>

                    )
                 }
            </div>
            <div>
                <h1 id="hero_text">Vote your Party</h1>
            </div>
        </div>
    )
} 
export default Vote;