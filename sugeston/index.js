import './style.css'

export function Sugestão(){
    return(
        <div className="csugestao">

        <div className="hsugest">
            <img className="plakton" src="https://epipoca.com.br/wp-content/uploads/2021/04/Seu-Sirigueijo-e-Gary-em-Bob-Esponja-Calca-Quadrada-Reproducao.jpg"/>
            <div className="informac">
                <div className="inf">
                    <span>SiriGueijo</span>
                    <p>siris</p>
                </div>
                <button className="escolher">Mudar</button>
            </div>
        </div>
        <div className="hmain-sug">
            <p>Sugestões para você</p>
            <span>Ver tudo </span>
        </div>
        <div className="usersug">
            <div className="infor">
            <img className="plakton" src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/11/legiao_bic4zlZuJSUH.jpg.webp"/>
            <div className="infr"><span>Plakinton</span><p>seguido por Bob Esponja</p>
            </div>
            <button className="segui">Seguir</button>
            </div>
        </div>

        <div className="usersug">
            <div className="infor">
            <img className="plakton" src="http://3.bp.blogspot.com/-Ay4dgrMm_6c/U8LEGRBy_LI/AAAAAAAANwA/dACaiD2HT6w/s1600/thumbnail_43432.png"/>
            <div className="infr"><span>ClarencioOtimista</span><p>seguido por Sandyy</p>
            </div>
            <button className="segui">Seguir</button>
            </div>
        </div>

        <div className="usersug">
            <div className="infor">
            <img className="plakton" src="https://uploads.metropoles.com/wp-content/uploads/2021/12/20102920/Homem-Aranha-Sem-volta-para-casa-600x400.jpg"/>
            <div className="infr"><span>Homem Aranha</span><p>seguido por Bob Esponja, Gumball</p>
            </div>
            <button className="segui">Seguir</button>
            </div>
        </div>

        <div className="usersug">
            <div className="infor">
            <img className="Darwin" src="https://img4.hulu.com/user/v3/artwork/fe2fca1b-998c-4323-80ba-1bf4c6b4f17e?base_image_bucket_name=image_manager&base_image=aa7074f4-c986-403c-9084-f530f2e38ff8&size=458x687&format=jpeg"/>
            <div className="infr"><span>Darwin</span><p>seguido por Gumball</p>
            </div>
            <button className="segui">Seguir</button>
            </div>
        </div>

        <footer className="sugestoes">
        <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

        <p>&copy; 2021 INSTAGRAM FROM META</p>
        </footer>
        </div>
    )
}