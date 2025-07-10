'use client';

import React, { useEffect, useRef } from 'react';

// Simple Perlin noise implementation
class PerlinNoise {
  private permutation: number[];
  private p: number[];

  constructor() {
    this.permutation = [];
    this.p = [];
    this.setSeed(Math.random());
  }

  setSeed(seed: number) {
    // Generate permutation table based on seed
    for (let i = 0; i < 256; i++) {
      this.permutation[i] = i;
    }
    
    // Shuffle based on seed
    let random = seed;
    for (let i = 255; i >= 0; i--) {
      random = (random * 9301 + 49297) % 233280;
      const j = Math.floor((random / 233280) * (i + 1));
      [this.permutation[i], this.permutation[j]] = [this.permutation[j], this.permutation[i]];
    }
    
    // Duplicate for easier indexing
    for (let i = 0; i < 512; i++) {
      this.p[i] = this.permutation[i & 255];
    }
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  perlin2(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    
    x -= Math.floor(x);
    y -= Math.floor(y);
    
    const u = this.fade(x);
    const v = this.fade(y);
    
    const A = this.p[X] + Y;
    const AA = this.p[A];
    const AB = this.p[A + 1];
    const B = this.p[X + 1] + Y;
    const BA = this.p[B];
    const BB = this.p[B + 1];
    
    return this.lerp(v,
      this.lerp(u, this.grad(this.p[AA], x, y), this.grad(this.p[BA], x - 1, y)),
      this.lerp(u, this.grad(this.p[AB], x, y - 1), this.grad(this.p[BB], x - 1, y - 1))
    );
  }
}

const WaveGrid = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const noiseRef = useRef<PerlinNoise>(new PerlinNoise());
  const animationRef = useRef<number | undefined>(undefined);
  const sceneRef = useRef<{
    flag: {
      x: number;
      y: number;
      width: number;
      height: number;
      lines: Array<Array<{
        originX: number;
        originY: number;
        offsetX: number;
        offsetY: number;
        x: number;
        y: number;
      }>>;
    };
    rows: { b: SVGPathElement[]; r: SVGPathElement[] };
    cols: { b: SVGPathElement[]; r: SVGPathElement[] };
    pathB: SVGGElement;
    pathR: SVGGElement;
    strength: number;
    startTime: number;
  } | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const ratio = 297 / 210;
    const width = 600;
    const height = width / ratio;
    
    svg.setAttribute('width', width + 'px');
    svg.setAttribute('height', height + 'px');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Initialize scene
    const scene = {
      flag: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        lines: [] as Array<Array<{
          originX: number;
          originY: number;
          offsetX: number;
          offsetY: number;
          x: number;
          y: number;
        }>>
      },
      rows: { b: [] as SVGPathElement[], r: [] as SVGPathElement[] },
      cols: { b: [] as SVGPathElement[], r: [] as SVGPathElement[] },
      pathB: null as any,
      pathR: null as any,
      strength: 10,
      startTime: performance.now()
    };

    // Generate scene
    function generate() {
      noiseRef.current.setSeed(Math.random());
      
      svg.innerHTML = '';
      
      // Create groups for blue and red paths
      scene.pathB = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      scene.pathB.setAttribute('fill', 'none');
      scene.pathB.setAttribute('stroke', '#33c'); // Blue color from original
      scene.pathB.setAttribute('stroke-width', '1px');
      
      scene.pathR = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      scene.pathR.setAttribute('fill', 'none');
      scene.pathR.setAttribute('stroke', '#d34'); // Red color from original
      scene.pathR.setAttribute('stroke-width', '1px');
      
      svg.appendChild(scene.pathB);
      svg.appendChild(scene.pathR);
      
      scene.rows = { b: [], r: [] };
      scene.cols = { b: [], r: [] };
      
      const paddingX = 200;
      const paddingY = 200;
      const flagWidth = width - paddingX;
      const flagHeight = height - paddingY;
      const totalCols = Math.floor(flagWidth * 0.06);
      const totalRows = Math.floor(flagHeight * 0.25);
      const stepX = flagWidth / totalCols;
      const stepY = flagHeight / totalRows;
      
      scene.flag = {
        x: paddingX / 2,
        y: paddingY / 2,
        width: flagWidth,
        height: flagHeight,
        lines: []
      };
      
      // Create grid points
      for (let i = 0; i < totalRows; i++) {
        const line = [];
        
        for (let j = 0; j < totalCols; j++) {
          const px = scene.flag.x + j * stepX;
          const py = scene.flag.y + i * stepY;
          
          const point = {
            originX: px,
            originY: py,
            offsetX: 0,
            offsetY: 0,
            x: px,
            y: py
          };
          
          line.push(point);
        }
        
        scene.flag.lines.push(line);
      }
      
      // Create row paths
      for (let i = 0; i < totalRows; i++) {
        const pathB = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const pathR = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        scene.rows.b.push(pathB);
        scene.rows.r.push(pathR);
        
        scene.pathB.appendChild(pathB);
        scene.pathR.appendChild(pathR);
      }
      
      // Create column paths
      for (let i = 0; i < totalCols; i++) {
        const pathB = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const pathR = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        scene.cols.b.push(pathB);
        scene.cols.r.push(pathR);
        
        scene.pathB.appendChild(pathB);
        scene.pathR.appendChild(pathR);
      }
      
      animate();
    }

    function move(time: number) {
      scene.flag.lines.forEach(line => {
        line.forEach(point => {
          const distort = noiseRef.current.perlin2(
            (point.originX + time * 0.02) * 0.002,
            (point.originY + time * 0.015) * 0.004
          ) * scene.strength;
          
          const offsetX = Math.cos(distort) * scene.strength * 1.25;
          const offsetY = Math.sin(distort) * scene.strength * 1.5;
          
          point.offsetX = offsetX;
          point.offsetY = offsetY;
          point.x = point.originX + offsetX;
          point.y = point.originY + offsetY;
        });
      });
    }

    function draw() {
      const aStrength = 0.35;
      
      // Draw rows
      scene.flag.lines.forEach((line, index) => {
        const p1 = line[0];
        
        let d = `M ${p1.x} ${p1.y} `;
        let d2 = `M ${p1.x + p1.offsetX * aStrength} ${p1.y + p1.offsetY * aStrength} `;
        
        line.forEach((p1, i) => {
          const p2 = line[i + 1] || line[line.length - 1];
          
          d += `Q ${p1.x} ${p1.y} ${(p1.x + p2.x) / 2} ${(p1.y + p2.y) / 2} `;
          d2 += `Q ${p1.x + p1.offsetX * aStrength} ${p1.y + p1.offsetY * aStrength} ${(p1.x + p1.offsetX * aStrength + p2.x + p2.offsetX * aStrength) / 2} ${(p1.y + p1.offsetY * aStrength + p2.y + p2.offsetY * aStrength) / 2} `;
        });
        
        if (scene.rows.b[index]) scene.rows.b[index].setAttribute('d', d);
        if (scene.rows.r[index]) scene.rows.r[index].setAttribute('d', d2);
      });
      
      // Draw columns
      const cols: Array<Array<{
        originX: number;
        originY: number;
        offsetX: number;
        offsetY: number;
        x: number;
        y: number;
      }>> = [];
      
      scene.flag.lines.forEach((line, i) => {
        line.forEach((p, j) => {
          if (!cols[j]) {
            cols[j] = [];
          }
          cols[j].push(p);
        });
      });
      
      cols.forEach((col, index) => {
        let d = '';
        let d2 = '';
        
        col.forEach((p, i) => {
          const cmd = i === 0 ? 'M' : 'L';
          d += ` ${cmd} ${p.x} ${p.y} `;
          d2 += ` ${cmd} ${p.x + p.offsetX * aStrength} ${p.y + p.offsetY * aStrength} `;
        });
        
        if (scene.cols.b[index]) scene.cols.b[index].setAttribute('d', d);
        if (scene.cols.r[index]) scene.cols.r[index].setAttribute('d', d2);
      });
    }

    function animate() {
      scene.startTime = performance.now();
      tick();
    }

    function tick() {
      const nowTime = performance.now();
      
      move(nowTime);
      draw();
      
      animationRef.current = requestAnimationFrame(tick);
    }

    sceneRef.current = scene;
    generate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center mb-8">
      <svg
        ref={svgRef}
        className="max-w-full h-auto opacity-80"
        style={{ maxWidth: '500px' }}
      />
    </div>
  );
};

export default WaveGrid; 