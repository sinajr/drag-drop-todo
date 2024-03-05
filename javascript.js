

let $=document;
let modalTodo=$.querySelector('.modalBox');
let todoBTN= $.querySelector('button');
let closeModal=$.getElementsByClassName('fa-remove')[0]
let inpts=$.querySelector('input');
let dropBoxx=$.querySelectorAll(".todo-box");


todoBTN.addEventListener('click',()=>{
    modalTodo.classList.add('modalBox')
    modalTodo.classList.remove('closemodal');
    modalTodo.classList.remove('d-none')
})


closeModal.addEventListener('click',closemodal)
function closemodal(){
    modalTodo.classList.add('closemodal');
    modalTodo.classList.remove('modalBox');
}


let currentDraggedElement = null
let i=-1
inpts.addEventListener('keydown',function(event){
    if(event.code==="Enter"&&inpts.value!=""){
        let userToDO=inpts.value;
        let newp=$.createElement('p');
        newp.innerHTML=userToDO;
        document.getElementById("no-status").appendChild(newp)
        i++
        newp.setAttribute('draggable',"true");
        newp.setAttribute('class','pees');
        newp.addEventListener('dragstart',(e)=>{
            currentDraggedElement = newp;
        })
        closemodal();
        inpts.value="";

    }
});

dropBoxx.forEach(function(getDrop){
    getDrop.addEventListener('drop',(event)=>{
        getDrop.append(currentDraggedElement);
    })
})

dropBoxx.forEach(function(dropit){
    dropit.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
})
