module.exports = (sequelize, type) => {
	return sequelize.define("LabDate", {
		ID: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		LabDateID: {
			type: Sequelize.STRING,
			references: {
				model: "Lab", // 'persons' refers to table name
				key: "ID" // 'id' refers to column name in persons table
			}
		},
		StudentID: {
			type: Sequelize.STRING,
			references: {
				model: "Student", // 'Student' refers to table name
				key: "ID" // 'id' refers to column name in persons table
			}
		},
		CheckIn: type.BOOLEAN,
		Late: type.BOOLEAN
	});
};
