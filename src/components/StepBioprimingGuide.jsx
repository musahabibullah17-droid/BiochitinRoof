import React from 'react';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Droplet,
  Wind,
  Sprout,
  HelpCircle,
  RotateCcw,
  Info,
  MapPin
} from 'lucide-react';

export default function StepBioprimingGuide({ regionData, onRestart, onChangeRegion }) {
  const steps = regionData.bioprimingSteps;

  const getStepIcon = (stepNum) => {
    switch (stepNum) {
      case 1:
        return <Sprout size={16} />;
      case 2:
        return <Droplet size={16} />;
      case 3:
        return <CheckCircle2 size={16} />;
      case 4:
        return <Wind size={16} />;
      case 5:
        return <Sparkles size={16} />;
      default:
        return <CheckCircle2 size={16} />;
    }
  };

  return (
    <div className="guide-screen">
      {/* Guide Header Banner */}
      <div className="guide-hero-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-800)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Protokol 5 Tahap Terstandarisasi
          </span>
          <span style={{ fontSize: '0.68rem', background: 'var(--primary-100)', color: 'var(--primary-900)', padding: '0.15rem 0.5rem', borderRadius: '999px', fontWeight: 700 }}>
            {regionData.recommendation.formulationCode} ({regionData.recommendation.biologyGroup})
          </span>
        </div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
          Panduan Biopriming Wilayah {regionData.name}
        </h3>
        <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
          Panduan langkah demi langkah inokulasi biopriming untuk memperkuat ketahanan benih padi terhadap {regionData.analysis.statusTitle.toLowerCase()}.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="guide-timeline">
        {steps.map((item) => (
          <div key={item.step} className={`timeline-step-item ${item.step === 5 ? 'active' : ''}`}>
            <div className="timeline-step-marker">
              {item.step}
            </div>

            <div className="timeline-content-card">
              <div className="step-card-header">
                <h4 className="step-card-title">{item.title}</h4>
                <span className="step-duration-badge">
                  <Clock size={10} style={{ display: 'inline', marginRight: '3px' }} />
                  {item.durationText}
                </span>
              </div>

              <p className="step-card-summary">{item.summary}</p>
              <p className="step-card-detail">{item.detail}</p>

              {item.tip && (
                <div className="step-tip-box">
                  <strong>Tips Agronomi:</strong> {item.tip}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Finishing Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.75rem' }}>
        <button
          type="button"
          className="btn-primary-action"
          onClick={onChangeRegion}
        >
          <MapPin size={16} />
          <span>Eksplorasi Skenario Wilayah Lain</span>
        </button>

        <button
          type="button"
          className="btn-secondary-action"
          onClick={onRestart}
        >
          <RotateCcw size={15} />
          <span>Ulangi Analisis Wilayah Ini</span>
        </button>
      </div>

      {/* Scientific Disclaimer Note */}
      <div className="disclaimer-card">
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Peringatan Verifikasi Ilmiah:</strong> Durasi perendaman, konsentrasi larutan, dan tata cara pada prototipe antarmuka ini disajikan sebagai simulasi model. Praktik lapangan harus diverifikasi bersama penyuluh pertanian lapangan (PPL) dan disesuaikan dengan standar benih setempat.
        </div>
      </div>
    </div>
  );
}
