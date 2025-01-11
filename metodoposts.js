const data ={
    
    id: 5,
    title: "viernes de rumbaaa",
    author: "v10"
      
};
fetch("http://localhost:3000/posts/",{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
})
.then((response) => response.json())
.then((data) => console.log("success",data))
.catch((error)=> console.error("Error", error));