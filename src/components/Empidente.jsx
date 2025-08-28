import React, { useState, useEffect } from 'react';

export default function Empidente() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data - replace with actual API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockEmployees = [
        {
          id: 1,
          name: 'Rajesh Kumarrr',
          employeeId: 'EMP-001',
          department: 'Healthcare Services',
          position: 'Senior Coordinator',
          joinDate: '2022-05-15',
          profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
          email: 'rajesh@janarogya.com',
          phone: '+91 9876543210',
          status: 'active',
          badgeColor: 'primary'
        },
        {
          id: 2,
          name: 'Priya Sharma',
          employeeId: 'EMP-002',
          department: 'Customer Support',
          position: 'Support Specialist',
          joinDate: '2023-01-20',
          profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
          email: 'priya@janarogya.com',
          phone: '+91 8765432109',
          status: 'active',
          badgeColor: 'success'
        },
        {
          id: 3,
          name: 'Amit Patel',
          employeeId: 'EMP-003',
          department: 'IT Services',
          position: 'System Administrator',
          joinDate: '2021-11-10',
          profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
          email: 'amit@janarogya.com',
          phone: '+91 7654321098',
          status: 'active',
          badgeColor: 'info'
        },
        {
          id: 4,
          name: 'Sunita Verma',
          employeeId: 'EMP-004',
          department: 'Finance',
          position: 'Accounts Manager',
          joinDate: '2022-08-05',
          profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
          email: 'sunita@janarogya.com',
          phone: '+91 6543210987',
          status: 'on-leave',
          badgeColor: 'warning'
        },
        {
          id: 5,
          name: 'Ravi Singh',
          employeeId: 'EMP-005',
          department: 'Operations',
          position: 'Operations Head',
          joinDate: '2020-03-12',
          profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
          email: 'ravi@janarogya.com',
          phone: '+91 5432109876',
          status: 'active',
          badgeColor: 'primary'
        },
        {
          id: 6,
          name: 'Neha Gupta',
          employeeId: 'EMP-006',
          department: 'HR',
          position: 'HR Manager',
          joinDate: '2023-02-28',
          profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
          email: 'neha@janarogya.com',
          phone: '+91 4321098765',
          status: 'active',
          badgeColor: 'danger'
        }
      ];
      setEmployees(mockEmployees);
      setLoading(false);
    }, 1000);
  }, []);

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: 'success',
      'on-leave': 'warning'
    };
    return badges[status] || 'secondary';
  };

  const getStatusText = (status) => {
    const statusText = {
      active: 'Active',
      'on-leave': 'On Leave'
    };
    return statusText[status] || 'Inactive';
  };

  if (loading) {
    return (
      <div className="min-vh-100 bg-light">
        <div className="container-fluid py-5">
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="text-muted">Loading employee data...</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="min-vh-100" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container-fluid py-4">
          
          {/* Header Section */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-lg" style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px'
              }}>
                <div className="card-body p-4 p-md-5">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-7 mb-3 mb-md-0">
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill me-3">
                          <i className="fas fa-id-card me-2"></i>Employee Management
                        </span>
                      </div>
                      <h1 className="display-4 fw-bold text-dark mb-2">Employee ID Cards</h1>
                      <p className="lead text-muted mb-0">View and manage all employee identification cards with ease</p>
                    </div>
                    <div className="col-lg-4 col-md-5 text-center">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" 
                           style={{ width: '120px', height: '120px' }}>
                        <i className="fas fa-users text-primary" style={{ fontSize: '3rem' }}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row g-4 mb-5">
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                      <i className="fas fa-users fs-4"></i>
                    </div>
                    <div>
                      <h3 className="mb-1 fw-bold">{employees.length}</h3>
                      <p className="mb-0 small opacity-75">Total Employees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ 
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                borderRadius: '16px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                      <i className="fas fa-user-check fs-4"></i>
                    </div>
                    <div>
                      <h3 className="mb-1 fw-bold">{employees.filter(e => e.status === 'active').length}</h3>
                      <p className="mb-0 small opacity-75">Active Employees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '16px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                      <i className="fas fa-user-clock fs-4"></i>
                    </div>
                    <div>
                      <h3 className="mb-1 fw-bold">{employees.filter(e => e.status === 'on-leave').length}</h3>
                      <p className="mb-0 small opacity-75">On Leave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100" style={{ 
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '16px'
              }}>
                <div className="card-body p-4 text-white">
                  <div className="d-flex align-items-center">
                    <div className="bg-white bg-opacity-20 rounded-circle p-3 me-3">
                      <i className="fas fa-building fs-4"></i>
                    </div>
                    <div>
                      <h3 className="mb-1 fw-bold">6</h3>
                      <p className="mb-0 small opacity-75">Departments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Cards */}
          <div className="row g-4">
            {employees.map((employee) => (
              <div key={employee.id} className="col-12 col-md-6 col-xl-4">
                <div className="card border-0 shadow-lg h-100 employee-card" style={{ 
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  background: 'white'
                }}>
                  {/* Card Header */}
                  <div className="card-header border-0 bg-transparent p-4 pb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0 fw-bold text-primary">
                        <i className="fas fa-building me-2"></i>Jan Arogya
                      </h6>
                      <span className={`badge bg-${getStatusBadge(employee.status)} bg-opacity-10 text-${getStatusBadge(employee.status)} px-3 py-2 rounded-pill`}>
                        <i className="fas fa-circle me-1" style={{ fontSize: '0.5rem' }}></i>
                        {getStatusText(employee.status)}
                      </span>
                    </div>
                  </div>

                  {/* Employee Photo */}
                  <div className="text-center px-4">
                    <div className="position-relative d-inline-block">
                      <img
                        src={employee.profilePic}
                        alt={employee.name}
                        className="rounded-circle border border-3 border-light shadow"
                        style={{ 
                          width: '120px', 
                          height: '120px', 
                          objectFit: 'cover'
                        }}
                      />
                      <div className={`position-absolute bottom-0 end-0 bg-${getStatusBadge(employee.status)} rounded-circle border border-2 border-white`}
                           style={{ width: '24px', height: '24px' }}>
                      </div>
                    </div>
                  </div>

                  {/* Employee Info */}
                  <div className="card-body text-center px-4 pb-2">
                    <h4 className="fw-bold text-dark mb-1">{employee.name}</h4>
                    <p className="text-muted mb-3">{employee.position}</p>
                    
                    <div className="row text-start">
                      <div className="col-12 mb-2">
                        <div className="d-flex align-items-center text-muted">
                          <i className="fas fa-id-card me-3 text-primary"></i>
                          <small className="fw-medium">{employee.employeeId}</small>
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="d-flex align-items-center text-muted">
                          <i className="fas fa-building me-3 text-primary"></i>
                          <small className="fw-medium">{employee.department}</small>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center text-muted">
                          <i className="fas fa-calendar me-3 text-primary"></i>
                          <small className="fw-medium">Joined {new Date(employee.joinDate).toLocaleDateString()}</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="card-footer border-0 bg-transparent p-4 pt-2">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                      <button 
                        className="btn btn-primary btn-sm px-4 rounded-pill"
                        onClick={() => handleViewDetails(employee)}
                      >
                        <i className="fas fa-eye me-2"></i>View Details
                      </button>
                      <button className="btn btn-outline-secondary btn-sm px-4 rounded-pill">
                        <i className="fas fa-print me-2"></i>Print ID
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Detail Modal */}
        {showModal && selectedEmployee && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px' }}>
                <div className="modal-header border-0 p-4">
                  <h5 className="modal-title fw-bold">
                    <i className="fas fa-user-circle me-2 text-primary"></i>
                    Employee Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body p-4">
                  <div className="row">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                      <img
                        src={selectedEmployee.profilePic}
                        alt={selectedEmployee.name}
                        className="rounded-circle border border-3 border-light shadow mb-3"
                        style={{ width: '160px', height: '160px', objectFit: 'cover' }}
                      />
                      <h4 className="fw-bold text-dark">{selectedEmployee.name}</h4>
                      <span className={`badge bg-${getStatusBadge(selectedEmployee.status)} bg-opacity-10 text-${getStatusBadge(selectedEmployee.status)} px-3 py-2 rounded-pill`}>
                        <i className="fas fa-circle me-1" style={{ fontSize: '0.5rem' }}></i>
                        {getStatusText(selectedEmployee.status)}
                      </span>
                    </div>
                    <div className="col-md-8">
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="bg-light rounded-3 p-3">
                            <label className="text-muted small fw-semibold">Employee ID</label>
                            <p className="mb-0 fw-medium text-dark">{selectedEmployee.employeeId}</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="bg-light rounded-3 p-3">
                            <label className="text-muted small fw-semibold">Department</label>
                            <p className="mb-0 fw-medium text-dark">{selectedEmployee.department}</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="bg-light rounded-3 p-3">
                            <label className="text-muted small fw-semibold">Position</label>
                            <p className="mb-0 fw-medium text-dark">{selectedEmployee.position}</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="bg-light rounded-3 p-3">
                            <label className="text-muted small fw-semibold">Join Date</label>
                            <p className="mb-0 fw-medium text-dark">{new Date(selectedEmployee.joinDate).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="bg-light rounded-3 p-3">
                            <label className="text-muted small fw-semibold">Email</label>
                            <p className="mb-0 fw-medium text-dark">
                              <i className="fas fa-envelope me-2 text-primary"></i>
                              {selectedEmployee.email}
                            </p>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="bg-light rounded-3 p-3">
                            <label className="text-muted small fw-semibold">Phone</label>
                            <p className="mb-0 fw-medium text-dark">
                              <i className="fas fa-phone me-2 text-primary"></i>
                              {selectedEmployee.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0 p-4">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill px-4"
                    onClick={() => setShowModal(false)}
                  >
                    <i className="fas fa-times me-2"></i>Close
                  </button>
                  <button type="button" className="btn btn-primary rounded-pill px-4">
                    <i className="fas fa-print me-2"></i>Print ID Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .employee-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
          }
          
          .badge {
            font-size: 0.75rem;
          }
          
          @media (max-width: 576px) {
            .display-4 {
              font-size: 2rem !important;
            }
            
            .lead {
              font-size: 1rem;
            }
            
            .modal-dialog {
              margin: 1rem;
            }
            
            .card-body .d-grid.gap-2 {
              gap: 0.5rem !important;
            }
          }
          
          @media (max-width: 768px) {
            .stats-card .d-flex {
              flex-direction: column;
              text-align: center;
            }
            
            .stats-card .bg-white.bg-opacity-20 {
              margin-bottom: 0.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}