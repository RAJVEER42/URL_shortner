Got it 🚀 You want me to create the **best possible README.md** for your `URL_shortner` project (based on the folder structure I saw in your screenshot).

Here’s a **professional, well-structured README** you can use directly 👇

---

```markdown
# 🔗 URL Shortener

A simple and efficient **URL Shortener** built with **Node.js, Express, PostgreSQL (via Drizzle ORM)**, and authentication middleware.  
It allows users to shorten long URLs, manage them easily, and access analytics securely.

---

## 📂 Project Structure

```

URL\_shortner/
├── db/                # Database configuration & migrations
├── middlewares/       # Authentication & custom middlewares
├── models/            # Database models
├── routes/            # Express routes (user, URL, auth, etc.)
├── services/          # Business logic (shortening, user services)
├── utils/             # Utility functions (helpers, tokens, etc.)
├── validation/        # Request & token validation
├── drizzle.config.js  # Drizzle ORM configuration
├── index.js           # App entry point
├── package.json       # Dependencies & scripts
└── .env               # Environment variables

````

---

## ⚡ Features

- 🔑 **User Authentication** (JWT-based with middleware protection)  
- ✂️ **Shorten Long URLs** into short, shareable links  
- 📊 **Click Analytics** (track usage of shortened links)  
- 🛡 **Secure API** with request & token validation  
- 🗄 **Database Support** using **PostgreSQL** and **Drizzle ORM**  
- 🚀 Modular & scalable folder structure  

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL with Drizzle ORM  
- **Authentication:** JWT (JSON Web Token)  
- **Validation:** Custom validators (Joi/Zod if used)  
- **Dev Tools:** Docker, Git, pnpm  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/RAJVEER42/URL_shortner.git
cd URL_shortner
````

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=8000
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key
```

### 4. Run database migrations (with Drizzle)

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit push
```

### 5. Start the development server

```bash
pnpm start
```

---

## 📡 API Endpoints

### 🔑 Auth

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → Login and get JWT

### 👤 User

* `GET /api/users/me` → Get logged-in user details (protected)

### 🔗 URL Shortener

* `POST /api/urls` → Shorten a new URL (protected)
* `GET /api/urls/:id` → Redirect to original URL
* `GET /api/urls` → List all shortened URLs for user

---

## 🚧 Roadmap

* [ ] Add role-based access (Admin / User)
* [ ] Add analytics dashboard with charts
* [ ] Enable custom short URL aliases
* [ ] Deploy with Docker & CI/CD pipeline

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a Pull Request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute with attribution.

---

## 👨‍💻 Author

**Rajveer Bishnoi** ✨

* GitHub: [@RAJVEER42](https://github.com/RAJVEER42)
* LinkedIn: [Rajveer Bishnoi](https://www.linkedin.com/in/rajveer-bishnoi-576b62356/)

---


