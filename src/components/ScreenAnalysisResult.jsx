import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { AnalysisIllustration } from './Illustrations';

export function ScreenAnalysisResult({ region, onNext, onPrev }) {
  const analysis = region.analysis;

  return (
    <div className="phone-screen-container">
      {/* App Header */}
      <div className="app-top-header">
        <button className="header-back-arrow" onClick={onPrev} type="button">
          <ChevronLeft size={18} color="white" />
        </button>
        <span className="header-title">Hasil Analisis</span>
      </div>

      {/* Screen Body */}
      <div className="screen-inner-body" style={{ padding: '10px' }}>
        {/* Card: Kondisi Terdeteksi */}
        <div className="analysis-detection-card">
          <div className="detection-header-label">Kondisi Terdeteksi</div>
          <div className="detection-status-title" style={{ color: analysis.statusColor }}>
            {analysis.statusText}
          </div>

          {/* Illustration graphic */}
          <div style={{ margin: '6px 0 10px' }}>
            <AnalysisIllustration type={region.id} />
          </div>

          {/* Confidence Meter */}
          <div className="detection-confidence-section">
            <span className="conf-section-label">Confidence (Tingkat Keyakinan)</span>
            <div className="conf-big-pct">{analysis.confidence}</div>
            
            <div className="conf-progress-track">
              <div
                className="conf-progress-bar"
                style={{ width: `${analysis.confidenceValue}%` }}
              ></div>
            </div>

            <div className="conf-ticks-row">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Section: Sumber Analisis */}
        <div className="analysis-sources-card">
          <div className="sources-title">Sumber Analisis</div>
          {analysis.sources.map((item, idx) => (
            <div key={idx} className="source-row-item">
              <span className="source-name">• {item.name}</span>
              <span className="source-val">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Section: Rangkuman Kondisi */}
        <div className="analysis-summary-card">
          <div className="summary-title">Rangkuman Kondisi</div>
          <p className="summary-text">{analysis.summary}</p>
        </div>

        {/* Button: LIHAT REKOMENDASI */}
        <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
          <button className="primary-green-btn" onClick={onNext} type="button">
            LIHAT REKOMENDASI
          </button>
        </div>
      </div>
    </div>
  );
}
