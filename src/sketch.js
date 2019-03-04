// P_4_1_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * image feedback process.
 *
 * KEYS
 * del, backspace      : clear screen
 * s                   : save jpg
 */
'use strict';

let img;

let sketch = function(p) {
	p.preload = function() {
		img = p.loadImage('img/pic-sketch1.png');
	};

	p.setup = function() {
		p.createCanvas(450, 450);
		p.image(img, 0, 0);
	};

	p.draw = function() {
		let x1 = p.floor(p.random(p.width));
		let y1 = 0;

		let x2 = p.round(x1 + p.random(-7, 7));
		let y2 = p.round(y1 + p.random(-5, 5));

		let w = p.floor(p.random(10, 10));
		let h = p.height;
		p.set(x2, y2, p.get(x1, y1, w, h));
	};

	p.keyReleased = function() {
		if (p.key == 's' || p.key == 'S') p.saveCanvas('picture', 'jpg');
		if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) {
			p.clear();
			p.image(img, 0, 0);
		}
		if (p.key == ' ') {
			p.clear();
			p.noLoop();
		}
	};
};
new p5(sketch, 'p5-canvas');
