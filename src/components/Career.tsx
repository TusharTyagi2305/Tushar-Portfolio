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
                <h4>Data Analytics Intern</h4>
                <h5>Thiranex (Remote)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Successfully completed an intensive project-based Data Analytics internship under industry mentorship. Developed and delivered 4 comprehensive data projects encompassing Data Cleaning, Predictive Modeling, Customer Segmentation, and Data Visualization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SE & DSA Trainee</h4>
                <h5>RKGIT</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Underwent rigorous academic training in core Computer Science fundamentals, encompassing Data Structures, Algorithms, and Object-Oriented Programming. Developed strong problem-solving abilities by consistently practicing and implementing complex algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>RKGIT</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science and Engineering. Current CGPA: 7.0 / 10.0. Core CS Subjects: OOPS, DBMS, Operating Systems, Computer Networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
