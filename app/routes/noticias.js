module.exports = function(application) {

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasDao = new application.app.models.NoticiasDao(connection);

		noticiasDao.getNoticias(function(error, result) {
			res.render("noticias/noticias", {noticias:result});
		});
	});
};