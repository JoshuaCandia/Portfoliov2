import { useEffect, useRef } from 'react';

const MatrixRainComponent = () => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const letters =
         'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
      const fontSize = 10;
      const columns = Math.floor(canvas.width / fontSize);
      console.log(columns);
      const drops = new Array(columns).fill(1);

      function draw() {
         ctx.fillStyle = 'rgba(0, 0, 0, .1)';
         ctx.fillRect(0, 0, canvas.width, canvas.height);

         for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];

            ctx.fillStyle = '#6919FF';
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
               drops[i] = 0;
            }
         }
      }

      const animationInterval = setInterval(draw, 33);

      return () => {
         clearInterval(animationInterval);
      };
   }, []);

   return (
      <canvas
         className='opacity-75'
         ref={canvasRef}
      ></canvas>
   );
};

export default MatrixRainComponent;
