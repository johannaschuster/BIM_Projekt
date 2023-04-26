import os, sys, sqlite3

# Existenz feststellen
if os.path.exists("firma.db"):
    print("Datei bereits vorhanden")
    sys.exit(0)

# Verbindung zur Datenbank erzeugen
connection = sqlite3.connect("firma.db")

# Datensatz-Cursor erzeugen
cursor = connection.cursor()

# Datenbanktabelle erzeugen
sql = "CREATE TABLE personen(" \
      "name TEXT, " \
      "vorname TEXT, " \
      "personalnummer INTEGER PRIMARY KEY, " \
      "gehalt REAL, " \
      "geburtstag TEXT)"
cursor.execute(sql)

# Datensatz erzeugen
sql = "INSERT INTO personen VALUES('Maier', " \
      "'Hans', 6714, 3500, '15.03.1962')"
cursor.execute(sql)
connection.commit()

# Datensatz erzeugen
sql = "INSERT INTO personen VALUES('Schmitz', " \
      "'Peter', 81343, 3750, '12.04.1958')"
cursor.execute(sql)
connection.commit()

# Datensatz erzeugen
sql = "INSERT INTO personen VALUES('Mertens', " \
      "'Julia', 2297, 3621.5, '30.12.1959')"
cursor.execute(sql)
connection.commit()

# Verbindung, Cursor
connection = sqlite3.connect("firma.db")
cursor = connection.cursor()

# SQL-Abfrage
sql = "SELECT * FROM personen"

# Kontrollausgabe der SQL-Abfrage
# print(sql)

# Absenden der SQL-Abfrage
# Empfang des Ergebnisses
cursor.execute(sql)

# Ausgabe des Ergebnisses
for dsatz in cursor:
    print(dsatz[0], dsatz[1], dsatz[2],
          dsatz[3], dsatz[4])

# Verbindung beenden
connection.close()


# Verbindung beenden
connection.close()