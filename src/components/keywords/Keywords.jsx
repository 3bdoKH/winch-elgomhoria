import React from 'react';
import './Keywords.css';

const Keywords = () => {
    const keywords = [
        'ونش انقاذ 6 اكتوبر',
        'خدمات إنقاذ السيارات',
        'ونش إنقاذ 24 ساعة',
        'نقل سيارات معطلة',
        'ونش إنقاذ الجيزة',
        'خدمات طوارئ الطريق',
        'تغيير إطارات',
        'وصلة بطارية',
        'ونش إنقاذ الإسكندرية',
        'نقل معدات ثقيلة',
        'ونش إنقاذ سريع',
        'إنقاذ سيارات مصر',
        'خدمة ونش إنقاذ احترافية',
        'نقل كرفانات',
        'ونش إنقاذ طرق سريعة',
        'توصيل وقود',
        'ونش حوادث',
        'خدمات ونش إنقاذ رخيصة',
        'ونش إنقاذ الطريق الصحراوي',
        'نقل سيارات فاخرة',
        'ونش إنقاذ شاحنات',
        'خدمات طوارئ سيارات',
        'ونش إنقاذ الساحل الشمالي',
        'إصلاح سيارات على الطريق',
        'ونش إنقاذ العاصمة الإدارية',
        'نقل سيارات آمن',
        'ونش انقاذ مرسي مطروح',
        'خدمات ونش موثوقة',
        'ونش إنقاذ الشيخ زايد',
        'إنقاذ سيارات عالقة'
    ];

    return (
        <section className="keywords-v2">
            <div className="keywords-container-v2">
                <div className="section-header centered">
                    <div className="header-meta">
                        <span className="dot"></span>
                        <h4 className="sub-title">إمكانية الوصول</h4>
                    </div>
                    <h2 className="main-title">
                        كلمات <span className="highlight">بحث شائعة</span>
                    </h2>
                    <p className="section-description">
                        تسهل هذه الكلمات العثور على خدماتنا بسرعة واحترافية في محركات البحث
                    </p>
                </div>

                <div className="keywords-cloud-v2">
                    {keywords.map((keyword, index) => (
                        <span key={index} className="keyword-tag-v2">
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Keywords;

