$(function() {
    $("#openBorrowBox").click(function(event) {
        console.log("opening");
        
        // var m = event.target;
        
        // $("#borrowKey").html(m.borrowKey);
        
        $("#borrowpopup").show();
    });
    
    $("#borrowclose").click(function() {
        console.log("closing");
        $("#borrowpopup").hide();
    });
});

$(function() {
    $("#openReturnBox").click(function(event) {
        console.log("opening");
        
        // var m = event.target;
        
        // $("#borrowKey").html(m.borrowKey);
        
        $("#returnpopup").show();
    });
    
    $("#returnclose").click(function() {
        console.log("closing");
        $("#returnpopup").hide();
    });
});

//var pop = document.getElementById("openBox");
//openBox.on('click', openBox);

//function openBox(e) {
//    
//    var m = e.target;
//
//    var box = document.getElementById("borrowKey");
//    box.innerHTML = m.borrowKey;
//
//    var info = document.getElementById("text");
//
//    var output = 
//
//    info.innerHTML = output;
//
//    var modal = document.getElementById("popup");
//    modal.style.display = "flex";
//}


//MODAL BOX - CLOSE FUNCTIONS


