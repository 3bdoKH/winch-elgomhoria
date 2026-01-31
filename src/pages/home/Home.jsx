import React from 'react';
import { Helmet } from 'react-helmet-async';
import { phoneNumbers } from '../../data/phoneNumbers';
import './Home.css';
import Hero from '../../components/hero/Hero';
import WhatWeOffer from '../../components/what-we-offer/WhatWeOffer';
import Stats from '../../components/stats/Stats';
import Partners from '../../components/partners/Partners';
import Services from '../../components/services/Services';
import CoveredAreas from '../../components/covered-areas/CoveredAreas';
import CallToAction from '../../components/call-to-action/CallToAction';
import Blog from '../../components/blog/Blog';
import Testimonials from '../../components/testimonials/Testimonials';
import FAQ from '../../components/faq/FAQ';
import Keywords from '../../components/keywords/Keywords';

const Home = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AutoTowingService",
        "name": "ونش انقاذ سيارات",
        "url": window.location.href,
        "telephone": `+2${phoneNumbers[0]}`,
        "priceRange": "$$",
        "areaServed": "Egypt",
        "image": "https://winchenqaz.com/logo.png", // Assuming logo URL or using a placeholder
        "description": "أسرع ونش انقاذ سيارات في مصر. خدمة سحب ونقل السيارات المعطلة 24/7. خصم 50% على جميع الخدمات."
    }

    return (
        < div className="home-page" >
            <Helmet>
                <title>ونش انقاذ سيارات |خصم 50% | أقرب ونش انقاذ 24 ساعة | اتصل الآن</title>
                <meta name="description" content="هل تبحث عن ونش انقاذ سيارات؟ نوفر لك أسرع خدمة ونش انقاذ في مصر. ونش انقاذ متاح 24/7 لسحب السيارات المعطلة. اتصل الآن ليصلك أقرب ونش." />
                <meta name="keywords" content="ونش انقاذ, ونش انقاذ سيارات, ونش, انقاذ, سيارات, رقم ونش انقاذ, اقرب ونش انقاذ, ونش انقاذ 24 ساعة, مصر" />
                <meta property="og:title" content="ونش انقاذ سيارات | خدمة سريعة وموثوقة | خصم 50%" />
                <meta property="og:description" content="أسرع خدمة ونش انقاذ سيارات في مصر. نصلك في أي مكان خلال دقائق." />
                <link rel="canonical" href={window.location.href} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            <Hero />
            <WhatWeOffer />
            <Stats />
            <Partners />
            <Services />
            <CoveredAreas />
            <CallToAction />
            <Blog />
            <Testimonials />
            <FAQ />
            <Keywords />
        </div >
    );
};

export default Home;

