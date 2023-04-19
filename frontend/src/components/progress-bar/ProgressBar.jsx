import { motion } from 'framer-motion';
import './progress-bar.css';
import Card from './Card';
import { useEffect, useState, useRef } from 'react';
export default function ({
  text,
  parentColor,
  loadingColor,
  height,
  borderRadius,
  margin,
  isLoading,
  setPage,
}) {
  const ref = useRef();
  const animate = {
    x: ['0%', '100%', '200%', '300%'],
    width: ['25%', '25%', '25%', '25%'],
  };
  useEffect(() => {
    ref.currrent?.click();
  }, [isLoading]);
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
          animate={isLoading ? animate : {}}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 1,
          }}
        ></motion.div>
        {!isLoading && (
          <div
            ref={ref}
            style={{ textAlign: 'right' }}
            onClick={() => {
              setPage('result');
            }}
          >
            done
          </div>
        )}
      </div>
    </Card>
  );
}
