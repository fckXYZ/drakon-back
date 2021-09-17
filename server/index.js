const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const config = require('./config');

const { default: AdminBro } = require('admin-bro')
const adminBroOptions = require('./routers/admin.options')
const buildAdminRouter = require('./routers/admin.router')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3003');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const postRouter = require('./routers/api/post.router')
const socialListRouter = require('./routers/api/socialList.router')
const docsRouter = require('./routers/api/docs.router')
const videoRouter = require('./routers/api/video.router')
const musicRouter = require('./routers/api/albums.router')
const membersRouter = require('./routers/api/member.router')
const affiliateProgramRouter = require('./routers/api/affiliateProgram.router')
const faqRouter = require('./routers/api/faq.router')
const settingsRouter = require('./routers/api/settings.router')
const photosRouter = require('./routers/api/photoalbum.router')


app
  .use('/api/news', postRouter)
  .use('/api/socialList', socialListRouter)
  .use('/api/docs', docsRouter)
  .use('/api/video', videoRouter)
  .use('/api/music', musicRouter)
  .use('/api/members', membersRouter)
  .use('/api/affiliateProgram', affiliateProgramRouter)
  .use('/api/faq', faqRouter)
  .use('/api/settings', settingsRouter)
  .use('/api/photos', photosRouter)

// Handle production

if (process.env.NODE_ENV === 'production'){
  // Static folder
  app.use(express.static(__dirname + '/public'))

  // Handle SPA
  app.get(/^(?!.*(admin|uploads))/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const run = async () => {
  try{
    await mongoose.connect(process.env.MONGO_DB_ADDRESS, {
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
