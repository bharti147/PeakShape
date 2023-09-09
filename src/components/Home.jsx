import React from "react";
import "../styles/home.scss";
import gym3 from "../assets/gym3.png";
import Facilities from "./Facilities";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>PeakShape</h1>
          <p>Embrace Your Workout</p>
          <br/>
          <button>  <Link to="/contact" style={{color:"white"}}> Free Trial</Link> </button>
        </main>
      </div>
      <div className="home2">
        {/* <div> */}
          <p>
            "Welcome to PeakShape Gym, where fitness meets community. Our
            mission is to inspire and support your fitness journey. Our expert
            trainers, state-of-the-art facilities, and inclusive atmosphere
            create the perfect environment to achieve your goals. Join us and
            start your transformation today."
          </p>
        {/* </div> */}

        <img src={gym3} alt="Graphics" />
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            "At PeakShape Gym, we are a passionate group of fitness enthusiasts
            who are deeply committed to your health and wellness. Our gym isn't
            just a place to work out; it's a heaven where individuals of all ages
            and fitness levels come together to transform their lives. Our team
            of dedicated trainers brings a wealth of experience and knowledge to
            the table. 
            Whether you're a beginner or a seasoned athlete, our mission is to
            guide you with personalized workout plans, expert advice, and
            unwavering support. 
          </p>
        </div>
      </div>
   <Facilities/>
      <div className="home5" id="mem">
        <h1>Choose The Best Plan</h1>
        <h4>
          Choose a plan right for you growing teams, simple pricing & No hidden
          charges.
        </h4>

        <main>
          <div className="memCard">
            <h2>DISCOVER</h2>
            <h4>
              <span>$99</span> / Per Month
            </h4>
            <div>
              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>4 Group class monthly</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>Online class access</label>
              </span>
              <span>
              <input type="checkbox"  disabled className="square-checkbox " checked readOnly />

                <label className="opt">E-book fitness guide</label>
              </span>
              <span>
              <input type="checkbox"  disabled className="square-checkbox" checked readOnly />

                <label  className="opt" >5 Classes Per month</label>
              </span>


             
            </div>
            <button>Choose Plan</button>
          </div>
          <div className="memCard">
            <h2>ENTERPRISE</h2>
            <h4>
              <span>$299</span> / Per Month
            </h4>
            <div>
              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>10 Classes Per month</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>8 Group class monthly</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>Online class access</label>
              </span>

              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>E-book fitness guide</label>
              </span>


             
            </div>
          
            <button>Choose Plan</button>
          </div>
          <div className="memCard">
            <h2>PROFESSIONAL</h2>
            <h4>
              <span>$199</span> / Per Month
            </h4>
            <div>
              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>5 Classes Per month</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  className="square-checkbox "
                  checked
                  readOnly
                />

                <label>4 Group class monthly</label>
              </span>

              <span>
              <input type="checkbox"   disabled className="square-checkbox disabled" checked readOnly />

                <label className="opt">Online class access</label>
              </span>

              <span>
              <input type="checkbox"   disabled className="square-checkbox disabled" checked readOnly />

                <label className="opt" >E-book fitness guide</label>
              </span>
            


             
            </div>
            
            <button>Choose Plan</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
