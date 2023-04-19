import {Testimonial} from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) =>{

	const {nombre, correo, mensaje} = req.body;

	const erroresList = [];

	if (nombre.trim() === '') {
		erroresList.push({mensaje: "El nombre esta vacio"});
	}

	if (correo.trim() === '') {
		erroresList.push({mensaje: "El correo esta vacio"});
	}

	if (mensaje.trim() === '') {
		erroresList.push({mensaje: "El mensaje esta vacio"});
	}

	if (erroresList.length > 0) {
		//consultar testimoniales existentes
		const testimoniales = await Testimonial.findAll();

		res.render('testimoniales',{
			pagina: 'Testimoniales',
			erroresList,
			nombre,
			correo,
			mensaje,
			testimoniales
		})
	}
	else{
		//almacena los datos
		try {
			await Testimonial.create({
				nombre,
				correo,
				mensaje
			})
			res.redirect('/testimoniales')
		} catch(e) {
			// statements
			console.log(e);
		}
	}
}


export {
	guardarTestimonial
}