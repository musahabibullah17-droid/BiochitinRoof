import React from 'react';
import { ChevronLeft, Star } from 'lucide-react';
import { GroupIcon } from './Illustrations';

export function ScreenRecommendation({ region, onNext, onPrev }) {
  const rec = region.recommendation;

  return (
    <div className="phone-screen-container">
      {/* App Header */}
      <div className="app-top-header">
        <button className="header-back-arrow" onClick={onPrev} type="button">
          <ChevronLeft size={18} color="white" />
        </button>
        <span className="header-title">Rekomendasi Terbaik</span>
      </div>

      {/* Screen Body */}
      <div className="screen-inner-body" style={{ padding: '10px' }}>
        {/* Top Split Card: Kelompok & Skor Kesesuaian */}
        <div className="rec-header-split-card">
          <div className="rec-group-left">
            <span className="rec-label-tiny">Kelompok</span>
            <div className="rec-group-visual">
              <div className="rec-group-icon-circle">
                <GroupIcon type={rec.iconType} size={18} />
              </div>
              <div className="rec-group-names">
                <span className="rec-group-prefix">Kelompok</span>
                <span className="rec-group-code">{rec.groupLabel}</span>
              </div>
            </div>
          </div>

          <div className="rec-score-right">
            <span className="rec-label-tiny">Skor Kesesuaian</span>
            <span className="rec-score-number">{rec.suitabilityScore}</span>
            <span className="rec-score-sub">{rec.suitabilityStatus}</span>
          </div>
        </div>

        {/* Section: Galur Direkomendasikan */}
        <div className="rec-strain-section">
          <span className="rec-section-subtitle">Galur Direkomendasikan</span>
          <div className="rec-strain-title-row">
            <span className="rec-strain-code">{rec.strainCode}</span>
            <span className="rec-strain-scientific">{rec.strainName}</span>
          </div>
          <div className="rec-stars-row">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={13} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
        </div>

        {/* Section: Informasi Larutan Endofit */}
        <div className="rec-solution-info-card">
          <div className="solution-card-header">Informasi Larutan Endofit</div>
          <div className="solution-table">
            {rec.productDetails.map((item, idx) => (
              <div key={idx} className="solution-table-row">
                <span className="solution-k">{item.label}</span>
                <span className="solution-v">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button className="primary-green-btn" onClick={onNext} type="button">
            LIHAT PANDUAN BIOPRIMING
          </button>
        </div>
      </div>
    </div>
  );
}
