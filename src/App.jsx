import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// --------------------------------------------------------
// SHAPES & GEOMETRIES
// --------------------------------------------------------
const roofShape = new THREE.Shape();
roofShape.moveTo(-2.5, 0);
roofShape.lineTo(2.5, 0);
roofShape.lineTo(0, 2);
roofShape.lineTo(-2.5, 0);

const gableShape = new THREE.Shape();
gableShape.moveTo(-2.1, 0);
gableShape.lineTo(2.1, 0);
gableShape.lineTo(0, 1.68);
gableShape.lineTo(-2.1, 0);

const extrudeSettings = { depth: 5, bevelEnabled: false };

const Arrow = ({ position, rotation, color, scale = 1 }) => (
  <group position={position} rotation={rotation} scale={scale}>
    <mesh position={[0, 0.5, 0]}>
      <cylinderGeometry args={[0.08, 0.08, 1, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
    <mesh position={[0, 1.1, 0]}>
      <coneGeometry args={[0.25, 0.4, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  </group>
);

// --------------------------------------------------------
// EXPLODED ROOF LAYERS (Cooling Roof Detail)
// --------------------------------------------------------
const ExplodedRoofLayers = ({ visible, onClick }) => {
  const groupRef = useRef();
  const targetOpacity = useRef(0);
  const currentOpacity = useRef(0);

  // Layer shapes (slightly smaller than the main roof to sit inside)
  const layerShape1 = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-2.35, 0);
    s.lineTo(2.35, 0);
    s.lineTo(0, 1.88);
    s.lineTo(-2.35, 0);
    return s;
  }, []);

  const layerShape2 = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-2.42, 0);
    s.lineTo(2.42, 0);
    s.lineTo(0, 1.94);
    s.lineTo(-2.42, 0);
    return s;
  }, []);

  const layerExtrude1 = useMemo(() => ({ depth: 4.82, bevelEnabled: false }), []);
  const layerExtrude2 = useMemo(() => ({ depth: 4.8, bevelEnabled: false }), []);

  useEffect(() => {
    targetOpacity.current = visible ? 1 : 0;
  }, [visible]);

  useFrame(() => {
    currentOpacity.current += (targetOpacity.current - currentOpacity.current) * 0.08;
    if (groupRef.current) {
      // Smooth scale-in for the whole group
      const targetScale = visible ? 1 : 0;
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.08
      );
    }
  });

  return (
    <group ref={groupRef} scale={[0, 0, 0]}>
      {/* Layer 2 (bottom): BaSO₄ — warm amber/gold */}
      <group position={[0, 2.5, -2.4]}>
        <mesh castShadow onClick={onClick}>
          <extrudeGeometry args={[layerShape2, layerExtrude2]} />
          <meshStandardMaterial
            color="#f59e0b"
            roughness={0.5}
            metalness={0.15}
          />
        </mesh>
        {/* Label for BaSO4 layer */}
        {visible && (
          <Html position={[4.5, 0.2, 2.4]} center className="no-pointer-events">
            <div className="layer-label baso4-label">
              <div className="layer-color-dot" style={{ background: '#f59e0b' }}></div>
              <div>
                <strong>Lapisan 2: BaSO₄</strong>
                <span>Komposit Barium Sulfat</span>
              </div>
            </div>
          </Html>
        )}
      </group>

      {/* Layer 1 (top): Kitosan — teal/cyan */}
      <group position={[0, 3.3, -2.41]}>
        <mesh castShadow onClick={onClick}>
          <extrudeGeometry args={[layerShape1, layerExtrude1]} />
          <meshStandardMaterial
            color="#14b8a6"
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
        {/* Label for Kitosan layer */}
        {visible && (
          <Html position={[4.5, 1.8, 2.4]} center className="no-pointer-events">
            <div className="layer-label kitosan-label">
              <div className="layer-color-dot" style={{ background: '#14b8a6' }}></div>
              <div>
                <strong>Lapisan 1: Kitosan</strong>
                <span>Limbah Cangkang Udang</span>
              </div>
            </div>
          </Html>
        )}
      </group>

      {/* Connector line between layers */}
      {visible && (
        <Html position={[-6, 5.5, 0]} center className="no-pointer-events">
          <div className="exploded-info-card">
            <div className="circle-num-large" style={{ width: '32px', height: '32px', fontSize: '1.1rem', marginRight: '4px' }}>1</div>
            <div className="exploded-info-text">
              <strong>Cooling Roof — Exploded View</strong>
              <p>Solusi atap pendingin yang memantulkan panas dan mendinginkan rumah dengan berpotensi mendinginkan permukaan atap rumah.</p>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

// Animated roof wrapper for exploded offset
const AnimatedRoof = ({ children, isExploded }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      const targetScale = isExploded ? 0 : 1;
      ref.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.08
      );
    }
  });

  return <group ref={ref}>{children}</group>;
};

// --------------------------------------------------------
// 3D COMPONENTS
// --------------------------------------------------------
const House = ({ roofType, setRoofType, activePopup, setActivePopup }) => {
  const isCoolingRoof = roofType === 'coolingRoof';
  const isNormal = roofType === 'normal';
  const isExploded = activePopup === 'roof1';

  const handleRoofGeometryClick = (e) => {
    e.stopPropagation();
    setRoofType(isCoolingRoof ? 'normal' : 'coolingRoof');
    setActivePopup(null);
  };

  const handleLabel1Click = (e) => {
    e.stopPropagation();
    if (activePopup === 'roof1') {
      setRoofType('initial');
      setActivePopup(null);
    } else {
      setRoofType('coolingRoof');
      setActivePopup('roof1');
    }
  };

  const handleLabel3Click = (e) => {
    e.stopPropagation();
    if (activePopup === 'roof3') {
      setRoofType('initial');
      setActivePopup(null);
    } else {
      setRoofType('normal');
      setActivePopup('roof3');
    }
  };

  const handleReflectClick = (e) => {
    e.stopPropagation();
    if (activePopup === 'reflect') {
      setRoofType('initial');
      setActivePopup(null);
    } else {
      setRoofType('coolingRoof');
      setActivePopup('reflect');
    }
  };

  return (
    <group position={[1, -1, 0]}>
      {/* Foundation / Base */}
      <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
        <boxGeometry args={[4.6, 0.2, 4.8]} />
        <meshStandardMaterial color="#64748b" roughness={0.9} />
      </mesh>

      {/* Main Walls */}
      <mesh castShadow receiveShadow position={[0, 1.35, 0]}>
        <boxGeometry args={[4.2, 2.3, 4.4]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.8} />
      </mesh>

      {/* Front Gable */}
      <mesh position={[0, 2.5, 2.2]} receiveShadow castShadow>
        <extrudeGeometry args={[gableShape, { depth: 0.05, bevelEnabled: false }]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.8} />
      </mesh>

      {/* Back Gable */}
      <mesh position={[0, 2.5, -2.25]} receiveShadow castShadow>
        <extrudeGeometry args={[gableShape, { depth: 0.05, bevelEnabled: false }]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.8} />
      </mesh>

      {/* Door Frame */}
      <mesh position={[-0.8, 1.15, 2.2]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.9, 0.1]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
      </mesh>

      {/* Door */}
      <mesh position={[-0.8, 1.15, 2.24]} castShadow receiveShadow>
        <boxGeometry args={[1.0, 1.8, 0.05]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.6} />
      </mesh>

      {/* Door Knob */}
      <mesh position={[-0.45, 1.15, 2.28]} castShadow>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Front Window */}
      <group position={[1.0, 1.4, 2.2]}>
        <mesh castShadow><boxGeometry args={[1.2, 1.2, 0.1]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[0, 0, 0.03]}><boxGeometry args={[1.0, 1.0, 0.05]} /><meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.8} envMapIntensity={2.0} transparent opacity={0.6} /></mesh>
        <mesh position={[0, 0, 0.05]} castShadow><boxGeometry args={[1.0, 0.05, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[0, 0, 0.05]} castShadow><boxGeometry args={[0.05, 1.0, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
      </group>

      {/* Right Window */}
      <group position={[2.1, 1.4, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow><boxGeometry args={[2.0, 1.2, 0.1]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[0, 0, 0.03]}><boxGeometry args={[1.8, 1.0, 0.05]} /><meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.8} envMapIntensity={2.0} transparent opacity={0.6} /></mesh>
        <mesh position={[0, 0, 0.05]} castShadow><boxGeometry args={[1.8, 0.05, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[-0.45, 0, 0.05]} castShadow><boxGeometry args={[0.05, 1.0, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[0.45, 0, 0.05]} castShadow><boxGeometry args={[0.05, 1.0, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
      </group>

      {/* Left Window */}
      <group position={[-2.1, 1.4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh castShadow><boxGeometry args={[2.0, 1.2, 0.1]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[0, 0, 0.03]}><boxGeometry args={[1.8, 1.0, 0.05]} /><meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.8} envMapIntensity={2.0} transparent opacity={0.6} /></mesh>
        <mesh position={[0, 0, 0.05]} castShadow><boxGeometry args={[1.8, 0.05, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[-0.45, 0, 0.05]} castShadow><boxGeometry args={[0.05, 1.0, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
        <mesh position={[0.45, 0, 0.05]} castShadow><boxGeometry args={[0.05, 1.0, 0.05]} /><meshStandardMaterial color="#cbd5e1" /></mesh>
      </group>

      {/* The Roof */}
      <group position={[0, 2.5, -2.5]} onClick={handleRoofGeometryClick} style={{ cursor: 'pointer' }}>
        <AnimatedRoof isExploded={isExploded}>
          <mesh castShadow receiveShadow>
            <extrudeGeometry args={[roofShape, extrudeSettings]} />
            <meshStandardMaterial
              color={roofType === 'initial' ? '#8B4513' : (isCoolingRoof ? '#ffffff' : '#b91c1c')}
              roughness={isCoolingRoof ? 0.2 : 0.8}
              metalness={0.1}
            />
          </mesh>
        </AnimatedRoof>

        {/* Label 1: Cooling Roof */}
        <Html position={[-1.5, 1.5, 2.5]} center className="no-pointer-events">
          <div style={{ position: 'relative' }}>
            <div className={`roof-label ${isExploded ? 'roof-label-pulse' : ''}`} onClick={handleLabel1Click} style={{
              cursor: 'pointer',
              pointerEvents: 'auto',
              background: isCoolingRoof ? '#1e293b' : 'white',
              color: isCoolingRoof ? 'white' : 'black',
              borderColor: isCoolingRoof ? '#1e293b' : 'black'
            }}>
              1
            </div>
          </div>
        </Html>

        {/* Label 3: Atap Biasa */}
        <Html position={[1.5, 1.5, 2.5]} center className="no-pointer-events">
          <div style={{ position: 'relative' }}>
            <div className="roof-label" onClick={handleLabel3Click} style={{
              cursor: 'pointer',
              pointerEvents: 'auto',
              background: isNormal ? '#1e293b' : 'white',
              color: isNormal ? 'white' : 'black',
              borderColor: isNormal ? '#1e293b' : 'black'
            }}>
              3
            </div>

            {activePopup === 'roof3' && (
              <div className="env-info-card" style={{ position: 'absolute', left: '40px', top: '-30px' }}>
                <div className="circle-num-large">3</div>
                <div className="env-info-text">
                  <strong>Atap Biasa (Menyerap Panas)</strong>
                  <p>Atap genteng/seng yang menyerap panas matahari dan menyebarkan panasnya.</p>
                </div>
              </div>
            )}
          </div>
        </Html>
      </group>

      {/* Exploded Roof Layers — shown when Cooling Roof is selected */}
      <ExplodedRoofLayers visible={isExploded} onClick={handleRoofGeometryClick} />

      {isCoolingRoof && (
        <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <group position={[0, 4.5, 0]}>
            <group rotation={[0, 0, -Math.PI / 6]}>
              {[...Array(6)].map((_, i) => (
                <Arrow key={`a1-${i}`} position={[0, i * 4.5, 0]} color="#fde047" scale={2} />
              ))}
            </group>
            <group rotation={[0, 0, Math.PI / 8]}>
              {[...Array(7)].map((_, i) => (
                <Arrow key={`a2-${i}`} position={[0, i * 5, 0]} color="#fde047" scale={2.5} />
              ))}
            </group>
          </group>
        </Float>
      )}

      {isNormal && (
        <Float speed={3} rotationIntensity={0} floatIntensity={0.2}>
          <group position={[0, 4.0, 0]}>
            <group rotation={[0, 0, 0]}>
              <Arrow position={[0, 1.5, 0]} color="#ef4444" scale={2} />
            </group>
            <group rotation={[0, 0, -Math.PI / 4]}>
              <Arrow position={[0, 3, 0]} color="#ef4444" scale={2} />
            </group>
            <group rotation={[0, 0, Math.PI / 4]}>
              <Arrow position={[0, 3, 0]} color="#ef4444" scale={2} />
            </group>
            <group rotation={[0, 0, -Math.PI / 2.2]}>
              <Arrow position={[0, 3.5, 0]} color="#ef4444" scale={2} />
            </group>
            <group rotation={[0, 0, Math.PI / 2.2]}>
              <Arrow position={[0, 3.5, 0]} color="#ef4444" scale={2} />
            </group>
            <Html position={[0, -2.5, 4]} center className="no-pointer-events">
              <div className="badge-label red-badge">Panas menyebar &<br />Terperangkap di Troposfer</div>
            </Html>
          </group>
        </Float>
      )}

      {/* Label 2: Reflektansi Tinggi (Always Visible as a permanent 3D button) */}
      <Html position={[8, 18, 0]} center className="no-pointer-events">
        <div style={{ position: 'relative' }}>
          <div className="roof-label" onClick={handleReflectClick} style={{
            cursor: 'pointer',
            pointerEvents: 'auto',
            borderColor: '#eab308',
            color: activePopup === 'reflect' ? 'white' : '#ca8a04',
            background: activePopup === 'reflect' ? '#ca8a04' : 'white'
          }}>
            2
          </div>
          {activePopup === 'reflect' && (
            <div className="env-info-card" style={{ position: 'absolute', left: '40px', top: '-20px' }}>
              <div className="circle-num-large" style={{ borderColor: '#eab308', color: '#ca8a04' }}>2</div>
              <div className="env-info-text">
                <strong>Reflektansi & Emisivitas Tinggi</strong>
                <ul style={{ paddingLeft: '20px', margin: '4px 0 0 0', fontSize: '0.85rem' }}>
                  <li style={{ marginBottom: '4px' }}><strong>Reflektansi surya tinggi (0,3–2,5 µm)</strong> → matahari dipantulkan balik sebelum jadi panas, bukan lewat jendela atmosfer.</li>
                  <li><strong>Emisivitas termal tinggi di jendela atmosfer (8–13 µm)</strong> → ini jalur panas yang sudah terserap dipancarkan sebagai inframerah ke langit.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
};

const SunObject = () => {
  const sunRef = useRef();

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.z -= 0.002;
    }
  });

  return (
    <group position={[-18, 52, -5]}>
      {/* Sun Core */}
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshBasicMaterial color="#fffbeb" />
      </mesh>

      {/* Inner Glow */}
      <mesh>
        <sphereGeometry args={[4.6, 64, 64]} />
        <meshBasicMaterial color="#fef08a" transparent opacity={0.4} />
      </mesh>

      {/* Outer Glow */}
      <mesh>
        <sphereGeometry args={[5.6, 64, 64]} />
        <meshBasicMaterial color="#fb923c" transparent opacity={0.15} />
      </mesh>

      {/* Rotating Solar Flares/Rays */}
      <group ref={sunRef}>
        {/* Primary Rays */}
        {[...Array(12)].map((_, i) => (
          <group key={`ray1-${i}`} rotation={[0, 0, (i * Math.PI) / 6]}>
            <mesh position={[0, 6, 0]}>
              <coneGeometry args={[0.3, 7, 8]} />
              <meshBasicMaterial color="#fde047" transparent opacity={0.6} />
            </mesh>
          </group>
        ))}
        {/* Secondary Rays */}
        {[...Array(12)].map((_, i) => (
          <group key={`ray2-${i}`} rotation={[0, 0, (i * Math.PI) / 6 + Math.PI / 12]}>
            <mesh position={[0, 5, 0]}>
              <coneGeometry args={[0.15, 5, 8]} />
              <meshBasicMaterial color="#fb923c" transparent opacity={0.7} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Downward Sun Arrows to House */}
      <group position={[3, -3, 0]} rotation={[0, 0, -Math.PI * 0.89]}>
        {[...Array(9)].map((_, i) => (
          <Arrow
            key={i}
            position={[0, i * 6.5, 0]}
            color="#fcd34d"
            scale={2.5}
          />
        ))}
      </group>

      {/* Label */}
      <Html position={[10, -25, 0]} center className="no-pointer-events">
        <div className="badge-label" style={{ border: '2px solid #facc15' }}>Radiasi Matahari</div>
      </Html>
    </group>
  );
};

// --------------------------------------------------------
// ENVIRONMENT & NATURE
// --------------------------------------------------------
const Tree = ({ position, scale = 1, isCoolingRoof }) => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      const targetScale = isCoolingRoof ? scale : 0;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.04);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={[0, 0, 0]}>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.4, 2, 7]} />
        <meshStandardMaterial color="#78350f" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.8, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.5, 3, 7]} />
        <meshStandardMaterial color="#16a34a" roughness={0.8} />
      </mesh>
      <mesh position={[0, 4.2, 0]} castShadow receiveShadow>
        <coneGeometry args={[1.1, 2.5, 7]} />
        <meshStandardMaterial color="#22c55e" roughness={0.8} />
      </mesh>
    </group>
  );
};

const Bush = ({ position, scale = 1, isCoolingRoof }) => {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      const targetScale = isCoolingRoof ? scale : 0;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={[0, 0, 0]}>
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <dodecahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial color="#15803d" roughness={0.9} />
      </mesh>
    </group>
  );
};

const Rock = ({ position, scale = 1, rotation = [0, 0, 0] }) => (
  <mesh position={position} scale={scale} rotation={rotation} castShadow receiveShadow>
    <dodecahedronGeometry args={[0.5, 0]} />
    <meshStandardMaterial color="#64748b" roughness={1} />
  </mesh>
);

const AnimatedGround = ({ isCoolingRoof }) => {
  const materialRef = useRef();
  const crackedMatRef = useRef();
  const coolColor = useMemo(() => new THREE.Color("#16a34a"), []);
  const hotColor = useMemo(() => new THREE.Color("#b45309"), []);

  const [crackedTexture, setCrackedTexture] = useState(null);

  useEffect(() => {
    new THREE.TextureLoader().load('/cracked-earth.png', (tex) => {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(80, 80); 
      setCrackedTexture(tex);
    });
  }, []);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.color.lerp(isCoolingRoof ? coolColor : hotColor, 0.04);
    }
    if (crackedMatRef.current) {
      const targetOpacity = isCoolingRoof ? 0 : 0.6;
      crackedMatRef.current.opacity += (targetOpacity - crackedMatRef.current.opacity) * 0.04;
    }
  });

  return (
    <group position={[0, -1, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <meshStandardMaterial ref={materialRef} color="#b45309" roughness={1} />
      </mesh>
      
      {crackedTexture && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
          <planeGeometry args={[400, 400]} />
          <meshStandardMaterial 
            ref={crackedMatRef} 
            map={crackedTexture} 
            transparent 
            opacity={0.6} 
            roughness={1}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
};

const NatureEnvironment = ({ isCoolingRoof }) => {
  const trees = [];
  const bushes = [];
  const rocks = [];

  const random = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  let seed = 1;

  // Scatter a large forest over a wide radius
  for (let i = 0; i < 80; i++) {
    const angle = random(seed++) * Math.PI * 2;
    const radius = 25 + random(seed++) * 75; // Minimum 25 units away to keep view clear
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const scale = 0.8 + random(seed++) * 1.2;
    trees.push(<Tree key={`t-${i}`} position={[x, 0, z]} scale={scale} isCoolingRoof={isCoolingRoof} />);
  }

  for (let i = 0; i < 50; i++) {
    const angle = random(seed++) * Math.PI * 2;
    const radius = 20 + random(seed++) * 80;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const scale = 0.5 + random(seed++) * 1.2;
    bushes.push(<Bush key={`b-${i}`} position={[x, 0, z]} scale={scale} isCoolingRoof={isCoolingRoof} />);
  }

  for (let i = 0; i < 40; i++) {
    const angle = random(seed++) * Math.PI * 2;
    const radius = 22 + random(seed++) * 70;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const scale = 0.5 + random(seed++) * 1.5;
    const rot = [random(seed++) * 2, random(seed++) * 2, random(seed++) * 2];
    rocks.push(<Rock key={`r-${i}`} position={[x, 0, z]} scale={scale} rotation={rot} />);
  }

  return (
    <group position={[0, -1, 0]}>
      {trees}
      {bushes}
      {rocks}
    </group>
  );
};

const AtmosphereLayers = ({ showLabels }) => {
  if (!showLabels) return null;

  const layers = [
    { name: '> Luar Angkasa', y: 55, color: '#000000', opacity: 0.7 },
    { name: '> Stratosfer (12-50 km)', y: 40, color: '#1e3a8a', opacity: 0.2 },
    { name: '> Jendela Atmosfer', y: 28, color: '#38bdf8', opacity: 0.1 },
    { name: '> Troposfer (0-12 km)', y: 15, color: '#bae6fd', opacity: 0.1 },
  ];

  return (
    <group>
      {layers.map((layer, i) => (
        <group key={i} position={[0, layer.y, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial
              color={layer.color}
              transparent={true}
              opacity={layer.opacity}
              depthWrite={false}
              side={THREE.DoubleSide}
            />
          </mesh>
          <Html position={[20, 0, 0]} center className="no-pointer-events">
            <div className="atmos-3d-label">
              {layer.name}
            </div>
          </Html>
        </group>
      ))}
      <Html position={[20, -0.9, 0]} center className="no-pointer-events">
        <div className="atmos-3d-label">
          {'> Permukaan Bumi'}
        </div>
      </Html>
    </group>
  );
};

// --------------------------------------------------------
// CAMERA CONTROLLER
// --------------------------------------------------------
const SceneControls = ({ activePopup }) => {
  const controlsRef = useRef();
  const targetPos = useRef(new THREE.Vector3(-25, 20, 50));
  const targetLook = useRef(new THREE.Vector3(0, 15, 0));
  const isAnimating = useRef(false);

  useEffect(() => {
    isAnimating.current = true;
    if (activePopup === 'roof1' || activePopup === 'roof3') {
      targetPos.current.set(1, 5, 20);
      targetLook.current.set(1, 1.5, 0);
    } else if (activePopup === 'reflect') {
      targetPos.current.set(8, 20, 35);
      targetLook.current.set(8, 18, 0);
    } else {
      targetPos.current.set(-25, 20, 50);
      targetLook.current.set(0, 15, 0);
    }
  }, [activePopup]);

  useFrame((state) => {
    if (isAnimating.current) {
      state.camera.position.lerp(targetPos.current, 0.04);
      if (controlsRef.current) {
        controlsRef.current.target.lerp(targetLook.current, 0.04);
        controlsRef.current.update();
      }

      if (state.camera.position.distanceTo(targetPos.current) < 0.2) {
        isAnimating.current = false;
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      minPolarAngle={Math.PI / 10}
      maxPolarAngle={Math.PI / 2 - 0.05}
      minDistance={5}
      maxDistance={120}
      onStart={() => { isAnimating.current = false; }}
    />
  );
};

// --------------------------------------------------------
// MAIN APP COMPONENT
// --------------------------------------------------------
export default function App() {
  const [roofType, setRoofType] = useState('initial');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showAtmosLabels, setShowAtmosLabels] = useState(true);
  const [activePopup, setActivePopup] = useState(null);

  const handleCardClick = (type, popup) => {
    if (activePopup === popup) {
      setRoofType('initial');
      setActivePopup(null);
    } else {
      setRoofType(type);
      setActivePopup(popup);
    }
  };

  const toggleRoof = () => {
    setRoofType(prev => prev === 'coolingRoof' ? 'normal' : 'coolingRoof');
  };

  return (
    <>
      <Canvas shadows camera={{ position: [-25, 20, 50], fov: 45 }}>
        <color attach="background" args={['#eef2f6']} />

        <ambientLight intensity={0.7} />
        <directionalLight
          position={[-15, 30, 15]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <Environment preset="city" />

        <AtmosphereLayers showLabels={showAtmosLabels} />
        <SunObject />
        <NatureEnvironment isCoolingRoof={roofType === 'coolingRoof'} />
        <House
          roofType={roofType}
          setRoofType={setRoofType}
          activePopup={activePopup}
          setActivePopup={setActivePopup}
        />

        <AnimatedGround isCoolingRoof={roofType === 'coolingRoof'} />

        <ContactShadows position={[0, -0.95, 0]} opacity={0.5} scale={25} blur={2} far={4} />

        <SceneControls activePopup={activePopup} />
      </Canvas>

      {/* HTML OVERLAYS (2D UI) */}
      <div className="ui-layer">

        {/* Toggle Sidebar Button */}
        {!isSidebarOpen && (
          <button className="open-sidebar-btn" onClick={() => setIsSidebarOpen(true)}>
            <span style={{ fontSize: '1.2rem' }}>≡</span> Panel Informasi
          </button>
        )}

        {/* Left Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <div className="sidebar-title">Panel Informasi</div>
            <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>×</button>
          </div>

          <div
            className="card"
            onClick={() => handleCardClick('coolingRoof', 'roof1')}
            style={{ cursor: 'pointer', borderColor: activePopup === 'roof1' ? '#3b82f6' : '#cbd5e1' }}
          >
            <div className="card-top">
              <span className="circle-num">1</span>
              <div className="mini-roof white-roof"></div>
            </div>
            <h4>1. Cooling Roof</h4>
            <p>Solusi atap pendingin yang memantulkan panas dan mendinginkan rumah dengan berpotensi mendinginkan permukaan atap rumah.</p>
          </div>

          <div
            className="card"
            onClick={() => handleCardClick('coolingRoof', 'reflect')}
            style={{ cursor: 'pointer', borderColor: activePopup === 'reflect' ? '#3b82f6' : '#cbd5e1' }}
          >
            <div className="card-top">
              <span className="circle-num">2</span>
              <div className="mini-arrows"></div>
            </div>
            <h4>2. Reflektansi & Emisivitas Tinggi</h4>
            <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.85rem', color: '#475569' }}>
              <li style={{ marginBottom: '6px' }}><strong>Reflektansi surya tinggi (0,3–2,5 µm)</strong>: memantulkan matahari sebelum jadi panas, bukan lewat jendela atmosfer.</li>
              <li><strong>Emisivitas termal tinggi (8–13 µm)</strong>: memancarkan panas terserap sebagai inframerah melalui jendela atmosfer ke langit.</li>
            </ul>
          </div>

          <div
            className="card"
            onClick={() => handleCardClick('normal', 'roof3')}
            style={{ cursor: 'pointer', borderColor: activePopup === 'roof3' ? '#3b82f6' : '#cbd5e1' }}
          >
            <div className="card-top">
              <span className="circle-num">3</span>
              <div className="mini-roof red-roof"></div>
            </div>
            <h4>3. Atap Biasa: Panas Menyebar</h4>
            <p>Atap genteng/seng (seperti atap bawah asli) yang menyerap panas, dengan panah merah menyebarkan panasnya.</p>
          </div>
        </div>

        {/* Toggle Atmos Labels Button */}
        <button
          className="toggle-atmos-btn"
          onClick={() => setShowAtmosLabels(!showAtmosLabels)}
        >
          {showAtmosLabels ? '👁️ Sembunyikan Label Atmosfer' : '👁️‍🗨️ Tampilkan Label Atmosfer'}
        </button>
      </div>
    </>
  );
}
