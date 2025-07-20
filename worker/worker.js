export default {
  async fetch(request, env, ctx) {
    if (request.method === "POST" && new URL(request.url).pathname === "/api/generate") {
      const { input } = await request.json();
      const payload = {
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a helpful code assistant called Script Whisperer." },
          { role: "user", content: input }
        ],
        temperature: 0.7
      };
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      return new Response(JSON.stringify({
        output: data.choices?.[0]?.message?.content || "No output generated."
      }), { headers: { "Content-Type": "application/json" } });
    }
    return new Response("Not Found", { status: 404 });
  }
};
