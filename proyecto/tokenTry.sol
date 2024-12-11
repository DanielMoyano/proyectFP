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

contract pruebatoken is token20 {
    address immutable owner;
    string private simbolo;
    string private nombre;
    uint256 private decimales;
    uint256 private _totalSupply;
    uint256 private _suministroTotal;
    //mapping(address account => uint256) private _balances;
    mapping (address => uint) balances;
    //mapping(address account => mapping(address spender => uint256)) private _allowances;
    mapping (address => mapping(address => uint)) private permitido;
    constructor ()  {
        simbolo = "TTY";
        nombre = "";
        decimales = 2;
        _suministroTotal = 10000;
        balances[address(this)]=_suministroTotal;
        owner = msg.sender;
        emit Transferencia(address(0), address(this), _suministroTotal);
    }

    modifier soloPropietario {
        require(msg.sender == owner,"Solo el propietario puede llamar a esta funcion");
        _; 
    }

    /*function totalSupply() public view virtual returns (uint256) {
        return _totalSupply;
    }*/
    function suministroTotal() public view returns (uint) {
        return _suministroTotal - balances[address(0)];
    }
    /*function balanceOf(address account) public view virtual returns (uint256) {
        return _balances[account];
    }*/
    function cantidadDisponible(address propietarioToken) view public returns (uint quedan) {
        return balances[propietarioToken];
    }

    function transferir(address paraQuien,uint cantidadTokens) public returns (bool resultadoOperacion){
        /*balances[msg.sender] = balances[msg.sender] - cantidadTokens;
        balances[paraQuien] = balances[paraQuien] + cantidadTokens;*/
        //emit Transferencia(msg.sender, paraQuien, cantidadTokens);
        actualizar(owner, paraQuien, cantidadTokens);
        return true;
    }

    function aprobar(address gastador,uint cantidadTokens) public returns (bool resultadoOperacion) {
        permitido[msg.sender][gastador] = cantidadTokens;
        emit Aprobacion(msg.sender, gastador, cantidadTokens);
        return true;
    }
    /*
        function allowance(address owner, address spender) public view virtual returns (uint256) {
        return _allowances[owner][spender];
        }
    */
    function prestacion(address propietarioToken, address gastador) public view returns (uint quedan) {
        return permitido[propietarioToken][gastador];
    }
    
      


    function transferirDesde(address quienTransfiere,address aQuienSeTransfiere,uint cantidadTokens) public returns (bool resultadoOperacion) {
        /*balances[quienTransfiere]=balances[quienTransfiere] - cantidadTokens;
        permitido[quienTransfiere][address(this)] = permitido[quienTransfiere][address(this)] - cantidadTokens;
        balances[aQuienSeTransfiere]=balances[aQuienSeTransfiere] + cantidadTokens;*/
        actualizar(quienTransfiere,aQuienSeTransfiere,cantidadTokens);
        return true;
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

    /*----------------*/    


    function _mint(address account, uint256 value) internal {
        if (account == address(0)) {
        }
        actualizar(address(0), account, value);
    }

    function _burn(address account, uint256 value) internal {
        if (account == address(0)) {
        }
        actualizar(account, address(0), value);
    }
}