import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  console.log(searchInput.length);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/doctor/getalldoctors`);
    setDoctors(data);
    dispatch(setLoading(false));
  };

  const handleSearch = (ele) => {
    //  console.log(ele);
    const searchInputString = typeof ele === 'string' ? ele : ele.toString();
    if (searchInputString.trim() === "") {
      // If search input is empty, reset filteredDoctors to an empty array
      setFilteredDoctors([]);
      return;
    }
    const filtered = doctors.filter((doctor) => {
      //  console.log(doctor.specialization);
      const nameMatch = doctor.userId.firstname.toLowerCase().includes(ele.toLowerCase());
      const specMatch = doctor?.specialization.toLowerCase().includes(ele.toLowerCase());
      // console.log(nameMatch);
      // console.log(specMatch);
      return nameMatch || specMatch;
    });
    setFilteredDoctors(filtered);
    
  };
  
  useEffect(() => {
    fetchAllDocs();
    
  }, []);
  useEffect(() => {
    handleSearch(searchInput);
    
  }, [searchInput]);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Our Doctors</h2>
          <div className="search-form" >
            <input
              type="text"
              placeholder="Search by name or Specilization"
              value={searchInput.name}
              onChange={(e) => setSearchInput(e.target.value)}
              style={{width:"700px",padding:"10px",fontSize:"20px",borderRadius:"15px"}}
            />
            
           
          </div>
          {filteredDoctors.length > 0 && searchInput.length>0 ? (
            <div className="doctors-card-container">
              {filteredDoctors.map((ele) => (
                <DoctorCard ele={ele} key={ele._id} />
              ))}
            </div>
          ) : doctors.length > 0  && searchInput.length===0  ? (
            <div className="doctors-card-container">
              {doctors.map((ele) => (
                <DoctorCard ele={ele} key={ele._id} />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Doctors;
