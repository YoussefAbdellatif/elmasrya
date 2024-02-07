let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Show the navbar when scrolling up
    document.querySelector(".navbar").style.top = "0";
  } else {
    // Hide the navbar when scrolling down
    document.querySelector(".navbar").style.top = "-550px"; // Adjust the value based on your navbar height
  }

  prevScrollPos = currentScrollPos;
};
/************************************** */
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    galleryItems.forEach(item => {
      const title = item.getAttribute('data-title');
      const link = item.getAttribute('data-link');
  
      item.addEventListener('click', () => {
        // Redirect to the imageDisplay.html page with the image ID as a parameter
        window.location.href = link;
      });
      item.innerHTML += `<div class="title-overlay">${title}</div>`;
    });
  
    // Code for imageDisplay.html
    const urlParams = new URLSearchParams(window.location.search);
    const imageId = urlParams.get('id');
  
    if (imageId) {
      const displayedImage = document.getElementById('displayedImage');
      const displayName = document.getElementById('displayName');
  
      // Set the image source and name based on the image ID
      displayedImage.src = `image${imageId}.jpg`;
      displayName.textContent = `Image ${imageId}`;
    }
  });