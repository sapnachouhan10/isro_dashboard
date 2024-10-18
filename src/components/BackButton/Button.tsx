import React from 'react'
import { useNavigate } from 'react-router'
import backIcon from "../../assets/back-icon.png"

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };
  
    return (
      <button onClick={handleClick} className="back-button">
        <img alt="icon" src={backIcon} />
      </button>
    );
  };


export default BackButton;