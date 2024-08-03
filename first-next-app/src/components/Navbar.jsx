'use client' // client component, not server rendered
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Box } from "@mui/material";

function NavBar() {
 const path = usePathname(); // hook to check current path
 return (
 <nav className="NavBar"
 style={{backgroundColor: '#09193b', color: '#14bbe5'}}>
 <ul className="menu">

 <li><Link href="/"> Home </Link></li>

 <li><Link href="/CreateAccount" className={path.startsWith('/createaccount') ?
'active' : null}>Create Account</Link></li>

 <li><Link href="/Profile" className={path.startsWith('/profile') ?
'active' : null}>Profile</Link></li>

 </ul>
    <Box display={"flex"} alignItems={"center"}>
    </Box>
 </nav>
 );
};
export default NavBar;
