import React from 'react';
export function SocialPreview() {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif"
      }}>
      
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
          background: 'rgba(255,255,255,0.015)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          pointerEvents: 'none'
        }} />
      

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 0
        }}>
        
        <h1
          className="font-serif"
          style={{
            fontSize: 72,
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: 'rgba(255,255,255,0.92)',
            margin: 0,
            lineHeight: 1.1
          }}>
          
          Refocal Studio
        </h1>

        {/* Divider with lines */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginTop: 36
          }}>
          
          <div
            style={{
              width: 48,
              height: 1,
              background: 'rgba(255,255,255,0.1)'
            }} />
          
          <p
            style={{
              fontSize: 14,
              fontWeight: 300,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              margin: 0
            }}>
            
            Clarity Through Design
          </p>
          <div
            style={{
              width: 48,
              height: 1,
              background: 'rgba(255,255,255,0.1)'
            }} />
          
        </div>

        {/* Subtle dot accent */}
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            marginTop: 32
          }} />
        
      </div>

      {/* Bottom URL */}
      <p
        style={{
          position: 'absolute',
          bottom: 36,
          fontSize: 11,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.15)',
          fontWeight: 400,
          margin: 0
        }}>
        
        refocal.studio
      </p>
    </div>);

}