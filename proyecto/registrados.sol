// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/// @title fichero adicional para el simulador del juego veáse: registroTalador.sol
/// @author Daniel Moyano Fajardo
/// @notice El uso del contrato está destinado a simples simulaciones con fines educativos y académicos
/// @dev Todas las llamadas de las funciones están implementadas sin efectos adversos intencionales
/// @custom:experimental Este es un contrato experimental.
contract Registrados {
    mapping (address => Cuenta) public cuentas;
    struct Cuenta {
        string nombre;
        uint256 puntos;
        uint256 tokens;
        bool presente;
    }

    /// @notice Función para el ingreso de usuarios a la lista de registrados
    /// @dev Función para el ingreso de usuarios a la lista de registrados
    /// @param usuario parámetro con la dirección del usuario y por lo tanto el índice dentro de la estructura
    /// @param name parámetro con el nombre de usuario que será registrado
    /// @param points parámetro con el nº de puntos que será guardado para el usuario
    /// @param money parámetro que lleva la cantidad de "fichas" que posee el usuario
    function enterWhiteList(address usuario,string memory name,uint256 points,uint256 money) public {
        cuentas[usuario] = Cuenta(name,points,money,true);
    }

    /// @notice Función para la eliminación de usuarios de la lista de registrados
    /// @dev Función para la eliminación de usuarios de la lista de registrados
    /// @param usuario parámetro con la dirección del usuario y por lo tanto el índice dentro de la estructura
    function exitWhiteList (address usuario) public {
        delete cuentas[usuario];
    }

    /// @notice Función para la modificación de usuarios de la lista de registrados
    /// @dev Función para la modificación de usuarios de la lista de registrados
    /// @param usuario parámetro con la dirección del usuario y por lo tanto el índice dentro de la estructura
    /// @param name parámetro con el nuevo nombre de usuario que será registrado
    /// @param points parámetro con nº de puntos actualizado para el usuario
    /// @param money parámetro que lleva la cantidad de "fichas" que actualmente posee el usuario
    function updateWl(address usuario, string memory name,uint256 points,uint256 money) public {
        cuentas[usuario] = Cuenta(name,points,money,true);
    }

    /// @notice Función para la búsqueda de un usuario en la lista de registrados
    /// @dev Función para la búsqueda de un usuario en la lista de registrados
    /// @param usuario parámetro con la dirección del usuario y por lo tanto el índice dentro de la estructura
    /// @return devuelve si el usuario está presentre el nombre del mismo y si no, una cadena explicando su estado
    function isOnWhiteList(address usuario) public view returns (string memory) {
        if (cuentas[usuario].presente==false) {
            return "usuario no presente";
        }
        else {
            return cuentas[usuario].nombre;
        }
    }
}
