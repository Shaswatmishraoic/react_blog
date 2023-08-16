import React, { useContext,useState } from 'react';
import { ContextData } from './DataArticle';
import { Link } from 'react-router-dom';
import './Compo.css';
import Headofweb from './Headofweb';
import LinkCompo from './LinkCompo';


function Fitness() {
  const [DData] = useContext(ContextData);
  const [isLinkCompoVisible] = useState(true);
  
  return (
    <>
    <Headofweb/>
    <LinkCompo isVisible={isLinkCompoVisible}/>
    <div className='normalpage'>
    <div className='section_one'>
    <div className='toptext'><span className='tophead'>Fit</span><span>ness</span></div>
      {DData.filter((item) => item.cate === 'Fitness').map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container'>
           <p className='cardhead' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle' src={data.image} alt={"not found"}/>
        <p className='shortnote'>{data.short_desc}</p>
        <span className='cate cd'>{data.cate}</span><span className='cate cd'>{data.date}</span>
        <hr className='hrcolor'/>
           </div>
           </Link>
        </>
      ))}
      </div>
      <div className='section_two'>
      <div className='toptext'><span className='tophead'>Top </span><span>Post</span></div>
      {DData.filter((item) => item.cate === 'Fitness' && item.id === 57).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container1'>
           <img className='picstyle2' src={data.image} alt={"not found"}/>
           <p className='cardhead2' key={data.id}>{data.heading} </p>
           <span className='date1 cd'>{data.cate}</span><span className='date1'>{data.date}</span>
           <hr className='hrcolor2'/>
           </div>
           </Link>
        </>
      ))}
      {DData.filter((item) => item.cate === 'Fitness' && item.id % 4 === 0).map((data) => (
        <>
        <Link key={data.id} to={`/article/${data.id}`}>
           <div className='Container2'>
           <p className='cardhead3' key={data.id}>{data.heading} 
        </p>
        <img className='picstyle1' src={data.image} alt={"not found"}/>
        <div className='date'><span>{data.cate}</span><span>{data.date}</span></div>
           </div>
           <hr className='hrcolor2'/>
           </Link>
        </>
      ))}
      {DData.filter((item) => item.cate === 'adv' && item.id === 73).map((data) => (
        <img className='adv' src={data.image} alt={"not found"}/>
      ))}
      </div>
    </div>
    </>
  );
}

export default Fitness
