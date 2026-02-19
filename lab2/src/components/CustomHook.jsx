import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(
        `https://swapi.dev/api/people/${counter}/`
    )

    const info = data
        ? {
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender,
        }
        : {}

    return (
        <>
            <h1>Información de Personaje (SWAPI)</h1>
            <hr />
            <h2>{data?.name}</h2>
            {isLoading && <Loading />}
            {!isLoading && hasError && (
                <div className="alert alert-danger">Error: {hasError}</div>
            )}
            {!isLoading && !hasError && data && (
                <Card id={counter} name={data.name} info={info} />
            )}
            <div style={{ marginTop: 12 }}>
                <button className='btn btn-primary' onClick={() => decrement()} >Anterior</button>
                <button style={{ marginLeft: 8 }} className='btn btn-primary' onClick={() => increment()} >Siguiente</button>
            </div>
        </>
    )
}