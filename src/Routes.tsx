import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LayoutAdmin from './layout/Admin'
import LayoutWebsite from './layout/Website'
import AddProducts from "./pages/admin/product/AddProduct"
import AdminProduct from './pages/admin/product/AdminProduct'
import EditProducts from "./pages/admin/product/EditProduct"
import HomePage from './pages/HomePage'


const Routers = (props: any) => {
    return (
        <>
            <Router>
                <Route>
                    <LayoutWebsite>
                        <Route exact path="/">
                            <HomePage {...props} />
                        </Route>
                        <Route path="*">

                        </Route>
                    </LayoutWebsite>
                </Route>
                <Switch>
                    <Route path="/admin/:path?">
                        <LayoutAdmin>
                            <Route exact path="/admin/product">
                                <AdminProduct />
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AddProducts />
                            </Route>
                            <Route exact path="/admin/product/edit/:id">
                                <EditProducts />
                            </Route>
                        </LayoutAdmin>
                    </Route>

                </Switch>
            </Router>
        </>
    )
}
export default Routers