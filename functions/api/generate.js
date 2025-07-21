export async function onRequestPost(context) {
    try {
      const body = await context.request.json();
      const prompt = body.prompt || "No prompt";
  
      // Here’s where your logic goes (this is a placeholder)
      const result = `You whispered: ${prompt}`;
  
      return new Response(JSON.stringify({ result }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      return new Response("Invalid request", { status: 400 });
    }
  }
  