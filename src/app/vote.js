"use client"
import React, { useState } from 'react';
import '../vote.css';

const Vote = () =>{  
        const [parties,setParties] = useState([
            {name:"BJP",vote:0},
            {name:"CPI",vote:0},
            {name:"CPI(M)",vote:0},
            {name:"INC",vote:0},
        ]);
 
    const clickHandler = (i) =>{
        let newpartyvote=[...parties];
        newpartyvote[i].vote = newpartyvote[i].vote + 1;
        console.log(newpartyvote)
        setParties(newpartyvote)
        
    }  
    return(
        <div>
            <h1>Vote your Party</h1>
            <div className="parties">
                 {
                    parties.map((party,i)=>
                     <div key={i} className='party'>
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
        </div>
    )
} 
export default Vote;