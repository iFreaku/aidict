from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello from Flask on Render! 🚀'

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))  # Render default port
    app.run(host='0.0.0.0', port=port, debug=False)