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

app.get('/estados/sigla', cors(), async   function(request, response, next){

    let controleListaEstados = require('./module/arrayJSON_cidade_estado')
    let estados = controleListaEstados.getCidades('SP')

    response.json(estados)
    response.status(200)

})

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições')

})
