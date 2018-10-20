import os

with open ('index.html', 'r') as f:
    old_data = f.read()

path = './' + os.getenv("APP_NAME") + '/main2.js'
new_data = old_data.replace('./main2.js', path)

with open ('index.html', 'w') as f:
    f.write(new_data)

print("index.html change")

with open ('webpack.config.js', 'r') as f:
    old_data = f.read()

path = "path: __dirname + '/" + os.getenv("APP_NAME") + "'"
new_data = old_data.replace('path: __dirname', path)

with open ('webpack.config.js', 'w') as f:
    f.write(new_data)

print("webpack.config change")
