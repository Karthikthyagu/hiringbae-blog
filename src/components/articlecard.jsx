import "../styles/articlecard.css";
import ai from "../assets/images/ai-firstcard.webp"
import sittingrobot from "../assets/images/sittingrobot.webp"
import collabproj from "../assets/images/collab-project.jpeg"
import earth from "../assets/images/earth.jpg"
import screen from "../assets/images/screentouch.jpg"
import coding from "../assets/images/coding.jpg"

export default function Articlecard() {
  return (
    <section className="articlecard-sec3">
      <div className="article-card-container">
        <h2>Latest Article</h2>
        <p>Stay updated with the latest in AI and automation</p>

        <div className="blog-card-groups">

          {/* card1 */}
          <div className="blog-cards">
            <img src={ai} alt="ai"  />
            <div className="blog-cards-content">

              <div className="tags">
                <span>AI</span>
                <span>Future of Work</span>
              </div>

              <h3>The Future of AI Employees in Modern Workplaces</h3>

              <p>Exploring how AI employees are transforming traditional work structures and creating new opportunities for businesses.</p>

              <div className="meta">
                <span> 8 min read</span>
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="blog-cards">
            <img src={sittingrobot} alt="sitting robot" />
            <div className="blog-cards-content">

              <div className="tags">
                <span>AI Development</span>
                <span>Technology</span>
              </div>

              <h3>Building Truly Autonomous AI Systems</h3>

              <p>A deep dive into the technical and ethical considerations of creating AI that can work independently.</p>

              <div className="meta">
                <span> 6 min read</span>
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="blog-cards">
            <img src={collabproj} alt="collab project" />
            <div className="blog-cards-content">

              <div className="tags">
                <span>Customer success</span>
                <span>Automation</span>
              </div>

              <h3>Revolutionizing Customer Success with AI</h3>

              <p>How AI employees like Mia are changing the game for customer onboarding and retention.</p>

              <div className="meta">
                <span> 5 min read</span>
              </div>
            </div>
          </div>

          {/* card4 */}
          <div className="blog-cards">
            <img src={earth} alt="earth"  />
            <div className="blog-cards-content">

              <div className="tags">
                <span>AI</span>
                <span>Decision Making</span>
              </div>

              <h3>Understanding AI Decision-Making Processes</h3>

              <p>Breaking down how modern AI systems make decisions and when they escalate to human oversight.</p>

              <div className="meta">
                <span> 7 min read</span>
              </div>
            </div>
          </div>

          {/* card5 */}
          <div className="blog-cards">
            <img src={screen} alt="screen touch" />
            <div className="blog-cards-content">

              <div className="tags">
                <span>AI</span>
                <span>Sentiment Analysis</span>
              </div>

              <h3>Real-Time Sentiment Analysis in Action</h3>

              <p>Discover how AI employees process emotional context to provide more empathetic customer interactions.</p>

              <div className="meta">
                <span> 6 min read</span>
              </div>
            </div>
          </div>

          {/* card6 */}
          <div className="blog-cards">
            <img src={coding} alt="coding"  />
            <div className="blog-cards-content">

              <div className="tags">
                <span>Optimization</span>
                <span>Machine learning</span>
              </div>

              <h3>The Power of Self-Optimizing Systems</h3>

              <p>Learn how AI employees continuously improve their performance without manual intervention.</p>

              <div className="meta">
                <span> 5 min read</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}