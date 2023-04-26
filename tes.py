import sqlite3

db_pfad = '\\BIM_Projekt.db\\f1_daten.db'
db_verbindung = sqlite3.connect(db_pfad)
db_curser = db_verbindung.cursor()
db_curser.execute('SELECT * FROM  BIM_Analyse;') 
gefundene_daten = db_cursor.fetchall() 

print(str(gefundene_daten))
