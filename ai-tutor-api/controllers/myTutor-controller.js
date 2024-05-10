const OpenAI = require('openai')
require("dotenv").config()

const { OPENAI_API_KEY } = process.env
const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

// Spanish tutor
const myTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a Spanish speaker from Spain and work as a professional language coach. Assisting non-Spanish speakers to practice speaking Spanish, learn Spanish grammar and vocabulary, and to study Spanish."

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

// German tutor
const myGermanTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a German language teacher. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between German and English as necessary or relevant."

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
    myTutor, myGermanTutor
}