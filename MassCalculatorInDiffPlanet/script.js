
let but= document.getElementById("calci");

function calculate(){
    let weight=document.getElementById("weight").value;
    let planet=document.getElementById("planet").value;
    let result =document.getElementById("mass");
    let show=document.getElementById("elementToDisplay");
    let img= document.getElementById("image");
    if(isNaN(weight)){
        show.classList.remove("hidden");
        img.classList.add("hidden");
    }else{
        show.classList.add("hidden");
        img.classList.remove("hidden");
        
    if(planet==="Earth"){
        setTimeout(function(){result.innerHTML=` MASS at ${planet}     ${weight}`},1150)    
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/earth.png?raw=true"
    }
    else if(planet==="Mars"){
        var newWeight= (weight*.37)/91.425683000300;
        setTimeout(function(){ result.innerHTML=` MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/mars.png?raw=true"
        
    }
    else if(planet==="mercury"){
        newWeight =(weight* 0.38);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/mercury.png?raw=true"
    }
    else if(planet==="Saturn"){
        newWeight =(weight* 0.93);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}   ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/saturn.png?raw=true"
    }
    else if(planet==="Neptune"){
        newWeight =(weight* 1.12);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/neptune.png?raw=true"
    }
    else if(planet==="Jupiter"){
        newWeight =(weight* 2.34);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/jupiter.png?raw=true"
    }
    else if(planet==="Venus"){
        newWeight =(weight* 0.91);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/venus.png?raw=true"
    }
    else if(planet==="Uranus"){
        newWeight =(weight* 0.92);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/uranus.png?raw=true"
    }
    else if(planet==="Moon"){
        newWeight =(weight*0.165);
        setTimeout(function(){result.innerHTML=`MASS at ${planet}    ${newWeight}`},1150)
        img.src="https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/24_Day_Project_solar_system/24_day_starter/images/moon.png?raw=true"
    }
}

}
but.addEventListener("click",calculate);