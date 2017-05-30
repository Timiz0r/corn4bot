import console from 'console';

import Configuration from '../lib/configuration.js';
import Bot from '../index.js';

//TODO: don't have this hard-coded
import discordSecretsConfig from './discord.secrets.js';

let config = new Configuration(discordSecretsConfig);
let bot = new Bot(config);
bot.start();