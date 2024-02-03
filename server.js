import express from "express" 
import router from "./router.js"
const app = express()


app.use(router)



// app.use('/about-us',)
app.listen(3000,()=>{console.log("listening on")})





