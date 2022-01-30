let inputnode=document.querySelector(".inputbox");

inputnode.addEventListener("keypress",function(e){
    let task=inputnode.value;
  if(e.code=="Enter" && task.length>0)
  {
     
      let linode=document.createElement("li");
  linode.setAttribute("class","task");
  linode.innerText=task;
  inputnode.value="";
  let tasklist=document.querySelector(".task-list");
  tasklist.appendChild(linode);
  linode.addEventListener("dblclick",function(){
      linode.remove();
  })

  }
});