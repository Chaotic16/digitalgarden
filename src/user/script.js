function applyRecall(){

  document.querySelectorAll("u").forEach(el=>{
    if(el.classList.contains("recall-done")) return;

    const span=document.createElement("span");
    span.classList.add("recall");
    span.innerHTML=el.innerHTML;
    span.onclick=()=>span.classList.toggle("revealed");

    el.replaceWith(span);
  });

}

const observer=new MutationObserver(()=>{
  applyRecall();
});

observer.observe(document.body,{
  childList:true,
  subtree:true
});

window.addEventListener("load",()=>{
  applyRecall();

  const controls=document.createElement("div");
  controls.classList.add("recall-controls");

  const show=document.createElement("button");
  show.innerText="Show All";

  const hide=document.createElement("button");
  hide.innerText="Hide All";

  show.onclick=()=>{
    document.querySelectorAll(".recall")
      .forEach(el=>el.classList.add("revealed"));
  };

  hide.onclick=()=>{
    document.querySelectorAll(".recall")
      .forEach(el=>el.classList.remove("revealed"));
  };

  controls.append(show,hide);

  document.querySelector("main")
    .prepend(controls);

});
