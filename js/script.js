const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

document.getElementById('form-open').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});
function validateForm() {
    var inputs = document.querySelectorAll('input[required]');
    
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        
        if (!input.checkValidity()) {
            alert(input.title);
            return false;
        }
    }

    return true;
}