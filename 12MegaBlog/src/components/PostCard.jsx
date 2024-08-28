// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {

    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard



import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    // Agar `featuredImage` ka `fileId` nahi milta, to default `fileId` ya placeholder image use karein
    const fileId = featuredImage || "66cf2abcd5790d85f2e3"; // Replace "defaultFileId" with an actual placeholder image URL or ID

    // Error handling agar `fileId` missing ya invalid ho
    if (!fileId) {
        console.error("Missing fileId for post", $id);
        return <div>Image not available</div>; // Fallback content
    }

    // `fileId` se file preview URL ko retrieve karein
    const filePreview = appwriteService.getFilePreview(fileId);

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {/* Agar `filePreview` valid hai to image dikhayein, nahi to fallback content */}
                    {filePreview ? (
                        <img src={filePreview} alt={title} className='rounded-xl' />
                    ) : (
                        <div>Image not available</div> // Fallback content
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;




