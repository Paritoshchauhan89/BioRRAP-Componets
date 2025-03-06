import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2641] text-white py-6 md:py-10">
      <div className="container w-[80vw] mx-auto px-4 md:px-8">
        {/* Grid Layout for Desktop (3 Columns) & Stacked for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BIORRAP Section */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold uppercase mb-3">BIORRAP</h5>
            <p className="text-justify text-sm leading-relaxed">
              Biological Research activities involve handling and exchange of materials that
              include micro-organisms, plants, small and large animals, human samples as well
              as biodiversity resources of the country. The Government of India supports
              biological research through its Ministries/Departments providing statutory and
              administrative approvals through their regulatory agencies/committees.
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="md:col-span-1 mx-auto">
            <h5 className="text-lg font-semibold uppercase mb-3">Useful Links</h5>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", href: "./AboutUs.html" },
                { name: "Guidelines", href: "./Guidance.html" },
                { name: "Search Applicant Agency", href: "./OrganizationRegistration.html" },
                { name: "Application Submission", href: "./ApplicationSubmission.html" },
                { name: "Regulatory Documents", href: "./RegulatoryDocuments.html" },
                { name: "Contact Us", href: "./ContactUs.html" },
                { name: "FAQ", href: "./Faqs.html" },
              ].map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <i className="bi bi-link-45deg text-blue-400"></i>
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold uppercase mb-3">Contact Us</h5>
            <p className="text-sm flex items-start gap-2">
              <i className="bi bi-geo-alt-fill text-blue-400"></i>
              Department of Biotechnology, Ministry of Science & Technology, CGO Complex,
              Lodhi Road, New Delhi - 110 003.
            </p>
            <p className="text-sm mt-3">
              <strong>For Any Query:</strong>
            </p>
            <p className="text-sm flex items-center gap-2">
              <i className="bi bi-envelope-check text-blue-400"></i>
              Email: <a href="mailto:biorrap-hyphen-team@dbt.nic.in" className="hover:underline">biorrap-hyphen-team@dbt.nic.in</a>
            </p>
            <p className="text-sm flex items-center gap-2 mt-1">
              <i className="bi bi-telephone text-blue-400"></i>
              Phone: 011-24365136
            </p>
          </div>
        </div>

    
        <div className="text-center mt-6 border-t border-gray-600 pt-4">
          <p className="text-xs md:text-sm">
            Website is Designed and Developed by Department of Biotechnology, Ministry of Science & Technology, Govt. of India.
          </p>
          <img
            src="https://biorrap.gov.in/Default/img/NIC_Logo.png"
            alt="logo"
            width="100"
            className="mt-2 mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
