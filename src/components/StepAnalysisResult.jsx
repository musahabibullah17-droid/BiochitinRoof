import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Droplets,
  Thermometer,
  CloudRain,
  Activity,
  Info
} from 'lucide-react';

export default function StepAnalysisResult({ regionData, onSeeRecommendations }) {
  const analysis = regionData.analysis;

  const getStatusIcon = (level) => {
    switch (level) {
      case 'optimal':
        return <CheckCircle2 size={18} color="var(--primary-700)" />;
      case 'moderate-high':
        return <AlertTriangle size={18} color="var(--accent-orange)" />;
      case 'low-moderate':
      default:
        return <AlertTriangle size={18} color="var(--accent-amber)" />;
    }
  };

  return (
    <div className="analysis-screen">
      {/* Result Status Hero Card */}
      <div
        className="result-hero-card"
        style={{
          borderColor: regionData.statusBorderColor,
          background: `linear-gradient(180deg, ${regionData.statusBadgeColor} 0%, #ffffff 60%)`
        }}
      >
        <div
          className="result-badge-top"
          style={{
            backgroundColor: regionData.statusBadgeColor,
            color: regionData.statusTextColor,
            border: `1px solid ${regionData.statusBorderColor}`
          }}
        >
          {getStatusIcon(analysis.severityLevel)}
          <span>Status Terdeteksi</span>
        </div>

        <h3 className="result-status-title" style={{ color: regionData.statusTextColor }}>
          {analysis.statusTitle}
        </h3>

        <p className="result-desc-text">
          {analysis.statusDescription}
        </p>

        {/* Confidence Progress Meter */}
        <div className="confidence-box">
          <div className="confidence-header-row">
            <span className="confidence-title">Confidence Model AI (Simulasi)</span>
            <span className="confidence-pct" style={{ color: regionData.statusTextColor }}>
              {analysis.confidenceScore}%
            </span>
          </div>
          <div className="confidence-track">
            <div
              className="confidence-fill"
              style={{
                width: `${analysis.confidenceScore}%`,
                backgroundColor: regionData.statusBorderColor
              }}
            ></div>
          </div>
          <span style={{ display: 'block', textAlign: 'left', fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            Berdasarkan fusi citra multispektral & model agrometeorologi
          </span>
        </div>
      </div>

      {/* Daftar Sumber / Indikator Analisis */}
      <div>
        <div className="section-label-group">
          <div className="section-heading">
            <Activity size={16} color="var(--primary-700)" />
            <span>Indikator Biofisik & Hidrologi</span>
          </div>
          <span className="section-subtext">Multi-Indeks</span>
        </div>

        <div className="indicators-list">
          {analysis.indicators.map((indicator, idx) => (
            <div key={idx} className={`indicator-card ${indicator.status}`}>
              <div className="indicator-left">
                <span className="indicator-name">{indicator.name}</span>
                <p className="indicator-desc">{indicator.description}</p>
              </div>
              <div className="indicator-right">
                <span className="indicator-value">{indicator.value}</span>
                <span className="indicator-benchmark">{indicator.benchmark}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button to Recommendations */}
      <button
        type="button"
        className="btn-primary-action"
        onClick={onSeeRecommendations}
        style={{ marginTop: '0.5rem' }}
      >
        <span>Lihat Rekomendasi Terbaik</span>
        <ArrowRight size={18} />
      </button>

      {/* Scientific Disclaimer */}
      <div className="disclaimer-card">
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Penanda Data Simulasi:</strong> Hasil klasifikasi AI, persentase confidence, 
          dan parameter biofisik merupakan model sintetis untuk pengujian antarmuka dan 
          bukan data pengukuran instrumen lapangan sungguhan.
        </div>
      </div>
    </div>
  );
}
