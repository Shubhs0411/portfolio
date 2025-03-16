import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import virginiaTechLogo from '../assets/virginia-tech.png';
import vishwakarmaLogo from '../assets/vishwakarma_logo.png';
import './Education.css';

const educationData = [
  {
    university: "Virginia Polytechnic Institute and State University",
    location: "Alexandria, Virginia",
    gpa: "GPA: 3.72 / 4.0",
    dates: "Aug 2023 – May 2025",
    degree: "Master of Engineering in Computer Science and Applications",
    specialization: "Specialization: Data Analytics and Artificial Intelligence",
    logo: virginiaTechLogo,
    courses: [
      "Intermediate Data Structures and Algorithms",
      "Information Visualization",
      "Machine Learning I & II",
      "Introduction to Urban Computing",
      "Introduction to Deep Learning",
      "Software Engineering"
    ]
  },
  {
    university: "Vishwakarma Institute of Technology",
    location: "Pune, Maharashtra, India",
    gpa: "GPA: 8.9 / 10.0",
    dates: "Aug 2018 – July 2022",
    degree: "Bachelor of Technology in Electronics and Telecommunication Engineering",
    specialization: "Specialization: Artificial Intelligence and Data Analytics",
    logo: vishwakarmaLogo,
    courses: [
      "Data Structures and Algorithms",
      "C Programming",
      "Python",
      "Computer Vision",
      "Signals & Systems",
      "Digital Signal Processing",
      "Natural Language Processing",
      "Cloud Computing"
    ]
  }
];

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="icon-container">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faUniversity} />
              </div>
            </div>
            <div className="content">
              {/* ✅ Added Grey Box Container */}
              <div className="education-logo-container">
                <img src={edu.logo} alt={`${edu.university} Logo`} className="education-logo" />
              </div>
              <h3>{edu.university}</h3>
              <p className="location">{edu.location}</p>
              <p className="GPA">{edu.gpa}</p>
              <p className="dates">{edu.dates}</p>
              <p className="degree">{edu.degree}</p>
              <p className="specialization">{edu.specialization}</p>
              <ul>
                {edu.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
