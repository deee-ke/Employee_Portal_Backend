//import json server
const jsonServer = require('json-server')

//create json-server
const employeeServer = jsonServer.create()

//set path for json files
const router = jsonServer.router('db.json')

//middleware
const middleware = jsonServer.defaults()

//server use middleware and router
employeeServer.use(middleware)
employeeServer.use(router)

//setup the port
const port = 3000 || process.env.PORT 

employeeServer.listen(port,()=>{
    console.log(`Employee Server running successfully at ${port}`);
})