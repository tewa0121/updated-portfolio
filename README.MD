# Tewachew Melaku | Portfolio

My personal portfolio website. I'm a 4th-year Software Engineering student at Injibara University and a full-stack developer, looking for an internship.

**Live site:** https://tewachewmelaku.vercel.app

## Features

- Responsive design for phones, tablets and desktops
- Light and dark mode that remembers your choice
- Project showcase with GitHub links
- CV viewer: PDF on desktop, readable image on phones, plus a download button
- Working contact form with spam protection
- Menu that highlights the section you are viewing

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS |
| Icons | Lucide React, React Icons |
| Contact form | Web3Forms |
| Hosting | Vercel |

## Projects Shown

- Smart Blog System
- Global Sentiment Tracker
- Smart Agriculture Management System
- Restaurant Management System
- Hotel Management System (GuestFlow)
- Personal Expense Tracker

## Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/tewa0121/tewachew-portfolio.git
cd tewachew-portfolio

# 2. Install dependencies
npm install

# 3. Add your environment variable
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Environment Variable

The contact form uses [Web3Forms](https://web3forms.com). Get a free access key and put it in `.env`:

```
VITE_WEB3FORMS_KEY=your_access_key_here
```

On Vercel, add the same variable in **Project Settings → Environment Variables**, then redeploy.

## Update Content

| What | Where |
| --- | --- |
| Projects, links and images | `src/components/Projects.jsx` |
| Skills | `src/components/Skills.jsx` |
| Experience and education | `src/components/Experience.jsx` |
| About text | `src/components/About.jsx` |
| CV | Replace both `public/assets/cv.pdf` and `public/assets/cv-preview.jpg` |

## Deploy

```bash
npm run build     # creates the dist folder
vercel --prod     # publishes to Vercel
```

## Contact

- Email: tewachewmelaku6@gmail.com
- GitHub: [tewa0121](https://github.com/tewa0121)
- LinkedIn: [tewachew-melaku](https://www.linkedin.com/in/tewachew-melaku-6b5094408)
- Telegram: [@tewa0121](https://t.me/tewa0121)

Injibara, Ethiopia