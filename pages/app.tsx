import React from 'react'
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
// import styled from 'styled-components'
import Controls from '../utils/Controls'
import Model from '../components/Model'
import { Environment } from '@react-three/drei'

export default function App() {
  return (
    <div>
      <Canvas>
        <Controls />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
    </div>
  )
}


// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
// `

