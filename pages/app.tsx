import React from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'
import SampleBox from './SampleBox'
import Model from './Model'
import Controls from '../utils/Controls'
import { Suspense } from 'react'

import { Environment } from '@react-three/drei'

export default function App() {
  return (
    <Container>
      <Canvas>
        {/* <SampleBox /> */}
        <Controls />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`