/* eslint-disable react/no-unused-prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import clapping from "../../assets/Icons/clapping.svg";
import heartBlack from "../../assets/Icons/heartBlack.svg";
import heartRed from "../../assets/Icons/heartRed.svg";
import "./reactionbutton.css";

export default function ReactionButton({ claps, likes }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const likeButtonHandler = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  const clapButtonHandler = () => {
    console.log(count);
    setCount((prevState) => prevState + 1);
  };
  return (
    <div className="reaction-container">
      <button type="button" className="btn-clap" onClick={clapButtonHandler}>
        <img src={clapping} alt="clapping hands" />
        <span className="count">{claps}</span>
      </button>
      <button type="button" className="btn-like" onClick={likeButtonHandler}>
        {likes ? <img src={heartRed} alt="like" /> : <img src={heartBlack} alt="umlike" />}
      </button>
    </div>
  );
}
ReactionButton.propTypes = {
  claps: PropTypes.number.isRequired,
  likes: PropTypes.bool.isRequired,
};
