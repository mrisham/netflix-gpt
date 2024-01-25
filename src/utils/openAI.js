import OpenAI from "openai";
// import { OPENAI_KEY } from "./contants";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default openai;
