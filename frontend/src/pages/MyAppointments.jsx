import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext)
  console.log(docId);
  console.log(doctors);
  const [docInfo, setDocInfo] = useState(null);
  console.log(docInfo)

  const fetchDocInfo = async () => {
    const docInfo = await doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  return  (
    <div>
      {/* -------------------------Doctor details -----------------------*/}
      <div>
        <div>
          <img src={docInfo.image} alt="image" className="w-16 h-16 rounded-full" />
        </div>

        <div>

        </div>
      </div>
    </div>
  );
}

export default MyAppointments;
