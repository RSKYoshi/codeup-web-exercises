export function getNotificationElement() {
    return `<div id="notification-box" class="d-none">   
    <span></span>
  <button type="button" class="float-end btn-close" data-bs-dismiss="alert" aria-label="Close"></button>          
         </div>`;
}

export function showNotification(messageText, messageType) {
    // TODO: change display of message based on message type
    // *sigh* refactor without jQuery

    const notifyBox = document.querySelector("#notification-box");

    notifyBox.className = '';
    notifyBox.classList.add("alert");
    notifyBox.classList.add("alert-" + messageType);
    document.querySelector("#notification-box span").innerText = messageText;
    notifyBox.classList.add("d-block");
    notifyBox.classList.add("animate__animated");
    notifyBox.classList.add("animate__fadeIn");

    // notifyBox.slideDown(100).delay(3000).slideUp(200);
}