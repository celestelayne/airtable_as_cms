import React from 'react';

import {
  Link
} from "react-router-dom";

function CrunchbaseCompanyRow({companies_cb, showCompanyPage}) {
  // console.log(companies_cb)

  let company_name = companies_cb["Organization Name"].replace(/\s/g, "").toLowerCase();

  return(
    <>
      <div className="field left">
        <Link
          to={`/${company_name}`}
          onClick={() => showCompanyPage(companies_cb)}
        >
          {companies_cb["Organization Name"]}
        </Link>
      </div>
      <div className="field left"><a href={companies_cb["Website"]}>Company URL <i className="fas fa-link"></i></a></div>
      <div className="field left"><a href={companies_cb["Twitter"]}>Company Twitter &raquo;</a></div>
      <div className="field left"></div>
      <div className="field left"></div>
      <div className="field left"></div>
      <div className="field left">{companies_cb["Headquarters Location"]}</div>
    </>
  )
}
export default CrunchbaseCompanyRow