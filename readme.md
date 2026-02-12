# 🏦 Bank Management System

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A comprehensive full-stack banking application for managing accounts, transactions, and user profiles.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About The Project

Bank Management System is a full-stack web application that provides a secure and user-friendly platform for managing bank accounts, processing transactions, and tracking financial activities. Built with modern web technologies, it offers a seamless experience for both customers and administrators.

---

## ✨ Features

- 🔐 **Secure Authentication** - User registration and login with password encryption
- 💳 **Account Management** - Create and manage multiple bank accounts
- 💰 **Transaction Processing** - Deposit, withdraw, and transfer funds
- 📊 **Transaction History** - View detailed transaction records and statements
- 👤 **User Profiles** - Manage personal information and account settings
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates** - Instant balance and transaction confirmations
- 🔍 **Account Search** - Find and filter accounts and transactions
- 📈 **Financial Dashboard** - Visual overview of account statistics

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive user interfaces
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS3** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Tools & Libraries
- **npm** - Package manager
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

---

## 📦 Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (Local or Atlas) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/bank-management-system.git

# Navigate to the project directory
cd bank-management-system
```

### Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies (if in separate folder)
cd client
npm install
cd ..
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/bank-management
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bank-management

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Other Settings
LOG_LEVEL=info
```

---

## 🚀 Getting Started

### Start MongoDB

**Local MongoDB:**
```bash
# On Windows
mongod

# On macOS
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

**MongoDB Atlas:**
- Create an account at [mongodb.com](https://www.mongodb.com)
- Create a cluster and get your connection string
- Update the `MONGODB_URI` in your `.env` file

### Run the Application

```bash
# Start the backend server (from root directory)
npm start

# In another terminal, start the frontend (if separate)
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

---

## 📁 Project Structure

```
bank-management-system/
├── src/
│   ├── models/              # MongoDB schemas
│   │   ├── User.js
│   │   └── Account.js
│   ├── routes/              # API routes
│   │   ├── auth.js
│   │   ├── accounts.js
│   │   └── transactions.js
│   ├── controllers/         # Business logic
│   ├── middleware/          # Authentication & validation
│   └── utils/               # Helper functions
├── client/                  # React frontend (if separate)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
├── server.js               # Main server file
├── package.json            # Project dependencies
├── .env                    # Environment variables
├── .gitignore              # Git ignore rules
└── README.md              # Documentation
```

---

## 🔌 API Documentation

### Authentication Endpoints

```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
POST   /api/auth/logout        - Logout user
GET    /api/auth/profile       - Get user profile
```

### Account Endpoints

```
GET    /api/accounts           - Get all accounts
GET    /api/accounts/:id       - Get account details
POST   /api/accounts           - Create new account
PUT    /api/accounts/:id       - Update account
DELETE /api/accounts/:id       - Delete account
```

### Transaction Endpoints

```
GET    /api/transactions       - Get all transactions
GET    /api/transactions/:id   - Get transaction details
POST   /api/transactions/deposit    - Deposit funds
POST   /api/transactions/withdraw   - Withdraw funds
POST   /api/transactions/transfer   - Transfer funds
```

---

## 📝 Usage Example

### 1. Register a New User

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secure_password123"
  }'
```

### 2. Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "secure_password123"
  }'
```

### 3. Create an Account

```bash
curl -X POST http://localhost:5000/api/accounts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "accountType": "Savings",
    "initialBalance": 5000
  }'
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/bank-management-system.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Add comments where necessary
   - Follow the project's code style

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues

### Code Style Guidelines

- Use consistent indentation (2 spaces)
- Follow camelCase for variables and functions
- Use descriptive variable names
- Add JSDoc comments for functions

---

## 📋 Development Checklist

- [ ] Clone repository
- [ ] Install dependencies
- [ ] Configure `.env` file
- [ ] Start MongoDB
- [ ] Run backend server
- [ ] Run frontend server
- [ ] Create test account
- [ ] Test all features

---

## 🐛 Common Issues & Solutions

### MongoDB Connection Error

**Problem**: `MongoServerSelectionError`

**Solution**:
- Ensure MongoDB is running
- Check your `MONGODB_URI` in `.env`
- Verify network connectivity for MongoDB Atlas

### Port Already in Use

**Problem**: `EADDRINUSE: address already in use :::5000`

**Solution**:
```bash
# Find and kill process on port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

### Missing Dependencies

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support

If you encounter any issues or have questions:

- 📧 Email: support@bankmanagement.com
- 💬 GitHub Issues: [Create an Issue](https://github.com/yourusername/bank-management-system/issues)
- 📖 Documentation: Check the [Wiki](https://github.com/yourusername/bank-management-system/wiki)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License (c) 2024 Bank Management System
```

---

## 🙏 Acknowledgments

- 💡 Inspired by real-world banking systems
- 📚 Built with modern web technologies
- 👥 Thanks to all contributors
- 🌟 Special thanks to the open-source community

---

<div align="center">

### ⭐ If you find this project helpful, please give it a star!

Made with ❤️ by [Your Name](https://github.com/yourusername)

[Back to Top](#-bank-management-system)

</div>