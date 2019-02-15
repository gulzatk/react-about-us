import React from 'react';
import PropTypes from 'prop-types';


class Person extends React.Component{
    render() {
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
      <h2>Name: {this.props.name} </h2>
      <img src={this.props.image} />
      <p> {this.props.bio}</p>
    </div>

    
  );
    }
}

export default Person;

Person.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string
};