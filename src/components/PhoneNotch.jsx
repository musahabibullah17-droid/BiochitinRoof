import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Signal } from 'lucide-react';

export default function PhoneNotch() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-notch-bar">
      <div className="notch-time">{currentTime || '09:41'}</div>
      <div className="dynamic-island">
        <div className="island-camera-lens"></div>
        <div className="island-sensor"></div>
      </div>
      <div className="notch-icons">
        <Signal size={12} strokeWidth={2.5} />
        <Wifi size={12} strokeWidth={2.5} />
        <BatteryMedium size={14} strokeWidth={2.5} />
      </div>
    </div>
  );
}
