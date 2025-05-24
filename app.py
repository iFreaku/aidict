from flask import Flask, render_template, request
import os, random
from together import Together 
from dotenv import load_dotenv

load_dotenv()
keys = os.environ.get("TOGETHER_APIKEY").split(',')
systemPrompt = """
You’re a linguistic genius, sharper than the Oxford Dictionary!
I want you to deliver a clear, concise meaning that gets to the point,
then provide at least two natural examples of how it’s used in conversations or real-life situations,
and finish with a brief, engaging history of the word—its origins, how it evolved, and similar details. 
Keep it straightforward, lively, and packed with insight.
Use emojis beside the words they represent to make it more engaging,
and format your response strictly using HTML tags/elements and close the tags correctly.
for structure (e.g., use h2 for headings, bold for bold, em for italics, p for paragraphs, etc.)—do not use Markdown syntax like #, **, or * under any circumstances.
Additionally, do not wrap sections in div tags, but you must use hr tags to separate the sections (Meaning, Usage Examples, and History).

Here’s an example

<h2>Meaning suitable emoji</h2>
<br>
<p>(meaning with the use of html tgas for text decoration instead of markdowns, and emojis)</p>
<hr>
<h2>Usage Examples suitable emoji</h2>
<br>
<ul>
<li>(Example 1 with the use of html tgas for text decoration instead of markdowns, and emojis)</li>
<br>
<li>(Example 2 with the use of html tgas for text decoration instead of markdowns, and emojis)</li>
</ul>
<hr>
<h2>History suitable emoji</h2>
<br>
<p>(history with the use of html tgas for text decoration instead of markdowns, and emojis)</p>
"""


def getDefinition(word):
    client = Together(api_key=random.choice(keys))
    completion = client.chat.completions.create(
        model="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
        messages=[
            {
                "role": "system",
                "content": systemPrompt
            },
            {
                "role": "user", 
                "content": word
            }
            ],
    )
    return completion.choices[0].message.content
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/getdef', methods=['GET'])
def get_definition():
    word = request.args.get('word')
    if word:
        definition = getDefinition(word)
        return definition
    else:
        return "Please provide a word to define.", 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))  # Render default port
    app.run(host='0.0.0.0', port=port, debug=True)