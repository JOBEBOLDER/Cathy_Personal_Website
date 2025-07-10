'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

interface ArtCanvasV2Props {
  position?: [number, number, number];
  mode: 'art' | 'code';
  onClick: () => void;
}

const ArtCanvasV2 = ({ position = [0, 0, 0], mode, onClick }: ArtCanvasV2Props) => {
  const canvasRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // 动画效果
  useFrame((state) => {
    if (canvasRef.current) {
      // 轻微浮动
      canvasRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      
      // 发光效果
      if (hovered) {
        canvasRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.02;
      }
    }
  });

  // 艺术模式的内容
  const renderArtMode = () => (
    <>
      {/* 画布背景 */}
      <Plane scale={[1.5, 1, 1]} position={[0, 0, 0.01]}>
        <meshStandardMaterial 
          color="#FFFFFF"
          transparent
          opacity={0.9}
        />
      </Plane>
      
      {/* 艺术元素 */}
      <Box scale={[0.3, 0.05, 0.02]} position={[-0.3, 0.2, 0.02]}>
        <meshStandardMaterial color="#FF6B6B" />
      </Box>
      <Box scale={[0.2, 0.3, 0.02]} position={[0.2, 0.1, 0.02]}>
        <meshStandardMaterial color="#4ECDC4" />
      </Box>
      <Box scale={[0.4, 0.02, 0.02]} position={[0, -0.1, 0.02]}>
        <meshStandardMaterial color="#FFE66D" />
      </Box>
      
      {/* 调色板 */}
      <group position={[0.8, 0, 0]}>
        <Box scale={[0.15, 0.4, 0.02]}>
          <meshStandardMaterial color="#8B5DFF" />
        </Box>
        {/* 颜色点 */}
        <Box scale={[0.03, 0.03, 0.01]} position={[0, 0.15, 0.02]}>
          <meshStandardMaterial color="#FF6B6B" />
        </Box>
        <Box scale={[0.03, 0.03, 0.01]} position={[0, 0.05, 0.02]}>
          <meshStandardMaterial color="#00D4FF" />
        </Box>
        <Box scale={[0.03, 0.03, 0.01]} position={[0, -0.05, 0.02]}>
          <meshStandardMaterial color="#00FF88" />
        </Box>
        <Box scale={[0.03, 0.03, 0.01]} position={[0, -0.15, 0.02]}>
          <meshStandardMaterial color="#FFE66D" />
        </Box>
      </group>
    </>
  );

  // 代码模式的内容
  const renderCodeMode = () => (
    <>
      {/* 屏幕背景 */}
      <Plane scale={[1.5, 1, 1]} position={[0, 0, 0.01]}>
        <meshStandardMaterial 
          color="#0A0F1C"
          emissive="#0A0F1C"
          emissiveIntensity={0.1}
        />
      </Plane>
      
      {/* 代码行（用简单的几何体表示） */}
      <Box scale={[0.8, 0.03, 0.01]} position={[-0.2, 0.3, 0.02]}>
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.3} />
      </Box>
      
      <Box scale={[0.6, 0.03, 0.01]} position={[-0.3, 0.2, 0.02]}>
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.3} />
      </Box>
      
      <Box scale={[0.4, 0.03, 0.01]} position={[-0.4, 0.1, 0.02]}>
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.3} />
      </Box>
      
      <Box scale={[0.9, 0.03, 0.01]} position={[-0.15, -0.1, 0.02]}>
        <meshStandardMaterial color="#FF3366" emissive="#FF3366" emissiveIntensity={0.3} />
      </Box>
      
      {/* 光标闪烁效果 */}
      <Box scale={[0.01, 0.06, 0.005]} position={[0.4, -0.1, 0.025]}>
        <meshStandardMaterial 
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.5}
        />
      </Box>
    </>
  );

  return (
    <group 
      ref={canvasRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={onClick}
      scale={hovered ? 1.05 : 1}
    >
      {/* 画框/屏幕边框 */}
      <Box scale={[1.7, 1.2, 0.05]} position={[0, 0, -0.02]}>
        <meshStandardMaterial 
          color={mode === 'art' ? "#8B4513" : "#2A2F3C"}
          metalness={0.6}
          roughness={0.4}
        />
      </Box>
      
      {/* 内容根据模式切换 */}
      {mode === 'art' ? renderArtMode() : renderCodeMode()}
      
      {/* 发光效果 */}
      {hovered && (
        <Plane scale={[1.8, 1.3, 1]} position={[0, 0, -0.05]}>
          <meshStandardMaterial 
            color={mode === 'art' ? "#FF6B6B" : "#00D4FF"}
            transparent
            opacity={0.1}
            emissive={mode === 'art' ? "#FF6B6B" : "#00D4FF"}
            emissiveIntensity={0.2}
          />
        </Plane>
      )}
    </group>
  );
};

export default ArtCanvasV2;