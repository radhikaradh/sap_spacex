import React, { useEffect, useState } from "react";

//import FilterComponent from './FilterComponent';

function DataComponent(props) {

  const [initialYear, setYear] = useState(null);
  const [initialLaunch, setLaunchValue] = useState(null);
  const [initialLand, setLandingValue] = useState(null);
  const [id, setId] = useState(null);
  const [dataItems, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let query = "";
    if (
      props.year != null ||
      props.launchValue != null ||
      props.landingValue != null
    ) {
      if (props.year != null) {
        query += "&launch_year=" + props.year;
      }
      if (props.launchValue != null) {
        query += "&launch_success=" + props.launchValue;
      }
      if (props.landingValue != null) {
        query += "&land_success=" + props.landingValue;
      }
      setTimeout(() => {
        getDataFromApi(query);
      }, 500);

    } else {
      getDataFromApi(query);
    }
  },[props.id]);

  function getDataFromApi(query) {
    setLoading(true);
    setId(props.id);
    fetch("https://api.spaceXdata.com/v3/launches?limit=100" + query)
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setData(result);
        },
        (err) => {
          setLoading(false);
          setError(true);
          console.log(err)
        });
  }
  if(error){
    return  <div className="row center-text">Something went wrong.</div>
  } else if(loading){
    return  <div className="row center-text">Loading...</div>
  } else if(!loading && !error && dataItems.length<=0){
    return  <div className="row center-text">Data not available.</div>
  } else {
    return (
      <div className="row">
        {dataItems.map(item => (
          <div className="col-12 col-m-6 col-l-3" key={"main-" + item.flight_number}>
            <div className="mission-container">
            <div className="img-container" key={"img-c-" + item.flight_number}><img className="mission-img" key={"img-" + item.flight_number} src={item.links.mission_patch_small} /></div>
            <div className="mission-name-sec align-left bold-text" key={"name-" + item.flight_number}>{item.mission_name} #{item.flight_number}</div>
            <div className="bold-text align-left" key={"id-label-" + item.flight_number}>Mission Ids: </div>
            <ul key={"ul-" + item.flight_number}>
              {
                item.mission_id.map((m, index) => (
                  <li key={"item" + index}>{m}</li>
                ))
              }
            </ul>
            <div className="align-left" key={"launch-label-c-" + item.flight_number}>
              <span className="bold-text" key={"launch-label-" + item.flight_number}>Launch Year: </span>{item.launch_year}
            </div>
            <div className="align-left" key={"claunch-" + item.flight_number}>
              <span className="bold-text" key={"launch-" + item.flight_number}>Successful Launch: </span>{item.launch_success ? "Yes" : "No"}
            </div>
            <div className="align-left" key={"cland-" + item.flight_number}>
              <span className="bold-text" key={"land-" + item.flight_number}>Successful Landing:</span>{item.launch_landing ? "Yes" : "No"}
            </div>
          </div>
          </div>
        ))}
      </div>
    )
  }
  

}

export default DataComponent;
