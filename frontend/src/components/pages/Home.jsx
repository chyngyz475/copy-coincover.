import React from 'react';

const Home = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '700', 
          color: '#0E171B', 
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Digital assets<br />
          <span style={{ color: '#2563eb' }}>Secured + protected</span>
        </h1>
        
        <p style={{ 
          fontSize: '20px', 
          color: '#64748b', 
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px auto'
        }}>
          We protect digital assets for institutions and their customers.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <button style={{
            background: '#0E171B',
            color: 'white',
            padding: '16px 32px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
