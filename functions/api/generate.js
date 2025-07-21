export async function onRequestPost({ request, env }) {
    try {
      const { input: prompt } = await request.json();
      
      if (!prompt?.trim()) {
        return new Response(JSON.stringify({ result: "Please provide a prompt." }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are Script Whisperer. Turn user ideas into useful scripts, code snippets, or structured content. Keep responses concise but practical.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });
  
      const data = await response.json();
      return new Response(JSON.stringify({ 
        result: data.choices[0].message.content 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      return new Response(JSON.stringify({ 
        result: "Error generating script. Please try again." 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }