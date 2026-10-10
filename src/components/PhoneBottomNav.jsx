import React from 'react';
import { FileText, Camera, Activity, Sparkles, BookOpen } from 'lucide-react';

export default function PhoneBottomNav({ activeStep, onSelectStep }) {
  const tabs = [
    { step: 1, label: 'Lahan', icon: FileText },
    { step: 2, label: 'Foto', icon: Camera },
    { step: 3, label: 'Hasil', icon: Activity },
    { step: 4, label: 'Rekomendasi', icon: Sparkles },
    { step: 5, label: 'Panduan', icon: BookOpen }
  ];

  return (
    <nav className="device-native-bottom-nav">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = activeStep === tab.step;

        return (
          <button
            key={tab.step}
            className={`nav-tab-button ${isActive ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectStep(tab.step);
            }}
            type="button"
          >
            <div className="tab-icon-wrapper">
              <IconComponent size={16} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className="tab-label-text">{tab.label}</span>
            {isActive && <div className="tab-active-pill-dot" />}
          </button>
        );
      })}
    </nav>
  );
}
