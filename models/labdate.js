module.exports = (sequelize, type) => {
	return sequelize.define("LabDate", {
		ID: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		LabID: {
			type: Sequelize.STRING,
			references: {
				model: "Lab", // 'persons' refers to table name
				key: "ID" // 'id' refers to column name in persons table
			}
		},
		Date: type.DATE
	});
};
