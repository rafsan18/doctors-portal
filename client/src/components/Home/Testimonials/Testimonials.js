import React from "react";
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import janet from "../../../images/janet.png";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const testimonialData = [
    {
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit illum obcaecati consequuntur nisi!",
        name: "Wilson Harry",
        from: "California",
        img: wilson,
    },
    {
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit illum obcaecati consequuntur nisi!",
        name: "Ema Jhonson",
        from: "California",
        img: ema,
    },
    {
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit illum obcaecati consequuntur nisi!",
        name: "Janet Jackson",
        from: "California",
        img: janet,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">
                        Testimonials
                    </h5>
                    <h1>
                        What Our Patients <br />
                        Says{" "}
                    </h1>
                </div>
                <div className="card-deck mt-5">
                    {testimonialData.map((testimonial) => (
                        <Testimonial
                            testimonial={testimonial}
                            key={testimonial.name}
                        ></Testimonial>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
