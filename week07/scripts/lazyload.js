// Get all elements with class name "LazyLoadedImage"
const lazyImages = document.querySelectorAll('.LazyLoadedImage');
// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
lazyImages.forEach(lazyImage => {
  observer.observe(lazyImage);
});




