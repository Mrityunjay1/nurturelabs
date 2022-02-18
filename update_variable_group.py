import requests
import json
from datetime import date
import yaml

with open('azure-pipelines.yml') as f:
    dict = yaml.load(f, Loader=yaml.FullLoader)
    print(dict)

service_name = 'Parmeet-Service'
stage1_variable_group = 'Stage_1_Variable_Group'

url = "https://dev.azure.com/sukritibhandari/Parmeet%20Testing/_apis/distributedtask/variablegroups?api-version=6.0-preview.2"
headers = {
    'Authorization': 'Basic cGFybWVldC5zLnNpbmdoQHB3Yy5jb206YWt1M3d5cW5neW0yeHNxdmFlb3d1a3RlZmg2aHp0d2locnhwd2ZwZ29pdnd4dGJsdnR3YQ==',
    'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, verify=False).json()

# print(response)

stage1_variable_group_id = 0
for i in response['value']:
    # print(i['id'],i['name'])
    if(i['name'] == stage1_variable_group):
        stage1_variable_group_id = i['id']

print(stage1_variable_group, stage1_variable_group_id, end='\t')

url = "https://dev.azure.com/sukritibhandari/Parmeet%20Testing/_apis/distributedtask/variablegroups/"+str(stage1_variable_group_id)+"?api-version=6.0-preview.1"

payload = json.dumps({
    "id": stage1_variable_group_id,
    "type": "Vsts",
    "name": stage1_variable_group,
    "variables": {
        stage1_variable_group+'-'+service_name: {
            "value": "nothing"
        }
    }
})

response = requests.request("PUT", url, headers=headers, data=payload, verify=False).json()

print(response)
