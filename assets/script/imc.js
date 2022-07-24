function scope() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  function recebeForm(evento) {
    evento.preventDefault();
    const inputPeso = form.querySelector("#peso");
    const inputAltura = form.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = peso / (altura * altura);
    let imcResult = "";

    // console.log(peso);
    // console.log(altura);

    // CHECAGEM DOS VALORES DO FORM
    if (!peso) {
      result.innerHTML = `<div class='alert alert-danger'>Peso inválido.</div>`;
    } else if (!altura) {
      result.innerHTML = `<div class='alert alert-danger'>Altura inválida.</div>`;
    } else {
      // CHECAGEM DO IMC
      if (imc < 18.5) {
        imcResult = "Abaixo do peso";
      } else if (imc >= 18.5 && imc <= 24.9) {
        imcResult = "Peso Normal";
      } else if (imc >= 25 && imc <= 29.9) {
        imcResult = "Acima do peso";
      } else if (imc >= 30 && imc <= 34.9) {
        imcResult = "Obesidade Grau 1";
      } else if (imc >= 35 && imc <= 39.9) {
        imcResult = "Obesidade Grau 2";
      } else if (imc >= 40) {
        imcResult = "Obesidade Grau 3";
      }
      console.log(imc.toFixed(2), imcResult);
      result.innerHTML = `<div class='alert alert-success'>Seu IMC é ${imc.toFixed(
        2
      )} (${imcResult})</div>`;
    }
  }

  form.addEventListener("submit", recebeForm);
}

scope();
