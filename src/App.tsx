import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePageLayout from './Pages/HomePage/HomePageLayout';
import HomePage from './Pages/HomePage/HomePage';
import GenrePage from './Pages/Genres/GenrePage';
import MoviePage from './Pages/MoviePage';
import DiscoverPage from './Pages/Discover/DiscoverPage';
import DiscoverPageLayout from './Pages/Discover/DiscoverPageLayout';
import CelebritiesPage from './Pages/Celebrities/CelebritiesPage';
import DiscoverMovies from './Pages/Discover/DiscoverMovies';
import WatchListPage from './Pages/WatchListPage';
import CelebrityLayout from './Pages/Celebrities/CelebrityLayout';
import CelebrityDetails from './Pages/Celebrities/CelebrityDetails';
import GenreLayout from './Pages/Genres/GenreLayout'
import GenreMovies from './Pages/Genres/GenreMovies';
import SearchPage from './Pages/HomePage/SearchPage';
const router = createBrowserRouter([
  {path:'/', element: <HomePageLayout/>, children: [
    {index: true, element: <HomePage/>},
    {path: '/search', element: <SearchPage/>}
  ]},
  {path: '/discover', element: <DiscoverPageLayout/>, children: [
    {index: true, element: <DiscoverPage/>},
    {path: ':option', element: <DiscoverMovies/>}
  ]},
  {path: '/celebrities', element: <CelebrityLayout/>, children: [
    {index: true, element: <CelebritiesPage/>},
    {path: ':actor', element: <CelebrityDetails/>}
  ]},
  {path: '/genres', element: <GenreLayout />, children: [
    {index: true, element: <GenrePage />},
    {path: ':genreId', element: <GenreMovies/>}
    
  ]},
  {path: '/watchlist', element: <WatchListPage/>},
  {path: 'movie/:movie', element: <MoviePage/>},
]);


function App() {

  return <RouterProvider router={router}/>
}

export default App
