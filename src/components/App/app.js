import React from 'react';
import {Box} from "@mui/material";
import {Routes, Route} from 'react-router-dom'
import Main from "../main/main";
import Channel from "../channel/channel";
import VideoDetail from "../video-detail/video-detail";
import Search from "../search/search";
import Navbar from "../navbar/navbar";

const App = () => {
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/channel/:id' element={<Channel />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/search/:id' element={<Search />} />



            </Routes>
        </Box>
    )
}

export default App
