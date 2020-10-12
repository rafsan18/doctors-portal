import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Spaces Available</p>
                    <button
                        onClick={openModal}
                        className="btn-brand text-uppercase"
                    >
                        Book Appointment
                    </button>
                    <AppointmentForm
                        appointmentOn={booking.subject}
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                    ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
