import LandingImage from "../assets/landing.png"
import appDownloadImnage from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Dig in with StrawHats
            </h1>
            <span className="text-xl">
                Food is just a Click away
            </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={LandingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order Takeaway even Faster!
                </span>
                <span>
                    Download the LuffyEats App for faster ordering and personalised recommadations
                </span>
                <img src={appDownloadImnage}/>
            </div> 
        </div>
    </div>
  )
}

export default HomePage;