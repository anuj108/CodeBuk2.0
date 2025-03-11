import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="bg-black h-screen">
        <div
          className="flex
       justify-center items-center h-screen flex-col "
        >
          <div className="py-5 px-10">
            <h1 className="text-2xl">
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  "Track your progress",
                  1000,
                  "Track your friend's progress",
                  1000,
                  "Track upcoming contests",
                  1000,
                  "Website for Coders",
                  1000,
                  "Website for Developers",
                  1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "2em", color: "white" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />{" "}
            </h1>
          </div>
          <div>
            <button className="text-black m-2 px-4 py-2 bg-white ">
              <Link to="/login">Login</Link>
            </button>
            <button className="text-black m-2 px-4 py-2 bg-white">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
