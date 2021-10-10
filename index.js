const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const config = require('./server/config');

const { default: AdminBro } = require('admin-bro')
const adminBroOptions = require('./server/routers/admin.options')
const buildAdminRouter = require('./server/routers/admin.router')

const app = express()

app.use(bodyParser.json())
app.use(cors())
console.log(config.CORS_ADDR)
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.CORS_ADDR);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const postRouter = require('./server/routers/api/post.router')
const videoRouter = require('./server/routers/api/video.router')
const musicRouter = require('./server/routers/api/albums.router')
const membersRouter = require('./server/routers/api/member.router')
const photosRouter = require('./server/routers/api/photoalbum.router')
const aboutRouter = require('./server/routers/api/about.router')
const mailRouter = require('./server/routers/api/mail.router')
const settingsRouter = require('./server/routers/api/settings.router')

app
  .use('/api/news', postRouter)
  .use('/api/video', videoRouter)
  .use('/api/music', musicRouter)
  .use('/api/members', membersRouter)
  .use('/api/photos', photosRouter)
  .use('/api/about', aboutRouter)
  .use('/api/feedback', mailRouter)
  .use('/api/settings', settingsRouter)

// Handle production

// if (process.env.NODE_ENV === 'production'){
//   Static folder
  // app.use(express.static(__dirname + '/public'))
  //
  // Handle SPA
  // app.get(/^(?!.*(admin|uploads))/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
// }

const run = async () => {
  try{
    await mongoose.connect('mongodb://localhost:27017/drakon-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    global.__basedir = __dirname;

    console.log('Mongo DB connected!')

    const admin = new AdminBro(adminBroOptions)
    const adminRouter = buildAdminRouter(admin)

    app.use('/admin', adminRouter)

    app.use('/uploads', express.static('uploads'));

    app.listen(config.PORT, () => {
      console.log(`Up! Now listening to port: ${config.PORT}!`)
    })
  }catch (e){
    console.log(e)
  }
}

run()
