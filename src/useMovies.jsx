import { useEffect, useState } from "react";

const KEY = 'f5fcf426'
export function useMovies ( query, callback ) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError] = useState('')

    useEffect( () => {
        callback?.()

        const controller = new AbortController()
    
        setIsLoading(true)
        setError('')
    
        const getMovies = async () => {
         try{ const res  = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {signal: controller.signal})
              if (!res.ok) throw new Error('something went wrong')
              const json = await res.json()
              if (json.Response === 'False') throw new Error('Movie not found')
              setMovies(json.Search)
              setError('')
            } catch(err){
              if(err.name !== 'AbortError'){
                console.log(err.message)
                setError(err.message)
              }
            } finally {
              setIsLoading(false)
            }
        }
        if(query.length < 3){
          setMovies([])
          setError('')
          return
        }
    
        // handleCloseMovie()
        getMovies()
    
        return () => controller.abort()
      
      }, [query])
      
      return {movies, isLoading, error}
    
}