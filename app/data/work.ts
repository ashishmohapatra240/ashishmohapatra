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
  featured: "Been building projects end-to-end for the past 3 years. I’ve made UIs so pixel-perfect sharp they make designers question their careers, and then they ask me to move the button 2px to the left. On the backend, my APIs might REST, but I won’t. Solved some 300+ questions on Leetcode, people say I’m friends with Alice and Bob. I’m really good at DP, yes just look at my profile picture. I’m good at r,  I’m good at re,  I’m good at rec,  I’m good at recu, I’m good at recur, I’m good at recur, I’m good at recurs, I’m good at recursi, I’m good at recursio, I’m good at recursion.",
  web: "I code in Next.js because I want justice for SSR. I don’t want to FLEX my skills, I want to JUSTIFY it. Starting my React Tutorial playlist on YouTube, calling this MERN ki Baat. Pushed envs to GitHub, because I am bad at keeping secrets. Always pushing untested code to prod, because as Fireship says “Real men test in production”. Experienced in deployment so much that for a really long time I used to think Docker Images are stored in JPEGs. I deploy to Vercel, Render, Railway basically everywhere but AWS, because I enjoy having money.",
  app: "Flutter gave me one codebase for Android and iOS. Now both platforms crash equally, beautiful symmetry.",
  "ui-ux": "So good at design, people started calling me Figma Male. Makes High Fidelity design first and make it black and white to call it Lo-Fi when I am making the case study. Uses google forms for taking surveys, but randomly fill user personas during the presentation.",
  "3d-motion": "As an After Effects user, whenever I have a problem, I press F9, thought it would ease in. Learned 3D design in lockdown. It didn’t help with my career much, but at least setting the subdivision surface modifier to 10 kept my GPU stay warm all winter. Tried rigging the Media with Blender, still they don’t have a spine.",
  video: "Uses Premiere pro for editing videos, once I had a crush on a girl, my friends told me to .prproj her. Netflix’s Dark timeline was confusing, until they saw mine. Half the clips were missing and the rest were corrupted. Once, I started rendering a project right when Virat Kohli walked in to bat, By the time he scored an unbeaten 254 over 9 hours and 14 minutes, facing 340 balls, hitting 25 fours and a six he was still standing and my render was still halfway, At least one of us showed progress.",
  graphics:
    "Designed a lot of T-shirts because I love fancy fonts on it, basically I like the Text-Styles (Textiles). Made a lot of pretty PPTs  people assume I’ve an MBA degree. I have designed for a lot of clients that people call me John Doe, and my pronouns are Lorem/Ipsum. Uses Photoshop’s Content Aware Fill when people leave me. Doesn’t fix the hole just hides it better. Once traced an image to make an Illustration, now my non-designer friends call Van Gogh.",
};
