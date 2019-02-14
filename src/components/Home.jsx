import React from 'react';
import team from '../assets/images/team.jpeg';

function Home(){
  return(
    <div>
      <style jsx >{`
            #team {
                margin-left: 10%;
                width: 80%;
            }

            #welcome {
                position: absolute;
                margin-left: 35%;
                margin-top: 10%;
                color: white;
                font-size: 3em;
                text-shadow: 1px 1px 1px blue;
                letter-spacing: 2px;
            }

            `}</style>
            <h2 id='welcome'>Welcome to our Epicodus Team!</h2>
      <img id='team' src={team}/>
    </div>
  );
}

export default Home;