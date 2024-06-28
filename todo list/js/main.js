 
let button = document.querySelector('button');

let todos = document.querySelectorAll('li');

let  ul = document.querySelector('ul');

// todos.forEach((todo)=>{
//   todo.addEventListener('click', t =>{
//     // t.target.style.textDecoration = 'line-through';
//     // t.target.remove();
//   });
// });


button.addEventListener('click', ()=>{
    let newTodo = document.createElement('li');
    let user = prompt('next item');
    newTodo.textContent= `${user}`;
    ul.append(newTodo);
    if(user === ""){
        newTodo.remove();

    }else if(user === null){
        newTodo.remove();
    }
  });


  ul.addEventListener('click', (e)=>{
    e.target.style.textDecoration = 'line-through';
  });



