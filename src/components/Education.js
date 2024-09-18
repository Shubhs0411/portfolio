import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import virginiaTechLogo from '../assets/virginia-tech.png'; // Import Virginia Tech logo
import vishwakarmaLogo from '../assets/vishwakarma_logo.png'; // Import Vishwakarma logo
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="timeline">
        {/* Virginia Tech */}
        <div className="timeline-item">
          <div className="icon-container">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faUniversity} />
            </div>
          </div>
          <div className="content">
            <img src={virginiaTechLogo} alt="Virginia Tech Logo" className="education-logo" />
            <h3>Virginia Polytechnic Institute and State University</h3>
            <p className="location">Falls Church, VA</p>
            <p className="GPA">GPA: 3.63/4</p>
            <p className="dates">Aug 2023 – May 2025</p>
            <p className="degree">Master of Enginnering in Computer Science and Applications</p>
            <p className="Specialization">Specialization: Data Analytics and Artificial Intelligence</p>
            <ul>
              <li>Intermediate Data Structures and Algorithms</li>
              <li>Information Visualization</li>
              <li>Machine Learning I & II</li>
              <li>Introduction to Urban Computing</li>
              <li>Introduction to Deep Learning</li>
            </ul>
          </div>
        </div>

        {/* Vishwakarma Institute of Technology */}
        <div className="timeline-item">
          <div className="icon-container">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faUniversity} />
            </div>
          </div>
          <div className="content">
            <img src={vishwakarmaLogo} alt="Vishwakarma Institute Logo" className="education-logo" />
            <h3>Vishwakarma Institute of Technology</h3>
            <p className="location">Pune, India</p>
            <p className="GPA">GPA: 3.56/4</p>
            <p className="dates">Aug 2018 – July 2022</p>
            <p className="degree">Bachelor of Technology in Electronics and Telecommunication Engineering</p>
            <p className="Specialization">Specialization: Artificial Intelligence and Data Analytics</p>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>C Programming</li>
              <li>Python</li>
              <li>Computer Vision</li>
              <li>Signals & Systems</li>
              <li>Digital Signal Processing</li>
              <li>Natural Language Processing</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
