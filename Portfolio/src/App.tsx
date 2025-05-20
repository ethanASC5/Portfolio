import { useState } from 'react';
import './index.css';
import pfpp from './assets/pfpp.jpg';
import momentum from './assets/momentum.png';
import lendahand from './assets/lend.png';
import flavor from './assets/flavor.png';
interface TimelineItemData {
  year: string;
  title: string;
  subtitle?: string;
  tech?: string;
  description: string;
  isHTML?: boolean;
  images?: string[];  // Add support for multiple images
  type: 'project' | 'experience' | 'about';  // Add type property
}

const timelineData: TimelineItemData[] = [
  {
    year: '',
    title: 'About Me',
    subtitle: 'Software Engineer',
    tech: '',
    type: 'about',
    description: `
      <div class="about-me-content">
        <p>
          Recent Marcy Labs Software Engineer & NPower IT graduate with a profound passion for technology and innovation. 
          As a Software engineer, I am captivated by the constant advancements in tech. I firmly believe that computers 
          and technology represent the future and are evolving at a pace beyond our comprehension.
        </p>
        
        <p>
          As time goes on, I predict technology will play a role in nearly every aspect of life, especially the job sector. 
          As a result, there is no better time than now to pursue a career in tech. Currently, I am dedicated to deepening 
          my knowledge of technology by acquiring additional skills, certifications, and hands-on projects.
        </p>

        <p>
          Outside of programming, I'm passionate about fitness and lifelong learning. I've ALWAYS competed in soccer at Highest levels for my age being recruited internationally to compete in England, Spain, and Portugal. This drive for excellence instilled resilience, teamwork, and a competitive edge that extends into my work as a software engineer. I thrive on building solutions and take on every problem like it is an opponent that needs to be bested!
        </p>

        <p>
          This drive for excellence instilled resilience, teamwork, and a competitive edge that extends into my work as a software engineer. I thrive on building solutions and take on every problem like it is an opponent that needs to be bested!
        </p>

        <div class="skills-section">
          <h3>My Skills</h3>
          <div class="skill-category">
            <strong>Frontend:</strong> JavaScript, TypeScript, React.js, CSS, HTML
          </div>
          <div class="skill-category">
            <strong>Backend:</strong> Node.js, Express.js, Knex.js, Python, SQL, PSQL
          </div>
          <div class="skill-category">
            <strong>Libraries:</strong> Postgres
          </div>
        </div>

        <p class="contact-note">
          Feel free to reach out or message me through LinkedIn !
        </p>
      </div>
    `,
    isHTML: true
  },
  {
    year: '2025',
    title: 'Momentum Fitness',
    subtitle: 'Fullstack Web & Mobile App',
    tech: 'React, TypeScript, Node.js, Express, PostgreSQL, Knex.js, JWT, Bcrypt, React-Bootstrap, Grommet, Git',
    type: 'project',
    description: 'Built a cross-platform fitness tracker helping users log workouts, track progress, and stay motivated. Designed a responsive UI with React, TypeScript, and Grommet. Developed a secure backend with Node.js and Express, featuring JWT authentication and Bcrypt for password protection. Used PostgreSQL with Knex.js to store user-specific workout data and goals. Led agile team as Scrum Master, managing sprint planning, stakeholder meetings, and daily standups.',
    images: [momentum]
  },
  {
    year: '2024',
    title: 'Lend A Hand NYC',
    subtitle: 'Volunteer Matching App',
    tech: 'React, TypeScript, Node.js, Express, Knex.js, PostgreSQL, JWT, Bcrypt, React-Bootstrap, Grommet, Git',
    type: 'project',
    description: 'Created a full-stack platform connecting NYC organizations with local volunteers. Built an accessible, responsive frontend with React and React-Bootstrap. Engineered a Node.js backend with Express and Knex.js, including RESTful APIs for user auth, events, and signups. Implemented secure JWT auth and data relationships using PostgreSQL.',
    images: [lendahand]
  },
  {
    year: '2024',
    title: 'Flavor Delight',
    subtitle: 'Recipe book',
    tech: 'React,styled-components, Figma, React Testing Library, TheMealDB API',
    type: 'project',
    description: 'Developed a sleek recipe app for discovering global cuisines. Used React with styled-components for modular styling and TheMealDB API for dynamic recipe data. Built search and filter features with real-time results. Designed UI in Figma and tested interactions using React Testing Library. Collaborated in a two-person agile team.',
    images: [flavor]
  },
  {
    year: '2024',
    title: ' Total Deployment Solutions',
    subtitle: 'Support Specialist/Technician ',
    tech: 'Scotiabank, RBC Bank, IMAC Tech',
    type: 'experience',
    description:
      'Provided Level 1–4 support for major financial and tech firms. Diagnosed and reconfigured workstations, improving system efficiency by 50%. Resolved 100+ tickets involving hardware, software, and networking. Ensured smooth communication and thorough documentation with IT teams and end users.',
  },
  {
    year: '2023',
    title: 'NPower',
    subtitle: 'Information Technology (IT) Fellowship',
    tech: 'Microsoft, Cisco, AWS, Windows/Linux/macOS',
    type: 'experience',
    description:
      'Completed 4,500+ hours of IT training covering system management, networking, and cloud technologies. Installed and managed software across major OS platforms. Developed workforce readiness in areas like teamwork, customer service, agile, and ticketing systems.',
  },
  {
    year: '2023',
    title: 'Goldman Sachs – All-Star Coding',
    tech: 'JavaScript',
    type: 'experience',
    description:
      'Learned full-stack web development fundamentals through building apps and games. Gained mentorship on networking, entrepreneurship, and soft skills critical to success in tech.',
  },
  {
    year: 'Before Tech',
    title: 'From Soccer Fields to Code Fields',
    type: 'experience',
    description:
      'Before tech, I was a dedicated soccer player—playing right back for teams like GJOA, Central Brooklyn, and eventually academy-level clubs like Met Oval and Red Bulls. I competed in Spain, Portugal, and England. After an injury and the pandemic disrupted my path, I traveled, volunteered, and found a new passion in technology leading me to NPower and The Marcy Lab School to kickstart my journey in code.',
  }



  // Add more items as needed...
];

function TimelineItem({ item }: { item: TimelineItemData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-label" data-type={item.type}>{item.type}</div>
      <div className="timeline-content">
        <div className="timeline-year">{item.year}</div>
        <div className="timeline-title">{item.title}</div>
        <div className="timeline-subtitle">{item.subtitle}</div>
        <div className="timeline-tech">{item.tech}</div>
        {expanded && (
          <div className="timeline-description">
            {item.isHTML ? (
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            ) : (
              item.description
            )}
            {item.images && item.images.length > 0 && (
              <div className="project-images">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${item.title} screenshot ${index + 1}`}
                    className="project-image"
                  />
                ))}
              </div>
            )}
          </div>
        )}
        <div className="toggle-btn-container">
          <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Hide Details' : 'See Details'}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="timeline">
      <div className="profile-image-container">
        <img
          src={pfpp}
          alt="Ethan James Profile"
          className="profile-image"
        />
      </div>
      <h1 className="timeline-header">Ethan James - My Tech Journey</h1>
      <p className="links" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <a href="https://www.linkedin.com/in/ethan-james-14b222168" target="_blank">LinkedIn</a> | <a href="https://docs.google.com/document/d/1ASwbxWLhsYV4V-afLqa_BaamGMFLXE8-ywm5m4FcQYc/edit?usp=sharing" target="_blank">Resume</a> | <a href="https://github.com/ethanASC5" target="_blank">GitHub</a> | <a href="" target="_blank">Blog</a>
      </p>

      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
