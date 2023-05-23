"use strict"

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;

const game = new Game();

game.start(canvas, ctx);
