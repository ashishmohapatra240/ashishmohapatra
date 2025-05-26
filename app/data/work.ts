export interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: category;
  githubUrl?: string;
  liveUrl?: string;
}

type category = 'featured' | 'web' | 'app' | 'ui-ux' | '3d-motion' | 'video' | 'graphics';

export const works: Work[] = [
  {
    id: 'orox',
    title: 'Orox',
    description: "I've consistently built projects for over the past 3 years and can build a product end to end.",
    image: '/images/works/orox.png',
    technologies: ['NextJs', 'Tailwind CSS', 'MongoDB'],
    category: 'featured',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 'khimji-abartana',
    title: 'Khimji Abartana',
    description: "I've consistently built projects for over the past 3 years and can build a product end to end.",
    image: '/images/works/khimji.png',
    technologies: ['NextJs', 'Tailwind CSS', 'MongoDB'],
    category: 'featured',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
];

export const categoryDescriptions = {
  featured: "On the backend, my APIs might REST, but I won't. Pushed envs to GitHub, because I am bad at keeping secrets. Always pushing untested code to prod, because as Fireship says \"Real men test in production\". No one used to chat with me, so made my own Chat App with WebSockets.",
  web: "Crafting responsive and performant web applications with modern technologies and best practices.",
  app: "Building native and cross-platform mobile applications that deliver exceptional user experiences.",
  "ui-ux": "Designing intuitive and beautiful user interfaces that prioritize user experience and accessibility.",
  "3d-motion": "Creating immersive 3D experiences and smooth animations that bring ideas to life.",
  video: "Producing engaging video content and motion graphics for digital platforms.",
  graphics:
    "Designing visual assets and brand materials that communicate effectively and beautifully.",
};
