const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;

// Database configuration
const db = require("./config/db");
const userRouter = require("./routes/users/userRouter");
db.connect();

// Middlewares
// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
dotenv.config();

// Routes configuration
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
	res.send("Nodejs started....");
});

app.listen(port, () => {
	console.log(`Server is running at the port ${port}`);
});
