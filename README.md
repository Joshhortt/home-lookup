# Home Lookup 🏠

A Full-stack Home Lookup application.

#### By _**Josh Hortt**_
version: 03/11/2022

## Home Lookup 🎧 🔊 | [Live Link](https://vercel.com/)
## Technologies Used

* JavaScript
* React.js
* Next.js
* Tailwind
* Prisma
* Postgres
* TypeGraphQL
* Apollo Server & Apollo Client
* Firebase
* Auth
* Hooks
* Mapbox
* Google Places
* Cloudinary
* Vercel
* Visual Studio Code

## External API's

### Mapbox 

Create account -> Get Token 

```URL
  https://www.mapbox.com/
```
* Create Token
- Give it a name e.g. (home-lookup)
- After deploy (optional) insert your URL in case you want Token restrictions applied.
- Create Token
* Access Token
- Copy & Paste (Key)
* Local environment variables 
- Paste key into `.env.local` file of your project.
---

### Firebase 

Authentication -& Google Places 

```URL
  https://firebase.google.com/
```
* Create Project
- Give it a name e.g. (home-lookup)
- Enable Google Analytics on this project is optional (Recommended).
- Click Create and then Continue. After loading It will take you to the Project's Dashboard.
- Go to left side Menu *Build -> Authentication - Let's start*.
- Choose sign-in providers (Email, Google, Github, Yahoo and so on..). - *Enable -> Save*. then *add new provider*.
* Access Project settings
- Go to upper-right corner in settings.
- Copy Web API key | project ID |
* Local environment variables 
- Paste key into `.env.local` file of your project.

---
## Setup Locally / Installation Requirements

Clone the project

```bash
  git clone https://github.com/Joshhortt/home-lookup.git
```

Go to the project directory

```bash
  cd home-lookup
```

### Environment Variables

To run firebase, mapbox and cloudinary you will need to add the following environment variables to your `.env.local` file at the root of the `./` directory.

```
NEXT_PUBLIC_MAPBOX_API_TOKEN=""

NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
FIREBASE_CLIENT_EMAIL=""
FIREBASE_PRIVATE_KEY=""

CLOUDINARY_SECRET=""
NEXT_PUBLIC_CLOUDINARY_KEY=""
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""

DATABASE_URL=""
```

Go to the root directory

```bash
  cd ....
```

Install dependencies

```bash
  npm install 

  or
  
  yarn install
```

Start the server

```bash
  npm run start

  or 

  yarn run
```

---

## Known Bugs
Due to time constraints the site may not scale perfectly on every device.

## Support and contact details
If you have any questions or find any issues with this web-application, get in touch.
My email is: joshhortt@yahoo.com

### License
**MIT License** Copyright (c) 2022 Josh Hortt

# Project Demo 
<img src='' />





