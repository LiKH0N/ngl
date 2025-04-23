const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 100;

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createParticles() {
	particles = [];
	for (let i = 0; i < particleCount; i++) {
		particles.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.8,
			vy: (Math.random() - 0.5) * 0.8,
			radius: Math.random() * 2 + 1,
		});
	}
}
createParticles();

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < particles.length; i++) {
		let p = particles[i];

		p.x += p.vx;
		p.y += p.vy;

		if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
		if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

		ctx.beginPath();
		ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
		ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
		ctx.fill();

		for (let j = i + 1; j < particles.length; j++) {
			let p2 = particles[j];
			let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
			if (dist < 100) {
				ctx.beginPath();
				ctx.moveTo(p.x, p.y);
				ctx.lineTo(p2.x, p2.y);
				ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
				ctx.stroke();
			}
		}
	}

	requestAnimationFrame(draw);
}

draw();
