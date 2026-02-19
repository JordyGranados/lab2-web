import { useState, useEffect } from 'react'

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  useEffect(() => {
    const getFetch = async () => {
      setState(s => ({ ...s, isLoading: true }))
      try {
        const resp = await fetch(url)
        if (!resp.ok) throw new Error('Network response was not ok')
        const data = await resp.json()
        setState({ data, isLoading: false, hasError: null })
      } catch (err) {
        setState({ data: null, isLoading: false, hasError: err.message || true })
      }
    }

    getFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
