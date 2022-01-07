import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutAdmin from "./layout/Admin";
import LayoutWebsite from "./layout/Website";
import AddCategory from "./pages/admin/category/AddCategory";
import AdminCategory from "./pages/admin/category/AdminCategory";
import EditCategory from "./pages/admin/category/EditCategory";
import AddProducts from "./pages/admin/product/AddProduct";
import AdminProduct from "./pages/admin/product/AdminProduct";
import EditProducts from "./pages/admin/product/EditProduct";
import Error404Page from "./pages/error404Page";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";

const Routers = (props: any) => {
    return (
        <>
            <Router>
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
                            <Route exact path="/admin/category">
                                <AdminCategory />
                            </Route>
                            <Route exact path="/admin/category/add">
                                <AddCategory />
                            </Route>
                            <Route exact path="/admin/category/edit/:id">
                                <EditCategory />
                            </Route>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite>
                            <Switch>
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route exact path="/:id">
                                    <ProductDetail />
                                </Route>
                                <Route path="*">
                                    <Error404Page />
                                </Route>
                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};
export default Routers;
