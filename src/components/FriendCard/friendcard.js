import React from "react";
import "./friendcard.css";




const FriendCard = props => (
  <button>
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.score}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>{props.name}</strong> 
        </li>
      </ul>
    </div>
  </div>
  </button>
);

export default FriendCard;