import React, { useState } from "react";
import {
  User,
  Edit3,
  Save,
  X,
  Camera,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Award,
  TrendingUp,
  Users,
  FileText,
} from "lucide-react";

// Mock useAuth hook
const useAuth = () => ({
  user: {
    name: "John Doe",
    employeeId: "EMP001",
    email: "john.doe@company.com",
    phone: "+1 (555) 123-4567",
    department: "Administration",
    position: "Senior Administrator",
    joinDate: "2022-01-15",
    address: "123 Main Street, City, State 12345",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
  },
});

export default function EmployeeProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    employeeId: user?.employeeId || "",
    email: user?.email || "",
    phone: user?.phone || "",
    department: user?.department || "",
    position: user?.position || "",
    joinDate: user?.joinDate || "",
    address: user?.address || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfileData({
      name: user?.name || "",
      employeeId: user?.employeeId || "",
      email: user?.email || "",
      phone: user?.phone || "",
      department: user?.department || "",
      position: user?.position || "",
      joinDate: user?.joinDate || "",
      address: user?.address || "",
    });
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container-fluid py-4 bg-light min-vh-100">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center bg-white p-4 rounded shadow-sm mb-4">
          <div>
            <h1 className="h3 fw-bold mb-1">Employee Profile</h1>
            <p className="text-muted">Manage your personal information and settings</p>
          </div>
          <div className="mt-3 mt-sm-0">
            {!isEditing ? (
              <button
                className="btn btn-primary d-flex align-items-center shadow"
                onClick={() => setIsEditing(true)}
              >
                <Edit3 size={16} className="me-2" />
                Edit Profile
              </button>
            ) : (
              <div className="d-flex gap-2">
                <button
                  className="btn btn-success d-flex align-items-center shadow"
                  onClick={handleSave}
                >
                  <Save size={16} className="me-2" />
                  Save
                </button>
                <button
                  className="btn btn-secondary d-flex align-items-center shadow"
                  onClick={handleCancel}
                >
                  <X size={16} className="me-2" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-4">
            {/* Profile Card */}
            <div className="card shadow-sm mb-4">
              <div className="bg-primary" style={{ height: "80px" }}></div>
              <div className="card-body text-center position-relative">
                <img
                  src={user?.profilePic}
                  alt="Profile"
                  className="rounded-circle border border-3 border-white shadow position-absolute top-0 start-50 translate-middle"
                  style={{ width: "96px", height: "96px", objectFit: "cover" }}
                />
                {isEditing && (
                  <button className="btn btn-sm btn-primary position-absolute top-50 start-50 translate-middle mt-5">
                    <Camera size={16} />
                  </button>
                )}
                <div className="mt-5 pt-2">
                  <h5 className="fw-bold">{profileData.name}</h5>
                  <p className="text-primary fw-medium mb-0">{profileData.position}</p>
                  <p className="text-muted">{profileData.department}</p>
                  <span className="badge bg-success">Active Employee</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between small">
                  <span className="text-muted">Employee ID</span>
                  <span className="fw-monospace bg-light px-2 rounded">
                    {profileData.employeeId}
                  </span>
                </div>
                <div className="d-flex justify-content-between small mt-2">
                  <span className="text-muted">Joined</span>
                  <span>{formatDate(profileData.joinDate)}</span>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-3 d-flex align-items-center">
                  <TrendingUp size={18} className="text-primary me-2" />
                  Performance Overview
                </h6>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bg-light rounded">
                      <FileText className="text-primary mb-2" />
                      <h5 className="fw-bold text-primary">156</h5>
                      <small className="text-muted">Applications</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded">
                      <Award className="text-success mb-2" />
                      <h5 className="fw-bold text-success">98%</h5>
                      <small className="text-muted">Approval Rate</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded">
                      <Users className="text-purple mb-2" />
                      <h5 className="fw-bold text-purple">23</h5>
                      <small className="text-muted">Users Managed</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded">
                      <FileText className="text-warning mb-2" />
                      <h5 className="fw-bold text-warning">5</h5>
                      <small className="text-muted">Reports</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-8">
            {/* Personal Info */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-white">
                <h6 className="fw-semibold mb-0 d-flex align-items-center">
                  <User size={18} className="text-primary me-2" />
                  Personal Information
                </h6>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  {/* Employee ID */}
                  <div className="col-md-6">
                    <label className="form-label">Employee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileData.employeeId}
                      disabled
                    />
                  </div>
                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label">
                      <Mail size={14} className="me-1" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label">
                      <Phone size={14} className="me-1" /> Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  {/* Department */}
                  <div className="col-md-6">
                    <label className="form-label">
                      <Building size={14} className="me-1" /> Department
                    </label>
                    <select
                      name="department"
                      className="form-select"
                      value={profileData.department}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    >
                      <option value="">Select Department</option>
                      <option value="Administration">Administration</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Insurance">Insurance</option>
                      <option value="Emergency Services">Emergency Services</option>
                      <option value="IT Support">IT Support</option>
                    </select>
                  </div>
                  {/* Position */}
                  <div className="col-md-6">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      name="position"
                      className="form-control"
                      value={profileData.position}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  {/* Join Date */}
                  <div className="col-md-6">
                    <label className="form-label">
                      <Calendar size={14} className="me-1" /> Join Date
                    </label>
                    <input
                      type="date"
                      name="joinDate"
                      className="form-control"
                      value={profileData.joinDate}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="form-label">
                    <MapPin size={14} className="me-1" /> Address
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    className="form-control"
                    value={profileData.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="card shadow-sm">
              <div className="card-header bg-white">
                <h6 className="fw-semibold mb-0 d-flex align-items-center">
                  <Lock size={18} className="text-primary me-2" />
                  Security Settings
                </h6>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center p-3 bg-warning bg-opacity-10 rounded border border-warning">
                  <div>
                    <p className="fw-medium mb-0">Password Security</p>
                    <small className="text-muted">Last changed 30 days ago</small>
                  </div>
                  <button className="btn btn-warning d-flex align-items-center">
                    <Lock size={14} className="me-1" /> Change Password
                  </button>
                </div>
                <div className="mt-3 p-3 bg-success bg-opacity-10 rounded border border-success d-flex align-items-center">
                  <div className="bg-success rounded-circle me-2" style={{ width: "8px", height: "8px" }}></div>
                  <small className="text-success">Two-factor authentication is enabled</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
