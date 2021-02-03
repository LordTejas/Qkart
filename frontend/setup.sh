# Store workspace public IP to config file
IP_VAR="$(curl http://checkip.amazonaws.com/)"
CONFIG='{"workspaceIp": "'"$IP_VAR"'"}'
echo $CONFIG > src/ipConfig.json


# Install project dependencies
rm -rf ~/node_modules
rm -rf node_modules
rm -rf ~/.npm 
rm package-lock.json
mkdir -p ~/node_modules
ln -s /home/crio-user/node_modules $PWD/node_modules
npm install