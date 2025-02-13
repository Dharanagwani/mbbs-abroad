document.getElementById("lead-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;
    
    if (name === "" || email === "" || phone === "" || country === "") {
        alert("All fields are required!");
        return;
    }
    
    alert("Application Submitted Successfully!");
});
