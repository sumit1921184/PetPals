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



https://github.com/heyyrahul/vivid-roll-405/assets/79692865/75322f54-30ab-4262-ab2b-dd15eeacd9fb








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
## For Users

Provide user credentials for authenticated pages:

- **URL:** [https://petpals-masai.vercel.app/login](https://petpals-masai.vercel.app/login)
- **User Login:** virat@gmail.com
- **Password:** virat

## For Admin
- **URL:** [https://pet-pals-admin.vercel.app/](https://pet-pals-admin.vercel.app/)
- **Admin Login:** 
- **Password:**
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
![home](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/ec272e88-8d0e-4a28-b335-a5cac7915d52)

## Login
![login](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/a8d4f475-ea27-46b5-82be-d82a4b4b95df)

## Signup
![signup](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/61afe689-8613-42a2-98dd-4f19b69c6c72)
## Adopt
![adopt](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/5f45f8e4-8218-4e21-94ff-0709619cdf98)
## Application Page
![application](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/aaa48f25-4013-40e2-bf1c-f49f993123d0)
## Admin Login
![localhost_5173_adminlogin (1)](https://github.com/heyyrahul/PetPalsAdmin/assets/79692865/a6da65b4-2c78-46bd-b809-b5c9667fc4ec)

## Admin Dashboard
![admin Dashboard](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/2474fe9d-6725-4939-9bfd-d3856fa6d29d)
## Admin Pet Page
![admin pet page](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/87d27a60-7654-41cf-8b25-5a6c5cb8c957)

## Admin Pet&User Add Page
![admin pet and user add page](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/0668e461-7d7b-4772-b54c-f94655ce6ec6)


## Admin Users Page
![admin userlist](https://github.com/heyyrahul/vivid-roll-405/assets/79692865/f04d4b35-6fe7-494a-bc70-4eddbc107f8f)

## Contributors
## [Sumit Kumar Jha](https://www.linkedin.com/in/sumit-kumar-jha-050156217/)
## [Rahul Kumar](https://www.linkedin.com/in/heyyrahul/)
## [Anshu Kumari](https://www.linkedin.com/in/anshu-kumari-5a4806193/)
## [Sachin Mohite](https://www.linkedin.com/in/sachin-mohite-0893a7203/)


