import Achieve from "./components/Achieve";
import Achieved from "./components/Achieve-2";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Navbar1 from "./components/Navbar1";
import Ourteam from "./components/Ourteam";
import Team from "./components/Team";
import Testimonials from "./components/Testimonial2";


export default function Home() {
  return (
    <div className= "laptop:max-w-[1280px] mobile:max-w-[480px] tablet:max-w-[1279px] mx-auto mobile h-[7678px]  top-[100px] left-[100px] border-mygray ">
      <Navbar1 />
      <Navbar />
      <Header />
      <Logo />
      <Team />
      <Achieve />
      <Achieved />
      <Blog />
      <Ourteam />
      <Testimonials />
      <Footer />
      
      
      
    </div>
  );
}
