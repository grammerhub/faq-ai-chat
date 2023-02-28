/// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as cheerio from 'cheerio'
import axios from 'axios'

// Creates a fetch request to beam api and returns answer back based on query given
export default async function handler(req, res) {

  const fetchText = async () => {
    try {
        const response = await axios.get('https://www.gardendesign.com/seeds/starting.html#:~:text=Plants%20have%20basic%20needs%20of,to%20develop%20into%20healthy%20plants')

        const html = response.data;

        const $ = cheerio.load(html);

        const text = $.text();

        const filteredText = text.match(/\w+/g);

        return filteredText;

    } catch (error) {
        throw error;
    }
  };

  const text = await fetchText();

  res.status(200).json({text: text})
 
}