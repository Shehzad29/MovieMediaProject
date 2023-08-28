import mysql.connector

mydb = mysql.connector.connect(
    host="db4free.net",
    user="mohit_gupta",
    password="midb@1234"
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM mohit_db.Users")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)

