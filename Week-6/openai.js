import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // replace it with your api key
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
  prompt: promptInput, //prompt input
  n: 2, // no. of outputs
  size: "300x300", //size of image
});
