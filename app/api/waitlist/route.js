import { NextResponse } from 'next/server';
import { pool } from '../../../lib/db';

export async function POST(request) {
  try {
    const { firstName, lastName, email } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const result = await pool.query(
      'INSERT INTO waiting_list (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *',
      [firstName, lastName, email]
    );

    return NextResponse.json(
      { message: 'Successfully added to waitlist', data: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Database error:', error);
    
    if (error.code === '23505') { // Unique violation
      return NextResponse.json(
        { error: 'Email already exists in waitlist' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to add to waitlist' },
      { status: 500 }
    );
  }
} 