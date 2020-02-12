let list=document.querySelector('.list');
let newList=document.querySelector('.left a')
let red=document.querySelector('.red');
let inp=document.querySelector('.new-item');
let btn=document.querySelector('.submit-new-item')
let btnRemove=document.querySelector('.link-button ')

let save=document.querySelector('.save');



function getCreate() {
    if (inp.value=="") {
        alert("Nese Yazda Ala?")
      return;
    }
    
             let todo=document.querySelector('.todo');
            let ulTag=document.querySelector('.item-list')
            let toggle=document.querySelector('.toggle');
            let liTag=document.createElement('li');
            let trash=document.createElement('i');
            let dots=document.createElement('i');

            trash.className=" fas fa-trash  mt-1";
            dots.className="fas fa-ellipsis-v mt-1";
            liTag.className="list-group-item d-flex justify-content-between";

            liTag.classList.add('todo');
            liTag.classList.add('toggle');
            liTag.innerText=inp.value;


            liTag.appendChild(dots)
            ulTag.appendChild(liTag);
           
       
          let float=document.querySelector('.float');
          let  checkStyle=document.querySelector('.check');

          var x = document.createElement("INPUT");
          x.setAttribute("type", "checkbox");
          liTag.appendChild(x);
          x.classList.add('float');
            x.classList.add('check');


          liTag.addEventListener('click',function () {
          liTag.classList.toggle("red");
          liTag.appendChild(trash);
        //  liTag.replaceChild(trash, dots);
            dots.style.display='none';
      
         })





            trash.onclick=function () {this.parentElement.remove();}

            btnRemove.onclick=function () {
              for (let i = 0; i < x.length; i++) {
                if (x[i].checked) {
                    let del=document.querySelector('.del')
                    liTag.classList.add('del');
                    x[i].parentElement.remove();
                   
             }
                
                  
              }
           
                }
            
             
            
      
               inp.value="";  
             
}




inp.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        getCreate();
    }
})

btn.addEventListener("click", function(){
    getCreate();
    
})


   