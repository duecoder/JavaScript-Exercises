class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  éSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraCpf() {
    const cpf9 = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpf9);
    const digito2 = ValidaCpf.geraDigito(cpf9 + digito1);
    this.novoCpf = cpf9 + digito1 + digito2;
  }

  static geraDigito(cpf9) {
    let soma = 0;
    let contador = cpf9.length + 1;

    for (let i of cpf9) {
      soma += contador * Number(i);
      contador--;
    }

    const digito = 11 - (soma % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  // static geraDigito2(cpf9) {
  //   let soma = 0;
  //   let contador = 11;

  //   for (let i of cpf9) {
  //     soma += contador * Number(i);
  //     contador--;
  //   }

  //   const digito = 11 - (soma % 11);
  //   return digito <= 9 ? String(digito) : "0";
  // }

  valida() {
    this.geraCpf();
    if (!this.cpfLimpo) return false;
    if (this.éSequencia()) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.novoCpf === this.cpfLimpo) {
      console.log("O cpf " + this.novoCpf + " é válido.");
      return true;
    } else {
      console.log("Cpf inválido.");
      return false;
    }
  }
}

// const validacpf = new ValidaCpf();

// validacpf.valida();
