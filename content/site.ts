export type IconName =
  | 'cross' | 'code' | 'browser' | 'phone' | 'layers' | 'cloud'
  | 'target' | 'bars' | 'shield';

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#ai', label: 'AI-Native' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
] as const;

export const hero = {
  eyebrow: 'Software & Product Engineering',
  titleLead: 'We build products, ',
  titleEm: 'not just software.',
  sub: 'Orynex designs, builds and scales intelligent digital products for ambitious businesses. We use AI to move fast and engineering judgment to get it right.',
  chips: ['AI-native engineering', 'MVP to scale', 'Shipped in 3–4 month cycles', 'Cloud-ready from day one'],
};

export const marqueeLabel = 'What we build with';
export const marqueeItems = [
  'LLM Apps', 'AI Agents', 'RAG Pipelines', 'Semantic Search', 'Multi-tenant SaaS', 'Microservices',
  'Next.js', 'NestJS', 'PostgreSQL + pgvector', 'AWS', 'Azure', 'Stripe Billing', 'CI/CD',
];

export const about = {
  eyebrow: 'Who we are',
  title: 'Engineers who think like product owners.',
  big: 'Orynex is a software and product engineering company. We combine AI-native engineering, modern architecture, product thinking and cloud infrastructure, and we work across the whole lifecycle.',
  body: 'Some teams write code to spec. We start by asking what the product needs to do for the business, then build the simplest system that does it well and keeps working as you grow. Technology should solve a business problem. Anything else is a hobby.',
  imageAlt: 'Flowing lines in navy with an orange thread, representing a product moving through its lifecycle',
  lifecycleLabel: 'Across the entire product lifecycle',
  lifecycle: ['Discovery', 'MVP', 'Architecture', 'Build', 'Launch', 'Scale'],
  stats: [
    { value: '16,000', sup: '+', text: 'books made searchable with AI, in 5 languages' },
    { value: '12', sup: '', text: 'microservices shipped for a single marketplace' },
    { value: '3–4', sup: 'mo', text: 'from kickoff to launch, across three recent platforms' },
  ],
};

export const services = {
  eyebrow: 'Services',
  title: 'One team, from first sketch to scale.',
  lead: 'Pick one piece or hand us the whole thing. Either way, you get engineers who care how the product performs after launch day.',
  items: [
    { icon: 'cross', title: 'AI Product Engineering', feature: true, text: 'LLM apps, agents and copilots built for real users, not demo day. We ground answers in your data so the output is useful and you can trust it.', tags: ['GenAI & LLM apps', 'AI agents & workflows', 'RAG & semantic search', 'Chatbots & copilots'] },
    { icon: 'code', title: 'Custom Software', text: 'Enterprise apps, internal tools and business systems shaped around how your team actually works. That includes giving legacy systems a second life.', tags: ['Enterprise apps', 'Workflow automation', 'APIs & integrations', 'Legacy modernization'] },
    { icon: 'browser', title: 'Web Applications', text: 'Fast, typed, maintainable web products: dashboards, portals and customer platforms your users will want to open.', tags: ['Next.js', 'React & TypeScript', 'Node.js & NestJS', 'PWAs'] },
    { icon: 'phone', title: 'Mobile Apps', text: 'Native and cross-platform apps for iOS and Android, with the real-time features and push notifications that keep people coming back.', tags: ['iOS', 'Android', 'Cross-platform', 'Real-time & push'] },
    { icon: 'layers', title: 'SaaS & Platform Engineering', text: 'Multi-tenant architecture, subscriptions and billing, all built so your thousandth customer is as easy to onboard as your first.', tags: ['Multi-tenancy', 'Subscriptions & billing', 'API-first design', 'AI-powered SaaS'] },
    { icon: 'cloud', title: 'Cloud & DevOps', text: "Infrastructure that deploys on every merge and tells you when something's off, so releases stop being a dramatic event.", tags: ['AWS', 'Azure', 'Docker', 'CI/CD & monitoring'] },
  ] as { icon: IconName; title: string; feature?: boolean; text: string; tags: string[] }[],
};

export const ai = {
  eyebrow: 'AI-native engineering',
  titleLead: 'AI is our accelerator. ',
  titleEm: 'Judgment is our foundation.',
  lead: "AI is built into how we work, from the first prototype to the last test. It makes us faster. It doesn't make decisions for us. Architecture, security, scalability, product strategy and quality stay with experienced engineers, because those calls decide whether a product survives contact with real users.",
  equation: [
    { small: 'AI', label: 'Speed' },
    { small: 'Engineering', label: 'Judgment' },
    { small: 'Result', label: 'Production-ready products', result: true },
  ],
  imageAlt: 'A sphere of glowing data points circled by an orange orbit',
  helps: ['Rapid prototyping', 'Code generation', 'Technical exploration', 'Documentation', 'Testing', 'Debugging', 'Data processing', 'Product experimentation'],
  closeLead: 'You get the speed of AI with ',
  closeStrong: "the accountability of people who've shipped real systems.",
};

export type CaseData = {
  mock: 'library' | 'market' | 'learning';
  flip?: boolean;
  image: string;
  cat: string;
  title: string;
  story: string;
  kpis: { value: string; label: string }[];
  pull: string;
  stack: string[];
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Proof, not promises.',
  lead: 'Three platforms, three different problems, and three architectures picked to fit each one.',
  cases: [
    {
      mock: 'library', image: '/images/case-library.jpg',
      cat: 'Case 01 · AI Product Engineering',
      title: 'A legacy library that answers back',
      story: "A digital library of more than 16,000 books in five languages was stuck behind keyword search that couldn't find what readers meant. We rebuilt it as an AI discovery platform with semantic search, RAG and conversational browsing, so it pulls from the library itself before generating any answer.",
      kpis: [{ value: '16,000+', label: 'Books indexed' }, { value: '5', label: 'Languages' }, { value: '6', label: 'Engineers' }, { value: '3 months', label: 'Timeline' }],
      pull: 'Answers grounded in the library, in English, Urdu, Arabic, Farsi and Gujarati.',
      stack: ['Next.js', 'NestJS', 'PostgreSQL', 'pgvector', 'OpenAI'],
    },
    {
      mock: 'market', flip: true, image: '/images/case-market.jpg',
      cat: 'Case 02 · SaaS & Platform Engineering',
      title: 'A marketplace built to carry many vendors',
      story: 'A multi-vendor marketplace needed payments, recurring billing and room to grow without one part dragging the rest down. We built 12 microservices behind an API gateway, wired Stripe in with webhooks, and deployed it all on AWS.',
      kpis: [{ value: '12', label: 'Microservices' }, { value: '5', label: 'Engineers' }, { value: '4 months', label: 'Timeline' }, { value: 'Stripe', label: 'Payments + recurring billing' }],
      pull: "Each service scales on its own, so growth in one area doesn't strain the others.",
      stack: ['Next.js', 'NestJS', 'MySQL', 'Stripe', 'AWS'],
    },
    {
      mock: 'learning', image: '/images/case-learning.jpg',
      cat: 'Case 03 · Custom Software',
      title: 'A learning platform without the distributed headache',
      story: 'An education business needed student management, educator tools, content, payments, notifications and chat in one product. We picked a modular monolith over microservices, which kept it clean, quick to ship and free of complexity it didn\'t need.',
      kpis: [{ value: 'Modular', label: 'Monolith architecture' }, { value: '4', label: 'Engineers' }, { value: '4 months', label: 'Timeline' }, { value: 'Azure', label: 'CI/CD delivery' }],
      pull: 'We choose the simplest structure that scales. Here, that meant one well-organized codebase.',
      stack: ['React', 'NestJS', 'MySQL', 'Firebase', 'Stripe', 'Docker', 'Jenkins', 'Azure'],
    },
  ] as CaseData[],
};

export const mocks = {
  library: {
    label: "Illustration of the library's conversational search",
    query: 'Find books that discuss patience in classical poetry',
    answerTitle: 'Grounded in library sources',
    bars: ['92%', '78%', '55%'],
    langs: ['English', 'اردو', 'العربية', 'فارسی', 'ગુજરાતી'],
  },
  market: {
    label: "Illustration of the marketplace's service architecture",
    gateway: 'API Gateway',
    hot: ['Vendors', 'Checkout', 'Billing', 'Webhooks'],
    plain: ['Service 05', 'Service 06', 'Service 07', 'Service 08', 'Service 09', 'Service 10', 'Service 11', 'Service 12'],
    footer: '12 independent services · AWS',
  },
  learning: {
    label: "Illustration of the learning platform's modular monolith",
    caption: 'One codebase · clear module boundaries',
    modules: [
      { name: 'Students', hot: true }, { name: 'Educators' }, { name: 'Content' }, { name: 'Auth' },
      { name: 'Payments' }, { name: 'Notifications' }, { name: 'Chat' }, { name: 'CI/CD', hot: true },
    ] as { name: string; hot?: boolean }[],
    footer: 'Docker · Jenkins · Azure',
  },
};

export const process = {
  eyebrow: 'How we work',
  title: 'Eight steps. No guesswork.',
  lead: 'A clear path from idea to production, with you in the loop at every turn.',
  steps: [
    { title: 'Discover', text: 'We learn your business, your users and what success looks like before anyone writes code.' },
    { title: 'Validate', text: 'We test the riskiest assumptions early, while changing course is still cheap.' },
    { title: 'Architect', text: 'We pick the simplest structure that will hold up as you grow.' },
    { title: 'Design', text: 'We map flows and interfaces until the product feels obvious to use.', noLine: true },
    { title: 'Build', text: 'We ship in tight iterations, with AI speeding up the work and engineers owning every decision.' },
    { title: 'Test', text: "We break it on purpose so your users don't break it by accident." },
    { title: 'Launch', text: 'We deploy with monitoring in place from day one, so we see problems before your users do.' },
    { title: 'Scale', text: 'We tune, extend and grow the platform as traffic and ambitions climb.', noLine: true },
  ] as { title: string; text: string; noLine?: boolean }[],
};

export const principles = {
  eyebrow: 'Why Orynex',
  title: 'How we make decisions.',
  items: [
    { icon: 'cross', title: 'AI-native', text: 'AI is part of every stage of our workflow, not tacked on at the end.' },
    { icon: 'layers', title: 'Architecture-first', text: "We get the foundations right, because they're expensive to fix later." },
    { icon: 'target', title: 'Product-focused', text: 'We measure success by what users do, not by lines of code.' },
    { icon: 'bars', title: 'Scalable', text: "We build for where you're headed, without overbuilding for where you aren't yet." },
    { icon: 'cloud', title: 'Cloud-ready', text: 'Containerized, automated and deployable from the first sprint.' },
    { icon: 'shield', title: 'Business-aligned', text: 'Every technical choice has to answer to a business goal.' },
  ] as { icon: IconName; title: string; text: string }[],
  motto: "Technology should solve a business problem. ",
  mottoEm: "That's the standard we hold every product to.",
  cta: 'Talk to an engineer',
};

export const audience = {
  eyebrow: 'Who we work with',
  title: 'Built for teams with something to ship.',
  items: [
    { title: 'Startups', text: 'Get a sharp MVP in front of real users without piling up technical debt.' },
    { title: 'Growing businesses', text: 'Modernize the systems that got you here so they can take you further.' },
    { title: 'Enterprises', text: 'Complex platforms, integrations and modernization, done with care.' },
    { title: 'Founders', text: 'Turn a SaaS or AI idea into a product people can sign up for.' },
    { title: 'Agencies & tech partners', text: 'Add senior engineering capacity without adding headcount.' },
  ],
};

export const stack = {
  eyebrow: 'Stack',
  title: 'Modern tools, chosen on purpose.',
  lead: "We pick from these based on what your product needs, not what's trending.",
  groups: [
    { title: 'Frontend', tags: ['React', 'Next.js', 'TypeScript', 'Modern UI systems'] },
    { title: 'Backend', tags: ['Node.js', 'NestJS', 'REST APIs', 'Microservices', 'Modular monoliths'] },
    { title: 'AI', dark: true, tags: ['OpenAI', 'LLMs', 'Embeddings', 'RAG', 'Semantic search', 'AI agents'] },
    { title: 'Database', tags: ['PostgreSQL', 'MySQL', 'Redis', 'Vector databases', 'pgvector'] },
    { title: 'Cloud', tags: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Monitoring'] },
    { title: 'Integrations', tags: ['Stripe', 'Firebase', 'Third-party APIs', 'Payment systems'] },
  ] as { title: string; dark?: boolean; tags: string[] }[],
};

export const cta = {
  eyebrow: "Let's talk",
  titleLead: 'Got a hard problem? ',
  titleEm: 'Good.',
  text: "Whether it's an AI product, a SaaS platform or a legacy system that's overdue for a rebuild, we'd like to hear about it. Tell us what you're building and we'll tell you how we'd approach it.",
  cardLabel: 'Write to us directly',
  email: 'hello@orynex.tech',
  checks: [
    'Tell us the problem, not just the feature list',
    'Get an honest take on scope, stack and architecture',
    'Talk to engineers, not a sales script',
  ],
  button: "Let's build what's next",
  buttonHref: 'mailto:hello@orynex.tech?subject=New%20project%20for%20Orynex',
};

export const footer = {
  tagline: 'Intelligent, scalable, production-ready technology for ambitious businesses.',
  columns: [
    { title: 'Services', links: [
      { label: 'AI Product Engineering', href: '#services' }, { label: 'Custom Software', href: '#services' },
      { label: 'Web Applications', href: '#services' }, { label: 'Mobile Apps', href: '#services' },
      { label: 'SaaS & Platforms', href: '#services' }, { label: 'Cloud & DevOps', href: '#services' },
    ] },
    { title: 'Company', links: [
      { label: 'About', href: '#about' }, { label: 'AI-Native', href: '#ai' },
      { label: 'Process', href: '#process' }, { label: 'Stack', href: '#stack' },
    ] },
    { title: 'Work', links: [
      { label: 'AI Library Platform', href: '#work' }, { label: 'Multi-vendor Marketplace', href: '#work' },
      { label: 'Learning Platform', href: '#work' },
    ] },
    { title: 'Contact', links: [
      { label: 'hello@orynex.tech', href: 'mailto:hello@orynex.tech' },
      { label: 'www.orynex.tech', href: 'https://www.orynex.tech' },
      { label: 'Start a project', href: '#contact' },
    ] },
  ],
  copyright: '© 2026 Orynex Technologies. All rights reserved.',
  strap: 'AI · SaaS · Software · Cloud · Product Engineering',
};
