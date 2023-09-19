document.addEventListener("DOMContentLoaded", function(){
    console.log("Js is running");
    function openModal(imageSrc){
        const modal = document.getElementById("popup");
        const modalImage = document.getElementById("modalImage")
    
        modal.style.display = "block";
        modalImage.src = imageSrc;
    }
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeModal);
    function closeModal(){
        const modal = document.getElementById("popup");
        modal.style.display = "none";
    }
    
    const galleryImages = document.querySelectorAll(".box img");
    
    galleryImages.forEach(image => {
        image.addEventListener("click", function(){
            console.log("image clicked");
            openModal(this.src);
        });
    });
});


