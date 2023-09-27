import cors from 'cors'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import http from 'http'

// import mongoose from 'mongoose'
// import morgan from 'morgan'
import { RegisterRoutes } from '../generated/tsoa/routes'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(morgan('tiny'))

// app.use(Authorizer as RequestHandler) // must allow health check route to skip authorization
// app.use(QuerySetter as RequestHandler) // must allow health check route to skip query setting
// app.use(BodySanitizer as RequestHandler) // must allow health check route to skip body sanitization

RegisterRoutes(app)

app.use((_req: Request, res: Response) => res.sendStatus(404))
// app.use(ErrorHandler)

const main = async (port: number): Promise<void> => {
  let server: http.Server
  try {
    // await mongoose.connect(process.env.DB_CNX || '')
    server = app.listen(port, () => console.info('Server On', port))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  const serverClose = (): void => {
    console.info('HTTP server closed')
    process.exit(0)
  }

  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received: closing HTTP server')
    server.close(serverClose)
  })
}

void main('PORT' in process.env ? Number(process.env.PORT) : 9000)
