import React from 'react'
import '../vote.css';

const VotingForm = () => {
  return (
    <div>
        <h5>Voting Form</h5>
        
        <form action="">
             <div>
                <label htmlFor="Username">Fullname</label>
                <input type="text" name="Username" id="Username"/>
             </div>

             <div>
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email"/>
             </div>

             <div>
                <label htmlFor="contact">contact</label>
                <input type="text" name="contact" id="contact"/>
             </div>

             <div>
                <label htmlFor="Reg.No/Roll">Reg.No/Roll</label>
                <input type="text" name="Reg.No/Roll" id="Reg.No/Roll"/>
             </div>

             <div>
                <label htmlFor="Branch">Branch</label>
                <input type="text" name="Branch" id="Branch"/>
             </div>
             9363218521
        </form>
    </div>
  )
}

export default VotingForm