# docker-node-discordbot
A Discord Bot with a Webinterface

## Docker Services
 - [node - discord.js] discord bot
 - [node - express] web-app
 - MariaDB-Server
 - PHPMyAdmin


## Installation Instructions 

### Clone the repository
```
git clone https://github.com/sfrankwyl3110/docker-node-discordbot.git
```

### Change Directory to the repository
```
cd docker-node-discordbot
```

### Insert your Bot-Token from "https://discord.com/developers/applications/xxxxxxxxxxxxxxxxxx/bot" to src/bot/config.json
### Insert your clientId and guildId from your Discord Server

```
{
    "BOT_TOKEN": "",
    "clientId": "",
    "guildId": ""
}
```

### Fire Up docker-compose
```
docker-compose up -d
```
