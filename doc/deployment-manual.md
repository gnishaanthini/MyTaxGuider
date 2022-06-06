# Deploy MyTaxGuider

## :bookmark_tabs: Table of Contents

- [Deploy MyTaxGuider](#deploy-mytaxguider)
  - [:bookmark_tabs: Table of Contents](#bookmark_tabs-table-of-contents)
  - [:dart: Project Description](#dart-project-description)
  - [:white_check_mark: Instruction manual for compiling](#white_check_mark-instruction-manual-for-compiling)
      - [Development Mode (Client-Server at same time)](#development-mode-client-server-at-same-time)
      - [Development Mode (Client only)](#development-mode-client-only)
      - [Development Mode (Server only)](#development-mode-server-only)
  - [:pushpin: Our Deployment strategy](#pushpin-our-deployment-strategy)
    - [Client](#client)
    - [Server](#server)
    - [Database](#database)
  - [:rocket: Deploy To Heroku](#rocket-deploy-to-heroku)

## :dart: Project Description
A web based **Tax Management App** built with *MySQL*, *Express*, *React* and *Node*  

**1. Front-end**
* React
* Axios
* Bootstrap
* HTML & CSS
  
**1. Back-end**
* Node
* Express
* MySQL
* JSON Web Tokens 

## :white_check_mark: Instruction manual for compiling

1. Rename the .env.example file to .env and fill with your environment variables. 
```sh
DB_HOST= <your database server>
DB_PORT= <your database server port>
DB_USER= <your database server user>
DB_DATABASE= <your database server databse>
DB_PASSWORD= <your database server database password>

JWT_SECRET= <your jwt encryption key>
JWT_LIFETIME= <your jwt lifetime>

PORT= <your port that node-express server listens to>
```
- [Keys Generator](https://www.allkeysgenerator.com/)

2. Install back-end dependencies
```sh
npm install
```

3. Install front-end dependencies
```sh
npm run install-client
```

#### Development Mode (Client-Server at same time)
```sh
npm start
```
- client will open at [http://localhost:3000](http://localhost:3000)
- server will open at [http://localhost:PORT](http://localhost:5500)

#### Development Mode (Client only)
```sh
npm run client
```

#### Development Mode (Server only)
```sh
npm run server
```

## :pushpin: Our Deployment strategy
**:rocket: [Demo](https://mytaxguider.herokuapp.com):rocket:**

### Client
As staticly served by the back-end server. 
```
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})
```

### Server
- Hosted by **[heroku](https://www.heroku.com)**

### Database
- Hosted by **[freemysqlhosting](https://www.freemysqlhosting.net)** ( :sparkles: *5mb free MySQL solution* )

## :rocket: Deploy To Heroku
1. [install heroku cli](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
2. [heroku login](https://id.heroku.com/login)
3. 
```sh
rm -rf .git
git init
git add .
git commit -m "first commit"
```
4. 
```sh
heroku create nameOfTheApp
```
5. add env variables using heroku nameOfTheApp settings
6. 
```sh
git remote -v
git push heroku main/master
```