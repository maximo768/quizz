

// Definicion del modelo de QUiz 


module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quiz',
		{ pregunta: DataType.STRING,
		  respuesta: DataTypes.STRING,
		});


}
