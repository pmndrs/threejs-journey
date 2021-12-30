// Original and the models by Bruno Simon: https://threejs-journey.com

import { render } from 'react-dom'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import App from './App'

render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Loader />
    </React.StrictMode>,
  document.getElementById('root'),
)
