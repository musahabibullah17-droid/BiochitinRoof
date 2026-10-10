import React, { useRef } from 'react';
import {
  MapPin,
  Camera,
  RotateCcw,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Info,
  CheckCircle2,
  Scan
} from 'lucide-react';

export default function StepPhotoCondition({
  regionData,
  photoUrl,
  onChangePhoto,
  onProceed
}) {
  const fileInputRef = useRef(null);
  const samplePhoto = regionData.samplePhoto;
  const currentPhoto = photoUrl || samplePhoto.url;

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChangePhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="photo-screen">
      {/* Photo Preview Container Card */}
      <div className="photo-preview-card">
        <div className="photo-media-wrapper">
          <img
            src={currentPhoto}
            alt="Kondisi visual lahan pertanian"
            className="photo-media-img"
          />

          <div className="photo-overlay-badges">
            <div className="photo-badge-gps">
              <MapPin size={11} />
              <span>{regionData.name} ({regionData.elevation})</span>
            </div>
            <div className="photo-badge-quality">
              <span>{samplePhoto.photoQuality}</span>
            </div>
          </div>
        </div>

        <div className="photo-caption-body">
          <h4 className="photo-caption-title">
            <Scan size={14} color="var(--primary-700)" />
            <span>Keterangan Visual Kondisi Lahan</span>
          </h4>
          <p className="photo-caption-text">
            {samplePhoto.caption}
          </p>
          <div style={{ marginTop: '0.6rem', fontSize: '0.68rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
            <span>Citra Satelit: {samplePhoto.satelliteOverlay}</span>
            <span>{samplePhoto.captureTimestamp}</span>
          </div>
        </div>
      </div>

      {/* Simulated Quality and Confidence Metrics */}
      <div className="sim-metric-chips">
        <div className="sim-metric-card">
          <span className="sim-metric-label">Kualitas Resolusi Foto</span>
          <div className="sim-metric-value" style={{ color: 'var(--primary-700)' }}>
            {samplePhoto.qualityScore}%
          </div>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            Pencahayaan & kontras terverifikasi
          </span>
        </div>

        <div className="sim-metric-card">
          <span className="sim-metric-label">Confidence Deteksi Model</span>
          <div className="sim-metric-value" style={{ color: regionData.statusTextColor }}>
            {samplePhoto.modelConfidenceSim}%
          </div>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            Data simulasi citra kanopi
          </span>
        </div>
      </div>

      {/* Hidden file input for photo replacement */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
        <button
          type="button"
          className="btn-primary-action"
          onClick={onProceed}
        >
          <span>Lanjutkan ke Hasil Analisis</span>
          <ArrowRight size={18} />
        </button>

        <button
          type="button"
          className="btn-secondary-action"
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <RotateCcw size={15} />
          <span>Ganti Foto Lahan</span>
        </button>
      </div>

      {/* Simulation Watermark */}
      <div className="disclaimer-card">
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Data Simulasi Prototipe:</strong> Indikator kualitas foto dan confidence model 
          adalah hasil komputasi dummy untuk keperluan demonstrasi alur UI.
        </div>
      </div>
    </div>
  );
}
