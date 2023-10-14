import { motion } from "framer-motion"
import DownloadButton from "./DownloadButton"
import Picture from "./Picture"

const Home = () => {
    return(
        <div className="container mx-auto flex items-center gap-2 h-screen w-screen bg-secondary-1 rounded-b-lg">
            <div className="w-2/3 p-5">
                <h1 className="text-9xl drop-shadow-xl">
                    Chouchane Roman Abderrahmane    
                </h1>
                <DownloadButton />
            </div>
            <motion.div className="hexa-shadow"
                animate={{
                    scale: [1.1, 1.2, 1.1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity
                }}
            >
                <Picture src={process.env.PUBLIC_URL + '/MyPhoto.png'} title="My Photo" credit="Roman"/>
            </motion.div>
        </div>
    )
}

export default Home