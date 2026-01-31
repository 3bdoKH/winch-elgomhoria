import React from 'react';
import { Truck, Drill, Fuel, Battery, Settings2, ShieldCheck } from 'lucide-react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
    const servicesData = [
        {
            id: 'rescue',
            icon: <Truck className="service-icon" />,
            title: 'إنقاذ السيارات',
            description: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق للتعامل مع جميع الحالات.'
        },
        {
            id: 'equipment',
            icon: <Drill className="service-icon" />,
            title: 'نقل المعدات',
            description: 'نقدم جميع خدمات نقل المعدات الثقيلة، الكرفانات، والمعدات الإنشائية بكفاءة عالية وأمان تام.'
        },
        {
            id: 'fuel',
            icon: <Fuel className="service-icon" />,
            title: 'تزويد الوقود',
            description: 'إذا نفذ وقود سيارتك فلا داعي للقلق، نصل إليك أينما كنت لنزودك بالوقود ونعيدك للطريق فوراً.'
        },
        {
            id: 'battery',
            icon: <Battery className="service-icon" />,
            title: 'خدمات البطارية',
            description: 'فريقنا جاهز ومستعد لمساعدتكم في أعطال البطاريات التي تحتاج إلى وصلة شحن أو استبدال فوري.'
        },
        {
            id: 'tires',
            icon: <Settings2 className="service-icon" />,
            title: 'تغيير الإطارات',
            description: 'نقدم خدمة تغيير واستبدال الإطارات في الطريق في حالات الطوارئ، نصلك بمعداتنا المتكاملة.'
        },
        {
            id: 'security',
            icon: <ShieldCheck className="service-icon" />,
            title: 'أمان تام',
            description: 'نضمن لك سلامة سيارتك أثناء عملية الإنقاذ والنقل، حيث نستخدم أحدث الأساليب والمعدات العالمية.'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <div className="header-meta">
                        <span className="dot"></span>
                        <h4 className="services-subtitle">مساعدة احترافية على الطريق</h4>
                    </div>
                    <h2 className="services-title">
                        خدماتنا <span className="highlight">الشاملة</span>
                    </h2>
                    <p className="services-description-main">
                        نحن فخورون بتقديم مجموعة متنوعة من خدمات المساعدة على الطريق،
                        مصممة خصيصاً لتلبية احتياجاتك في أوقات الطوارئ.
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card"
                            onClick={() => navigate(`/services`)}
                        >
                            <div className="service-icon-container">
                                {service.icon}
                                <div className="icon-bg"></div>
                            </div>
                            <div className="service-info">
                                <h3 className="service-card-title">{service.title}</h3>
                                <div className="card-divider"></div>
                                <p className="service-card-description">{service.description}</p>
                            </div>
                            <div className="card-footer">
                                <span className="learn-more">طلب الخدمة الآن</span>
                                <div className="arrow-icon">←</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
