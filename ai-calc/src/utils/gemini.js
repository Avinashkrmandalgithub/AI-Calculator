export const generateAiResponse = async (question) => {
  const res = await fetch("http://localhost:5000/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `You are a math tutor. Solve the word problem step by step with short and clear steps. Avoid markdown, and end with a concise final answer.

Format:
Step 1: ...
Step 2: ...
...
Final Answer:
...

Question:
${question}`,
    }),
  });

  const data = await res.json();
  return data.response;
};
