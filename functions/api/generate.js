export async function handleRequest(request) {
    try {
      const { input: prompt } = await request.json();
  
      if (!prompt || prompt.trim() === "") {
        return new Response(
          JSON.stringify({ result: "You whispered: No prompt" }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
  
      const whisper = `You whispered: ${prompt}`;
  
      return new Response(JSON.stringify({ result: whisper }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
  