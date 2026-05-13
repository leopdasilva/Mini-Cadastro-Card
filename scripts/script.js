document.getElementById('btn-gerar').addEventListener('click', function() {
    let nome = document.getElementById('input-nome').value;
    let idade = document.getElementById('input-idade').value;
    let curso = document.getElementById('input-curso').value;
    let cidade = document.getElementById('input-cidade').value;
    let estado = document.getElementById('input-estado').value;
    let fotoInput = document.getElementById('input-foto');
    let msgErro = document.getElementById('msg-erro');

    // Validação
    if (!nome || !idade || !curso || !cidade || !estado) {
        msgErro.style.display = 'block';
        return;
    }
    msgErro.style.display = 'none';

    document.getElementById('card-nome').innerText = nome;
    document.getElementById('card-idade').innerText = idade + " anos";
    document.getElementById('card-curso').innerText = curso;
    document.getElementById('card-cidade').innerText = cidade;
    document.getElementById('card-estado').innerText = estado;

    if (fotoInput.files && fotoInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const cardImg = document.getElementById('card-img');
            cardImg.src = e.target.result;
            cardImg.style.display = 'block'; 
        };

        reader.readAsDataURL(fotoInput.files[0]);
    }
});
