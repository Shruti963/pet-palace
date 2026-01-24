// PetCareTips.jsx

import "./PetCareTips.css";

export default function PetCareTips() {
  return (
    <section className="petcare-section">
      <h2 className="petcare-heading">Pet Care Tips</h2>

      <div className="petcare-cards-wrapper">
        <div className="petcare-card-box">
          <h3 className="petcare-card-title">Healthy Food</h3>
          <p className="petcare-card-text">
            Provide balanced and nutritious food based on your pet’s age
            and breed.
          </p>
        </div>

        <div className="petcare-card-box">
          <h3 className="petcare-card-title">Regular Vet Visits</h3>
          <p className="petcare-card-text">
            Regular checkups help detect health issues early and keep
            pets happy.
          </p>
        </div>

        <div className="petcare-card-box">
          <h3 className="petcare-card-title">Exercise & Play</h3>
          <p className="petcare-card-text">
            Daily walks and playtime improve physical and mental health.
          </p>
        </div>
      </div>
    </section>
  );
}
