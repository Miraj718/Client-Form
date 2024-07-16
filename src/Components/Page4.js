// Page4.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import { setFormData, loadFormData } from '../reducers/formSlice'; // Adjust path if necessary

const Page4 = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadFormData());
  }, [dispatch]);


  const handleChange = (e) => {
    if (e.target.name === 'documentation') {
      dispatch(setFormData({ [e.target.name]: e.target.files[0] }));
    } else {
      dispatch(setFormData({ [e.target.name]: e.target.value }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/reviewandsubmit');
  };

  const handlePrevious = () => {
    navigate('/page3');
  };

  
  const isDetailFilled = (field) => {
    const value = formData[field];
    return typeof value === 'string' ? value.trim() !== '' : !!value;
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
      <Navigation currentStep={4} steps={['FillUpDetailForm', 'Page2', 'Page3', 'Page4', 'ReviewAndSubmit']} />
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleNext}>
            <h2>Documentation and Future-Proofing</h2>
            <div className="mb-3">
              <label htmlFor="documentation" className="form-label">10. Documentation:</label>
              <input
                type="file"
                className="form-control"
                id="documentation"
                name="documentation"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="scalability" className="form-label">11. Scalability and Future Enhancements:</label>
              <textarea
                className="form-control"
                id="scalability"
                name="scalability"
                value={formData.scalability}
                onChange={handleChange}
                required
                placeholder="Enter Your Scalability and Future Enhancements"
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

export default Page4;