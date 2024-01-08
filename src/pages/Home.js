import React from "react";
import { DrawerAppBar } from "../components";
import Toolbar from '@mui/material/Toolbar';

function Home() {
    return (
        <React.Fragment>
            <DrawerAppBar/>
            <h1>SILVA tuning</h1>
            <p>こんにちは。</p>
        </React.Fragment>
    );
}

export default Home;