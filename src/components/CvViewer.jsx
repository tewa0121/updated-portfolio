import React, { useEffect, useRef, useState } from 'react';
import { Download, X, ExternalLink } from 'lucide-react';

const CV_PDF = '/assets/cv.pdf';
const CV_IMAGE = '/assets/cv-preview.jpg';

// Phones and many mobile browsers cannot embed a PDF, so on small screens
// (or when the browser has no built-in PDF viewer) the CV is shown as an image.
const shouldUseImage = () => {
  if (typeof window === 'undefined') return false;
  const small = window.matchMedia('(max-width: 767px)').matches;
  const noPdf = typeof navigator.pdfViewerEnabled === 'boolean' && !navigator.pdfViewerEnabled;
  return small || noPdf;
};

const CvViewer = ({ onClose }) => {
  const [useImage] = useState(shouldUseImage);
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Tewachew Melaku CV"
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl h-[92vh] sm:h-[88vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-black dark:text-white truncate">Tewachew Melaku – CV</h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={CV_PDF}
              download="Tewachew_Melaku_CV.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors"
            >
              <Download size={16} /> Download
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close CV"
              className="p-1.5 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {useImage ? (
          <div className="flex-1 min-h-0 overflow-auto bg-gray-100 dark:bg-gray-800 p-2">
            <img
              src={CV_IMAGE}
              alt="Tewachew Melaku CV"
              className="w-full h-auto max-w-3xl mx-auto shadow-lg bg-white"
            />
            <div className="text-center py-4 flex flex-wrap justify-center gap-3">
              <a
                href={CV_IMAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium px-5 py-2 rounded-lg"
              >
                <ExternalLink size={16} /> Open full size
              </a>
              <a
                href={CV_PDF}
                download="Tewachew_Melaku_CV.pdf"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          </div>
        ) : (
          <object data={CV_PDF} type="application/pdf" className="flex-1 min-h-0 w-full">
            <div className="h-full overflow-auto bg-gray-100 dark:bg-gray-800 p-2">
              <img src={CV_IMAGE} alt="Tewachew Melaku CV" className="w-full h-auto max-w-3xl mx-auto shadow-lg" />
            </div>
          </object>
        )}
      </div>
    </div>
  );
};

export default CvViewer;
