import React from 'react'

const HackerNewsList = ({stories}) => {

    let storiesList;
    if(stories.stories){

	 storiesList = stories.stories.map((story,index)=>{ 

			return <li className="mdl-list__item" key={index}>
				    <span className="mdl-list__item-primary-content">
				      <a target="_blank" href={story.url}>{story.title}</a>
				    </span>
				  </li>

		});
	}
	else{
		return false;
	}	



  return (
         <div className="page-content">
  	        <h3>Top Stories</h3>

			<ul className="demo-list-item mdl-list">
				{storiesList}
			</ul> 
		</div>	    
  )
}


export default HackerNewsList