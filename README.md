# Audiophile E-Commerce Website

A fully-functional, pixel-perfect e-commerce website for high-end audio equipment built with Next.js, Convex, and modern web technologies.

## 🚀 Live Demo

[Add your deployed link here]

## ✨ Features

- **Pixel-Perfect Design**: Responsive across mobile, tablet, and desktop breakpoints
- **Complete Checkout Flow**: Form validation, order processing, and confirmation emails
- **Shopping Cart**: Persistent cart with add/remove/update quantity functionality
- **Product Catalog**: Dynamic product pages with galleries and related items
- **Backend Integration**: Convex database for order storage and management
- **Email Notifications**: Professional HTML emails sent on order confirmation
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Convex
- **Email**: Nodemailer (Gmail SMTP)
- **Validation**: Zod
- **UI Components**: Shadcn UI + Custom Components
- **State Management**: React Context API
- **Notifications**: Sonner Toast

## 📋 Prerequisites

- Node.js 18+ and pnpm
- Gmail account for email sending (with App Password)
- Convex account ([convex.dev](https://convex.dev))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/audiophile-e-commerce.git
cd audiophile-e-commerce
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Convex
CONVEX_DEPLOYMENT=your-convex-deployment-url
NEXT_PUBLIC_CONVEX_URL=https://your-convex-project.convex.cloud

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 4. Configure Gmail for Email Sending

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App Passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
   - Use this as `EMAIL_PASS` in your `.env.local`

### 5. Set Up Convex

```bash
# Login to Convex
npx convex login

# Initialize Convex (if not already done)
npx convex dev

# Deploy Convex functions
npx convex deploy
```

### 6. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
audiophile-e-commerce/
├── src/
│   ├── app/
│   │   ├── _components/       # Homepage components
│   │   ├── checkout/          # Checkout page & components
│   │   ├── headphones/        # Category & product pages
│   │   ├── speakers/          # Category & product pages
│   │   ├── earphones/         # Category & product pages
│   │   ├── api/
│   │   │   └── send-order-email/  # Email API route
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/            # Reusable components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── CartContext.tsx   # Cart state management
│   │   └── ...
│   └── lib/
│       ├── mailer.ts         # Email template & sending logic
│       ├── constants.ts      # Product data & constants
│       └── utils.ts          # Utility functions
├── convex/
│   ├── schema.ts             # Database schema
│   ├── orders.ts             # Order mutations & queries
│   └── _generated/           # Auto-generated Convex files
└── public/
    ├── images/               # Product images
    └── assets/               # Static assets
```

## 🎨 Key Features Implementation

### Checkout Form

- **10 validated fields** with real-time error feedback
- **Zod schema validation** for all inputs
- **Edge case handling**: Invalid email, missing fields, duplicate submissions
- **Payment options**: e-Money or Cash on Delivery
- **Accessibility**: ARIA labels, keyboard navigation, focus states

### Order Processing

1. Form validation
2. Email confirmation sent (with fallback if fails)
3. Order saved to Convex database
4. Success modal displayed
5. Cart cleared on modal close
6. Redirect to homepage

### Email Template

- Responsive HTML design
- Branded with company colors
- Order summary with itemized list
- Shipping and contact details
- Unique order ID
- Professional formatting

### Cart Management

- Add/remove items
- Update quantities
- Persistent storage (localStorage)
- Real-time total calculation
- Responsive cart dialog

## 🗄️ Database Schema (Convex)

```typescript
orders: {
  // Customer Details
  name: string
  email: string
  phone: string

  // Shipping
  address: string
  city: string
  country: string
  zipCode: string

  // Payment
  paymentMethod: "e-Money" | "Cash on Delivery"
  eMoneyNumber?: string
  eMoneyPin?: string

  // Order Details
  items: Array<{name, price, amount, imageUrl}>
  subtotal: number
  shipping: number
  vat: number
  grandTotal: number

  // Metadata
  orderId: string
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: number
}
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Environment Variables on Vercel

Add these in your Vercel project settings:

- `CONVEX_DEPLOYMENT`
- `NEXT_PUBLIC_CONVEX_URL`
- `EMAIL_USER`
- `EMAIL_PASS`

### Deploy Convex

```bash
npx convex deploy --prod
```

## 🧪 Testing Checklist

- [ ] Add products to cart
- [ ] Update cart quantities
- [ ] Remove items from cart
- [ ] Navigate to checkout
- [ ] Fill out form with validation errors
- [ ] Submit valid form
- [ ] Verify email received
- [ ] Check order in Convex dashboard
- [ ] Test on mobile, tablet, desktop
- [ ] Test keyboard navigation
- [ ] Test with screen reader

## 📧 Email Template

See `src/lib/mailer.ts` for the full HTML email template. Key features:

- Responsive table-based layout
- Branded header with AUDIOPHILE logo
- Order summary with all items
- Subtotal, shipping, VAT, and grand total
- Shipping address
- Payment method details
- Professional footer

## 🎓 Stage 3 Requirements

This project fulfills all Stage 3 requirements:

- ✅ Pixel-perfect responsive design (mobile, tablet, desktop)
- ✅ Complete checkout with validation
- ✅ Order storage in Convex
- ✅ Transactional email confirmation
- ✅ Order confirmation page
- ✅ Accessibility features
- ✅ Edge case handling
- ✅ Clean, modular code

See `REQUIREMENTS_CHECKLIST.md` for detailed compliance report.

## 🤝 Contributing

This is a portfolio/learning project. Feel free to fork and experiment!

## 📝 License

MIT

## 🙏 Acknowledgments

- Design: [Frontend Mentor - Audiophile E-Commerce Challenge](https://www.frontendmentor.io/)
- Icons: Lucide React
- UI Components: Shadcn UI

---

Built with ❤️ using Next.js and Convex
