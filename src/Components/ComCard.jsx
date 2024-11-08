import { motion } from 'framer-motion';
import { useState } from 'react';


const CardComponent = () => {
  const [x, setX] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      setX(x + deltaX);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <motion.div
      className="card-img  bg-green-600"
      initial={{ x: 0 }}
      animate={{ x }}
      transition={{ duration: 0.5 }}
      onMouseDown={handleMouseDown}
    >
      <div className="card-img-top w-[200px ] h-[400px]">
        <img src="https://zelt.app/wp-content/uploads/2023/02/zelt.wp2.cubdev.com-homepage-1.jpeg" alt="" />
        <div className="text-card-img-top">
          <span>Felix <br /> Leuschner</span>
          <span className="lastsp">founder of drover <br /> (SOLD to cazoo)</span>
        </div>
      </div>

      <div className="card-img-bo">
        <p>The burden on people operations has increased significantly in the last few years. Zelt helps automate rather than just digitally pushing paper from one desk to another.</p>
      </div>
    </motion.div>
  );
};

export default CardComponent;