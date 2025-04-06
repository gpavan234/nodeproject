require("dotenv").config()
const express = require("express");
const cors = require("cors");
const connectDB = require("../server/config/db")
const authRoutes = require("./routes/authroutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server started on Port ${PORT}`);
})