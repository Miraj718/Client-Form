// Page2.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import { setFormData, loadFormData } from '../reducers/formSlice'; // Adjust path if necessary

const Page2 = () => {
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
    navigate('/page3');
  };

  const handlePrevious = () => {
    navigate('/FillUpDetailForm');
  };

  const isDetailFilled = (field) => {
    // Check if formData[field] exists, is a string, and is not empty
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
      <Navigation currentStep={2} steps={['FillUpDetailForm', 'Page2', 'Page3', 'Page4', 'ReviewAndSubmit']} />
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleNext}>
            <h2>Functionality</h2>
            <div className="mb-3">
              <label htmlFor="features" className="form-label">
                4. Features and Functionalities:
              </label>
              <textarea
                className="form-control"
                id="features"
                name="features"
                value={formData.features}
                onChange={handleChange}
                required
                placeholder="Enter Your Features and Functionalities"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="userInteraction" className="form-label">
                5. User Interaction:
              </label>
              <textarea
                className="form-control"
                id="userInteraction"
                name="userInteraction"
                value={formData.userInteraction}
                onChange={handleChange}
                required
                placeholder="Enter Your User Interaction"
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

export default Page2;
