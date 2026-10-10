import React, { useState, useRef, useEffect } from 'react';
import {
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Info,
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function StepLandForm({
  regionData,
  formData,
  onFormChange,
  photoPreview,
  onPhotoChange,
  onSubmit
}) {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSimulatingCamera, setIsSimulatingCamera] = useState(false);

  // Sync default values when region changes if form is pristine
  useEffect(() => {
    if (regionData && (!formData.locationVillage || formData.regionId !== regionData.id)) {
      onFormChange({
        regionId: regionData.id,
        locationVillage: regionData.defaultForm.locationVillage,
        district: regionData.defaultForm.district,
        paddyVariety: regionData.defaultForm.paddyVariety,
        landType: regionData.defaultForm.landType,
        landTypeLabel: regionData.defaultForm.landTypeLabel,
        plantAgeMST: regionData.defaultForm.plantAgeMST,
        plantPhase: regionData.defaultForm.plantPhase,
        waterAvailability: regionData.defaultForm.waterAvailability
      });
      if (!photoPreview) {
        onPhotoChange(regionData.samplePhoto.url);
      }
    }
  }, [regionData]);

  const handleInputChange = (field, value) => {
    onFormChange({
      ...formData,
      [field]: value
    });
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onPhotoChange(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSimulateCamera = () => {
    setIsSimulatingCamera(true);
    setTimeout(() => {
      // Pick or re-apply region sample photo as high-res camera shot
      onPhotoChange(regionData.samplePhoto.url);
      setIsSimulatingCamera(false);
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.locationVillage || !formData.locationVillage.trim()) {
      errors.locationVillage = 'Nama desa/lokasi wajib diisi';
    }
    if (!formData.paddyVariety || !formData.paddyVariety.trim()) {
      errors.paddyVariety = 'Varietas padi wajib diisi';
    }
    if (!formData.plantAgeMST || formData.plantAgeMST < 1) {
      errors.plantAgeMST = 'Umur tanaman (MST) harus valid (>= 1)';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    onSubmit();
  };

  return (
    <div className="form-screen">
      {/* Wilayah Information Callout */}
      <div className="form-info-callout">
        <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong>Profil Wilayah Aktif: {regionData.name}</strong>
          <p style={{ marginTop: '2px', opacity: 0.9 }}>
            Parameter agroklimat dan data formulir di bawah disesuaikan otomatis dengan karakteristik {regionData.topography.toLowerCase()}.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Field: Lokasi / Nama Desa */}
        <div className="input-group">
          <label className="input-label" htmlFor="locationVillage">
            <span>Lokasi / Nama Desa</span>
            <span className="input-helper">*Wajib</span>
          </label>
          <input
            id="locationVillage"
            className="custom-input"
            type="text"
            value={formData.locationVillage || ''}
            onChange={(e) => handleInputChange('locationVillage', e.target.value)}
            placeholder="Contoh: Desa Wirolegi"
          />
          {formErrors.locationVillage && (
            <span style={{ fontSize: '0.68rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <AlertCircle size={12} /> {formErrors.locationVillage}
            </span>
          )}
        </div>

        {/* Field: Kabupaten / Wilayah */}
        <div className="input-group">
          <label className="input-label" htmlFor="district">
            <span>Kecamatan & Kabupaten</span>
          </label>
          <input
            id="district"
            className="custom-input"
            type="text"
            value={formData.district || ''}
            onChange={(e) => handleInputChange('district', e.target.value)}
            placeholder="Contoh: Kec. Sumbersari, Kab. Jember"
          />
        </div>

        {/* Field: Varietas Padi */}
        <div className="input-group">
          <label className="input-label" htmlFor="paddyVariety">
            <span>Varietas Padi</span>
            <span className="input-helper">Kultivar</span>
          </label>
          <input
            id="paddyVariety"
            className="custom-input"
            type="text"
            value={formData.paddyVariety || ''}
            onChange={(e) => handleInputChange('paddyVariety', e.target.value)}
            placeholder="Contoh: Ciherang / Inpari 32 / Payo"
          />
          {formErrors.paddyVariety && (
            <span style={{ fontSize: '0.68rem', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <AlertCircle size={12} /> {formErrors.paddyVariety}
            </span>
          )}
        </div>

        {/* Field: Tipe Lahan */}
        <div className="input-group">
          <label className="input-label" htmlFor="landType">
            <span>Tipe Lahan</span>
          </label>
          <select
            id="landType"
            className="custom-select"
            value={formData.landType || 'sawah_tadah_hujan'}
            onChange={(e) => handleInputChange('landType', e.target.value)}
          >
            <option value="sawah_tadah_hujan">Sawah Tadah Hujan (Bergantung Hujan)</option>
            <option value="lahan_lereng">Lahan Lereng / Terasering (Drainase Cepat)</option>
            <option value="lahan_datar">Lahan Datar / Irigasi Teknis (Air Teratur)</option>
          </select>
        </div>

        {/* Field: Umur Tanaman & Fase Pertumbuhan */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          <div className="input-group">
            <label className="input-label" htmlFor="plantAgeMST">
              <span>Umur (MST)</span>
            </label>
            <input
              id="plantAgeMST"
              className="custom-input"
              type="number"
              min="1"
              max="24"
              value={formData.plantAgeMST || 4}
              onChange={(e) => handleInputChange('plantAgeMST', parseInt(e.target.value) || 1)}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="plantPhase">
              <span>Fase Pertumbuhan</span>
            </label>
            <input
              id="plantPhase"
              className="custom-input"
              type="text"
              value={formData.plantPhase || 'Fase Vegetatif Awal'}
              onChange={(e) => handleInputChange('plantPhase', e.target.value)}
            />
          </div>
        </div>

        {/* Upload / Kamera Preview */}
        <div className="input-group">
          <label className="input-label">
            <span>Foto Kondisi Lapangan</span>
            <span className="input-helper">Kamera / Pratinjau</span>
          </label>

          <div className={`photo-uploader-box ${photoPreview ? 'has-preview' : ''}`}>
            {photoPreview ? (
              <div>
                <img
                  src={photoPreview}
                  alt="Pratinjau Lahan"
                  className="uploader-preview-img"
                />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '0.4rem', fontSize: '0.7rem', color: 'var(--primary-800)', fontWeight: 600 }}>
                  <CheckCircle2 size={14} color="var(--primary-600)" />
                  <span>Foto siap dianalisis sistem</span>
                </div>
              </div>
            ) : (
              <div style={{ padding: '1rem 0' }}>
                <Camera size={38} color="var(--text-muted)" style={{ margin: '0 auto 0.5rem', display: 'block' }} />
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dark)', fontWeight: 600 }}>Ambil Foto atau Unggah dari Galeri</p>
                <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Format JPG, PNG atau simulasi kamera langsung</p>
              </div>
            )}

            {/* Hidden native file inputs */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <input
              type="file"
              ref={cameraInputRef}
              accept="image/*"
              capture="environment"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />

            <div className="uploader-actions-row">
              <button
                type="button"
                className="upload-action-btn primary"
                onClick={handleSimulateCamera}
                disabled={isSimulatingCamera}
              >
                {isSimulatingCamera ? (
                  <>
                    <RefreshCw size={14} className="animate-spin" />
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <Camera size={14} />
                    <span>Ambil Foto</span>
                  </>
                )}
              </button>

              <button
                type="button"
                className="upload-action-btn"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <ImageIcon size={14} />
                <span>Pilih dari Galeri</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tombol Lanjutkan */}
        <button type="submit" className="btn-primary-action" style={{ marginTop: '0.5rem' }}>
          <span>Lanjutkan ke Analisis Lahan</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
