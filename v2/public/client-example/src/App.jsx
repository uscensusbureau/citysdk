import { useState, useEffect, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import citysdk from '../../census/census'

const getSompn = new Promise((resolve, reject) =>
    citysdk(
        {
            vintage: 2016,
            geoHierarchy: {
                state: {
                    lat: 38.8482,
                    lng: -76.932,
                },
                //state: null,
                county: '*',
            },
            sourcePath: ['acs', 'acs5', 'profile'],

            values: ['DP03_0007E', 'DP03_0007PE'],
            geoResolution: '500k',
        },
        (err, res) => {
            if (err) {
                console.warn('ERROR:', err)
                reject(JSON.stringify(err, null, 2))
            }
            //console.log(res)
            resolve(JSON.stringify(res, null, 2))
        }
    )
)

function App() {
    const [count, setCount] = useState(0)
    const [payload, setPayload] = useState('LOADING ...')

    useEffect(() => {
        getSompn.then(setPayload)
    }, [])
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React + CitySDK</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <pre style={{ fontSize: '1rem' }}>{payload}</pre>
        </div>
    )
}

export default App
