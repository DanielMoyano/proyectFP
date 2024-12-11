// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface token20 {
    //function totalSupply() external view returns (uint256);
    function suministroTotal() external returns (uint256);
    //function balanceOf(address account) external view returns (uint256);
    function cantidadDisponible(address propietarioToken) external returns (uint cantidad);
    //function allowance(address owner, address spender) external view returns (uint256);
    function prestacion(address propietarioToken, address gastador) external returns (uint quedan);
    //function transfer(address to, uint256 value) external returns (bool);
    function transferir(address paraQuien, uint cantidadTokens) external returns (bool resultadoOperacion);
    //function approve(address spender, uint256 value) external returns (bool);
    function aprobar(address gastador, uint cantidadTokens) external returns (bool resultadoOperacion);
    //function transferFrom(address from, address to, uint256 value) external returns (bool);
    function transferirDesde(address quienTransfiere,address aQuienSeTransfiere,uint cantidadTokens) external returns (bool resultadoOperacion);
    
    //event Transfer(address indexed from, address indexed to, uint256 value);
    event Transferencia(address indexed quienTransfiere, address indexed aQuienSeTransfiere, uint cantidadTokens);
    //event Approval(address indexed owner, address indexed spender, uint256 value);
    event Aprobacion(address indexed propietarioToken,address indexed gastador, uint cantidadTokens);
}

/// @title Simulador de Monedas de juego
/// @author Daniel Moyano Fajardo
/// @notice El uso del contrato está destinado a simples simulaciones con fines educativos y académicos
/// @dev Todas las llamadas de las funciones están implementadas sin efectos adversos intencionales
/// @custom:experimental Este es un contrato experimental.
contract tokenGame is token20 {
    address immutable owner;
    string public simbolo;
    string public nombre;
    uint8 public decimales;
    uint public _suministroTotal;
    mapping (address => uint) balances;
    mapping (address => mapping(address => uint)) permitido;

    constructor ()  {
        simbolo = "TG";
        nombre = "TokenGame";
        decimales = 18;
        _suministroTotal = 100000;
        balances[address(this)] = _suministroTotal;
        emit Transferencia(address(0), address(this), _suministroTotal);
    }

    modifier soloPropietario {
        require(msg.sender == owner,"Solo el propietario puede llamar a esta funcion");
        _; 
    }

    /// @dev error personificado
    /// @param cantidadMinima de creditos/tokens que debe ser movida 
    error NoMinimo(uint256 cantidadMinima);

    /// @notice Función para la transferenca de tokens
    /// @dev Función para la transferenca de tokens
    /// @param quienTransfiere parámetro tipo dirección que lleva quien realiza la transferencia
    /// @param aQuienSeTransfiere parámetro tipo dirección que lleva a quién se realiza la transferencia
    /// @param cantidadTokens parámetro que lleva la cantidad de tokens transferidos
    /// @return resultadoOperacion si la operación se realiza correctamente devuelve siempre true
    function transferirDesde(address quienTransfiere, address aQuienSeTransfiere, uint256 cantidadTokens) public returns (
        bool resultadoOperacion
        ) {
        if (cantidadTokens < 0) {
            revert("no se admiten cantidades negativas");
        }
        actualizar(quienTransfiere,aQuienSeTransfiere,cantidadTokens);
        return true;
    }

    /// @notice Función para la transferenca de tokens rápida
    /// @dev Función para la transferenca de tokens rápida
    /// @param paraQuien parámetro que lleva para quién es la transferencia
    /// @param cantidadTokens lleva la cantidad de tokens a transferir
    /// @return resultadoOperacion si la operación se realiza correctamente devuelve siempre true
    function transferir(address paraQuien, uint cantidadTokens) public returns (bool resultadoOperacion){
        if (cantidadTokens <= 0) {
            revert NoMinimo({cantidadMinima: 0});
        }
        actualizar(owner, paraQuien, cantidadTokens);
        return true;
    }

    /// @notice Función para la aprobación de una transferencia de tokens
    /// @dev Función para la aprobación de una transferencia de tokens
    /// @param gastador parámetro con la dirección que va a realizar la aprobación del traspaso de tokens
    /// @param cantidadTokens la cantidad de tokens que se aprueba transferir
    /// @return resultadoOperacion si la operación se realiza correctamente devuelve siempre true
    function aprobar(address gastador, uint cantidadTokens) public returns (bool resultadoOperacion) {
        permitido[msg.sender][gastador] = cantidadTokens;
        emit Aprobacion(msg.sender, gastador, cantidadTokens);
        return true;
    }

    /// @notice Función para saber la cantidad de tokens que puede transferir el propietario
    /// @dev Función para saber la cantidad de tokens que puede transferir el propietario
    /// @param propietarioToken parametro del propietarario del token
    /// @param gastador dirección de quien solicita gastar los token 
    /// @return quedan devuelve la cantidad de monedas restantes para poder dar
    function prestacion(address propietarioToken, address gastador) public view returns (uint256 quedan) {
        return permitido[propietarioToken][gastador];
    }

    /// @notice Función para saber la cantidad de tokens que aún no han sido utilizados
    /// @dev Función para saber la cantidad de tokens que aún no han sido utilizados
    /// @return devuelve la cantidad de monedas que aún no han sido usadas
   function suministroTotal() public view returns (uint) {
        return _suministroTotal - balances[address(0)];
    }
    
    /// @notice Función para saber la cantidad de tokens que posee la cuenta especificada
    /// @dev Función para saber la cantidad de tokens que posee la cuenta especificada
    /// @param propietarioToken dirección de quien se quiere saber su número de tokens
    /// @return quedan devuelve la cantidad de tokens de la cuenta dada por parámetro 
    function cantidadDisponible(address propietarioToken) public view returns (uint256 quedan) {
        return balances[propietarioToken];
    }

    /*function _update(address from, address to, uint256 value) internal virtual {
        if (from == address(0)) {
            // Overflow check required: The rest of the code assumes that totalSupply never overflows
            _totalSupply += value;
        } else {
            uint256 fromBalance = _balances[from];
            unchecked {
                // Overflow not possible: value <= fromBalance <= totalSupply.
                _balances[from] = fromBalance - value;
            }
        }

        if (to == address(0)) {
            unchecked {
                // Overflow not possible: value <= totalSupply or value <= fromBalance <= totalSupply.
                _totalSupply -= value;
            }
        } else {
            unchecked {
                // Overflow not possible: balance + value is at most totalSupply, which we know fits into a uint256.
                _balances[to] += value;
            }
        }
        emit Transferencia(from, to, value);
    }*/

    /// @dev Función interna para saber la actualización de valores y realización de transferencias:
    /// unchecked: manera que ahorrar en gas en ciertas operaciones y evitar que el programa se desborde
    /// @param quienTransfiere parámetro tipo dirección que lleva quien realiza la transferencia
    /// @param paraQuien parámetro tipo dirección que lleva a quién se realiza la transferencia
    /// @param cantidadTokens parámetro que lleva la cantidad de tokens transferidos
    function actualizar(address quienTransfiere, address paraQuien, uint cantidadTokens) internal {
        if (quienTransfiere == address(0)) {
            _suministroTotal+=cantidadTokens;
        } else {
            uint256 desdeBalance = balances[quienTransfiere];
            unchecked {
                balances[quienTransfiere] = desdeBalance - cantidadTokens;
            }
        }
        if (paraQuien == address(0)) {
            unchecked {
                _suministroTotal -= cantidadTokens;
            }
        } else {
            unchecked{
                balances[paraQuien] += cantidadTokens;
            }
        }
        emit Transferencia(quienTransfiere, paraQuien, cantidadTokens);
    }
}