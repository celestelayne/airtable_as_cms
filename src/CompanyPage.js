import React from 'react';

function CompanyPage({currentCompany}) {
  console.log(currentCompany)
  return (
    <>
      <div className="field left">First Name: {currentCompany.first_name}</div>
      <div className="field left">Last Name: {currentCompany.last_name}</div>
      <div className="field left">Gender: {currentCompany.gender}</div>
      <div className="field left">LinkedIn: {currentCompany.linkedin_url}</div>
      <div className="field left">Twitter: {currentCompany.personal_twitter}</div>
        <br/>
      <div className="field left">Company Name: {currentCompany.company_name}</div>
      <div className="field left">Website: {currentCompany.company_url}</div>
      <div className="field left">Twitter: {currentCompany.company_twitter}</div>
      <div className="field left">Stage: {currentCompany.stage}</div>
      <div className="field left">Status: {currentCompany.status}</div>
    </>
  )
}

export default CompanyPage;