# Scraper for changes in appartment-sites that sends mail-reports
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import time

# import MAIL dependencies
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# local file system
from pathlib import Path
import os
import json
import email
import email.mime.application

# we are using Soup not Django...
# from django.utils.html import strip_tags

class Site_WBM_Handler(object):
    dictFile = "site_WBM_ids.json"

    def __init__(self):
        self.headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0'}
        self.loadDict()

        self.URL = 'https://www.wbm.de/wohnungen-berlin/angebote'
        #self.URL = 'c:\Users\Andreas\PycharmProjects\pyAppartment\SITE WBM\WBM\wbm.html'
        #self.URL = str(Path.home()) + '\PycharmProjects\pyAppartment\SITE WBM\WBM\wbm.html'

    def loadDict(self):
        if os.path.isfile(self.dictFile):
            with open(self.dictFile) as fp:
                self.Dict = json.load(fp)
        else:
            self.Dict = {}      #will be saved/persisted if ids were found on close-method


    def saveDict(self):
        with open(self.dictFile, 'w') as fp:
            json.dump(self.Dict, fp)

    def isNewDictEntry(self,anID, aValue):       #boolean check on new id
        # print (self.Dict)
        # print (anID, ":", aValue)
        if anID in self.Dict:
            return False
        else:
            self.Dict[anID] = aValue
            self.saveDict()
            return True

    def checkForNewAppartments(self):
        if self.URL.startswith("http"):
            page = requests.get(self.URL, headers=self.headers)
            soup = BeautifulSoup(page.content, 'html.parser')
        else:
            soup = BeautifulSoup(open(self.URL, encoding='utf8'), "html.parser")

        #CASE no-new-appartments -> specific LEIDER-Text
        myText = soup.find("h2").get_text().strip()
        #Marks Mail Test
        if "LEIDER HABEN" in myText:
        #if not("LEIDER HABEN" in myText):

            return "LISTE = LEER"

        # appart will be either None or <class 'bs4.element.Tag'>
        apparts = soup.find_all("div", class_="openimmo-search-list-item")

        if apparts is None:
            #We passed the New-Appartment check BUT there are no Apparments ?!? -> debug!
            return "ADMIN: New-Appartment-Check failed somehow!"
        else:
            myCount = len(apparts)
            #Check this - said Mark
            #mySubject = "SITE WBM: {} Neue Angebote!".format(myCount)
            mySubject = date_time + " " + myText
            hasNewAppartments = False
            onlyWBSAppartments = True
            newAdsNumber = 0

            for tag in apparts:
                newAdsNumber += 1
                myID = tag['data-id']

                if self.isNewDictEntry(myID,date_time):
                    hasNewAppartments = True

                    myText = soup.find("h2").get_text().strip()
                    if not("WBS" in myText):
                        onlyWBSAppartments = False

        if not (hasNewAppartments):
            if onlyWBSAppartments:
                return "All new ads require WBS"
            else:
                return newAdsNumber + "new ad(s), but no new one"

        else:

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

            myDIV = "<DIV id=""brey"">"
            myDIV += apparts[0].prettify()
            myDIV += "<br /><hr><br />"     # seperate items by horizontal ruler
            myDIV += "<DIV />"

            self.send_mail(mySubject, myDIV)

            return myText

    @classmethod
    def send_mail(thisClass, aSubject, aDIV):
        myTo = "markmiete2020@gmail.com"
        myFrom = "markmiete2020@gmail.com"
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


class Site_DEGEWO_Handler(object):
    siteToken = "DEGEWO"
    test = "https://immosuche.degewo.de/de/search?size=10&page=1&property_type_id=1&categories%5B%5D=1&lat=&lon=&area=&address%5Bstreet%5D=&address%5Bcity%5D=&address%5Bzipcode%5D=&address%5Bdistrict%5D=&district=33%2C+46%2C+3%2C+28%2C+29%2C+71%2C+64%2C+60&property_number=&price_switch=true&price_radio=900-warm&price_from=&price_to=&qm_radio=50&qm_from=&qm_to=&rooms_radio=custom&rooms_from=2&rooms_to=3&wbs_required=&order=rent_total_without_vat_asc"
    URL = "https://immosuche.degewo.de/de/search"

    URLpara = {'size': '10',
               'page': '1',
               'property_type_id': '1',
               'categories[]': '1',
               'lat': '',
               'lon': '',
               'area': '',
               'address[street]': '',
               'address[city]': '',
               'address[zipcode]': '',
               'address[district]': '',
               'district': '33, 46, 3, 28, 29, 71, 64, 60',
               'property_number': '',
               'price_switch': 'true',
               'price_radio': '900-warm',
               'price_from': '',
               'price_to': '',
               'qm_radio': '50',
               'qm_from': '',
               'qm_to': '',
               'rooms_radio': 'custom',
               'rooms_from': '2',
               'rooms_to': '3',
               'wbs_required': '',
               'order': 'rent_total_without_vat_asc'}

    dictFile = "site_" + siteToken + "_ids.json"

    #mother
    def __init__(self):
        self.headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0'}
        self.loadDict()

    #helper
    def loadDict(self):
        if os.path.isfile(self.dictFile):
            with open(self.dictFile) as fp:
                self.Dict = json.load(fp)
        else:
            self.Dict = {}      #will be saved/persisted if ids were found on close-method

    #helper
    def saveDict(self):
        with open(self.dictFile, 'w') as fp:
            json.dump(self.Dict, fp)

    #helper
    def isNewDictEntry(self,anID, aValue):       #boolean check on new id
        # print (self.Dict)
        # print (anID, ":", aValue)
        if anID in self.Dict:
            return False
        else:
            self.Dict[anID] = aValue
            self.saveDict()
            return True

    #mother
    def isWBS(self, anArticleTag):                            #boolean TRUE if is needs to be filtered out!
        #firstLI = anArticleTag.find("li", class_="article__properties-item")
        myUL = anArticleTag.find("ul", class_="article__properties")
        if myUL is None:
            return false

        myListItems = myUL.find_all("li") #debug: , class_="article__properties-item")
        if myListItems is None:
            print("Warum nur!")
            return False

        myLastLI = myUL.find_all("li")[-1]
        myLastSpanText = myLastLI.find("span").get_text().strip()

        if myLastSpanText == "mit WBS":
            return True
        else:
            return False


    def checkForNewAppartments(self):
        if self.URL.startswith("http"):
            page = requests.get(self.URL, headers=self.headers, params=self.URLpara)
            soup = BeautifulSoup(page.content, 'html.parser')
        else:
            soup = BeautifulSoup(open(self.URL, encoding='utf8'), "html.parser")

        with open("output1.html", "w", encoding="utf-8") as file:
            file.write(str(soup))

        #CASE no-new-appartments -> count is 0
        # mySpan = soup.find("span", class_="search-immo-form__result-count")
        mySpan = soup.find("span", class_="search-immo-form__result-count")
        myCount = int(mySpan.get_text().strip()) if mySpan != None else 0
        #Marks Mail Test
        if myCount == 0:
            return "LISTE = LEER"

        myText = self.siteToken + ": " + str(myCount) + " neue Angebote"
        # appart will be either None or <class 'bs4.element.Tag'>
        apparts = soup.find_all("article", class_="article-list__item article-list__item--immosearch")

        if apparts is None:
            #We passed the New-Appartment check BUT there are no Apparments ?!? -> debug!
            return "LISTE = LEER (seltsam .. count war " + myCount + ")"
        else:
            myCount = len(apparts)
            hasNewAppartments = False
            onlyWBSAppartments = True
            newAdsNumber = 0

            # prepare mail-div: sending is not guaranteed yet!
            mySubject = date_time + " " + myText
            myDIV = "<DIV id=""brey""> <base href=""https://immosuche.degewo.de/de/"" target=""_blank"">"

            for tag in apparts:
                newAdsNumber += 1
                myID = tag.find("a")['href']        # first anchor-tag contains unique article ID (link)
                #print ("ID=", myID)

                if self.isNewDictEntry(myID,date_time):
                    hasNewAppartments = True

                    if not(self.isWBS(tag)):
                        onlyWBSAppartments = False

                        myDIV += tag.prettify()
                        myDIV += "<br /><hr><br />"  # seperate items by horizontal ruler

            #maybe just an empty DIV
            myDIV += "<DIV />"
#some comment
        if not (hasNewAppartments):
            if onlyWBSAppartments:
                return "All new ads require WBS"
            else:
                return newAdsNumber + "new ad(s), but no new one"

        else:
            self.send_mail(mySubject, myDIV)
            return myText

    #helper
    @classmethod
    def send_mail(thisClass, aSubject, aDIV):
        myTo = "markmiete2020@gmail.com"
        myFrom = "markmiete2020@gmail.com"
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
myWBM = Site_WBM_Handler()
myDEGEWO = Site_DEGEWO_Handler()

while (True):
    now = datetime.now()
    date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    print(date_time,": check WBM  - ", end='')
    print (myWBM.checkForNewAppartments())

    print(date_time,": check DEGEWO  - ", end='')
    print (myDEGEWO.checkForNewAppartments())

    time.sleep(120*1)


