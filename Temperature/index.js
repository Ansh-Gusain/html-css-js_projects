const temp=document.getElementById('temp');
const fahrenheit=document.getElementById('fahrenheit');
const celsius=document.getElementById('celsius');
const result=document.getElementById('result');
const form=document.querySelector('form');


let temperature;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const degree_dontknow=temp.value.trim();

    if(degree_dontknow===""){
        return;
    }
    else{
    const degree=Number(degree_dontknow);

    if(fahrenheit.checked){
        temperature=(degree-32)*(5/9);
        result.textContent=`${temperature.toFixed(2)}°C`;
    }
    else if(celsius.checked){
        temperature=(degree*9/5)+32;
        result.textContent=`${temperature.toFixed(2)}°F`;
    }
    else{
        result.textContent='invalid unit';
    }
    }
    result.style.margin='10px';
    result.style.backgroundColor='white';
    result.style.padding='6px';
    
})

