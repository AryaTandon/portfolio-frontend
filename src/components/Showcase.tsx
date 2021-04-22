import './components.css';
import { IContent } from '../App';

const Showcase = (content: IContent[]) => {
    const bgColors = [
        "from-red-300 via-red-50 to-red-20 hover:from-red-400 hover:via-red-100 hover:to-red-20",
        "from-yellow-300 via-yellow-50 to-yellow-20 hover:from-yellow-400 hover:via-yellow-100 hover:to-yellow-20",
        "from-green-300 via-green-50 to-green-20 hover:from-green-400 hover:via-green-100 hover:to-green-20",
        "from-blue-300 via-blue-50 to-blue-20 hover:from-blue-400 hover:via-blue-100 hover:to-blue-20",
        "from-indigo-300 via-indigo-50 to-indigo-20 hover:from-indigo-400 hover:via-indigo-100 hover:to-indigo-20",
        "from-purple-300 via-purple-50 to-purple-20 hover:from-purple-400 hover:via-purple-100 hover:to-purple-20",
        "from-pink-300 via-pink-50 to-pink-20 hover:from-pink-400 hover:via-pink-100 hover:to-pink-20"
        // Can't just do this...
        // "red","yellow","green","blue","indigo","purple","pink"
        // ...and use from-${bgColor}-300 in the classNames!
        // This is because Tailwind's PurgeCSS doesn't preserve classes which use string interpolation
        // See here for more: https://stackoverflow.com/questions/66096170/tailwindcss-missing-colors-in-production-vs-development-laravel-jetstream
    ];
    const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const randomInt = Math.floor(Math.random() * 20) + 1;
    return (
       
        <section className="w-full pb-20 bg-gray-900 -mt-24">
          <div className="container mx-auto">
            <div className="flex flex-wrap">

              <div className={`lg:pt-${randomInt} w-full ml-50 md:w-12/12 px-4 pt-10 text-center`}>
                <div className={`relative flex flex-col min-w-0 break-words bg-gradient-to-t ${bgColor} animate-fade-in-down rounded-xl shadow-md w-full mb-8 shadow-lg rounded-lg`}>
                  <div className="px-12 py-8 flex-auto">
                    <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${bgColor}-400`}>
                      <i className="fas fa-retweet"></i>
                    </div>
                    <div className="h-10"></div>
                    <div className="flex justify-center">
                        <p className={`text-2xl text-left font-semibold mt-2 mb`}>{content[0] ? content[0].category.toUpperCase() : ""}</p>
                    </div>
                    <div className="h-4"></div>
                    <div className="flex justify-center">
                        <a target="_blank" rel="noopener noreferrer" href={content[0] ? content[0].link : ""} title="Go to site aryas-digipets">
                            <img src={content[0] ? content[0].linkpreview : ""} alt="" className="tw-border-none tw-align-middle tw-max-w-full tw-left-0 tw-top-0 tw-block tw-m-0 tw-p-0 tw-w-full tw-h-full" width="600" height="600"></img>
                        </a>
                    </div>
                    <div className="h-10"></div>
                    <h6 className="font-semibold">
                    {content[0] ? content[0].title : ""}
                    </h6>
                    <p className="text-xl mt-2 mb-4 text-gray-600">
                    {content[0] ? content[0].description.split('.')[0] : ""}.
                    <br />
                    {content[0] ? content[0].description.split('.')[1] : ""}
                    </p>
                    <div className="h-2"></div>
                    <div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[0] ? content[0].gitlinkfrontend : ""} title="Go to frontend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                        
                    </div>
                    <div className="-mt-3">
                        <div className="flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">FRONTEND</p>
                        </div>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>
        // {/* // <div className=" w-full lg:max-w-full lg:flex">
        // //     <div className={`border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gradient-to-t from-${bgColor}-200 via-${bgColor}-100 to-${bgColor}-200 rounded-xl shadow-md p-4 flex flex-col justify-between leading-normal`}>
        // //         <div className="mb-8">
        // //             <p className={`text-sm text-${bgColor}-700 flex items-center`}>
        // //                 {content.category}
        // //     </p>
        // //             <div className={`text-${bgColor}-700 font-bold text-xl mb-2`}>{content.title}</div>
        // //             <p className={`text-${bgColor}-700 text-base`}>{content.description}</p>
        // //         </div>
        // //     </div>
        // // </div>
        //         // {/* <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        //         //     <p>{content.title}</p>
        //         //     <p>{content.description}</p>
        //         // </div> */} 
    )
}

export default Showcase;


