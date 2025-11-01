'use client'
import { useState } from 'react'

export default function Home() {
  const [code, setCode] = useState('print("Hello World")')
  const [obfuscated, setObfuscated] = useState('')
  const [loading, setLoading] = useState(false)

  const obfuscateCode = async () => {
    setLoading(true)
    // We'll add the API call next
    setTimeout(() => {
      setObfuscated('// Obfuscation coming soon...')
      setLoading(false)
    }, 1000)
  }

return (
  <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
    <h1 style={{color: '#00ff00', textAlign: 'center'}}>
      🔐 GreatObfLua - Ultimate Lua Obfuscator
    </h1>
    
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
      {/* Input Section */}
      <div>
        <h3>Input Lua Code:</h3>
        <textarea 
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: '100%',
            height: '300px',
            background: '#1a1a1a',
            color: '#00ff00',
            border: '1px solid #333',
            borderRadius: '5px',
            padding: '10px',
            fontFamily: 'monospace'
          }}
        />
        <button 
          onClick={obfuscateCode}
          disabled={loading}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            background: '#00ff00',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Obfuscating...' : '🔒 OBFUSCATE'}
        </button>
      </div>

        {/* Output Section */}
        <div>
          <h3>Obfuscated Code:</h3>
          <textarea 
            value={obfuscated}
            readOnly
            style={{
              width: '100%',
              height: '300px',
              background: '#1a1a1a',
              color: '#00ff00',
              border: '1px solid #333',
              borderRadius: '5px',
              padding: '10px',
              fontFamily: 'monospace'
            }}
          />
          <button 
            onClick={() => navigator.clipboard.writeText(obfuscated)}
            disabled={!obfuscated}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              background: '#007acc',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            📋 Copy
          </button>
        </div>
      </div>
    </div>
  )
}

