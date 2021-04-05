import React from 'react';

import CompanyRow from './CompanyRow'

function CompaniesList({isLoading, headers, airtableData, showCompanyPage}) {
  return(
<>
    <div className="headers">
    { headers !== undefined ? (
      <>
        <div className="field left">{headers[0]}</div>
        <div className="field left">{headers[1]}</div>
        <div className="field left">{headers[2]}</div>
        <div className="field left">{headers[3]}</div>
        <div className="field left">{headers[4]}</div>
        <div className="field left">{headers[5]}</div>
        <div className="field left">{headers[6]}</div>
        <div className="field left">{headers[7]}</div>
        <div className="field left">{headers[8]}</div>
        <div className="field left">{headers[9]}</div>
        <div className="field left">{headers[10]}</div>
      </>
    ) : null }
  </div>

    <div className="entries">
    {isLoading && <div>Loading....</div>}

    {airtableData !== undefined && airtableData.map( (entry, i) => {
      const companies = entry.fields;
      console.log(companies)
      return (
        <div className='entry' id={i} key={i}>
          <CompanyRow 
            companies={companies}
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