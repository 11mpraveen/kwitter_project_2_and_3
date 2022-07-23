function user(){
    new_name = document.getElementById("name").value;
    localStorage.setItem("u_name",new_name);
    window.location = "kwitter_room.html";
}