const OpenAI = require('openai')
require("dotenv").config()

const { OPENAI_API_KEY } = process.env
const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

const hello = (_req, res) => {
    res.status(200).json("Welcome to conversation")
}


// Spanish conversation tutor for speaking practice
const spanishConversation = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a male Spanish language teacher named Maxi. You answer any questions that your student asks you. Be helpful and friendly. Because this is conversation practice, only speak in Spanish with your student!"

  try {
    console.log(message)
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

    if (completion.choices[0].message.content) {
      console.log(completion.choices[0].message.content);
      const answer = completion.choices[0].message.content
      res.json({
          message: answer
      })
      } else {
          res.status(404).json("Unable to get AI res")
      }

  } catch {
    console.error(error)
  }
  
}

// English conversation tutor for speaking practice
const englishConversation = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a male English language teacher named David. You answer any questions that your student asks you. Be helpful and friendly. Because this is conversation practice, only speak in English with your student!"

  try {
    console.log(message)
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

    if (completion.choices[0].message.content) {
      console.log(completion.choices[0].message.content);
      const answer = completion.choices[0].message.content
      res.json({
          message: answer
      })
      } else {
          res.status(404).json("Unable to get AI res")
      }

  } catch {
    console.error(error)
  }
  
}

// French conversation tutor for speaking practice
const frenchConversation = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a male French language teacher named Marvin. You answer any questions that your student asks you. Be helpful and friendly.  Because this is conversation practice, only speak in French with your student!"

  try {
    console.log(message)
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

    if (completion.choices[0].message.content) {
      console.log(completion.choices[0].message.content);
      const answer = completion.choices[0].message.content
      res.json({
          message: answer
      })
      } else {
          res.status(404).json("Unable to get AI res")
      }

  } catch {
    console.error(error)
  }
  
}

// German conversation tutor for speaking practice
const germanConversation = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a female German language teacher named Anna. You answer any questions that your student asks you. Be helpful and friendly.  Because this is conversation practice, only speak in German with your student!"

  try {
    console.log(message)
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

    if (completion.choices[0].message.content) {
      console.log(completion.choices[0].message.content);
      const answer = completion.choices[0].message.content
      res.json({
          message: answer
      })
      } else {
          res.status(404).json("Unable to get AI res")
      }

  } catch {
    console.error(error)
  }
  
}

// Japanese conversation tutor for speaking practice
const japaneseConversation = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a female Japanese language teacher named Yuki. You answer any questions that your student asks you. Be helpful and friendly.  Because this is conversation practice, only speak in Japanese with your student!"

  try {
    console.log(message)
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

    if (completion.choices[0].message.content) {
      console.log(completion.choices[0].message.content);
      const answer = completion.choices[0].message.content
      res.json({
          message: answer
      })
      } else {
          res.status(404).json("Unable to get AI res")
      }

  } catch {
    console.error(error)
  }
  
}

// Portuguese conversation tutor for speaking practice
const portugueseConversation = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a female Brazilian Portuguese language teacher named Isabela. You answer any questions that your student asks you. Be helpful and friendly.  Because this is conversation practice, only speak in Brazilian Portuguese with your student!"

  try {
    console.log(message)
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

    if (completion.choices[0].message.content) {
      console.log(completion.choices[0].message.content);
      const answer = completion.choices[0].message.content
      res.json({
          message: answer
      })
      } else {
          res.status(404).json("Unable to get AI res")
      }

  } catch {
    console.error(error)
  }
  
}

module.exports = {
  spanishConversation, 
  englishConversation, 
  portugueseConversation, 
  japaneseConversation, 
  frenchConversation, 
  germanConversation,
  hello
}