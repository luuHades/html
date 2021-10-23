function aaa(){

    let met = document.getElementById("meta").value;
    met = met*3.2808399;
    document.getElementById("fit").value = Math.floor(met) ;
    
}
function bbb(){

    let fit = document.getElementById("fit").value;
    fit = fit/3.2808399;
    document.getElementById("meta").value = Math.floor(fit) ;
    
}


