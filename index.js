import express from 'express';
import router from './routes/index.js';
import sequelize from './config/db.js';
import dotenv from 'dotenv/config';



console.log(process.env.DB_HOST);

const app = express();

const port = process.env.PORT || 4000;

//conectar la BD
sequelize.authenticate()
	.then(()=>{ console.log('Conectado correctamente')})
	.catch(er => console.log(er));



//habilita pug
app.set('view engine','pug');

//obtiene el año actual
app.use((req, res, next) =>{

	const year = new Date();

	res.locals.currYear = year.getFullYear();
	res.locals.nombreSitio = "Agencia de Viajes";
	return next();
});

//agrega body parser para los formularios
app.use(express.urlencoded({extend: true}));




//define la carpeta publica
app.use(express.static('public'));
app.use('/viajes', express.static('public'));


//agrega al router
app.use('/', router);
//a(href=`./${viaje.slug}`, class="btn btn-success btn-block") Más infromación 




app.listen(port , () =>{
	console.log(`El servidor esta funcionado en el puerto ${port}`)
})