# Scraper for changes in appartment-sites that sends mail-reports

import requests
from bs4 import BeautifulSoup
from datetime import datetime
import time

# import MAIL dependencies
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import email
import email.mime.application

# we are using Soup not Django...
# from django.utils.html import strip_tags

headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0'}

def check_tester():
    URL = 'https://www.wbm.de/wohnungen-berlin/angebote'

    page = requests.get(URL, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    #CASE no-new-appartments -> specific LEIDER-Text
    myText = soup.find("h2").get_text().strip()
    if "LEIDER HABEN" in myText:
        print ("Boo")
    else:
        print ("Hurra")

    print (myText)
    return

    # appart will be either None or <class 'bs4.element.Tag'>
    apparts = soup.find_all("article", class_="textOnly")

    if apparts is None:
        print("No new appartment found!")
    else:
        myCount = len(apparts)
        mySubject = "SITE WBM: {} Neue Angebote!".format(myCount)

        myDIV = "<DIV>"

        for tag in apparts:
            myDIV += tag.prettify()

        myDIV += "<DIV />"
        print (myDIV)

        send_mail(mySubject, myDIV)


def check_wbm():
    now = datetime.now()
    date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    print(date_time,": check WBM  - ", end='')


    URL = 'https://www.wbm.de/wohnungen-berlin/angebote'

    page = requests.get(URL, headers=headers)
    soup = BeautifulSoup(page.content, 'html.parser')

    #CASE no-new-appartments -> specific LEIDER-Text
    myText = soup.find("h2").get_text().strip()
    if "LEIDER HABEN" in myText:
        print ("NONE")

    return

    # appart will be either None or <class 'bs4.element.Tag'>
    apparts = soup.find_all("section", id="content")

    if apparts is None:
        #We passed the New-Appartment check BUT there are no Apparments ?!? -> debug!
        print("ADMIN: New-Appartment-Check failed somehow!")
    else:
        myCount = len(apparts)
        #mySubject = "SITE WBM: {} Neue Angebote!".format(myCount)
        mySubject = date_time + "  SITE WBM: Ein neues Angebot ist da!"

        # myDIV = "<DIV>"
        # i = 0
        #
        # for tag in apparts:
        #     # i += 1
        #     # print (i, tag.get_text())
        #
        #     myDIV += tag.prettify()
        #     myDIV += "<br /><hr><br />"     # seperate items by horizontal ruler
        #
        # myDIV += "<DIV />"

        myDIV = "<DIV>"
        myDIV += apparts[1].prettify()
        myDIV += "<br /><hr><br />"     # seperate items by horizontal ruler
        myDIV += "<DIV />"

        send_mail(mySubject, myDIV)

        print("Mail has been sent!!!")


def send_mail(aSubject, aDIV):
    myTo = "markmiete2020@gmail.com"
    myFrom = "barak.obama@whitehouse.gov"
    myPW = "Zhwpybm7987"

    # create message
    msg = MIMEMultipart('alternative')  # 'alternative'
    msg['Subject'] = aSubject
    msg['From'] = myFrom
    msg['To'] = myTo

    # create body
    html_text = aDIV
    plain_text = "Ganz wichiger PLAIN-TEXT von Andreas Brey"

    # Create the body of the message (a plain-text and an HTML version).
    # Record the MIME types of both parts - text/plain and text/html.
    part1 = MIMEText(plain_text, 'plain')
    part2 = MIMEText(html_text, 'html')

    # Attach image if any

    # Attach parts into message container.
    # According to RFC 2046, the last part of a multipart message, in this case
    # the HTML message, is best and preferred.
    msg.attach(part1)
    msg.attach(part2)

    # Send the message via local SMTP server.
    host = "smtp.gmail.com"
    port = 587
    mail = smtplib.SMTP(host, port, timeout=60)
    mail.ehlo()
    mail.starttls()

    # Add recepiens, cc or bcc if any
    recepient = [msg["To"]]

    # username and password of gmail id which will be used to send email
    username = myTo
    password = myPW

    # login using credentials
    mail.login(username, password)

    # send email
    mail.sendmail(msg["From"], recepient, msg.as_string())
    mail.quit()

# --------------------------------------- MAIN-LOOP prüfe die Wohnungs-Websites

#check_tester()

while (True):
    check_wbm()
    time.sleep(30*1)


