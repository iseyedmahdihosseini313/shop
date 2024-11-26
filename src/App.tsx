import { BrowserRouter, Route, Routes } from 'react-router'
import { Home, Menu } from './components'
import React from 'react'
const App = () => {
    const routes: {
        title: string
        path: string
        component: React.JSX.Element
    }[] = [{ component: <Home />, path: '/', title: 'home' }]
    return (
        <div className='min-h-screen min-w-[100vw]'>
            <BrowserRouter>
                <Routes>
                    {routes.map(route => (
                        <Route
                            key={route.title}
                            path={route.path}
                            element={route.component}
                        />
                    ))}
                </Routes>
                <Menu />
            </BrowserRouter>
        </div>
    )
}

export default App
