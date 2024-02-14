const openAICall = require('../utilities/openAICall')
const { default: axios } = require('axios');
const OpenAI = require('openai')
require("dotenv").config()

const { OPENAI_API_KEY } = process.env
const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

const myTutor = async (req, res) => {
  console.log(req.body)
  console.log(req.body?.message)

  const message = req?.data?.testMessage

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: "How do you say this is difficult in Spanish?" },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
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