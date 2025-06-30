// Hover-to-play effect for all videos inside .video-box
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video-box video");
  
    videos.forEach(video => {
      // Play on mouse enter
      video.addEventListener("mouseenter", () => {
        video.play();
      });
  
      // Pause on mouse leave
      video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Reset to beginning if you want
      });
    });
  });
  