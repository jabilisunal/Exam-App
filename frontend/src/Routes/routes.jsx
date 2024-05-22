import SiteRoot from "../Pages/site/SiteRoot"
import AdminRoot from "../Pages/admin/AdminRoot"
import Basket from "../Pages/site/Basket/Basket"
import Detail from "../Pages/site/Detail/Detail"
import Home from "../Pages/site/Home/Home"
import Add from "../Pages/admin/Add/Add"
import Wishlist from "../Pages/admin/Wishlist/Wishlist"

const ROUTES=[
    {
        path: "/",
        element: <SiteRoot />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "/basket",
            element: <Basket />,
          },{
            path:"/detail/:id",
            element: <Detail />,
          }
        ],
      },{
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"add",
                element:<Add/>
            },{
                path:"wishlist",
                element:<Wishlist/>
            }
        ]
    }
]
export default ROUTES