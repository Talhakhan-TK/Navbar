///dynamic route
import Link from "next/link"  
export default function Navbar() { 
    return(
        
        <div className="bg-white text-purple-700 font-bold">
            <p>Header:</p>
            <Link href="/">Home page</Link> <br/>       
      <Link href="/about">About</Link> <br/>      
      <Link href="/carrer">Career Page</Link> <br/>
   
      </div>
      )
    
}