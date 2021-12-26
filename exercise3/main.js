alert("reloaded");
document.addEventListener('DOMContentLoaded',function(){
   let submitButton = document.getElementById("submitButton");
   submitButton.addEventListener('click', function(e){
       e.preventDefault();
    //    alert("hi")
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    
    const myHtml = `<td>${name}</td><td>${phone}</td><td>${address}</td>`
    const newRow = document.createElement('tr')
    newRow.innerHTML = myHtml
    const myData = document.getElementById("dataTable");

    myData.appendChild(newRow)
   })
}); 

// alert("hello")