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
inpts.addEventListener('keydown',keydownfunc);
let i=-1
function keydownfunc(event){
    if(event.code==="Enter"&&inpts.value!=""){
        let userToDO=inpts.value;
        let newp=$.createElement('p');
        newp.innerHTML=userToDO;
        event.target.parentElement.parentElement.previousElementSibling.firstElementChild.lastElementChild.append(newp);
        i++
        newp.setAttribute('draggable',"true");
        newp.setAttribute('class','pees');
        newp.setAttribute('data-i',i);
        newp.addEventListener('dragstart',(e)=>{
            e.dataTransfer.setData('pclass',e.target.className);
            e.dataTransfer.setData('counter',e.target.dataset.i)
        })
        closemodal();
        inpts.value="";
    }
}
dropBoxx.forEach(function(getDrop){
    getDrop.addEventListener('drop',(event)=>{
        let pClasses=event.dataTransfer.getData('pclass');
        let newps=$.getElementsByClassName(pClasses);
        let counterI=event.dataTransfer.getData('counter');
        getDrop.append(newps[counterI]);
        console.log(newps[counterI])
        console.log(getDrop)
    })
})
dropBoxx.forEach(function(dropit){
    dropit.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
})
// function handleDrag(event){
//     event.dataTransfer.setData('pClass',event.target.className);
// }
// dropBoxx.forEach(function (dropit){
//     dropit.addEventListener('drop',(e)=>{
//         e.dataTransfer.getData('pClass');
//         console.log(e.dataTransfer.getData('pClass'))
//     })
// })