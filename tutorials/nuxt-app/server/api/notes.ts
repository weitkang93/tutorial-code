import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'
import { PrismaClient } from '@prisma/client'
const data = [
  { id: 0, email: 'matt@learnvue.co', content: 'My note 1' },
  { id: 1, email: 'matt@learnvue.co', content: 'Secret stuff' },
  { id: 2, email: 'matt@learnvue.co', content: 'Do not share with not matt' },
  { id: 3, email: 'notmatt@learnvue.co', content: 'Account #2' },
  { id: 4, email: 'notmatt@learnvue.co', content: 'mores tuff' },
]

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const client = serverSupabaseClient(event)

  const data = await prisma.notes.findMany({
    where: {
      user: user.id,
    },
  })
})
