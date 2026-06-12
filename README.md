
# KadaDiscover 🚀
**[🌐 Try KadaDiscover Live Here!](https://kadadiscover.netlify.app/)**
![KadaDiscover Website](demo/ui.png)
An interactive AI Career Explorer designed specifically to help Filipino students find modern, tech-adjacent, and unconventional career paths based on their hobbies and interests. 


## 🌟 Features
* **AI-Powered Matching:** Uses Google's Gemini model to analyze user interests and generate accurate, creative insights.
* **Tailored Suggestions:** Generates customized career paths complete with localized "day in the life" stories.
* **Skill Identification:** Highlights specific hard and soft skills needed for each suggested path to help students start upskilling immediately.
* **Secure Architecture:** Built with a serverless backend to keep API keys hidden and completely secure from the client side.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Netlify Functions (Node.js)
* **AI Integration:** Google Gemini API
* **Deployment:** Netlify

## 🚀 How to Run Locally

If you want to fork this project or run it on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jhanerose/KadaDiscover.git
   cd KadaDiscover
2. **Install the Netlify CLI:**
```bash
npm install -g netlify-cli
```

3. **Set up your environment variables:**
Create a `.env` file in the root directory and add your Google Gemini API key:
```text
GEMINI_API_KEY="your_secret_key_here"

```
4. **Start the local development server:**
```bash
netlify dev

```
*Your app will typically be running on `http://localhost:8888`.*

## 🔒 Security Note

This project uses **Netlify Functions** to securely handle AI API requests. The `GEMINI_API_KEY` is safely stored in environment variables and is never exposed to the frontend browser, preventing unauthorized usage or quota theft.

---

*Built with ❤️ for Filipino Students.*
