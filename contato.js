const animacao = [ ".botao-criativo",".dentro-botao"]

          for (let animar = 0; animar < animacao.length; animar++) {
            var element = animacao[animar];
            
          }
    
    
            VanillaTilt.init(document.querySelectorAll([animacao]),{
                max:20,
                speed:200,
            })
            const modoCriativo = document.querySelector(".esfera-botao" );
            const body = document.querySelector("body");
            const item = document.querySelector(".item")
            
            
            const textoNavegacao = document.querySelector(".texto")
            const raquelRodrigues= document.querySelector(".raquel-rodrigues")
            const desenvolvedora = document.querySelector(".desenvolvedora")
            const logo = document.querySelector(".logo")
            const logoBranco = document.querySelector(".logo-branco")

            
            modoCriativo.onclick = function(){
                this.classList.toggle("active")
                body.classList.toggle("active")
                item.classList.toggle("active")
                textoNavegacao.classList.toggle("active")
                raquelRodrigues.classList.toggle("active")
                desenvolvedora.classList.toggle("active")
                logoBranco.classList.toggle("active")
                logo.classList.toggle("active")

            }
            const modoCriativo2 = document.querySelector(".esfera-dentro" );
            modoCriativo2.onclick = function(){
                this.classList.toggle("active")
               
            }