const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const apiKey = process.env.OPENAI_API_KEY;

app.post('/generate-joke', async (req, res) => {
  const { jokeType } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `Tell me a ${jokeType} joke.`,
        max_tokens: 50,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );
    res.json(response.data.choices[0].text.trim());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
