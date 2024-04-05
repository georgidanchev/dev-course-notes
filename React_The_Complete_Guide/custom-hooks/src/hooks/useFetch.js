import { useEffect, useState } from "react"

export function useFetch(fetchFn, initialValue) {
  // The state updates the component
  // where the custom hook is being used
  const [fetchedData, setFetchedData] = useState(initialValue)
  const [isFetching, setIsFetching] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      try {
        const data = await fetchFn()
        setFetchedData(data)
      } catch (_error) {
        setError({ message: _error.message || "Failed to fetch data." })
      }
      setIsFetching(false)
    }
    fetchData()
  }, [fetchFn])

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  }
}
