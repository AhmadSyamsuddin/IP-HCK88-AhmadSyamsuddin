import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrograms } from "../store/programsSlice";
import ProgramCard from "../components/ProgramCard";
import { Link } from "react-router";

export default function ProgramsPage() {
  const dispatch = useDispatch();
  const { items: programs, loading } = useSelector((state) => state.programs);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  // Calculate pagination
  const totalPages = Math.ceil(programs.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentPrograms = programs.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="bg-black d-flex align-items-center justify-content-center" style={{ minHeight: "70vh" }}>
        <div className="text-center">
          <div className="spinner-border text-light mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-secondary">Loading programs…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="container py-5" style={{ maxWidth: 1200 }}>
        <div className="mb-4 text-center text-md-start">
          <Link
            className="btn btn-link text-secondary text-decoration-none p-0 mb-3"
            to="/"
          >
            ← Back to Home
          </Link>
          <h1 className="text-white fw-semibold m-0">Workout Programs</h1>
          <small className="text-secondary">
            Select your preferred sport or workout from the menu on this page and instantly generate a tailored one-week training plan to help you perform your best in your chosen activity!
          </small>
        </div>

        {programs.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-secondary m-0">No programs available.</p>
          </div>
        ) : (
          <>
            <div className="row g-3 g-md-4">
              {currentPrograms.map((program) => (
                <div key={program.id || program.name} className="col-12 col-sm-6 col-lg-4">
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    borderRadius: "8px",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                    color : "white"
                  }}
                >
                  <i className="bi bi-chevron-left" style={{ color: "white" }}>Prev</i>
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      className={`btn ${currentPage === pageNumber ? 'btn-danger' : 'btn-outline-secondary'}`}
                      onClick={() => handlePageChange(pageNumber)}
                      style={{
                        borderRadius: "8px",
                        minWidth: "40px",
                        padding: "8px 12px",
                        transition: "all 0.3s ease",
                        backgroundColor: currentPage === pageNumber ? '#e50914' : 'transparent',
                        borderColor: currentPage === pageNumber ? '#e50914' : '#2a2a2a',
                        color: currentPage === pageNumber ? '#fff' : '#bbb',
                      }}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    borderRadius: "8px",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i className="bi bi-chevron-right" style={{ color: "white" }}>Next</i>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}