const login = () => {
    const toggleMenuBtn   = document.getElementById("toggleMenuBtn"); // Boton usuario
    const closeLoginBtn    = document.getElementById("closeLgBtn"); // Boton cerrar
    const fullscreenMenu  = document.getElementById("fullscreenMenu"); // All el usuario pantalla
  
    // Abrir el login
    toggleMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('invisible');
        console.log('Se abrió el login');
    });

    // Cerrar el login
    closeLoginBtn.addEventListener('click', () => {
      fullscreenMenu.classList.add('invisible');
      console.log('Se cerró el login');
    });
};

const search = () => {
    const toggleMenuBtn   = document.getElementById("toggleMenuBtn2"); // Boton lupa
    const closeLoginBtn    = document.getElementById("closeLgBtn2"); // Boton cerrar
    const fullscreenMenu  = document.getElementById("fullscreenMenu2"); // All el usuario pantalla
  
    // Abrir el search
    toggleMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('invisible');
        console.log('Se abrió el buscador');
    });

    // Cerrar el search
    closeLoginBtn.addEventListener('click', () => {
      fullscreenMenu.classList.add('invisible');
      console.log('Se cerró el buscador');
    });
};

const menu = () => {
    const toggleMenuBtn   = document.getElementById("toggleMenuBtn3"); // Boton lupa
    const closeLoginBtn    = document.getElementById("closeLgBtn3"); // Boton cerrar
    const fullscreenMenu  = document.getElementById("fullscreenMenu3"); // All el usuario pantalla
  
    // Abrir el search
    toggleMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('invisible');
        console.log('Se abrió el menu');
    });

    // Cerrar el search
    closeLoginBtn.addEventListener('click', () => {
      fullscreenMenu.classList.add('invisible');
      console.log('Se cerró el menu');
    });
};

export default {
    login,
    search,
    menu
};