import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Ensure GSAP ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const GamingAccessoriesProject = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<Element>('.project-section');
    
    // Main project animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Individual section animations
    sections.forEach((section, index) => {
      gsap.fromTo(
        section as Element,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div 
      ref={triggerRef} 
      className="bg-[#0d0d0d] text-white min-h-screen p-8 md:p-16"
    >
      <div ref={sectionRef} className="container mx-auto">
        {/* Project Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Creators Gaming Accessories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mt-4">
            E-Commerce Platform for Gaming Enthusiasts
          </p>
        </div>

        {/* Project Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Project Overview */}
          <div className="project-section bg-[#1a1a1a] rounded-xl p-8 shadow-lg border border-blue-900/30">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Project Overview</h2>
            <p className="text-gray-300">
              A comprehensive e-commerce platform for gaming accessories, 
              featuring responsive design, seamless user experience, and 
              dynamic product showcasing. Built with modern web technologies 
              to provide an immersive shopping experience for gamers.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="project-section bg-[#1a1a1a] rounded-xl p-8 shadow-lg border border-blue-900/30">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Technologies Used</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'React', color: 'text-cyan-400' },
                { name: 'Next.js', color: 'text-white' },
                { name: 'Node.js', color: 'text-green-400' },
                { name: 'Express.js', color: 'text-gray-300' }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className={`${tech.color} font-semibold bg-[#2a2a2a] p-3 rounded-lg text-center`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="project-section bg-[#1a1a1a] rounded-xl p-8 shadow-lg border border-blue-900/30">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Responsive Mobile-First Design</li>
              <li>Dynamic Product Catalog</li>
              <li>Secure Checkout Process</li>
              <li>Real-time Inventory Management</li>
              <li>User Authentication</li>
            </ul>
          </div>

          {/* Project Challenges */}
          <div className="project-section bg-[#1a1a1a] rounded-xl p-8 shadow-lg border border-blue-900/30">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <p className="text-gray-300">
              Implemented advanced state management, optimized API routes, 
              and created a scalable architecture that ensures smooth 
              performance and seamless user interactions across different 
              devices and screen sizes.
            </p>
          </div>
        </div>

        {/* Project Links */}
        <div className="mt-16 flex justify-center space-x-6">
          <a 
            href="#" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300"
          >
            View Live Site
          </a>
          <a 
            href="#" 
            className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-black transition duration-300"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default GamingAccessoriesProject;