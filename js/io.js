function onEntry(entries, observer) {
  entries.forEach(entry => {
    // if (entry.isIntersecting) {
    //   console.log(`i am here`);
    //   //   console.dir(entry.intersectionRatio);
    // }
    if (entry.intersectionRatio > 0.95) {
      entry.target.classList.add("js-box");

      //   for one element
      // observer.disconnect();

      // for more element
      // observer.unobserve(entry);
    }

    if (entry.intersectionRatio <= 0.95) {
      entry.target.classList.remove("js-box");
    }
  });
}

const options = {
  //   rootMargin: "100px"
  threshold: [0, 0.25, 0.5, 0.75, 0.95, 1]
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelectorAll(".js-io");

// for one element
// io.observe(boxRef);

// for more element
boxRef.forEach(box => io.observe(box));
