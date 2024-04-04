const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/db")
const userRoutes = require("./routes/userRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const productRoutes = require("./routes/productRoutes")

const { notFound, errorHandler } = require("./middlewares/errorMiddleware")
const cors=require("cors");
dotenv.config()
connectDB()
const app =express();

app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});


app.use(`/user`, userRoutes)
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.listen(8080, console.log(`server is running on port 8080`));