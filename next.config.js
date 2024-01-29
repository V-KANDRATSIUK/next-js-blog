const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: '5kolonnaa',
                mongodb_password: '1slavaKON.',
                mongodb_clustername: 'clusternodejs',
                mongodb_database: 'blog',
            }
        };
    }
    return {
        env: {
            mongodb_username: '5kolonnaa',
            mongodb_password: '1slavaKON.',
            mongodb_clustername: 'clusternodejs',
            mongodb_database: 'blog',
        }
    }
};