import React, {useState, useEffect} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import dotenv from 'dotenv'; 

import './App.css';

import CompaniesList from './CompaniesList'
import CompanyPage from './CompanyPage'

dotenv.config()

const process_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
const airtable_table = process.env.REACT_APP_AIRTABLE_TABLE;
const airtable_base = process.env.REACT_APP_AIRTABLE_BASE; 

function App() {

  const initialCompanyState = {
    id: null,
    first_name: '',
    last_name: '',
    gender: '',
    linkedin_url: '',
    personal_twitter: '',
    company_name: '',
    company_url: '',
    company_twitter: '',
    funding_source: '',
    stage: '',
    status: ''
  };
  
  const [airtableData, setAirtableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [headers, setHeaders] = useState([])

  const [currentCompany, setCurrentCompany] = useState(initialCompanyState)

  useEffect(()=>{
    fetch(`${airtable_api_url}/${airtable_base}/${airtable_table}`, {
      "headers": {"Authorization": `Bearer ${process_api_key}`}
    })
    .then(res => res.json())
    .then((data) => {
      setAirtableData(data.records)
    })
    setIsLoading(false);
  },[])

  useEffect(()=>{
    // read headers
    if (airtableData.length > 0) {
      let headers = Object.keys(airtableData[0].fields)
      setHeaders(headers);
    }
  },[airtableData])

  const showCompanyPage = company => {
    if(company){
      setCurrentCompany({
        id: null,
        first_name: company['First Name'],
        last_name: company['Last Name'],
        gender: company['Gender'],
        linkedin_url: company['LinkedIn URL'],
        personal_twitter: company['Personal Twitter'],
        company_name: company['Company Name'],
        company_url: company['Company URL'],
        company_twitter: company['Company Twitter'],
        funding_source: company['Funding Source'],
        stage: company['Stage'],
        status: company['Status']
      })
    }
    console.log(company)
    localStorage.setCurrentCompany('company', JSON.stringify(company));
  }

  return (
    <div className="App">

      <nav>
        <Link
          to={`/`}><div className="field left">&laquo; Home</div></Link>
      </nav>

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

      <Switch>
        <Route 
          exact path='/' 
          render={() => <CompaniesList 
                          isLoading={isLoading} 
                          airtableData={airtableData}
                          setAirtableData={setAirtableData}
                          showCompanyPage={showCompanyPage}
          />}
        />
        <Route 
          path='/:company_name' 
          render={() => <CompanyPage
                          currentCompany={currentCompany} 
                          airtableData={airtableData}
                          setCurrentCompany={setCurrentCompany}
          />}
        />
      </Switch>


    </div>
  );
}

export default App;
