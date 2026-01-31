import React from 'react';
import './Services.css';
import tires from "../../media/tires.png"
import towedCar from "../../media/towed-car.png"
import tools from "../../media/tools.png"
import fuel from "../../media/fuel.png"
import battery from "../../media/battery.png"
const Services = () => {
    const servicesData = [
        {
            id: 'rescue',
            icon: towedCar,
            title: 'إنقاذ السيارات',
            description: 'نقدم جميع خدمات إنقاذ السيارات بأسرع وأفضل خدمة إنقاذ للسيارات في مصر بشكل غير مسبوق ..'
        },
        {
            id: 'equipment',
            icon: tools,
            title: 'نقل المعدات',
            description: 'نقدم جميع خدمات نقل المعدات " سيارات نقل ، كرفانات ، معدات وكراكات ، فشلات " وغيرها الكثير ..'
        },
        {
            id: 'fuel',
            icon: fuel,
            title: 'التزود بالوقود',
            description: 'اذا نفذ وقود سيارتك فلا داعي للقلق، فنحن نقدم خدمة التزود بالوقود في الطريق ، فريق أوتوبات جاهز لتزويدكم بالوقود ..'
        },
        {
            id: 'battery',
            icon: battery,
            title: 'وصلة بطارية',
            description: 'نقدم جميع خدمات أعطال البطاريات والتي تحتاج الي وصلة . فريق ونش انقاذ أوتوبات جاهز وعلي أتم الاستعداد لمساعدتكم ..'
        },
        {
            id: 'tires',
            icon: tires,
            title: 'تغيير الاطارات',
            description: 'اذا حصل ظرف طارئ في الطريق وقد احتجت الي تغيير او استبدال احدي اطارات سيارتك فنحن نقدم خدمة تغيير / استبدال الاطارات في الطريق ..'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h3 className="services-subtitle">مساعدة طوارئ على الطريق</h3>
                    <h2 className="services-title">
                        خدماتنا <span className="highlight">المميزة</span>
                    </h2>
                    <div className="services-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="home-services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon-wrapper">
                                <div className="service-icon"><img src={service.icon} alt={service.title} /></div>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

