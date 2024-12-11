// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "contracts/registrados.sol";
import "contracts/tokenTryZepellin.sol";
import "contracts/tokenTry.sol";

/// @title Un simulador del registro de puntuaciones de un juego
/// @author Daniel Moyano Fajardo
/// @notice El uso del contrato está destinado a simples simulaciones con fines educativos y académicos
/// @dev Todas las llamadas de las funciones están implementadas sin efectos adversos intencionales
/// @custom:experimental Este es un contrato experimental.
contract registro {
    address immutable owner;
    string nombre;
    uint256 cantidad;
    uint256 puntuacion;
    uint256 tokens;
    struct User {
        string nombre;
        uint256 puntuacion;
        uint256 tokens;
    }
    mapping(address => User) usuarios;
    miMoneda monedita = new miMoneda();
    pruebatoken game = new pruebatoken();
    Registrados miLista = new Registrados();

    constructor() {
        owner = msg.sender;
        puntuacion = 0;
        tokens = 0;
        nombre = "";
    }
    
    modifier soloPropietario {
        require(msg.sender == owner,"Solo el propietario puede llamar a esta funcion");
        _; 
    }
    
    modifier valoresCorrectos {
        require(msg.sender != address(0), "La direccion no puede ser 0");
        require(bytes(nombre).length > 0, "El nombre no puede ser nulo");
        require(puntuacion >= 0, "la puntuacion no puede ser negativa");
        _;
    }
    
    /// @dev error personificado
    /// @param cantidadMax como la cantidad máxima que se puede sacar 
    /// @param cantidadsacar como la cantidad que se desea sacar
    error NoSuperior30(uint cantidadMax, uint cantidadsacar);
    
    /// @notice Saca el valor del msg value equivalente, si es menor a 5 no se le ingresa en la lista de registrados ni su 
    /// nombre o puntuación
    /// @dev se actualizan también los valores de nombre, puntuacion y tokens tanto locales como de la propia estructura 
    /// user del msg.sender
    /// @param name lleva el nombre del usuario a registrar
    /// @param puntos llevan los puntos obtenidos por el jugador
    function otorgarAcceso(string memory name, uint256 puntos) public payable   {
        string memory _nombre = name;
        uint256 _puntos = puntos;
        nombre = name;
        puntuacion = puntos;
        //monedita.approve(address(this), msg.value/10000000000000000+1);
        //monedita.transferFrom(address(this), msg.sender, msg.value/10000000000000000+1);
        
        game.aprobar(address(this), msg.value/10000000000000000+1);
        game.transferirDesde(address(this), msg.sender, msg.value/10000000000000000+1);
        miLista.enterWhiteList(msg.sender, _nombre, _puntos, msg.value/10000000000000000+1);
        usuarios[msg.sender].nombre = name;
        usuarios[msg.sender].puntuacion = puntos;
        usuarios[msg.sender].tokens = msg.value/10000000000000000+1;  
        tokens = usuarios[msg.sender].tokens;
    }
    
    /// @notice Función para actualizar la puntuación y/o nombre de un usuario
    /// @dev en la función se comprueba si el nombre nuevo es el mismo que ya estaba registrado implica que solo quiere actualizar su 
    /// puntuación, por lo tanto no se le cobrará
    /// @param _nombre lleva el nombre al que actualizar o dejar igual
    /// @param puntos cantidad nueva de puntos                                       
    function updateInfo(string memory _nombre, uint256 puntos) public  {
        require(compareStringsbyBytes(miLista.isOnWhiteList(msg.sender), "usuario no presente"), "No se encuentra en la WhiteList,"
        "por favor pague de nuevo");
        if (compareStringsbyBytes(usuarios[msg.sender].nombre, _nombre)==true && compareStringsbyBytes(
            _nombre, 
            miLista.isOnWhiteList(msg.sender)
            )==true) {
                tokens--;
                usuarios[msg.sender]= User(_nombre, puntos, tokens);
                miLista.updateWl(msg.sender, _nombre, puntos, tokens);
            }
        nombre = _nombre;
        puntuacion = puntos;
        if (usuarios[msg.sender].tokens == 1) {
            miLista.exitWhiteList(msg.sender);
        }
    }
    
    /// @dev Función que permite sacar los créditos del contrato siempre y cuando no superen el 30% del total ganado 
    /// solo al propietario del contrato
    /// @param _cantidad parámetro con la cantidad que el propietario quiere sacar
    function retirarSaldo(uint256 _cantidad) public soloPropietario {
        (bool sent, bytes memory data) = owner.call {value: address(this).balance}("");
        if (_cantidad > (address(this).balance * 30)/100) {
            revert NoSuperior30({cantidadMax: address(this).balance *30/100 , cantidadsacar: cantidad});
        }
    }

    /// @notice Devuelve el número de tokens que el usuario aún puede pagar.
    /// @dev Devuelve el número de tokens que el usuario aún puede pagar.
    /// @return siempre devolverá el nº de tokens -1.
    function comprobarTokens() public view returns (uint) {
        return usuarios[msg.sender].tokens-1;
    }
    
    /// @notice Función que permite obtener el nombre del usuario guardado
    /// @dev Función que permite obtener el nombre del usuario guardado en local
    /// @return devuelve la cadena con el nombre local del contrato
    function getNombre () public view returns (string memory) {
        return nombre;
    }
    
    /// @notice Función que permite obtener la puntuación del usuario guardado
    /// @dev Función que permite obtener la puntuación del usuario guardado en local
    /// @return devuelve el uint con la nombre puntuación del contrato
    function getPuntos () public view returns (uint) {
        return puntuacion;
    }
     
    /// @dev Función que permite solo al usuario propietario del contrato consultar el saldo almacenado del contrato
    /// @return devuelve el uint con la cantidad de créditos almacenados en el contrato
    function consultarSaldo() public view soloPropietario returns (uint256)  {
        return address(this).balance;
    }
    
    /// @dev función interna privada del contrato que permite comparar dos cadenas, si son iguales devolverá falso, de 
    /// lo contrario verdadero
    /// @param s1 parámetro con la 1ª cadena a comparar
    /// @param s2 parámetro con la 2ª cadena a comparar
    /// @return siempre devolverá lo opuesto a lo que una función de comparación de cadenas convencional devolvería
    function compareStringsbyBytes(string memory s1, string memory s2) private pure returns(bool){
        if (keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2))) {
            return false;
        }
        else {
            return true;
        }
    }
}