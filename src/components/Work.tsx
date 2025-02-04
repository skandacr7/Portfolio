import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  // Array of image paths for each project
  const images = [
    "/images/project1.webp",
    "/images/project.jpg", 
    "/images/project3.webp",
    "/images/project4.webp",
    "/images/project5.webp"
  ];

  // Array of information for each project
  const projectInfo = [
    {
      title: "Project 01",
      category: "Web Development",
      tools: "JavaScript, React, CSS",
      description: "A portfolio website showcasing my work.",
    },
    {
      title: "Project 02",
      category: "Mobile App",
      tools: "React Native, Firebase",
      description: "A mobile app for task management.",
    },
    {
      title: "Project 03",
      category: "E-commerce",
      tools: "Next.js, Node.js, MongoDB",
      description: "An online store with a smooth shopping experience.",
    },
    {
      title: "Project 04",
      category: "Game Development",
      tools: "Unity, C#",
      description: "A 3D game created with Unity.",
    },
    {
      title: "Project 05",
      category: "VR Experience",
      tools: "Three.js, WebVR",
      description: "A virtual reality experience for browsers.",
    }
  ];

  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.querySelectorAll(".work-box");
      if (boxes.length === 0) return;

      const container = document.querySelector(".work-container");
      if (!container) return;

      // Get the width of the container and individual boxes
      const containerWidth = container.getBoundingClientRect().width;
      const boxWidth = boxes[0].getBoundingClientRect().width;
      const totalWidth = boxWidth * boxes.length; // Total width of all boxes

      // Set translateX to start from the far right
      translateX = totalWidth - containerWidth; // This will move the content to the right initially
    }

    setTranslateX();

    // GSAP horizontal scrolling animation (right to left)
    gsap.to(".work-flex", {
      x: -translateX, // Moves right to left
      duration: 40,
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top", // Scroll starts when the section hits the top
        end: "200% top", // Scroll until the end of the section
        scrub: 1, // Makes the scroll smooth
        pin: true, // Pins the section during scroll
      },
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(5)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{projectInfo[index].title}</h4> {/* Project title */}
                    <p>{projectInfo[index].category}</p> {/* Project category */}
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{projectInfo[index].tools}</p> {/* Tools for each project */}
                <p>{projectInfo[index].description}</p> {/* Description for each project */}
              </div>
              {/* Pass the corresponding image from the array */}
              <WorkImage image={images[index]} alt={projectInfo[index].title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
