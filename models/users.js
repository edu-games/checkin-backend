module.exports = (sequelize, type) => {
	return sequelize.define("Users", {
		ID: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Username: type.STRING,
		Password: type.STRING
	});
};
