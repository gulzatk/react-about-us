import React from 'react';
import PropTypes from 'prop-types';


function Person(props) {
    
  return(
    <div>
      <style jsx>{`
        p {
            font-size: 16px;
        }
        img {
            width: 200px;
            height: auto;
        }
        `}
      </style>
      <h2>Name: {props.name} </h2>
      <img src={props.image} />
      <p> {props.bio}</p>
    </div>

    
  );
}

export default Person;

Person.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string
};