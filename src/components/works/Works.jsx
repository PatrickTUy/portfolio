import React,{ useState, useEffect } from 'react';
import './works.scss';
import WorksList from './WorksList/WorksList';
import { featuredPortfolio,contentPortfolio,webPortfolio } from '../../data';
import theProfile from '../../assets/theProfiles.png';
function Works() {
  const [selected, setSelected] = useState("featured");
  const [data,setData] = useState([])
  const list = [
    {
      id: 'web',
      title: ' Web App',
    },
    {
      id: 'featured',
      title: ' Featured',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  useEffect(()=>{
   switch(selected){
      case "featured":
        setData(featuredPortfolio);
        break;
 
      case "content":
        setData(contentPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;
        default:
          setData(featuredPortfolio);


   }
  },[selected])
  return (
    <div className="works" id="works">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <WorksList title={item.title}  active={selected === item.id}
          setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
       
       
      </div>
    </div>
  );
}

export default Works;
