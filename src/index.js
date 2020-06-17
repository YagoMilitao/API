const express = require ('express');
//const mongoose = require('mongoose');
//const cors = require ('cors');
const bodyParser = require('body-parser');

//require("./pages/Home");
//const rotaHome = require ('./pages/home');

//const Home = mongoose.model('home');

//const conexao = mongoose.model('conexao');

//require ('./database/conexao');

const app = express();

//app.use(express. json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
require('./controller/authController')(app);

/*mongoose.connect('mongodb://localhost/testebackend', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
}).catch ((erro) =>{
    console.log("Erro: Conexão com o MongoDB não foi realaizada");
});
*/
/*app.get("/", (req, res) => {
    /*Artigo esta recebendo models de Artigo.js por isso pode usar essa constante
      find => para buscar todos os registros({ da para colocar condição aqui dentro}) no caso aqui vai buscar todos os registros contidos em Artigo
      then(artigo) => caso consiga exe com sucesso e retornar os artigos vai estar recebendo os dados e atribuindo para a variavel artigo
      return res.json(artigo) => retornar os artigos que já estão no BD
    
    Home.find({}).then((home) => {
        return res.json(home);
    }).catch((erro) => {
        return res.status(400),json({
            error: true,
            message: "Nenhum home encontrado!"
        })
    })
});



app.post("/home", (req, res) => {
    const home = Home.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: home não foi cadastrado com sucesso!"
        });
    
        return res.status(200).json({
            error: false,
            message: "home cadastrado com sucesso!"
        })
    });
    
});


app.get('/entrar');

app.get('/evento');

app.get('/tabela');


module.exports = app;*/
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function (){
    console.log("Servidor iniciado na porta "+server.address().port+" http://localhost:3000/");
});