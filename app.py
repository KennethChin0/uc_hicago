# Team UC_Higaco
# SoftDev1 PD 9
# Project 2
# 12/22/2019

from flask import Flask, render_template, request, session, redirect, url_for, redirect
import random
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
                maxHits INTEGER,
                accuracy INTEGER
                );''')
    req = Request("https://pokeapi.co/api/v2/move/?offset=0&limit=728", headers={'User-Agent': 'Mozilla/5.0'})
    movesAPI = urllib.request.urlopen(req) #Only up to Gen 5
    movesResponse = movesAPI.read()
    movesData = json.loads(movesResponse)
    # selecting specified information of each move and inserting it into the table
    for i in movesData['results']:
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
        accuracy = mData['accuracy']
        ######################################
        c.execute('INSERT INTO MOVES VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        (id, name, type, power, pp, priority, cla, cat, desc, ail, ailChance, statChanges, critRate, drain, flinch, healing, statChance, minTurns, maxTurns, minHits, maxHits, accuracy))

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

#Creates BOT_TEAMS - For initial reading of movesets into DB BOT_TEAMS table
c.execute(" SELECT count(name) FROM sqlite_master WHERE type='table' AND name='BOT_TEAMS' ")
if c.fetchone()[0] < 1:
    c.execute('''CREATE TABLE BOT_TEAMS(ID INTEGER PRIMARY KEY AUTOINCREMENT, team BLOB);''')
    list = []
    with open(os.getcwd()+'\\\\static\\\\BotMovesets.txt', 'r', encoding="utf-8") as file:
        list = file.readlines()
    index = 0
    fin = []
    for x in range(len(list)):
        if (list[x] == "\n"):
            list[x-1] = list[x-1].rstrip("\n")
            sub = list[index:x]
            end = ""
            for y in sub:
                end += y
            fin.append(end)
            index = x + 1
    for x in fin:
        c.execute('INSERT INTO BOT_TEAMS VALUES (?, ?)', (None, x))

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


@app.route("/directions")
def directions():
  # # if user already logged in, redirects back to discover
  # if 'user' in session:
  #   return redirect(url_for('root'))
  #
  # # checking to see if things were submitted
  # if (request.args):
  #   if (bool(request.args["username"]) and bool(request.args["password"])):
  #     # setting request.args to variables to make life easier
  #     inpUser = request.args["username"]
  #     inpPass = request.args["password"]
  #     inpConf = request.args["confirmPass"]
  #
  #     if(addUser(inpUser, inpPass, inpConf)):
  #       flash('Success! Please login.')
  #       return redirect(url_for("login"))
  #     else:
  #       return(redirect(url_for("register")))
  #   else:
  #     flash('Please make sure to fill all fields!')
  return render_template("directions.html")

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
        teams = c.execute("SELECT * FROM TEAMS WHERE username = (?)", (session["user"],)).fetchall()
        info = []
        for i in teams:
            init = []
            id = i[0]
            init.append(id)
            list = i[2].split("\n")
            x = 1
            teamname = list[0]
            init.append(teamname)
            while (x < len(list)):
                temp = []
                pokemon = list[x].split("(")[0]
                ability = list[x+1].split("Ability: ")[1]
                move0 = list[x+4][2:]
                move1 = list[x+5][2:]
                move2 = list[x+6][2:]
                move3 = list[x+7][2:]
                gender = list[x].split("(")[1][0:-1]
                happiness = int(list[x+2].split("Happiness: ")[1])
                EVs = list[x+3].split("EVs: ")[1].split("/")
                points0 = int(EVs[0])
                points1 = int(EVs[1])
                points2 = int(EVs[2])
                points3 = int(EVs[3])
                points4 = int(EVs[4])
                points5 = int(EVs[5])
                temp.append(pokemon)
                temp.append(ability)
                temp.append(move0)
                temp.append(move1)
                temp.append(move2)
                temp.append(move3)
                temp.append(gender)
                temp.append(happiness)
                temp.append(points0)
                temp.append(points1)
                temp.append(points2)
                temp.append(points3)
                temp.append(points4)
                temp.append(points5)
                init.append(temp)
                x += 8
            info.append(init)
            info.reverse()
        return render_template("teams.html", t = info)

@app.route("/teamProcess")
def teamProcess():
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        if ("rid" in request.args.keys()):
            c.execute("DELETE FROM TEAMS WHERE id = (?);", (request.args['rid'],))
            return redirect(url_for('teams'))
    dict = request.args
    list = []
    for key in dict:
        list.append(dict[key])
    team = "{}".format(list[0])
    print(list)
    x = 1
    while (x < len(list) - 1):
        if (list[x] != ""):
            format = """\n{}({})
Ability: {}
Happiness: {}
EVs: {}/{}/{}/{}/{}/{}
- {}
- {}
- {}
- {}""".format(list[x], list[x+6], list[x+1], list[x+7], list[x+8], list[x+9], list[x+10], list[x+11], list[x+12], list[x+13], list[x+2], list[x+3], list[x+4], list[x+5])
            team += format
        x += 14
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        if ("id" in request.args.keys()):
            c.execute("DELETE FROM TEAMS WHERE id = (?);", (request.args['id'],))
        c.execute("INSERT INTO TEAMS VALUES(?,?,?);",(None, session["user"], team))
    return redirect(url_for('teams'))

@app.route("/chooseteam")
def chooseteam():
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        teams = c.execute("SELECT * FROM TEAMS WHERE username = (?)", (session["user"],)).fetchall()
        info = []
        for i in teams:
            init = []
            id = i[0]
            init.append(id)
            list = i[2].split("\n")
            x = 1
            teamname = list[0]
            init.append(teamname)
            while (x < len(list)):
                temp = []
                pokemon = list[x].split("(")[0]
                ability = list[x+1].split("Ability: ")[1]
                move0 = list[x+4][2:]
                move1 = list[x+5][2:]
                move2 = list[x+6][2:]
                move3 = list[x+7][2:]
                gender = list[x].split("(")[1][0:-1]
                happiness = int(list[x+2].split("Happiness: ")[1])
                EVs = list[x+3].split("EVs: ")[1].split("/")
                points0 = int(EVs[0])
                points1 = int(EVs[1])
                points2 = int(EVs[2])
                points3 = int(EVs[3])
                points4 = int(EVs[4])
                points5 = int(EVs[5])
                temp.append(pokemon)
                temp.append(ability)
                temp.append(move0)
                temp.append(move1)
                temp.append(move2)
                temp.append(move3)
                temp.append(gender)
                temp.append(happiness)
                temp.append(points0)
                temp.append(points1)
                temp.append(points2)
                temp.append(points3)
                temp.append(points4)
                temp.append(points5)
                init.append(temp)
                x += 8
            info.append(init)
            info.reverse()
        return render_template("chooseteam.html", t = info)

def parsePokemonName(content):
    allpokemons = []
    list1 = content.split("\n")
    if len(list1) >= 2:
        temp1 = list1[1]
        temp10 = temp1.split("(")
        allpokemons.append(temp10[0].capitalize())
    #allpokemons[0] = temp10[0]
    if len(list1) >= 10:
        temp2 = list1[9]
        temp20 = temp2.split("(")
        allpokemons.append(temp20[0].capitalize())
    #allpokemons[1] = temp20[0]
    if len(list1) >= 18:
        temp3 = list1[17]
        temp30 = temp3.split("(")
        allpokemons.append(temp30[0].capitalize())
    #allpokemons[2] = temp30[0]
    if len(list1) >= 26:
        temp4 = list1[25]
        temp40 = temp4.split("(")
        allpokemons.append(temp40[0].capitalize())
    #allpokemons[3] = temp40[0]
    if len(list1) >= 34:
        temp5 = list1[33]
        temp50 = temp5.split("(")
        allpokemons.append(temp50[0].capitalize())
    #allpokemons[4] = temp50[0]
    if len(list1) >= 42:
        temp6 = list1[41]
        temp60 = temp6.split("(")
        allpokemons.append(temp60[0].capitalize())
    #allpokemons[5] = temp60[0]

    return allpokemons

@app.route("/battle")
def battle():
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        bot_teams = []
        temp = c.execute("SELECT * FROM BOT_TEAMS;").fetchall()
        for x in temp:
            bot_teams.append(x[1])
        mons = c.execute("SELECT * FROM POKEMON;").fetchall()
        moves = c.execute("SELECT * FROM MOVES;").fetchall()
        gen = generateTeam(84)
        id = c.execute("SELECT * FROM TEAMS WHERE username = (?) AND id = (?);", (session['user'], request.args['id'])).fetchall()
        #print("===============================")
        pokemonpics = c.execute("SELECT CONTENT FROM TEAMS WHERE username = (?) AND id = (?);", (session['user'], request.args['id'])).fetchall()
        #print("Content is \n")
        #print(pokemonpics)
        #print("\n\n")
        #print("POKEMONS:")
        allPokemonNames = parsePokemonName(pokemonpics[0][0])
        allFrontPics = []
        allBackPics = []
        base1 = []
        base2 = []
        base3 = []
        base4 = []
        base5 = []
        base6 = []
        for i in allPokemonNames:
            frontpic = c.execute("SELECT fsrpite FROM POKEMON WHERE name = (?)", (i,)).fetchall()
            backpic = c.execute("SELECT bsprite FROM POKEMON WHERE name = (?)", (i,)).fetchall()
            #print(frontpic)
            #print(backpic)
            #print("\n\n")
            allFrontPics.append(frontpic[0][0])
            allBackPics.append(backpic[0][0])
        if (len(allPokemonNames) > 0):
            tempo1 = c.execute("SELECT hp FROM POKEMON WHERE name = (?)", (allPokemonNames[0],)).fetchall()
            p1hp = tempo1[0][0]
            tempo2 = c.execute("SELECT atk FROM POKEMON WHERE name = (?)", (allPokemonNames[0],)).fetchall()
            p1atk = tempo2[0][0]
            tempo3 = c.execute("SELECT def FROM POKEMON WHERE name = (?)", (allPokemonNames[0],)).fetchall()
            p1def = tempo3[0][0]
            tempo4 = c.execute("SELECT spa FROM POKEMON WHERE name = (?)", (allPokemonNames[0],)).fetchall()
            p1spa = tempo4[0][0]
            tempo5 = c.execute("SELECT spd FROM POKEMON WHERE name = (?)", (allPokemonNames[0],)).fetchall()
            p1spd = tempo5[0][0]
            tempo6 = c.execute("SELECT spe FROM POKEMON WHERE name = (?)", (allPokemonNames[0],)).fetchall()
            p1spe = tempo6[0][0]
            base1 = [p1hp, p1atk, p1def, p1spa, p1spd, p1spe]
        if (len(allPokemonNames) > 1):
            tempo7 = c.execute("SELECT hp FROM POKEMON WHERE name = (?)", (allPokemonNames[1],)).fetchall()
            p2hp = tempo7[0][0]
            tempo8 = c.execute("SELECT atk FROM POKEMON WHERE name = (?)", (allPokemonNames[1],)).fetchall()
            p2atk = tempo8[0][0]
            tempo9 = c.execute("SELECT def FROM POKEMON WHERE name = (?)", (allPokemonNames[1],)).fetchall()
            p2def = tempo9[0][0]
            tempo10 = c.execute("SELECT spa FROM POKEMON WHERE name = (?)", (allPokemonNames[1],)).fetchall()
            p2spa = tempo10[0][0]
            tempo11 = c.execute("SELECT spd FROM POKEMON WHERE name = (?)", (allPokemonNames[1],)).fetchall()
            p2spd = tempo11[0][0]
            tempo12 = c.execute("SELECT spe FROM POKEMON WHERE name = (?)", (allPokemonNames[1],)).fetchall()
            p2spe = tempo12[0][0]
            base2 = [p2hp, p2atk, p2def, p2spa, p2spd, p2spe]
        if (len(allPokemonNames) > 2):
            tempo13 = c.execute("SELECT hp FROM POKEMON WHERE name = (?)", (allPokemonNames[2],)).fetchall()
            p3hp = tempo13[0][0]
            tempo14 = c.execute("SELECT atk FROM POKEMON WHERE name = (?)", (allPokemonNames[2],)).fetchall()
            p3atk = tempo14[0][0]
            tempo15 = c.execute("SELECT def FROM POKEMON WHERE name = (?)", (allPokemonNames[2],)).fetchall()
            p3def = tempo15[0][0]
            tempo16 = c.execute("SELECT spa FROM POKEMON WHERE name = (?)", (allPokemonNames[2],)).fetchall()
            p3spa = tempo16[0][0]
            tempo17 = c.execute("SELECT spd FROM POKEMON WHERE name = (?)", (allPokemonNames[2],)).fetchall()
            p3spd = tempo17[0][0]
            tempo18 = c.execute("SELECT spe FROM POKEMON WHERE name = (?)", (allPokemonNames[2],)).fetchall()
            p3spe = tempo18[0][0]
            base3 = [p3hp, p3atk, p3def, p3spa, p3spd, p3spe]
        if (len(allPokemonNames) > 3):
            tempo19 = c.execute("SELECT hp FROM POKEMON WHERE name = (?)", (allPokemonNames[3],)).fetchall()
            p4hp = tempo19[0][0]
            tempo20 = c.execute("SELECT atk FROM POKEMON WHERE name = (?)", (allPokemonNames[3],)).fetchall()
            p4atk = tempo20[0][0]
            tempo21 = c.execute("SELECT def FROM POKEMON WHERE name = (?)", (allPokemonNames[3],)).fetchall()
            p4def = tempo21[0][0]
            tempo22 = c.execute("SELECT spa FROM POKEMON WHERE name = (?)", (allPokemonNames[3],)).fetchall()
            p4spa = tempo22[0][0]
            tempo23 = c.execute("SELECT spd FROM POKEMON WHERE name = (?)", (allPokemonNames[3],)).fetchall()
            p4spd = tempo23[0][0]
            tempo24 = c.execute("SELECT spe FROM POKEMON WHERE name = (?)", (allPokemonNames[3],)).fetchall()
            p4spe = tempo24[0][0]
            base4 = [p4hp, p4atk, p4def, p4spa, p4spd, p4spe]
        if (len(allPokemonNames) > 4):
            tempo25 = c.execute("SELECT hp FROM POKEMON WHERE name = (?)", (allPokemonNames[4],)).fetchall()
            p5hp = tempo25[0][0]
            tempo26 = c.execute("SELECT atk FROM POKEMON WHERE name = (?)", (allPokemonNames[4],)).fetchall()
            p5atk = tempo26[0][0]
            tempo27 = c.execute("SELECT def FROM POKEMON WHERE name = (?)", (allPokemonNames[4],)).fetchall()
            p5def = tempo27[0][0]
            tempo28 = c.execute("SELECT spa FROM POKEMON WHERE name = (?)", (allPokemonNames[4],)).fetchall()
            p5spa = tempo28[0][0]
            tempo29 = c.execute("SELECT spd FROM POKEMON WHERE name = (?)", (allPokemonNames[4],)).fetchall()
            p5spd = tempo29[0][0]
            tempo30 = c.execute("SELECT spe FROM POKEMON WHERE name = (?)", (allPokemonNames[4],)).fetchall()
            p5spe = tempo30[0][0]
            base5 = [p5hp, p5atk, p5def, p5spa, p5spd, p5spe]
        if (len(allPokemonNames) > 5):
            tempo31 = c.execute("SELECT hp FROM POKEMON WHERE name = (?)", (allPokemonNames[5],)).fetchall()
            p6hp = tempo31[0][0]
            tempo32 = c.execute("SELECT atk FROM POKEMON WHERE name = (?)", (allPokemonNames[5],)).fetchall()
            p6atk = tempo32[0][0]
            tempo33 = c.execute("SELECT def FROM POKEMON WHERE name = (?)", (allPokemonNames[5],)).fetchall()
            p6def = tempo33[0][0]
            tempo34 = c.execute("SELECT spa FROM POKEMON WHERE name = (?)", (allPokemonNames[5],)).fetchall()
            p6spa = tempo34[0][0]
            tempo35 = c.execute("SELECT spd FROM POKEMON WHERE name = (?)", (allPokemonNames[5],)).fetchall()
            p6spd = tempo35[0][0]
            tempo36 = c.execute("SELECT spe FROM POKEMON WHERE name = (?)", (allPokemonNames[5],)).fetchall()
            p6spe = tempo36[0][0]
            base6 = [p6hp, p6atk, p6def, p6spa, p6spd, p6spe]

        #print(parsePokemonName(pokemonpics[0][0]))
        #print("===============================")

        # REMINDER TO PRINT ERROR MESSAGE IF NO MATCHES AND REDIRECT APPROPRIATELY
        info = []
        list = id[0][2].split("\n")
        x = 1
        while (x < len(list)):
            temp = []
            pokemon = list[x].split("(")[0]
            ability = list[x+1].split("Ability: ")[1]
            move0 = list[x+4][2:]
            move1 = list[x+5][2:]
            move2 = list[x+6][2:]
            move3 = list[x+7][2:]
            gender = list[x].split("(")[1][0:-1]
            happiness = int(list[x+2].split("Happiness: ")[1])
            EVs = list[x+3].split("EVs: ")[1].split("/")
            points0 = int(EVs[0])
            points1 = int(EVs[1])
            points2 = int(EVs[2])
            points3 = int(EVs[3])
            points4 = int(EVs[4])
            points5 = int(EVs[5])
            temp.append(pokemon)
            temp.append(ability)
            temp.append(move0)
            temp.append(move1)
            temp.append(move2)
            temp.append(move3)
            temp.append(gender)
            temp.append(happiness)
            temp.append(points0)
            temp.append(points1)
            temp.append(points2)
            temp.append(points3)
            temp.append(points4)
            temp.append(points5)
            info.append(temp)
            x += 8
        # print(gen)
        bot_teams = c.execute("SELECT * FROM BOT_TEAMS;").fetchall();
        if (len(info) == 0):
            flash('ERROR: Team has no Pokemon.')
            return(redirect(url_for("chooseteam")))
        return render_template("battle.html", b = bot_teams, mons = mons, moves = moves, gen = gen, team = info, base1 = base1, base2 = base2, base3 = base3, base4 = base4, base5 = base5, base6 = base6, front = allFrontPics, back = allBackPics, bt = bot_teams)

def generateTeam(w):
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        gen = []
        info = []
        g = c.execute("SELECT * FROM BOT_TEAMS;").fetchall()
        for x in range(6):
            p = random.choice(g)
            while p in gen:
                p = random.choice(g)
            gen.append(p[1])
        for i in gen:
            temp = []
            list = i.split("\n")
            pokemon = list[0]
            ability = random.choice(list[1].split("Ability: ")[-1].strip().split("/")).strip()
            move0 = random.choice(list[2].split("-", 1)[-1].strip().split("/")).strip()
            move1 = random.choice(list[3].split("-", 1)[-1].strip().split("/")).strip()
            move2 = random.choice(list[4].split("-", 1)[-1].strip().split("/")).strip()
            move3 = random.choice(list[5].split("-", 1)[-1].strip().split("/")).strip()
            gender = random.choice(["male", "female"])
            happiness = 255
            points0 = w
            points1 = w
            points2 = w
            points3 = w
            points4 = w
            points5 = w
            temp.append(pokemon)
            temp.append(ability)
            temp.append(move0)
            temp.append(move1)
            temp.append(move2)
            temp.append(move3)
            temp.append(gender)
            temp.append(happiness)
            temp.append(points0)
            temp.append(points1)
            temp.append(points2)
            temp.append(points3)
            temp.append(points4)
            temp.append(points5)
            info.append(temp)
        info.reverse()
        return info


@app.route("/teambuilder")
def teambuilder():
    with sqlite3.connect(DB_FILE) as connection:
        c = connection.cursor()
        mons = c.execute("SELECT * FROM POKEMON;").fetchall()
        moves = c.execute("SELECT * FROM MOVES;").fetchall()
        if (len(request.args) > 0):
            p1 = ""
            a1 = ""
            m01 = ""
            m11 = ""
            m21 = ""
            m31 = ""
            g1 = ""
            h1 = "255"
            hp1 = "0"
            atk1 = "0"
            def1 = "0"
            spa1 = "0"
            spd1 = "0"
            spe1 = "0"
            p2 = ""
            a2 = ""
            m02 = ""
            m12 = ""
            m22 = ""
            m32 = ""
            g2 = ""
            h2 = "255"
            hp2 = "0"
            atk2 = "0"
            def2 = "0"
            spa2 = "0"
            spd2 = "0"
            spe2 = "0"
            p3 = ""
            a3 = ""
            m03 = ""
            m13 = ""
            m23 = ""
            m33 = ""
            g3 = ""
            h3 = "255"
            hp3 = "0"
            atk3 = "0"
            def3 = "0"
            spa3 = "0"
            spd3 = "0"
            spe3 = "0"
            p4 = ""
            a4 = ""
            m04 = ""
            m14 = ""
            m24 = ""
            m34 = ""
            g4 = ""
            h4 = "255"
            hp4 = "0"
            atk4 = "0"
            def4 = "0"
            spa4 = "0"
            spd4 = "0"
            spe4 = "0"
            p5 = ""
            a5 = ""
            m05 = ""
            m15 = ""
            m25 = ""
            m35 = ""
            g5 = ""
            h5 = "255"
            hp5 = "0"
            atk5 = "0"
            def5 = "0"
            spa5 = "0"
            spd5 = "0"
            spe5 = "0"
            p6 = ""
            a6 = ""
            m06 = ""
            m16 = ""
            m26 = ""
            m36 = ""
            g6 = ""
            h6 = "255"
            hp6 = "0"
            atk6 = "0"
            def6 = "0"
            spa6 = "0"
            spd6 = "0"
            spe6 = "0"
            if ("p1" in request.args.keys()):
                p1 = request.args["p1"]
            if ("a1" in request.args.keys()):
                a1 = request.args["a1"]
            if ("m01" in request.args.keys()):
                m01 = request.args["m01"]
            if ("m11" in request.args.keys()):
                m11 = request.args["m11"]
            if ("m21" in request.args.keys()):
                m21 = request.args["m21"]
            if ("m31" in request.args.keys()):
                m31 = request.args["m31"]
            if ("g1" in request.args.keys()):
                g1 = request.args["g1"]
            if ("h1" in request.args.keys()):
                h1 = request.args["h1"]
            if ("hp1" in request.args.keys()):
                hp1 = request.args["hp1"]
            if ("atk1" in request.args.keys()):
                atk1 = request.args["atk1"]
            if ("def1" in request.args.keys()):
                def1 = request.args["def1"]
            if ("spa1" in request.args.keys()):
                spa1 = request.args["spa1"]
            if ("spd1" in request.args.keys()):
                spd1 = request.args["spd1"]
            if ("spe1" in request.args.keys()):
                spe1 = request.args["spe1"]

            if ("p2" in request.args.keys()):
                p2 = request.args["p2"]
            if ("a2" in request.args.keys()):
                a2 = request.args["a2"]
            if ("m02" in request.args.keys()):
                m02 = request.args["m02"]
            if ("m12" in request.args.keys()):
                m12 = request.args["m12"]
            if ("m22" in request.args.keys()):
                m22 = request.args["m22"]
            if ("m32" in request.args.keys()):
                m32 = request.args["m32"]
            if ("g2" in request.args.keys()):
                g2 = request.args["g2"]
            if ("h2" in request.args.keys()):
                h2 = request.args["h2"]
            if ("hp2" in request.args.keys()):
                hp2 = request.args["hp2"]
            if ("atk2" in request.args.keys()):
                atk2 = request.args["atk2"]
            if ("def2" in request.args.keys()):
                def2 = request.args["def2"]
            if ("spa2" in request.args.keys()):
                spa2 = request.args["spa2"]
            if ("spd2" in request.args.keys()):
                spd2 = request.args["spd2"]
            if ("spe2" in request.args.keys()):
                spe2 = request.args["spe2"]

            if ("p3" in request.args.keys()):
                p3 = request.args["p3"]
            if ("a3" in request.args.keys()):
                a3 = request.args["a3"]
            if ("m03" in request.args.keys()):
                m03 = request.args["m03"]
            if ("m13" in request.args.keys()):
                m13 = request.args["m13"]
            if ("m23" in request.args.keys()):
                m23 = request.args["m23"]
            if ("m33" in request.args.keys()):
                m33 = request.args["m33"]
            if ("g3" in request.args.keys()):
                g3 = request.args["g3"]
            if ("h3" in request.args.keys()):
                h3 = request.args["h3"]
            if ("hp3" in request.args.keys()):
                hp3 = request.args["hp3"]
            if ("atk3" in request.args.keys()):
                atk3 = request.args["atk3"]
            if ("def3" in request.args.keys()):
                def3 = request.args["def3"]
            if ("spa3" in request.args.keys()):
                spa3 = request.args["spa3"]
            if ("spd3" in request.args.keys()):
                spd3 = request.args["spd3"]
            if ("spe3" in request.args.keys()):
                spe3 = request.args["spe3"]

            if ("p4" in request.args.keys()):
                p4 = request.args["p4"]
            if ("a4" in request.args.keys()):
                a4 = request.args["a4"]
            if ("m04" in request.args.keys()):
                m04 = request.args["m04"]
            if ("m14" in request.args.keys()):
                m14 = request.args["m14"]
            if ("m24" in request.args.keys()):
                m24 = request.args["m24"]
            if ("m34" in request.args.keys()):
                m34 = request.args["m34"]
            if ("g4" in request.args.keys()):
                g4 = request.args["g4"]
            if ("h4" in request.args.keys()):
                h4 = request.args["h4"]
            if ("hp4" in request.args.keys()):
                hp4 = request.args["hp4"]
            if ("atk4" in request.args.keys()):
                atk4 = request.args["atk4"]
            if ("def4" in request.args.keys()):
                def4 = request.args["def4"]
            if ("spa4" in request.args.keys()):
                spa4 = request.args["spa4"]
            if ("spd4" in request.args.keys()):
                spd4 = request.args["spd4"]
            if ("spe4" in request.args.keys()):
                spe4 = request.args["spe4"]

            if ("p5" in request.args.keys()):
                p5 = request.args["p5"]
            if ("a5" in request.args.keys()):
                a5 = request.args["a5"]
            if ("m05" in request.args.keys()):
                m05 = request.args["m05"]
            if ("m15" in request.args.keys()):
                m15 = request.args["m15"]
            if ("m25" in request.args.keys()):
                m25 = request.args["m25"]
            if ("m35" in request.args.keys()):
                m35 = request.args["m35"]
            if ("g5" in request.args.keys()):
                g5 = request.args["g5"]
            if ("h5" in request.args.keys()):
                h5 = request.args["h5"]
            if ("hp5" in request.args.keys()):
                hp5 = request.args["hp5"]
            if ("atk5" in request.args.keys()):
                atk5 = request.args["atk5"]
            if ("def5" in request.args.keys()):
                def5 = request.args["def5"]
            if ("spa5" in request.args.keys()):
                spa5 = request.args["spa5"]
            if ("spd5" in request.args.keys()):
                spd5 = request.args["spd5"]
            if ("spe5" in request.args.keys()):
                spe5 = request.args["spe5"]

            if ("p6" in request.args.keys()):
                p6 = request.args["p6"]
            if ("a6" in request.args.keys()):
                a6 = request.args["a6"]
            if ("m06" in request.args.keys()):
                m06 = request.args["m06"]
            if ("m16" in request.args.keys()):
                m16 = request.args["m16"]
            if ("m26" in request.args.keys()):
                m26 = request.args["m26"]
            if ("m36" in request.args.keys()):
                m36 = request.args["m36"]
            if ("g6" in request.args.keys()):
                g6 = request.args["g6"]
            if ("h6" in request.args.keys()):
                h6 = request.args["h6"]
            if ("hp6" in request.args.keys()):
                hp6 = request.args["hp6"]
            if ("atk6" in request.args.keys()):
                atk6 = request.args["atk6"]
            if ("def6" in request.args.keys()):
                def6 = request.args["def6"]
            if ("spa6" in request.args.keys()):
                spa6 = request.args["spa6"]
            if ("spd6" in request.args.keys()):
                spd6 = request.args["spd6"]
            if ("spe6" in request.args.keys()):
                spe6 = request.args["spe6"]
            return render_template("teambuilder.html", mons = mons, moves = moves,
            id = request.args["id"], teamname = request.args["teamname"],
            p1 = p1, a1 = a1, m01 = m01, m11 = m11, m21 = m21, m31 = m31,
            g1 = g1, h1 = h1, hp1 = hp1, atk1 = atk1, def1 = def1, spa1 = spa1, spd1 = spd1, spe1 = spe1,
            p2 = p2, a2 = a2, m02 = m02, m12 = m12, m22 = m22, m32 = m32,
            g2 = g2, h2 = h2, hp2 = hp2, atk2 = atk2, def2 = def2, spa2 = spa2, spd2 = spd2, spe2 = spe2,
            p3 = p3, a3 = a3, m03 = m03, m13 = m13, m23 = m23, m33 = m33,
            g3 = g3, h3 = h3, hp3 = hp3, atk3 = atk3, def3 = def3, spa3 = spa3, spd3 = spd3, spe3 = spe3,
            p4 = p4, a4 = a4, m04 = m04, m14 = m14, m24 = m24, m34 = m34,
            g4 = g4, h4 = h4, hp4 = hp4, atk4 = atk4, def4 = def4, spa4 = spa4, spd4 = spd4, spe4 = spe4,
            p5 = p5, a5 = a5, m05 = m05, m15 = m15, m25 = m25, m35 = m35,
            g5 = g5, h5 = h5, hp5 = hp5, atk5 = atk5, def5 = def5, spa5 = spa5, spd5 = spd5, spe5 = spe5,
            p6 = p6, a6 = a6, m06 = m06, m16 = m16, m26 = m26, m36 = m36,
            g6 = g6, h6 = h6, hp6 = hp6, atk6 = atk6, def6 = def6, spa6 = spa6, spd6 = spd6, spe6 = spe6,
            )
        return render_template("teambuilder.html", mons = mons, moves = moves)

if __name__ == "__main__":
    app.debug = True
    app.run()
