module.exports = (sequelize, type) => {
	return sequelize.define("Students", {
		ID: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		FirstName: type.STRING,
		LastName: type.STRING,
		Deleted: type.BOOLEAN
	});
};
