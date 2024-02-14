const OpenAI = require('openai')
const { OPENAI_API_KEY } = process.env
const openai = new OpenAI({ apiKey: OPENAI_API_KEY});

const openAICall = async () => {
    const assistant = await openai.beta.assistants.create({
        name: "Math Tutor",
        instructions:
            "You are a personal math tutor. Write and run code to answer math questions.",
        tools: [{ type: "code_interpreter" }],
        model: "gpt-4-1106-preview",
    });
    
    const thread = await openai.beta.threads.create();
    
    const message = await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: "I need to solve the equation `3x + 11 = 14`. Can you help me?",
    });
    
    const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: assistant.id,
        instructions: "Please address the user as Mervin Praison.",    
    });
    
    console.log(run)
    
    const checkStatusAndPrintMessages = async (threadId, runId) => {
        let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
        if(runStatus.status === "completed"){
            let messages = await openai.beta.threads.messages.list(threadId);
            messages.data.forEach((msg) => {
                const role = msg.role;
                const content = msg.content[0].text.value; 
                console.log(
                    `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
                );
            });
        } else {
            console.log("Run is not completed yet.");
        }  
    };
    
    setTimeout(() => {
        checkStatusAndPrintMessages(thread.id, run.id)
    }, 10000 );
}

module.exports = openAICall