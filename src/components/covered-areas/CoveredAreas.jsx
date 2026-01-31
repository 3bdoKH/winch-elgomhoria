import React from 'react';
import './CoveredAreas.css';
import { areas } from '../../data/areas';
import { MapPin } from 'lucide-react';

const CoveredAreas = () => {
    return (
        <section className="covered-areas">
            <div className="covered-areas-container">
                <div className="covered-areas-header">
                    <h3 className="section-subtitle">تغطية شاملة</h3>
                    <h2 className="section-title">
                        المناطق التي <span className="highlight">نخدمها</span>
                    </h2>
                    <div className="title-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                    <p className="covered-areas-description">
                        نقدم خدماتنا في جميع أنحاء مصر مع تغطية خاصة للمناطق التالية
                    </p>
                </div>

                <div className="areas-grid">
                    {areas.map((area, index) => (
                        <a
                            key={index}
                            href={`/areas?filter=${encodeURIComponent(area.name)}`}
                            className="area-card"
                        >
                            <div className="area-card-icon">
                                <MapPin color='var(--accent)' size={32} />
                            </div>
                            <h3 className="area-card-title">{area.name}</h3>
                            <div className="area-card-count">
                                {area.areas.length} منطقة فرعية
                            </div>
                            <span className="area-card-link">
                                عرض المناطق
                            </span>
                        </a>
                    ))}
                </div>

                <div className="covered-areas-cta">
                    <a href="/areas" className="view-all-areas-btn">
                        عرض جميع المناطق
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CoveredAreas;
