module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		console.log(noticia);
		
		req.assert('titulo', "Titulo Obrigatorio").notEmpty();	
		req.assert('resumo', "Resumo Obrigatorio").notEmpty();
		req.assert('resumo', "Resumo deve conter entre 10 e 100 caracteres").len(10, 100);
		req.assert('autor', "Autor Obrigatorio").notEmpty();
		req.assert('data_noticia', "Data Obrigatorio").notEmpty();//.isDate({format: 'YYYY-MM-DD'});

		var erros = req.validationErrors();

		if(erros){
			res.render("admin/form_add_noticia");
			return;
		}

		var connection = application.config.dbConnection();
		var noticiasDao = new application.app.models.NoticiasDao(connection);

		noticiasDao.salvarNoticia(noticia, function(error, result) {
			res.redirect("/noticias");
		});
	});
};