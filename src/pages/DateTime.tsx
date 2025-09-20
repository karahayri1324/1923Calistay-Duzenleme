import React from 'react';
import { EVENT_INFO } from '../utils/constants';
import './DateTime.css';

const DateTime: React.FC = () => {
  return (
    <div className="datetime-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Tarih & Mekan</h1>
          <p className="page-subtitle">
            1923 Çalıştayı etkinlik detayları ve ulaşım bilgileri
          </p>
        </div>

        <div className="datetime-content">
          {/* Etkinlik Bilgileri */}
          <div className="event-info-section">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📅</div>
                <h3>Tarih</h3>
                <p className="info-value">{EVENT_INFO.date}</p>
                <p className="info-detail">Cumartesi - Pazar</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">⏰</div>
                <h3>Saat</h3>
                <p className="info-value">{EVENT_INFO.time}</p>
                <p className="info-detail">2 gün boyunca</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Mekan</h3>
                <p className="info-value">{EVENT_INFO.location}</p>
                <p className="info-detail">Etkinlik yeri</p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">⏳</div>
                <h3>Son Başvuru</h3>
                <p className="info-value">{EVENT_INFO.applicationDeadline}</p>
                <p className="info-detail">Geç kalmayın!</p>
              </div>
            </div>
          </div>



          {/* Ulaşım */}
          <div className="transport-section">
            <h2 className="section-title">Ulaşım Bilgileri</h2>
            <div className="transport-grid">
              <div className="transport-card">
                <div className="transport-icon">🚌</div>
                <h4>Toplu Taşıma</h4>
                <p>Metro, otobüs ve dolmuş güzergahları yakında paylaşılacak</p>
              </div>
              
              <div className="transport-card">
                <div className="transport-icon">🚗</div>
                <h4>Özel Araç</h4>
                <p>Otopark imkanları ve yol tarifi detayları</p>
              </div>
            </div>
          </div>

          {/* Önemli Notlar */}
          <div className="notes-section">
            <h2 className="section-title">Önemli Notlar</h2>
            <div className="notes-content">
              <div className="note-item">
                <span className="note-icon">📋</span>
                <p>Etkinlik ücretsizdir, sadece başvuru gereklidir</p>
              </div>
              <div className="note-item">
                <span className="note-icon">🍽️</span>
                <p>Yemek ve içecek ikramları organizasyon tarafından karşılanacaktır</p>
              </div>
              <div className="note-item">
                <span className="note-icon">📱</span>
                <p>Etkinlik süresince sosyal medya paylaşımları teşvik edilir</p>
              </div>
              <div className="note-item">
                <span className="note-icon">🎓</span>
                <p>Katılım sertifikası tüm katılımcılara verilecektir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
