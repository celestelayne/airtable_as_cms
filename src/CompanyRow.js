import React from 'react';

import {
  Link
} from "react-router-dom";

function CompanyRow({companies_bf, companies_cb, showCompanyPage}) {

  let company_name
  if(companies_bf){
    company_name = companies_bf["Company Name"].replace(/\s/g, "").toLowerCase();
  }
  

  return(
    <>
      <div className="field left">
        <Link
          to={`/${company_name}`}
          onClick={() => showCompanyPage(companies_bf)}
        >
          {companies_bf["Company Name"]}
        </Link>
      </div>

      <div className="field left"><a href={companies_bf["Company URL"]}>Company URL <i className="fas fa-link"></i></a></div>
      <div className="field left"><a href={companies_bf["Company Twitter"]}>Company Twitter &raquo;</a></div>
      <div className="field left"><a href={companies_bf["Funding Source"]}>Funding Source &raquo;</a></div>
      <div className="field left">{companies_bf["Stage"]}</div>
      <div className="field left">{companies_bf["Status"]}</div>
      <div className="field left"></div>
    </>
  )

}
export default CompanyRow;