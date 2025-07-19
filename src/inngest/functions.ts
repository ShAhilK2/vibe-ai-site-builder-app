
import { createAgent, openai } from '@inngest/agent-kit';
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {

    // wait for Download Step
    const codeWriterAgent = createAgent({
      name: 'code-agent',
      system:
        "You are an expert next.js developer.you write raedable ,maintable code.You write simple React and next js snippets. ",
      model: openai({model : "gpt-4o"}),

    });
    const { output } = await codeWriterAgent.run(
      `Write the folling snippets ${event.data.value}`,
    );
    console.log(output);


    return { output};
  },
);