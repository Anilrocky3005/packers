import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className=" container card">
        <div className="card-body">
          <div className="cardnumber">
            <div>
              <span>
                <MdOutlinePhone />
              </span>
            </div>
            <div>
              <span>+91 7989084680</span>
            </div>
          </div>
          <div className="content">
            <span>Shifting Domestic & International</span>
          </div>
          <div className="quote">
            <span>Get a Free quoute</span>
          </div>
        </div>
        <div className="qoutes">
          We are inovative enough to safeguard your goods
        </div>
        <div className="cardtitle">
          <h4>Get a free Domestic Moving quote</h4>
        </div>
        <form>
          <fieldset>
            <div className="data">
              <div className="namedata">
                <div>
                  <label>Name :</label>
                </div>
                <input type="name" placeholder="Enter your name"></input>
              </div>
              <div className="numberdata">
                <label>Number :</label>
                <div>
                  <input type="number" placeholder="Enter your number"></input>
                </div>
              </div>
              <div className="citydata">
                <div>
                  <label>City :</label>
                </div>
                <input type="name" placeholder="Enter your city"></input>
              </div>
            </div>
            <div className="buttons">
              <button className="btn btn-primary w-25 m-10 ">Submit</button>
            </div>
          </fieldset>
        </form>
        </div>
        <div className="footer">
            <div className="footerheader">
                <h1 className="text-danger">PBC PACKERS AND MOVERS</h1>
            </div>
          <p>
             PBC Packers and Movers in India having a
            leading name since 1984 in the relocation industry. In the last 39+
            years, we have become one of the most reputed and Best packers and
            movers companies in the country. The credit for our success goes to
            our founder, Mr. Sunil (Group Chairman & Founder, DRS
            Group). Under his leadership, Pbc Packers and Movers have Served
            1600+ Locations with GPS Enabled Lockable Trucks and managed to
            create a strong network of 56 branches in 40 cities. To help our
            customers differentiate the Original Pbc Packers and Movers from
            other players in the market with a similar name, we have initiated
            the #BadeBhaiyaMatlab campaign. The term Bade Bhaiya (elder brother)
            signifies a dependable, reliable, and respected person
          </p>
        
      </div>
    </>
  );
};

export default Home;
