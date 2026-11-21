import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Get the Formspree endpoint from environment
  const formspreeEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT;

  console.log('Contact API called');
  console.log('Content-Type:', request.headers.get('content-type'));
  console.log('Formspree endpoint:', formspreeEndpoint);

  if (!formspreeEndpoint) {
    console.error('No Formspree endpoint configured');
    return new Response(
      JSON.stringify({ error: 'Form endpoint not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // Get raw body instead of formData to avoid Content-Type issues
    const body = await request.text();
    console.log('Request body received:', body.substring(0, 100));

    // Forward to Formspree with original headers
    console.log('Forwarding to Formspree:', formspreeEndpoint);
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': request.headers.get('content-type') || 'application/x-www-form-urlencoded'
      },
      body: body,
    });

    console.log('Formspree response status:', response.status);

    // Return success/error response
    if (response.status >= 200 && response.status < 400) {
      console.log('Form submission successful');
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      const text = await response.text();
      console.error('Formspree error response:', text);
      return new Response(
        JSON.stringify({ error: 'Form submission failed', details: text }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Form submission error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Form submission failed', details: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
