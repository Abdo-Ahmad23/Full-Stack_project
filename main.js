const btn = document.getElementById('button');
// document.getElementById("message").value+=` And phone : ${document.getElementById("to_name").value}`




// document.getElementById("message").value+=` And phone : ${document.getElementById("to_name").value}`

// alert("kdjfkdj")
btn.addEventListener("click",function(){
    if(document.getElementById("from_id").value=="" ||
     document.getElementById("to_name").value=="" || 
     document.getElementById("message").value=="" || 
     document.getElementById("from_id").value=="")
     {
        alert("This Data is Not complete !!")
     }
     else{

        document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_0zw4j87';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

     }
})