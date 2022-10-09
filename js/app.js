
let form                    = document.querySelector("form")
let input                   = document.querySelector("input")
let list                    = document.querySelector(".list")
let clearBtn                = document.getElementById("clear-button")
let tasksEmptyDiv           = document.querySelector(".tasks-empty")
let alertMsg                = document.getElementById("alert")
let tasksCount              = document.getElementsByClassName("c-tasks-count")
let tasksDone               = document.getElementsByClassName("c-tasks-done")

form.onsubmit = newTask ; 
clearBtn.onclick = clearTask;
window.onload = input.focus()
tasksEmpty()

 function newTask (e){

    e.preventDefault()

    if(input.value === ""){

        alertMsg.innerHTML = `<div class=" null-value "> Please Insert Value !</div>`
        
        setTimeout(() => {
            let nullValue = document.querySelector(".null-value")
            // nullValue.innerHTML = ""

            nullValue.style.height = 0
            nullValue.style.padding = 0

            setTimeout(() => {

                nullValue.remove()

            },500)


        }, 1000)

        
    }else{

        //add task
        let listItem = document.createElement("li");
        listItem.classList.add("list-item")

        let inputCap = input.value.substr(0,1).toUpperCase() + input.value.substr(1,input.value.length);

        listItem.innerHTML = `


        <span class ="task"> ${inputCap}  </span>
        <i class=" del fa-sharp fa-solid fa-trash"></i>

        
        `
        list.appendChild(listItem)
        input.value = ""
        input.focus()
        tasksEmpty()
        taskscount(list.children.length)
        tasksdone()

        // delete items

        let del = document.querySelectorAll(".del")

       del.forEach(e => {
        e.onclick = removeTask;
       
       })

       // done tasks

       let allDone = document.querySelectorAll(".list-item")
       allDone.forEach(done => {

        done.children[0].onclick = DoneTask;


       })

       taskscount(list.children.length)
       

    
    }

        
    }

    //remove tasks
   
  function removeTask(e){
    e.target.parentNode.remove()
    tasksEmpty()
    taskscount(list.children.length)
    tasksdone()

  }


  function clearTask(){

    list.innerHTML = " ";
    tasksEmpty();
    taskscount(list.children.length)
    tasksdone()


  }

  function tasksEmpty(){

    if(list.children.length === 0){

        tasksEmptyDiv.innerHTML = "Tasks Empty"
    }else{
       tasksEmptyDiv.innerHTML = ""
       taskscount(list.children.length)
       tasksdone()

    }

    
  }
  // done task..

   function DoneTask (e){

  e.target.classList.toggle("done")
  tasksdone()


  }


  function taskscount(count){

   document.querySelector(".c-tasks-count").innerHTML = count

  }
  function tasksdone(){

    let doneLength = document.querySelectorAll(".done").length

    document.querySelector(".c-tasks-done").innerHTML = doneLength;


  }


