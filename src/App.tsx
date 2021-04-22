import React, { useEffect, useState } from 'react';
import publicIp from "public-ip";
import './App.css';
import Header from './components/Header';
import CV from './components/CV';
import Showcase from './components/Showcase';
import Footer from "./components/Footer";

export interface IContent {
  id: number;
  title: string;
  link: string;
  linkpreview: string;
  gitlinkfrontend: string;
  gitlinkbackend: string;
  description: string;
  category: string;
};

function App() {
    const [CVContent, setCVContent] = useState<IContent[]>([]);

    const fetchCVContent = async () => {
        try {
        const res = await fetch(process.env.REACT_APP_BACKEND_URL!);
        const jsonData = await res.json();
        setCVContent(jsonData)
        } catch(err) {
            console.error(err.message)
        }
    }

    const postPageViewAndIP = async (date: Date) => {
        try {
        const timestamp = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear() +' '+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log(timestamp);
        const clientIP = await publicIp.v4({
            fallbackUrls: [ "https://ifconfig.co/ip" ]
        });
        console.log(clientIP);
        await fetch(process.env.REACT_APP_BACKEND_URL!, {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({timestamp, clientIP}),
        });
        }
        catch (err) {
        console.error(err.message)
        }
    }
    
    useEffect(() => { 
        fetchCVContent();
        postPageViewAndIP(new Date());
     }, [])

    // CVContent.map(item => {
    //     item
    // })

    const ContentArr: IContent[][] = [[], [], []];
    const pushToArray = () => {
        for (const obj of CVContent) {
            if (obj.id <= 3) {
                ContentArr[0].push(obj)
            } else if (obj.id <= 6) {
                ContentArr[1].push(obj)
            } else {
                ContentArr[2].push(obj)
            }
        }
        console.log(ContentArr)
    };

    pushToArray();

    return (
        <div className="App-layout">
            <Header />
            <div>
                {ContentArr.map((item, idx) => idx<2 ? <CV key={idx} {...item} /> : <Showcase key={idx} {...item} />)}
            </div>
            <Footer />
        </div>
    );
}

export default App;
