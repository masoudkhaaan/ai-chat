import { streamText } from "ai";
import { groq } from "@ai-sdk/groq";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: groq("llama-3.1-8b-instant"),
    system: "هر چی پرسیدن جواب بده",
    messages: messages,
  });

  return result.toUIMessageStreamResponse();
}
