import Sequelize from 'sequelize';
import sequelize from '../config/db.js';

export const Testimonial = sequelize.define('testimoniales', {	

	nombre:{
		type: Sequelize.STRING
	},

	correo:{
		type: Sequelize.STRING
	},

	mensaje:{
		type: Sequelize.STRING
	},
	
});