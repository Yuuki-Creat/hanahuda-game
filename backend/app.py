from flask import Flask, jsonify
from game_logic import get_hanafuda_cards

app = Flask(__name__)

@app.route("/api/cards")
def get_cards():
    cards = get_hanafuda_cards()
    return jsonify(cards)

if __name__ == "__main__":
    app.run(debug=True)
