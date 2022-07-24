function relogio() {
  // FUNÇÃO QUE CRIA A HORA 00:00:00

  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
  }

  const timer1 = document.querySelector(".timer");
  const start = document.querySelector("#start");
  const stop = document.querySelector("#pause");
  const reset = document.querySelector("#reset");

  let segundos = 0;
  let timer2;

  // FUNÇÃO QUE INICIA O TIMER E ADICIONA 1 SEGUNDO

  function iniciaRelogio() {
    timer2 = setInterval(function () {
      segundos++;
      timer1.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
  }

  // INICIA O TIMER AO CLICK DO BOTÃO
  start.addEventListener("click", function (evento) {
    clearInterval(timer2);
    iniciaRelogio();
    timer1.style.color = "black";
  });

  // PAUSA O TIMER AO CLICK
  stop.addEventListener("click", function (evento) {
    clearInterval(timer2);
    timer1.style.color = "rgb(248, 99, 0)";
  });

  // ZERA O TIMER AO CLICK
  reset.addEventListener("click", function (evento) {
    clearInterval(timer2);
    timer1.innerHTML = "00:00:00";
    timer1.style.color = "black";
    segundos = 0;
  });
}

relogio();
