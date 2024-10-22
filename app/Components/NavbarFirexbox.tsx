///dynamic route
import Link from "next/link"  
export default function NavbarFirebox() { 
    return(
        
        <div>
         <nav className="flex bg-blue-900 w-1700 h-9">

        <div className="flex bg-red-800 w-3/5 h-15">   </div>
         <div className="= bg-green-700 w-4/5 h-9 text-black"><p>Header from NavbarFirefox:   </p></div>
         <div className="= bg-yellow-700 justifycontent-right w-3/5 h-9"><p>  2nd colunm from NavbarFirefox:</p></div>
                </nav>
       
       
   
      </div>
      )
    

    //   // <p>Header:</p>
    //   <Link href="/">Home page</Link> <br/>       
    //   <Link href="/about">About</Link> <br/>      
    //   <Link href="/carrer">Career Page</Link> <br/>
}