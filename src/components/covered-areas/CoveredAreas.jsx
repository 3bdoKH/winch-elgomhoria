import React from 'react';
import './CoveredAreas.css';
import { areas } from '../../data/areas';
import { MapPin, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoveredAreas = () => {
    const navigate = useNavigate();

    return (
        <section className="covered-areas-v2">
            <div className="covered-areas-container">
                <div className="section-header centered">
                    <div className="header-meta">
                        <span className="dot"></span>
                        <h4 className="sub-title">تغطية شاملة</h4>
                    </div>
                    <h2 className="main-title">
                        المناطق التي <span className="highlight">نخدمها</span>
                    </h2>
                    <p className="section-description">
                        نواجد في جميع أنحاء الجمهورية لضمان وصولنا إليك في أسرع وقت ممكن
                    </p>
                </div>

                <div className="areas-grid-v2">
                    {areas.slice(0, 8).map((area, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/areas?filter=${encodeURIComponent(area.name)}`)}
                            className="area-card-v2"
                        >
                            <div className="area-card-icon-v2">
                                <MapPin size={24} />
                            </div>
                            <div className="area-card-info-v2">
                                <h3 className="area-name-v2">{area.name}</h3>
                                <p className="area-sub-count-v2">{area.areas.length} منطقة داخلية</p>
                            </div>
                            <div className="area-card-arrow-v2">
                                <ChevronLeft size={18} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="covered-areas-footer">
                    <button
                        onClick={() => navigate('/areas')}
                        className="btn-view-all"
                    >
                        عرض جميع مناطق التغطية
                        <ChevronLeft size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CoveredAreas;
