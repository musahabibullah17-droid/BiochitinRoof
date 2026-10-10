import React from 'react';
import { ChevronLeft, ChevronDown, MapPin, Camera } from 'lucide-react';

export function ScreenLandForm({ region, onNext }) {
  const form = region.form;

  return (
    <div className="phone-screen-container">
      {/* App Header */}
      <div className="app-top-header">
        <button className="header-back-arrow" onClick={onNext} type="button">
          <ChevronLeft size={18} color="white" />
        </button>
        <span className="header-title">Analisis Lahan</span>
      </div>

      {/* Screen Body */}
      <div className="screen-inner-body">
        {/* Field 1: Lokasi Lahan */}
        <div className="field-group">
          <label className="field-label">Lokasi Lahan</label>
          <div className="field-box location-box">
            <div className="location-text-lines">
              <span>{form.locationText.split('\n')[0]}</span>
              <span>{form.locationText.split('\n')[1]}</span>
            </div>
            <MapPin size={14} className="location-pin-symbol" />
          </div>
        </div>

        {/* Field 2: Varietas Padi */}
        <div className="field-group">
          <label className="field-label">Varietas Padi</label>
          <div className="field-box dropdown-box">
            <span>{form.paddyVariety}</span>
            <ChevronDown size={14} color="#64748b" />
          </div>
        </div>

        {/* Field 3: Tipe Lahan */}
        <div className="field-group">
          <label className="field-label">Tipe Lahan</label>
          <div className="field-box dropdown-box">
            <span>{form.landType}</span>
            <ChevronDown size={14} color="#64748b" />
          </div>
        </div>

        {/* Field 4: Umur Tanaman (MST) */}
        <div className="field-group">
          <label className="field-label">Umur Tanaman (MST)</label>
          <div className="field-box dropdown-box">
            <span>{form.plantAge}</span>
            <ChevronDown size={14} color="#64748b" />
          </div>
        </div>

        {/* Field 5: Foto Kondisi Lahan */}
        <div className="field-group">
          <label className="field-label">Foto Kondisi Lahan</label>
          <p className="field-sublabel">Ambil foto permukaan tanah untuk analisis kondisi lahan</p>
          <div className="camera-upload-card" onClick={onNext}>
            <div className="camera-round-icon">
              <Camera size={20} color="white" />
            </div>
            <span className="camera-upload-text">Ambil Foto</span>
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
          <button className="primary-green-btn" onClick={onNext} type="button">
            LANJUTKAN
          </button>
        </div>
      </div>
    </div>
  );
}
