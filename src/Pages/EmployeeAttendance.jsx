// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../components/AuthContext';

// export default function EmployeeAttendance() {
//   const { user } = useAuth();
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [attendanceStatus, setAttendanceStatus] = useState('not-checked-in');
//   const [attendanceHistory, setAttendanceHistory] = useState([]);
//   const [monthlyStats, setMonthlyStats] = useState({
//     present: 0,
//     late: 0,
//     absent: 0,
//     earlyDeparture: 0,
//     paidLeave: 0,
//     totalWorkingHours: 0,
//     requiredWorkingHours: 0,
//     hoursDifference: 0
//   });
//   const [showLeaveModal, setShowLeaveModal] = useState(false);
//   const [leaveDate, setLeaveDate] = useState('');
//   const [leaveType, setLeaveType] = useState('paid');
//   const [leaveReason, setLeaveReason] = useState('');

//   // Calculate days in current month
//   const getDaysInMonth = () => {
//     const date = new Date();
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   // Calculate working days in month (excluding Sundays)
//   const getWorkingDaysInMonth = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = date.getMonth();
//     let count = 0;
    
//     // Get the number of days in the month
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
    
//     // Iterate through the days
//     for (let i = 1; i <= daysInMonth; i++) {
//       const currentDate = new Date(year, month, i);
//       // Skip Sundays (0 is Sunday)
//       if (currentDate.getDay() !== 0 && currentDate <= new Date()) {
//         count++;
//       }
//     }
    
//     return count;
//   };

//   // Initialize user data if not exists
//   useEffect(() => {
//     if (!localStorage.getItem(`user_${user.id}_initialized`)) {
//       // Clear any existing attendance data for this user
//       Object.keys(localStorage).forEach(key => {
//         if (key.startsWith(`attendance_${user.id}_) || key.startsWith(leave_${user.id}_`)) {
//           localStorage.removeItem(key);
//         }
//       });
      
//       // Mark user as initialized
//       localStorage.setItem(`user_${user.id}_initialized`, 'true');
//     }
//   }, [user.id]);

//   // Simulate fetching attendance data
//   useEffect(() => {
//     // Update time every second
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     // Simulate fetching attendance data
//     const fetchAttendanceData = () => {
//       // Check if user has checked in today
//       const todayKey = `attendance_${user.id}_${new Date().toDateString()}`;
//       const hasCheckedInToday = localStorage.getItem(todayKey);
      
//       if (hasCheckedInToday) {
//         const record = JSON.parse(hasCheckedInToday);
//         const checkInTime = new Date(record.checkIn);
//         const now = new Date();
        
//         if (record.checkOut) {
//           setAttendanceStatus('completed');
//         } else {
//           const diffMs = now - checkInTime;
//           const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
          
//           if (diffHrs >= 8) {
//             setAttendanceStatus('should-check-out');
//           } else {
//             setAttendanceStatus('checked-in');
//           }
//         }
//       } else {
//         setAttendanceStatus('not-checked-in');
//       }

//       // Simulate attendance history for the current month
//       const history = [];
//       const daysInMonth = getDaysInMonth();
//       const currentDate = new Date();
//       const currentMonth = currentDate.getMonth();
//       const currentYear = currentDate.getFullYear();
      
//       let totalWorkingHours = 0;
      
//       for (let i = 1; i <= daysInMonth; i++) {
//         const date = new Date(currentYear, currentMonth, i);
        
//         // Skip future dates
//         if (date > currentDate) continue;
        
//         // Check if Sunday
//         const isSunday = date.getDay() === 0;
        
//         // Check if leave applied for this date
//         const leaveKey = `leave_${user.id}_${date.toDateString()}`;
//         const leaveData = localStorage.getItem(leaveKey);
        
//         if (leaveData) {
//           const leave = JSON.parse(leaveData);
//           history.push({
//             date: date.toDateString(),
//             checkIn: null,
//             checkOut: null,
//             status: leave.type === 'paid' ? 'paid-leave' : 'unpaid-leave',
//             workingHours: 0,
//             isLeave: true,
//             leaveReason: leave.reason
//           });
//           continue;
//         }
        
//         // For working days, create attendance records
//         if (!isSunday) {
//           // Check if we have actual data for this day
//           const dayKey = `attendance_${user.id}_${date.toDateString()}`;
//           const dayRecord = localStorage.getItem(dayKey);
          
//           if (dayRecord) {
//             const record = JSON.parse(dayRecord);
//             const workingHours = record.workingHours || 0;
//             totalWorkingHours += workingHours;
            
//             history.push({
//               date: date.toDateString(),
//               checkIn: record.checkIn ? new Date(record.checkIn) : null,
//               checkOut: record.checkOut ? new Date(record.checkOut) : null,
//               status: record.status || 'present',
//               workingHours: workingHours,
//               isLeave: false
//             });
//           } else {
//             // For demo purposes, create some random data for past dates
//             if (date < currentDate && !isSunday) {
//               const statuses = ['present', 'present', 'present', 'present', 'late', 'early-departure', 'absent'];
//               const status = statuses[Math.floor(Math.random() * statuses.length)];
              
//               let checkIn = null;
//               let checkOut = null;
//               let workingHours = 0;
              
//               if (status !== 'absent') {
//                 checkIn = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8 + Math.floor(Math.random() * 3), Math.floor(Math.random() * 60));
//                 checkOut = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16 + Math.floor(Math.random() * 3), Math.floor(Math.random() * 60));
//                 workingHours = 7 + Math.floor(Math.random() * 2);
//                 totalWorkingHours += workingHours;
//               }
              
//               history.push({
//                 date: date.toDateString(),
//                 checkIn: checkIn,
//                 checkOut: checkOut,
//                 status: status,
//                 workingHours: workingHours,
//                 isLeave: false
//               });
//             }
//           }
//         }
//       }
      
//       // Sort by date (newest first)
//       history.sort((a, b) => new Date(b.date) - new Date(a.date));
//       setAttendanceHistory(history);
      
//       // Calculate monthly stats - only for the current month
//       const monthHistory = history.filter(item => new Date(item.date).getMonth() === currentMonth);
      
//       const workingDays = getWorkingDaysInMonth();
//       const requiredHours = workingDays * 8;
//       const hoursDifference = totalWorkingHours - requiredHours;
      
//       const stats = {
//         present: monthHistory.filter(item => item.status === 'present').length,
//         late: monthHistory.filter(item => item.status === 'late').length,
//         absent: monthHistory.filter(item => item.status === 'absent').length,
//         earlyDeparture: monthHistory.filter(item => item.status === 'early-departure').length,
//         paidLeave: monthHistory.filter(item => item.status === 'paid-leave').length,
//         totalWorkingHours: totalWorkingHours,
//         requiredWorkingHours: requiredHours,
//         hoursDifference: hoursDifference
//       };
      
//       setMonthlyStats(stats);
//     };

//     fetchAttendanceData();

//     return () => clearInterval(timer);
//   }, [user.id, attendanceStatus, showLeaveModal]);

//   const handleCheckIn = () => {
//     const now = new Date();
//     const attendanceRecord = {
//       checkIn: now,
//       date: now.toDateString(),
//       status: now.getHours() > 9 ? 'late' : 'present'
//     };
    
//     // Store in localStorage (in a real app, this would be an API call)
//     localStorage.setItem(`attendance_${user.id}_${now.toDateString()}, JSON.stringify(attendanceRecord)`);
//     setAttendanceStatus('checked-in');
    
//     // Update attendance history
//     setAttendanceHistory(prev => {
//       const newHistory = [...prev];
//       const todayIndex = newHistory.findIndex(item => item.date === now.toDateString());
      
//       if (todayIndex !== -1) {
//         newHistory[todayIndex] = {
//           ...newHistory[todayIndex],
//           checkIn: now,
//           status: now.getHours() > 9 ? 'late' : 'present',
//           isLeave: false
//         };
//       } else {
//         newHistory.unshift({
//           date: now.toDateString(),
//           checkIn: now,
//           checkOut: null,
//           status: now.getHours() > 9 ? 'late' : 'present',
//           workingHours: 0,
//           isLeave: false
//         });
//       }
      
//       return newHistory;
//     });
//   };

//   const handleCheckOut = () => {
//     const now = new Date();
//     const todayKey = `attendance_${user.id}_${new Date().toDateString()}`;
//     const existingRecord = JSON.parse(localStorage.getItem(todayKey) || '{}');
    
//     const checkInTime = new Date(existingRecord.checkIn);
//     const diffMs = now - checkInTime;
//     const diffHrs = Math.floor((diffMs % 86400000) / 3600000);
//     const diffMins = Math.floor((diffMs % 3600000) / 60000);
    
//     // Determine status
//     let status = existingRecord.status || 'present';
//     if (diffHrs < 8) status = 'early-departure';
    
//     const workingHours = diffHrs + (diffMins / 60);
    
//     const updatedRecord = {
//       ...existingRecord,
//       checkOut: now,
//       status: status,
//       workingHours: workingHours
//     };
    
//     // Store in localStorage (in a real app, this would be an API call)
//     localStorage.setItem(todayKey, JSON.stringify(updatedRecord));
//     setAttendanceStatus('completed');
    
//     // Update attendance history
//     setAttendanceHistory(prev => {
//       const newHistory = [...prev];
//       const todayIndex = newHistory.findIndex(item => item.date === new Date().toDateString());
      
//       if (todayIndex !== -1) {
//         newHistory[todayIndex] = {
//           ...newHistory[todayIndex],
//           checkOut: now,
//           status: status,
//           workingHours: workingHours,
//           isLeave: false
//         };
//       }
      
//       return newHistory;
//     });
//   };

//   const handleApplyLeave = () => {
//     if (!leaveDate) {
//       alert('Please select a date for leave');
//       return;
//     }
    
//     const leaveRecord = {
//       date: new Date(leaveDate).toDateString(),
//       type: leaveType,
//       reason: leaveReason,
//       appliedOn: new Date()
//     };
    
//     // Store in localStorage
//     localStorage.setItem(`leave_${user.id}_${new Date(leaveDate).toDateString()}, JSON.stringify(leaveRecord)`);
    
//     // Reset form and close modal
//     setLeaveDate('');
//     setLeaveType('paid');
//     setLeaveReason('');
//     setShowLeaveModal(false);
    
//     // Show success message
//     alert('Leave application submitted successfully!');
//   };

//   return (
//     <>
//       <div className="dashboard-container">
//         <div className="container-fluid py-4">
//           <div className="row">
//             <div className="col-12">
//               {/* Header */}
//               <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
//                 <div className="mb-3 mb-md-0">
//                   <h1 className="h3 mb-1">Attendance Management</h1>
//                   <p className="text-muted mb-0">Track and manage your daily attendance</p>
//                 </div>
//                 <div>
//                   <button 
//                     className="btn btn-outline-primary me-2"
//                     onClick={() => setShowLeaveModal(true)}
//                   >
//                     <i className="fas fa-calendar-plus me-2"></i>Apply Leave
//                   </button>
//                   <Link to="/employee-dashboard" className="btn btn-outline-secondary">
//                     <i className="fas fa-arrow-left me-2"></i>Back to Dashboard
//                   </Link>
//                 </div>
//               </div>

//               {/* Current Time & Date Card */}
//               <div className="row mb-4">
//                 <div className="col-lg-8 mb-4 mb-lg-0">
//                   <div className="card time-card">
//                     <div className="card-body text-center py-5">
//                       <h3 className="current-time mb-1">{currentTime.toLocaleTimeString()}</h3>
//                       <p className="current-date text-muted mb-4">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      
//                       {attendanceStatus === 'not-checked-in' && (
//                         <button className="btn btn-primary btn-lg px-5 py-3" onClick={handleCheckIn}>
//                           <i className="fas fa-fingerprint me-2"></i>Check In
//                         </button>
//                       )}
                      
//                       {attendanceStatus === 'checked-in' && (
//                         <button className="btn btn-success btn-lg px-5 py-3" onClick={handleCheckOut}>
//                           <i className="fas fa-sign-out-alt me-2"></i>Check Out
//                         </button>
//                       )}
                      
//                       {attendanceStatus === 'should-check-out' && (
//                         <div>
//                           <div className="alert alert-warning mb-3">
//                             <i className="fas fa-exclamation-triangle me-2"></i>
//                             You've exceeded 8 working hours. Please check out.
//                           </div>
//                           <button className="btn btn-success btn-lg px-5 py-3" onClick={handleCheckOut}>
//                             <i className="fas fa-sign-out-alt me-2"></i>Check Out Now
//                           </button>
//                         </div>
//                       )}
                      
//                       {attendanceStatus === 'completed' && (
//                         <div>
//                           <div className="alert alert-success mb-3">
//                             <i className="fas fa-check-circle me-2"></i>
//                             You've completed your attendance for today. Thank you!
//                           </div>
//                           <button className="btn btn-outline-secondary" disabled>
//                             Attendance Completed
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="col-lg-4">
//                   <div className="card stats-card h-100">
//                     <div className="card-header">
//                       <h5 className="card-title mb-0">This Month's Summary</h5>
//                       <p className="text-muted small mb-0">As of {new Date().toLocaleDateString()}</p>
//                     </div>
//                     {/* <div className="card-body">
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-success">• Present</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.present} days</span>
//                       </div>
                      
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-warning">• Late Arrival</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.late} days</span>
//                       </div>
                      
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-danger">• Absent</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.absent} days</span>
//                       </div>
                      
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-info">• Left Early</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.earlyDeparture} days</span>
//                       </div>
                      
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-primary">• Paid Leave</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.paidLeave} days</span>
//                       </div>
                      
//                       <hr />
                      
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-dark">• Total Working Hours</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.totalWorkingHours.toFixed(1)}h</span>
//                       </div>
                      
//                       <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div>
//                           <span className="text-dark">• Required Hours</span>
//                         </div>
//                         <span className="fw-bold">{monthlyStats.requiredWorkingHours}h</span>
//                       </div>
                      
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div>
//                           <span className="text-dark">• Balance</span>
//                         </div>
//                         <span className={fw-bold ${monthlyStats.hoursDifference >= 0 ? 'text-success' : 'text-danger'}}>
//                           {monthlyStats.hoursDifference >= 0 ? '+' : ''}{monthlyStats.hoursDifference.toFixed(1)}h
//                         </span>
//                       </div>
//                     </div> */}
//                     <div className="card-body">
//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-success">• Present</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.present} days</span>
//   </div>

//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-warning">• Late Arrival</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.late} days</span>
//   </div>

//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-danger">• Absent</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.absent} days</span>
//   </div>

//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-info">• Left Early</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.earlyDeparture} days</span>
//   </div>

//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-primary">• Paid Leave</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.paidLeave} days</span>
//   </div>

//   <hr />

//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-dark">• Total Working Hours</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.totalWorkingHours.toFixed(1)}h</span>
//   </div>

//   <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
//     <div><span className="text-dark">• Required Hours</span></div>
//     <span className="fw-bold text-truncate">{monthlyStats.requiredWorkingHours}h</span>
//   </div>

//   <div className="d-flex flex-wrap justify-content-between align-items-center">
//     <div><span className="text-dark">• Balance</span></div>
//     <span className={`fw-bold text-truncate ${monthlyStats.hoursDifference >= 0 ? 'text-success' : 'text-danger'}`}>
//       {monthlyStats.hoursDifference >= 0 ? '+' : ''}{monthlyStats.hoursDifference.toFixed(1)}h
//     </span>
//   </div>
// </div>

//                   </div>
//                 </div>
//               </div>

//               {/* Attendance History */}
//               <div className="card">
//                 <div className="card-header d-flex justify-content-between align-items-center flex-column flex-md-row">
//                   <h5 className="card-title mb-2 mb-md-0">Attendance History</h5>
//                   <span className="badge bg-primary">Current Month</span>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <table className="table table-hover">
//                       <thead>
//                         <tr>
//                           <th>Date</th>
//                           <th>Check In</th>
//                           <th>Check Out</th>
//                           <th>Working Hours</th>
//                           <th>Status</th>
//                           <th>Remarks</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {attendanceHistory.map((record, index) => (
//                           <tr key={index} className={record.date === new Date().toDateString() ? 'table-active' : ''}>
//                             <td>
//                               {new Date(record.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
//                               {record.date === new Date().toDateString() && 
//                                 <span className="badge bg-info ms-2">Today</span>
//                               }
//                               {new Date(record.date).getDay() === 0 && 
//                                 <span className="badge bg-secondary ms-2">Sunday</span>
//                               }
//                             </td>
//                             <td>{record.checkIn ? record.checkIn.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '--:--'}</td>
//                             <td>{record.checkOut ? record.checkOut.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '--:--'}</td>
//                             <td>
//                               {record.workingHours > 0 ? 
//                                 `${Math.floor(record.workingHours)}h ${Math.round((record.workingHours % 1) * 60)}m` : 
//                                 '--'
//                               }
//                             </td>
//                             <td>
//                               <span className={`badge bg-${{
//                                 'present': 'success',
//                                 'late': 'warning',
//                                 'absent': 'danger',
//                                 'early-departure': 'info',
//                                 'paid-leave': 'primary',
//                                 'unpaid-leave': 'secondary'
//                               }[record.status] || 'secondary'}`}>
//                                 {record.status ? record.status.charAt(0).toUpperCase() + record.status.slice(1).replace(/-/g, ' ') : 'Unknown'}
//                               </span>
//                             </td>
//                             <td>
//                               {record.isLeave && record.leaveReason ? record.leaveReason : '--'}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Leave Application Modal */}
//       {showLeaveModal && (
//         <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Apply for Leave</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowLeaveModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 <div className="mb-3">
//                   <label htmlFor="leaveDate" className="form-label">Leave Date</label>
//                   <input 
//                     type="date" 
//                     className="form-control" 
//                     id="leaveDate" 
//                     value={leaveDate}
//                     onChange={(e) => setLeaveDate(e.target.value)}
//                     min={new Date().toISOString().split('T')[0]}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="leaveType" className="form-label">Leave Type</label>
//                   <select 
//                     className="form-select" 
//                     id="leaveType"
//                     value={leaveType}
//                     onChange={(e) => setLeaveType(e.target.value)}
//                   >
//                     <option value="paid">Paid Leave</option>
//                     <option value="unpaid">Unpaid Leave</option>
//                   </select>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="leaveReason" className="form-label">Reason</label>
//                   <textarea 
//                     className="form-control" 
//                     id="leaveReason" 
//                     rows="3"
//                     value={leaveReason}
//                     onChange={(e) => setLeaveReason(e.target.value)}
//                   ></textarea>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" onClick={() => setShowLeaveModal(false)}>Cancel</button>
//                 <button type="button" className="btn btn-primary" onClick={handleApplyLeave}>Apply</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

     
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import axios from "axios";

const API = axios.create({ baseURL: "https://backendnow-pem2.onrender.com/api" });

export default function EmployeeAttendance() {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [attendanceStatus, setAttendanceStatus] = useState("not-checked-in");
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState({
    present: 0,
    late: 0,
    absent: 0,
    earlyDeparture: 0,
    paidLeave: 0,
    totalWorkingHours: 0,
    requiredWorkingHours: 0,
    hoursDifference: 0,
  });
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveType, setLeaveType] = useState("paid");
  const [leaveReason, setLeaveReason] = useState("");

  // attach JWT automatically
  API.interceptors.request.use((req) => {
    const token=localStorage.getItem('token')
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  const getWorkingDaysInMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    let count = 0;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      if (currentDate.getDay() !== 0 && currentDate <= new Date()) {
        count++;
      }
    }
    return count;
  };

  // fetch attendance history + stats
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    const fetchAttendanceData = async () => {
      try {
        const { data } = await API.get("/attendance/history");
        if (data.success) {
          setAttendanceHistory(data.history);

          const currentMonth = new Date().getMonth();
          const monthHistory = data.history.filter(
            (r) => new Date(r.date).getMonth() === currentMonth
          );

          const totalWorkingHours = monthHistory.reduce(
            (acc, r) => acc + (r.workingHours || 0),
            0
          );
          const workingDays = getWorkingDaysInMonth();
          const requiredHours = workingDays * 8;
          const hoursDifference = totalWorkingHours - requiredHours;

          setMonthlyStats({
            present: monthHistory.filter((r) => r.status === "present").length,
            late: monthHistory.filter((r) => r.status === "late").length,
            absent: monthHistory.filter((r) => r.status === "absent").length,
            earlyDeparture: monthHistory.filter(
              (r) => r.status === "early-departure"
            ).length,
            paidLeave: monthHistory.filter((r) => r.status === "paid-leave")
              .length,
            totalWorkingHours,
            requiredWorkingHours: requiredHours,
            hoursDifference,
          });

          const today = data.history.find(
            (r) =>
              new Date(r.date).toDateString() === new Date().toDateString()
          );
          if (!today) {
            setAttendanceStatus("not-checked-in");
          } else if (today.checkIn && !today.checkOut) {
            setAttendanceStatus("checked-in");
          } else if (today.checkIn && today.checkOut) {
            setAttendanceStatus("completed");
          }
        }
      } catch (err) {
        console.error("Error fetching attendance:", err);
      }
    };

    fetchAttendanceData();
    return () => clearInterval(timer);
  }, [user, attendanceStatus, showLeaveModal]);

  const handleCheckIn = async () => {
    try {
      const { data } = await API.post("/attendance/check-in");
      if (data.success) {
        setAttendanceStatus("checked-in");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error during check-in");
    }
  };

  const handleCheckOut = async () => {
    try {
      const { data } = await API.post("/attendance/check-out");
      if (data.success) {
        setAttendanceStatus("completed");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error during check-out");
    }
  };

  const handleApplyLeave = async () => {
    if (!leaveDate) {
      alert("Please select a date for leave");
      return;
    }
    try {
      const { data } = await API.post("/attendance/leave", {
        date: leaveDate,
        type: leaveType,
        reason: leaveReason,
      });
      if (data.success) {
        setLeaveDate("");
        setLeaveType("paid");
        setLeaveReason("");
        setShowLeaveModal(false);
        alert("Leave application submitted successfully!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error applying for leave");
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
                <div className="mb-3 mb-md-0">
                  <h1 className="h3 mb-1">Attendance Management</h1>
                  <p className="text-muted mb-0">
                    Track and manage your daily attendance
                  </p>
                </div>
                <div>
                  <button
                    className="btn btn-outline-primary me-2"
                    onClick={() => setShowLeaveModal(true)}
                  >
                    <i className="fas fa-calendar-plus me-2"></i>Apply Leave
                  </button>
                  <Link
                    to="/employee-dashboard"
                    className="btn btn-outline-secondary"
                  >
                    <i className="fas fa-arrow-left me-2"></i>Back to Dashboard
                  </Link>
                </div>
              </div>

              {/* Current Time & Date Card */}
              <div className="row mb-4">
                <div className="col-lg-8 mb-4 mb-lg-0">
                  <div className="card time-card">
                    <div className="card-body text-center py-5">
                      <h3 className="current-time mb-1">
                        {currentTime.toLocaleTimeString()}
                      </h3>
                      <p className="current-date text-muted mb-4">
                        {currentTime.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>

                      {attendanceStatus === "not-checked-in" && (
                        <button
                          className="btn btn-primary btn-lg px-5 py-3"
                          onClick={handleCheckIn}
                        >
                          <i className="fas fa-fingerprint me-2"></i>Check In
                        </button>
                      )}

                      {attendanceStatus === "checked-in" && (
                        <button
                          className="btn btn-success btn-lg px-5 py-3"
                          onClick={handleCheckOut}
                        >
                          <i className="fas fa-sign-out-alt me-2"></i>Check Out
                        </button>
                      )}

                      {attendanceStatus === "completed" && (
                        <div>
                          <div className="alert alert-success mb-3">
                            <i className="fas fa-check-circle me-2"></i>
                            You've completed your attendance for today.
                          </div>
                          <button
                            className="btn btn-outline-secondary"
                            disabled
                          >
                            Attendance Completed
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card stats-card h-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">This Month's Summary</h5>
                      <p className="text-muted small mb-0">
                        As of {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-success">• Present</span>
                        <span className="fw-bold">{monthlyStats.present} days</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-warning">• Late</span>
                        <span className="fw-bold">{monthlyStats.late} days</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-danger">• Absent</span>
                        <span className="fw-bold">{monthlyStats.absent} days</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-info">• Left Early</span>
                        <span className="fw-bold">
                          {monthlyStats.earlyDeparture} days
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-primary">• Paid Leave</span>
                        <span className="fw-bold">
                          {monthlyStats.paidLeave} days
                        </span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-2">
                        <span>Total Working Hours</span>
                        <span className="fw-bold">
                          {monthlyStats.totalWorkingHours.toFixed(1)}h
                        </span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Required Hours</span>
                        <span className="fw-bold">
                          {monthlyStats.requiredWorkingHours}h
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Balance</span>
                        <span
                          className={`fw-bold ${
                            monthlyStats.hoursDifference >= 0
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {monthlyStats.hoursDifference >= 0 ? "+" : ""}
                          {monthlyStats.hoursDifference.toFixed(1)}h
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attendance History */}
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Attendance History</h5>
                  <span className="badge bg-primary">Current Month</span>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Check In</th>
                          <th>Check Out</th>
                          <th>Working Hours</th>
                          <th>Status</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {attendanceHistory.map((r, idx) => (
                          <tr
                            key={idx}
                            className={
                              r.date === new Date().toDateString()
                                ? "table-active"
                                : ""
                            }
                          >
                            <td>
                              {new Date(r.date).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                              {r.date === new Date().toDateString() && (
                                <span className="badge bg-info ms-2">Today</span>
                              )}
                            </td>
                            <td>
                              {r.checkIn
                                ? new Date(r.checkIn).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : "--:--"}
                            </td>
                            <td>
                              {r.checkOut
                                ? new Date(r.checkOut).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : "--:--"}
                            </td>
                            <td>
                              {r.workingHours > 0
                                ? `${Math.floor(r.workingHours)}h ${Math.round(
                                    (r.workingHours % 1) * 60
                                  )}m`
                                : "--"}
                            </td>
                            <td>
                              <span
                                className={`badge bg-${
                                  {
                                    present: "success",
                                    late: "warning",
                                    absent: "danger",
                                    "early-departure": "info",
                                    "paid-leave": "primary",
                                  }[r.status] || "secondary"
                                }`}
                              >
                                {r.status}
                              </span>
                            </td>
                            <td>
                              {r.isLeave && r.leaveReason
                                ? r.leaveReason
                                : "--"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Application Modal */}
      {showLeaveModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apply for Leave</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLeaveModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Leave Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={leaveDate}
                    onChange={(e) => setLeaveDate(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Leave Type</label>
                  <select
                    className="form-select"
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                  >
                    <option value="paid">Paid Leave</option>
                    <option value="unpaid">Unpaid Leave</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Reason</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowLeaveModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleApplyLeave}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
 <style jsx>{`
        .dashboard-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          padding: 0;
        }
        
        .time-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .current-time {
          font-size: 3.5rem;
          font-weight: 700;
        }
        
        .stats-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .card {
          border: none;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .table th {
          border-top: none;
          font-weight: 600;
          color: #6b7280;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table td {
          vertical-align: middle;
        }
        
        @media (max-width: 992px) {
          .current-time {
            font-size: 2.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .current-time {
            font-size: 2.2rem;
          }
          
          .btn-lg {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          .current-time {
            font-size: 1.8rem;
          }
          
          .card-body.py-5 {
            padding: 2rem 1rem !important;
          }
          
          .table {
            font-size: 0.85rem;
          }
          
          .badge {
            font-size: 0.7rem;
          }
        }
      `}</style>
      {/* Keep your existing styles here if you had custom CSS */}
    </>
  );
}
