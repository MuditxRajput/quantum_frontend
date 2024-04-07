// import React, { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

// const PdfView = () => {
//   const location = useLocation();
//   const storedPdfUrl = sessionStorage.getItem('pdfUrl');
//   const [pdfUrl, setPdfUrl] = useState(storedPdfUrl);
//   const [numPages, setNumPages] = useState(null);
//   const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
//   const[time,setTime] = useState(10);
//   const [showText,setShowText] = useState(true);
//   useEffect(() => {
//     if (location.state && location.state.pdfUrl) {
//       const { pdfUrl } = location.state;
//       setPdfUrl(pdfUrl);
//       sessionStorage.setItem('pdfUrl', pdfUrl);
//     }
//   }, [location.state]);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prev) => {
//         if (prev === 0) {
//           clearInterval(timer); // Stop the interval when time reaches 0
//         }
//         return prev > 0 ? prev - 1 : 0; // Ensure time does not become negative
//       });
//     }, 1000);
  
//     return () => clearInterval(timer); // Cleanup function to clear interval on component unmount
//   }, []);
  
//  useEffect(()=>{
//   if(time===0)
//   {
//     setShowText(false);
//   }
//  },[time]);
//   if (!pdfUrl) {
//     return <div>Loading...</div>; // or any loading indicator
//   }

//   const file = `https://quantum-backend-1.onrender.com/public/temp/${encodeURIComponent(pdfUrl)}`;
//   console.log(file);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   const renderPages = () => {
//     const pages = [];
//     for (let i = 1; i <= numPages; i++) {
//       pages.push(
//         <div key={i} className="flex  mb-8 mt-3">
//           <Page
//             className="shadow-md shadow-black"
//             pageNumber={i}
//             renderAnnotationLayer={false}
//             renderTextLayer={false}
//             width={isMobile ? 400 : 800} // Adjust width based on screen size
//           />
//         </div>
//       );
//     }
//     return pages;
//   };


//   return (
//     <>
//     {showText &&  <div className='flex justify-center text-red-500'>
//         Please wait for {time} second to load... 
//      </div> }
   
//     <div className="bg-gray-700 px-10  flex justify-center ">
//     {/* <div>Hello</div> */}
//       <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//         {renderPages()}
//       </Document>
//     </div>
//     </>
//   );
// };

// export default PdfView;

import React from 'react';
// import { useLocation } from 'react-router-dom';

const PdfView = () => {
  const location = useLocation();
  const pdfUrl = location.state.pdfUrl;
  const pdf = `https://quantum-backend-1.onrender.com/public/temp/${pdfUrl}#toolbar=0`

  return (
    <div>
      <iframe src={pdf} title="PDF Viewer" width="100%" height="600px" />
    </div>
  );
};

export default PdfView;

