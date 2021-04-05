import React from 'react';

import CompanyRow from './CompanyRow'

function CompaniesList({isLoading, airtableData, showCompanyPage}) {
  return(
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
  )
}

export default CompaniesList;