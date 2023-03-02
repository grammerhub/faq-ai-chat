/// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as cheerio from 'cheerio'
import axios from 'axios'
import { Configuration, OpenAIApi }  from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// Creates a fetch request to beam api and returns answer back based on query given
export default async function handler(req, res) {

  const fetchText = async () => {
    try {
          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            temperature: 0,
            max_tokens: 7,
          });
          console.log('the response is' , response)

          return response
        // const response = await axios.get('https://www.gardendesign.com/seeds/starting.html#:~:text=Plants%20have%20basic%20needs%20of,to%20develop%20into%20healthy%20plants')

        // const html = response.data;

        // const $ = cheerio.load(html);

        // const text = $.text();

        // const filteredText = text.match(/\w+/g);

        // return filteredText;
          
    } catch (error) {
        console.error(error)
    }
  };

  const {data}= await fetchText();
  console.log(data)
  res.status(200).json( data.choices[0])
}
