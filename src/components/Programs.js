import React from "react";
import { useNavigate } from "react-router-dom";

function Programs() {

  const navigate = useNavigate();
  const navi = () => {
    navigate("/SignIn");
  };

  return (
    <div>
      <div className="containerP">
        <div className="cardP">
          <div className="imgBx">
            <img src="img1.png"></img>
          </div>
          <div className="contentP">
            <h3>Think Spot Center</h3>
            <p>
            The Think Spot Center announces the start of the summer program for children from 4 to 10 years old for three weeks
            </p>
            <button className="btn1" onClick={navi}>Register Now</button>
          </div>
        </div>
        <div className="cardP">
          <div className="imgBx">
            <img src="img22.png"></img>
          </div>
          <div className="contentP">
            <h3>Cloud Fun Center</h3>
            <p>
            Registration started at the Cloud Fun Center for the Summer Club Program for the Development of Children's Skills during the Summer Vacation
            </p>
            <button className="btn1" onClick={navi}>Register Now</button>
          </div>
        </div>
        <div className="cardP">
          <div className="imgBx">
            <img src="img33.png"></img>
          </div>
          <div className="contentP">
            <h3>Kids In Nature</h3>
            <p>
            What is better than trying your kids to spend a week in nature? Register now for the children's journey in nature from 7/3 to 7/7 for the ages of 7 to 12
            </p>
            <button className="btn1" onClick={navi}>Register Now</button>
          </div>
        </div>
        <div className="cardP">
          <div className="imgBx">
            <img src="img7.png"></img>
          </div>
          <div className="contentP">
            <h3>Futures Heroes Academy</h3>
            <p>
            Futures Heroes Academy Center dedicated to self-defense games for children announces a training course for a month during the month of August
            </p>
            <button className="btn1" onClick={navi}>Register Now</button>
          </div>
        </div>
        <div className="cardP">
          <div className="imgBx">
            <img src="img6.png"></img>
          </div>
          <div className="contentP">
            <h3>Our Summer With Lights</h3>
            <p>
            The Lighting Center announces the summer program for many activities including space, small merchant and a two-week world tour
            </p>
            <button className="btn1" onClick={navi}>Register Now</button>
          </div>
        </div>
        <div className="cardP">
          <div className="imgBx">
            <img src="img8.png"></img>
          </div>
          <div className="contentP">
            <h3>Space With Childhood</h3>
            <p>
            Announces the summer program and the experiment in it the world of space and scientific and technical experiments with children for a month
            </p>
            <button className="btn1" onClick={navi}>Register Now</button>
          </div>
        </div>
      </div>









      {/* <div className="container">
        <div className="card">
          <img src="img1.png" className="img" />
          <div className="card-title">
            <h1>Spot Think</h1>
          </div>
        </div>
        <div className="card">
          <img src="img2.png" className="img" />
          <div className="card-title">
            <h1>Summer Club</h1>
          </div>
        </div>
        <div className="card">
          <img src="img3.png" className="img" />
          <div className="card-title">
            <h1>Kids In Nature</h1>
          </div>
        </div>

        <div className="card">
          <img src="img3.png" className="img" />
          <div className="card-title">
            <h1>Kids In Nature</h1>
          </div>
        </div>
        <div className="card">
          <img src="img3.png" className="img" />
          <div className="card-title">
            <h1>Kids In Nature</h1>
          </div>
        </div>
        <div className="card">
          <img src="img3.png" className="img" />
          <div className="card-title">
            <h1>Kids In Nature</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Programs;
