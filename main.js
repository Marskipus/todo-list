(()=>{"use strict";document.querySelector("#submit").addEventListener("click",(function(){let e={title:document.querySelector("#todotitle").value,description:document.querySelector("#tododescription").value},t=document.querySelector("#todocontainer"),o=document.createElement("div");o.classList.add("todobox"),t.appendChild(o);let n=document.createElement("h2");o.appendChild(n),n.textContent=e.title;let d=document.createElement("p");o.appendChild(d),d.textContent=e.description}))})();