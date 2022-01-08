import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from 'react-router-dom'
import BillForm from '../pages/billForm'

const AppRouter = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <BillForm />,
    },
  ])
  return element
}

export default AppRouter
