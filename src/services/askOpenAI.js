import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
});


export const askOpenAI = async (prompt) => {

    console.log("API call is happening")
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "assistant",
                content: prompt,
            },
        ],
    });

    const message = response.choices[0];
    console.log("API call is compleeted")


    return message.message.content;
}

