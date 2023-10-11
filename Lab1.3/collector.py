import json

# # for making HTTP requests
import requests

# gives access to command-line arguments and other system-related functionality
import sys


server_data = requests.get(sys.argv[1]).json()

count_server = {
         'under': 0,
         'over': 0
        }

for server_key, value in server_data.items():
    print(server_key, value)

    if 50 <= value <= 100:
        count_server['over'] += 1
    elif 0 <= value < 50:
        count_server['under'] += 1

print(count_server)
