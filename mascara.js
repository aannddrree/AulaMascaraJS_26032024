function mascaraCPF(){
    document.getElementById('cpf').addEventListener('input', function(e){
        var campoCPF = e.target;
        var valorCPF = campoCPF.value;
        valorCPF = valorCPF.replace(/\D/g, ''); // Remove caracteres não numéricos
        valorCPF = valorCPF.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
        valorCPF = valorCPF.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
        valorCPF = valorCPF.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o traço
        campoCPF.value = valorCPF;
    });
}

function mascaraTelefone() {
    var telefone = document.getElementById('telefone');
    
    telefone.addEventListener('input', function(e) {
        var campo = e.target;
        var valor = campo.value.replace(/\D/g, '');
        
        if (valor.length === 11) {
            campo.value = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
        } else if (valor.length === 10) {
            campo.value = valor.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
        } else if (valor.length > 10) {
            campo.value = '(' + valor.substr(0, 2) + ') ' + valor.substr(2, 5) + '-' + valor.substr(7, 4);
        } else {
            campo.value = valor;
        }
    });
}

window.onload = function() {
    mascaraTelefone();
    mascaraCPF();
};


