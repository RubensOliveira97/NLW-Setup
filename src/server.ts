import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'


const prisma = new PrismaClient()

async function bootstrap() {
  const app = Fastify({
    logger: false,
  })

  app.register(cors);


  app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits;
  })
  

  await app.listen({ port: 3333 }).then(()=>{
    console.log('Running')
  })
}

bootstrap()