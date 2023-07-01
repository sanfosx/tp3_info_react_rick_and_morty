import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import ListCharacters from './components/Characters/ListCharacters.jsx'
import CharacterDetails from './components/Characters/CharacterDetails.jsx'
import ListEpisodes from './components/Episodes/ListEpisodes.jsx'
import EpisodeDetails from './components/Episodes/EpisodeDetails.jsx'
import ListLocation from './components/Locations/ListLocation.jsx'
import LocationDetails from './components/Locations/LocationDetails.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<ListCharacters/>}></Route>
          <Route path="/characters" element={<ListCharacters/>}></Route>
          <Route path="/character/:id" element={<CharacterDetails/>}></Route>
          <Route path="/episodes" element={<ListEpisodes/>}></Route>
          <Route path="/episode/:id" element={<EpisodeDetails/>}></Route>
          <Route path="/locations" element={<ListLocation/>}></Route>
          <Route path="/location/:id" element={<LocationDetails/>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
    </React.StrictMode>
    )
