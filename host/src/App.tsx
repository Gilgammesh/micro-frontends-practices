import React from 'react'
import ReactDOM from 'react-dom'
// @ts-ignore
import Counter from 'remote/Counter'

import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <hr></hr>
    <Counter />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
