#  [PetPals](https://petpals-masai.vercel.app/)


## Introduction

PetPals aimed to create an inclusive community for pet lovers, offering a platform where users can adopt pets, find information on pet care, and connect with other pet owners. Our choice to develop this website stems from a recognized need for a dedicated space where potential pet owners can find the right companion while ensuring pets find.

## Project Type

- **Full Stack**

## Deployed App
 [PetPals](https://petpals-masai.vercel.app/)

## Directory Structure
```
my-app/
├─ backend/
│  ├─ config/
│  │  └─ db.js
│  ├─ middleware/
│  │  ├─ access.middleware.js
│  │  └─ auth.middleware.js
│  ├─ model/
│  │  ├─ application.model.js
│  │  ├─ blacklist.model.js
│  │  ├─ pet.model.js
│  │  └─ user.model.js
│  ├─ routes/
│  │  ├─ application.routes.js
│  │  ├─ pet.routes.js
│  │  └─ user.routes.js
│  └─ index.js
└─ frontend/
   ├─ src/
   │  ├─ assets/
   │  │  └─ img/
   │  ├─ Components/
   │  │  ├─ Article.js
   │  │  ├─ FirstDiv.jsx
   │  │  │  ├─ Footer.jsx
   │  │  ├─ LoginForm.js
   │  │  ├─ Menu.jsx
   │  │  ├─ Navbar.jsx
   │  │  ├─ Review.js
   │  │  └─ SignUp.jsx
   │  ├─ CSS/
   │  │  ├─ Application.css
   │  │  ├─ Article.css
   │  │  ├─ Login.css
   │  │  ├─ Navbar.css
   │  │  ├─ Review.css
   │  │  └─ Signup.css
   │  ├─ Pages/
   │  │  ├─ About.jsx
   │  │  ├─ Adopt.jsx
   │  │  ├─ Contact.jsx
   │  │  ├─ Homepage.jsx
   │  │  ├─ Login.jsx
   │  │  ├─ MyApplication.jsx
   │  │  └─ Signup.jsx
   │  ├─ Redux/
   │  │  ├─ action.js
   │  │  ├─ actionTypes.js
   │  │  ├─ reducer.js
   │  │  └─ store.js
   │  ├─ Routing/
   │  │  ├─ AllRoutes.jsx
   │  │  └─ PrivateRouting.jsx
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  ├─ api.js
   │  └─ index.html
   └─ Readme.md

```


## Video Walkthrough


https://youtu.be/LVnCBrtfXA0






- **Codebase Walkthrough:** [1-5 minutes video link]

## Features

- **Dynamic searching for pets:** Advanced search and filters features for searching pets.
- **Responsive Design:** Mobile-first, responsive design for a consistent cross-device experience.
- **Streamlined Checkout:** Simplified one-page checkout process to enhance user satisfaction.
- **Admin Panel:** Admin panel to handle backend and do basics crud operation.

## Design Decisions and Assumptions

### Design Decisions

- **React and Context API for State Management:** Chose React for its component-based architecture, facilitating reusable UI components, and Context API to manage global state like the 
fetching pets ensuring a seamless user experience across the application.
- **Integration of viewing status of an application:** Implemented a fetures to view the applicatioin status of applied application.

### Assumptions



- **Simplified Adoption Process:** Assumed users prefer a fast and hassle-free adoption process, leading to the implementation of a streamlined adoption process to reduce steps and potential friction points.

- **Expectation of Real-time Updates:** Anticipated that users expect immediate feedback and updates within the adoption process, influencing the decision to implement real-time status updates on available pets and adoption requests, enhancing the overall adoption experience.

## Installation & Getting Started

Quickly set up and start the project with these steps:

1. **Install the Project:**
   Clone and install the project's dependencies:
   ```bash
   git clone https://github.com/sumit1921184/PetPals.git
   for backend
   cd backend
   npm install

   for frontend
   cd frontend
   npm install
## Credentials

Provide user credentials for authenticated pages:

- **URL:** [https://petpals-masai.vercel.app/login](https://petpals-masai.vercel.app/login)
- **User Login:** virat@gmail.com
- **Password:** virat

## APIs Used

If your application relies on external APIs, document them and include any necessary links or references.

- **API Base URL:** [https://petpals-2-261d.onrender.com/](https://petpals-2-261d.onrender.com/)

## API Endpoints

Pets
- `/pets/:id` - Retrieve a specific pet by its ID.
- `GET /pets` - Retrieve all available pets with optional pagination.
- `POST` /pets - Add a new pet (requires admin access).
- `PATCH /pets/:id` - Update details of a pet with the specified ID (requires admin access).
- `DELETE /pets/:id` - Delete a pet with the specified ID (requires admin access).
- `Users`
- `POST /users/register` - Register a new user.
- `POST /users/login` - Login a user.
- `POST /users/logout` - Logout a user.
- `GET /users` - Retrieve all users (requires admin access).
- `GET /users/:id` - Retrieve a specific user by ID (requires admin access).
- `DELETE /users/:id` - Delete a user by ID (requires admin access).
- `PATCH /users/:id` - Update user details by ID (requires admin access).
Applications
- `POST /applications/:petId` - Apply for adopting a pet with the specified ID.
- `GET /applications` - Retrieve all applications (requires admin access).
- `PATCH /applications/update/:id` - Update details of an application with the specified ID (requires admin access).
- `DELETE /applications/delete/:id` - Delete an application with the specified ID (requires admin access).
- `GET /applications/getApp` - Retrieve applications of the authenticated user.
## Technology Stack
 **Frontend:**
- **React:** For building the user interface.
- **Chakra UI:** for making componenets.
- **Tailwind CSS:** For styling.
- **React redux:** For managing state.

**Backend:**
- **Mongodb:** For database.
- **Node Js:** For backend.
- **Express Js** For making routes.

## ScreenShots  

## Home Page
![home](https://github.com/heyyrahul/python-magician-6789/assets/79692865/28405382-84b2-4bc6-a100-112fd12fa802)

## Login
![login](https://github.com/heyyrahul/python-magician-6789/assets/79692865/46c6cc49-c0e3-4e26-80b2-22356dc62b1c)

## Cart
![cart](https://github.com/heyyrahul/python-magician-6789/assets/79692865/6cb206ac-9e23-44f6-b130-382303f1bf23)
## Payment
![payment and address](https://github.com/heyyrahul/python-magician-6789/assets/79692865/36f22e4c-00fe-42ad-952e-352a81cb0d93)
## Order History
![orderhistory](https://github.com/heyyrahul/python-magician-6789/assets/79692865/317cf7a7-cb6b-4a4e-ae4b-c85877fa166d)
## Admin Dashboard
![adminDasbhboard](https://github.com/heyyrahul/python-magician-6789/assets/79692865/08fdc07a-353d-4dc6-9549-924106d5237d)

## Product Page
![Product Page](https://github.com/heyyrahul/python-magician-6789/assets/79692865/a1d6ec4f-7dd1-46ab-a703-e4a071d32faa)
## Users/Traffic page
![Users _ Traffic](https://github.com/heyyrahul/python-magician-6789/assets/79692865/08b8085b-c583-40e9-a3ff-fe769393fc94)

## Contributors
## [Sumit Kumar Jha](https://www.linkedin.com/in/hellomohdasif/)
## [Rahul Kumar](https://epicbazaar.vercel.app/)
## [Anshu Kumari](https://www.linkedin.com/in/rantu-bangal/)
## [Sachin Mohite](https://www.linkedin.com/in/sujeet-kumar-2b4750195/)


