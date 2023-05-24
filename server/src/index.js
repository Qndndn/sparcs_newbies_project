import express from "express";
import dotenv from "dotenv";

/* DO NOT REMOVE */
/* Configure Environment Variables */
if (process.env.ENVIRONMENT === "DEVELOPMENT") {
	dotenv.config({ path: ".env.development" })
} else {
	dotenv.config({ path: ".env.production" })
}


const app = express();
const port = process.env.EXPRESS_PORT;

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.listen(port, () => {
	console.log(`Express Listening @ http://localhost:${ port }`);
});


const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:", {
	useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
	() => { console.log('[Mongoose] is connected') },
	(err) => { console.log('[Mongoose] is connecting err', err) }
)