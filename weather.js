let search=document.getElementById("Search")
let cityname=document.getElementById("Cityname")
let temp=document.getElementById("temp")
console.log(search.value)
let getInfo= async()=>{
        let inputValue=search.value
    if(inputValue==""){
        alert("please enter a cityname first")
    }
    else{        
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
        let data=await response.json()
       cityname.textContent=`${data.name}`
       temp.textContent=data.main.temp;    
    }
}

