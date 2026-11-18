
// Shared sample data and reusable page behavior for all portal pages.
const studentDefault = {firstName:"John",middleName:"Michael",lastName:"Santos",email:"john.santos@campus.edu",phone:"0917-555-0125",dob:"2005-04-18",gender:"Prefer not to say",address:"Botolan, Zambales, Philippines",photo:""};
const subjects = [
 {code:"CC211",name:"Application Development and Emerging Technologies",desc:"Modern application development concepts and tools.",instructor:"Mr. Adrian Reyes",day:"Monday",time:"8:00 AM – 10:00 AM",room:"ICT Lab 1",units:3,mid:1.75,fin:1.50,overall:1.63},
 {code:"CC212",name:"Data Structures and Algorithms",desc:"Data organization, structures, and algorithm analysis.",instructor:"Ms. Carla Mendoza",day:"Tuesday",time:"10:00 AM – 12:00 PM",room:"Room 204",units:3,mid:1.75,fin:1.75,overall:1.75},
 {code:"CC213",name:"Information Management",desc:"Database concepts, data modeling, and information systems.",instructor:"Mr. Paolo Garcia",day:"Wednesday",time:"1:00 PM – 3:00 PM",room:"ICT Lab 2",units:3,mid:2.00,fin:1.75,overall:1.88},
 {code:"GE ELEC",name:"Living in the IT Era",desc:"Technology, society, and contemporary digital life.",instructor:"Ms. Angela Cruz",day:"Thursday",time:"8:00 AM – 10:00 AM",room:"Room 105",units:3,mid:1.50,fin:1.75,overall:1.63},
 {code:"PE 4",name:"Physical Activities Toward Health and Fitness",desc:"Physical fitness, wellness, and recreational activities.",instructor:"Mr. Mark Villanueva",day:"Friday",time:"3:00 PM – 5:00 PM",room:"Gymnasium",units:3,mid:1.50,fin:1.50,overall:1.50}
];
const announcements = [
 {title:"Midterm examination schedule released",category:"Academic",date:"November 18, 2026",desc:"The midterm examination period will begin on November 24. Please check your class schedule and coordinate with your instructors for room assignments."},
 {title:"Enrollment verification reminder",category:"Enrollment",date:"November 15, 2026",desc:"Students are encouraged to review their enrollment information and report any subject or section concerns to the registrar."},
 {title:"Student development day",category:"Events",date:"November 12, 2026",desc:"Join the campus student development activities on December 12 at the College Activity Center. More details will be posted by the student affairs office."},
 {title:"Library operating hours",category:"Academic",date:"November 10, 2026",desc:"The Learning Resource Center is open from 8:00 AM to 5:00 PM on weekdays. Please return borrowed materials on or before the due date."}
];
const attendance = [
 ["Nov 17, 2026","CC211 – Application Development","8:00 AM","Present"],["Nov 16, 2026","CC212 – Data Structures","10:00 AM","Present"],["Nov 13, 2026","Information Management","1:00 PM","Late"],["Nov 12, 2026","Living in the IT Era","8:00 AM","Present"],["Nov 11, 2026","Physical Education 4","3:00 PM","Absent"],["Nov 10, 2026","CC212 – Data Structures","10:00 AM","Present"]
];
const $ = s => document.querySelector(s);
const getProfile = () => ({...studentDefault,...JSON.parse(localStorage.getItem("cc_profile") || "{}")});
function toast(message){const el=$("#appToast");if(el){$("#toastMessage").textContent=message;bootstrap.Toast.getOrCreateInstance(el).show();}}
function initials(p){return (p.firstName[0]+p.lastName[0]).toUpperCase();}
function logout(){localStorage.removeItem("cc_session");location.href="index.html";}
if(document.body.dataset.page){
 if(localStorage.getItem("cc_session")!=="active") location.replace("index.html");
 document.querySelectorAll("[data-logout]").forEach(b=>b.addEventListener("click",()=>{
   const modalEl=$("#logoutModal");
   if(modalEl) bootstrap.Modal.getOrCreateInstance(modalEl).show(); else logout();
 }));
 const confirmLogout=$("#confirmLogout");
 if(confirmLogout) confirmLogout.addEventListener("click",logout);
 const notificationButton=$(".notification");
 if(notificationButton) notificationButton.addEventListener("click",()=>toast("You are all caught up. No new notifications."));
 const p=getProfile(); if($("#headerName"))$("#headerName").textContent=p.firstName+" "+p.lastName;
 const menu=$("#mobileMenu"), side=$("#sidebar"), backdrop=$("#sidebarBackdrop");
 if(menu)menu.addEventListener("click",()=>{side.classList.toggle("open");backdrop.classList.toggle("show");});
 if(backdrop)backdrop.addEventListener("click",()=>{side.classList.remove("open");backdrop.classList.remove("show");});
}
function stat(icon,label,value,note=""){return `<div class="stat-card"><span class="stat-icon"><i class="bi bi-${icon}"></i></span><div><small>${label}</small><strong>${value}</strong>${note?`<em>${note}</em>`:""}</div></div>`;}
const page=document.body.dataset.page;
if(page==="dashboard"){
 $("#dashboardStats").innerHTML=stat("person-vcard","Student ID","2026-00125")+stat("book","Enrolled subjects","5","15 total units")+stat("award","Current GWA","1.75","Very good standing")+stat("clipboard-check","Attendance rate","94%","This semester");
 $("#dashboardAnnouncements").innerHTML=announcements.slice(0,2).map(a=>`<div class="announcement-row"><span class="announcement-icon"><i class="bi bi-megaphone"></i></span><div><strong>${a.title}</strong><p>${a.desc.slice(0,105)}...</p><small>${a.date} · ${a.category}</small></div></div>`).join("");
}
if(page==="academics"){
 const render=()=>{const q=$("#subjectSearch").value.toLowerCase(),unit=$("#unitFilter").value;$("#subjectsTable").innerHTML=subjects.filter(s=>(unit==="all"||String(s.units)===unit)&&[s.code,s.name,s.instructor,s.desc].join(" ").toLowerCase().includes(q)).map(s=>`<tr><td><span class="subject-code">${s.code}</span></td><td><strong>${s.name}</strong></td><td>${s.desc}</td><td>${s.instructor}</td><td>${s.day}, ${s.time}</td><td>${s.units}</td></tr>`).join("")||'<tr><td colspan="6" class="text-center text-secondary py-4">No matching subjects found.</td></tr>';};
 $("#subjectSearch").addEventListener("input",render);$("#unitFilter").addEventListener("change",render);render();
}
if(page==="schedule"){
 $("#scheduleTable").innerHTML=subjects.map(s=>`<tr><td>${s.day}</td><td>${s.time}</td><td><strong>${s.name}</strong><br><span class="subject-code">${s.code}</span></td><td>${s.room}</td><td>${s.instructor}</td></tr>`).join("");
}
if(page==="grades"){
 $("#gradeStats").innerHTML=stat("award","General Weighted Average","1.75","Very good")+stat("book","Subjects graded","5","Current semester")+stat("check-circle","Academic standing","Good","Satisfactory progress")+stat("bar-chart","Total units","15","Enrolled units");
 $("#gradesTable").innerHTML=subjects.map(s=>`<tr><td><strong>${s.name}</strong></td><td>${s.code}</td><td>${s.units}</td><td>${s.mid.toFixed(2)}</td><td>${s.fin.toFixed(2)}</td><td><b>${s.overall.toFixed(2)}</b></td><td><span class="grade-pill">Passed</span></td></tr>`).join("");
}
if(page==="attendance"){
 const present=attendance.filter(a=>a[3]==="Present").length,late=attendance.filter(a=>a[3]==="Late").length,absent=attendance.filter(a=>a[3]==="Absent").length;
 $("#attendanceStats").innerHTML=stat("calendar-check","Present",present)+stat("clock","Late",late)+stat("calendar-x","Absent",absent)+stat("percent","Attendance rate","83%","Sample recent records");
 const render=()=>{const f=$("#attendanceFilter").value;$("#attendanceTable").innerHTML=attendance.filter(a=>f==="all"||a[3]===f).map(a=>`<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td><td><span class="status-pill ${a[3]==="Late"?"status-late":a[3]==="Absent"?"status-absent":""}">${a[3]}</span></td></tr>`).join("")||'<tr><td colspan="4" class="text-center text-secondary">No records found.</td></tr>';};
 $("#attendanceFilter").addEventListener("change",render);render();
}
if(page==="announcements"){
 const render=()=>{const f=$("#announcementFilter").value;$("#announcementCards").innerHTML=announcements.filter(a=>f==="all"||a.category===f).map((a,i)=>`<div class="col-md-6"><article class="panel page-card"><span class="category">${a.category}</span><h3>${a.title}</h3><p>${a.desc}</p><small><i class="bi bi-calendar3 me-1"></i>${a.date}</small><div class="mt-3"><button class="btn btn-sm btn-outline-primary read-more" data-read="${i}">Read more <i class="bi bi-arrow-right ms-1"></i></button></div></article></div>`).join("");document.querySelectorAll("[data-read]").forEach(b=>b.addEventListener("click",()=>{const a=announcements[Number(b.dataset.read)];alert(a.title+"\\n\\n"+a.desc+"\\n\\nPublished: "+a.date);}));};
 $("#announcementFilter").addEventListener("change",render);render();
}
if(page==="profile"){
 const form=$("#profileForm"),fieldset=$("#profileFieldset"),actions=$("#profileActions"),photo=$("#photo");
 let original=getProfile();
 function fill(p){Object.keys(studentDefault).forEach(k=>{const el=form.elements[k];if(el)el.value=p[k]||"";});$("#profileName").textContent=`${p.firstName} ${p.middleName} ${p.lastName}`.replace(/\s+/g," ").trim();$("#profileAvatar").textContent=initials(p);$("#profileAvatar").style.backgroundImage=p.photo?`url("${p.photo}")`:"none";if(p.photo)$("#profileAvatar").textContent="";}
 fill(original);
 $("#editProfile").addEventListener("click",()=>{fieldset.disabled=false;actions.classList.remove("d-none");});
 $("#cancelProfile").addEventListener("click",()=>{original=getProfile();fill(original);fieldset.disabled=true;actions.classList.add("d-none");photo.value="";});
 photo.addEventListener("change",()=>{const file=photo.files[0];if(!file)return;if(file.size>500000){alert("Please choose an image smaller than 500 KB.");photo.value="";return;}const reader=new FileReader();reader.onload=()=>{original.photo=reader.result;};reader.readAsDataURL(file);});
 form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;const data={...original};Object.keys(studentDefault).filter(k=>k!=="photo").forEach(k=>{if(form.elements[k])data[k]=form.elements[k].value.trim();});localStorage.setItem("cc_profile",JSON.stringify(data));original=data;fill(data);fieldset.disabled=true;actions.classList.add("d-none");toast("Your profile has been updated.");});
}
if(page==="settings"){
 const prefs=JSON.parse(localStorage.getItem("cc_prefs")||'{"email":true,"academic":true}');
 $("#emailNotif").checked=prefs.email;$("#academicNotif").checked=prefs.academic;
 $("#savePreferences").addEventListener("click",()=>{localStorage.setItem("cc_prefs",JSON.stringify({email:$("#emailNotif").checked,academic:$("#academicNotif").checked}));toast("Notification preferences saved.");});
 $("#passwordForm").addEventListener("submit",e=>{e.preventDefault();const current=$("#currentPassword").value,n=$("#newPassword").value,c=$("#confirmPassword").value,stored=localStorage.getItem("cc_demo_password")||"student123";if(current!==stored){alert("Current password is incorrect.");return;}if(n.length<8){alert("New password must be at least 8 characters.");return;}if(n!==c){alert("New password and confirmation do not match.");return;}localStorage.setItem("cc_demo_password",n);e.target.reset();toast("Demo password updated in this browser.");});
}
