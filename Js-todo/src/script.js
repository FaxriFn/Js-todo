let list=document.querySelector('.list');
let newList=document.querySelector('.left a')
let inp=document.querySelector('.new-item');
let btn=document.querySelector('.submit-new-item')
let btnRemove=document.querySelector('.link-button ')
function getCreate() {
    if (inp.value=="") {
        alert("Nese Yazda Ala?")
      return;
    }
            let ulTag=document.querySelector('.item-list') 
            let liTag=document.createElement('li'); 
            let trash=document.createElement('i')
            let dots=document.createElement('i');
            trash.className=" fas fa-trash  mt-1";
            dots.className="fas fa-ellipsis-v mt-1";
            liTag.className="list-group-item d-flex justify-content-between";
            liTag.classList.add('todo');
            liTag.classList.add('toggle');
            liTag.innerText=inp.value;
            liTag.appendChild(dots)
            ulTag.appendChild(liTag);
          var x = document.createElement("INPUT");
          x.setAttribute("type", "checkbox");
          liTag.appendChild(x);
          x.classList.add('float');
           x.classList.add('check');
          liTag.onclick= ()=> {  liTag.classList.toggle("red");  liTag.appendChild(trash); dots.style.display='none'; }
          trash.onclick=function () {this.parentElement.remove();}
           btnRemove.onclick= ()=> {
              liTag.classList.add('del');
              for (let i = 0; i < x.length; i++) {
                if (x[i].checked) {
                    liTag.classList.add('del');
                    x[i].parentElement.remove();    
             }    
              }
                }
               inp.value="";             
}
inp.onkeyup=(e)=>{ if ( e.keyCode===13) {getCreate();}}
btn.onclick=()=> {getCreate()};



   