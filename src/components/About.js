import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const navi = () => {
    navigate("/SignIn");
  };
  return (
    <>
      <div className="body">
        <section className="about">
          <div className="main">
            {/* <img src="https://i.pinimg.com/564x/7f/c7/be/7fc7be773023785840b9cd30edc8035a.jpg"></img> */}
            <div className="about-text">
              <h1>About Us</h1>
              <p>
                {" "}
                Most summer camps focus on a theme, or incorporate aspects of
                learning, exploring, character building, and personal growth. If
                you are looking for fun summer activities for your children,
                there are many different camp types to consider, such as sports
                camp, cooking camps, art camps, science camps and many more. You
                can be certain that your child will not only be entertained, but
                also educated and challenged. While they are having fun and
                exploring their own interests, they are also increasing their
                own capacities for learning, teamwork, problem solving,
                knowledge, and self-awareness.
              </p>
              <button className="btn" onClick={navi}>Get Started</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;