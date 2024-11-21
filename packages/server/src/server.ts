import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8080


app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
})

app.get('/', (req: Request, res: Response) => {
	res.send("just a response")
})
