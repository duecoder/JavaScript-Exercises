function scope() {
  const form = document.querySelector(".form");
  const lista = document.querySelector(".lista");

  let tarefas = [];

  function addTask(tarefa) {
    tarefas.push(tarefa);
  }

  function recebeForm(evento) {
    evento.preventDefault();
    const inputTarefa = form.querySelector("#tarefa");
    const tarefa = inputTarefa.value;

    addTask(tarefa);
    lista.innerHTML += `<li>${tarefa} <button type="delete" class="del">X</button></li>`;
    console.log(tarefas);

    inputTarefa.value = "";
  }

  form.addEventListener("submit", recebeForm);

  // FUNÇÃO PARA ENCONTRAR O X CLICADO, E REMOVER O ELEMENTO DA LISTA (PAI DELE)
  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("del")) {
      el.parentElement.remove();
      tarefas.pop();
      console.log(tarefas);
    }
  });
}

scope();
