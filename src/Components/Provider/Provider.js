import React,{useState} from 'react';
import MainContent from './providerContext';
import img1 from '../../images/pic1.jpg';
import img2 from '../../images/pic2.jpg';
import img3 from '../../images/pic3.jpg';
import img4 from  '../../images/pic4.jpg';
import img5 from '../../images/pic5.jpg';
import img6 from '../../images/pic6.jpg';

const MainProvider = ({children})=>{
    
    const [active,setActive] = useState(0);

    const state = [
        {   
            id:0,
            Name:"Leh Ladakh",
            Location:"Ladakh",
            image:img1,
            Description:`Set amidst the epic Himalayas, 
            Ladakh is a rustic and heavenly beautiful travel destination. 
            The rugged valleys and mountains, winding roads coupled with the vibrant\
            cultural life maintain the exuberance and charm of this region`,
        },
        {
            id:1,
            Name:"The Rohtang",
            Location:"Himachal Pradesh",
            image:img2,
            Description:`At an elevation of 13,054 ft, Rohtang Pass serves
             as the gateway to Lahaul and Spiti valleys in Himachal Pradesh.
              About 53 km from Manali, it connects Kullu valley with Lahaul 
              and Spiti which in turn provide access to Leh. `,
        },
        {
            id:2,
            Name:"Neil Islands",
            Location:"Andaman Nicobar",
            image:img3,
            Description:`Neil Island is a tiny and beautiful gem, 
            located 37 km south of the Andaman and Nicobar archipelago.
             With unexplored coral reefs, magnificent bio-diversity,
              deserted sandy beaches and tropical forests and vegetation,`,
        },
        {
            id:3,
            Name:"Taj Mahal",
            Location:"Agra",
            image:img4,
            Description:`The Taj Mahal is a mosque like building and 
            tomb built in the 17th century by the Mughal emperor,
             Shah Jahan in memory of his wife, Mumtaz Mahal. 
             The building is in the city of Agra, Uttar Pradesh.`,
        },
        {
            id:4,
            Name:"Lotus Temple",
            Location:"delhi",
            image:img5,
            Description:`The Lotus Temple, located in Delhi, India,
             is a Baháʼí House of Worship that was dedicated in December 
             1986. Notable for its flowerlike shape, it has become a 
             prominent attraction in the city.`,
        },
        {
            id:5,
            Name:"Tirupati Tirumala",
            Location:"Kerala",
            image:img6,
            Description:`Tirupati is known as the abode of the Hindu 
            god Venkateshvara, Lord of Seven Hills. The sacred hill 
            of Tirumala is situated about 6 miles (10 km) northwest 
            of Tirupati in Sri Venkateshwara Sanctuary and National Park.`,
        }
    ]

    const changeActive = () => {
        // console.log("chaneac")
        const nextact = (active+1)%6;
        setActive(nextact);
    }

    return(
        <MainContent.Provider value={{state,active,changeActive}}>
            {children}
        </MainContent.Provider>
    );
}

export default MainProvider;