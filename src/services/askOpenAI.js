import OpenAI from "openai";

const key = process.env.REACT_APP_OPENAI_KEY
const openai = new OpenAI({
    apiKey: key,
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

