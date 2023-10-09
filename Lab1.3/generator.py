import random
import json

dict1 = {}
for n in range(10):
    key = 'server' + str(n)
    value = random.randint(1, 100)
    dict1[key] = value

data = json.dumps(dict1)
print(data)


# create and write data on data.json
with open('data.json', 'w') as json_data:
    json_data.write(data)


# store data.json file in the /var/www/html folder
with open('/var/www/html/data.json', 'w') as server_file:
   json.dump(dict1, server_file)
