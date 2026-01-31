import React from 'react';
import './Keywords.css';

const Keywords = () => {
    const keywords = [
        'ونش انقاذ 6 اكتوبر',
        'خدمات  إنقاذ السيارات',
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
        <section className="keywords-section">
            <div className="keywords-container">
                <div className="keywords-header">
                    <h3 className="keywords-subtitle">ابحث عن خدماتنا</h3>
                    <h2 className="keywords-title">
                        كلمات <span className="highlight">بحث ذات صلة</span>
                    </h2>
                    <div className="keywords-divider">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                    </div>
                </div>

                <div className="keywords-cloud">
                    {keywords.map((keyword, index) => (
                        <span key={index} className="keyword-tag">
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Keywords;

