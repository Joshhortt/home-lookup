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
---
## External API's
### Mapbox 
Create account -> Get Token 
```URL
  https://www.mapbox.com/
```
**Create Token**
- Give it a name e.g. (home-lookup)
- After deploy (optional) insert your URL in case you want Token restrictions applied.
- Create Token
**Access Token**
- Copy & Paste (Key)
**Local environment variables** 
- Paste key into `.env.local` file of your project.
---
### Firebase 
Authentication -& Google Places 
```URL
  https://firebase.google.com/
```
**Create Project**
- Give it a name e.g. (home-lookup)
- Enable Google Analytics on this project is optional (Recommended).
- Click Create and then Continue. 
- After loading It will take you to the Project's Dashboard.
- Go to left side Menu **Build -> Authentication - Let's start**
- Choose sign-in providers (Email, Google, Github, Yahoo and so on..).
- Enable -> Save -> then **add new provider**
**Access Project settings**
- Go to upper-right corner in settings.
**General**
- Copy Web API key | project ID | project ID + firbaseapp.com
**Local environment variables**
- Paste key into `.env.local` file of your project.
**Service accounts**
- Below click on **generate new private key** -> **generate key**
- It will download a 'JSON' file. You can paste it into your projects root directory
- Go to the file you just downloaded and copy the `private_key` + `client_email`
- Paste those keys into `.env.local` file of your project.
---
### Google APIs 
Authentication & Google Places 
```URL
  https://console.developers.google.com/
```
**Search Project**
- See if project ID matches and is correct.
**API & Services**
- Go to Library
**We need to enable 3 different services**
- Places API - Enable ! Maps Javascript API - Enable | Geocoding API - Enable
**API & Services activated**
- Check if you have all three serviçes activated
**Note that:**
- You might have to register before all these steps on Google Cloud Free tier.
### Cloudinary 

Image Hosting 

```URL
  https://cloudinary.com/
```
**Dashboard**
- Go to **Account Details** 
- Copy **API Secret** | and | **API Key** | and | **Cloud Name** | and then
- paste those into your `.env.local` file at the root of the `./` directory.
---
### Heroku

Database

```URL
  https://heroku.com/
```
**Dashboard**
- Go to **New** --> **Create new app** 
**Overview**
- Installed add-ons --> Configure add-ons 
- Go to **ass-ons search bar** and look for **Heroku postgres**
- Choose your Plan name e.g. **Hobby Dev - Free** --> **Submit Order Form**
- After The add-on heroku-postgresql has been installed go to:
**Settings**
- Go to **Config Vars** --> **Reveal Config Vars** it gives you a connection string
- Copy and then paste into your `.env.local` file at the root of the `./` directory.

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

- To run firebase, mapbox and cloudinary you will need to add the following
- environment variables to your `.env.local` file at the root of the `./` directory.

```
NEXT_PUBLIC_MAPBOX_API_TOKEN="mapbox API Token goes here.."

NEXT_PUBLIC_FIREBASE_API_KEY="web api key goes here"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="project_ID.firbaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="project id goes here.."
FIREBASE_CLIENT_EMAIL="client email goes here.."
FIREBASE_PRIVATE_KEY="private key goes here.."

CLOUDINARY_SECRET="API Secret goes here.."
NEXT_PUBLIC_CLOUDINARY_KEY="API Key goes here.."
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="cloud name goes here.."

DATABASE_URL="your 'postgres://s.... ' database string goes here..."
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





