# ShopEase 🛒

Welcome to ShopEase, a full-stack eCommerce web application built using React, Node.js, Express, and MongoDB. ShopEase offers a seamless shopping experience with features such as secure user authentication, dynamic product management, and integrated payment processing.

## Features ✨

- **Responsive Front-End**: Developed using React.js, styled-components, and Material-UI for a modern and user-friendly interface.
- **RESTful APIs**: Implemented with Node.js and Express.js to handle CRUD operations for products, users, and orders.
- **Scalable Data Storage**: Integrated MongoDB for efficient and scalable data management.
- **Secure Authentication**: JWT-based authentication to ensure user privacy and secure transactions.
- **Payment Processing**: Configured Stripe payment gateway for secure and reliable transactions.
- **State Management**: Utilized Redux for efficient state management and enhanced application performance.

## Some Images 🎥

![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/d1481dcb-cd75-4018-b2c3-2c365979058f)
![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/dba78993-cc4f-4fef-a9b7-6d18b7f94d27)
![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/d2950bcd-c43c-401c-8dff-460d4fcf8c67)
![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/01716638-3b5c-478b-ac1e-20b599a7f3a1)
![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/45b0b8d1-d593-4336-be54-3f21708aaeee)
![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/3b0878a7-294d-45e1-b469-83bc6c009f2b)
![image](https://github.com/Shivam-Dubey18/ShopEase-first-draft/assets/152854367/ac472abb-04c5-4bf0-a1d1-b1f3d3dca79c)


## Getting Started 🚀

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
- Stripe Account

### Installation

1. Clone the repository
   `git clone https://github.com/YourUsername/ShopEase.git`

2. Navigate to the project directory
   `cd ShopEase`

3. Install dependencies for the client
   ```bash
   cd client
   npm install
   ```

4. Install dependencies for the server
   ```bash
   cd api
   npm install
   ```

5. Create a `.env` file in the server directory and add your MongoDB URI and Stripe API keys
   ```
   MONGO_URI=your_mongo_uri
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_jwt_secret
   ```

6. Start the development servers
   - For the client:
     ```bash
     cd client
     npm start
     ```
   - For the server:
     ```bash
     cd api
     npm start
     ```

## Usage 💻

- **Browse Products**: View a variety of products on the homepage.
- **Product Details**: Click on a product to see detailed information.
- **Add to Cart**: Add items to your shopping cart and proceed to checkout.
- **Secure Payment**: Complete purchases using the integrated Stripe payment gateway.
- **User Authentication**: Sign up or log in to manage your orders and account information.

## Built With 🛠️

- **React** - JavaScript library for building user interfaces
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database for scalable data storage
- **Material-UI** - React component library for styling
- **styled-components** - Library for component-level styling
- **Redux** - State management library
- **Stripe** - Payment processing platform
- **JWT** - JSON Web Tokens for authentication

## Folder Structure 📂

```
ShopEase/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── pages/
│   │   └── ...
│   ├── .env
│   ├── package.json
│   └── ...
│
├── api/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── README.md
└── ...
```
