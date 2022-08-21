import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
  const client = serverSupabaseClient(event)
  const { data, error } = await client
    .from('notes')
    .select(`id, content`)
    .eq('user', user.id)
  if (error) {
    throw error
  }
  return data
})
