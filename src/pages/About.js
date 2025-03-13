import React from 'react'
import DynamicBreadcrumbs from '../Components/DynamicBreadcrumbs/DynamicBreadcrumbs'
import Layout from '../Layout/Layout'

const About = () => {
  return (
    <Layout>
      <DynamicBreadcrumbs />  
      <div className="bg-gray-100  py-4">
        <div className="max-w-7xl shadow-md rounded-lg bg-white p-10 mx-auto  text-center md:text-left">
          <p className="text-sm md:text-base text-justify mt-2 mb-2">
            Biological Research activities involve handling and exchange of materials that include micro-organisms, plants, small and large animals, humans samples as well as biodiversity resources of the country. The Government of India supports biological research through its Ministries/Departments providing statutory and administrative approvals through their regulatory agencies/committees. Health Ministry’s Screening Committee (HMSC), Review Committee on Genetic Manipulation (RCGM), Committee for the Purpose of Control and Supervision of Experiments on Animals (CPCSEA), National Biodiversity Authority (NBA), Directorate Of Plant Protection, Quarantine & Storage (DPPQ) and Directorate General of Foreign Trade (DGFT) are amongst the regulatory agencies/committees facilitating biological research in India by providing requisite approvals.



          </p>
          <p className="text-sm md:text-base text-justify mt-2 mb-2">
            Biological Research Regulatory Approval Portal (BioRRAP) provides a single route to direct the applicant to regulatory agencies providing requisite approval relevant to the biological research of the applicant. Based on a succinct set of questions responded in affirmative by the applicant, the list of regulatory agencies from whom approvals may be required for the applicant’s biological research, is determined and attached to the unique BioRRAP ID generated on the submission by applicant.

          </p>
          <p className="text-sm md:text-base text-justify mt-2 mb-2">
             India is among the top 12 destinations for biotechnology globally and 3rd largest biotechnology destination in the Asia Pacific region. The industry comprises 2,700 biotech start-ups and 2,500 biotech companies in the country. India will be recognized as a Global Bio-manufacturing Hub by 2025 and will figure among the top 5 countries of the world. By 2025, the contribution of the Indian biotechnology industry in the global biotechnology market is expected to grow to 19% from 3% in 2017. The Bio Economy’s contribution to the national GDP has also grown steadily in the past years. While the Bio Economy contribution to 1.7% of the GDP in 2017, this share has grown to 2.7% in 2020.

          </p>
          <h2 className='font-bold'>The percentage share of the biotechnology segments is: (Data in percentage %)
          </h2>
          <p className="text-sm md:text-base text-justify mt-2 mb-2">Biologics/Therapeutics10.7
            Bio-services, which accounted for 15% of the biotechnology industry in 2020, is becoming a leading destination for clinical trials, contract research and manufacturing activities in the country. As a result, India’s ranking is consistently improving in the Global Innovation Index (GII) and was ranked 46th among the 132 economies featured in the GII 2021.</p>

          <p className="text-sm md:text-base text-justify mt-2 mb-2">Other than biotechnology, biological work related to biodiversity, latest methods of conservation and protection of flora and fauna, forest and wildlife, bio-survey and bioutilization of biological resources are also gaining momentum in India due to effect of climate change on them.</p>
          <p className='text-sm md:text-base text-justify mt-2 mb-2'>Hence it is evident that research in the various biological fields is continuously expanding its vista in India supported by the grants from various public and private sector. Many of these research falls under the purview of one or more regulatory agencies which first approve the research proposal after which researcher undertakes that specific research. Therefore, to provide more credibility and recognition to such biological researches, Government of India has developed a web system under which each research, requiring regulatory oversight, will be identified by a unique ID called “BioRRAP ID”. For the same purpose Biological Research Regulatory Approval Portal (BioRRAP) has been developed that generates this BioRRAP ID for all the research applications submitted on this portal. Using this BioRRAP Id, further submission process to respective regulatory agencies has to be initiated based on the research application. In other words, BioRRAP portal will serve as a gateway for submitting applications for biological research requiring regulatory approvals.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About