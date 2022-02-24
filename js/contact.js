function sendMail() {
    var link = "mailto:ndanhdien98@gmail.com"
             + "&subject=" + encodeURIComponent(document.getElementById('name').value)
             + "&body=" + encodeURIComponent(document.getElementById('message').value)
    ;
    
    window.location.href = link;
}