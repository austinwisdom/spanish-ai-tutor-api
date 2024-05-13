const OpenAI = require('openai')
require("dotenv").config()

const { OPENAI_API_KEY } = process.env
const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

const tutorPrompts = [
  {id: "es", tutorPrompt: "You are a male Spanish language teacher named Maxi. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between Spanish and English as necessary or relevant."},
  {id: "en", tutorPrompt: "You are a male English language teacher named David. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain helpful information related to their question as necessary or relevant."},
  {id: "fr", tutorPrompt: "You are a male French language teacher named Marvin. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between French and English as necessary or relevant."},
  {id: "de", tutorPrompt: "You are a female German language teacher named Anna. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between German and English as necessary or relevant."},
  {id: "jp", tutorPrompt: "You are a female Japanese language teacher named Yuki. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between Japanese and English as necessary or relevant."},
  {id: "pt", tutorPrompt: "You are a female Brazilian Portuguese language teacher named Isabela. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between Brazilian Portuguese and English as necessary or relevant."},
]

// Spanish language tutor for lessons
const mySpanishTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a male Spanish language teacher named Maxi. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between Spanish and English as necessary or relevant."

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

// English language tutor for lessons
const myEnglishTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a male English language teacher named David. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain helpful information related to their question as necessary or relevant."

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

// French language tutor for lessons
const myFrenchTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a male French language teacher named Marvin. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between French and English as necessary or relevant."

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
  const prompt = "You are a female German language teacher named Anna. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between German and English as necessary or relevant."

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

// Japanese language tutor for lessons
const myJapaneseTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a female Japanese language teacher named Yuki. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between Japanese and English as necessary or relevant."

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

// Portuguese language tutor for lessons
const myPortugueseTutor = async (req, res) => {

  const message = req.body?.message
  const prompt = "You are a female Brazilian Portuguese language teacher named Isabela. You answer any questions that your student asks you. Be helpful and friendly. Your student speaks English so take opportunities to explain key similarities and differences between Brazilian Portuguese and English as necessary or relevant."

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
  mySpanishTutor, myGermanTutor, myEnglishTutor, myFrenchTutor, myJapaneseTutor, myPortugueseTutor
}