let body=document.body;
let table=document.createElement("table");
table.setAttribute("border","1");
for(let i=0;i<5;i++){
    const tr=document.createElement("tr");
    for(let j=0;j<5;j++){
        let td=document.createElement("td");
        td.innerText=`${i+1}, ${j+1}`;
        td.style.border="1px solid black";
        tr.appendChild(td);
    }
    table.append(tr);
}
body.append(table);
