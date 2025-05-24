function createBlob(color, size) {
    const blob = document.createElement("div");
    blob.style.position = "absolute";
    blob.style.width = `${size}vmax`;
    blob.style.height = `${size}vmax`;
    blob.style.borderRadius = "50%";
    blob.style.background = `radial-gradient(circle, ${color}, transparent 70%)`;
    blob.style.filter = "blur(80px)";
    blob.style.opacity = "0.6";
    blob.style.zIndex = "-1";
    document.body.appendChild(blob);

    return {
        element: blob,
        radius: 50 + Math.random() * 200, // random radius between 50 and 250 px
        angle: Math.random() * 2 * Math.PI, // random initial angle
        speed: (Math.random() * 0.01 + 0.005) * (Math.random() < 0.5 ? 1 : -1) // random speed & direction
    };
}

function animate() {
    blobs.forEach(blob => {
        blob.angle += blob.speed;

        const x = centerX + blob.radius * Math.cos(blob.angle);
        const y = centerY + blob.radius * Math.sin(blob.angle);

        blob.element.style.left = `${x}px`;
        blob.element.style.top = `${y}px`;
    });

    requestAnimationFrame(animate);
}

blobs.push(createBlob("#ff6ec4", 60));
blobs.push(createBlob("#7873f5", 60));