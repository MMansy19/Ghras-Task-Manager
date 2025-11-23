# Ghras Task Manager

<div align="center">

[![Version](https://img.shields.io/badge/Version-1.0.0-green)](https://github.com/your-repo/ghras-admin)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

**Advanced Task Management System for Volunteer Teams at Ghras Al-Ilm Academy**

[Quick Start](#-quick-start) • [Features](#-key-features) • [Documentation](#-documentation) • [Support](#-support)

</div>

---

## 📖 Overview

**Ghras Task Manager** is a professional SaaS platform built with modern technologies to manage volunteer team tasks at Ghras Al-Ilm Academy. The system provides an interactive Kanban board, comprehensive user management, and advanced analytics - all in Arabic with first-class RTL support.

### 🎯 Why This System?

Replaces manual processes (such as Google Sheets and WhatsApp groups) with a centralized system that provides:
- ✅ Accurate tracking of tasks and accomplishments
- ✅ Fair distribution of work among teams
- ✅ Real-time reports and analytics
- ✅ Complete transparency in performance
- ✅ Visual achievements to motivate volunteers

---

## ✨ Key Features

### 🎯 Kanban Task System
```
New → Scheduled → In Progress → Issue → Completed → Documentation
```
- **Drag & Drop** with full RTL support
- **Automatic logging** of start and completion dates
- **Interactive cards** with priorities and deadlines
- **Real-time updates** with Optimistic UI

### 👥 User Management
- Interactive table with search and filtering
- Add and edit users
- Multiple roles (Admin, Supervisor, Volunteer)
- Team assignment and volunteer hours tracking

### 📊 Analytics Dashboard
- Pie and bar charts
- Volunteer ranking by achievement
- Quick summaries of key metrics
- Export-ready reports

### 🎨 Superior User Experience
- **Dark/Light mode** automatic switching
- **Responsive design** (Mobile-First)
- **Full RTL** in every detail
- **Instant notifications** for every action
- **Smooth animations**

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and pnpm

### Installation

```powershell
# 1. Clone the project
git clone https://github.com/your-repo/ghras-admin.git
cd ghras-admin

# 2. Install packages
pnpm install

# 3. Setup environment
Copy-Item .env.example .env

# 4. Run the application
pnpm run dev
```

The application will run on **http://localhost:3000** 🎉

### Additional Commands

```powershell
pnpm run build      # Build production version
pnpm run preview    # Preview production build
pnpm run test       # Run tests
pnpm run lint       # Code quality check
```

📘 **For more details**: Read the [Quick Start Guide](./docs/SETUP.md)

---

## 🛠️ Technology Stack

<div align="center">

| Category | Technology | Version |
|----------|------------|---------|
| **Frontend** | React + TypeScript | 18.2 / 5.3 |
| **Build Tool** | Vite | 5.0 |
| **Styling** | Tailwind CSS | 3.4 |
| **State** | TanStack Query | 5.0 |
| **Routing** | React Router | 6.21 |
| **DnD** | @hello-pangea/dnd | 16.5 |
| **Charts** | Recharts | 2.10 |
| **Validation** | Zod | 3.22 |
| **Notifications** | React Hot Toast | 2.4 |
| **Testing** | Vitest + Testing Library | Latest |

</div>

---

## 📁 Project Structure

```
ghras-admin/
├── 📄 index.html              # RTL entry point
├── 📦 package.json            # Dependencies
├── ⚙️  vite.config.ts         # Vite configuration
├── 🎨 tailwind.config.js     # Design system
├── 📝 tsconfig.json          # TypeScript strict mode
├── 📚 src/
│   ├── 🚀 main.tsx           # Entry point + React Query
│   ├── 🎨 index.css          # Complete design system
│   ├── 📋 types.ts           # Zod Schemas + Types
│   │
│   ├── 📡 api/
│   │   └── mockApi.ts        # Mock API (ready for replacement)
│   │
│   ├── 🎣 hooks/
│   │   ├── useRole.ts        # Role management
│   │   └── useDarkMode.ts    # Dark mode
│   │
│   ├── 🧩 components/
│   │   ├── ErrorBoundary.tsx # Error handling
│   │   ├── ToastProvider.tsx # Notifications
│   │   ├── Modal.tsx         # Modal dialogs
│   │   ├── LoadingSpinner.tsx
│   │   └── EmptyState.tsx
│   │
│   ├── 🏗️  layouts/
│   │   └── AppLayout.tsx     # Main layout
│   │
│   └── 📄 pages/
│       ├── Home.tsx           # Role selection
│       ├── TeamDashboard.tsx  # Kanban Board
│       ├── UsersManagement.tsx
│       └── Statistics.tsx
│
├── 📖 README.md              # This file
├── 📘 docs/SETUP.md          # Setup guide
└── 📊 docs/PROJECT_SUMMARY.md # Comprehensive summary
```

---

## 🎯 Usage Guide

### 1️⃣ Select Your Role
- **Admin** → Full permissions
- **Supervisor** → Task and user management
- **Volunteer** → Personal task management

### 2️⃣ Task Management (Kanban)
- Select your team from the sidebar
- Drag tasks between columns
- Click ➕ to add a task (Admin/Supervisor)
- Click ✏️ to edit or 🗑️ to delete

### 3️⃣ User Management (Admin/Supervisor)
- Use search to find users
- Add new accounts with specific roles
- Enable or disable accounts with one click

### 4️⃣ View Analytics
- Task distribution by status
- Team and volunteer performance
- Key metrics summaries

---

## 🎨 Design System

### Colors
- **Primary**: `#059669` (Emerald green)
- **Background**: `#f8fafc` / `#1e293b` (Light/Dark)
- **Task States**: 6 distinct colors
- **Priorities**: 4 color-coded levels

### Typography
- **Cairo** - Professional Arabic font from Google Fonts
- Scales from xs to 6xl

### Components
- Buttons (btn, btn-primary, btn-secondary, btn-danger)
- Cards (card, card-hover)
- Badges (badge with state variants)
- RTL-formatted tables
- Modal dialogs (Modal with Portal)

📘 **For full details**: Read the [Project Summary](./docs/PROJECT_SUMMARY.md)

---

## 🔐 Permission System (RBAC)

### Admin
✅ All permissions  
✅ User management  
✅ Task management  
✅ View analytics  
✅ All teams

### Supervisor
✅ User management  
✅ Task management  
✅ View analytics  
✅ All teams

### Volunteer
✅ View team tasks  
✅ Move tasks  
✅ Log work hours  
❌ Cannot create/delete tasks  
❌ No management access

---

## 📱 Responsive Design

| Device | Size | Features |
|--------|------|----------|
| 📱 **Mobile** | < 768px | Dropdown menu, vertical columns |
| 📲 **Tablet** | 768-1024px | Fixed sidebar, medium grid |
| 💻 **Desktop** | > 1024px | Full layout, 6 columns |

---

## 🔄 Backend Integration

The application is ready for integration with a Laravel backend:

### Integration Steps

1. **Update environment variables**
```bash
# In .env
VITE_API_URL=http://localhost:8000/api
```

2. **Replace Mock API**
```typescript
// Before (Mock)
export const fetchTasks = async () => {
  await delay();
  return MOCK_TASKS;
};

// After (Real API)
export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  const data = await response.json();
  return data.map(task => TaskSchema.parse(task));
};
```

3. **Add Authentication**
```typescript
// Add JWT tokens
const token = localStorage.getItem('token');
headers: { 'Authorization': `Bearer ${token}` }
```

### Laravel API Requirements
- Laravel 11+ with Sanctum
- MySQL database
- RESTful API endpoints
- Zod schema validation

📘 **For more details**: See [Project Documentation](./docs/Project%20Documentation.md)

---

## 🧪 Testing

```powershell
# Run all tests
pnpm run test

# With coverage
pnpm run test -- --coverage

# Watch mode
pnpm run test -- --watch
```

### Test Coverage
- ✅ Core React components
- ✅ Custom hooks
- ✅ API functions
- ✅ Zod validation
- ⏳ E2E tests (in development)

---

## 📚 التوثيق

- 📄 [README](./README.md) - هذا الملف
- 📘 [دليل البدء السريع](./SETUP.md)
- 📊 [ملخص المشروع](./PROJECT_SUMMARY.md)
- 📖 [توثيق المشروع الكامل](./Project%20Documentation.md)
- 📝 [تعليمات التطوير](./AI_DEVELOPMENT_INSTRUCTIONS.md)
- 🎨 [تعليمات التصميم](./AI_Design_Instructions.md)

---

## 🤝 المساهمة

نرحب بالمساهمات! للبدء:

1. **Fork** المشروع
2. أنشئ **فرع** للميزة الجديدة
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** التغييرات
   ```bash
   git commit -m 'إضافة ميزة رائعة'
   ```
4. **Push** للفرع
   ```bash
   git push origin feature/amazing-feature
   ```
5. افتح **Pull Request**

### معايير المساهمة
- ✅ كود TypeScript صارم
- ✅ اختبارات لكل ميزة جديدة
- ✅ توثيق بالعربية
- ✅ RTL في كل مكان
- ✅ اتباع نمط الكود الحالي

---

## 📄 الترخيص

هذا المشروع مطور لـ **أكاديمية غراس العلم**.  
جميع الحقوق محفوظة © 2025

---

## 🙏 شكر وتقدير

- **فريق أكاديمية غراس العلم** - الرؤية والتوجيه
- **React Team** - إطار عمل رائع
- **Tailwind Labs** - نظام تصميم متميز
- **TanStack** - أدوات قوية لإدارة الحالة
- **المجتمع المفتوح** - جميع المكتبات المستخدمة

---

## 💬 الدعم

### للحصول على المساعدة:
1. 📖 اقرأ [دليل البدء السريع](./SETUP.md)
2. 📊 راجع [ملخص المشروع](./PROJECT_SUMMARY.md)
3. 🐛 افتح [Issue على GitHub](https://github.com/your-repo/issues)
4. 💬 تواصل عبر Telegram: `@ghras_support`

### روابط سريعة
- 🌐 [الموقع الرسمي](https://ghras.com)
- 📧 [البريد الإلكتروني](mailto:support@ghras.com)
- 📱 [قناة Telegram](https://t.me/ghras_academy)

---

<div align="center">

**صُنع بـ ❤️ لأكاديمية غراس العلم**

**النسخة**: 1.0.0 | **آخر تحديث**: نوفمبر 2025

[⬆ العودة للأعلى](#غراس-مدير-المهام--gharas-task-manager)

</div>
- مقارنة: بين أعضاء أو فرق، مع تصنيفات تلقائية.

### 4. لوحة الإحصائيات والتقارير (Analytics)
- تحليل نشاط: عدد المهام المنجزة، معدلات الالتزام.
- رسوم بيانية تفاعلية باستخدام Recharts.
- تصدير تقارير: PDF مع شعار الأكاديمية، Excel للبيانات الخام.

### 5. نظام الشهادات (Certificates Generator)
- تصميم قوالب شهادات رقمية (باستخدام HTML/CSS أو مكتبات مثل pdfmake).
- توليد تلقائي: بناءً على نقاط (مثل >80% = شهادة تميز).
- إرسال عبر البريد أو تحميل مباشر.

## 🛠️ المتطلبات التقنية

| القسم                     | التفاصيل                                        |
| ------------------------- | ----------------------------------------------- |
| **Frontend**              | Next.js (TypeScript) + Tailwind CSS + React Hook Form |
| **Backend**               | Node.js (Express) مع TypeORM أو Prisma          |
| **Database**              | PostgreSQL                                      |
| **Authentication**        | JWT + bcrypt للهاشينغ                          |
| **File Storage**          | AWS S3 أو Supabase                              |
| **Deployment**            | Vercel للـ Frontend، Render للـ Backend        |
| **Version Control**       | GitHub + GitHub Actions لـ CI/CD                |
| **Analytics & Charts**    | Recharts أو Chart.js                            |
| **Notifications**         | Nodemailer للبريد، Telegram API للإشعارات     |
| **Testing**               | Jest للوحدات، Cypress للـ End-to-End           |
| **Security**              | HTTPS, input validation بـ Joi, rate limiting   |

## 📈 المخرجات المتوقعة

- نظام ويب كامل مع صلاحيات: Admin, Team Leader, Member.
- واجهة responsive وسهلة الاستخدام.

## 🧠 المميزات الإضافية المقترحة

- سجل نشاط كامل لكل عضو (Activity Log).
- تقييم ذاتي مع مقارنة بالتقييم الإداري.
- تقويم متكامل للمواعيد والتذكيرات.

## 🚧 Backlog لـ Phase 1 (المرحلة الأولى)

كـ Backlog، نقسم المتطلبات إلى User Stories احترافية، مع Acceptance Criteria. التركيز على MVP (Minimum Viable Product).

### User Stories:

1. **كإداري، أريد إدارة الأعضاء**  
   - Acceptance: إضافة/تعديل/حذف أعضاء مع حقول (اسم، بريد، دور).  
   - Priority: High. Effort: 8 hours.

2. **كإداري، أريد تعيين مهام**  
   - Acceptance: إنشاء مهمة مع مسؤول، بديل، موعد، وزن نقاط.  
   - Priority: High. Effort: 12 hours.

3. **كعضو، أريد عرض مهامي**  
   - Acceptance: قائمة مهام، تحديث حالة، رفع ملفات.  
   - Priority: Medium. Effort: 10 hours.

4. **كإداري، أريد نظام تقييم**  
   - Acceptance: نموذج تقييم أسبوعي مع معايير، حساب نقاط تلقائي.  
   - Priority: High. Effort: 15 hours.

5. **كمستخدم، أريد تسجيل دخول آمن**  
   - Acceptance: JWT auth، reset password.  
   - Priority: Critical. Effort: 6 hours.

6. **كإداري، أريد تقارير**  
   - Acceptance: توليد PDF/Excel، رسوم بيانية.  
   - Priority: Medium. Effort: 10 hours.

7. **كإداري، أريد توليد شهادات**  
   - Acceptance: قوالب تلقائية بناءً على نقاط.  
   - Priority: Low. Effort: 8 hours.


## 🚀 خطة التطوير التفصيلية

كمدير خبير، إليك الخطة من التصميم إلى النشر. نفترض فريقاً من 3 مبرمجين (Frontend Dev, Backend Dev, Full-Stack Lead). الجدول الزمني لـ 8 أسابيع (Phase 1).

### Milestones:

1. **Milestone 1: التصميم والتخطيط (أسبوع 1)**  
   - مهام: رسم Wireframes (بـ Figma)، تصميم Database Schema، كتابة API Specs (Swagger).  
   - مسؤول: Full-Stack Lead.  
   - Output: مستند تصميم، repo جاهز على GitHub.

2. **Milestone 2: بناء الـ Backend (أسابيع 2-3)**  
   - مهام: إعداد Server (Express), Database (PostgreSQL), Auth (JWT), API لـ Users/Tasks/Evaluations.  
   - مسؤول: Backend Dev.  
   - Testing: Unit tests بـ Jest.

3. **Milestone 3: بناء الـ Frontend (أسابيع 4-5)**  
   - مهام: صفحات Dashboard, Member Panel, Forms بـ React Hook Form, Charts بـ Recharts.  
   - مسؤول: Frontend Dev.  
   - Integration: Connect to Backend APIs.

4. **Milestone 4: التكامل والاختبار (أسبوع 6)**  
   - مهام: استيراد Sheets، Notifications (Nodemailer), Security checks.  
   - مسؤول: Full-Stack Lead.  
   - Testing: E2E بـ Cypress، Bug fixing.

5. **Milestone 5: النشر والصيانة (أسابيع 7-8)**  
   - مهام: Deploy على Vercel/Render، CI/CD setup، User manual.  
   - مسؤول: جميع الفريق.  
   - Output: موقع حي، monitoring بـ Sentry.

### جدول التنفيذ الزمني

| الأسبوع | Milestone | مهام رئيسية | مسؤول |
|---------|-----------|-------------|--------|
| 1      | تصميم   | Wireframes, Schema | Lead  |
| 2-3    | Backend | APIs, DB, Auth    | Backend |
| 4-5    | Frontend| UI/UX, Integration| Frontend|
| 6      | تكامل   | Testing, Fixes    | Lead  |
| 7-8    | نشر     | Deploy, Docs      | All   |

### تعليمات للفريق (كسينيور مدير):
- استخدم Agile: Daily stand-ups، Sprint reviews كل أسبوعين.
- Code Standards: ESLint، Prettier، Commit conventions (Conventional Commits).
- Security First: Validate inputs، Use HTTPS، Store secrets in env.
- Documentation: JSDoc للكود، API docs بـ Swagger.
- Review Process: Pull Requests مع reviews من Lead قبل Merge.
- إذا واجهت مشكلة، استشرني فوراً لتجنب التأخير.

## 📝 Prompt احترافي شامل للتطوير

"Build a professional full-stack web app named Ghras Admin for Ghras Al-Ilm academy. Replace Google Sheets with automated system for member management, task assignment, performance evaluation, scoring, reports, and certificates. Tech: Next.js (TypeScript) + Node.js (Express) + PostgreSQL + Tailwind CSS + JWT. Features: Admin dashboard (manage users/tasks/criteria), Member panel (view tasks/submit progress), Auto-scoring algorithm, Analytics charts (Recharts), PDF/Excel exports, Certificate generator (pdfmake), Notifications (Nodemailer/Telegram). Import initial data from Google Sheets API. Ensure responsive design, security (Joi validation, rate limiting), and deploy on Vercel/Render with CI/CD via GitHub Actions. Provide setup instructions and tests (Jest/Cypress)."

لأي استفسارات، تواصل معي. جاهز للبدء!