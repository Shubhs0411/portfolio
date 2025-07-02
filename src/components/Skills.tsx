// src/components/Skills.tsx
'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'R', 'C++', 'C#', 'Scala', 'Go', 'Bash'],
  },
  {
    name: 'Machine Learning & Deep Learning',
    skills: [
      'scikit-learn', 'XGBoost', 'LightGBM', 'PyTorch', 'TensorFlow', 'Transformers', 'Hugging Face', 'OpenCV',
      'CNNs', 'RNNs', 'LSTMs', 'GANs', 'ViT', 'Attention', 'LLaMA', 'LangChain', 'Generative AI',
    ],
  },
  {
    name: 'Web Development & Backend',
    skills: [
      'React.js', 'Next.js', 'Vue.js', 'D3.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS',
      'Flask', 'FastAPI', 'Django', 'ASP.NET Core', 'Spring Boot', 'REST APIs', 'GraphQL',
    ],
  },
  {
    name: 'Cloud, Big Data & DevOps',
    skills: [
      'AWS', 'GCP', 'Azure', 'Databricks', 'Hadoop', 'Spark',
      'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'MLflow', 'CI/CD', 'Git', 'GitHub Actions',
    ],
  },
  {
    name: 'Databases & Visualization',
    skills: [
      'PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau',
    ],
  },
]

export default function Skills() {
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
          Technical <span className="gradient-text">Toolkit</span>
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
          A collection of the key technologies I leverage for software, data, and machine learning engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-3 sm:p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-lg"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-5">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 sm:px-4 sm:py-1.5 bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-200 rounded-full text-xs sm:text-sm font-medium shadow-sm cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
