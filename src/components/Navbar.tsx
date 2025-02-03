import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HoverLinks from "./HoverLinks";  // Ensure HoverLinks component is imported
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness of scrolling (similar to 'smooth' in ScrollSmoother)
      smoothWheel: true, // Enable smooth scroll with mouse wheel
      infinite: false, // Disable infinite scrolling (you can enable if needed)
    });

    // Handle anchor links for smooth scrolling
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let section = elem.getAttribute("data-href");
          if (section) {
            lenis.scrollTo(section, { duration: 1.7, easing: (t) => t * (2 - t) }); // Smooth scroll to section
          }
        }
      });
    });

    // Animation loop for Lenis smooth scrolling
    function animate(time: number) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => {
      // Optional: clean up any event listeners if needed
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="#" className="navbar-title" data-cursor="disable">
          <img src="my_logo.png" style={{ width: "100px", height: "auto" }} />
        </a>

        <a href="mailto:skandap.k@gmail.com" className="navbar-connect" data-cursor="disable">
          skandap.k@mail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
