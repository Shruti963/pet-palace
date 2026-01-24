import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your New Best Friend 🐶</h1>
        <p>
          Adopt pets, give them a loving home, and make your life happier.
        </p>

        <Link to="/" className="hero-btn">
          Explore Pets
        </Link>
      </div>
    </section>
  );
}
export default Hero;
