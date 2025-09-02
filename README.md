
# 🚀 URL Shortener: From Long to Short in a Flash!

Welcome to **URL Shortener**, a super fast and secure service that turns long, clunky links into short, shareable ones!  
It's more than just a simple tool—it’s a powerful backend solution built to handle all your link-shortening needs, complete with real-time analytics and robust authentication.

---

## 🌟 Awesome Features

- 🔑 **Secure & Simple Authentication**: Log in with ease using modern JWT-based authentication.  
- ✂️ **Shorten Anything**: Turn any long URL into a bite-sized, custom short link.  
- 📊 **Smart Analytics**: Keep a pulse on your links with real-time click tracking and insights.  
- 🛡️ **Ironclad Security**: Our API is protected with **Zod validation** and robust middleware, keeping your data safe.  
- 🧩 **Modular & Maintainable**: The codebase is organized for clarity, making it a joy to work with and expand.  

---

## 🛠️ The Powerhouse Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL  
- **ORM**: Drizzle ORM  
- **Security**: JSON Web Tokens (JWT)  
- **Validation**: Zod  
- **DevOps**: Docker, pnpm  

---

## 📂 Project Playground: The Folder Structure

```

URL\_shortner/
├── db/                     # 🗃️ Database configs & migrations
│   ├── migrate.ts
│   └── index.js
├── middlewares/            # 🔐 Custom security layers
├── models/                 # 📄 The blueprint for our database tables
├── routes/                 # 🗺️ All the API routes live here
├── services/               # 🧠 Where the core logic is handled
├── utils/                  # 🔧 Our handy helper functions
├── validation/             # ✅ Input validation schemas
├── drizzle.config.js       # ⚙️ Drizzle ORM setup
├── index.js                # 🚀 The main entry point to the app
├── package.json            # 📦 Project dependencies
└── .env                    # 🤫 Your private environment variables

````

---

## 🏃‍♀️ Getting Started: Installation & Setup

Ready to dive in? Just follow these simple steps!

### 1. Clone the repository
```bash
git clone https://github.com/RAJVEER42/URL_shortner.git
cd URL_shortner
````

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure your environment

Create a `.env` file in the project's root folder and fill it with your details:

```env
PORT=8000
DATABASE_URL=postgres://user:password@host:port/database
JWT_SECRET=your_super_secret_jwt_key_that_is_at_least_32_characters_long
```

### 4. Run database migrations

This step sets up your database tables.

```bash
pnpm db:push
```

### 5. Start the development server

```bash
pnpm dev
```

The server will now be running at:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 📡 API Adventures: A Guide to the Endpoints

All endpoints are a journey that starts at `/api`.

### 🔐 Auth

| Endpoint         | Method | What it does            |
| ---------------- | ------ | ----------------------- |
| `/auth/register` | POST   | Sign up to get started! |
| `/auth/login`    | POST   | Log in and get a JWT.   |
| `/auth/logout`   | POST   | Safely log out.         |

---

### 👤 Users

| Endpoint    | Method | What it does              | Authentication |
| ----------- | ------ | ------------------------- | -------------- |
| `/users/me` | GET    | Get your profile details. | Bearer Token   |

---

### 🔗 URLs

| Endpoint           | Method | What it does                  | Authentication |
| ------------------ | ------ | ----------------------------- | -------------- |
| `/urls`            | POST   | Create a new short URL.       | Bearer Token   |
| `/urls/:shortCode` | GET    | Redirect to the original URL. | Public         |
| `/urls`            | GET    | See all your shortened URLs.  | Bearer Token   |

---

## 🚧 Roadmap

* [ ] Add comprehensive analytics dashboard with a UI
* [ ] Enable custom short URL aliases for users
* [ ] Implement rate limiting to prevent abuse
* [ ] Containerize the app with Docker and Docker Compose
* [ ] Add unit and integration tests

---

## 🤝 Contributing

We welcome contributions! Please feel free to open a pull request or an issue if you'd like to improve the project.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'feat: add new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to use and modify it!

---

## 👨‍💻 Author

**Rajveer Bishnoi**✨

* GitHub: [@RAJVEER42](https://github.com/RAJVEER42)
* LinkedIn: [Rajveer Bishnoi](https://www.linkedin.com/in/rajveer-bishnoi-576b62356/)

---
