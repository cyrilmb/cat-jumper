const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16;
canvas.height = 64 * 9;

let y = 100;
let x = 100;
function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'grey';
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = 'red';
  c.fillRect(x, y, 100, 100);
  y++;
}

animate();
