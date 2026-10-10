import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

export default function HeaderWithStep({
  title,
  stepNumber,
  totalSteps = 5,
  currentRegion,
  onBack,
  showBack = true,
  isGradient = false
}) {
  return (
    <>
      <header className={`app-screen-header ${isGradient ? 'gradient-header' : ''}`}>
        <div className="header-left">
          {showBack && (
            <button
              className="back-btn"
              onClick={onBack}
              title="Kembali ke layar sebelumnya"
              type="button"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div>
            <h1 className="screen-title">{title}</h1>
            {stepNumber && (
              <span className="screen-step-tag">
                Langkah {stepNumber} dari {totalSteps}
              </span>
            )}
          </div>
        </div>

        {currentRegion && (
          <div className="header-right-region">
            <MapPin size={12} />
            <span>{currentRegion.name}</span>
          </div>
        )}
      </header>

      {stepNumber && (
        <div className="flow-progress-bar-container">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepIndex = index + 1;
            let status = '';
            if (stepIndex < stepNumber) status = 'completed';
            else if (stepIndex === stepNumber) status = 'active';

            return <div key={stepIndex} className={`flow-step-dot ${status}`}></div>;
          })}
        </div>
      )}
    </>
  );
}
