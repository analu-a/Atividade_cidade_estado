/*****************************************************
 * Objetivo: Criar uma API para responder dados de   *
 * Estados e Cidades                                 *
 * Data: 10/11/2023                                  *
 * Autor: Ana Luiza                                  *
 * Versão: 1.0                                       *
*****************************************************/

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * 
* Instalações das dependencias para criação da API:    *
*                                                      *
*  express( npm install express --save )               *
*    Dependencia do node para auxiliar na criação      *
*     de API                                           *
* ---------------------------------------------------- *               
*  cors(npm install cors --save)                       *
*    Dependencia para manipular recursos de acessos,   *
*     permissões, etc da API (HEADER)                  *
* ---------------------------------------------------- *                                                    
*  body-parser( npm install body-parser --save)        *
*     Dependencia para auxiliar na chegada de dados    *
*     na API (BODY)                                    *
* * * * * * * * * * * * * * * * * * * * * * * * * * *  */

const express =  require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto app tendo como referencia a classe do express
const app = express()

// Request -> Receber dados
// Response -> Devolve dados

//Função para configurar as permissões
app.use((request, response, next)=> {

    //Configura quem podera fazer requisições na API (* - [libera tudo] | IP [restringe o acesso])
    response.header('Access-Control-allow-Origin', '*')

    //Configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Access-Control-allow-Methods', 'GET')

    app.use(cors())

    next()

})

// EndPoints: Listar a sigla de todos os estados

app.get('/estado/sigla', cors(), async   function(request, response, next){

    let controleListaEstados = require('./module/arrayJSON_cidade_estado')
    let estados = controleListaEstados.getListaDeEstados()

    response.json(estados)
    response.status(200)

})

//EndPoint: Retorna os dados do estado, filtrando pela sigla
app.get('/estado/sigla/:uf' , cors(), async function(request, response, next){
    //Recebe uma variavel encaminhada por parametro na URL da requisição
    let siglaEstado = request.params.uf

    //Import do arquivo de funções
    let controleDadosEstado = require('./module/arrayJSON_cidade_estado')
    let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado)

    if(dadosEstado){
        response.json(dadosEstado)
        response.status(200)
    }  else{
        response.json({ERRO: "Não foi possivel encontrar um item"})
        response.status(404)
    }
 
})

//EndPoint: Retorna os dados da capital filtrando pela sigla
app.get('/capital/estado', cors(), async function(request, response, next){

    //Recebe parametros via query, que são variaveis encaminhadas na URL da requisição (?uf=SP)
    let siglaEstado = request.query.uf

    let controleDadosCapital = require ('./module/arrayJSON_cidade_estado')
    let dadosCapital = controleDadosCapital.getCapitalEstado(siglaEstado)

    if(dadosCapital){
        response.json(dadosCapital)
        response.status(200)
    } else {
        response.status(404)
        response.json({Erro: "Não foi possivel encontrar um item"})
    }
})

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')

})
