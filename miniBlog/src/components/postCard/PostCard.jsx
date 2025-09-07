import React from 'react';
import serviceService from '../../appwrite/config';
import { Link } from 'react-router-dom';

const PostCard = ({$id,title,featuredimage}) => {
  return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-gray-100 rounded-xl p-4'>
              <div className='w-full justify-center mb'>
                  <img src={serviceService.getFilePreview(featuredimage)} alt={title}
                  className='w-full justify-center mb-4'/>
              </div>
              <h2 className='text-xl'>{title}</h2> 
        </div>
     </Link>
  )
}

export default PostCard