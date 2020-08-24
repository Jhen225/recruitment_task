'use strict';
const Sequelize = require('sequelize');

const RecruitmentTaskTable = sequelize.define(
  'recruitment_task_table',
  {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
    first_name: {
      allowNull: false,
      type: Sequelize.STRING(128)
    },
    last_name: {
      allowNull: false,
      type: Sequelize.STRING(128)
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(256)
    },
    
    lowquantity: {
      allowNull: false,
      type: Sequelize.DATE
    },
  },
  { freezeTableName: true }
);

module.exports = RecruitmentTaskTable;