import React, { useState } from 'react';
import { REGIONS_DATA } from './data/regionsData';
import { PosterShowcaseView } from './components/PosterShowcaseView';
import { InteractivePhoneView } from './components/InteractivePhoneView';
import { LayoutGrid, Smartphone, Sparkles, MapPin } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState('poster'); // 'poster' | 'emulator'
  const [activeRegionId, setActiveRegionId] = useState('jember');

  const activeRegion = REGIONS_DATA[activeRegionId];

  const handleSelectRegionFromPoster = (regionId) => {
    setActiveRegionId(regionId);
    setViewMode('emulator');
  };

  return (
    <div className="app-master-container">
      {/* Top Application Bar */}
      <header className="master-top-bar">
        <div className="brand-section">
          <div className="brand-logo-badge">
            <Sparkles size={18} />
          </div>
          <div>
            <h1 className="brand-text-title">Endosync-GPS</h1>
            <p className="brand-subtext">
              Prototipe Antarmuka Aplikasi Pertanian Presisi & Rekomendasi Biopriming
            </p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="view-mode-switch-group">
          <button
            className={`view-mode-btn ${viewMode === 'poster' ? 'active' : ''}`}
            onClick={() => setViewMode('poster')}
            type="button"
          >
            <LayoutGrid size={15} />
            <span>Showcase Desain (Poster 3 Wilayah)</span>
          </button>

          <button
            className={`view-mode-btn ${viewMode === 'emulator' ? 'active' : ''}`}
            onClick={() => setViewMode('emulator')}
            type="button"
          >
            <Smartphone size={15} />
            <span>Emulator Interaktif</span>
          </button>
        </div>
      </header>

      {/* Main Board View */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {viewMode === 'poster' ? (
          <PosterShowcaseView onSelectRegionForDemo={handleSelectRegionFromPoster} />
        ) : (
          <InteractivePhoneView
            region={activeRegion}
            onSwitchRegion={setActiveRegionId}
          />
        )}
      </main>
    </div>
  );
}
