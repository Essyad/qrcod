from flask import Flask , request , send_file , render_template_string 
import qrcode
import io 

app = Flask(__name__)