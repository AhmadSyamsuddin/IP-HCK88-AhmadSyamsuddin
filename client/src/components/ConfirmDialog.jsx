import { useEffect } from "react";

export default function ConfirmDialog({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Confirm Action",
  message,
  confirmText = "Confirm",
  cancelText = "Cancel"
}) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(8px)",
        zIndex: 9999,
        animation: "fadeIn 0.2s ease-out",
      }}
      onClick={handleBackdropClick}
    >
      <div
        className="bg-dark rounded-4 shadow-lg p-4"
        style={{
          maxWidth: "440px",
          width: "90%",
          backgroundColor: "#1a1a1a",
          border: "1px solid #1f1f1f",
          boxShadow: "0 0 30px rgba(229, 9, 20, 0.2), 0 8px 32px rgba(0, 0, 0, 0.5)",
          animation: "slideUp 0.3s ease-out",
        }}
      >
        <h5 className="text-white fw-bold mb-3" style={{ letterSpacing: "0.3px" }}>
          {title}
        </h5>
        <p className="text-secondary mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
          {message}
        </p>
        <div className="d-flex gap-3 justify-content-end">
          <button
            onClick={onClose}
            className="btn px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #2a2a2a",
              color: "#fff",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2a2a2a";
              e.currentTarget.style.borderColor = "#3a3a3a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "#2a2a2a";
            }}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="btn px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#e50914",
              border: "none",
              color: "#fff",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ff2b2b";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(229, 9, 20, 0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e50914";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
