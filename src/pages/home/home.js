const mongoose = require('mongoose');
const router = express.Router();
//required: true => quer dizer que tem que ter igual o NOT NULL
/*const Home = new mongoose.Schema({
   titulo: {
       type: String,
       
       required: true
   },
   conteudo:{
       type: String,
       required: true
   }
},
{
    timestamps: true, 
});*/
 

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'Usando o GET dentro da rota home'
    });
});

module.exports = home;

mongoose.model('home', Home);