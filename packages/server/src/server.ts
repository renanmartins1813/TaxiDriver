import express, { Express, Request, Response } from "express"
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
app.use(cors())

const port = process.env.PORT || 8080


app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
})

app.get('/', (req: Request, res: Response) => {
	res.send("just a response")
})
