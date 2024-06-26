'use strict';

const login = () => {
    const toggleMenuBtn   = document.getElementById("toggleMenuBtn"); // Boton usuario
    const closeLoginBtn    = document.getElementById("closeLgBtn"); // Boton cerrar
    const fullscreenMenu  = document.getElementById("fullscreenMenu"); // All el usuario pantalla
  
    toggleMenuBtn.addEventListener('click', () => {
        fullscreenMenu.style.display = 'block';
        console.log('Se abrió el login');
    });

    closeLoginBtn.addEventListener('click', () => {
      fullscreenMenu.style.display = "none";
      console.log('Se cerró el login');
    });

// Al hacer click en otro lado se cierra el login
    // window.addEventListener("click", (event) => {
    //   if (event.target === fullscreenMenu) {
    //     fullscreenMenu.style.display = "none";
    //   }
    // });
};

console.log('Hola mundo');

login();
