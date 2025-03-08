import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  // Array of image paths for each project
  const images = [
    "/images/gradly.jpg",
    "/images/gaming.jpg",
    "/images/chatterlink.jpg",
    "/images/quickmail.jpg",
    "/images/emotional intelligence.jpg"
  ];

  // Array of information for each project
  type Project = {
    title: string;
    category: string;
    tools: string;
    description: string;
    link?: string | null;
  };

  const projectInfo: Project[] = [
    {
      title: "Project 01",
      category: "Web Development",
      tools: "JavaScript, React, CSS",
      description: "A portfolio website showcasing my work.",
      link: null,
    },
    {
      title: "Project 02",
      category: "Game Development",
      tools: "Unity, C#",
      description: "A 3D game created with Unity.",
    },
    {
      title: "Project 03",
      category: "E-commerce",
      tools: "Next.js, Node.js, MongoDB",
      description: "An online store with a smooth shopping experience.",
      link: null,
    },
    {
      title: "Project 04",
      category: "Mobile App",
      tools: "React Native, Firebase",
      description: "A mobile app for task management.",
      link: null,
    },
    {
      title: "Project 05",
      category: "VR Experience",
      tools: "Three.js, WebVR",
      description: "A virtual reality experience for browsers.",
      link: null,
    },
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
      translateX = totalWidth - containerWidth; // Moves content to the right initially
    }

    setTranslateX();

    // GSAP horizontal scrolling animation (right to left)
    gsap.to(".work-flex", {
      x: -translateX, // Moves right to left
      duration: 40,
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "200% top",
        scrub: 1,
        pin: true,
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
          {projectInfo.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
              
              {/* Check if the project has a link (only gaming does) */}
              {project.link ? (
                <Link to={project.link}>
                  <WorkImage image={images[index]} alt={project.title} />
                </Link>
              ) : (
                <WorkImage image={images[index]} alt={project.title} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
