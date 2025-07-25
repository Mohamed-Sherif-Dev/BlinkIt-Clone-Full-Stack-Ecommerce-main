import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import  connectDB  from './config/connectDB.js'
import userRouter from './routes/user.route.js'
import categoryRouter from './routes/category.route.js'
import uploadRouter from './routes/upload.route.js'
import subCategoryRouter from './routes/subCategory.route.js'
import productRouter from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'
import addressRouter from './routes/address.route.js'
import orderRouter from './routes/order.route.js'

const app = express()
app.use(cors({
    credentials: true,
    origin:  process.env.FRONTEND_URL
}))



app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))



const PORT = 3000 || process.PORT


app.get("/",(req , res)=>{
        /// Server to Clint
        res.json({
            message : "Server is running " + PORT
        })
})


app.use("/api/user",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/file",uploadRouter)
app.use("/api/subCategory",subCategoryRouter)
app.use("/api/product" , productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/address",addressRouter)
app.use("/api/order",orderRouter)


 connectDB()
// 
//.then(()=>{
//     app.listen(PORT,()=>{
// console.log("Server is running successfully",PORT)
// })
// })

module.exports = app;