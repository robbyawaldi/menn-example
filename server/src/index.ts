import cors from "cors"
import express from "express"
import member from './routes/member'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const main = async () => {
    const app = express()
    app.use(cors({
        origin: "*",
        credentials: true
    }))

    app.use(express.json())

    app.use('/member', member)

    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('Database Connected');
    });

    app.listen(parseInt(process.env.PORT), () => {
        console.log("server started on port " + process.env.PORT)
    })
}

main().catch((err) => {
    console.error(err)
})