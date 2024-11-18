import { Model } from "./Model"
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <div className="App" style={{justifyItems: "center"}}>
      <h1>
        Ivy's Camera
      </h1>
      <Canvas style={{width: '1500px', height: '900px'}}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App