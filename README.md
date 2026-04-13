# KD Aqua — Website

> **Pure Water. On Time. Every Time.**
> Official website for KD Aqua, Bhind, Madhya Pradesh.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
kd-aqua/
├── components/
│   ├── Navbar.js          # Responsive sticky navbar
│   ├── Footer.js          # Footer with links, contact, socials
│   └── FloatingButtons.js # WhatsApp + Call floating CTAs
├── pages/
│   ├── _app.js            # Global layout wrapper
│   ├── index.js           # Home page
│   ├── services.js        # All services page
│   ├── quality.js         # Water quality & purification
│   ├── areas.js           # Service areas map
│   ├── about.js           # About the company
│   └── contact.js         # Order Now / Contact form
├── styles/
│   └── globals.css        # Tailwind + custom CSS
├── public/                # Static assets (add favicon, images here)
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## ⚙️ Configuration (Before Going Live)

### 1. Update Phone Number
Search and replace `XXXXXXXXXX` with your real phone number (digits only, no spaces):
- `components/FloatingButtons.js`
- `components/Footer.js`
- `pages/index.js`
- `pages/contact.js`

**Example:** `91XXXXXXXXXX` → `919876543210`

### 2. Update Google Maps Embed
In `pages/index.js`, `pages/areas.js`, and `pages/contact.js`, replace the Maps `src` URL with your exact plant/business location embed from [Google Maps](https://maps.google.com).

### 3. Add Logo / Favicon
- Place `favicon.ico` in `/public/`
- Add logo image in `/public/logo.png` and update `Navbar.js`

---

## 🚀 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Any Node.js Server
```bash
npm run build
npm start
# Runs on port 3000 by default
```

---

## 🔮 Future-Ready Structure

The codebase is structured to support:

| Feature | Where to Add |
|---|---|
| Online Payments (Razorpay/UPI) | `pages/contact.js` → replace WhatsApp form |
| Subscription Plans | New page `pages/subscribe.js` |
| Order Tracking Dashboard | New page `pages/dashboard.js` |
| Location-based Delivery Zones | `pages/areas.js` + API route |
| Admin Panel | `pages/admin/` folder |
| Backend API | `pages/api/` folder (Next.js API routes) |

---

## 📱 Features

- ✅ Mobile-first responsive layout
- ✅ Sticky transparent→white Navbar on scroll
- ✅ Floating WhatsApp order button (animated)
- ✅ Floating Call button with pulse ring animation
- ✅ WhatsApp order form (pre-filled message)
- ✅ Google Maps embedded on Home, Areas, Contact
- ✅ 6-section service pages with SEO metadata
- ✅ Scroll-triggered fade-up animations
- ✅ Water-themed hero with animated bubbles
- ✅ Wave SVG section dividers
- ✅ Poppins font, blue/white palette
- ✅ Deployment-ready (Vercel / Node.js)

---

## 🎨 Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `aqua-900` | `#0c4a6e` | Dark headings, footer bg |
| `aqua-700` | `#0369a1` | Buttons, borders |
| `aqua-500` | `#0ea5e9` | Accents |
| `aqua-300` | `#7dd3fc` | Light accents |
| `aqua-50`  | `#f0f9ff` | Section backgrounds |

---

*Built for KD Aqua, Bhind, Madhya Pradesh. © 2024*
