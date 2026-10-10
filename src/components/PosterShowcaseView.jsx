import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { REGIONS_DATA } from '../data/regionsData';
import { PhoneDeviceMock } from './PhoneDeviceMock';
import { ScreenLandForm } from './ScreenLandForm';
import { ScreenPhotoCondition } from './ScreenPhotoCondition';
import { ScreenAnalysisResult } from './ScreenAnalysisResult';
import { ScreenRecommendation } from './ScreenRecommendation';
import { ScreenBioprimingGuide } from './ScreenBioprimingGuide';
import { LeavesIcon, MountainIcon, WavesIcon } from './Illustrations';

export function PosterShowcaseView({ onSelectRegionForDemo }) {
  const regions = [REGIONS_DATA.jember, REGIONS_DATA.kerinci, REGIONS_DATA.lamongan];
  const [mobileRegionId, setMobileRegionId] = useState('jember');
  const [mobileStepIndex, setMobileStepIndex] = useState(1);

  const getRegionIcon = (iconType, color) => {
    switch (iconType) {
      case 'mountain':
        return <MountainIcon size={26} color={color} />;
      case 'waves':
        return <WavesIcon size={26} color={color} />;
      case 'leaf':
      default:
        return <LeavesIcon size={26} color={color} />;
    }
  };

  const activeMobileRegion = REGIONS_DATA[mobileRegionId];

  const stepLabels = [
    { step: 1, label: '1. Form Lahan' },
    { step: 2, label: '2. Foto Lahan' },
    { step: 3, label: '3. Hasil Analisis' },
    { step: 4, label: '4. Rekomendasi' },
    { step: 5, label: '5. Panduan Biopriming' }
  ];

  return (
    <div className="poster-board-canvas">
      {/* Mobile-Only Header Controls (Region & Step Switcher) */}
      <div className="mobile-poster-controls">
        <div className="mobile-region-tabs">
          {regions.map((r) => (
            <button
              key={r.id}
              className={`mobile-region-tab-btn ${mobileRegionId === r.id ? 'active' : ''}`}
              style={{
                borderColor: mobileRegionId === r.id ? r.headerPinColor : 'transparent',
                backgroundColor: mobileRegionId === r.id ? r.themeBg : '#ffffff',
                color: mobileRegionId === r.id ? r.headerTextColor : '#64748b'
              }}
              onClick={() => setMobileRegionId(r.id)}
              type="button"
            >
              <MapPin size={13} color={mobileRegionId === r.id ? r.headerPinColor : '#64748b'} />
              <span>{r.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Step Selector Pill Bar */}
        <div className="mobile-step-pill-bar">
          {stepLabels.map((item) => (
            <button
              key={item.step}
              className={`mobile-step-chip ${mobileStepIndex === item.step ? 'active' : ''}`}
              onClick={() => setMobileStepIndex(item.step)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Desktop displays all 3 columns; Mobile displays active filtered column */}
      <div className="poster-columns-container">
        {regions.map((region) => {
          const isHiddenOnMobile = region.id !== mobileRegionId;

          return (
            <div
              key={region.id}
              className={`poster-region-column ${isHiddenOnMobile ? 'mobile-hidden-column' : ''}`}
            >
              {/* Column Region Header Box */}
              <div
                className="region-poster-header"
                style={{ backgroundColor: region.themeBg }}
                onClick={() => onSelectRegionForDemo && onSelectRegionForDemo(region.id)}
                title="Klik untuk membuka emulator interaktif untuk wilayah ini"
              >
                <div className="header-pin-wrapper" style={{ color: region.headerPinColor }}>
                  <MapPin size={26} fill={region.headerPinColor} color="white" />
                </div>

                <div className="header-text-block">
                  <h2 className="header-region-name" style={{ color: region.headerTextColor }}>
                    {region.name}
                  </h2>
                  <p className="header-region-sub" style={{ color: region.headerTextColor }}>
                    {region.subHeader}
                  </p>
                </div>

                <div className="header-deco-icon">
                  {getRegionIcon(region.headerIcon, region.headerPinColor)}
                </div>
              </div>

              {/* Row 1: 3 Phones (Analisis Lahan, Foto Kondisi Lahan, Hasil Analisis) */}
              <div className="poster-row-top">
                {/* Phone 1: Analisis Lahan */}
                <div className={`phone-wrapper-cell ${mobileStepIndex === 1 ? 'mobile-step-active' : 'mobile-step-inactive'}`}>
                  <PhoneDeviceMock width={224} height={476}>
                    <ScreenLandForm region={region} onNext={() => onSelectRegionForDemo && onSelectRegionForDemo(region.id)} />
                  </PhoneDeviceMock>
                </div>

                {/* Phone 2: Foto Kondisi Lahan */}
                <div className={`phone-wrapper-cell ${mobileStepIndex === 2 ? 'mobile-step-active' : 'mobile-step-inactive'}`}>
                  <PhoneDeviceMock width={224} height={476}>
                    <ScreenPhotoCondition region={region} onNext={() => {}} onPrev={() => {}} />
                  </PhoneDeviceMock>
                </div>

                {/* Phone 3: Hasil Analisis */}
                <div className={`phone-wrapper-cell ${mobileStepIndex === 3 ? 'mobile-step-active' : 'mobile-step-inactive'}`}>
                  <PhoneDeviceMock width={224} height={476}>
                    <ScreenAnalysisResult region={region} onNext={() => {}} onPrev={() => {}} />
                  </PhoneDeviceMock>
                </div>
              </div>

              {/* Row 2: 2 Phones (Rekomendasi Terbaik, Panduan Biopriming) */}
              <div className="poster-row-bottom">
                {/* Phone 4: Rekomendasi Terbaik */}
                <div className={`phone-wrapper-cell ${mobileStepIndex === 4 ? 'mobile-step-active' : 'mobile-step-inactive'}`}>
                  <PhoneDeviceMock width={224} height={476}>
                    <ScreenRecommendation region={region} onNext={() => {}} onPrev={() => {}} />
                  </PhoneDeviceMock>
                </div>

                {/* Phone 5: Panduan Biopriming */}
                <div className={`phone-wrapper-cell ${mobileStepIndex === 5 ? 'mobile-step-active' : 'mobile-step-inactive'}`}>
                  <PhoneDeviceMock width={224} height={476}>
                    <ScreenBioprimingGuide region={region} onPrev={() => {}} />
                  </PhoneDeviceMock>
                </div>
              </div>

              {/* Mobile CTA to open interactive view */}
              <div className="mobile-open-interactive-strip">
                <button
                  className="mobile-try-btn"
                  onClick={() => onSelectRegionForDemo && onSelectRegionForDemo(region.id)}
                  type="button"
                >
                  <Eye size={15} />
                  <span>Coba Alur Interaktif {region.name}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
