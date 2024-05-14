function getData()
{
    fetch("http://localhost:3000/users")
    .then(response=>response.json())
    .then(data=>{
        var tbody=""
        for(var item of data){
            var temp=""
            temp = '<tr><td>' + item.id + '</td>';
            temp+= '<td>' + item.name+ '</td>';
            temp+= '<td>' + item.branch + '</td>';
            temp+= '<td>' + item.email + '</td></tr>';
            tbody+=temp;
        }
        document.getElementById("tbody").innerHTML=tbody
    }
)

}
function addData()
{
    let id=prompt("Enter id to add")
    let name=prompt("Enter name to add")
    let branch=prompt("Enter branch to add")
    let email=prompt("Enter email to add")
    fetch("http://localhost:3000/users",{
        method:"POST",
        body:JSON.stringify({
         "id":id,
         "name":name,
         "branch":branch,
         "email":email})
        }
    )
    .then(response=>response.json())
    alert("data added")

}
function deleteData()
{
    let id1=prompt("Enter id to delete")
    fetch("http://localhost:3000/users/"+id1,{
        method:"DELETE"
    })
    .then(response=>response.json())
    .catch(err=>console.log(err))
}
function updateData()
{
    let id2=prompt("Enter id to update")
    let email=prompt("Enter email to update")
    fetch("http://localhost:3000/users/4",{
        method:"PATCH",
        body:JSON.stringify({
            "id":id2,
            "email":email
        })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
}
