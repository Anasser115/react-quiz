const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 5000
const staticDir = path.resolve('./build') 

//set up static file server
app.use(express.static(staticDir));

// /create path to './index.html' ande use * to direct all paths there
app.get('/', (request,response) =>{
    response.sendFile(staticDir + 'index.html')
})

//  tell express server to listen to what port we are on
app.listen(port, ()=>console.log('server running on ',port))