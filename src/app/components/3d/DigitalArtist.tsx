'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

interface DigitalArtistProps {
  position?: [number, number, number];
}

const DigitalArtist = ({ position = [0, 0, 0] }: DigitalArtistProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // 动画循环
  useFrame((state) => {
    if (groupRef.current) {
      // 轻微的呼吸动画
      groupRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime) * 0.02);
      
      // 如果被悬停，增加旋转
      if (hovered) {
        groupRef.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setClicked(!clicked)}
    >
      {/* 角色身体 - 使用简单几何体 */}
      
      {/* 头部 */}
      <Sphere position={[0, 1.5, 0]} scale={0.3}>
        <meshStandardMaterial 
          color={hovered ? "#FF3366" : "#00D4FF"}
          metalness={0.7}
          roughness={0.3}
        />
      </Sphere>
      
      {/* 身体 */}
      <Box position={[0, 0.5, 0]} scale={[0.4, 0.8, 0.3]}>
        <meshStandardMaterial 
          color="#2A2F3C"
          metalness={0.5}
          roughness={0.4}
        />
      </Box>
      
      {/* 左臂 - 拿着画笔 */}
      <group position={[-0.35, 0.8, 0]} rotation={[0, 0, -0.3]}>
        <Box scale={[0.1, 0.4, 0.1]}>
          <meshStandardMaterial color="#8B5DFF" />
        </Box>
        
        {/* 画笔 */}
        <group position={[0, -0.3, 0]} rotation={[0, 0, 0.2]}>
          <Cone scale={[0.02, 0.2, 0.02]} position={[0, -0.1, 0]}>
            <meshStandardMaterial color="#FFE66D" />
          </Cone>
          <Box scale={[0.015, 0.15, 0.015]} position={[0, 0.075, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
        </group>
      </group>
      
      {/* 右臂 - 拿着键盘/鼠标 */}
      <group position={[0.35, 0.6, 0]} rotation={[0, 0, 0.3]}>
        <Box scale={[0.1, 0.4, 0.1]}>
          <meshStandardMaterial color="#4ECDC4" />
        </Box>
        
        {/* 小键盘 */}
        <Box scale={[0.15, 0.05, 0.1]} position={[0, -0.25, 0]}>
          <meshStandardMaterial color="#1A1F2C" />
        </Box>
      </group>
      
      {/* 腿部 */}
      <Box position={[-0.1, -0.3, 0]} scale={[0.12, 0.6, 0.12]}>
        <meshStandardMaterial color="#2A2F3C" />
      </Box>
      <Box position={[0.1, -0.3, 0]} scale={[0.12, 0.6, 0.12]}>
        <meshStandardMaterial color="#2A2F3C" />
      </Box>
      
      {/* 漂浮的创意元素 */}
      {clicked && (
        <>
          {/* 设计元素 */}
          <Sphere position={[-1, 2, 0.5]} scale={0.1}>
            <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.3} />
          </Sphere>
          <Box position={[1, 2.2, -0.5]} scale={0.08}>
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.3} />
          </Box>
          <Cone position={[0.5, 2.5, 0.8]} scale={0.06}>
            <meshStandardMaterial color="#FFE66D" emissive="#FFE66D" emissiveIntensity={0.3} />
          </Cone>
        </>
      )}
      
      {/* 名字标签 */}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.2}
        color={hovered ? "#FF3366" : "#00D4FF"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        数字艺术家
      </Text>
      
      {/* 交互提示 */}
      {hovered && (
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.12}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          点击我看看创意元素！
        </Text>
      )}
    </group>
  );
};

export default DigitalArtist;