console.log("Script Runing")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("Click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'inline'
    }
    else{
        document.querySelector('.ham').style.display = 'inline'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
            
        }, 300);
    }
})