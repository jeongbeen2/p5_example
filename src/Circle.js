import React from "react";
import Sketch from "react-p5";

export default function Circle() {
  let r, g, b, a, X, Y, x, y;
  let str = "abcdefghijklmnopqrstuvwxyz";
  function setup(p5) {
    p5.createCanvas(500, 500, 5000);
  }

  function draw(p5) {
    p5.stroke(0, 0, 0);
    if (p5.mouseClicked) {
      p5.fill(0, 0, 0);
      p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
    }
  }

  function mousePressed(p5) {
    r = (Math.random() * 256) | 0;
    g = (Math.random() * 256) | 0;
    b = (Math.random() * 256) | 0;
    p5.fill(r, g, b);
    p5.stroke(r, g, b);
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
    // prevent default
    return false;
  }

  function keyPressed(p5) {
    if (str.includes(p5.key)) {
      X = (Math.random() * 500) | 0;
      Y = (Math.random() * 500) | 0;
      x = (Math.random() * 500) | 100;
      y = x;
      r = (Math.random() * 256) | 0;
      g = (Math.random() * 256) | 0;
      b = (Math.random() * 256) | 0;
      a = Math.random();
      p5.fill(`rgba(${r}, ${g}, ${b}, ${a})`);
      p5.stroke(`rgba(${r}, ${g}, ${b}, ${a})`);
      p5.ellipse(X, Y, x, y);
    }
  }
  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        mousePressed={mousePressed}
        keyPressed={keyPressed}
      />
    </>
  );
}
