import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let mouse = { x: -1000, y: -1000, radius: 180 };

    // Recalibrated colors for high contrast on transparent/variable backgrounds
    const colors = {
      navy: '#0a192f',    // Deep navy
      blue: '#0066ee',    // Vibrant tech-blue
      gray: '#343535'     // Darker gray for better visibility
    };

    class Particle {
      constructor(x, y, color) {
        // Initial randomized position for entrance scatter effect
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.homeX = x;
        this.homeY = y;
        this.color = color;
        
        // Increased block size for more pronounced look
        this.size = Math.random() > 0.8 ? 8 : 6; 
        
        this.vx = 0;
        this.vy = 0;
        this.friction = 0.90; // Slightly more fluid return
        this.spring = 0.04;   // Spring force strength
      }

      draw() {
        ctx.fillStyle = this.color;
        // Square blocks (pixels)
        ctx.fillRect(Math.floor(this.x), Math.floor(this.y), this.size, this.size);
      }

      update() {
        // Return to home position
        let dxHome = this.homeX - this.x;
        let dyHome = this.homeY - this.y;
        this.vx += dxHome * this.spring;
        this.vy += dyHome * this.spring;

        // Mouse repulsion
        let dxMouse = mouse.x - this.x;
        let dyMouse = mouse.y - this.y;
        let distance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let angle = Math.atan2(dyMouse, dxMouse);
          let pushX = Math.cos(angle) * force * 20; // Increased repulsion force
          let pushY = Math.sin(angle) * force * 20;
          
          this.vx -= pushX;
          this.vy -= pushY;
        }

        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      particles = [];

      const img = new Image();
      img.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDxtgQyyn8yN6U0xk6ErOl6ieDgqpKZZAi6AEZZ2m7CCinrbBZtLTv-y8snj-maqa2jhJmmV652KIw8VRrJPA0VKMT-Xx6WkZn2eQOkJOze0PeXcllvA_ExPzNxXwSeoEvZw9DC-37CUfWcsLy303O-CSAABRD5E_ZEi1QciWr-7u6fhSNFJBYzxIcOBeakdPtBngWgUE8yiIv7jjuWw0hl8sGPYlZ7xb1dTlERmDjRtYjeqg0WGz1BRCCfOAOHW6CXfXtWq5R8xg4";
      img.crossOrigin = "anonymous";
      
      img.onload = function() {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        // Scale logo
        const logoScale = Math.min(canvas.width / img.width * 0.7, canvas.height / img.height * 0.7);
        const logoW = img.width * logoScale;
        const logoH = img.height * logoScale;
        
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        
        tempCtx.drawImage(img, (canvas.width - logoW) / 2, (canvas.height - logoH) / 2, logoW, logoH);
        
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;
        
        // Adjusted sampling step for larger particles to prevent overcrowding
        const step = 10; 

        const logoStartY = (canvas.height - logoH) / 2;
        const taglineThresholdY = logoStartY + (logoH * 0.62);

        for (let y = 0; y < tempCanvas.height; y += step) {
          // Primary wordmark only
          if (y > taglineThresholdY) continue;

          for (let x = 0; x < tempCanvas.width; x += step) {
            const index = (y * tempCanvas.width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const alpha = data[index + 3];

            // Filter out non-content pixels
            if (alpha > 128 && (r < 240 || g < 240 || b < 240)) {
              let color;
              if (b > 150 && r < 120) {
                color = colors.blue;
              } else if (b < 100 && r < 80) {
                color = colors.navy;
              } else {
                color = colors.gray;
              }
              
              particles.push(new Particle(x, y, color));
            }
          }
        }
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="canvas-container">
      <canvas ref={canvasRef} id="logoCanvas" />
      <style>{`
        #canvas-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: transparent;
          overflow: hidden;
          cursor: crosshair;
        }
        #logoCanvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
