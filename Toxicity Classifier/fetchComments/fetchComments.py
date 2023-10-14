import praw
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

reddit_config = config['REDDIT_CONFIG']

reddit = praw.Reddit(client_id=reddit_config['client_id'], 
                     client_secret=reddit_config['client_secret'], 
                     user_agent=reddit_config['user_agent'], 
                     username=reddit_config['username'], 
                     password=reddit_config['password'])

post_url = 'url'

submission = reddit.submission(url=post_url)

submission.comments.replace_more(limit=None)

all_comments = submission.comments.list()

for comment in all_comments:
    print(comment.body)
