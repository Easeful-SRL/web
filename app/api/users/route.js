// import { db, products } from 'lib/db';
import { NextResponse } from 'next/server';
import { apiFetch } from '@/lib/utils/api.js';

export const dynamic = 'force-dynamic';

const usersFetchOptions = {
  service: 'users',
  credentials: 'include',
  headers: {
    Authorization: `Basic ${process.env.MONOLITH_API_TOKEN}`,
  },
};

export const GET = async (req, { params }) => {
  try {
    const options = { ...usersFetchOptions, method: 'GET' };
    const response = await apiFetch({options});
    const updatedResponse = { ...response };

    if (!response.ok) {
      console.log(response);
    }

    return NextResponse.json(updatedResponse.data || [], { status: updatedResponse.status });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: 'Request failed' }, { status: API_STATUSES.SERVER_ERROR });
  }
};
