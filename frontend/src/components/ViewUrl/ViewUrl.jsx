import React, { useEffect } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { fetchDataWithoutToken } from '../../api-service/api-service';
import { getAllUrls } from '../../redux/actions';
import qrCode from 'qrcode';
function ViewUrl() {
    const dispatch = useDispatch();
    const urls=useSelector((state) => state.urlReducer.urls);

    const fetchAllUrls = async()=>{
        try {
            // const allUrls=await fetchDataWithoutToken('url');
            // console.log(allUrls);
            dispatch(getAllUrls())
        } catch (error) {
           toast.error(error.message) 
        }
    }
    console.log(urls);
    useEffect(()=>{
        fetchAllUrls();
    },[])
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Original Url</th>
            <th>Short Url</th>
            <th>Click Count</th>
            <th>Qr Image</th>
          </tr>
        </thead>
        <tbody>
          {urls?.map((url, idx) => (
            <tr key={idx}>
              <td>{url?.givenUrl}</td>
              <td>
                <a href={`${url?.shortUrl}`} target='_blank' rel='noreferrer'>{url?.shortUrl}</a>
              </td>
              <td>{url?.clicks}</td>
              <td><img width={50} src={`http://localhost:2900/uploads/${url?.qrImagelocation?.slice(17)}`}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUrl