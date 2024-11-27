// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/core";
import AudioFileSelect from './views/AudioFileSelect'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'

function App() {
  return (
    <>
      <div>Sound To Text</div>
      <AudioFileSelect />
    </>
  )
}

export default App
