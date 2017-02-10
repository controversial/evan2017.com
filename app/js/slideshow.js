window.Slideshow = class Slideshow {
  constructor(elem, images) {
    this.elem = elem;
    this.images = images;
    this.index = 0;

    this.firstImageElem = document.createElement('div');
    this.secondImageElem = document.createElement('div');
    this.elem.appendChild(this.firstImageElem);
    this.elem.appendChild(this.secondImageElem);

    this.next();
  }

  next() {
    const nextImage = this.images[this.index];

    // Pick which element to change based on whether we're on an even or odd index
    const nextElem = this.index % 2 === 0 ? this.firstImageElem : this.secondImageElem;
    const otherElem = this.index % 2 !== 0 ? this.firstImageElem : this.secondImageElem;

    // Switch images
    nextElem.style.backgroundImage = `url(${nextImage})`;
    otherElem.style.opacity = 0;
    nextElem.style.opacity = 1;

    // Increment index
    this.index += 1;
    if (this.index >= this.images.length) this.index %= this.images.length;
  }

  start(interval) {
    setInterval(() => this.next(), interval);
  }
};
