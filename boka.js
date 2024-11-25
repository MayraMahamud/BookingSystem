import React, {useState} from "react";
import { Link } from "react-router-dom";

function Boka () {
const [name, setName] = useState("");

const handleConfirm = () => {
    alert(`Tack för din bokning!`);
   
    <Link to="/bokning">Bokning</Link>

};

    return (
        <div className="vem-bokar-container">  
            <h1>Vem bokar</h1> 
            <h4>Förnamn och efternamn</h4>
            <input type="text"
            placeholder="Skriv ditt fullständiga namn här"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
           <button onClick={handleConfirm}>Boka</button>
      

        </div>
      
);
};
export default Boka;