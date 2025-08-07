import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { prompt, style_id, size } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Retrieve API key and host from environment variables
    // IMPORTANT: You need to set these in your Vercel project settings or .env.local file
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const rapidApiHost = process.env.RAPIDAPI_HOST;

    if (!rapidApiKey || !rapidApiHost) {
      console.error(
        'RAPIDAPI_KEY or RAPIDAPI_HOST environment variables are not set.'
      );
      return NextResponse.json(
        { error: 'Server configuration error: API keys missing.' },
        { status: 500 }
      );
    }

    const options = {
      method: 'POST',
      url: `https://${rapidApiHost}/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php`,
      headers: {
        'x-rapidapi-key': rapidApiKey,
        'x-rapidapi-host': rapidApiHost,
        'Content-Type': 'application/json',
      },
      data: {
        prompt,
        style_id: style_id || 4, // Use default if not provided
        size: size || '1-1', // Use default if not provided
      },
    };

    const response = await axios.request(options);
    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        'RapidAPI request failed:',
        error.response?.data || error.message
      );
      return NextResponse.json(
        {
          error:
            error.response?.data?.message ||
            'Failed to generate image from external API',
        },
        { status: error.response?.status || 500 }
      );
    }
    console.error('An unexpected error occurred in the API route:', error);
    return NextResponse.json(
      { error: 'An unexpected server error occurred.' },
      { status: 500 }
    );
  }
}
