// import {RouterPovider} from 'react-router'
import AppRoutes from './AppRoutes'
import { AuthProvider } from './features/auth/auth.context'
import "./features/shared/global.scss"

const App = () => {
  return (
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
  )
}

export default App
