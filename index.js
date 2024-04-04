const express = require("express");
require("dotenv").config();
const { connection } = require("./configs/db");
const userRoutes = require("./routes/userRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const productRoutes = require("./routes/productRoutes")
const cors=require("cors");
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

app.listen(8080, async()=>{
  try {
    await connection
    console.log("Connected to DB")
  } catch (err) {
    console.log("Error connecting to DB")
    console.log(err)
  }
  console.log("server is running on port 8080");
})