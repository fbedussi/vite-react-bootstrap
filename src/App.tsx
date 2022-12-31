import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

function App() {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div></div>
      <Title>{t('title')}</Title>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
