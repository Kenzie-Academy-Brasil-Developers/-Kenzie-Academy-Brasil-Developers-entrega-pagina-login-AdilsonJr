const controlModal = document.querySelector(".forgetMyPassword")

controlModal.addEventListener("click", (evnt)=>{
        evnt.preventDefault()
        controlModal.getAttribute("data-control-modal")
        document.getElementById("modal-login").classList.toggle("show-modal")
    })

const closeModal = document.querySelector(".modal-close")

closeModal.addEventListener("click", ()=>{
    closeModal.getAttribute("data-control-modal")
    document.getElementById("modal-login").classList.toggle("show-modal")
})