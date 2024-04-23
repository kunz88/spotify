import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Routes.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


import './index.css'




ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

)
