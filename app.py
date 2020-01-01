# Team UC_Higaco
# SoftDev1 PD 9
# Project 2
# 12/22/2019

from flask import Flask, render_template, request, session, redirect, url_for, redirect
import sqlite3
import os
from flask import flash
import urllib.request, json
from urllib.request import Request, urlopen
from os import urandom
app = Flask(__name__)
app.secret_key = urandom(32)

#-----------------------------------------------------------------

#DATABASE SETUP
DB_FILE = "Info.db"
db = sqlite3.connect(DB_FILE)
c = db.cursor()
#Creates USER
c.execute('''CREATE TABLE IF NOT EXISTS USER(username TEXT, password TEXT);''')
#Creates TEAMS
c.execute('''CREATE TABLE IF NOT EXISTS TEAMS(ID INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, content BLOB);''')

#Creates POKEMON
c.execute(" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='POKEMON' ")
if c.fetchone()[0] < 1:
    c.execute('''CREATE TABLE POKEMON(id INTEGER, name TEXT, type1 TEXT, type2 TEXT, fsrpite BLOB, bsprite BLOB,
                hp INTEGER, atk INTEGER, def INTEGER, spa INTEGER, spd INTEGER, spe INTEGER,
                moves TEXT, abilities TEXT);''')
    req = Request('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649', headers={'User-Agent': 'Mozilla/5.0'})
    pokeAPI = urllib.request.urlopen(req) #Only up to Gen 5
    pokeResponse = pokeAPI.read()
    pokeData = json.loads(pokeResponse)
    # selecting specified information of each Pokemon and inserting it into the table
    for i in pokeData['results']:
        req = Request(i['url'], headers={'User-Agent': 'Mozilla/5.0'})
        monAPI = urllib.request.urlopen(req)
        monResponse = monAPI.read()
        monData = json.loads(monResponse)
        ######################################
        id = monData['id']
        name = monData['name'].capitalize()
        ######################################
        types = monData['types']
        type1 = None
        type2 = None
        if (len(types) == 2):
            type1 = types[1]['type']['name']
            type2 = types[0]['type']['name']
        else: type1 = types[0]['type']['name']
        ######################################
        fsprite = monData['sprites']['front_default']
        bsprite = monData['sprites']['back_default']
        ######################################
        hp = monData['stats'][5]['base_stat']
        atk = monData['stats'][4]['base_stat']
        de = monData['stats'][3]['base_stat']
        spa = monData['stats'][2]['base_stat']
        spd = monData['stats'][1]['base_stat']
        spe = monData['stats'][0]['base_stat']
        ######################################
        moveList = monData['moves']
        moveNames = []
        for x in moveList:
            moveNames.append(x['move']['name'])
        moves = ",".join(moveNames)
        ######################################
        abilityList = monData['abilities']
        abilityNames = []
        for x in abilityList:
            abilityNames.append(x['ability']['name'])
        abilities = ",".join(abilityNames)
        ######################################
        c.execute('INSERT INTO POKEMON VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (id, name, type1, type2, fsprite, bsprite, hp, atk, de, spa, spd, spe, moves, abilities))

#Creates MOVES
c.execute(" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='MOVES' ")
if c.fetchone()[0] < 1:
    c.execute('''CREATE TABLE MOVES(
                id INTEGER, name TEXT, type TEXT, power INTEGER, pp INTEGER, priority INTEGER, class TEXT, category TEXT, desc TEXT,
                ailment TEXT,
                ailChance INTEGER,
                statChanges TEXT,
                critRate INTEGER,
                drain INTEGER,
                flinch INTEGER,
                healing INTEGER,
                statChance INTEGER,
                minTurns INTEGER,
                maxTurns INTEGER,
                minHits INTEGER,
                maxHits INTEGER
                );''')
    req = Request("https://pokeapi.co/api/v2/move/?offset=0&limit=728", headers={'User-Agent': 'Mozilla/5.0'})
    movesAPI = urllib.request.urlopen(req) #Only up to Gen 5
    movesResponse = movesAPI.read()
    movesData = json.loads(movesResponse)
    count = 0
    # selecting specified information of each move and inserting it into the table
    for i in movesData['results']:
        print(count)
        count += 1
        req = Request(i['url'], headers={'User-Agent': 'Mozilla/5.0'})
        mAPI = urllib.request.urlopen(req)
        mResponse = mAPI.read()
        mData = json.loads(mResponse)
        ######################################
        id = mData['id']
        name = mData['name'].capitalize()
        type = mData['type']['name']
        power = mData['power']
        pp = mData['pp']
        priority = mData['priority']
        cla = mData['damage_class']['name']
        cat = mData['meta']['category']['name']
        desc = mData['effect_entries'][0]['short_effect']
        ail = mData['meta']['ailment']['name']
        ailChance = mData['meta']['ailment_chance']
        ######################################
        statChangeList = mData['stat_changes']
        statList = []
        for x in statChangeList:
            format = "{},{}".format(x['stat']['name'], x['change'])
            statList.append(format)
        statChanges = ";".join(statList)
        ######################################
        critRate = mData['meta']['crit_rate']
        drain = mData['meta']['drain']
        flinch = mData['meta']['flinch_chance']
        healing = mData['meta']['healing']
        statChance = mData['meta']['stat_chance']
        minTurns = mData['meta']['min_turns']
        maxTurns = mData['meta']['max_turns']
        minHits = mData['meta']['min_hits']
        maxHits = mData['meta']['max_hits']
        ######################################
        c.execute('INSERT INTO MOVES VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (id, name, type, power, pp, priority, cla, cat, desc, ail, ailChance, statChanges, critRate, drain, flinch, healing, statChance, minTurns, maxTurns, minHits, maxHits))

#Creates ABILITIES
c.execute(" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='ABILITIES' ")
if c.fetchone()[0] < 1:
    c.execute('''CREATE TABLE ABILITIES(id INTEGER, name TEXT, desc TEXT);''')
    req = Request("https://pokeapi.co/api/v2/ability/?offset=0&limit=164", headers={'User-Agent': 'Mozilla/5.0'})
    abilitiesAPI = urllib.request.urlopen(req) #Only up to Gen 5
    abilitiesResponse = abilitiesAPI.read()
    abilitiesData = json.loads(abilitiesResponse)
    # selecting specified information of each move and inserting it into the table
    for i in abilitiesData['results']:
        req = Request(i['url'], headers={'User-Agent': 'Mozilla/5.0'})
        aAPI = urllib.request.urlopen(req) #Only up to Gen 5
        aResponse = aAPI.read()
        aData = json.loads(aResponse)
        ######################################
        id = aData['id']
        name = aData['name']
        desc = aData['effect_entries'][0]['short_effect']
        c.execute('INSERT INTO ABILITIES VALUES (?, ?, ?)', (id, name, desc))

#Creates ITEMS - EXTRA
# c.execute(" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='ITEMS' ")
# if c.fetchone()[0] < 1:
#     c.execute("CREATE TABLE ITEMS(name TEXT, desc TEXT, sprite TEXT, flingPower INTEGER, flingEffect INTEGER);")

db.commit()
db.close()

#-----------------------------------------------------------------
#retrieves data of all the users
def updateUsers():
    with sqlite3.connect(DB_FILE) as connection:
        cur = connection.cursor()
        foo = cur.execute('SELECT * FROM USER;') # Selects all username/password combinations
        userList = foo.fetchall()
        userList.sort() # Usernames sorted in alphabetical order
        return userList
#-----------------------------------------------------------------
#root route
@app.route("/")
def root():
    return render_template("homepage.html", sessionstatus = "user" in session)

@app.route("/login")
def login():
    # if user already logged in, redirects back to discover
    if 'user' in session:
        return redirect(url_for('root'))
    # checking to see if things were submitted
    if (request.args):
        if (bool(request.args["username"]) and bool(request.args["password"])):
            # setting request.args to variables to make life easier
            inpUser = request.args["username"]
            inpPass = request.args["password"]
            with sqlite3.connect(DB_FILE) as connection:
                cur = connection.cursor()
                q = 'SELECT username, password FROM USER;'
                foo = cur.execute(q)
                userList = foo.fetchall()
                for row in userList:
                    if inpUser == row[0] and inpPass == row[1]:
                        session['user'] = inpUser
                        return(redirect(url_for("root")))
                flash('Username not found or login credentials incorrect.')
                return(redirect(url_for("login")))
        else:
            flash('Login unsuccessful')
            return(redirect(url_for("login")))
    return render_template("login.html")

@app.route("/register")
def register():
  # if user already logged in, redirects back to discover
  if 'user' in session:
    return redirect(url_for('root'))

  # checking to see if things were submitted
  if (request.args):
    if (bool(request.args["username"]) and bool(request.args["password"])):
      # setting request.args to variables to make life easier
      inpUser = request.args["username"]
      inpPass = request.args["password"]
      inpConf = request.args["confirmPass"]

      if(addUser(inpUser, inpPass, inpConf)):
        flash('Success! Please login.')
        return redirect(url_for("login"))
      else:
        return(redirect(url_for("register")))
    else:
      flash('Please make sure to fill all fields!')
  return render_template("register.html")

#logout route: removes the user from session and redirects to root
@app.route("/logout")
def logout():
    if "user" in session:
        session.pop('user')
    return redirect(url_for("root"))
#adds user with necessary credentials
def addUser(user, pswd, conf):
  userList = updateUsers()
  for row in userList:
    if user == row[0]:
      flash('Username already taken. Please try again.')
      return False
  if (pswd == conf):
    # SQLite3 is being weird with threading, so I've created a separate object
    with sqlite3.connect(DB_FILE) as connection:
      cur = connection.cursor()
      q = "INSERT INTO USER VALUES('{}', '{}');".format(user, pswd) # Successfully registers new user
      cur.execute(q)
      connection.commit()
    return True
  else:
    flash('Passwords do not match. Please try again.')
    return False

@app.route("/teams")
def teams():
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        teams = c.execute("SELECT * FROM TEAMS WHERE username = (?)", (session["user"],))
        return render_template("teams.html", t = teams)

@app.route("/teamProcess")
def teamProcess():
    #gets form data from html
    #adds team into TEAM
    return redirect(url_for('teams'))

@app.route("/teambuilder")
def teambuilder():
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        mons = c.execute("SELECT * FROM POKEMON;").fetchall()
        moves = c.execute("SELECT * FROM MOVES;").fetchall()
        print (mons)
        return render_template("teambuilder.html", mons = mons, moves = moves)

if __name__ == "__main__":
    app.debug = True
    app.run()
