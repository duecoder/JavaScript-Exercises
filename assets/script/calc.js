// Com Factory Function

// function criaCalc() {
//   return {
//     display: document.querySelector(".display"),

//     inicia() {
//       this.buttonClick();
//       this.pushEnter();
//     },

//     pushEnter() {
//       this.display.addEventListener("key-up", (e) => {
//         if (e.keycode === 13) {
//           this.doCount();
//         }
//       });
//     },

//     buttonClick() {
//       document.addEventListener(
//         "click",
//         function (evento) {
//           const el = evento.target;

//           if (el.classList.contains("btn-num")) {
//             this.btnToDisplay(el.innerText);
//           }

//           if (el.classList.contains("clear")) {
//             this.displayClear();
//           }

//           if (el.classList.contains("volta")) {
//             this.delOne();
//           }

//           if (el.classList.contains("igual")) {
//             this.doCount();
//           }
//         }.bind(this)
//       );
//     },

//     btnToDisplay(valor) {
//       this.display.value += valor;
//     },

//     displayClear() {
//       this.display.value = "";
//     },

//     delOne() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     doCount() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         // if (!conta) {
//         //   calculadora.displayClear();
//         //   return;
//         // }

//         this.display.value = conta;
//       } catch (e) {
//         this.displayClear();
//         alert("Conta inválida.");
//         return;
//       }
//     },
//   };
// }

// const calculadora = criaCalc();
// calculadora.inicia();

/////////////////

// Com Constructor Function

function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
  };

  this.sendToDisplay = (valor) => {
    this.display.value += valor.innerText;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.eraseOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.doCount = () => {
    let conta = this.display.value;
    try {
      conta = eval(conta);

      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida.");
      this.clearDisplay();
    }
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;

      if (el.classList.contains("btn-num")) {
        this.sendToDisplay(el);
      }
      if (el.classList.contains("clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("volta")) {
        this.eraseOne();
      }

      if (el.classList.contains("igual")) {
        this.doCount();
      }
    });
  };
}
const calculadora = new Calculadora();
calculadora.inicia();
