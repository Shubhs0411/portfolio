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
    link: 'https://link.springer.com/article/10.1007/s42979-022-01567-2', // Replace with actual link
  },
  
  {
    title: 'Patient Monitoring System',
    journal: '2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)',
    year: 'October 2022',
    authors: 'Shubham Deshmukh, Favin Fernandes, Sakshi Kulkarni, Aniket Patil, Vaishali Jabade, Jyoti Madake',
    description: [
      'Presents a novel patient monitoring system utilizing human pose estimation techniques for enhanced monitoring.',
      'Employs YOLOv4-tiny for distinguishing between patients and visitors, trained on a custom dataset.',
      'Utilizes Mediapipe for pose estimation, classifying poses into four categories: Sleeping, Sitting, Walking, and Standing.',
      'Achieves 98.82% classification accuracy with PCA and XGBoost; YOLOv4-tiny model reaches 91.09% accuracy.',
      'Integrates a real-time monitoring application developed with Tkinter for efficient data recording and visualization.'
    ],    
    link: 'https://ieeexplore.ieee.org/abstract/document/9972563', // Replace with actual link
  },
  {
    title: 'Classification of asl alphabets and numbers using Orb and fast with brief feature extraction and dimensionality reduction techniques',
    journal: '2021 IEEE Mysore sub section international conference (MysuruCon)',
    year: 'October 2021',
    authors: 'Shubham Deshmukh, Favin Fernandes',
    description: [
      'Compares various methods for classifying American Sign Language (ASL) using OpenCV feature descriptors and dimensionality reduction techniques.',
      'Focuses on traditional machine learning algorithms to achieve quick response and avoid the complexities of CNN models.',
      'Evaluates and compares methods based on feature extraction, dimensionality reduction, and classifier accuracy.',
      'Finds that ORB with k-means achieves the highest accuracy of 97.08% when combined with the KNN classifier.'
    ],
    
    link: 'https://ieeexplore.ieee.org/abstract/document/9641535', // Replace with actual link
  },
  
  {
    title: 'SANIP: Shopping Assistant and Navigation for the visually impaired',
    journal: 'arXiv',
    year: 'September 2022',
    authors: 'Shubham Deshmukh, Favin Fernandes, Amey Chavan, Monali Ahire, Devashri Borse, Jyoti Madake',
    description: [
      'Proposes SANIP, a shopping assistant model designed to assist visually impaired individuals by detecting and recognizing handheld objects.',
      'Includes three Python models: Custom Object Detection, Text Detection, and Barcode Detection.',
      'Uses a custom dataset for object detection, including daily goods and important signs like Cart and Exit.',
      'Converts text and barcode information into speech, providing audible feedback to users.',
      'Achieves successful object detection and recognition with high accuracy and precision.'
    ],
    
    link: 'https://arxiv.org/abs/2209.03570', // Replace with actual link
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
