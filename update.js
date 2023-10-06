// NOTE : THIS METHODS ONLY WORK IN ONLINE MODE 



let url="./data.json"


let student=document.getElementById("student")

let course=document.getElementById("course")
let submit_btn=document.querySelector(".submit")

// console.log(student);



submit_btn.addEventListener("click",(e) => {
    e.preventDefault()

        console.log("fired submit");
       
        function myData(){
            return( data={
                "name":student.value,
                "Course":course.value
            }
            )
        }
        console.log(myData());
        // console.log(myData());
        // console.log(data);


        //fetching
        const updatedData=myData()
        console.log(updatedData);
        fetch(url,{

            method:"PUT",
        headers: {
            "content-type":"application/json; charset=UTF-8"
        
        
        },
        body:JSON.stringify(myData())
        
        })
       
        .then((Response)=> Response.json())
        .then((data)=> console.log(data))
        .catch((error)=> console.log("error"))

      
})






        


