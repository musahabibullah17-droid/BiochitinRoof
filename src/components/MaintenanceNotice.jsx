import React from 'react';
import './MaintenanceNotice.css';

export function MaintenanceNotice() {
  return (
    <div className="simple-maintenance-container">
      <div className="simple-maintenance-box">
        <div className="maintenance-icon">⚠️</div>
        <h1 className="simple-maintenance-title">Website Sedang Maintenance</h1>
        <p className="simple-maintenance-text">
          Mohon maaf atas ketidaknyamanannya. Saat ini website sedang dalam perbaikan dan akan segera kembali aktif.
        </p>
      </div>
    </div>
  );
}
