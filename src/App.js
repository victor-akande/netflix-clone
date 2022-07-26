import './App.css'
import Row from './components/Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGNALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Upcoming Movies" fetchURL={requests.fetchUpcoming} />
      <Row title="Popular" fetchURL={requests.fetchPopular} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedeyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
    </div>
  )
}

export default App
