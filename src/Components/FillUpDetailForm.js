// FillUpDetailForm.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import { setFormData, loadFormData } from '../reducers/formSlice'; // Adjust path if necessary

const FillUpDetailForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadFormData());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/page2');
  };

  const isDetailFilled = (field) => {
    return formData[field] && typeof formData[field] === 'string' && formData[field].trim() !== '';
  };

  const details = [
    'jobTitle',
    'projectOverview',
    'branding',
    'features',
    'userInteraction',
    'platform',
    'seo',
    'timeline',
    'maintenance',
    'documentation',
    'scalability',
  ];

  return (
    <div className="container mt-5">
      <h1>Web Development Form:</h1>
      <Navigation currentStep={1} steps={['FillUpDetailForm', 'Page2', 'Page3', 'Page4', 'ReviewAndSubmit']} />
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleNext}>
            <h2>General Information:</h2>
            <div className="mb-3">
              <label htmlFor="jobTitle" className="form-label">
                1. Job Title: <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                placeholder="Enter Your Job Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="projectOverview" className="form-label">
                2. Project Overview: <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="projectOverview"
                name="projectOverview"
                value={formData.projectOverview}
                onChange={handleChange}
                required
                placeholder="Enter Your Project Overview"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="branding" className="form-label">
                3. Branding and Design: (optional)
              </label>
              <textarea
                className="form-control"
                id="branding"
                name="branding"
                value={formData.branding}
                onChange={handleChange}
                placeholder="Enter Your Branding and Design (optional)"
              ></textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Save & Next
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <h2>Form Progress</h2>
          <ul className="list-group">
            {details.map((detail, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {index + 1}. {detail.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                {isDetailFilled(detail) && (
                  <span className="text-success">
                    <i className="fas fa-check-circle"></i>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FillUpDetailForm;
