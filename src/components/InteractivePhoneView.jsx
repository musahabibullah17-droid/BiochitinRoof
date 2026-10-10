import React, { useState } from 'react';
import { PhoneDeviceMock } from './PhoneDeviceMock';
import { ScreenLandForm } from './ScreenLandForm';
import { ScreenPhotoCondition } from './ScreenPhotoCondition';
import { ScreenAnalysisResult } from './ScreenAnalysisResult';
import { ScreenRecommendation } from './ScreenRecommendation';
import { ScreenBioprimingGuide } from './ScreenBioprimingGuide';
import { RotateCcw, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export function InteractivePhoneView({ region, onSwitchRegion }) {
  const [currentStep, setCurrentStep] = useState(1);

  const stepNames = [
    'Analisis Lahan',
    'Foto Kondisi Lahan',
    'Hasil Analisis',
    'Rekomendasi Terbaik',
    'Panduan Biopriming'
  ];

  return (
    <div className="interactive-phone-wrapper">
      {/* Region Switcher & Step Navigator Bar */}
      <div className="emulator-control-panel">
        <div className="emulator-region-pills">
          <MapPin size={14} color="#0a472e" />
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0a472e', marginRight: '4px' }}>
            Wilayah:
          </span>
          {['jember', 'kerinci', 'lamongan'].map((rId) => (
            <button
              key={rId}
              className={`emulator-pill-btn ${region.id === rId ? 'active' : ''}`}
              onClick={() => onSwitchRegion(rId)}
              type="button"
            >
              {rId.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="emulator-step-controls">
          <button
            className="ctrl-nav-btn"
            disabled={currentStep <= 1}
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            type="button"
          >
            <ChevronLeft size={15} />
            <span>Sebelumnya</span>
          </button>

          <span className="ctrl-step-indicator">
            Layar {currentStep}/5: <strong>{stepNames[currentStep - 1]}</strong>
          </span>

          <button
            className="ctrl-nav-btn"
            disabled={currentStep >= 5}
            onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1))}
            type="button"
          >
            <span>Berikutnya</span>
            <ChevronRight size={15} />
          </button>

          <button
            className="ctrl-nav-btn"
            onClick={() => setCurrentStep(1)}
            title="Reset ke Layar 1"
            type="button"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      {/* Smartphone Chassis */}
      <div style={{ margin: '12px auto' }}>
        <PhoneDeviceMock width={310} height={640}>
          {currentStep === 1 && (
            <ScreenLandForm region={region} onNext={() => setCurrentStep(2)} />
          )}
          {currentStep === 2 && (
            <ScreenPhotoCondition
              region={region}
              onNext={() => setCurrentStep(3)}
              onPrev={() => setCurrentStep(1)}
            />
          )}
          {currentStep === 3 && (
            <ScreenAnalysisResult
              region={region}
              onNext={() => setCurrentStep(4)}
              onPrev={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 4 && (
            <ScreenRecommendation
              region={region}
              onNext={() => setCurrentStep(5)}
              onPrev={() => setCurrentStep(3)}
            />
          )}
          {currentStep === 5 && (
            <ScreenBioprimingGuide
              region={region}
              onPrev={() => setCurrentStep(4)}
            />
          )}
        </PhoneDeviceMock>
      </div>
    </div>
  );
}
