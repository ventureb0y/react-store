import { Link } from "react-router-dom";
import { routes } from "../../shared/routes/routes";

export function Header () {
    return (
        <header className="container flex justify-between mx-auto p-5 text-black font-medium">
            <Link to={routes.home} className="text-lg">
                react-store
            </Link>
            <ul className="flex gap-20">
                <li><Link to={routes.home}>Store</Link></li>
                <li><Link to={routes.cart}>Cart</Link></li>
            </ul>
        </header>   
    )
}