// Supabase client for future server-side order storage
// Fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null

export async function saveOrderToSupabase(order) {
  if (!supabase) {
    console.warn('Supabase is not configured yet. Skipping Supabase save.')
    return
  }

  const { id, createdAt, total, items } = order

  const { error: orderError } = await supabase.from('orders').insert([
    {
      id,
      created_at: createdAt,
      total,
    },
  ])

  if (orderError) {
    console.error('Failed to insert order into Supabase', orderError)
    return
  }

  if (!items || !items.length) return

  const { error: itemsError } = await supabase.from('order_items').insert(
    items.map((item) => ({
      order_id: id,
      product_id: item.productId || item.id || '',
      name: item.name || '',
      quantity: item.quantity || 0,
      price: item.price || 0,
    }))
  )

  if (itemsError) {
    console.error('Failed to insert order items into Supabase', itemsError)
  }
}
