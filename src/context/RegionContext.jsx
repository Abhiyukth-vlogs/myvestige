import React, { createContext, useContext, useState, useEffect } from 'react';

const RegionContext = createContext(null);

export const REGIONS = {
  INDIA: 'india',
  GLOBAL: 'global'
};

export const COUNTRIES = {
  india: [
    { code: 'IN', name: 'India (₹ INR)', currency: '₹', symbol: '₹', rate: 1.0, flag: '🇮🇳', phone: '1800 102 3424', branches: 'DLCP & State Branches (India)' }
  ],
  global: [
    { code: 'AE', name: 'United Arab Emirates (AED)', currency: 'AED', symbol: 'AED ', rate: 0.044, flag: '🇦🇪', phone: '+971 4 399 1234', branches: 'Dubai International Hub & UAE Centers' },
    { code: 'SA', name: 'Kingdom of Saudi Arabia (SAR)', currency: 'SAR', symbol: 'SAR ', rate: 0.045, flag: '🇸🇦', phone: '+966 11 234 5678', branches: 'Riyadh & Jeddah Country Centers' },
    { code: 'BD', name: 'Bangladesh (BDT)', currency: 'BDT', symbol: '৳ ', rate: 1.32, flag: '🇧🇩', phone: '+880 2 987 6543', branches: 'Dhaka Headquarters & Regional DLCP' },
    { code: 'GH', name: 'Ghana (GHS)', currency: 'GHS', symbol: 'GH₵ ', rate: 0.18, flag: '🇬🇭', phone: '+233 30 234 5678', branches: 'Accra Country Office' },
    { code: 'PH', name: 'Philippines (PHP)', currency: 'PHP', symbol: '₱ ', rate: 0.68, flag: '🇵🇭', phone: '+63 2 8234 5678', branches: 'Manila Country Center' },
    { code: 'CI', name: 'Ivory Coast (XOF)', currency: 'XOF', symbol: 'CFA ', rate: 7.25, flag: '🇨🇮', phone: '+225 27 20 23 45', branches: 'Abidjan Center' }
  ]
};

export const RegionProvider = ({ children }) => {
  const [region, setRegion] = useState(REGIONS.INDIA);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.india[0]);

  // When region toggles, update default country
  const switchRegion = (newRegion) => {
    setRegion(newRegion);
    if (newRegion === REGIONS.INDIA) {
      setSelectedCountry(COUNTRIES.india[0]);
    } else {
      setSelectedCountry(COUNTRIES.global[0]);
    }
  };

  const handleCountryChange = (countryCode) => {
    const list = region === REGIONS.INDIA ? COUNTRIES.india : COUNTRIES.global;
    const found = list.find(c => c.code === countryCode);
    if (found) setSelectedCountry(found);
  };

  const formatPrice = (priceInINR) => {
    const converted = Math.round(priceInINR * selectedCountry.rate);
    return `${selectedCountry.symbol}${converted.toLocaleString()}`;
  };

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToastMessage({ text: msg, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.showToast = (msg, type) => showToast(msg, type);
    }
  }, []);

  return (
    <RegionContext.Provider
      value={{
        region,
        switchRegion,
        selectedCountry,
        handleCountryChange,
        formatPrice,
        availableCountries: region === REGIONS.INDIA ? COUNTRIES.india : COUNTRIES.global,
        isIndia: region === REGIONS.INDIA,
        isGlobal: region === REGIONS.GLOBAL,
        showToast,
        toastMessage
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) throw new Error('useRegion must be used within a RegionProvider');
  return context;
};
