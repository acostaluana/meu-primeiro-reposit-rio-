function setup() {
  createCanvas(400, 400);
  //F=m*a

  function segundaLei(massa, aceleração) {
    let forca = massa * aceleração;
    console.log(forca);
    return forca;
  }
  segundaLei(10, 20);
}
function draw() {}
