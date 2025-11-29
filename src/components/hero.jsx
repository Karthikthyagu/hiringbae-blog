import "../styles/hero.css";
import "../styles/container.css";

export default function Hero() {
    return (
        <section className="hero-page">
           
            <div className="container">
                <h2 className="hero-heading">Insights & Stories</h2>
                <p className="hero-subheading">Exploring the future of AI employees, automation, and the changing workforce</p>
                <button className="hero-btn">Read Featured</button>
            </div>
        </section>
    );
}