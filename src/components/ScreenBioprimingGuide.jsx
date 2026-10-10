import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { StepBowlSeeds, StepFlask, StepSieve, StepWind, StepSprout } from './Illustrations';

export function ScreenBioprimingGuide({ region, onPrev }) {
  const guide = region.guide;

  const getStepIcon = (num) => {
    switch (num) {
      case '01':
        return <StepBowlSeeds size={18} color="#166534" />;
      case '02':
        return <StepFlask size={18} color="#166534" />;
      case '03':
        return <StepSieve size={18} color="#166534" />;
      case '04':
        return <StepWind size={18} color="#166534" />;
      case '05':
        return <StepSprout size={18} color="#166534" />;
      default:
        return <StepBowlSeeds size={18} color="#166534" />;
    }
  };

  return (
    <div className="phone-screen-container">
      {/* App Header */}
      <div className="app-top-header">
        <button className="header-back-arrow" onClick={onPrev} type="button">
          <ChevronLeft size={18} color="white" />
        </button>
        <span className="header-title">Panduan Biopriming</span>
      </div>

      {/* Screen Body */}
      <div className="screen-inner-body" style={{ padding: '10px' }}>
        {/* Timeline Steps List */}
        <div className="guide-steps-list">
          {guide.steps.map((st) => (
            <div key={st.num} className="guide-step-row">
              {/* Green round number badge */}
              <div className="step-num-badge">
                {st.num}
              </div>

              {/* Step Icon */}
              <div className="step-icon-wrapper">
                {getStepIcon(st.num)}
              </div>

              {/* Step Content */}
              <div className="step-text-content">
                <span className="step-heading-title">{st.title}</span>
                <p className="step-desc-para">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Note Box */}
        <div className="guide-note-box">
          <p>{guide.note}</p>
        </div>
      </div>
    </div>
  );
}
