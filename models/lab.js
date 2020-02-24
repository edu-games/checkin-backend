module.exports = (sequelize, type) => {
	return sequelize.define("Lab", {
		ID: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		Name: type.STRING
	});
};
