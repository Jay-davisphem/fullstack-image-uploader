import { motion } from 'framer-motion';
import './progress-bar.css';
import Card from './Card';
import { useState } from 'react';
export default function ({
  text,
  parentColor,
  loadingColor,
  height,
  borderRadius,
  margin,
}) {
  const [isAnimate, setIsAnimate] = useState(false)
  const animate = {
    x: ['0%', '100%', '200%', '300%'],
    width: ['25%', '25%', '25%', '25%'],
  };
  return (
    <Card>
      <p className="loading-text">{text}</p>
      <div
        className="loading-bar"
        style={{
          backgroundColor: parentColor,
          borderRadius,
          height,
          margin,
        }}
      >
        <motion.div
          className="moving-loading-bar"
          style={{
            backgroundColor: loadingColor,
            borderRadius,
            border: 'none',
            outline: 'none',
            height,
          }}
          animate={isAnimate? animate: {}}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 5,
          }}
        ></motion.div>
      </div>
    </Card>
  );
}
