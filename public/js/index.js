
    
    console.log('index.js success');
    const qs = (element) => document.querySelector(element);

    document.querySelector('.container').style.display = "block";

    let main = document.querySelector("main");
    let subtitulo = document.querySelector(".subtitulo");
    let a = document.querySelector("a");
    let parrafos = document.querySelectorAll("p");
    
    let nombre = prompt("¡Hola! Ingresa tu nombre");

    if(nombre){
        subtitulo.innerText += nombre
    } else {
        subtitulo.innerText += "invitado"
    }
    
    subtitulo.style.textTransform = "uppercase";
    a.style.color = "#E51B3E";

    let confirmar = confirm("¿Deseas colocar un fondo de pantalla?");
    if(confirmar){
        document.querySelector("body").classList.add("fondo");
    }

    main.style.display = "block";

    for (let i = 0; i < parrafos.length; i++){
        if(i % 2 == 0){
            parrafos[i].classList.add("destacadoPar");
        } else {   
            parrafos[i].classList.add("destacadoImpar");
        }
    }


   