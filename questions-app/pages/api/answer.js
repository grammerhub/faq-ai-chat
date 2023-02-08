// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Creates a fetch request to beam api and returns answer back based on query given
export default async function handler(req, res) {
  const response = await fetch('https://beam.slai.io/b7dpa', {
    method: 'POST',
    headers: {
      // authorization value to gain access to beam api end point
      'Authorization': process.env.AUTHORIZATION,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      // question to be asked to beam api
      'query': req.body.query,
    })
  });

  const data = await response.json()
  const {pred} = data

  // returns answer information to frontend
  res.status(200).json(pred)

}

