import React from 'react';

// Header Region Icons
export function LeavesIcon({ size = 28, color = "#166534" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function MountainIcon({ size = 28, color = "#0f766e" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export function WavesIcon({ size = 28, color = "#78350f" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

// Group Badge Icons (Xerofit, Halofit, Mesofit)
export function GroupIcon({ type, size = 24 }) {
  if (type === 'cactus') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M7 6v6a2 2 0 0 0 2 2h3" />
        <path d="M17 9v4a2 2 0 0 1-2 2h-3" />
      </svg>
    );
  }
  if (type === 'grain') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22s3-4 8-4 8 4 8 4" />
        <path d="M12 2v16" />
        <path d="M12 6c2-2 4-1 4 1s-2 3-4 3" />
        <path d="M12 11c-2-2-4-1-4 1s2 3 4 3" />
        <path d="M12 14c2-2 4-1 4 1s-2 3-4 3" />
      </svg>
    );
  }
  // Halofit / leaf
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

// 5 Timeline Icons matching reference image
export function StepBowlSeeds({ size = 22, color = "#166534" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="1.8" fill={color} />
      <circle cx="12" cy="7" r="1.8" fill={color} />
      <circle cx="16" cy="8" r="1.8" fill={color} />
      <circle cx="10" cy="11" r="1.8" fill={color} />
      <circle cx="14" cy="11" r="1.8" fill={color} />
      <path d="M4 14c0 4.4 3.6 7 8 7s8-2.6 8-7H4z" />
    </svg>
  );
}

export function StepFlask({ size = 22, color = "#166534" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 7V2h-4z" />
      <line x1="8.5" y1="2" x2="15.5" y2="2" />
      <line x1="6.8" y1="15" x2="17.2" y2="15" strokeDasharray="1 1" />
      <circle cx="10" cy="17" r="0.8" fill={color} />
      <circle cx="13" cy="18" r="0.8" fill={color} />
    </svg>
  );
}

export function StepSieve({ size = 22, color = "#166534" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10c0 4 4 7 9 7s9-3 9-7H3z" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <path d="M8 17v2" strokeDasharray="1 1" />
      <path d="M12 17v3" strokeDasharray="1 1" />
      <path d="M16 17v2" strokeDasharray="1 1" />
      <circle cx="8" cy="21" r="1" fill={color} />
      <circle cx="12" cy="22" r="1" fill={color} />
      <circle cx="16" cy="21" r="1" fill={color} />
    </svg>
  );
}

export function StepWind({ size = 22, color = "#166534" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

export function StepSprout({ size = 22, color = "#166534" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M12 20v-8" />
      <path d="M12 12c-2.5-3-5.5-2.5-6 0 .5 2.5 3.5 2 6 0z" />
      <path d="M12 10c2.5-3 5.5-2.5 6 0-.5 2.5-3.5 2-6 0z" />
    </svg>
  );
}

import droughtMildImg from '../assets/kekeringan_ringan.jpg';
import droughtModerateImg from '../assets/kekeringan_moderat.jpg';
import droughtOptimalImg from '../assets/tidak_ada_kekeringan.jpg';

export { droughtMildImg, droughtModerateImg, droughtOptimalImg };

// Hasil Analisis Photo Banners (Jember, Kerinci, Lamongan)
export function AnalysisIllustration({ type }) {
  let imgSrc = droughtMildImg;
  let altText = "Kondisi Kekeringan Ringan (Sawah Tadah Hujan)";

  if (type === 'kerinci') {
    imgSrc = droughtModerateImg;
    altText = "Kondisi Kekeringan Moderat (Lahan Lereng Terasering)";
  } else if (type === 'lamongan') {
    imgSrc = droughtOptimalImg;
    altText = "Kondisi Optimal Tidak Ada Kekeringan (Lahan Irigasi Teknis)";
  }

  return (
    <div style={{
      width: '100%',
      height: '84px',
      borderRadius: '7px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 2px 5px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.06)'
    }}>
      <img
        src={imgSrc}
        alt={altText}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '24px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)'
      }}></div>
    </div>
  );
}

import jemberImg from '../assets/jember.jpeg';
import kerinciImg from '../assets/kerinci.jpeg';
import lamonganImg from '../assets/lamongan.jpeg';

export { jemberImg, kerinciImg, lamonganImg };

// Realistic Field Photos
export function FieldPhotoMock({ regionId }) {
  let photoSrc = jemberImg;
  let altText = "Lahan Kering Jember";

  if (regionId === 'kerinci') {
    photoSrc = kerinciImg;
    altText = "Lahan Lereng Kerinci";
  } else if (regionId === 'lamongan') {
    photoSrc = lamonganImg;
    altText = "Lahan Datar Lamongan";
  }

  return (
    <div style={{ width: '100%', height: '145px', background: '#1e293b', position: 'relative', overflow: 'hidden' }}>
      <img
        src={photoSrc}
        alt={altText}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35px', background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
    </div>
  );
}

