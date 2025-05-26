export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: [
      'C++ (Data Structures and Algorithms)',
      'TypeScript',
      'JavaScript',
      'SQL'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      'Next.js',
      'React.js',
      'Redux',
      'Flutter',
      'Tailwind CSS',
      'Three.js',
      'GSAP',
      'Framer-Motion'
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      'Node.js (Express.js)',
      'RESTful API Development',
      'WebSockets',
      'Authentication (NextAuth, OAuth)',
      'Real-Time Communication (WebRTC)',
      'Prisma',
      'Mongoose',
      'Message Queues (BullMQ, RabbitMQ, Kafka)'
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'Firebase (Firestore, Realtime DB)',
      'Redis'
    ]
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud Platforms',
    skills: [
      'AWS (EC2, S3, Lambda, ASG, CDNs, Load Balancers)',
      'GCP'
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    skills: [
      'Docker',
      'Container Orchestration (Docker Swarm, Kubernetes)',
      'CI/CD',
      'Monitoring Systems (Prometheus, Grafana, New Relic)'
    ]
  },
  {
    id: 'design',
    title: 'Design',
    skills: [
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'Blender',
      'DaVinci Resolve'
    ]
  }
]; 