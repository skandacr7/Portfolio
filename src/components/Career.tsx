import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>KPMG</h5>
              </div>
              <h3></h3>
            </div>
            <p>
            Data Engineer who turns messy data into gold—because spreadsheets deserve better! 
            Worked with giants like Wells Fargo and General Mills, making their data work smarter, not harder. 
            Fluent in Python, SQL, and cloud tech—basically a data wizard without the robe.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Analyst</h4>
                <h5>Interview bit</h5>
              </div>
              <h3></h3>
            </div>
            <p>
            As Techical Analyst at InterviewBit, i focused on optimizing platforms, 
            improving system performance, and enhancing user experience. 
            Worked on troubleshooting, system optimization, and process automation. 
            Played a key role in streamlining operations and ensuring system reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Integration Analyst</h4>
                <h5>Plugin hive</h5>
              </div>
              <h3></h3>
            </div>
            <p>
             As a Integration Analyst the role was challenging and fun at PluginHive, 
             i was focused on seamless third-party integrations and plugin integrations with
             troubleshooting. While Working on enhancing platform connectivity and automating processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
