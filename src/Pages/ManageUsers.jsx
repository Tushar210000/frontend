import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Mock data - replace with actual API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockUsers = [
        {
          id: 1,
          name: 'Rajesh Kumar',
          phone: '+91 9876543210',
          email: 'rajesh@example.com',
          age: 32,
          status: 'active',
          joinDate: '2024-01-15',
          applications: 3,
          profilePic: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
          id: 2,
          name: 'Priya Sharma',
          phone: '+91 8765432109',
          email: 'priya@example.com',
          age: 28,
          status: 'active',
          joinDate: '2024-02-20',
          applications: 2,
          profilePic: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
          id: 3,
          name: 'Amit Patel',
          phone: '+91 7654321098',
          email: 'amit@example.com',
          age: 35,
          status: 'inactive',
          joinDate: '2024-01-10',
          applications: 1,
          profilePic: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
          id: 4,
          name: 'Sunita Verma',
          phone: '+91 6543210987',
          email: 'sunita@example.com',
          age: 29,
          status: 'pending',
          joinDate: '2024-03-05',
          applications: 0,
          profilePic: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
          id: 5,
          name: 'Ravi Singh',
          phone: '+91 5432109876',
          email: 'ravi@example.com',
          age: 41,
          status: 'active',
          joinDate: '2023-12-20',
          applications: 5,
          profilePic: 'https://randomuser.me/api/portraits/men/5.jpg'
        }
      ];
      setUsers(mockUsers);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter and search logic
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    alert(`User status updated to ${newStatus}`);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
      alert('User deleted successfully');
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: 'bg-success',
      inactive: 'bg-secondary',
      pending: 'bg-warning',
      suspended: 'bg-danger'
    };
    return badges[status] || 'bg-secondary';
  };

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2>Manage Users</h2>
              <p className="text-muted mb-0">Total users: {users.length}</p>
            </div>
            <div className="btn-group">
              <button className="btn btn-primary">
                <i className="fas fa-plus me-2"></i>
                Add User
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-download me-2"></i>
                Export
              </button>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by name, phone, or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button 
                    className="btn btn-outline-secondary w-100"
                    onClick={() => {
                      setSearchTerm('');
                      setFilterStatus('all');
                    }}
                  >
                    <i className="fas fa-undo me-2"></i>
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Contact</th>
                      <th>Status</th>
                      <th>Join Date</th>
                      <th>Applications</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.length > 0 ? (
                      currentUsers.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={user.profilePic}
                                alt={user.name}
                                className="rounded-circle me-3"
                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                              />
                              <div>
                                <div className="fw-bold">{user.name}</div>
                                <small className="text-muted">Age: {user.age}</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <div>{user.phone}</div>
                              <small className="text-muted">{user.email}</small>
                            </div>
                          </td>
                          <td>
                            <span className={`badge ${getStatusBadge(user.status)}`}>
                              {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                            </span>
                          </td>
                          <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                          <td>
                            <span className="badge bg-info">
                              {user.applications}
                            </span>
                          </td>
                          <td>
                            <div className="btn-group btn-group-sm">
                              <button
                                className="btn btn-outline-primary"
                                title="View Details"
                              >
                                <i className="fas fa-eye"></i>
                              </button>
                              <div className="dropdown">
                                <button
                                  className="btn btn-outline-secondary dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  title="Change Status"
                                >
                                  <i className="fas fa-edit"></i>
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() => handleStatusChange(user.id, 'active')}
                                    >
                                      <i className="fas fa-check text-success me-2"></i>
                                      Set Active
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() => handleStatusChange(user.id, 'inactive')}
                                    >
                                      <i className="fas fa-pause text-secondary me-2"></i>
                                      Set Inactive
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() => handleStatusChange(user.id, 'suspended')}
                                    >
                                      <i className="fas fa-ban text-danger me-2"></i>
                                      Suspend
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => handleDeleteUser(user.id)}
                                title="Delete User"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          <div className="text-muted">
                            <i className="fas fa-users fa-3x mb-3 d-block"></i>
                            No users found matching your criteria
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Users pagination">
                  <ul className="pagination justify-content-center mt-4">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                    </li>
                    
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row mt-4">
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4>{users.filter(u => u.status === 'active').length}</h4>
                      <p className="mb-0">Active Users</p>
                    </div>
                    <i className="fas fa-user-check fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card text-white bg-warning">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4>{users.filter(u => u.status === 'pending').length}</h4>
                      <p className="mb-0">Pending Users</p>
                    </div>
                    <i className="fas fa-user-clock fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card text-white bg-secondary">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4>{users.filter(u => u.status === 'inactive').length}</h4>
                      <p className="mb-0">Inactive Users</p>
                    </div>
                    <i className="fas fa-user-minus fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h4>{users.filter(u => u.status === 'suspended').length}</h4>
                      <p className="mb-0">Suspended Users</p>
                    </div>
                    <i className="fas fa-user-slash fa-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .table th {
          border-top: none;
          font-weight: 600;
          color: #495057;
        }
        
        .btn-group-sm .btn {
          padding: 0.25rem 0.5rem;
        }
        
        .hover-shadow:hover {
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }
        
        .page-link {
          border-color: #dee2e6;
        }
        
        .page-item.active .page-link {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
      `}</style>
    </div>
  );
}