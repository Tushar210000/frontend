// import React, { useState } from "react";
// import {
//   User,
//   Edit3,
//   Save,
//   X,
//   Camera,
//   Lock,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   Building,
//   Award,
//   TrendingUp,
//   Users,
//   FileText,
// } from "lucide-react";

// // Mock useAuth hook
// const useAuth = () => ({
//   user: {
//     name: "John Doe",
//     employeeId: "EMP001",
//     email: "john.doe@company.com",
//     phone: "+1 (555) 123-4567",
//     department: "Administration",
//     position: "Senior Administrator",
//     joinDate: "2022-01-15",
//     address: "123 Main Street, City, State 12345",
//     profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
//   },
// });

// export default function EmployeeProfile() {
//   const { user } = useAuth();
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: user?.name || "",
//     employeeId: user?.employeeId || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     department: user?.department || "",
//     position: user?.position || "",
//     joinDate: user?.joinDate || "",
//     address: user?.address || "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     console.log("Saving profile data:", profileData);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setProfileData({
//       name: user?.name || "",
//       employeeId: user?.employeeId || "",
//       email: user?.email || "",
//       phone: user?.phone || "",
//       department: user?.department || "",
//       position: user?.position || "",
//       joinDate: user?.joinDate || "",
//       address: user?.address || "",
//     });
//     setIsEditing(false);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "Not specified";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="container-fluid-emp py-4 bg-light min-vh-100">
//       <div className="container">
//         {/* Header */}
//         <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center bg-white p-4 rounded shadow-sm mb-4">
//           <div>
//             <h1 className="h3 fw-bold mb-1">Employee Profile</h1>
//             <p className="text-muted">Manage your personal information and settings</p>
//           </div>
//           <div className="mt-3 mt-sm-0">
//             {!isEditing ? (
//               <button
//                 className="btn btn-primary d-flex align-items-center shadow"
//                 onClick={() => setIsEditing(true)}
//               >
//                 <Edit3 size={16} className="me-2" />
//                 Edit Profile
//               </button>
//             ) : (
//               <div className="d-flex gap-2">
//                 <button
//                   className="btn btn-success d-flex align-items-center shadow"
//                   onClick={handleSave}
//                 >
//                   <Save size={16} className="me-2" />
//                   Save
//                 </button>
//                 <button
//                   className="btn btn-secondary d-flex align-items-center shadow"
//                   onClick={handleCancel}
//                 >
//                   <X size={16} className="me-2" />
//                   Cancel
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="row g-4">
//           {/* Left Column */}
//           <div className="col-lg-4">
//             {/* Profile Card */}
//             <div className="card shadow-sm mb-4">
//               <div className="bg-primary" style={{ height: "80px" }}></div>
//               <div className="card-body text-center position-relative">
//                 <img
//                   src={user?.profilePic}
//                   alt="Profile"
//                   className="rounded-circle border border-3 border-white shadow position-absolute top-0 start-50 translate-middle"
//                   style={{ width: "96px", height: "96px", objectFit: "cover" }}
//                 />
//                 {isEditing && (
//                   <button className="btn btn-sm btn-primary position-absolute top-50 start-50 translate-middle mt-5">
//                     <Camera size={16} />
//                   </button>
//                 )}
//                 <div className="mt-5 pt-2">
//                   <h5 className="fw-bold">{profileData.name}</h5>
//                   <p className="text-primary fw-medium mb-0">{profileData.position}</p>
//                   <p className="text-muted">{profileData.department}</p>
//                   <span className="badge bg-success">Active Employee</span>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-between small">
//                   <span className="text-muted">Employee ID</span>
//                   <span className="fw-monospace bg-light px-2 rounded">
//                     {profileData.employeeId}
//                   </span>
//                 </div>
//                 <div className="d-flex justify-content-between small mt-2">
//                   <span className="text-muted">Joined</span>
//                   <span>{formatDate(profileData.joinDate)}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Performance Stats */}
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h6 className="fw-semibold mb-3 d-flex align-items-center">
//                   <TrendingUp size={18} className="text-primary me-2" />
//                   Performance Overview
//                 </h6>
//                 <div className="row g-3 text-center">
//                   <div className="col-6">
//                     <div className="p-3 bg-light rounded">
//                       <FileText className="text-primary mb-2" />
//                       <h5 className="fw-bold text-primary">156</h5>
//                       <small className="text-muted">Applications</small>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="p-3 bg-light rounded">
//                       <Award className="text-success mb-2" />
//                       <h5 className="fw-bold text-success">98%</h5>
//                       <small className="text-muted">Approval Rate</small>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="p-3 bg-light rounded">
//                       <Users className="text-purple mb-2" />
//                       <h5 className="fw-bold text-purple">23</h5>
//                       <small className="text-muted">Users Managed</small>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="p-3 bg-light rounded">
//                       <FileText className="text-warning mb-2" />
//                       <h5 className="fw-bold text-warning">5</h5>
//                       <small className="text-muted">Reports</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="col-lg-8">
//             {/* Personal Info */}
//             <div className="card shadow-sm mb-4">
//               <div className="card-header bg-white">
//                 <h6 className="fw-semibold mb-0 d-flex align-items-center">
//                   <User size={18} className="text-primary me-2" />
//                   Personal Information
//                 </h6>
//               </div>
//               <div className="card-body">
//                 <div className="row g-3">
//                   {/* Name */}
//                   <div className="col-md-6">
//                     <label className="form-label">Full Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       value={profileData.name}
//                       onChange={handleInputChange}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                   {/* Employee ID */}
//                   <div className="col-md-6">
//                     <label className="form-label">Employee ID</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={profileData.employeeId}
//                       disabled
//                     />
//                   </div>
//                   {/* Email */}
//                   <div className="col-md-6">
//                     <label className="form-label">
//                       <Mail size={14} className="me-1" /> Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       className="form-control"
//                       value={profileData.email}
//                       onChange={handleInputChange}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                   {/* Phone */}
//                   <div className="col-md-6">
//                     <label className="form-label">
//                       <Phone size={14} className="me-1" /> Phone
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       className="form-control"
//                       value={profileData.phone}
//                       onChange={handleInputChange}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                   {/* Department */}
//                   <div className="col-md-6">
//                     <label className="form-label">
//                       <Building size={14} className="me-1" /> Department
//                     </label>
//                     <select
//                       name="department"
//                       className="form-select"
//                       value={profileData.department}
//                       onChange={handleInputChange}
//                       disabled={!isEditing}
//                     >
//                       <option value="">Select Department</option>
//                       <option value="Administration">Administration</option>
//                       <option value="Healthcare">Healthcare</option>
//                       <option value="Insurance">Insurance</option>
//                       <option value="Emergency Services">Emergency Services</option>
//                       <option value="IT Support">IT Support</option>
//                     </select>
//                   </div>
//                   {/* Position */}
//                   <div className="col-md-6">
//                     <label className="form-label">Position</label>
//                     <input
//                       type="text"
//                       name="position"
//                       className="form-control"
//                       value={profileData.position}
//                       onChange={handleInputChange}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                   {/* Join Date */}
//                   <div className="col-md-6">
//                     <label className="form-label">
//                       <Calendar size={14} className="me-1" /> Join Date
//                     </label>
//                     <input
//                       type="date"
//                       name="joinDate"
//                       className="form-control"
//                       value={profileData.joinDate}
//                       onChange={handleInputChange}
//                       disabled={!isEditing}
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-3">
//                   <label className="form-label">
//                     <MapPin size={14} className="me-1" /> Address
//                   </label>
//                   <textarea
//                     name="address"
//                     rows="3"
//                     className="form-control"
//                     value={profileData.address}
//                     onChange={handleInputChange}
//                     disabled={!isEditing}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Security */}
//             <div className="card shadow-sm">
//               <div className="card-header bg-white">
//                 <h6 className="fw-semibold mb-0 d-flex align-items-center">
//                   <Lock size={18} className="text-primary me-2" />
//                   Security Settings
//                 </h6>
//               </div>
//               <div className="card-body">
//                 <div className="d-flex justify-content-between align-items-center p-3 bg-warning bg-opacity-10 rounded border border-warning">
//                   <div>
//                     <p className="fw-medium mb-0">Password Security</p>
//                     <small className="text-muted">Last changed 30 days ago</small>
//                   </div>
//                   <button className="btn btn-warning d-flex align-items-center">
//                     <Lock size={14} className="me-1" /> Change Password
//                   </button>
//                 </div>
//                 <div className="mt-3 p-3 bg-success bg-opacity-10 rounded border border-success d-flex align-items-center">
//                   <div className="bg-success rounded-circle me-2" style={{ width: "8px", height: "8px" }}></div>
//                   <small className="text-success">Two-factor authentication is enabled</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
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
  Shield,
  CheckCircle,
  Bell,
  Settings,
  Star,
  Activity,
} from "lucide-react";

export default function EmployeeProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    employeeId: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    joinDate: "",
    address: "",
    profilePic: "",
  });
  const [loading, setLoading] = useState(true);
  const [saveAnimation, setSaveAnimation] = useState(false);

  // Mock API call simulation
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }
        const res = await fetch("https://backendnow-pem2.onrender.com/api/employee/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          setProfileData({
            name: data.profile.name,
            employeeId: data.profile.employeeId,
            email: data.profile.email,
            phone: data.profile.phone,
            department: data.profile.department,
            position: data.profile.position,
            joinDate: data.profile.joinDate,
            address: data.profile.address,
            profilePic:
              data.profile.profilePic ||
              "https://randomuser.me/api/portraits/men/75.jpg",
          });
        } else {
          console.error(data.message);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setSaveAnimation(true);
    // Simulate API save
    setTimeout(() => {
      setIsEditing(false);
      setSaveAnimation(false);
      // Show success toast
    }, 2000);
  };

  const handleCancel = () => {
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

  if (loading) {
    return (
      <>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="text-center">
            <div
              className="spinner-border text-light mb-4"
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <h3 className="text-white mb-2">Loading Your Profile</h3>
            <p className="text-white-50">
              Please wait while we fetch your information...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style>{`
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --warning-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          --glass-bg: rgba(255, 255, 255, 0.25);
          --glass-border: rgba(255, 255, 255, 0.18);
          --shadow-soft: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
          --shadow-hover: 0 15px 35px 0 rgba(31, 38, 135, 0.25);
          --transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: var(--primary-gradient);
          min-height: 100vh;
          overflow-x: hidden;
          color: #1a202c;
          line-height: 1.6;
        }

        /* Glassmorphism effect */
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: var(--shadow-soft);
          transition: var(--transition);
          color: #1a202c;
        }

        .glass-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        /* Profile Header */
        .profile-hero {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(30px);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          position: relative;
          overflow: hidden;
        }

        .profile-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Profile Avatar */
        .avatar-container {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .avatar-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          transition: var(--transition);
        }

        .avatar-img:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 48px rgba(0,0,0,0.4);
        }

        .camera-btn {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .camera-btn:hover {
          transform: scale(1.1);
        }

        /* Status Badge */
        .status-badge {
          background: linear-gradient(135deg, #4ade80, #22c55e);
          color: white;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(34, 197, 94, 0.3);
        }

        /* Modern Cards */
        .modern-card {
          background: rgba(255, 255, 255, 0.98);
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          transition: var(--transition);
          color: #1a202c;
        }

        .modern-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
        }

        .card-header-modern {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
          border-bottom: 1px solid rgba(102, 126, 234, 0.1);
          padding: 1.5rem;
          color: #1a202c;
        }

        /* Form Controls */
        .form-control-modern {
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 1rem;
          font-weight: 500;
          transition: var(--transition);
          background: rgba(255, 255, 255, 0.9);
          color: #1a202c;
        }

        .form-control-modern:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.15);
          background: white;
          outline: none;
        }

        .form-control-modern:disabled {
          background: rgba(248, 250, 252, 0.8);
          border-color: #e2e8f0;
          color: #64748b;
          font-weight: 500;
        }

        /* Form Labels */
        .form-label {
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          letter-spacing: 0.025em;
        }

        /* Stats Cards */
        .stat-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(102, 126, 234, 0.1);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary-gradient);
        }

        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          background: rgba(255, 255, 255, 0.95);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
        }

        .stat-card .small {
          color: #4a5568;
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Buttons */
        .btn-gradient-primary {
          background: var(--primary-gradient);
          border: none;
          color: white;
          border-radius: 12px;
          padding: 12px 24px;
          font-weight: 600;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .btn-gradient-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .btn-gradient-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
        }

        .btn-gradient-primary:hover::before {
          left: 100%;
        }

        .btn-gradient-success {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border: none;
          color: white;
          border-radius: 12px;
          padding: 12px 24px;
          font-weight: 600;
          transition: var(--transition);
        }

        .btn-gradient-success:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);
        }

        /* Security Alerts */
        .security-card {
          border-radius: 16px;
          padding: 1.5rem;
          border: none;
          margin-bottom: 1rem;
        }

        .security-warning {
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-left: 4px solid #f59e0b;
        }

        .security-success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-left: 4px solid #22c55e;
        }

        .security-card h6,
        .security-card .fw-semibold {
          color: #1a202c;
          font-weight: 600;
        }

        .security-card .text-muted {
          color: #64748b !important;
          font-weight: 500;
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Loading animation */
        .save-loading {
          animation: saveAnimation 2s ease-in-out;
        }

        @keyframes saveAnimation {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); background: #22c55e; }
          100% { transform: scale(1); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .avatar-container {
            width: 100px;
            height: 100px;
          }
          
          .avatar-img {
            width: 100px;
            height: 100px;
          }
          
          .stat-card {
            padding: 1rem;
            margin-bottom: 1rem;
          }
          
          .btn-gradient-primary,
          .btn-gradient-success {
            width: 100%;
            margin-bottom: 0.5rem;
          }
        }

        /* Typography Enhancements */
        .display-5 {
          font-weight: 700;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          line-height: 1.2;
        }

        .fw-bold {
          font-weight: 700 !important;
          color: #1a202c;
        }

        .fw-semibold {
          font-weight: 600 !important;
          color: #2d3748;
        }

        .text-muted {
          color: #64748b !important;
          font-weight: 500;
        }

        .text-primary {
          color: #667eea !important;
          font-weight: 600;
        }

        .text-white-50 {
          color: rgba(255, 255, 255, 0.75) !important;
        }

        /* Profile specific text styles */
        .profile-hero .text-white {
          color: white !important;
          font-weight: 500;
        }

        .profile-hero h1 {
          color: white !important;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .profile-hero p {
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .badge {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9) !important;
        }
      `}</style>

      <div className="container-fluid px-3 px-md-4 py-4">
        {/* Profile Header */}
        <div className="profile-hero mb-5 fade-in">
          <div className="p-4 p-md-5">
            <div
              className="row align-items-center position-relative"
              style={{ zIndex: 2 }}
            >
              <div className="col-lg-8 col-md-7">
                <div className="text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge bg-white bg-opacity-20 px-3 py-2 me-3">
                      <User size={16} className="me-2" />
                      Employee Profile
                    </div>
                    <Bell size={20} className="text-white-50" />
                  </div>
                  <h1 className="display-5 fw-bold mb-2">{profileData.name}</h1>
                  <p className="fs-5 mb-0 text-white-50">
                    Manage your personal information and account settings
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 text-center">
                <div className="avatar-container mx-auto">
                  <img
                    src={
                      profileData.profilePic ||
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    }
                    alt="Profile"
                    className="avatar-img"
                  />
                  {isEditing && (
                    <div className="camera-btn">
                      <Camera size={18} className="text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Sidebar */}
          <div className="col-lg-4">
            {/* Profile Summary Card */}
            <div className="modern-card mb-4 fade-in">
              <div className="p-4 text-center">
                <h5 className="fw-bold mb-2">{profileData.name}</h5>
                <p className="text-primary fw-semibold mb-1">
                  {profileData.position}
                </p>
                <p className="text-muted mb-3">{profileData.department}</p>

                <div className="status-badge mb-4">
                  <CheckCircle size={16} />
                  Active Employee
                </div>

                <div className="row text-center">
                  <div className="col-6">
                    <div className="border-end">
                      <div className="fw-bold text-muted small">
                        Employee ID
                      </div>
                      <div className="small fw-semibold">
                        {profileData.employeeId}
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fw-bold text-muted small">Joined</div>
                    <div className="small fw-semibold">
                      {formatDate(profileData.joinDate)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="modern-card fade-in">
              <div className="card-header-modern">
                <h5 className="mb-0 fw-bold d-flex align-items-center">
                  <TrendingUp size={20} className="me-2 text-primary" />
                  Performance Overview
                </h5>
              </div>
              <div className="p-4">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="stat-card">
                      <FileText size={24} className="text-primary mb-2" />
                      <div className="stat-number">156</div>
                      <div className="small text-muted fw-semibold">
                        Applications
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card">
                      <Award size={24} className="text-success mb-2" />
                      <div className="stat-number">98%</div>
                      <div className="small text-muted fw-semibold">
                        Approval Rate
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card">
                      <Users size={24} className="text-info mb-2" />
                      <div className="stat-number">23</div>
                      <div className="small text-muted fw-semibold">
                        Users Managed
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-card">
                      <Activity size={24} className="text-warning mb-2" />
                      <div className="stat-number">5</div>
                      <div className="small text-muted fw-semibold">
                        Reports
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            {/* Action Buttons */}
            <div className="d-flex flex-column flex-md-row gap-2 justify-content-end mb-4">
              {!isEditing ? (
                <button
                  className="btn btn-gradient-primary d-flex align-items-center justify-content-center"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit3 size={18} className="me-2" />
                  Edit Profile
                </button>
              ) : (
                <div className="d-flex flex-column flex-md-row gap-2">
                  <button
                    className={`btn btn-gradient-success d-flex align-items-center justify-content-center ${
                      saveAnimation ? "save-loading" : ""
                    }`}
                    onClick={handleSave}
                    disabled={saveAnimation}
                  >
                    {saveAnimation ? (
                      <>
                        <div
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={18} className="me-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                  <button
                    className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                    onClick={handleCancel}
                    style={{ borderRadius: "12px" }}
                  >
                    <X size={18} className="me-2" />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Personal Information */}
            <div className="modern-card mb-4 fade-in">
              <div className="card-header-modern">
                <h5 className="mb-0 fw-bold d-flex align-items-center">
                  <User size={20} className="me-2 text-primary" />
                  Personal Information
                </h5>
              </div>
              <div className="p-4">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-modern"
                      value={profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Employee ID
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-modern"
                      value={profileData.employeeId}
                      disabled
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <Mail size={16} className="me-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-modern"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <Phone size={16} className="me-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control form-control-modern"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <Building size={16} className="me-2" />
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      className="form-control form-control-modern"
                      value={profileData.department}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Position</label>
                    <input
                      type="text"
                      name="position"
                      className="form-control form-control-modern"
                      value={profileData.position}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      <Calendar size={16} className="me-2" />
                      Join Date
                    </label>
                    <input
                      type="date"
                      name="joinDate"
                      className="form-control form-control-modern"
                      value={profileData.joinDate}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      <MapPin size={16} className="me-2" />
                      Address
                    </label>
                    <textarea
                      name="address"
                      rows="3"
                      className="form-control form-control-modern"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="modern-card fade-in">
              <div className="card-header-modern">
                <h5 className="mb-0 fw-bold d-flex align-items-center">
                  <Shield size={20} className="me-2 text-primary" />
                  Security Settings
                </h5>
              </div>
              <div className="p-4">
                <div className="security-card security-warning">
                  <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                    <div className="mb-3 mb-md-0">
                      <h6 className="fw-bold mb-1">
                        <Lock size={18} className="me-2" />
                        Password Security
                      </h6>
                      <p className="text-muted mb-0 small">
                        Last changed 30 days ago
                      </p>
                    </div>
                    <button className="btn btn-warning">
                      <Lock size={16} className="me-2" />
                      Change Password
                    </button>
                  </div>
                </div>

                <div className="security-card security-success">
                  <div className="d-flex align-items-center">
                    <CheckCircle size={20} className="text-success me-3" />
                    <div>
                      <div className="fw-semibold text-success">
                        Two-Factor Authentication Enabled
                      </div>
                      <div className="small text-muted">
                        Your account is protected with 2FA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
