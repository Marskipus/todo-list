(()=>{const t=document.querySelector("[data-new-list-form]"),e=document.querySelector("[data-new-list-input]"),n="task.lists",i=document.querySelector("[data-delete-list-button]");let a=JSON.parse(localStorage.getItem(n))||[];const o=document.querySelector("#listContainer"),l="task.selectedListId";let d=localStorage.getItem(l);document.querySelector("[data-list-display-container]");const r=document.querySelector("[data-list-title]"),s=document.querySelector("[data-tasks]"),c=document.getElementById("task-template"),u=document.querySelector("[data-new-task-form]"),m=document.querySelector("[data-new-task-input]"),p=document.querySelector("[data-new-task-input-description]"),y=document.querySelector("[data-clear-complete-tasks-button]"),k=document.querySelector("#todocontainer");function f(){a.forEach((t=>{const e=document.createElement("li");e.dataset.listId=t.id,e.classList.add("list-name"),e.innerText=t.name,t.id===d&&e.classList.add("active-list"),o.appendChild(e)}))}function h(){localStorage.setItem(n,JSON.stringify(a)),localStorage.setItem(l,d),function(){g(o),f();const t=a.find((t=>t.id===d));null==d?k.style.display="none":(k.style.display="",r.innerText=t.name,g(s),function(t){t.tasks.forEach((t=>{const e=document.importNode(c.content,!0),n=e.querySelector("input");n.classList.add("checkbox"),n.id=t.id,n.checked=t.complete;const i=e.querySelector("label");i.htmlFor=t.id;const a=document.createElement("h3"),o=document.createElement("p");o.textContent=t.description,a.textContent=t.name,i.appendChild(a),i.appendChild(o),s.appendChild(e)}))}(t)),S()}()}function g(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function S(){const t=a.find((t=>t.id===d)),e=document.querySelectorAll("div.task");for(let n=0;n<e.length;n++)"Low"==t.tasks[n].priority?e[n].classList.add("low-priority-task"):"Medium"==t.tasks[n].priority?e[n].classList.add("medium-priority-task"):"High"==t.tasks[n].priority&&e[n].classList.add("high-priority-task")}y.addEventListener("click",(t=>{const e=a.find((t=>t.id===d));e.tasks=e.tasks.filter((t=>!t.complete)),h()})),o.addEventListener("click",(t=>{"li"===t.target.tagName.toLowerCase()&&(d=t.target.dataset.listId,h())})),i.addEventListener("click",(t=>{"yes"==prompt('Are you sure? Type "yes" to delete this list')&&(a=a.filter((t=>t.id!==d)),d=null,h())})),t.addEventListener("submit",(t=>{t.preventDefault();const n=e.value;if(null==n||""==n)return;const i=(o=n,{id:Date.now().toString(),name:o,tasks:[]});var o;e.value=null,a.push(i),h()})),u.addEventListener("submit",(t=>{t.preventDefault();const e=m.value,n=p.value,i=document.querySelector('input[name="priority"]:checked').value;if(null==e||""===e)return;null!=n&&""!==n||(n="");const o=(l=e,r=n,s=i,{id:Date.now().toString(),name:l,description:r,priority:s,complete:!1});var l,r,s;m.value=null,p.value=null,i.value=null,document.getElementById("lowpriority").checked=!1,document.getElementById("mediumpriority").checked=!1,document.getElementById("highpriority").checked=!1,a.find((t=>t.id===d)).tasks.push(o),h()})),s.addEventListener("click",(t=>{"input"===t.target.tagName.toLowerCase()&&(a.find((t=>t.id===d)).tasks.find((e=>e.id===t.target.id)).complete=t.target.checked,h())})),f(),h(),S()})();