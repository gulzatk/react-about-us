import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    
  return(
    <div>
      <style jsx> {`
            h1 {
                padding: 10px;
                padding-top: 20px;
                background-color: #a9c0e5;
                text-align: center;
                color: #4434ad;
                background-image: linear-gradient(#a9c0e5, white);
                
            }

            button {
                font-size: 16px;
                border: solid green 2px;
                border-radius: 5px;
                padding: 8px;
                margin-bottom: 8px;
            }

            button:hover {
                background-color: gray;
                border: solid green 4px;
            }
            hr {
                width: 33%;
            }
        
        `}
      </style>
      <h1>
          Epicodus 2018-2019 Students
        <br />
        <hr />
        <button><Link to="/home">Home</Link></button>  <button><Link to="/team">Our Team</Link></button> <button><Link to="/aboutUs">About Us</Link></button>

      </h1>
    </div>
  );
}

export default Header;