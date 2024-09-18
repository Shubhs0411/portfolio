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
      'Comprehensive review of state-of-the-art architectures for Human Pose Estimation.',
      'Comparison of various Computer Vision and Machine Learning Algorithms, such as Feed-Forward Neural Networks, Convolutional Neural Networks (CNN), OpenPose, and MediaPipe.',
      'Coverage of popular datasets, including COCO and MPII.'
    ],
    link: 'https://example.com/poseanalyser-survey', // Replace with actual link
  },
  
  {
    title: 'SANIP: Shopping Assistant and Navigation for the visually impaired',
    journal: 'arXiv preprint',
    volume: 'arXiv:2209.03570',
    citedBy: '3',
    year: '2022',
    authors: 'S Deshmukh, F Fernandes, A Chavan, M Ahire, D Borse, J Madake',
    link: 'https://arxiv.org/abs/2209.03570', // Replace with actual link
  },
  {
    title: 'Classification of asl alphabets and numbers using Orb and fast with brief feature extraction and dimensionality reduction techniques',
    journal: '2021 IEEE Mysore sub section international conference (MysuruCon)',
    pages: '856-860',
    citedBy: '3',
    year: '2021',
    authors: 'S Deshmukh, F Fernandes',
    link: 'https://ieeexplore.ieee.org/document/9600805', // Replace with actual link
  },
  {
    title: 'Patient Monitoring System',
    journal: '2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)',
    pages: '1-6',
    citedBy: '2',
    year: '2022',
    authors: 'SL Deshmukh, F Fernandes, S Kulkarni, A Patil, V Jabade, J Madake',
    link: 'https://ieeexplore.ieee.org/document/9600785', // Replace with actual link
  },
  
];

const Publications = () => {
  return (
    <div className="publications-section" style={{ padding: '3rem' }}>
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((publication, index) => (
          <div className="publication-card" key={index}>
            <h3>
              <a href={publication.link} target="_blank" rel="noopener noreferrer">{publication.title}</a>
            </h3>
            {publication.journal && <p><strong>Journal:</strong> {publication.journal}</p>}
            {publication.volume && <p><strong>Volume:</strong> {publication.volume}</p>}
            {publication.pages && <p><strong>Pages:</strong> {publication.pages}</p>}
            {publication.citedBy && <p><strong>Cited by:</strong> {publication.citedBy}</p>}
            {publication.year && <p><strong>Year:</strong> {publication.year}</p>}
            {publication.authors && <p><strong>Authors:</strong> {publication.authors}</p>}
            {publication.description && (
              <div className="publication-description">
                {publication.description.map((desc, descIndex) => (
                  <p key={descIndex}>- {desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
