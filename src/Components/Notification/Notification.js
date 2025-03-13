import React from "react";

const Notification = () => {
  return (
    <>
      {/* Custom Scrollbar Styling */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f6;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #9ca3af;
            border-radius: 10px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
          }
        `}
      </style>

      <div className="shadow-lg rounded-lg bg-white h-[33rem]">
        {/* Card Header */}
        <div className="bg-[#2966A3] text-white px-4 py-3 rounded-t-lg flex items-center">
          <h5 className="mb-0 font-semibold text-lg">Important Links</h5>
          <i className="bi bi-link text-2xl ml-2"></i>
        </div>

        {/* Card Body with Scroll */}
        <div className="p-2 custom-scrollbar max-h-[40vh] overflow-y-auto">
          <ul className="divide-y divide-gray-200 ">
            {[
              { href: "./Guidance.html", text: "Guidance" },
              { href: "./AdministrativeAuthorityList.html", text: "Administrative Authorities for International Research" },
              { href: "./RegulatoryAuthorityList.html", text: "Regulatory Authorities" },
              { href: "./RegulatoryAuthorityList.html", text: "Regulatory Documents" },
            ].map((item, index) => (
              <li key={index} className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 transition">
                <span className="flex items-center">
                  <i className="bi bi-info-lg text-gray-500 text-xl mr-3"></i>
                  <a href={item.href} className="text-blue-600 hover:underline">{item.text}</a>
                </span>
                <span className="bg-[#13406C] text-white text-sm px-3 py-1 rounded">Info</span>
              </li>
            ))}
          </ul>

          {/* Contact Details */}
          
        </div>
        <div className="bg-[#0B2641] p-6 rounded-lg m-4 ">
          <h6 className="font-semibold text-white">For Any Query:</h6>
          <p className="text-white text-sm mt-2">
            <i className="bi bi-envelope-check text-white"></i> biorrap[dot]in[at]dbt[dot]nic[dot]in
            <br />
            <i className="bi bi-telephone text-white"></i> Contact At: 011-24365136
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
