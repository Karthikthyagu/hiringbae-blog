import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import "./styles/globals.css";
import GlowBackground from "./components/glowBackground";
import Featured from "./components/featured-story";
import Articlecard from "./components/articlecard";
import Hirepage from "./components/hirepage";


function App() {
  return (
    <>
      <GlowBackground />
      <Navbar />
      <Hero />
      <Featured />
      <Articlecard />
      <Hirepage />
      <Footer />
    </>
  );
}

export default App;
