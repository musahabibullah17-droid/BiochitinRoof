import React from 'react';
import { REGIONS_DATA } from '../data/regionsData';
import {
  MapPin,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

export default function StepHome({ selectedRegionId, onSelectRegion, onStartAnalysis }) {
  const regionsList = Object.values(REGIONS_DATA);

  return (
    <div className="home-screen">
      {/* Hero Welcome Card */}
      <div className="home-hero-card">
        <div className="hero-pattern">
          <Cpu size={140} />
        </div>
        <div className="hero-tag">
          <Sparkles size={12} />
          <span>Sistem Cerdas Pertanian Presisi</span>
        </div>
        <h2 className="hero-title">Endosync-GPS</h2>
        <p className="hero-desc">
          Analisis kondisi kekeringan lahan berbasis citra & data spasial, serta rekomendasi formulasi biopriming spesifik lokasi.
        </p>

        <div className="hero-stats-row">
          <div className="hero-stat-item">
            <span className="hero-stat-num">3</span>
            <span className="hero-stat-label">Skenario Wilayah</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">AI + Bio</span>
            <span className="hero-stat-label">Analisis Multi-layer</span>
          </div>
          <div className="hero-stat-item">
            <span className="hero-stat-num">5 Tahap</span>
            <span className="hero-stat-label">Protokol Priming</span>
          </div>
        </div>
      </div>

      {/* Ringkasan Fungsi Aplikasi */}
      <div style={{
        background: 'white',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem'
      }}>
        <div className="section-label-group">
          <div className="section-heading">
            <Layers size={16} color="var(--primary-700)" />
            <span>Alur Sistem Terintegrasi</span>
          </div>
        </div>
        <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
          Dari identifikasi visual lahan, deteksi indeks stres air perakaran, penentuan kelompok mikroba endofit adaptif, hingga panduan perlakuan benih siap semai.
        </p>
      </div>

      {/* Wilayah Selector Header */}
      <div>
        <div className="section-label-group">
          <div className="section-heading">
            <MapPin size={16} color="var(--primary-700)" />
            <span>Pilih Lokasi Wilayah Lahan</span>
          </div>
          <span className="section-subtext">3 Skenario Riset</span>
        </div>

        {/* Region Cards List */}
        <div className="region-cards-list">
          {regionsList.map((region) => {
            const isSelected = selectedRegionId === region.id;
            return (
              <div
                key={region.id}
                className={`region-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectRegion(region.id)}
              >
                <div className="region-card-header">
                  <div className="region-name-box">
                    <div
                      className="region-pin-icon"
                      style={{
                        backgroundColor: region.statusBadgeColor,
                        color: region.statusTextColor
                      }}
                    >
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h3 className="region-title">{region.name}</h3>
                      <span className="region-province">{region.province} • {region.elevation}</span>
                    </div>
                  </div>

                  <span
                    className="region-condition-pill"
                    style={{
                      backgroundColor: region.statusBadgeColor,
                      color: region.statusTextColor,
                      borderColor: region.statusBorderColor
                    }}
                  >
                    {region.analysis.statusTitle}
                  </span>
                </div>

                <p style={{ fontSize: '0.74rem', color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {region.topography}
                </p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.35', marginBottom: '0.5rem' }}>
                  {region.landscapeDescription}
                </p>

                <div className="region-meta-grid">
                  <div className="region-meta-item">
                    <span className="region-meta-k">Tipe Tanah</span>
                    <span className="region-meta-v">{region.soilType}</span>
                  </div>
                  <div className="region-meta-item">
                    <span className="region-meta-k">Kelompok Biopriming</span>
                    <span className="region-meta-v" style={{ color: 'var(--primary-800)', fontWeight: 700 }}>
                      {region.recommendation.biologyGroup} ({region.recommendation.formulationCode})
                    </span>
                  </div>
                </div>

                <div className="region-card-footer">
                  <span className="region-formulation-preview">
                    Kesesuaian: <strong>{(region.recommendation.suitabilityScore * 100).toFixed(0)}%</strong>
                  </span>

                  <button
                    className="region-select-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRegion(region.id);
                      onStartAnalysis(region.id);
                    }}
                    type="button"
                  >
                    <span>Mulai Analisis</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Catatan Simulasi */}
      <div className="disclaimer-card" style={{ marginTop: '0.5rem' }}>
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Catatan Prototipe:</strong> Ketiga wilayah di atas merepresentasikan kondisi agroklimat kontras (tadah hujan, lereng berbukit, dan irigasi teknis) untuk keperluan pengujian alur interaktif.
        </div>
      </div>
    </div>
  );
}
