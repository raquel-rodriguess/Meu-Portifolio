const animacao = [ ".botao-criativo",".dentro-botao"]

          for (let animar = 0; animar < animacao.length; animar++) {
            var element = animacao[animar];
            
          }
    
    
            VanillaTilt.init(document.querySelectorAll([animacao]),{
                max:20,
                speed:200,
            })
            
            VanillaTilt.init(document.querySelectorAll(".card"),{
                max:10,
                speed:200,
                glare:true,
                "max-glare": 1,
            })
            
             /*

            document.addEventListener("mousemove", function(e){
                const esfera = document.querySelector(".esfera-botao")
                esfera.style.left = e.offsetX + "2px";
                esfera.style.top = e.offsetX + "2px"
            })
           */
            
            const modoCriativo = document.querySelector(".esfera-botao" );
            const body = document.querySelector("body");
            const item = document.querySelector(".item")
            const nome = document.querySelector(".nome")
            const profissao = document.querySelector(".profissao")
            const textoNavegacao = document.querySelector(".texto")
            const raquelRodrigues= document.querySelector(".raquel-rodrigues")
            const desenvolvedora = document.querySelector(".desenvolvedora")
            const logo = document.querySelector(".logo")
            const logoBranco = document.querySelector(".logo-branco")
            const rodape = document.querySelector(".rodape")
            const recado = document.querySelector(".recado")
            
            modoCriativo.onclick = function(){
                this.classList.toggle("active")
                body.classList.toggle("active")
                item.classList.toggle("active")
                nome.classList.toggle("active")
                profissao.classList.toggle("active")
                textoNavegacao.classList.toggle("active")
                raquelRodrigues.classList.toggle("active")
                desenvolvedora.classList.toggle("active")
                logoBranco.classList.toggle("active")
                logo.classList.toggle("active")
                rodape.classList.toggle("active")
                recado.classList.toggle("active")
            }
            const modoCriativo2 = document.querySelector(".esfera-dentro" );
            modoCriativo2.onclick = function(){
                this.classList.toggle("active")
               
            }