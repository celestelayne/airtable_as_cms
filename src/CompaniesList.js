import React from 'react';

import CompanyRow from './CompanyRow'
import CrunchbaseCompanyRow from './CrunchbaseCompanyRow'

function CompaniesList({isLoading, headers, blackFounderData, crunchBaseData, showCompanyPage}) {
  // console.log(crunchBaseData)

  return(
    <>
    <div className="headers">
    {/* { headers !== undefined ? ( */}
      <>
        <div className="field left">Company Name</div>
        <div className="field left">Website</div>
        <div className="field left">Twitter</div>
        <div className="field left">Funding Source</div>
        <div className="field left">Stage</div>
        <div className="field left">Status</div>
        <div className="field left">Location</div>
      </>
    {/* ) : null } */}
  </div>

    <div className="entries">
    {isLoading && <div>Loading....</div>}

    {blackFounderData !== undefined && blackFounderData.map( (entry, i) => {
      const companies_bf = entry.fields;
      // console.log(companies)
      return (
        <div className='entry' id={i} key={i}>
          <CompanyRow 
            companies_bf={companies_bf}
            showCompanyPage={showCompanyPage} />
        </div>
      )
     })
    }  

    {crunchBaseData !== undefined && crunchBaseData.map( (entry, i) => {
      const companies_cb = entry.fields;
      // console.log(companies_cb)
      return (
        <div className='entry' id={i} key={i}>
          <CrunchbaseCompanyRow 
            companies_cb={companies_cb}
            showCompanyPage={showCompanyPage} />
        </div>
      )
     })
    }  
  </div>
  </>
  )
}

export default CompaniesList;