import cone1 from './img/cone1.png'
import logo1 from './img/logo1.png'
import fbLogo from './img/fb.png'
import twitLogo from './img/twit.png'
import whatsLogo from './img/whats.png'
import instaLogo from './img/insta.png'


const Layout = ({children}) => {
  return (
    <div id="app-background" className="app-background">
      <div id="app-layout" className="app-layout">
      
        <header id="app-header" className="app-header">    
        <img className="logo-header" src={cone1}/>
        <img className="logo-header" src={logo1}/>    
        </header>  

        <main id="app-main" className="app-main">
          {children}
        </main>

        <footer id="app-footer" className="app-footer">    
        <img className="logo-footer" src={twitLogo} />
        <img className="logo-footer" src={fbLogo} />
        <img className="logo-footer" src={whatsLogo} />
        <img className="logo-footer" src={instaLogo} />                        
        </footer>       
      
      </div>        
    </div>            
  )
}

export default Layout