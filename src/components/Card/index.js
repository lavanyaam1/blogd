/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./card.css";
// import outdoor from "../../assets/Images/outdoor.png";
import ReactionButton from "../ReactionButton";

export default function Card(props) {
  // const { blog } = props;
  return (
    <div className="card-container">
      <img src={props.image} alt="Outdoor" className="card-img" />
      <div className="blog-content">
        <div className="date-container">
          {/* // eslint-disable-next-line react/destructuring-assignment */}
          <p className="date">{props.date}</p>
          <p className="time">{props.time}</p>
        </div>
        <article className="blog">
          <h4>{props.title}</h4>
          <p>
            {props.description}
          </p>
        </article>
        <div className="btn">
          <ReactionButton claps={props.claps} likes={props.liked} />
        </div>
      </div>
    </div>
  );
}
