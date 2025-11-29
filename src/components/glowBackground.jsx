import { useEffect, useRef } from "react";

export default function GlowBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 300, y: 400, r: 600, dx: 0.2, dy: -0.15 },
      { x: 900, y: 200, r: 500, dx: -0.15, dy: 0.2 }
    ];

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(b => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);

        g.addColorStop(0, "rgba(0, 170, 255, 0.45)");  
        g.addColorStop(0.5, "rgba(0, 70, 200, 0.25)");  
        g.addColorStop(1, "rgba(0, 0, 0, 0)");         

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
  <canvas
  ref={canvasRef}
  style={{
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    zIndex: -1,
    filter: "blur(120px)",
    pointerEvents: "none",
    overflow: "hidden"
  }}
/>

  );
}
