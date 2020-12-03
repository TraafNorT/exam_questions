import json

inp, a, nu = open('data.txt', encoding='utf-8'), '', {}
a = str(inp.read()).encode('cp1251').decode('cp1251').splitlines()
nu['questions'] = a
json = json.dumps(str(nu))
outp = open('data/data.json', 'w')
outp.write(json)
print("-------------\nJSON Written!\n-------------")
