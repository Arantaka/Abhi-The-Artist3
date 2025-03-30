
// Single image mood board display
document.addEventListener('DOMContentLoaded', function() {
  const moodBoardContainer = document.querySelector('.mood-board-single');
  
  if (moodBoardContainer) {
    const currentImage = document.querySelector('.mood-board-current-image');
    
    // Set the image to pic01.jpg
    if (currentImage) {
      currentImage.src = "/images/pic01.jpg";
      currentImage.alt = "Mood Board Image";
    }
    
    // Add click event for lightbox
    if (currentImage) {
      currentImage.addEventListener('click', function() {
        // Use the existing lightbox functionality from main.js
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox-image');
        
        if (lightbox && lightboxImg) {
          lightboxImg.src = "/images/pic01.jpg";
          lightbox.classList.add('active');
        }
      });
    }
  }
});
