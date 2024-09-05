from os import path
from pathlib import Path

from flask import Flask, render_template
from flask_frozen import Freezer


template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)
#app.config['FREEZER_BASE_URL'] = environ.get('CI_PAGES_URL')
app.config['FREEZER_DESTINATION'] = 'public'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
freezer = Freezer(app)

@app.cli.command()
def freeze():
    freezer.freeze()

@app.cli.command()
def serve():
    freezer.run()

# @app.route('/')
# def home():
#     return render_template('pages/home.html')
@app.route('/')
def home():
    try:
        return render_template('pages/home.html')
    except FileNotFoundError as e:
        return f"Template not found: {e}", 404  # 返回404状态码
    except Exception as e:
        print(f"Error details: {e}")
        return f"Internal Server Error: {e}", 503  # 返回500状态码

@app.route('/members')
def members():
    return render_template('pages/members.html')

# @app.route('/<page>')
# def pages(page):
#     return render_template(str(Path('pages')) + '/' + page.lower() + '.html')
@app.route('/<page>')
def pages(page):
    try:
        return render_template(f'pages/{page.lower()}.html')
    except Exception as e:
        return f"Page not found: {e}", 404


# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(port=8080)
