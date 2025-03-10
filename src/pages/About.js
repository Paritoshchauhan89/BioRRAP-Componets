import React from 'react'
import DynamicBreadcrumbs from '../Components/DynamicBreadcrumbs/DynamicBreadcrumbs'
import Layout from '../Layout/Layout'

const About = () => {
  return (
    <Layout>
      <DynamicBreadcrumbs />  
      <div className="container mx-auto p-4">
        <p className='text-justify'>Biological Research activities involve handling and exchange of materials that include micro-organisms, plants, small and large animals, humans samples as well as biodiversity resources of the country. The Government of India supports biological research through its Ministries/Departments providing statutory and administrative approvals through their regulatory agencies/committees. Health Ministry’s Screening Committee (HMSC), Review Committee on Genetic Manipulation (RCGM), Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA), National Biodiversity Authority (NBA), Directorate Of Plant Protection, Quarantine & Storage (DPPQ) and Directorate General of Foreign Trade (DGFT) are amongst the regulatory agencies/committees facilitating biological research in India by providing requisite approvals.

        </p>
        <p className='text-justify'>Biological Research Regulatory Approval Portal (BioRRAP) provides a single route to direct the applicant to regulatory agencies providing requisite approval relevant to the biological research of the applicant. Based on a succinct set of questions responded in affirmative by the applicant, the list of regulatory agencies from whom approvals may be required for the applicant’s biological research, is determined and attached to the unique BioRRAP ID generated on the submission by applicant.

        </p>
        <p className='text-justify'>India is among the top 12 destinations for biotechnology globally and 3rd largest biotechnology destination in the Asia Pacific region. The industry comprises >2,700 biotech start-ups and >2,500 biotech companies in the country. India will be recognized as a Global Bio-manufacturing Hub by 2025 and will figure among the top 5 countries of the world. By 2025, the contribution of the Indian biotechnology industry in the global biotechnology market is expected to grow to 19% from 3% in 2017. The Bio Economy’s contribution to the national GDP has also grown steadily in the past years. While the Bio Economy contribution to 1.7% of the GDP in 2017, this share has grown to 2.7% in 2020.

</p>
    </div>
    </Layout>
  )
}

export default About