import React from 'react'

export const Card = ({ id, name, info = {} }) => {
    const entries = Object.entries(info)
    return (
        <section style={{ minHeight: 120 }}>
            <h2 className="text-capitalize">#{id} - {name}</h2>
            <div>
                {entries.map(([key, value]) => (
                    <div key={key} style={{ marginBottom: 6 }}>
                        <strong>{key.replace(/_/g, ' ')}:</strong> {String(value)}
                    </div>
                ))}
            </div>
        </section>
    )
}