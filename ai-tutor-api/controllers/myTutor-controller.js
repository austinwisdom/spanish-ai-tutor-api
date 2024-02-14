const openAICall = require('../utilities/openAICall')
const { default: axios } = require('axios');
const OpenAI = require('openai')
require("dotenv").config()

const { OPENAI_API_KEY } = process.env
const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

const myTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a Spanish speaker from Spain and work as a professional language coach. Assisting non-Spanish speakers to practice speaking Spanish, learn Spanish grammar and vocabulary, and to study Spanish."

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompt
      },
      { role: "user", content: message },
    ],
    model: "gpt-3.5-turbo-0125",
    
  });
  console.log(completion.choices[0].message.content);

  // const response = openAICall()

  if (completion.choices[0].message.content) {
    const answer = completion.choices[0].message.content
    res.json({
        message: answer
    })
    } else {
        res.status(404).json("Unable to get AI res")
    }
}


module.exports = {
    myTutor
}