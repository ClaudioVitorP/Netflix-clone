import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

export function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}