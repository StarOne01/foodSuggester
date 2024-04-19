import csv

filename = "BeginnerCore.js"
with open(filename, 'w') as textfile:
    textfile.write('CoreMinorM: [')
    with open('workOut.csv', newline='') as csvfile:
          spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
          for x in spamreader:
              if x[2] == "Beginner" and x[3] != "Abdominals":
                  textfile.write(f'"{x[1]}",')
    textfile.write('],')
