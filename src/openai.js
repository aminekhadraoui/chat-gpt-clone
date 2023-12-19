import axios from 'axios';

const apiKey = "[api-key]";

export async function sendMsgToOpenAI(message) {
    const data = {
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', data, { headers });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error sending request to OpenAI:', error);
        throw error;
    }
}
