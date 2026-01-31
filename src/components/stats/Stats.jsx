import React, { useState, useEffect, useRef } from 'react';
import { Users, Star, Building, Car } from 'lucide-react';
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
      icon: <Star color='white' size={60} />,
      target: 30,
      label: 'سنوات من الخبرة',
      duration: 2000
    },
    {
      id: 'offices',
      icon: <Building color='white' size={60} />,
      target: 74,
      label: 'مكاتب حول العالم',
      duration: 2000
    },
    {
      id: 'vehicles',
      icon: <Car color='white' size={60} />,
      target: 3720,
      label: 'مركبة تم سحبها',
      duration: 2500
    },
    {
      id: 'workers',
      icon: <Users color='white' size={60} />,
      target: 874,
      label: 'عامل في الفريق',
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

    const currentRef = statsRef.current;

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
    <section className="stats-section" ref={statsRef}>
      <div className="stats-overlay"></div>
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="home-stat-number">
              {counters[stat.id].toLocaleString()}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

