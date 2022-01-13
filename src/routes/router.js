import { useRoutes } from 'react-router-dom'
import BillForm from '../pages/BillForm'
import InvoiceUI from '../pages/InvoiceUI/InvoiceUI'
import SearchUI from '../pages/SearchUI'

const AppRouter = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <BillForm />,
    },
    {
      path: '/preview',
      element: <InvoiceUI />,
    },
    {
      path: '/search',
      element: <SearchUI />,
    },
  ])
  return element
}

export default AppRouter
