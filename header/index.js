import {AiOutlineSearch} from 'react-icons/ai'
import {HiHome} from 'react-icons/hi'
import {BsFillChatLeftFill} from 'react-icons/bs'
import {BsPlusCircle} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import {IconContext} from 'react-icons'
import './style.css'

export function Header() {
    return (
        <header className="header">
            <div className="container">
            <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

            <div className="input-fake">
            <IconContext.Provider value={{ color: '#8e8e8e' }}>
            <AiOutlineSearch />

            </IconContext.Provider>

           <input placeholder="pesquisar" />
                 
            </div>

            <div className="menu-icons" >
               
                  <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <HiHome />
                        </div>

                        
                        <div>
                            <BsFillChatLeftFill />
                        </div>

                        <div>
                            <BsPlusCircle />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div className="coracao">
                            <FiHeart />
                        </div>
                        

                    </IconContext.Provider>
                  
            </div>
            <img className="img-users" src="https://epipoca.com.br/wp-content/uploads/2021/04/Seu-Sirigueijo-e-Gary-em-Bob-Esponja-Calca-Quadrada-Reproducao.jpg" />
            </div>



            
        </header>
    )
}