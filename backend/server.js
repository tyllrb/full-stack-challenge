import express from 'express'
import employeeRoute from 'controllers/employeeRoute'

const app = express()
const port = process.argv[2] || 1991

employeeRoute(app)

const server = app.listen(port, () => {
	const { address, port } = server.address()
	console.info(`Employee performance review server started! \nServer: ${address}\nPort: ${port}`)
})
