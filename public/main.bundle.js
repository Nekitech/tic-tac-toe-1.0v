(()=>{"use strict";const e={"x player":"x","o player":"o"};let t=Object.keys(e)[0],l=!1,r=new Array(5).fill(null).map((e=>new Array(5).fill(null)));const n=document.querySelector(".field"),o=document.querySelector(".currPlayer"),i=document.querySelector(".reload"),d=document.querySelector(".winner"),u=()=>{n.innerHTML="",n.setAttribute("style","grid-template-columns: repeat(5, 50px)");for(let e=0;e<25;e++){const e=document.createElement("div");e.classList.add("cell"),n.appendChild(e)}Array.from(n.children).forEach(((e,t)=>{var l,n;e.setAttribute("cellX",String(t%5)),e.setAttribute("cellY",String(Math.floor(t/5))),e.innerHTML=null!==(n=null===(l=null==r?void 0:r[Math.floor(t/5)])||void 0===l?void 0:l[t%5])&&void 0!==n?n:null}))};n.addEventListener("click",(n=>{if(l)return;const i=n.target;if(i.classList.contains("cell")){const[n,v]=[Number(i.getAttribute("cellX")),Number(i.getAttribute("cellY"))];if(((e,t,l)=>{var r,n;return null!==(n=null===(r=null==l?void 0:l[e])||void 0===r?void 0:r[t])&&void 0!==n?n:null})(v,n,r))return;i.innerHTML=e[t],u=n,(c=r)[v][u]=e[t],r=c,((l,r,n)=>{var o,i,d,u;const c={h:0,v:0,dtop:0,dbot:0},v={h:0,v:0,dtop:0,dbot:0};for(let a=-2;a<3;a++){if((null===(o=null==n?void 0:n[r])||void 0===o?void 0:o[l-a])===e[t]){if(c.h++,c.h>=3)return!0;c.h>v.h&&v.h++}else c.h=0;if((null===(i=null==n?void 0:n[r-a])||void 0===i?void 0:i[l])===e[t]){if(c.v++,c.v>=3)return!0;c.v>v.v&&v.v++}else c.v=0;if((null===(d=null==n?void 0:n[r-a])||void 0===d?void 0:d[l-a])===e[t]){if(c.dtop++,c.dtop>=3)return!0;c.dtop>v.dtop&&v.dtop++}else c.dtop=0;if((null===(u=null==n?void 0:n[r-a])||void 0===u?void 0:u[l- -1*a])===e[t]){if(c.dbot++,c.dbot>=3)return!0;c.dbot>v.dbot&&v.dbot++}else c.dbot=0;if(3===Math.max(...Object.values(v)))return!0}return!1})(n,v,r)?(l=!0,d.innerHTML=t+" win!"):(e=>{for(let t=0;t<5;t++)for(let l=0;l<5;l++)if(!e[t][l])return!1;return!0})(r)&&(d.innerHTML="Ничья"),t=t===Object.keys(e)[0]?Object.keys(e)[1]:Object.keys(e)[0],o.innerHTML=t+"'s move"}var u,c})),u(),i.onclick=()=>{Array.from(n.children).map((e=>e.innerHTML="")),r=new Array(5).fill(null).map((e=>new Array(5).fill(null))),l=!1,t=Object.keys(e)[0],o.innerHTML="",d.innerHTML="",u()}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLQyxHQUFPLElBQUlILE1BbEpELEdBa0prQkMsS0FBSyxRQUMzQ0gsR0FBTSxFQUNOSCxFQUFhQyxPQUFPQyxLQUFLSCxHQUFTLEdBRWxDYSxFQUFlSSxVQUFZLEdBRTNCRixFQUFXRSxVQUFZLEdBQ3ZCRCxHQUFRLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS10eXBlc2NyaXB0Ly4vc3JjL3R5cGVzY3JpcHQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmludGVyZmFjZSBJUGxheWVycyB7XHJcbiAgICBcInggcGxheWVyXCI6IHN0cmluZztcclxuICAgIFwibyBwbGF5ZXJcIjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBwbGF5ZXJzOiBJUGxheWVycyA9IHtcclxuICAgIFwieCBwbGF5ZXJcIjogXCJ4XCIsXHJcbiAgICBcIm8gcGxheWVyXCI6IFwib1wiXHJcbn07XHJcblxyXG5sZXQgY3VyclBsYXllcjogc3RyaW5nID0gT2JqZWN0LmtleXMocGxheWVycylbMF07XHJcblxyXG5sZXQgd2luOiBib29sZWFuID0gZmFsc2U7XHJcbmxldCBmaWVsZFNpemU6IG51bWJlciA9IDU7XHJcbmNvbnN0IGNvbmRXaW46IG51bWJlciA9IDM7XHJcbmxldCBjZWxsc0FycmF5OiBzdHJpbmdbXVtdID0gbmV3IEFycmF5KGZpZWxkU2l6ZSlcclxuICAgIC5maWxsKG51bGwpXHJcbiAgICAubWFwKChlbCkgPT4gbmV3IEFycmF5KGZpZWxkU2l6ZSkuZmlsbChudWxsKSk7XHJcblxyXG5jb25zdCBmaWVsZDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWVsZFwiKTtcclxuY29uc3QgY3VyclBsYXllclRleHQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VyclBsYXllclwiKTtcclxuY29uc3QgcmVsb2FkR2FtZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWxvYWRcIik7XHJcbmNvbnN0IHdpbm5lclRleHQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyXCIpO1xyXG5cclxuY29uc3QgY2hlY2tEcmF3ID0gKGZpZWxkOiBzdHJpbmdbXVtdKTogYm9vbGVhbiA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmaWVsZFNpemU7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoIWZpZWxkW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmNvbnN0IGdldEZpZWxkQ2VsbCA9ICh4Om51bWJlciwgeTpudW1iZXIsIGZpZWxkOiBzdHJpbmdbXVtdKSA9PiB7XHJcbiAgICByZXR1cm4gZmllbGQ/Llt4XT8uW3ldID8/IG51bGxcclxufVxyXG5cclxuY29uc3QgY2hhbmdlQ3VyclBMYXllciA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmIChjdXJyUGxheWVyID09PSBPYmplY3Qua2V5cyhwbGF5ZXJzKVswXSlcclxuICAgICAgICBjdXJyUGxheWVyID0gT2JqZWN0LmtleXMocGxheWVycylbMV07XHJcbiAgICBlbHNlIGN1cnJQbGF5ZXIgPSBPYmplY3Qua2V5cyhwbGF5ZXJzKVswXTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGN1cnJQbGF5ZXJUZXh0LmlubmVySFRNTCA9IGN1cnJQbGF5ZXIgKyBgJ3MgbW92ZWA7XHJcbn07XHJcbmNvbnN0IHNldE1vdmVPbkNlbGwgPSAoXHJcbiAgICBjZWxsWDogbnVtYmVyLFxyXG4gICAgY2VsbFk6IG51bWJlcixcclxuICAgIGZpZWxkQ2VsbHM6IHN0cmluZ1tdW11cclxuKSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBmaWVsZENlbGxzW2NlbGxZXVtjZWxsWF0gPSBwbGF5ZXJzW2N1cnJQbGF5ZXJdO1xyXG4gICAgcmV0dXJuIGZpZWxkQ2VsbHM7XHJcbn07XHJcblxyXG5jb25zdCBjaGVja0NvbmRpdGlvbiA9IChjZWxsWDogbnVtYmVyLCBjZWxsWTogbnVtYmVyLCBmaWVsZDogc3RyaW5nW11bXSkgPT4ge1xyXG4gICAgY29uc3QgY29uZENoZWNrID0geyBoOiAwLCB2OiAwLCBkdG9wOiAwLCBkYm90OiAwIH07XHJcbiAgICBjb25zdCBjb25kQ2hlY2tNYXggPSB7IGg6IDAsIHY6IDAsIGR0b3A6IDAsIGRib3Q6IDAgfTtcclxuICAgIGZvciAobGV0IGkgPSAtY29uZFdpbiArIDE7IGkgPCBjb25kV2luOyBpKyspIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGZpZWxkPy5bY2VsbFldPy5bY2VsbFggLSBpXSA9PT0gcGxheWVyc1tjdXJyUGxheWVyXSkge1xyXG4gICAgICAgICAgICBjb25kQ2hlY2suaCsrO1xyXG4gICAgICAgICAgICBpZihjb25kQ2hlY2suaCA+PSBjb25kV2luKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBpZiAoY29uZENoZWNrLmggPiBjb25kQ2hlY2tNYXguaCkgY29uZENoZWNrTWF4LmgrKztcclxuICAgICAgICB9IGVsc2UgY29uZENoZWNrLmggPSAwO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGZpZWxkPy5bY2VsbFkgLSBpXT8uW2NlbGxYXSA9PT0gcGxheWVyc1tjdXJyUGxheWVyXSkge1xyXG4gICAgICAgICAgICBjb25kQ2hlY2sudisrO1xyXG4gICAgICAgICAgICBpZihjb25kQ2hlY2sudiA+PSBjb25kV2luKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICBpZiAoY29uZENoZWNrLnYgPiBjb25kQ2hlY2tNYXgudikgY29uZENoZWNrTWF4LnYrKztcclxuICAgICAgICB9IGVsc2UgY29uZENoZWNrLnYgPSAwO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgaWYgKGZpZWxkPy5bY2VsbFkgLSBpXT8uW2NlbGxYIC0gaV0gPT09IHBsYXllcnNbY3VyclBsYXllcl0pIHtcclxuICAgICAgICAgICAgY29uZENoZWNrLmR0b3ArKztcclxuICAgICAgICAgICAgaWYoY29uZENoZWNrLmR0b3AgPj0gY29uZFdpbikgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgaWYgKGNvbmRDaGVjay5kdG9wID4gY29uZENoZWNrTWF4LmR0b3ApIGNvbmRDaGVja01heC5kdG9wKys7XHJcbiAgICAgICAgfSBlbHNlIGNvbmRDaGVjay5kdG9wID0gMDtcclxuXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGlmIChmaWVsZD8uW2NlbGxZIC0gaV0/LltjZWxsWCAtIGkgKiAtMV0gPT09IHBsYXllcnNbY3VyclBsYXllcl0pIHtcclxuICAgICAgICAgICAgY29uZENoZWNrLmRib3QrKztcclxuICAgICAgICAgICAgaWYoY29uZENoZWNrLmRib3QgPj0gY29uZFdpbikgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgaWYgKGNvbmRDaGVjay5kYm90ID4gY29uZENoZWNrTWF4LmRib3QpIGNvbmRDaGVja01heC5kYm90Kys7XHJcbiAgICAgICAgfSBlbHNlIGNvbmRDaGVjay5kYm90ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKE1hdGgubWF4KC4uLk9iamVjdC52YWx1ZXMoY29uZENoZWNrTWF4KSkgPT09IGNvbmRXaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGZpZWxkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIGBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgke2ZpZWxkU2l6ZX0sIDUwcHgpYFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRTaXplICogZmllbGRTaXplOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH1cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIEFycmF5LmZyb20oZmllbGQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiY2VsbFhcIiwgU3RyaW5nKGkgJSAoZmllbGRTaXplKSkpO1xyXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImNlbGxZXCIsIFN0cmluZyhNYXRoLmZsb29yKGkgLyAoZmllbGRTaXplKSkpKTtcclxuICAgICAgICBlbC5pbm5lckhUTUwgPSBjZWxsc0FycmF5Py5bTWF0aC5mbG9vcihpIC8gZmllbGRTaXplKV0/LltpICUgZmllbGRTaXplXSA/PyBudWxsO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn07XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbmZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKHdpbikgcmV0dXJuO1xyXG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xyXG4gICAgICAgIGNvbnN0IFt4Q29vcmQsIHlDb29yZF0gPSBbXHJcbiAgICAgICAgICAgIE51bWJlcihjZWxsLmdldEF0dHJpYnV0ZShcImNlbGxYXCIpKSxcclxuICAgICAgICAgICAgTnVtYmVyKGNlbGwuZ2V0QXR0cmlidXRlKFwiY2VsbFlcIikpXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgaWYoZ2V0RmllbGRDZWxsKHlDb29yZCwgeENvb3JkLCBjZWxsc0FycmF5KSkgcmV0dXJuXHJcblxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBjZWxsLmlubmVySFRNTCA9IHBsYXllcnNbY3VyclBsYXllcl07XHJcbiAgICAgICAgY2VsbHNBcnJheSA9IHNldE1vdmVPbkNlbGwoeENvb3JkLCB5Q29vcmQsIGNlbGxzQXJyYXkpO1xyXG4gICAgICAgIGlmIChjaGVja0NvbmRpdGlvbih4Q29vcmQsIHlDb29yZCwgY2VsbHNBcnJheSkpIHtcclxuICAgICAgICAgICAgd2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB3aW5uZXJUZXh0LmlubmVySFRNTCA9IGN1cnJQbGF5ZXIgKyBcIiB3aW4hXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0RyYXcoY2VsbHNBcnJheSkpIHsgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB3aW5uZXJUZXh0LmlubmVySFRNTCA9IFwi0J3QuNGH0YzRj1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlQ3VyclBMYXllcigpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxucmVuZGVyKCk7XHJcblxyXG4vLyBAdHMtaWdub3JlXHJcbnJlbG9hZEdhbWUub25jbGljayA9ICgpID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIEFycmF5LmZyb20oZmllbGQuY2hpbGRyZW4pLm1hcCgoZWwpID0+IChlbC5pbm5lckhUTUwgPSBcIlwiKSk7XHJcbiAgICBjZWxsc0FycmF5ID0gbmV3IEFycmF5KGZpZWxkU2l6ZSlcclxuICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgIC5tYXAoKGVsKSA9PiBuZXcgQXJyYXkoZmllbGRTaXplKS5maWxsKG51bGwpKTtcclxuICAgIHdpbiA9IGZhbHNlO1xyXG4gICAgY3VyclBsYXllciA9IE9iamVjdC5rZXlzKHBsYXllcnMpWzBdO1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY3VyclBsYXllclRleHQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHdpbm5lclRleHQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHJlbmRlcigpO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbInBsYXllcnMiLCJjdXJyUGxheWVyIiwiT2JqZWN0Iiwia2V5cyIsIndpbiIsImNlbGxzQXJyYXkiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJlbCIsImZpZWxkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VyclBsYXllclRleHQiLCJyZWxvYWRHYW1lIiwid2lubmVyVGV4dCIsInJlbmRlciIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImkiLCJmaWVsZFNpemUiLCJjZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiZnJvbSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIlN0cmluZyIsIk1hdGgiLCJmbG9vciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJOdW1iZXIiLCJnZXRBdHRyaWJ1dGUiLCJ4IiwieSIsImdldEZpZWxkQ2VsbCIsImNlbGxYIiwiZmllbGRDZWxscyIsImNlbGxZIiwiY29uZENoZWNrIiwiaCIsInYiLCJkdG9wIiwiZGJvdCIsImNvbmRDaGVja01heCIsIm1heCIsInZhbHVlcyIsImNoZWNrQ29uZGl0aW9uIiwiaiIsImNoZWNrRHJhdyIsIm9uY2xpY2siXSwic291cmNlUm9vdCI6IiJ9