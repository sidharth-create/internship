const table=document.querySelector('.table_row');
let data;
 console.log(table);
fetch('https://demo2211087.mockable.io/mock',{
    method:'POST',
})
.then(res=>res.json())
.then(res=>{
     data=res.companies;
    
})

.catch(err=>console.log(err))
.finally(()=>{
    let html='';
    data.forEach((item,id)=>{
        html+=`<tr>
        <td>${id+1}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.status}</td>
        </tr>`
    })
    table.innerHTML=html;
}
)

