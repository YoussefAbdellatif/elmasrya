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




  /*********************************************************************** 
  document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior
            const pdfLink = this.getAttribute('data-link');
            if (pdfLink && pdfLink.endsWith('.pdf')) {
                window.open(pdfLink, '_blank');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
      item.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default behavior
          const pdfLink = this.getAttribute('data-link');
          if (pdfLink && pdfLink.endsWith('.pdf')) {
              const embedHTML = `<embed src="${pdfLink}" type="application/pdf" width="100%" height="100%">`;
              const newTab = window.open();
              newTab.document.body.innerHTML = embedHTML;
          }
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
      item.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default behavior
          const pdfLink = this.getAttribute('data-link');
          if (pdfLink && pdfLink.endsWith('.pdf')) {
              const iframeHTML = `<iframe src="${pdfLink}" width="100%" height="100%"></iframe>`;
              const newTab = window.open();
              newTab.document.body.innerHTML = iframeHTML;
          }
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
      item.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default behavior
          const pdfLink = this.getAttribute('data-link');
          if (pdfLink && pdfLink.endsWith('.pdf')) {
              const anchor = document.createElement('a');
              anchor.href = pdfLink;
              anchor.target = '_blank';
              anchor.download = pdfLink.split('/').pop(); // Set download attribute to file name
              anchor.click();
          }
      });
  });
});*/