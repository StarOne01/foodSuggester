import csv

filename = "expert.js"
with open(filename, 'w') as textfile:
    textfile.write('const beginner = [')
    with open('workOut.csv', newline='') as csvfile:
          spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
          for x in spamreader:
              if x[2] == "Expert":
                  textfile.write(f'"{x[1]}",')
    textfile.write('];')
