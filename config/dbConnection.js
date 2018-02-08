var mysql = require('mysql');

module.exports = function() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'cgEad1606',
		database : 'portal_noticias'
	});
}