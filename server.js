var app = require('./app/config/custom-express')();



app.listen(1337, () => {
    console.log('servidor rodando na porta 1337');
})