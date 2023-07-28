import _ from "underscore";


/**
 * 
 * @param {Array<string>} tiposDeCarta ej:['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ej: ['A','J','Q','K']
 * @returns {Arrary<string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length===0) throw new Error ('tiposDeCarta es necesario');
    if(!tiposEspeciales || tiposEspeciales.length===0) throw new Error ('tiposEspeciales es necesario');

    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}