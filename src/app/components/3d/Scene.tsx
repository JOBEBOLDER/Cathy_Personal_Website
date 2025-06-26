'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import DigitalArtist from './DigitalArtist';
import ArtCanvas from './ArtCanvas';

interface SceneProps {
  canvasMode: 'art' | 'code';
  onCanvasClick: () => void;
}

const Scene = ({ canvasMode, onCanvasClick }: SceneProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 45,
          near: 0.1,
          far: 1000 
        }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* 环境光照 */}
          <Environment preset="studio" />
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          
          {/* 补充光源 - 创造艺术氛围 */}
          <pointLight 
            position={[-5, 5, 5]} 
            intensity={0.8} 
            color="#FF3366" 
          />
          <pointLight 
            position={[5, -5, 5]} 
            intensity={0.8} 
            color="#00D4FF" 
          />
          
          {/* 数字艺术家角色 */}
          <Float
            speed={2}
            rotationIntensity={0.1}
            floatIntensity={0.1}
          >
            <DigitalArtist position={[-2, 0, 0]} />
          </Float>
          
          {/* 艺术画布/代码屏幕 */}
          <Float
            speed={1.5}
            rotationIntensity={0.05}
            floatIntensity={0.2}
          >
            <ArtCanvas 
              position={[2, 0, 0]} 
              mode={canvasMode}
              onClick={onCanvasClick}
            />
          </Float>
          
          {/* 轨道控制器 - 允许用户拖拽查看 */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;