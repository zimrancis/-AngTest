// NODE PACKAGES
const Redis = require('ioredis');

// LOCAL FUNCTIONS
const getWorldometerPage = require('../scrapers/getWorldometers');
const getStates = require('../scrapers/getStates');
const jhuLocations = require('../scrapers/jhuLocations');
const historical = require('../scrapers/historical');

let config;
try {
	config = require('../config.json');
} catch (err) {
	config = require('../config.example.json');
}

const redis = new Redis(config.redis.host, {
	password: config.redis.password,
	port: config.redis.port
});

module.exports = {
	redis,
	config,
	scraper: {
		getWorldometerPage,
		getStates,
		jhuLocations,
		historical
	}
};
