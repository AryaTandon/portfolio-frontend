import './components.css';
import { IContent } from '../App';

const CV = (content: IContent[]) => {
    const bgColors = ["red","yellow","green","blue","indigo","purple","pink"]
    const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    const bgColor2 = bgColors[Math.floor(Math.random() * bgColors.length)];
    const bgColor3= bgColors[Math.floor(Math.random() * bgColors.length)];
    const randomInt = Math.floor(Math.random() * 20) + 1;
    const randomInt2 = Math.floor(Math.random() * 20) + 1;
    const randomInt3 = Math.floor(Math.random() * 20) + 1;
    return (
       
        <section className="w-full pb-20 bg-gray-900 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                
              <div className={`lg:pt-${randomInt} w-full md:w-4/12 px-4 text-center`}>
                <div className={`relative flex flex-col min-w-0 break-words bg-gradient-to-t from-${bgColor}-300 via-${bgColor}-50 to-${bgColor}-20 hover:from-${bgColor}-400 hover:via-${bgColor}-100 hover:to-${bgColor}-20 animate-fade-in-down rounded-xl shadow-md w-full mb-8 shadow-lg rounded-lg`}>
                  <div className="px-12 py-8 flex-auto">
                    <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${bgColor}-400`}>
                      <i className="fas fa-award"></i>
                    </div>
                    <p className={`text-base text-left font-semibold mt-2 mb`}>{content[0] ? content[0].category.toUpperCase() : ""}</p>
                    <div className="h-4"></div>
                    <a target="_blank" rel="noopener noreferrer" href={content[0] ? content[0].link : ""} title="Go to site aryas-digipets">
                        <img src={content[0] ? content[0].linkpreview : ""} alt="" className="tw-border-none tw-align-middle tw-max-w-full tw-left-0 tw-top-0 tw-block tw-m-0 tw-p-0 tw-w-full tw-h-full"></img>
                    </a>
                    <div className="h-4"></div>
                    <h6 className="font-semibold">
                    {content[0] ? content[0].title : ""}
                    </h6>
                    <p className="text-xl mt-2 mb-4 text-gray-600">
                    {content[0] ? content[0].description : ""}
                    </p>
                    <div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[0] ? content[0].gitlinkfrontend : ""} title="Go to frontend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[0] ? content[0].gitlinkbackend : ""} title="Go to backend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                    </div>
                    <div className="-mt-3">
                        <div className="pl-4 pr-7 flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">FRONTEND</p>
                        </div>
                        <div className="pl-6 pr-4 flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">BACKEND</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`lg:pt-${randomInt2} w-full md:w-4/12 px-4 text-center`}>
                <div className={`relative flex flex-col min-w-0 break-words bg-gradient-to-t from-${bgColor2}-300 via-${bgColor2}-50 to-${bgColor2}-20 hover:from-${bgColor2}-400 hover:via-${bgColor2}-100 hover:to-${bgColor2}-20 animate-fade-in-down rounded-xl shadow-md w-full mb-8 shadow-lg rounded-lg`}>
                  <div className="px-12 py-8 flex-auto">
                    <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${bgColor2}-400`}>
                      <i className="fas fa-retweet"></i>
                    </div>
                    <p className={`text-base text-left font-semibold mt-2 mb`}>{content[1] ? content[1].category.toUpperCase() : ""}</p>
                    <div className="h-4"></div>
                    <a target="_blank" rel="noopener noreferrer" href={content[1] ? content[1].link : ""} title="Go to site aryas-digipets">
                        <img src={content[1] ? content[1].linkpreview : ""} alt="" className="tw-border-none tw-align-middle tw-max-w-full tw-left-0 tw-top-0 tw-block tw-m-0 tw-p-0 tw-w-full tw-h-full"></img>
                    </a>
                    <div className="h-4"></div>
                    <h6 className="font-semibold">
                    {content[1] ? content[1].title : ""}
                    </h6>
                    <p className="text-xl mt-2 mb-4 text-gray-600">
                    {content[1] ? content[1].description : ""}
                    </p>
                    <div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[1] ? content[1].gitlinkfrontend : ""} title="Go to frontend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[1] ? content[1].gitlinkbackend : ""} title="Go to backend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                    </div>
                    <div className="-mt-3">
                        <div className="pl-4 pr-7 flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">FRONTEND</p>
                        </div>
                        <div className="pl-6 pr-4 flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">BACKEND</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`pt-${randomInt3} w-full md:w-4/12 px-4 text-center`}>
                <div className={`relative flex flex-col min-w-0 break-words bg-gradient-to-t from-${bgColor3}-300 via-${bgColor3}-50 to-${bgColor3}-20 hover:from-${bgColor3}-400 hover:via-${bgColor3}-100 hover:to-${bgColor3}-20 animate-fade-in-down rounded-xl shadow-md w-full mb-8 shadow-lg rounded-lg`}>
                  <div className="px-12 py-8 flex-auto">
                    <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${bgColor3}-400`}>
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <p className={`text-base text-left font-semibold mt-2 mb`}>{content[2] ? content[2].category.toUpperCase() : ""}</p>
                    <div className="h-4"></div>
                    <a target="_blank" rel="noopener noreferrer" href={content[2] ? content[2].link : ""} title="Go to site aryas-digipets">
                        <img src={content[2] ? content[2].linkpreview : ""} alt="" className="tw-border-none tw-align-middle tw-max-w-full tw-left-0 tw-top-0 tw-block tw-m-0 tw-p-0 tw-w-full tw-h-full"></img>
                    </a>
                    <div className="h-4"></div>
                    <h6 className="font-semibold">
                    {content[2] ? content[2].title : ""}
                    </h6>
                    <p className="text-xl mt-2 mb-4 text-gray-600">
                    {content[2] ? content[2].description : ""}
                    </p>
                    <div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[2] ? content[2].gitlinkfrontend : ""} title="Go to frontend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                        <div className="px-9 flex inline-flex">
                        <a href={content[2] ? content[2].gitlinkbackend : ""} title="Go to backend on GitHub">
                        <img className="hover:opacity-70" src="https://cdn.iconscout.com/icon/free/png-512/github-109-438058.png" alt="GitHub logo" width="60" height="60"></img>
                        </a>
                        </div>
                    </div>
                    <div className="-mt-3">
                        <div className="pl-4 pr-7 flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">FRONTEND</p>
                        </div>
                        <div className="pl-6 pr-4 flex inline-flex">
                        <p className="text-base text-left font-semibold mt-2 mb">BACKEND</p>
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

export default CV;

