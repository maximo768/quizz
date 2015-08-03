var path = require('path)';

var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name=(url[6] || null);
var user=(url[2] || null);
var pwd=(url[3] || null);
var protocol=(url[1] || null);
var dialect=(url[1] || null);
var port=(url[5] || null);
var host=(url[4] || null);
var storage = process.env.DATABASE_STORAGE;

var Sequelize = require('sequelize');


var sequelize = new Sequelize(DB_name, user, pwd,
				{dialect: protocol,
				protocol: protocol,
				port:	port,
				host:	host,	
				storage: storage
				omitNull: True	
				}			
);


var Quiz = sequelize.import(path.join(___dirname,'quiz'));

exports.Quiz = Quiz;


sequelize.sync().success(function(){
	Quiz.count(.success(function(){
		if (count===0){
			Quiz.create({pregunta: 'Capital de Italia'.
					respuesta: 'Roma'
					})
			.success(function(){console.log('Base de datos inicializadad')});
		};
	});
});
