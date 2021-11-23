function sendContactMessage(e) {
 
  e.preventDefault();
  console.log(e);
    
}
(function(){
  setInterval(function doThisEveryTwoSeconds() {
    toastr.success("Hello World!");
  }, 1000);   // 2000 is 2 seconds  
})


document.getElementById("contact-button").addEventListener("click",  (e) => {
  e.preventDefault();
  fetch("/send-email", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            name: document.getElementById("message").value,
        })  
    }).then(response => {
       return response.json()
    }).then(data => {
      if(data.status == 200) {
        const success = document.querySelector(".toastr--success")
        success.textContent = data.msg;
        setInterval(function doThisEveryTwoSeconds() {
          success.textContent = "";
        }, 3000);
      }else{
        const error = document.querySelector(".toastr--error")
        error.textContent = "";
      }
    
    });
});