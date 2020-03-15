const images = document.querySelectorAll(".forest img");

const options = {
  rootMargin: "50px"
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);

      const image = entry.target;
      const src = image.dataset.lazy;

      image.src = src;
      observer.unobserve(image);
    }
  });
};

const ioImage = new IntersectionObserver(onEntry, options);

images.forEach(image => ioImage.observe(image));
