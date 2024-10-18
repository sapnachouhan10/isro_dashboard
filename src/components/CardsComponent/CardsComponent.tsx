import React from "react";
import { useNavigate } from "react-router-dom";
import icSpacecrafts from "../../assets/spacecrafts.png";
import icLaunchers from "../../assets/launchers.png";
import icSatellites from "../../assets/satellites.png";
import icCentres from "../../assets/centres.png";


interface DashboardCard {
  title: string;
  path: string;
  icon: string;
}

const DashboardCards: DashboardCard[] = [
  { title: "Spacecrafts", path: "/spacecrafts", icon: icSpacecrafts },
  { title: "Launchers", path: "/launchers", icon: icLaunchers },
  {
    title: "Customer Satellites",
    path: "/customer_satellites",
    icon: icSatellites,
  },
  { title: "Centres", path: "/centres", icon: icCentres },
];

const CardsContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="card-container dashboard-container">
        {DashboardCards.map((card, index) => (
          <div
            key={index}
            className="card-col-50"
            role="button"
            tabIndex={0}
            onClick={() => handleClick(card.path)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(card.path);
              }
            }}
            aria-label={`Navigate to ${card.title}`}
          >
            <div className="card">
              <div className="card-icon">
                <img src={card.icon} alt={`${card.title} icon`} />
              </div>
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
