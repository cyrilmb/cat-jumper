class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
    };
    this.image.src = imageSrc;
    this.loaded = false;
  }
  draw() {
    if (!this.loaded) return; // check if image loaded, if not return out
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
