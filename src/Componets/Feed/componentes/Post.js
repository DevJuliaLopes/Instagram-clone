import './Post.css'

function posts(props){
    return(
        <div className="Posts">
            <div className="menu-superior">
                <div className="imgPerfil">
                {props.ImgPerfil}

                </div>
                <div className="namePerfil">
                  {props.nomePerfil}

                </div>
                <div className="menuzinho">
                    
                </div>
            </div>
            <div className="contPost">
            <img src={props.imagemPost}/>
                
            </div>
        </div>
    )

}