import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaAndroid, FaGithub, FaJava, FaNode } from 'react-icons/fa';
import { SiMysql, SiFirebase, SiExpress, SiAndroidstudio, SiJetpackcompose, SiKotlin } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FiCode, FiMonitor, FiServer, FiDatabase, FiTool, FiStar, FiUsers, FiCpu } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';

const groups = [
  {
    label: 'Languages',
    icon: <FiCode />,
    color: '#6366f1',
    skills: [
      { name: 'Java',       icon: <FaJava />,    color: '#f89820' },
      { name: 'Python',     icon: <FaPython />,  color: '#3572A5' },
      { name: 'JavaScript', icon: <FaJs />,      color: '#f7df1e' },
      { name: 'Kotlin',     icon: <SiKotlin />,  color: '#7F52FF' },
    ],
  },
  {
    label: 'Web Technologies',
    icon: <FiMonitor />,
    color: '#06b6d4',
    skills: [
      { name: 'HTML5',      icon: <FaHtml5 />,   color: '#e34f26' },
      { name: 'CSS3',       icon: <FaCss3Alt />, color: '#38bdf8' },
      { name: 'React.js',   icon: <FaReact />,   color: '#61dafb' },
      { name: 'Node.js',    icon: <FaNode />,    color: '#3c873a' },
      { name: 'Express.js', icon: <SiExpress />, color: '#e5e7eb' },
    ],
  },
  {
    label: 'Databases',
    icon: <FiDatabase />,
    color: '#10b981',
    skills: [
      { name: 'MySQL',    icon: <SiMysql />,    color: '#4479a1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    ],
  },
  {
    label: 'Mobile',
    icon: <FaAndroid />,
    color: '#3ddc84',
    skills: [
      { name: 'Android Development', icon: <FaAndroid />,        color: '#3ddc84' },
      { name: 'Jetpack Compose',     icon: <SiJetpackcompose />, color: '#4285F4' },
    ],
  },
  {
    label: 'Tools & Platforms',
    icon: <FiTool />,
    color: '#f59e0b',
    skills: [
      { name: 'Git',            icon: <FaGitAlt />,       color: '#f1502f' },
      { name: 'GitHub',         icon: <FaGithub />,       color: '#e5e7eb' },
      { name: 'VS Code',        icon: <VscCode />,        color: '#007acc' },
      { name: 'Android Studio', icon: <SiAndroidstudio />,color: '#3ddc84' },
    ],
  },
  {
    label: 'Core Concepts',
    icon: <FiCpu />,
    color: '#8b5cf6',
    skills: [
      { name: 'OOP',                  icon: <FiCode />,    color: '#8b5cf6' },
      { name: 'Data Structures',      icon: <FiCpu />,     color: '#6366f1' },
      { name: 'REST APIs',            icon: <FiServer />,  color: '#06b6d4' },
      { name: 'Responsive Web Design',icon: <FiMonitor />, color: '#10b981' },
    ],
  },
  {
    label: 'Soft Skills',
    icon: <FiUsers />,
    color: '#ec4899',
    skills: [
      { name: 'Problem Solving',   icon: <FiStar />,  color: '#f59e0b' },
      { name: 'Team Collaboration',icon: <FiUsers />, color: '#ec4899' },
      { name: 'Communication',     icon: <FiUsers />, color: '#06b6d4' },
      { name: 'Time Management',   icon: <FiStar />,  color: '#10b981' },
    ],
  },
];

export default function Skills() {
  const revealRef = useScrollReveal();

  return (
    <section className="sk-section reveal-up" id="skills" ref={revealRef}>
      <div className="sk-header">
        <p className="sk-eyebrow">WHAT I WORK WITH</p>
        <h2 className="sk-heading">Skills &amp; Technologies</h2>
      </div>

      <div className="sk-groups">
        {groups.map(g => (
          <div key={g.label} className="sk-group" style={{ '--gc': g.color }}>
            <div className="sk-group-title">
              <span className="sk-group-icon" style={{ color: g.color }}>{g.icon}</span>
              {g.label}
            </div>
            <div className="sk-tags">
              {g.skills.map(s => (
                <span key={s.name} className="sk-tag" style={{ '--tc': s.color }}>
                  <span className="sk-tag-icon" style={{ color: s.color }}>{s.icon}</span>
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
