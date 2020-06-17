const mongoose = require('mongoose');
//mongoose.set('useCreateIndex', true);

//Conexão com BD
mongoose.connect('mongodb://localhost/api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then (() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
}).catch ((erro) =>{
    console.log("Erro: Conexão com o MongoDB não foi realaizada");
});
mongoose.Promise = global.Promise;


module.exports = mongoose;

//mongoose.model('conexao', conexao);