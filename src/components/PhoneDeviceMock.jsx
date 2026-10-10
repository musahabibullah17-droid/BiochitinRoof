import React from 'react';
import { Signal, Wifi, BatteryMedium } from 'lucide-react';

export function PhoneDeviceMock({
  children,
  height = 476,
  width = 224
}) {
  return (
    <div
      className="mockup-phone-chassis"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Phone Hardware Top Status Bar */}
      <div className="phone-hardware-notch">
        <span className="notch-time-text">9:41</span>
        <div className="notch-island-pill"></div>
        <div className="notch-hardware-icons">
          <Signal size={10} strokeWidth={2.5} />
          <Wifi size={10} strokeWidth={2.5} />
          <BatteryMedium size={12} strokeWidth={2.5} />
        </div>
      </div>

      {/* Screen Viewport with Content */}
      <div className="phone-screen-viewport">
        {children}
      </div>

      {/* Hardware Bottom Gesture Home Indicator Bar */}
      <div className="phone-bottom-home-bar"></div>
    </div>
  );
}
