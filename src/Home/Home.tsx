import DownloadButton from "./DownloadButton"
import Picture from "./Picture"

const Home = () => {
    return(
        <div className="container mx-auto flex items-center gap-2 h-screen w-screen bg-secondary rounded-b-lg">
            <div className="w-2/3 p-2">
                <h1 className="text-9xl drop-shadow-xl">
                    Chouchane Roman Abderrahmane    
                </h1>
                <DownloadButton />
            </div>
            <div className="hexa-shadow">
                <Picture src={process.env.PUBLIC_URL + '/MyPhoto.png'} title="My Photo" credit="Roman"/>
            </div>
        </div>
    )
}

export default Home