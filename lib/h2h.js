// Collections
Providers = new Mongo.Collection( 'providers' );

// Accounts config
Accounts.config({
	forbidClientAccountCreation: true,
	loginExpirationInDays:       365,
});