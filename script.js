const body = document.body;
    const inputTarefa = document.getElementById("inputTarefa");
    const buttonAdd = document.getElementById("btnAdicionar");
    const buttonRev =  document.createElement("button");
    let mode = false;
    function button(){
      if(inputTarefa.value.length >= 5 ){
        const list = document.getElementById("lista");
        const li = document.createElement("li");
        const p =   document.createElement("p");

        p.innerText = inputTarefa.value;
        buttonRev.innerText = "remover";

        buttonRev.onclick = function() {
          li.remove(); 
        };

        li.appendChild(p);
        li.appendChild(buttonRev);
        list.appendChild(li);
        
        inputTarefa.value = "";
     }else{
        alert("Escreva uma tarefa maior que 5 palavras");
     }
    }
    function buttonScreen(){
        if(mode != true  ){
          ScreenMode.innerText = "LigthMode";
          mode = true;
        }else{
          ScreenMode.innerText = "DarkMode";
          mode = false;
        }
    }
    function buttonScreen(){
        if(!mode){
            ScreenMode.innerText = "LightMode";
            document.body.classList.add("dark");
            mode = true;
        }else{
            ScreenMode.innerText = "DarkMode";
            document.body.classList.remove("dark");
            mode = false;
        }
    }
