function onEntry(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`i am here`);
      //   console.dir(entry.intersectionRatio);
    }
    if (entry.intersectionRatio > 0.5) {
      console.log(`threshold > 0.5`);

      //   for one element
      observer.disconnect();
    }
  });
}

const options = {
  //   rootMargin: "-100px"
  threshold: [0, 0.25, 0.5, 0.75, 1]
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector(".js-box");

io.observe(boxRef);
