import React, { useEffect, useRef } from "react";


const MatrixRainingCode = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20);
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charArray = characters.split("");
    let drops = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    let frameRate = 10; // Adjust the frame rate (lower value = slower speed)
    let lastFrameTime = Date.now();

    const draw = () => {
      // Create the fade-out gradient effect
      let gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "black");  // Solid black on the left
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Fully transparent on the right
    
      // Apply gradient overlay to fade out effect
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    
      // Green matrix characters
      ctx.fillStyle = "rgba(0, 255, 0, 0.8)"; 
      ctx.font = "20px monospace";
    
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
    
        if (drops[i] * 20 > height && Math.random() > 0.99) {
          drops[i] = 0;
        }
    
        drops[i] += 0.5; // Adjust speed
      }
    };
    

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;

      // Update the animation only if enough time has passed
      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Update canvas dimensions on window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    };

    // Check if the user is on a mobile device before handling resize and scroll events
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return <canvas className="matrix-canvas fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>;
};

export default MatrixRainingCode;