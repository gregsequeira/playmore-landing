import { query } from '../../../lib/db';

export async function POST(request) {
  try {
    const { firstName, lastName, email } = await request.json();

    if (!firstName || !lastName || !email) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await query(
      'INSERT INTO waiting_list (first_name, last_name, email) VALUES ($1, $2, $3)',
      [firstName, lastName, email]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in signup:', error);
    
    if (error.code === '23505') { // Unique violation
      return new Response(JSON.stringify({ error: 'Email already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 