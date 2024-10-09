    // Function to dynamically load images for different gallery sections
    function loadGalleryImages(folderPath, imagePrefix, imageSuffix, minNumber, maxNumber, containerId) {
        const galleryContainer = document.getElementById(containerId);
    
        // Function to check if an image exists (suppresses console errors)
        function imageExists(url, callback) {
          const img = new Image();
          
          // Use try-catch to handle any potential issues silently
          try {
            img.onload = () => callback(true);
            img.onerror = () => callback(false);
            img.src = url;
          } catch (error) {
            console.error("Image load error suppressed for URL:", url);
            callback(false); // Handle the image as non-existent if there is an error
          }
        }
    
        // Loop through a range of possible image numbers
        for (let i = minNumber; i <= maxNumber; i++) {
          const imageNumber = String(i).padStart(5, '0'); // Formats as '00001'
          const imageName = `${imagePrefix}${imageNumber}${imageSuffix}`;
          const imageUrl = `${folderPath}${imageName}`;
    
          // Check if the image exists before adding it
          imageExists(imageUrl, (exists) => {
            if (exists) {
              const imageItem = `
                <div class="col-lg-3 col-md-4">
                  <div class="gallery-item">
                    <img src="${imageUrl}" alt="${imageName}" class="img-fluid">
                  </div>
                </div>
              `;
              galleryContainer.innerHTML += imageItem;
            }
          });
        }
      }
    
      // Example usage for different blocks:
    
      // For the extended package outcome gallery
      loadGalleryImages(
        'assets/img/gallery/client_advanced_1/',  // folderPath
        'client_',                   // imagePrefix
        '.png',                                 // imageSuffix
        1,                                       // minNumber
        56,                                     // maxNumber
        'extended_client_1'               // containerId
      );
    
      // For the training gallery
      loadGalleryImages(
        'assets/img/gallery/client_basic_training_1/',  // folderPath
        'client_',                   // imagePrefix
        '.jpg',                                 // imageSuffix
        1,                                       // minNumber
        1,                                     // maxNumber
        'basic_client_1_training'               // containerId
      );
  
      loadGalleryImages(
        'assets/img/gallery/client_basic_1/',  // folderPath
        'client_',                   // imagePrefix
        '.png',                                 // imageSuffix
        1,                                       // minNumber
        14,                                     // maxNumber
        'basic_client_1'               // containerId
      );
    
      loadGalleryImages(
        'assets/img/gallery/client_basic_training_2/',  // folderPath
        'client_',                   // imagePrefix
        '.jpg',                                 // imageSuffix
        1,                                       // minNumber
        1,                                     // maxNumber
        'basic_client_2_training'               // containerId
      );
  
      loadGalleryImages(
        'assets/img/gallery/client_basic_2/',  // folderPath
        'client_',                   // imagePrefix
        '.png',                                 // imageSuffix
        1,                                       // minNumber
        17,                                     // maxNumber
        'basic_client_2'               // containerId
      );
  
      loadGalleryImages(
        'assets/img/gallery/client_basic_training_3/',  // folderPath
        'client_',                   // imagePrefix
        '.jpg',                                 // imageSuffix
        1,                                       // minNumber
        1,                                     // maxNumber
        'basic_client_3_training'               // containerId
      );
  
      loadGalleryImages(
        'assets/img/gallery/client_basic_3/',  // folderPath
        'client_',                   // imagePrefix
        '.png',                                 // imageSuffix
        1,                                       // minNumber
        16,                                     // maxNumber
        'basic_client_3'               // containerId
      );
  
      loadGalleryImages(
        'assets/img/gallery/client_custom_1/',  // folderPath
        'client_',                   // imagePrefix
        '.png',                                 // imageSuffix
        1,                                       // minNumber
        16,                                     // maxNumber
        'custom_client_1'               // containerId
      );