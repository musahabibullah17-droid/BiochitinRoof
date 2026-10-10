import React, { useState } from 'react';
import { PhoneDeviceMock } from './PhoneDeviceMock';
import { ScreenLandForm } from './ScreenLandForm';
import { ScreenPhotoCondition } from './ScreenPhotoCondition';
import { ScreenAnalysisResult } from './ScreenAnalysisResult';
import { ScreenRecommendation } from './ScreenRecommendation';
import { ScreenBioprimingGuide } from './ScreenBioprimingGuide';
import { RotateCcw, MapPin } from 'lucide-react';

export function InteractivePhoneView({ region, onSwitchRegion }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="interactive-phone-wrapper">
      {/* Region Switcher Bar */}
      <div className="emulator-control-panel">
        <div className="emulator-region-pills">
          <MapPin size={14} color="#0a472e" />
          <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0a472e', marginRight: '4px' }}>
            Wilayah Aktif:
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

        <button
          className="ctrl-nav-btn"
          onClick={() => setCurrentStep(1)}
          title="Reset ke Langkah 1"
          type="button"
          style={{ marginLeft: 'auto' }}
        >
          <RotateCcw size={13} />
          <span>Reset Alur</span>
        </button>
      </div>

      {/* Smartphone Chassis with Bottom Nav */}
      <div style={{ margin: '12px auto' }}>
        <PhoneDeviceMock
          width={310}
          height={680}
          activeStep={currentStep}
          onSelectStep={(step) => setCurrentStep(step)}
        >
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
