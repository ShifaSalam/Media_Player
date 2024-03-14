import React, { useEffect, useState } from 'react'
import { getHistory } from '../../Services/allApis'
import { deleteHistory } from '../../Services/allApis'


function History() {
  const [his,setHis]=useState([])
  const [delStatus, setDelStatus] = useState({})

  useEffect(() => {
    getData()
  }, [delStatus])

  const getData = async () => {
    const res = await getHistory()
    console.log(res.data)
    setHis(res.data)
  }
  const handleDelete = async (id) => {
    console.log(id)
    const res = await deleteHistory(id)
    setDelStatus(res)
  }

  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        <table className='table table-bordered'>
          <tr>
            <th>Caption</th>
            <th>url</th>
            <th>Date & Time</th>
            <th></th>
          </tr>
          {
            his?
            his.map(item=>(
              <tr>
                <td>{item.caption}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td><i class="fa-sharp fa-solid fa-trash" onClick={()=>handleDelete(item.id)}></i></td>
              </tr>
            ))
            :
            <h3>No History</h3>

          }
        </table>
      </div>
    </>
  )
}

export default History