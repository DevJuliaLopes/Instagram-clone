import './styles.css'
import { Story } from '../storyes'
import {Post} from '../post'
import { Sugestão } from '../sugeston'


export function Layout() {
    return (
        <>
        <div className="centro">
            <div className="primeiracoluna" style={{gridarea: "fisrtColumn"}}>

            <div className="box" style={{margin: "30px 0"}}>
            <Story />
            </div>
        
        <div className="posts">
           <Post />
        </div>
            </div>
        

        <div style={{gridarea: "secondColumn"
        }}>
            <div className="sugestaao">
           <Sugestão />
           </div>
        </div>
            
        </div>
        
        
        
        
        
        
        </>
    )
}