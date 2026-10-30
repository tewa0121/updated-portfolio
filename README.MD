# Tewachew Melaku – Portfolio

Personal portfolio built with **React, Vite and Tailwind CSS**.

## Run locally
```bash
npm install
cp .env.example .env     # then add your Web3Forms key
npm run dev
```

## Contact form
The form uses [Web3Forms](https://web3forms.com). Create a free access key and set `VITE_WEB3FORMS_KEY`
(in `.env` locally, and in **Vercel → Project Settings → Environment Variables** for production, then redeploy).

## Update content
| What | Where |
| --- | --- |
| Projects (links, demo URLs, images) | `src/components/Projects.jsx` |
| Skills | `src/components/Skills.jsx` |
| Experience / education | `src/components/Experience.jsx` |
| CV | replace `public/assets/cv.pdf` **and** `public/assets/cv-preview.jpg` (the image is what phones show) |

## Build
```bash
npm run build
```
