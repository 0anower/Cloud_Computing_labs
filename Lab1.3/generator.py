import random
import json

dict1 = {}
for n in range(10):
    key = 'server' + str(n)
    value = random.randint(1, 100)
    dict1[key] = value

data = json.dumps(dict1)
print(data)



# write data on file
with open('data.json', 'w') as json_data:
    json_data.write(data)

with open('data.json', 'r') as data_json_file:
    d = json.load(data_json_file)

    print("data.json file: ", d)
