(() => {
  const weather = require('weather');

  function formatDuration(millis) {
    let pluralize = (n, w) => n + " " + w + (n == 1 ? "" : "s");
    if (millis < 60000) return "< 1 minute";
    if (millis < 3600000) return pluralize(Math.floor(millis/60000), "minute");
    if (millis < 86400000) return pluralize(Math.floor(millis/3600000), "hour");
    return pluralize(Math.floor(millis/86400000), "day");
  }

  function draw() {
    let w = weather.current;
    g.reset();
    g.clearRect(0, 24, 239, 239);

    weather.drawIcon(w.txt, 65, 90, 55);
    const locale = require("locale");

    g.reset();

    const temp = locale.temp(w.temp-273.15).match(/^(\D*\d*)(.*)$/);
    let width = g.setFont("Vector", 40).stringWidth(temp[1]);
    width += g.setFont("Vector", 20).stringWidth(temp[2]);
    g.setFont("Vector", 40).setFontAlign(-1, -1, 0);
    g.drawString(temp[1], 180-width/2, 70);
    g.setFont("Vector", 20).setFontAlign(1, -1, 0);
    g.drawString(temp[2], 180+width/2, 70);

    g.setFont("6x8", 1);
    g.setFontAlign(-1, 0, 0);
    g.drawString("Humidity", 135, 130);
    g.setFontAlign(1, 0, 0);
    g.drawString(w.hum+"%", 225, 130);
    if ('wind' in w) {
      g.setFontAlign(-1, 0, 0);
      g.drawString("Wind", 135, 142);
      g.setFontAlign(1, 0, 0);
      g.drawString(locale.speed(w.wind)+' '+w.wrose.toUpperCase(), 225, 142);
    }

    g.setFont("6x8", 2).setFontAlign(0, 0, 0);
    g.drawString(w.loc, 120, 170);

    g.setFont("6x8", 1).setFontAlign(0, 0, 0);
    g.drawString(w.txt.charAt(0).toUpperCase()+w.txt.slice(1), 120, 190);

    drawUpdateTime();

    g.flip();
  }

  function drawUpdateTime() {
    if (!weather.current || !weather.current.time) return;
    let text = `Last update received ${formatDuration(Date.now() - weather.current.time)} ago`;
    g.reset();
    g.clearRect(0, 202, 239, 210);
    g.setFont("6x8", 1).setFontAlign(0, 0, 0);
    g.drawString(text, 120, 206);
  }

  function update() {
    NRF.removeListener("connect", update);
    if (weather.current) {
      draw();
    } else if (NRF.getSecurityStatus().connected) {
      E.showMessage("Weather unknown\n\nIs Gadgetbridge\nweather reporting\nset up on your\nphone?");
    } else {
      E.showMessage("Weather unknown\n\nGadgetbridge\nnot connected");
      NRF.on("connect", update);
    }
  }

  let interval = setInterval(drawUpdateTime, 60000);
  Bangle.on('lcdPower', (on) => {
    if (interval) {
      clearInterval(interval);
      interval = undefined;
    }
    if (on) {
      drawUpdateTime();
      interval = setInterval(drawUpdateTime, 60000);
    }
  });

  weather.on("update", update);

  update();

  // Show launcher when middle button pressed
  Bangle.setUI("clock");

  Bangle.loadWidgets();
  Bangle.drawWidgets();
})()
