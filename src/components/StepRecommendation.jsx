import React from 'react';
import {
  Sparkles,
  Star,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Clock,
  Layers,
  Calendar,
  AlertCircle,
  Info
} from 'lucide-react';

export default function StepRecommendation({ regionData, onSeeGuide }) {
  const rec = regionData.recommendation;

  return (
    <div className="recommendation-screen">
      {/* Top Hero Card for Best Recommendation */}
      <div className="recommendation-hero-card">
        <div className="rec-badge-row">
          <div className="rec-group-badge">
            KELOMPOK {rec.biologyGroup}
          </div>
          <div className="rec-score-pill">
            Skor: {rec.suitabilityScore}
          </div>
        </div>

        <h3 className="rec-hero-title">
          Formulasi {rec.formulationCode}
        </h3>
        <p className="rec-hero-subtitle">
          {rec.biologyTitle}
        </p>

        <div className="rec-stats-strip">
          <div className="rec-stat-col">
            <span style={{ opacity: 0.8, fontSize: '0.62rem' }}>Tingkat Kesesuaian</span>
            <strong>{(rec.suitabilityScore * 100).toFixed(0)}%</strong>
          </div>
          <div className="rec-stat-col">
            <span style={{ opacity: 0.8, fontSize: '0.62rem' }}>Rating Simulasi</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <Star size={13} fill="#fbbf24" color="#fbbf24" />
              <strong>{rec.rating}</strong>
              <span style={{ opacity: 0.7, fontSize: '0.65rem' }}>({rec.reviewCount})</span>
            </div>
          </div>
          <div className="rec-stat-col">
            <span style={{ opacity: 0.8, fontSize: '0.62rem' }}>Status</span>
            <strong style={{ color: '#86efac' }}>Optimal</strong>
          </div>
        </div>
      </div>

      {/* Detail Spesifikasi Larutan Biopriming */}
      <div className="formulation-details-card">
        <h4 className="card-section-title">
          <FlaskConical size={16} color="var(--primary-700)" />
          <span>Informasi Larutan & Inokulan</span>
        </h4>

        <div className="specs-table-list">
          <div className="spec-row">
            <span className="spec-label">Nama Formulasi</span>
            <span className="spec-val">{rec.commercialName}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Bentuk Sediaan</span>
            <span className="spec-val">{rec.formType}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Cara Aplikasi</span>
            <span className="spec-val">{rec.applicationMethod}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Konsentrasi Dosis</span>
            <span className="spec-val" style={{ color: 'var(--primary-800)', fontWeight: 700 }}>
              {rec.concentration}
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Waktu Perendaman</span>
            <span className="spec-val" style={{ color: 'var(--accent-orange)', fontWeight: 700 }}>
              {rec.soakingTime}
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Masa Penggunaan</span>
            <span className="spec-val">{rec.shelfLife}</span>
          </div>
        </div>

        {/* Mechanism Box */}
        <div className="mechanism-box">
          <strong>Mekanisme Kerja Biologis:</strong>
          <p style={{ marginTop: '3px' }}>{rec.targetMechanism}</p>
        </div>
      </div>

      {/* Button to Biopriming Guide */}
      <button
        type="button"
        className="btn-primary-action"
        onClick={onSeeGuide}
      >
        <span>Lihat Panduan Biopriming</span>
        <ArrowRight size={18} />
      </button>

      {/* Data Dummy Label & Disclaimer */}
      <div className="disclaimer-card">
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Label Data Dummy Prototipe:</strong> Formulasi {rec.formulationCode} ({rec.biologyGroup}), dosis konsentrasi, dan waktu perendaman di atas adalah data percontohan prototipe UI. Konsultasikan dengan agronomis atau balai riset resmi sebelum aplikasi riil di lahan sawah.
        </div>
      </div>
    </div>
  );
}
