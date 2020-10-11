import React from "react";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
    return (
        <main className="row">
            <div className="col-md-4 offset-md-1">
                <h1>
                    Your New Smile <br />
                    Starts Here{" "}
                </h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae natus vitae tempora vel tempore odio!
                </p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={chair} alt="Chair" />
            </div>
        </main>
    );
};

export default HeaderMain;
