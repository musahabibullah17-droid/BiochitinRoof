import React from 'react';
import HeaderWithStep from './HeaderWithStep';
import StepHome from './StepHome';
import StepLandForm from './StepLandForm';
import StepPhotoCondition from './StepPhotoCondition';
import StepAnalysisResult from './StepAnalysisResult';
import StepRecommendation from './StepRecommendation';
import StepBioprimingGuide from './StepBioprimingGuide';
import PhoneNotch from './PhoneNotch';
import { Layers, ArrowRight, Eye, Sparkles, MapPin } from 'lucide-react';

export default function ShowcaseBoard({
  regionData,
  selectedRegionId,
  onSelectRegion,
  onFocusScreen,
  formData,
  photoPreview
}) {
  const screens = [
    {
      id: 1,
      title: '1. Beranda / Wilayah',
      subtitle: 'Pemilihan Wilayah & Karakteristik Lahan',
      component: (
        <StepHome
          selectedRegionId={selectedRegionId}
          onSelectRegion={onSelectRegion}
          onStartAnalysis={() => onFocusScreen(2)}
        />
      )
    },
    {
      id: 2,
      title: '2. Formulir Lahan',
      subtitle: 'Input Parameter & Unggah Foto',
      component: (
        <StepLandForm
          regionData={regionData}
          formData={formData}
          onFormChange={() => {}}
          photoPreview={photoPreview}
          onPhotoChange={() => {}}
          onSubmit={() => onFocusScreen(3)}
        />
      )
    },
    {
      id: 3,
      title: '3. Foto Kondisi Lahan',
      subtitle: 'Inspeksi Visual & Confidence AI',
      component: (
        <StepPhotoCondition
          regionData={regionData}
          photoUrl={photoPreview}
          onChangePhoto={() => {}}
          onProceed={() => onFocusScreen(4)}
        />
      )
    },
    {
      id: 4,
      title: '4. Hasil Analisis',
      subtitle: 'Status Kekeringan & Indikator Biofisik',
      component: (
        <StepAnalysisResult
          regionData={regionData}
          onSeeRecommendations={() => onFocusScreen(5)}
        />
      )
    },
    {
      id: 5,
      title: '5. Rekomendasi Formulasi',
      subtitle: 'Kelompok Mikroba & Informasi Larutan',
      component: (
        <StepRecommendation
          regionData={regionData}
          onSeeGuide={() => onFocusScreen(6)}
        />
      )
    },
    {
      id: 6,
      title: '6. Panduan Biopriming',
      subtitle: 'Timeline Vertikal 5 Tahap Aplikasi',
      component: (
        <StepBioprimingGuide
          regionData={regionData}
          onRestart={() => onFocusScreen(2)}
          onChangeRegion={() => onFocusScreen(1)}
        />
      )
    }
  ];

  return (
    <div className="showcase-stage">
      {/* Showcase Hero Header */}
      <div className="showcase-header-hero">
        <div className="showcase-hero-text">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--primary-100)', color: 'var(--primary-800)', padding: '0.2rem 0.65rem', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            <Sparkles size={13} />
            <span>Showcase Presentasi UI/UX Desain Multi-Layar</span>
          </div>
          <h1>Endosync-GPS Design Board</h1>
          <p>
            Alur lengkap pengalaman aplikasi mobile Endosync-GPS: Dari seleksi lahan berbasis geospasial, formulir parameter, analisis kekeringan multimodal, penentuan biopriming endofit, hingga protokol perendaman benih.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
          <div className="showcase-flow-strip">
            <MapPin size={15} />
            <span>Wilayah Aktif: {regionData.name} ({regionData.topography})</span>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {['jember', 'kerinci', 'lamongan'].map((rId) => (
              <button
                key={rId}
                className={`quick-region-chip ${selectedRegionId === rId ? 'active' : ''}`}
                onClick={() => onSelectRegion(rId)}
                type="button"
              >
                {rId.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Row of Smartphone Mockups */}
      <div className="showcase-screens-row">
        {screens.map((screen) => (
          <div key={screen.id} className="showcase-card-wrapper">
            <div className="showcase-card-caption">
              <div>
                <span className="showcase-step-label">{screen.title}</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{screen.subtitle}</span>
              </div>
              <button
                onClick={() => onFocusScreen(screen.id)}
                title="Buka dan operasikan layar ini di emulator interaktif"
                style={{
                  background: 'white',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: 'var(--primary-700)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                type="button"
              >
                <Eye size={12} />
                <span>Interaksi</span>
              </button>
            </div>

            <div className="showcase-mockup-frame">
              <PhoneNotch />
              <div className="phone-screen">
                <HeaderWithStep
                  title={screen.title.split('. ')[1] || screen.title}
                  stepNumber={screen.id > 1 ? screen.id - 1 : null}
                  totalSteps={5}
                  currentRegion={screen.id > 1 ? regionData : null}
                  showBack={false}
                />
                <div className="phone-screen-content">
                  {screen.component}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
