# Script Whisperer — Cloudflare Deployment

## Setup

### 1. Frontend (Cloudflare Pages)
- Push `frontend/` to GitHub
- Go to [Cloudflare Pages](https://pages.cloudflare.com/)
- Create new project → link your repo
- **Build command**: (leave empty)
- **Output directory**: `frontend`

### 2. Backend (Cloudflare Worker)
- Go to [Cloudflare Workers](https://workers.cloudflare.com/)
- Create new Worker
- Paste `worker/worker.js` into editor
- Add secret: `OPENAI_API_KEY`
- Route the Worker to `/api/*` on your Pages domain

That's it. You're live.
