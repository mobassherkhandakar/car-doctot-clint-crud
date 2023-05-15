import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingTeble from "./BookingTeble";
import Swal from "sweetalert2";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooking(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remmening = booking.filter(bk=> bk._id !== id)
              setBooking(remmening)
            }
          });
      }
    });
  }; 

  const handleConferm = id=>{
    fetch(`http://localhost:5000/booking/${id}`,{
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({stetus: 'conferm'})
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      const remminig = booking.filter(bk=> bk._id !==id)
      const updateBooking = booking.find(bk => bk._id === id)
      updateBooking.stetus = 'conferm'
      const newBooking = [updateBooking, ...remminig]
      setBooking(newBooking)
    })
  }


  return (
    <div className="mt-10">
      <h1> My Bookings {booking.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Images</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((boking) => (
              <BookingTeble boking={boking} handleConferm={handleConferm} handleDelete={handleDelete} key={boking._id} />
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Booking;
