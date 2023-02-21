from flask_app import app
from flask import render_template, redirect, request, session, flash
import smtplib


@app.route('/', methods=["POST", "GET"])
def index():
    return render_template('home.html')


@app.route('/resume')
def resume():
    return render_template('resume.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']

        # Set the email subject and message
        email_subject = "Contact Form Submission: " + subject
        email_message = "From: %s\r\nTo: %s\r\n\r\n | " + \
            name + " | " + email + " | " + message
        print(email_message)

        # Send the email using smtplib or a third-party email service
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login("ivanfcobb@gmail.com", "")
        server.sendmail("ivanfcobb@gmail.com",
                        "ivanfcobb@gmail.com", email_message)
        server.quit()

        return render_template('thank_you.html')
    else:
        return render_template('home.html')
