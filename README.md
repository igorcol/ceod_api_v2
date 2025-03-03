# 🎯 **CEOD API v2**  

🚀 **An API to query registrants of state-level events for a philosophical and philanthropic youth group.** 🚀  

## 🎯 **About the Project**
The **CEOD API v2** is the new version of the API used to manage the **CEOD** event.  
It has been **completely rewritten** in **TypeScript**, bringing a **more organized, modular, and scalable** structure. 

## 📎 **Detailed About**
With the evolution of my studies in TypeScript, I decided to rebuild the CEOD API from scratch, which was previously developed in JavaScript with a structure that was not very intuitive and difficult to maintain.

The v1 version had disorganized code, low scalability, and did not follow good development practices. With this in mind, I rewrote everything using TypeScript, applying best practices, modularizing the architecture, and making the API more robust, secure, and easy to maintain.

Now, the CEOD API v2 is fully scalable, follows cleaner and more organized code, and is ready to grow with the event! 🚀🔥

---

![Node.js](https://img.shields.io/badge/Node.js-16+-green?style=flat-square&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4+-blue?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=flat-square&logo=mongodb)
![Express.js](https://img.shields.io/badge/Express.js-4+-black?style=flat-square&logo=express)
![GreatMusic](https://img.shields.io/badge/GreatMusic-Spotify-green?style=flat-square&logo=spotify)

--- 

🔄 **Differences from the previous version (`CEOD API v1`)**:
- ❌ `v1` was written in **JavaScript** and had a disorganized structure.
- ✅ `v2` uses **TypeScript**, following **best practices** and modern standards.
- ✅ **Safer, cleaner, and easier to maintain** code.
- ✅ **Connection with MongoDB** to store registrant data.
- ⬜ Automation in **XLSX → JSON → MongoDB** conversion. ( Will be implemented in future versions )

---

## 🚀 **Main Technologies**
- **Node.js** + **TypeScript**
- **Express.js** – Framework for REST APIs
- **MongoDB** – NoSQL database for storing registrants
- **Mongoose** – ODM for database manipulation

---

## 📦 **Installation**
1️⃣ **Clone this repository**:
```bash
git clone https://github.com/igorcol/ceod_api_v2.git
```
2️⃣ **Access the project directory**:
```bash
cd ceod_api_v2
```
3️⃣ **Install dependencies**:
```bash
npm install
```

4️⃣ **Configure the `.env`** (based on `.env.example`):

5️⃣ **Run the API**:
```bash
npm run dev
```
🎉 **Now the API is running at** `http://localhost:3030`

---

## 🔗 **Available Routes**

### 👥 **Users**
- `GET /users` → Lists all event registrants.
- `GET /users/emails` → Lists all event registrants emails.
- `GET /users/:id` → Fetches a registrant by ID.
- `PATCH /users/:id` → Updates the user's presence.

### 📥 **Database Control**
- `POST /export-json` → Exports JSON data into MongoDB.
- `DELETE /drop-db` 

### 📌 **MISC**
- `GET /health` → Checks if the API is running correctly.

---
