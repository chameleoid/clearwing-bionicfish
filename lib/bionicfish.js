module.exports = function(client) {
	var Clearwing = client.constructor;

	client.on = function() {
		// todo: hackily replace <!> in regexes with channel.get('bot:prefix'), network.get('bot:prefix'), or client.get('bot:prefix')
		return Clearwing.prototype.on.apply(client, arguments);
	};
};
