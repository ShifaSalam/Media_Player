import React, { useState, useEffect } from 'react'
import { getCategories, updateCategory } from '../../Services/allApis'
import { deleteCategory } from '../../Services/allApis'
import { getSpecificVideo } from '../../Services/allApis';
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';

function CatList({ status }) {

  const [categories, SetCategories] = useState([])
  const [delStatus, setDelStatus] = useState({})

  useEffect(() => {
    getCatData()
  }, [status, delStatus])

  const getCatData = async () => {
    const res = await getCategories()
    // console.log(res.data)
    SetCategories(res.data)
    console.log(categories)
  }

  const handleDelete = async (id) => {
    console.log(id)
    const res = await deleteCategory(id)
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      setDelStatus(res)
      toast.success("Category Deleted Successfully")
    }
    else {
      toast.error("Category Deletion Failed!")
    }
  }

  const handleDrop = async (e, id) => {
    console.log("Category Id:" + id)
    const vid = e.dataTransfer.getData("videoId")
    console.log("Dropped Video id:" + vid)
    let category = categories.find(item => item.id == id)
    console.log(category)
    const res = await getSpecificVideo(vid)
    // console.log(res.data)
    category.videos.push(res.data)
    console.log(category)
    const rescat = await updateCategory(category, id)
    if (rescat.status >= 200 && rescat.status < 300) {
      toast.success(`${res.data.caption} is added to ${category.name}`)
      getCatData()
    }
    else {
      toast.error("Video adding to category is failed!")
    }
  }
  const handleDragOver = (e) => {
    e.preventDefault()
    console.log("Dragging Over Category")
  }

  return (
    <div className='border border-light p-3 mt-3'>
      {
        categories ?
          categories.map(item => (
            <div className='bg-primary mb-3 p-3 rounded shadow' onDragOver={e => { handleDragOver(e) }} droppable onDrop={e => { handleDrop(e, item?.id) }}>
              <div>
                <span>{item.name}</span>
                <i className="fa-solid fa-trash float-end" onClick={() => handleDelete(item.id)} style={{ color: '#8a0000' }}></i>
              </div>
              
              <div>
                {
                  item?.videos.map(v=>(
                    <VideoCard video={v} cat={true}/>
                  ))
                }
              </div>
            </div>
          ))
          :
          <h1>No Categories</h1>
      }
    </div>
  )
}

export default CatList