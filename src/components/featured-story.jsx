import "../styles/featured-story.css";
import robot from "../assets/images/robot.webp"
import user from "../assets/images/user-img.jpg"
import time from "../assets/images/time.png"

export default function Featured() {
    return (
        <section className="sec-featured">
            <div className="featured-container">
                <h2 className="featured-story-heading">Featured Story</h2>
                <div className="featured-story-box">
                    <img className="featured-box-robot-img" src={robot} alt="robot" height="360" width="600" />
                    <div className="featured-box-content">
                        <div className="featured-box-content-keypoint">
                            <p>Featured</p>
                            <p>Artificial intelligence</p>
                            <p>Business Strategy</p>
                        </div>
                        <h2>  How AI Employees Are Reshaping Business in 2024</h2>
                        <p className="featured-box-content-para">A comprehensive look at the impact of autonomous AI employees on modern business operations, from customer success to sales automation. Discover how companies are leveraging AI to scale faster and smarter.</p>
                        <div className="featured-box-bottom">
                            <div className="featured-box-user">
                                <img className="featured-box-img" src={user} alt="user" height="20" width="20" />
                                <span>Harish Kalyan</span>
                            </div>
                            <div className="featured-box-time">
                                <img className="featured-box-img" src={time} alt="time" height="20" width="20" />
                                <span>10 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}