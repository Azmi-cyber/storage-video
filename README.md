# Stream URL Extractor — by Azmi Ganteng

Next.js 14 (App Router) + TypeScript + hls.js. Jalankan lokal: `npm install && npm run dev` → http://localhost:3000
Deploy: push ke GitHub → Import di Vercel (framework Next.js terdeteksi otomatis), atau `npx vercel --prod`.
API: `GET /api/analyze?url=...&referer=...` atau `POST /api/analyze` `{ "url": "...", "referer": "..." }`.
