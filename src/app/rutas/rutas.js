//Para poder crear rutas, se necesita importar express
import { Router } from 'express';

//Metodo para crear rutas
const router = Router();

router.get('./', (req, res) => {
    res.send('Hola Mundo');
});



//Exportar el modulo de rutas
export default router;