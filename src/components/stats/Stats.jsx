import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, Building, Car, Plus } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    offices: 0,
    vehicles: 0,
    workers: 0
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const statsData = [
    {
      id: 'experience',
      icon: <Star size={32} />,
      target: 30,
      label: 'عاما من الخبرة',
      duration: 2000
    },
    {
      id: 'offices',
      icon: <Building size={32} />,
      target: 74,
      label: 'مكتب وشريك',
      duration: 2000
    },
    {
      id: 'vehicles',
      icon: <Car size={32} />,
      target: 5000,
      label: 'عملية إنقاذ',
      duration: 2500
    },
    {
      id: 'workers',
      icon: <Users size={32} />,
      target: 874,
      label: 'عنصر في الفريق',
      duration: 2200
    }
  ];

  const animateCounters = () => {
    statsData.forEach((stat) => {
      const increment = stat.target / (stat.duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCounters((prev) => ({ ...prev, [stat.id]: stat.target }));
          clearInterval(timer);
        } else {
          setCounters((prev) => ({ ...prev, [stat.id]: Math.floor(current) }));
        }
      }, 16);
    });
  };

  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  return (
    <section className="stats-v2" ref={statsRef}>
      <div className="stats-bg-dots"></div>
      <div className="stats-container">
        <div className="stats-grid-v2">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card-v2">
              <div className="stat-card-inner">
                <div className="stat-icon-wrapper-v2">
                  {stat.icon}
                </div>
                <div className="stat-number-content">
                  <div className="stat-number-v2">
                    {counters[stat.id].toLocaleString()}
                    <Plus size={24} className="plus-icon" />
                  </div>
                  <div className="stat-label-v2">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
