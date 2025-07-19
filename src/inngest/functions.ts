
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {

    // wait for Download Step
    await step.sleep("wait-a-moment","30s");
    // wait for Transcribe Step
    await step.sleep("wait-a-moment","20s");
    // wait for Summary Step 
    await step.sleep("wait-a-moment","5s");
    return { message: `Hello ${event.data.email}!` };
  },
);