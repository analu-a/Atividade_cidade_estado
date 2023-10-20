var cidade_estado = require('./estados_cidades.js')

const getListaDeEstados = function(){
   let listaEstadosJSON = {}
   let listaEstadosArray = []

  
    cidade_estado.estadosCidades.estados.forEach(function(sigla, indice){

        listaEstadosArray.push(cidade_estado.estadosCidades.estados[indice].sigla)
    })
      
    listaEstadosJSON.uf = listaEstadosArray
    listaEstadosJSON.quantidade = listaEstadosArray.length

    console.log(listaEstadosJSON)
    return listaEstadosJSON
}

// getListaDeEstados()

const getDadosEstado = function(siglaDigitada){

    let sigla = siglaDigitada
   let dadosEstadoJSON = {}

   cidade_estado.estadosCidades.estados.forEach(function(estado){

        if(estado.sigla.includes(sigla)){

            dadosEstadoJSON.uf = estado.sigla
            dadosEstadoJSON.descricao = estado.nome

        }

    })

    
    console.log(dadosEstadoJSON)

}

getDadosEstado('SP')