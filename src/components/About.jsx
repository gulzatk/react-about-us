import React from 'react';
import Epicodus from '../assets/images/epicodus.png';

function About() {
  return (
    <div>
      <style jsx> {`
            p {
                width: 50%;
                font-size: 150%;
                margin-left: 33%;

            }
            h2 {
                text-align: center;
            }
            #epicodus {
                float: left;
                margin-left: 5%;
            
            }
            #learn {
                background: teal;
                color: white;
                margin-left: 50%;
            }

            .about {
                margin-top: 10%;
            }
        `}
      </style>

      <div className="about">
        <img id="epicodus" src = {Epicodus} />

        <h2>First Five Weeks Free!</h2>
        <p>Epicodus is the most affordable full-time, in-person code school, and one of the few programs that includes an internship with a tech company as well as job search support.  Students graduate with real-life work experience already on their resumes, a dedicated team to help land their first job, and a close community of peers and instructors supporting them along the way.

          <hr />
 
        “Through Epicodus, I was able to land a job at a creative agency and I am finally doing fulfilling work. They provided an environment for me to learn something new, work with others, and help me achieve my goals. If you are dedicated and are willing to spend many hours outside of this program studying, you will succeed. The work you put in will reflect how soon you obtain a job after the program.”
        </p>
      </div>
      <br />
      <button id='learn'>LEARN MORE</button>
    </div>
  );
}

export default About;