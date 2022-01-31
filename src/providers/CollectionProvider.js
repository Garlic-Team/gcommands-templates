const Logger = require('js-logger');
const { Collection } = require('discord.js');
const { Provider, ProviderTypes } = require('gcommands');

class TemplateProvider extends Provider {
	constructor() {
		super();

		/**
		 * type
		 * @type {ProviderTypes}
		 */
		this.type = 'collection';

		this.client = new Collection();
	}

	async init() {
		Logger.debug('Template initializated!');
		this.emit('connected', this.client);

		return;
	}

	/**
	 * @param {string} key 
	 * @param {string} value 
	 * @returns {Promise<any>}
	 */
	async insert(key, value) {
		const data = await this.update(key, value);

		return data;
	}

	/**
	 * @param {string} key 
	 * @returns {Promise<any>}
	 */
	async get(key) {
		const data = await this.client.get(key);

		return data;
	}

	/**
	 * @param {string} key 
	 * @param {string} value 
	 * @returns {Promise<any>}
	 */
	async update(key, value) {
		const data = await this.client.set(key, value);

		return data;
	}

	/**
	 * @param {string} key 
	 * @returns {Promise<any>}
	 */
	async delete(key) {
		const data = await this.client.delete(key);

		return data;
	}

	clear() {
		return this.client.clear();
	}
}

module.exports = TemplateProvider;