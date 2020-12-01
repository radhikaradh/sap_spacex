import React, { useState } from "react";
import DataComponent from "./DataComponent";

function FilterComponent() {
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const launchValue = ["false", "true"];

  const landingValue = ["false", "true"];

  const [initialYear, setyear] = useState(null);

  const [initiallaunch, setlaunchValue] = useState(null);

  const [initialland, setlandingValue] = useState(null);

  const [selectedId, setSelectedId] = useState(1);

  // const [yearToggle, setYearToggle] = useState(null);
  // const [launchToggle, setLaunchToggle] = useState(null);
  // const [landToggle, setLandToggle] = useState(null);



  //   const [initialdata, setData] = useState(null);

  function FilterYearClick(event) {
    setSelectedId(selectedId+1);
    let selectedBtn = event.target;
    if(!!initialYear){
      document.querySelector('#year-'+initialYear).classList.remove('btn-clicked');
    }
    if(event.target.value !== initialYear){
      selectedBtn.classList.toggle('btn-clicked');
      console.log(selectedBtn);
      setyear(event.target.value);
    } else {
      setyear(null);
    }
  }

  function filterLaunchClick(event) {
    setSelectedId(selectedId+1);
    let selectedBtn = event.target;
    if(!!initiallaunch){
      document.querySelector('#launch-'+initiallaunch.toString()).classList.remove('btn-clicked');
    }
    if(event.target.value !== initiallaunch){
      selectedBtn.classList.toggle('btn-clicked');
      console.log(selectedBtn.classList);
      setlaunchValue(event.target.value);
    } else {
      setlaunchValue(null);
    }
  }

  function filterLandingClick(event) {
    setSelectedId(selectedId+1);
    let selectedBtn = event.target;
    if(!!initialland){
      document.querySelector('#land-'+initialland.toString()).classList.remove('btn-clicked');
    }
    if(event.target.value !== initialland){
      selectedBtn.classList.toggle('btn-clicked');
      console.log(selectedBtn.classList);
      setlandingValue(event.target.value);
    } else {
      setlandingValue(null);
    }
  }

  return (
    <div className="row">
      <div className="col-12 col-m-3 col-lg-3">
        <div className="row filterContainer">
          <div className="title">Filters</div>
        <div className="row">
          <div className="sub-title">Launch Year</div>
          <hr className="subtitle" key="year-hr"></hr>
          {years.map((year, index) => (
            <div className="filterCol col-6 col-m-6 col-lg-6" key={"year-"+index}>
              <button
                className="btn year-btn"
                id={"year-"+year}
                value={year}
                onClick={FilterYearClick}
                index={index}
                key={index}
              >
                {year}
              </button>
            </div>
          ))}
          </div>
          <div className="row">
          <div className="sub-title">Successful Launch</div>
          <hr className="subtitle"></hr>
          {launchValue.map((value, index) => (
            <div className="filterCol col-6 col-m-6 col-lg-6" key={"launch-"+index}>
              <button
                className="btn launch-btn"
                id={"launch-"+value.toString()}
                value={value}
                onClick={filterLaunchClick}
                index={index}
                key={index}
              >
                {value}
              </button>
            </div>
          ))}
          </div>
          <div className="row">
          <div className="sub-title">Successful Landing</div>
          <hr className="subtitle"></hr>
          {landingValue.map((value, index) => (
            <div className="filterCol col-6 col-m-6 col-lg-6" key={"land-"+index}>
              <button
                className="btn land-btn"
                id={"land-"+value.toString()}
                value={value}
                onClick={filterLandingClick}
                index={index}
                key={index}
              >
                {value}
              </button>
            </div>
          ))}
        </div></div>
      </div>
      <div className="col-12 col-m-9 col-lg-9" key="data-sec">
        <DataComponent
          year={initialYear}
          launchValue={initiallaunch}
          landingValue={initialland}
          id={selectedId}
        />
      </div>
    </div>
  );
}

export default FilterComponent;
