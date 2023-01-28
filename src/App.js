import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route exact path='/YourTube/' element={<Feed />} />
        <Route path='/YourTube/video/:id' element={<VideoDetail />} />
        <Route path='/YourTube/channel/:id' element={<ChannelDetail />} />
        <Route path='/YourTube/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
