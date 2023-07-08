import { Suspense ,lazy} from 'react';
import {  Route, RouterProvider,createBrowserRouter, createRoutesFromElements,Navigate} from 'react-router-dom';
import { routes } from "./routes/routes";
import SuspenseLoader from './components/common/SuspenseLoader';


const  Errorcomponent =lazy(() => import ('./components/common/ErrorComponent'));


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>} />
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<Errorcomponent />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<Errorcomponent />} />
        </Route>
        <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)


function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
       <RouterProvider router={router} />
    </Suspense>
   
   
  );
}

export default App;
