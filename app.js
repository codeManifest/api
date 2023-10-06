let url ="./data.json"


fetch(url)
.then((Response)=>{
if(!Response.ok){
    console.log("data not found");
}
return Response.json()
})
.then((data)=>{
    console.log(data.name);
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        document.querySelector(".box").innerHTML+=`
        
        
        <Span>Name:</Span><span>${data[i].name}</span> <br>
        <Span>Course:</Span><span>${data[i].Course}</span>
        `
        
        
        

        
    }
    

    function data_to_update() {

        
    }

    
})

