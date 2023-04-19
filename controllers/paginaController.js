import {Viaje} from '../models/Viajes.js';
import {Testimonial} from '../models/Testimoniales.js';


const paginaInicio = async (req, res) =>{
	//consulta  los viajes del modelo viaje
	const promisesDB = [];

	promisesDB.push(Viaje.findAll({limit:3}));
	promisesDB.push(Testimonial.findAll({limit: 3}));



	try {
		
		const resultado = await Promise.all(promisesDB);

		res.render('inicio' , {
			pagina: 'Inicio',
			clase: 'home',
			viajes: resultado[0],
			testimoniales: resultado[1]
		});
	} catch(e) {
		// statements
		console.log(e);
	}

	
}

const paginaNosotros = (req, res) =>{
	res.render('nosotros' , {
		pagina: 'nosotros'
	});
}

const paginaViajes = async (req, res) =>{

	//consulta BD
	const viajes = await Viaje.findAll();

	//console.log(viajes);

	res.render('viajes',{
		pagina: 'Viajes',
		viajes
	});
}

const paginaTestimoniales = async (req, res) =>{
	
	try {
		const testimoniales = await Testimonial.findAll();
		res.render('testimoniales',{
			pagina: 'Testimoniales',
			testimoniales
		});
	} catch(e) {
		// statements
		console.log(e);
	}
	
}

// Muestra un viaje por su slog
const paginaDetalleViaje = async (req, res) =>{
	console.log(req.params);
    const { slug } = req.params;
    try{
        const resultado = await Viaje.findOne({ where : { slug}});
        
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}


export {
	paginaInicio,
	paginaNosotros,
	paginaViajes,
	paginaTestimoniales,
	paginaDetalleViaje
}