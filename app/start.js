import console from 'console';

import Configuration from '../lib/configuration.js';

//TODO: don't have this hard-coded
import discordSecretsConfig from './discord.secrets.js';

let config = new Configuration(discordSecretsConfig);

console.log(config.toJS());