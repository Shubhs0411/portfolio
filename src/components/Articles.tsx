'use client'

import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaQuoteRight, FaMedium } from 'react-icons/fa'

const publications = [
  {
    title: 'Poseanalyser: A Survey on Human Pose Estimation',
    journal: 'SN Computer Science 4 (2), 136',
    year: '2023',
    authors: 'S Kulkarni, S Deshmukh, F Fernandes, A Patil, V Jabade',
    description: [
      'Survey of state-of-the-art architectures for Human Pose Estimation.',
      'Comparison of CNNs, OpenPose, and MediaPipe on COCO and MPII datasets.',
    ],
    link: 'https://link.springer.com/article/10.1007/s42979-022-01567-2',
    citations: 29,
  },
  {
    title: 'SANIP: Shopping Assistant and Navigation for the Visually Impaired',
    journal: 'arXiv preprint arXiv:2209.03570',
    year: '2022',
    authors: 'S Deshmukh, F Fernandes, A Chavan, M Ahire, D Borse, J Madake',
    description: [],
    link: 'https://arxiv.org/abs/2209.03570',
    citations: 6,
  },
  {
    title: 'Classification of ASL Alphabets and Numbers Using ORB and FAST',
    journal: '2021 IEEE Mysore sub section international conference (MysuruCon), 856-860',
    year: '2021',
    authors: 'S Deshmukh, F Fernandes',
    description: [
      'Compared ASL classification methods using OpenCV feature descriptors.',
      'ORB with KNN classifier achieved 97.08% accuracy.',
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/9641535',
    citations: 4,
  },
  {
    title: 'Patient Monitoring System',
    journal: '2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon), 1-6',
    year: '2022',
    authors: 'SL Deshmukh, F Fernandes, S Kulkarni, A Patil, V Jabade, J Madake',
    description: [
      'Developed a system for real-time patient monitoring using YOLOv4-tiny and Mediapipe.',
      'Achieved 98.82% accuracy for posture classification (Sleeping, Sitting, Walking, Standing).',
    ],
    link: 'https://ieeexplore.ieee.org/abstract/document/9972563',
    citations: 3,
  },
  {
    title: 'Sign Language Detection',
    journal: 'arXiv preprint arXiv:2209.03578',
    year: '2022',
    authors: 'S Deshmukh, F Fernandes, A Chavan',
    description: [],
    link: 'https://arxiv.org/abs/2209.03578',
    citations: 1,
  },
];

const articles = [
  {
    title: 'Secure Network-on-Chip Architectures for MPSoC: Overview and Challenges',
    excerpt: 'An overview of security challenges in Network-on-Chip (NoC) architectures for MPSoC, including hardware Trojans, DoS attacks, and secure routing techniques.',
    platform: 'Medium',
    url: 'https://medium.com/security-risks-in-systems-on-chip-socs/secure-network-on-chip-architectures-for-mpsoc-overview-and-challenges-43482cdab217',
    date: 'Feb 2021',
    readTime: '5 min read',
    views: 'N/A',
    category: 'VLSI/Embedded',
    tags: ['NoC', 'MPSoC', 'Security', 'Hardware Trojans'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg'
  }
];

const categoryColors = {
  'Publication': 'from-gray-700 to-gray-400',
  'VLSI/Embedded': 'from-blue-500 to-cyan-500',
};

export default function Articles() {
  // Sort publications by year desc
  const sortedPubs = [...publications].sort((a, b) => b.year.localeCompare(a.year));
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="gradient-text">Publications & Articles</span>
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto">
          My peer-reviewed publications and select technical articles.
        </p>
      </motion.div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {sortedPubs.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative flex h-full bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden">
              {/* Left blue accent bar */}
              <div className="w-2 bg-blue-600 absolute left-0 top-0 bottom-0" />
              {/* Card content */}
              <div className="flex-1 p-6 pl-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-gray-100 text-blue-700 border border-blue-100 mr-2">Publication</span>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity duration-300 text-gray-400 hover:text-blue-600 ml-auto"
                  >
                    <FaExternalLinkAlt className="text-base" />
                  </a>
                </div>
                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-1 leading-snug">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a>
                </h3>
                {/* Metadata */}
                <div className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold">Journal/Conference:</span> {pub.journal}
                </div>
                <div className="text-sm text-gray-500 mb-1">
                  <span className="font-semibold">Year:</span> {pub.year}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-semibold">Authors:</span> {pub.authors}
                </div>
                {/* Description */}
                {pub.description.length > 0 && (
                  <ul className="list-disc pl-5 text-xs text-gray-600 mb-2">
                    {pub.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
                {/* Citations */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                    <FaQuoteRight className="mr-1 text-blue-400" />Cited by {pub.citations}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full p-6 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <FaMedium className="text-white text-lg" />
                  </div>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${categoryColors['VLSI/Embedded']} text-white`}>
                    Article
                  </span>
                </div>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-opacity duration-300 text-slate-400 hover:text-blue-500"
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.excerpt}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 