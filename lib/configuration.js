import { Record, fromJS } from 'immutable';

const schema = {
    version: 0, //will figure out this convention later. incrementing it means breaking change
    discordToken: ""
};

export default class Configuration extends Record(schema) {
    constructor(...configs) {
        let result = fromJS({});
        
        for (let config of configs) {
            result.mergeDeep(config);
        }
        
        super(result);
    }
};