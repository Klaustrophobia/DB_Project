const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

new Vue({
    el: '#app',
    data: {
      correo: '',
      contrasenia: '',
      mensaje: ''
    },
    methods: {
      login() {
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ CORREO: this.correo, CONTRASENIA: this.contrasenia })
        })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            this.mensaje = 'Login correcto';
          } else {
            this.mensaje = 'Credenciales incorrectas';
          }
        })
        .catch(error => {
          console.error('Error:', error);
          this.mensaje = 'Error en el inicio de sesión. Por favor, inténtelo de nuevo.';
        });
      }
    }
  });
  