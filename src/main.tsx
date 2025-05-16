
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create favicon link
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = '/favicon.svg';
document.head.appendChild(favicon);

// Add metadata for SEO
const metaTags = [
  { name: 'description', content: 'Data Scientist with 7+ years managing the end-to-end AI solution lifecycle, applying ML, statistical analysis, and deep learning (LLMs, Transformers) using Python, PyTorch, TensorFlow' },
  { name: 'keywords', content: 'Jaimin Maniyar, Machine Learning, AI, Artificial Intelligence, Data Science, Portfolio, ML Engineer, Deep Learning, Neural Networks, Data Scientist, LLM, Generative AI' },
  { name: 'author', content: 'Jaimin Maniyar' },
  { name: 'robots', content: 'index, follow' },
  { property: 'og:title', content: 'Jaimin Maniyar | AI Software Solutions Engineer at Intel | Generative AI Specialist | 7+ years in data science and deep learning' },
  { property: 'og:description', content: 'Professional portfolio showcasing AI and machine learning projects, skills, and achievements.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Jaimin Maniyar - Data Scientist' },
  { name: 'twitter:description', content: 'Portfolio of AI and machine learning projects and expertise.' },
  { name: 'theme-color', content: '#9b87f5' },
  { name: 'msapplication-navbutton-color', content: '#9b87f5' },
  { name: 'apple-mobile-web-app-status-bar-style', content: '#9b87f5' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
];

metaTags.forEach(({ name, content, property }) => {
  const meta = document.createElement('meta');
  if (name) meta.name = name;
  if (property) meta.setAttribute('property', property);
  meta.content = content;
  document.head.appendChild(meta);
});

// Add JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Jaimin Maniyar',
  'jobTitle': 'AI Software Solutions Engineer',
  'description': 'AI Specialist with expertise in machine learning, deep learning, and data science',
  'url': window.location.href,
  'sameAs': [
    'https://github.com/maniyar2jaimin',
    'https://linkedin.com/in/maniyar2jaimin'
  ],
  'knowsAbout': ['Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Data Science', 'Computer Vision', 'NLP', 'Generative AI', 'LLMs', 'Transformers', 'Statistical Analysis'],
};

const scriptTag = document.createElement('script');
scriptTag.type = 'application/ld+json';
scriptTag.text = JSON.stringify(jsonLd);
document.head.appendChild(scriptTag);

createRoot(document.getElementById("root")!).render(<App />);
