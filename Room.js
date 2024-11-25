import react, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Booking () {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [selectedTime, setSelectedTime] = useState(null);



const rooms = [
        { date: "18 okt", details: [{ name: "Steve"}], times: ["08:00-09:00","08:00-09:00","10:00-11:00", "11:00-12:00", "14:00-15:00", "14:00-15:00"], capacity: 6},
        {date: "19 okt", details: [{ name: "Ada"}], times: ["08:00-09:00","10:00-11:00",  "11:00-12:00",  "13:00-14:00", "14:00-15:00"], capacity: 10 },
        {date: "20 okt", details: [{ name: "Margret"}], times: ["08:00-09:00", "09:00-10:00", "11:00-12:00", "11:00-12:00", "14:00-15:00", "16:00-17:00"],  capacity: 4},
       




    
    ];

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };




const handleRoomChange = (e) => 
    setSelectedRoom(e.target.value);



const handleConfirm = () => {
    if(selectedRoom && selectedTime) {
        alert(`Skriv ditt namn nedan för att bekräfta bokning! : ${selectedRoom}:${selectedTime}`);
    } else {
        alert("Vänligen välj ett rum och en tid.");
    }
};

return (
    <div className="container">
        
        <h1>Välj en tid</h1>
        
        <select onChange={handleRoomChange}
        value={selectedRoom}>
            <option value="">Mötesrum</option>
            {rooms.map((room, index) => (
                <option key={room.date} 
                value={room.details[0]?.name}>
                    {room.details[0]?.name} ({room.capacity || 0} personer)

                    

                </option>
            ))}
        </select>
        
        <table className="calendar-table">
            <thead>
                <tr>
                    {rooms.map((room, index) => (
                        <th key={index}>
                            {room.date} <br/>
                           
                            </th>

                    ))}
                </tr>
            </thead>
            
            <tbody>
                
                {Array.from({ length:Math.max(...rooms.map((r)=> r.times.length)) }).map((_, rowIndex) =>
                (
                    <tr key={rowIndex}>
                        {rooms.map((room,colIndex) => ( 
                            <td key={colIndex}>
                                {room.times[rowIndex] ? (
                                    <button className="time-slot" onClick={() => handleTimeSelect(` ${room.date} ${room.times[rowIndex]}`)}>
                                        {room.times[rowIndex]}
                                    </button>
                                ) : ( 
                                    <span className="empty-slot"></span>
                                )}
                            </td>
                            

                        ))}

                    </tr>

                ))}
               
            </tbody>
            
        </table>
        
        {selectedTime && <div className="confirm">Du har valt: {selectedTime}</div>}
       
        <button className="confirm" onClick={handleConfirm}>
            Nästa
        </button>
        </div>
        
        
);
};

export default Booking;
