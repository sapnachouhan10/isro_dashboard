import React from 'react';
import { useNavigate } from 'react-router';

const DashboardCards = [
  { title: 'Spacecrafts', path: '/spacecrafts' },
  { title: 'Launchers', path: '/launchers' },
  { title: 'Customer Satellites', path: '/satellites' },
  { title: 'Centres', path: '/centres' },
];
const CardsContainer = () => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };


  return (
    <div className="card-container">
      {DashboardCards?.map((card, index) => (
        <div key={index} className="card" onClick={()=>handleClick(card.path)}>
          <h3>{card?.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
