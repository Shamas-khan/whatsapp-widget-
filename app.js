document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('whats-chat').addEventListener("click", showchatbox);
        document.getElementById('chat-top-right').addEventListener("click", closechatbox);
        document.getElementById('send-btn').addEventListener("click", sendmsg);
       
        function showchatbox(){
        document.getElementById('chat-box').style.right='8%'
        }
        function closechatbox(){
        document.getElementById('chat-box').style.right='-500px'
        
        
        }
        
       
                    function sendmsg() {
            var message = encodeURIComponent(document.getElementById("whats-in").value);
            var phoneNumber = "923103874420";
            var whatsappLink = "whatsapp://send?phone=" + phoneNumber + "&text=" + message;
            window.location.href = whatsappLink;
}
});