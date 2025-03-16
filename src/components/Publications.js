// src/components/Publications.js
import React from 'react';
import './Publications.css';

const publications = [
  {
    title: 'Poseanalyser: A Survey on Human Pose Estimation',
    journal: 'Springer Nature, Singapore',
    year: 'January 2023',
    authors: 'Shubham Deshmukh, Sakshi Kulkarni, Favin Fernandes, Aniket Patil, Vaishali Jabade',
    description: [
      'Survey of state-of-the-art architectures for Human Pose Estimation.',
      'Comparison of CNNs, OpenPose, and MediaPipe on COCO and MPII datasets.',
    ],
    link: 'https://link.springer.com/article/10.1007/s42979-022-01567-2',
  },
  {
    title: 'Patient Monitoring System',
    journal: '2022 IEEE MysuruCon',
    year: 'October 2022',
    authors: 'Shubham Deshmukh, Favin Fernandes, Sakshi Kulkarni, Aniket Patil, Vaishali Jabade, Jyoti Madake',
    description: [
      'Developed a system for real-time patient monitoring using YOLOv4-tiny and Mediapipe.',
      'Achieved 98.82% accuracy for posture classification (Sleeping, Sitting, Walking, Standing).',
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/9972563',
  },
  {
    title: 'Classification of ASL Alphabets and Numbers Using ORB and FAST',
    journal: '2021 IEEE MysuruCon',
    year: 'October 2021',
    authors: 'Shubham Deshmukh, Favin Fernandes',
    description: [
      'Compared ASL classification methods using OpenCV feature descriptors.',
      'ORB with KNN classifier achieved 97.08% accuracy.',
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/9641535',
  },
];

const Publications = () => {
  return (
    <div className="publications-section">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((publication, index) => (
          <div className="publication-card" key={index}>
            <div className="publication-title">
              <h3>
                <a href={publication.link} target="_blank" rel="noopener noreferrer">{publication.title}</a>
              </h3>
            </div>
            <p><strong>Journal:</strong> {publication.journal}</p>
            <p><strong>Year:</strong> {publication.year}</p>
            <p><strong>Authors:</strong> {publication.authors}</p>
            <div className="publication-description">
              {publication.description.map((desc, descIndex) => (
                <p key={descIndex}>- {desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
