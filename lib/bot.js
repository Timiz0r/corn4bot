import { Client as DiscordClient } from 'discord.js';
import { List } from 'immutable';

export default class Bot {
    constructor(config) {
        this.discordClient = null;
        this.registeredPlugins = new List();
        
        console.log(`Bot created with this config:\n${JSON.stringify(config.toJS())}`);
    };
    
    start() {
        //TODO: some logging abstraction
        console.log("Starting bot");
    };
    
    stop() {
        //TODO: some logging abstraction
        console.log("Stopping bot");
    };
    
    registerPlugin(pluginType) {
        this.registeredPlugins = this.registeredPlugins.push(pluginType);
    };
};