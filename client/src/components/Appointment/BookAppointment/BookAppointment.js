import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
    {
        id: 1,
        subject: "Teeth Orhodontics",
        visitingHour: "8:00 AM - 9:00 AM",
        totalSpace: 10,
    },
    {
        id: 2,
        subject: "Cosmetic Dentistry",
        visitingHour: "10:00 AM - 12:00 AM",
        totalSpace: 10,
    },
    {
        id: 3,
        subject: "Teeth Cleaning",
        visitingHour: "12:00 PM - 2:00 PM",
        totalSpace: 10,
    },
    {
        id: 4,
        subject: "Cavity Protection",
        visitingHour: "2:00 PM - 4:00 PM",
        totalSpace: 10,
    },
    {
        id: 5,
        subject: "Teeth Orhodontics",
        visitingHour: "4:00 PM - 6:00 PM",
        totalSpace: 10,
    },
    {
        id: 6,
        subject: "Teeth Orhodontics",
        visitingHour: "6:00 PM - 8:00 PM",
        totalSpace: 10,
    },
];

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className="text-center text-brand py-5 mb-5">
                Available Appointment on {date.toDateString()}{" "}
            </h2>
            <div className="row px-5 mx-5">
                {bookingData.map((booking) => (
                    <BookingCard
                        date={date}
                        booking={booking}
                        key={booking.id}
                    ></BookingCard>
                ))}
            </div>
        </section>
    );
};

export default BookAppointment;
