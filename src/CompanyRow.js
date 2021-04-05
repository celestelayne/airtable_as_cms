import React from 'react';

import {
  Link
} from "react-router-dom";

function CompanyRow({companies, showCompanyPage}) {

  let company_name = companies["Company Name"].replace(/\s/g, "").toLowerCase();
  console.log(companies)

  return(
    <>
      <div className="field left">{companies["First Name"]}</div>
      <div className="field left">{companies["Last Name"]}</div>
      <div className="field left">{companies["Gender"]}</div>
      <div className="field left"><a href={companies["LinkedIn URL"]}>LinkedIn &raquo;</a></div>
      <div className="field left"><a href={companies["Personal Twitter"]}>Twitter &raquo;</a></div>

      <div className="field left">
        <Link
          to={`/${company_name}`}
          onClick={() => showCompanyPage(companies)}
        >
          {companies["Company Name"]}
        </Link>
      </div>

      <div className="field left"><a href={companies["Company URL"]}>Company URL &raquo;</a></div>
      <div className="field left"><a href={companies["Company Twitter"]}>Company Twitter &raquo;</a></div>
      <div className="field left"><a href={companies["Funding Source"]}>Funding Source &raquo;</a></div>
      <div className="field left">{companies["Stage"]}</div>
      <div className="field left">{companies["Status"]}</div>
    </>
  )

}
export default CompanyRow;