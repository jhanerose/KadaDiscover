export async function handler(event, context) {
    // 1. Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    // 2. Grab the API key securely from Netlify's Environment Variables
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
        return { statusCode: 500, body: JSON.stringify({ error: "Missing API Key" }) };
    }

    try {
        // 3. Parse the user's input sent from the frontend
        const { prompt } = JSON.parse(event.body);

        // 4. Make the call to Google Gemini FROM THE SERVER
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.7,
                    responseMimeType: "application/json"
                }
            })
        });

        const data = await response.json();
        
        // 5. Send the clean JSON back to the frontend
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to connect to AI" })
        };
    }
}