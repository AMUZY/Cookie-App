


function NavLinks (props){
    return(
        <li className="hover:underline">
            <NavLink to = {props.href} > {props.name} </NavLink>
        </li>
    )
}




export default NavLinks