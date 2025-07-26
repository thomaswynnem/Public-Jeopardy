# 🎮 Mini Jeopardy

Mini Jeopardy is a trivia game inspired by *Jeopardy!* — built with the **MERN stack** (MongoDB, Express, React, Node.js), featuring a custom `useReducer` state engine, JWT authentication, and GPT‑powered quiz generation. It's designed for smooth gameplay, crisp UI, and modular backend control.

👥 *Built in collaboration with Yitong*

---

## 🚀 Features

* 🎯 **Interactive 5×6 Jeopardy board**
* 🧠 **Answer feedback** with instant visual cues
* 🔒 **JWT‑based login / signup system**
* 🤖 **GPT‑powered quiz creation** from any prompt
* 📈 **Live scoring** based on question values
* 🔁 **Full loop:** Home -> Create → Play → Score → Home
* ⚡ **Smart data caching** to reduce backend strain

---

## 🧱 Tech Stack

| Layer                 | Tech Used                                       |
| --------------------- | ----------------------------------------------- |
| 🖥️ **Frontend**      | React (CRA), React Router v6, Styled‑Components  |
| 🔁 **State Engine**   | `useReducer` + Context API                      |
| 🧪 **Quiz Generator** | OpenAI API (GPT‑o4-mini-high)                   |
| 🌐 **Backend**        | Express.js + Node.js                            |
| 🛢️ **Database**      | MongoDB Atlas                                    |
| 🔐 **Auth**           | JWT‑based authentication                        |

---

## 🧩 Game Flow

1. **Start Screen**
2. **Game Board**
3. **Question View**
4. **Finish Screen** (score summary + restart button)

All state transitions are managed by a global reducer and synced with React Router views for a seamless user experience.

---

## 💻 Development Highlights

* ⚙️ Built a **custom reducer engine** for complete game logic
* ☁️ Integrated **MongoDB** to store quizzes, users, and scores
* 🔐 Implemented **JWT authentication** (Sign up / Log in)
* 🤖 Leveraged **OpenAI API** to generate quiz structures on the fly
* 🧼 Adopted a **modular folder structure** (routes, models, controllers)
* 🚀 **Cached question data** to avoid redundant API / DB calls

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mini-jeopardy.git
cd mini-jeopardy
```

### 2. Backend setup

```bash
cd backend
npm install
```

### 3. Create a `.env` file

> ⚠️ **You must provide your own credentials**
> Never commit `.env` — keep it listed in `.gitignore`.

```env
# .env (example)

# MongoDB URI
MONGODB_URI=your_mongodb_connection_string

# Backend port
PORT=3001

# JWT Auth
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1h

# OpenAI (for quiz generation)
OPENAI_API_KEY=your_openai_api_key
```

### 4. Start the backend server

```bash
npm start
```

### 5. Frontend setup

```bash
cd ../frontend
npm install
npm start
```

---


## 🙋 About the Creator

**Thomas Mitchell**
GitHub – [@thomaswynnem](https://github.com/thomaswynnem)

A **MERN‑powered trivia engine** built for clean UI, real‑time logic, and scalable backend architecture.

---

## ✅ Optional Enhancements

* 📡 **Deploy** instructions (Render, Vercel, Netlify, etc.)
* 🧪 **Test coverage** / unit tests
* 🔧 **Admin panel** for custom quiz management
* 🧩 **Multiplayer mode** or real‑time lobby (WebSocket ready)
---

Enjoy playing Mini Jeopardy! 🎉
