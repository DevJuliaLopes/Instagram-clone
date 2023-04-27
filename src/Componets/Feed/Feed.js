import './Feed.css'
import Post from './componentes/Post'

import imgExemplo01 from './componentes/imagem/cachorro.jpg';
import imgExemplo02 from './componentes/imagem/cachorrinho.jpg';

export default function Feed()
{
    return (
        <div className="Feed">
            <Post nomePerfil='Dudu' ImgPerfil={imgExemplo01}/>
            <Post nomePerfil='Lulu' imagemPost={imgExemplo02}/>
            <Post nomePerfil='Bugu' imagemPost={imgExemplo01}/>
            <Post nomePerfil='Tutu' imagemPost={imgExemplo02}/>
            <Post nomePerfil='Bagu' imagemPost={imgExemplo01}/>

        </div>

    )
}