const input=document.querySelector("input");
const add=document.querySelector("#add");
const todolist=document.querySelector("#todolist");

let todos=[];

add.addEventListener("click",()=>{
todos.push(input.value);
addtodo(input.value);
input.value=""
});

function addtodo(todo){
    let para =document.createElement("p");
    para.innerHTML=todo;
    todolist.appendChild(para);
    para.style.color="white";
    para.addEventListener("click",()=>{
        para.style.textDecoration="line-through";
        para.style. backgroundColor="blue";
        remove(todo);
    }  )
    
    para.addEventListener("dblclick",()=>{
      todolist.removeChild(para); 
      remove(todo);
    })
    
  
}

function remove(todo){
    let index=todos.indexOf(todo);
    if(index>-1){
        todos.splice(index,1);
    }
          
}