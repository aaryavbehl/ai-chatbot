https://cloud-i3ct9ww5h-hack-club-bot.vercel.app/0demo.png

# HackAI

- HackAI is a chatbot powered by the Hack Club API. The project consists of a frontend and a backend.

## Backend

- An additional backend was required for this project since a static HTML frontend cannot directly communicate with outside APIs and display them due to **(CORS)** policy.

## Frontend

- The frontend consists of a basic form used to communicate with the API and get back messages.

- It also has a few buttons to demonstrate how easy it is to work with this API.

---

## API Endpoints

### `POST /api/chat`

- **Description**: Sends a message to the API and receives a response.

- **Request Body(JSON)**:

```
{
    "message": "Hello!"
}
```

- **Request Response(JSON) - Example**

```
{
     "bot": = "Hi there! How can I assist you?"
}
```

---

## How to Run Locally

1. **Clone the repository:**

```
git clone https://github.com/aaryavbehl/ai-chatbot.git
cd ai-chatbot
```

2. **Install Modules**

   - `pip install -r requirements.txt`

3. **Run the Flask server**

   - `python app.py`

4. **Access the Frontend**

   - After running the `app.py` you can access the frontend at https://127.0.0.1:5000
