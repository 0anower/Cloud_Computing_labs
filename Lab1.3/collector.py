import json

# # for making HTTP requests
import requests

# gives access to command-line arguments and other system-related functionality
import sys

# It uses sys.argv[1] to access the first command-line argument provided when the script is run.
# sys.argv is a list containing command-line arguments,
# with sys.argv[0] typically being the script's name and sys.argv[1] being the first argument.
# It sends an HTTP GET request to the URL specified in the first command-line argument using requests.get().
# The .json() method is used to parse the JSON response from the URL and store it in the data variable as a Python dictionary.
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
