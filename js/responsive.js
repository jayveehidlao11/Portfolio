let burger = document.getElementById('burger');
const sidebar = document.getElementById("sidebar");
const viewportWidth = window.innerWidth;


burger.addEventListener('click', () => {
    if(sidebar.style.width == ''){
       
        
        sidebar.style.width = (viewportWidth <='339' ? '100%' : '200px'); 
    }else if(sidebar.style.width == '200px' || sidebar.style.width == '100%' ){
        sidebar.style.width = (viewportWidth <='339' ? '0px' : '0px'); 
    }
    else{
        sidebar.style.width = (viewportWidth <='339' ? '100%' : '200px'); 
    }
    console.log(viewportWidth);
   console.log(sidebar.style.width);
   
    
});

  
