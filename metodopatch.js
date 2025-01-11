const data ={

    author: "v-10"
      
};
fetch("http://localhost:3000/posts/5",{
    method: "PATCH",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
})
.then((response) => response.json())
.then((data) => console.log("success",data))
.catch((error)=> console.error("Error", error));