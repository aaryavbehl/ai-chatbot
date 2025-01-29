from flask import Flask, request , jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')

def home():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])

def chat():
    try:
        user_message = request.json.get('message')
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        api_url = 'https://ai.hackclub.com/chat/completions'
        headers = {'Content-Type': 'application/json'}
        payload = {'messages': [{'role': 'user', 'content': user_message}]}
        response = requests.post(api_url, headers=headers, json=payload)

        if response.status_code == 200:
            data = response.json()
            bot_message = data['choices'][0]['message']['content']
            return jsonify({'bot': bot_message})
        else:
            return jsonify({'error': f"API Error: {response.status_code}"}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)