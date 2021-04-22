import './components.css';

const Header = () => {
    return (
        // <div className="w-full py-6 px-10 bg-gradient-to-t from-blue-300 via-blue-200 to-blue-300 text-center font-bold text-blue-700">
        //     <h1>
        //     Arya Tandon's CV
        //     </h1>
        // </div>
        <>
        <div className="w-full relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "100vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://i.imgur.com/l0Mp6Qp.jpg')"
              }}>
            <span id="blackOverlay" className="absolute top-0 left-0 w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12 animate-fade-in-down">
                    <h1 className="text-white font-semibold text-5xl">
                      Arya Tandon's Portfolio
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      A selection of coding and technical projects completed 
                      over the course of my software engineering training 
                      with Academy
                    </p>
                    <p className="mt-4 text-lg text-gray-300">
                      Most projects are fullstack, built  
                      via the PERN stack — React frontend, Express &amp; 
                      Node.js backend, and hosted PostgreSQL databases.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
        </div>
        </>
    )
}

export default Header;

