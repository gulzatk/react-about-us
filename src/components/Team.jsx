import React from 'react';
import Person from './Person';
import gulzat from '../assets/images/gulzat.jpg';
import manasa from '../assets/images/manasa.jpg';
import leilani from '../assets/images/leilani.png';
import james from '../assets/images/james.png';
import max from '../assets/images/max.jpg';
import Alex from '../assets/images/Alex.jpg';
import kaveh from '../assets/images/kaveh.png';
import glen from '../assets/images/glen.jpeg';
import stuart from '../assets/images/stuart.jpg';
import daniel from '../assets/images/daniel.jpg';
import cristian from '../assets/images/cristian.jpg';
import kenny from '../assets/images/kenny.png';
import miranda from '../assets/images/miranda.png';



function Team() {
    
  return(
    <div>
      <style jsx> {`
        .grid-container {
            display: grid;
            grid-template-columns: auto auto;
            width: 80%;
            margin: auto;
        }

        .grid-item {
            border: 2px solid rgba(0, 0, 0, 0.8);
            background-color: #daedda;
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 10px;
            text-align: center;
            width: 80%;
            margin-top: 10px;
          }

          h1{
              text-align: center;
              color: #4434ad;
            
          }
        `}
      </style>
      <br/>
      <h1>Our Team</h1>
      <br/>
      <div className='grid-container'>
        {students.map((x, index) =>
          <div className='grid-item'>
            <Person name = {x.fullname}
              image = {x.image}
              bio = {x.bio}
              key = {index}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const students = [
  {
    fullname: 'Manasa',
    image: manasa,
    bio: 'From India and enjoys coding',
  },
  {
    fullname: 'Glen',
    image: glen,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Leilani',
    image: leilani,
    bio: 'Loves her puppy and enjoys coding',
  },

  {
    fullname: 'Alex',
    image: Alex,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Max',
    image: max,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Gulzat Karimova',
    image: gulzat,

    bio: 'From Kyrgystan and enjoys coding',
  },
  {
    fullname: 'James',
    image: james,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Stuart',
    image: stuart,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Kaveh',
    image: kaveh,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Cristian',
    image: cristian,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Daniel',
    image: daniel,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Kenny',
    image: kenny,
    bio: 'Mediocre student at Epicodus',
  },
  {
    fullname: 'Miranda',
    image: miranda,
    bio: 'Mediocre student at Epicodus',
  }
  
];

export default Team;