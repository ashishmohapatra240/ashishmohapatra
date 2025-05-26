export interface Hackathon {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  date: string;
  award?: string;
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 'umo-dxs-challenge',
    title: 'UMO DXS Challenge',
    description: "I've consistently built projects for over the past 3 years and can build a product end to end. From a user centric aesthetically good UI.",
    image: '/images/hackathons/umo.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    date: 'Aug 2021',
    award: 'Winner',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    devpostUrl: 'https://devpost.com'
  },
  {
    id: 'techcrunch-disrupt',
    title: 'TechCrunch Disrupt',
    description: "Built an innovative solution that addresses real-world problems with cutting-edge technology and user-centered design.",
    image: '/images/hackathons/umo.png',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    date: 'Sep 2021',
    award: 'Runner-up',
    githubUrl: 'https://github.com',
    devpostUrl: 'https://devpost.com'
  },
  {
    id: 'nasa-space-apps',
    title: 'NASA Space Apps Challenge',
    description: "Developed a space-themed application that helps visualize astronomical data and makes space exploration more accessible.",
    image: '/images/hackathons/umo.png',
    technologies: ['Python', 'Flask', 'D3.js', 'NASA APIs'],
    date: 'Oct 2021',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
]; 