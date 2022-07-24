class ValidaForm {
  constructor() {
    this.form = document.querySelector(".form");
    this.eventos();
  }

  eventos() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validField = this.isFieldValid();
    const passwordValid = this.validPasswords();

    if (validField && passwordValid) {
      alert("Formulário enviado.");
      this.form.submit();
    }
  }

  validPasswords() {
    let valid = true;

    const senha = this.form.querySelector(".senha");
    const senha2 = this.form.querySelector(".senha2");

    if (senha.value !== senha2.value) {
      valid = false;
      this.createError(senha, "As senhas devem ser iguais.");
      this.createError(senha2, "As senhas devem ser iguais.");
    }

    console.log(typeof senha.value);
    if (senha.value.length < 6 || senha.value.length > 12) {
      this.createError(senha, "A senha deve conter de 6 a 12 carácteres.");
      valid = false;
    }

    return valid;
  }

  isFieldValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.form.querySelectorAll(".validar")) {
      let label = campo.previousElementSibling.innerText.replace(":", "");

      if (!campo.value) {
        this.createError(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCpf(campo)) valid = false;
      }

      if (campo.classList.contains("user")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  validaCpf(campo) {
    const cpf = new ValidaCpf(campo.value);
    if (!cpf.valida()) {
      this.createError(campo, `CPF inválido.`);
      return false;
    }
    return true;
  }

  validaUsuario(campo) {
    const user = campo.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(campo, "O usuário deve ter entre 3 e 12 carácteres.");
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        campo,
        "O usuário deve conter apenas letras e/ou números."
      );
      valid = false;
    }
    return valid;
  }

  // validaSenha(campo) {
  //   const senha = campo.value;
  //   let valid = true;

  //   if ()
  // }

  createError(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaForm();
