module.exports = function(application) {

	application.get('/noticia', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasDao = new application.app.models.NoticiasDao(connection);

		noticiasDao.getNoticia(function(error, result) {
			res.render("noticias/noticia", {noticia:result});
		});
	});
};