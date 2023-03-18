"use client";
import Link from 'next/link'
import axios from "axios"
import Image from 'next/image';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function Landing() {

/*  <Image
                src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                width={500}
                height={500}
                alt="Imagem"
            />
   */
const { isLoading, error, data} =useQuery('repoData', async () =>
     await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=86a47f147df3b21061aaf12f619122fd&language=en-US&page=1")
    .then(response => {
    console.log(response.data)
      return response.data.results
    }),
    {
      retry: 5, //Se a requisição falhar, ele vai tentar mais 5 vezes
      refetchOnWindowFocus: false, //Caso true, ele recarrega o fecth de dados toda vez que o usuario volta pra aba
      staleTime: 1000 * 10   
    }
   )
 
   if (isLoading) return <h1>Loading...</h1>
 
   if (error) return <h1>Algo deu errado</h1>

    return(
        <div>
            <h1>Landing</h1>
            <Link href={'/'}>Home</Link>    
            {
              data.map(x => {
                return(
                  <Image
                src={`https://image.tmdb.org/t/p/w500/${x.poster_path}`}
                width={500}
                height={500}
                alt="Imagem"
            />
                )
              })
            }
              
        </div>
    )
}