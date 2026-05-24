import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

const posts = [
  {
    slug: 'setup-openclaw-ollama',
    title: 'How to Set Up OpenClaw with Ollama',
    excerpt: 'A step-by-step guide to configuring OpenClaw — the AI-powered coding assistant — to work seamlessly with your local Ollama instance for private, offline code generation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    date: 'May 20, 2026',
    readTime: '8 min read',
    author: 'Wise Technologies Team',
    tags: ['Ollama', 'OpenClaw', 'AI', 'Local LLM'],
    content: [
      {
        heading: 'What is OpenClaw?',
        body: 'OpenClaw is an open-source AI coding assistant that integrates with your development environment to provide intelligent code suggestions, completions, and refactoring. Unlike cloud-based alternatives, OpenClaw can run entirely on your local machine when paired with Ollama, ensuring your code never leaves your system.',
      },
      {
        heading: 'Prerequisites',
        body: 'Before starting, ensure you have: Ollama installed (v0.3+), a code editor (VS Code recommended), at least 8GB RAM, and a compatible model like CodeLlama or DeepSeek-Coder downloaded via Ollama.',
      },
      {
        heading: 'Step 1: Install Ollama',
        body: 'Download Ollama from ollama.com for your operating system. For Windows, run the installer. For macOS, use brew install ollama. For Linux, run the official install script. Verify installation with ollama --version.',
      },
      {
        heading: 'Step 2: Pull a Code Model',
        body: 'OpenClaw works best with code-specialized models. Run ollama pull codellama:7b-code for a lightweight option, or ollama pull deepseek-coder:6.7b for better performance. For advanced users, ollama pull qwen2.5-coder:14b offers excellent multilingual coding support.',
      },
      {
        heading: 'Step 3: Install OpenClaw Extension',
        body: 'In VS Code, open the Extensions marketplace and search for "OpenClaw". Install the official extension. Alternatively, download the .vsix from the GitHub releases page and install manually.',
      },
      {
        heading: 'Step 4: Configure the Connection',
        body: 'Open VS Code settings (Ctrl+,) and search for "OpenClaw". Set the API endpoint to http://localhost:11434/api/generate. Select your pulled model from the dropdown. Enable "Local Mode" to ensure all requests stay on your machine. Set temperature to 0.2 for more deterministic code suggestions.',
      },
      {
        heading: 'Step 5: Test Your Setup',
        body: 'Create a new file and start typing. OpenClaw will show inline suggestions. Press Tab to accept. Try typing a function signature like "function calculateFibonacci(n) {" and watch OpenClaw complete the implementation using your local model.',
      },
      {
        heading: 'Troubleshooting',
        body: 'If suggestions are slow: try a smaller model like codellama:7b-code. If no suggestions appear: check that Ollama is running (ollama serve in terminal). If responses are irrelevant: adjust the system prompt in OpenClaw settings to specify your preferred coding style.',
      },
    ],
  },
  {
    slug: 'setup-hermes-windows-ollama',
    title: 'How to Set Up Hermes on Windows with Ollama API Key',
    excerpt: 'Learn how to deploy the Hermes model locally on Windows using Ollama, configure API keys for secure access, and integrate it into your applications.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    date: 'May 18, 2026',
    readTime: '10 min read',
    author: 'Wise Technologies Team',
    tags: ['Hermes', 'Ollama', 'Windows', 'API'],
    content: [
      {
        heading: 'What is Hermes?',
        body: 'Hermes is a powerful open-source language model fine-tuned for instruction following and tool use. It excels at structured outputs, function calling, and complex reasoning tasks. When combined with Ollama, you get a production-ready AI backend that runs entirely on your hardware.',
      },
      {
        heading: 'Why Use Hermes with Ollama?',
        body: 'Hermes models are optimized for agentic workflows — they can call functions, use tools, and follow complex multi-step instructions. Running via Ollama gives you: zero API costs, complete data privacy, offline capability, and full control over model parameters.',
      },
      {
        heading: 'Step 1: Install Ollama on Windows',
        body: 'Download the Windows installer from ollama.com/download/windows. Run the installer and follow the setup wizard. Ollama will add itself to your system PATH automatically. Open PowerShell and verify with ollama --version. You should see v0.3.0 or higher.',
      },
      {
        heading: 'Step 2: Pull Hermes Model',
        body: 'Ollama supports Hermes via the Nous Research models. Run ollama pull hermes3:latest for the latest version. For older hardware, use ollama pull hermes3:8b which requires less VRAM. The download may take 10-30 minutes depending on your connection.',
      },
      {
        heading: 'Step 3: Start the Ollama Server',
        body: 'By default, Ollama runs on localhost:11434. Start it explicitly with ollama serve in PowerShell. For API access from other devices, set environment variables: $env:OLLAMA_HOST="0.0.0.0:11434" and $env:OLLAMA_ORIGINS="*". Then restart the server.',
      },
      {
        heading: 'Step 4: Generate an API Key',
        body: 'Ollama does not natively use API keys, but for production apps you should add authentication. Create a simple proxy: use a reverse proxy like Nginx with basic auth, or implement API key validation in your application layer. For development, the open endpoint at /api/generate is sufficient.',
      },
      {
        heading: 'Step 5: Test the API',
        body: 'In PowerShell, run: Invoke-RestMethod -Uri "http://localhost:11434/api/generate" -Method POST -ContentType "application/json" -Body \u0027{"model":"hermes3","prompt":"What is the capital of France?","stream":false}\u0027. You should receive a JSON response with the answer.',
      },
      {
        heading: 'Step 6: Integrate into Your App',
        body: 'Use the Ollama JavaScript SDK: npm install ollama. Then import { Ollama } from "ollama"; const ollama = new Ollama({ host: "http://localhost:11434" }); const response = await ollama.generate({ model: "hermes3", prompt: "Your prompt here" });. For Python: pip install ollama.',
      },
      {
        heading: 'Windows-Specific Tips',
        body: 'If you get CUDA errors: update your NVIDIA drivers. For CPU-only mode: set OLLAMA_NO_CUDA=1. If the model is slow: close other applications to free RAM. For persistent environment variables: use System Properties > Advanced > Environment Variables.',
      },
    ],
  },
  {
    slug: 'ollama-pro-plan-benefits',
    title: 'Ollama Pro Plan: Benefits, Big Models & Usage Guide',
    excerpt: 'Everything you need to know about Ollama Pro — the premium tier that unlocks massive models, faster inference, and advanced features for serious AI developers.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    date: 'May 15, 2026',
    readTime: '6 min read',
    author: 'Wise Technologies Team',
    tags: ['Ollama', 'Pro Plan', 'LLM', 'Pricing'],
    content: [
      {
        heading: 'What is Ollama Pro?',
        body: 'Ollama Pro is the premium subscription tier that removes limitations on model sizes, provides priority GPU access, and unlocks enterprise features like team collaboration, model fine-tuning APIs, and dedicated support. It is designed for developers and teams building production AI applications.',
      },
      {
        heading: 'Key Benefits of Pro',
        body: 'Unlimited model downloads: access 100+ models without storage limits. Priority inference: your requests get dedicated GPU queues, reducing latency by up to 60%. Team workspaces: share models and prompts across your organization. Fine-tuning API: customize models with your own datasets. Advanced analytics: track usage, costs, and performance metrics.',
      },
      {
        heading: 'Big Models Available on Pro',
        body: 'Pro unlocks models that require 24GB+ VRAM: Llama 3.1 405B (the largest open model available), Mixtral 8x22B (excellent for reasoning), Qwen 2.5 72B (strong multilingual performance), DeepSeek-V2 236B (coding specialist), and Gemma 2 27B (Google\u0027s latest). These models are impossible to run on consumer hardware without Pro\u0027s cloud GPU infrastructure.',
      },
      {
        heading: 'How Usage Works',
        body: 'Pro uses a token-based billing system. Each model has a token cost per 1K input/output tokens. Llama 3.1 70B costs $0.50 per 1K tokens. Smaller models like Llama 3.1 8B are $0.05 per 1K tokens. You get $50 in free credits monthly. Unused credits roll over for 3 months. Set spending alerts to avoid surprises.',
      },
      {
        heading: 'Pro vs Free Tier',
        body: 'Free tier: limited to models under 8B parameters, shared GPU queues, 10GB storage, community support. Pro tier: all models including 405B, priority queues, unlimited storage, email + chat support, fine-tuning API, team features. Pro costs $20/month for individuals, $50/month per seat for teams.',
      },
      {
        heading: 'Is Pro Worth It?',
        body: 'For hobbyists: probably not — the free tier covers most use cases. For freelancers: yes if you bill clients for AI features — the cost is easily recovered. For startups: absolutely — team features and big models accelerate development. For enterprises: contact sales for custom pricing with SLA guarantees.',
      },
      {
        heading: 'How to Upgrade',
        body: 'Log into ollama.com, go to Settings > Billing, and select your plan. Payment is via credit card or PayPal. Annual billing saves 20%. You can downgrade anytime — your Pro features remain active until the billing period ends.',
      },
    ],
  },
]

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="sketch-border paper-texture overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:glow-accent"
    >
      <div className="h-48 sm:h-56 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover sketch-filter" />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 sketch-border-accent text-accent">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h3>
        <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {post.readTime}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" /> {post.author}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="min-h-screen py-20 md:py-32 px-4 md:px-6 relative"
      style={{ backgroundColor: 'var(--bg)' }}
    >

      <div className="relative z-10 max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-accent"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Wise Blog', className: 'text-primary' },
              { text: 'Insights on AI, development & automation.', className: 'font-serif italic text-accent' },
            ]}
            containerClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
