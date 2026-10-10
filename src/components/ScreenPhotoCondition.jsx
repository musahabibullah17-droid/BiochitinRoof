import React from 'react';
import { ChevronLeft, Image as ImageIcon, Camera, HelpCircle } from 'lucide-react';
import { FieldPhotoMock } from './Illustrations';

export function ScreenPhotoCondition({ region, onNext, onPrev }) {
  const photo = region.photo;

  return (
    <div className="phone-screen-container">
      {/* App Header */}
      <div className="app-top-header">
        <button className="header-back-arrow" onClick={onPrev} type="button">
          <ChevronLeft size={18} color="white" />
        </button>
        <span className="header-title">Foto Kondisi Lahan</span>
      </div>

      {/* Screen Body */}
      <div className="screen-inner-body" style={{ padding: '10px' }}>
        {/* Photo Container */}
        <div className="photo-display-container">
          <FieldPhotoMock regionId={region.id} />
          {/* Black caption box directly below image */}
          <div className="photo-dark-caption">
            {photo.caption}
          </div>
        </div>

        {/* 3 Buttons Row */}
        <div className="photo-actions-strip">
          <button className="photo-action-btn" type="button">
            <ImageIcon size={14} color="#64748b" />
            <span>Galeri</span>
          </button>

          <button className="photo-camera-center-btn" onClick={onNext} type="button" title="Ambil Foto">
            <Camera size={20} color="white" />
          </button>

          <button className="photo-action-btn" type="button">
            <HelpCircle size={14} color="#64748b" />
            <span>Tips Foto</span>
          </button>
        </div>

        {/* Kualitas Foto & Confidence */}
        <div className="photo-metrics-card">
          <div className="metric-row">
            <span className="metric-title">Kualitas Foto</span>
          </div>
          <div className="metric-status-row">
            <span className="metric-value-text">{photo.photoQuality}</span>
            <div className="metric-bar-track">
              <div className="metric-bar-fill" style={{ width: '88%' }}></div>
            </div>
          </div>

          <div className="metric-confidence-row">
            <span className="metric-title">Confidence Model</span>
            <span className="metric-conf-value">{photo.confidenceModel}</span>
          </div>
        </div>

        {/* Footnote */}
        <p className="photo-footnote-text">
          {photo.note}
        </p>

        {/* Submit Button */}
        <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
          <button className="primary-green-btn" onClick={onNext} type="button">
            LANJUTKAN
          </button>
        </div>
      </div>
    </div>
  );
}
