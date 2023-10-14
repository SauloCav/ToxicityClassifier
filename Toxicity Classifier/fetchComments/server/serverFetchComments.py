from flask import Flask, jsonify, request
import praw
import configparser
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/api/comments', methods=['POST'])
def get_reddit_comments():
    try:
        data = request.get_json()
        post_url = data.get('url', None)

        # Initialize PRAW with your credentials
        config = configparser.ConfigParser()
        config.read('config.ini')
        reddit_config = config['REDDIT_CONFIG']

        reddit = praw.Reddit(client_id=reddit_config['client_id'], 
                             client_secret=reddit_config['client_secret'], 
                             user_agent=reddit_config['user_agent'], 
                             username=reddit_config['username'], 
                             password=reddit_config['password'])

        submission = reddit.submission(url=post_url)

        submission.comments.replace_more(limit=None)
        all_comments = submission.comments.list()

        # Extract the comment body and convert the list to a list of dictionaries
        comments_list = [{"comment": comment.body} for comment in all_comments]

        return jsonify(comments_list)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
