require("Font8x16").add(Graphics);

const wnd = require("heatshrink").decompress(atob("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"))
const logo = require("heatshrink").decompress(atob("mEwyATQnPFveE1sC81g+3A/8gANYxB5vBylDqVlOLohBK94BPMoJdZ+3gLfoBHf4K5TKv4BL81gLv5hrtckJv4BT5vBL45rBJf4BVLouUoZH/AK/24BdBnPGXv7BdveEIf4BbXYOtgRD/ALvWkJB/ALv24AffcYIbzAMfu4FrkMQ0QBBmOC6vgDqIbH2pf4rXCIIYBDkMiMJ5dFAIcY4XFwBdz0mhII5hRveBDZbDBL+dB8RDLIofmsAZFxfhDJrBz93AWIJFNMIf24AZBzlBC54pBZ4JfvJIKtBU49a4TLFIovmoB5DWYOk0LXJ6vgL94BFMItrkJLFJIYTHBYIJBCZIB5Joa3BVZILBBI5fDLv4BDzlB+3AL44BJL4ek4Jd/AI/V8EhkRfNY4JT/MLdrkJP/AJ+k4K9LoPi+3AKP69ZYP5dhMP4BL81ALpMxwWcoJh/Lp5TBLpPmsARBxfhMJILBLv5dPAIZh/Lrph/LsJhNjGizlBMOtSoRdXMJcY4W1LugBB93AoPiH4MhkXV8AfVtchLoek4Jd1MIrDBLq5hFLr/24B95AMfWkJB/ALuk0RB/ALti8hB/ALfWgMps324BF/ALN7wkAgGUoZF/AK/msC9BL4IAB82AJP69ZAAv24BL/AKOs8RdHAAJpBJv4BP60BnPGL5JhDYf4BL5uhnPFLpYADoUl81gK/4BFylDlNmLp4ADCoLFBMfv24GtgVCgpbTMZNSwp/B3ti5vBNIIBrF4Ok0SdBnPGXJ4A="))

function drawLogo() {
  g.drawImage(logo, 74, 24, {scale: 2.0});
}

function drawWindow() {
  g.drawImage(wnd, 24, 104);
  g.drawImage(wnd, 72, 104);
  g.drawImage(wnd, 130, 104);
  g.drawImage(wnd, 176, 104);
}


function drawClock() {
  var t = new Date();
  var h = t.getHours();
  var m = t.getMinutes();
  var time = (("0" + h).substr(-2) + ("0" + m).substr(-2)).split('');

  g.setFont("8x16", 4);
  g.setFontAlign(0, 0, 0);
  
  g.drawString(time[0], 48, 140);
  g.drawString(time[1], 96, 140);
  g.drawString(time[2], 154, 140);
  g.drawString(time[3], 200, 140);
  
  g.setFont("8x16", 2);  ;
  g.setFontAlign(-1, -1, 0);
  g.drawString('Raiffeisen', 52, 190);

}

function drawAll() {
  g.clearRect(0, 0, 240, 240);
  drawLogo();
  drawWindow();
  drawClock();
}

Bangle.on('lcdPower', function(on) {
  if (on) drawAll();
});

g.clear();
// Show launcher when button pressed
Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
setInterval(drawAll, 1E4);
drawAll();
