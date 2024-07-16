// Page3.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import { setFormData, loadFormData } from '../reducers/formSlice'; // Adjust path if necessary

const Page3 = () => {
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
    navigate('/page4');
  };

  const handlePrevious = () => {
    navigate('/page2');
  };

  const isDetailFilled = (field) => {
    return typeof formData[field] === 'string' && formData[field].trim() !== '';
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
      <Navigation currentStep={3} steps={['FillUpDetailForm', 'Page2', 'Page3', 'Page4', 'ReviewAndSubmit']} />
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleNext}>
            <h2>Technical Specifications</h2>
            <div className="mb-3">
              <label htmlFor="platform" className="form-label">6. Platform and Hosting:</label>
              <input
                type="text"
                className="form-control"
                id="platform"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                required
                placeholder="Enter Your Platform and Hosting"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="seo" className="form-label">7. SEO and Analytics:</label>
              <textarea
                className="form-control"
                id="seo"
                name="seo"
                value={formData.seo}
                onChange={handleChange}
                required
                placeholder="Enter Your SEO and Analytics"
              ></textarea>
            </div>
            <h2>Project Management</h2>
            <div className="mb-3">
              <label htmlFor="timeline" className="form-label">8. Timeline and Budget:</label>
              <textarea
                className="form-control"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                placeholder="Enter Your Timeline and Budget"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="maintenance" className="form-label">9. Maintenance and Support:</label>
              <textarea
                className="form-control"
                id="maintenance"
                name="maintenance"
                value={formData.maintenance}
                onChange={handleChange}
                required
                placeholder="Enter Your Maintenance and Support"
              ></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-primary" onClick={handlePrevious}>
                Previous
              </button>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Save & Next
                </button>
              </div>
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

export default Page3;
