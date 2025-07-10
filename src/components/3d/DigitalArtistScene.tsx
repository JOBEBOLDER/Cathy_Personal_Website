'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// 3D 角色组件（简化版）
const DigitalArtist = ({ canvasMode }: { canvasMode: 'art' | 'code' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // 微妙的摇摆动画
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group position={[-2, 0, 0]}>
      {/* 角色身体 */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 1, 4, 8]} />
        <meshStandardMaterial color="#4ade80" />
      </mesh>
      
      {/* 角色头部 */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>
      
      {/* 手臂 - 指向画布 */}
      <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <capsuleGeometry args={[0.08, 0.6, 4, 8]} />
        <meshStandardMaterial color="#4ade80" />
      </mesh>
      
      {/* 画笔/鼠标 */}
      <mesh position={[0.8, 0.1, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color={canvasMode === 'art' ? '#ff6b6b' : '#ffd93d'} />
      </mesh>
    </group>
  );
};

// 交互式画布组件
const InteractiveCanvas = ({ 
  canvasMode, 
  onModeChange 
}: { 
  canvasMode: 'art' | 'code'; 
  onModeChange: () => void; 
}) => {
  const canvasRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (canvasRef.current) {
      // 微妙的浮动效果
      canvasRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.03;
      
      // 悬停时的缩放效果
      const targetScale = hovered ? 1.05 : 1;
      canvasRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group position={[1, 0, 0]}>
      {/* 画布背景 */}
      <mesh
        ref={canvasRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onModeChange}
      >
        <planeGeometry args={[1.5, 1.2]} />
        <meshStandardMaterial 
          color={canvasMode === 'art' ? '#1a1a1a' : '#0d1117'}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* 画布内容 */}
      <Html
        position={[0, 0, 0.01]}
        transform
        occlude
        style={{
          width: '200px',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          color: canvasMode === 'art' ? '#ff6b6b' : '#22d3ee',
          fontFamily: 'monospace',
          textAlign: 'center',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        {canvasMode === 'art' ? (
          <div>
            <div>🎨 Creative Design</div>
            <div style={{ marginTop: '10px', fontSize: '10px' }}>
              • UI/UX Design<br/>
              • Visual Identity<br/>
              • Digital Art
            </div>
          </div>
        ) : (
          <div>
            <div>💻 Code Development</div>
            <div style={{ marginTop: '10px', fontSize: '10px' }}>
              const skills = [<br/>
              &nbsp;&nbsp;'React', 'TypeScript',<br/>
              &nbsp;&nbsp;'Next.js', 'Three.js'<br/>
              ];
            </div>
          </div>
        )}
      </Html>
      
      {/* 画布边框 */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(1.5, 1.2)]} />
        <lineBasicMaterial color={canvasMode === 'art' ? '#ff6b6b' : '#22d3ee'} />
      </lineSegments>
    </group>
  );
};

// 漂浮元素组件
const FloatingElements = ({ canvasMode }: { canvasMode: 'art' | 'code' }) => {
  const elements = canvasMode === 'art' 
    ? [
        { icon: '🎨', position: [-3, 2, -1], color: '#ff6b6b' },
        { icon: '✨', position: [3, 1.5, -2], color: '#ffd93d' },
        { icon: '🎭', position: [-2, -1.5, 1], color: '#ff9f43' },
        { icon: '🖌️', position: [2.5, -1, 0.5], color: '#ee5a6f' },
      ]
    : [
        { icon: '⚡', position: [-3, 2, -1], color: '#22d3ee' },
        { icon: '🔧', position: [3, 1.5, -2], color: '#4ade80' },
        { icon: '📱', position: [-2, -1.5, 1], color: '#a78bfa' },
        { icon: '💡', position: [2.5, -1, 0.5], color: '#fbbf24' },
      ];

  return (
    <>
      {elements.map((element, index) => (
        <FloatingElement 
          key={index} 
          {...element} 
          delay={index * 0.5}
        />
      ))}
    </>
  );
};

// 单个漂浮元素
const FloatingElement = ({ 
  icon, 
  position, 
  color, 
  delay 
}: { 
  icon: string; 
  position: [number, number, number]; 
  color: string; 
  delay: number; 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.2;
      meshRef.current.rotation.z = Math.sin(time * 0.6) * 0.1;
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <Html
        position={[0, 0, 0]}
        center
        style={{
          fontSize: '20px',
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        {icon}
      </Html>
    </group>
  );
};

// 主要的 3D 场景组件
const DigitalArtistScene = () => {
  const [canvasMode, setCanvasMode] = useState<'art' | 'code'>('art');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 模拟加载延迟
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleCanvasMode = () => {
    setCanvasMode(prev => prev === 'art' ? 'code' : 'art');
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-green-400 text-lg">Loading 3D Scene...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        className="w-full h-full"
      >
        {/* 环境光 */}
        <ambientLight intensity={0.6} />
        
        {/* 主光源 */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* 辅助光源 */}
        <pointLight position={[-5, 2, 2]} intensity={0.5} color="#4ade80" />
        <pointLight position={[5, -2, -2]} intensity={0.5} color="#22d3ee" />
        
        {/* 3D 角色 */}
        <DigitalArtist canvasMode={canvasMode} />
        
        {/* 交互式画布 */}
        <InteractiveCanvas 
          canvasMode={canvasMode} 
          onModeChange={toggleCanvasMode} 
        />
        
        {/* 漂浮元素 */}
        <FloatingElements canvasMode={canvasMode} />
        
        {/* 控制器 */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          maxDistance={8}
          minDistance={3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      {/* 交互提示 */}
      <div className="absolute bottom-4 left-4 text-slate-400 text-sm">
        <div>🖱️ Drag to rotate • Click canvas to switch mode</div>
        <div className="mt-1">
          Current mode: <span className="text-green-400">
            {canvasMode === 'art' ? 'Creative Design' : 'Code Development'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DigitalArtistScene;