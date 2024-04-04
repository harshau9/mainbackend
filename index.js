const express = require("express");
require("dotenv").config();
const connectDB = require("./configs/db")
const userRoutes = require("./routes/userRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const productRoutes = require("./routes/productRoutes")
const cors=require("cors");
const app =express();

app.use(cors());
app.use(express.json());
connectDB()
app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});


app.use(`/user`, userRoutes)
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server is running on port ${PORT}`));