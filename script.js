// ===== Data =====
const depts=[
["❤️","Cardiology","Heart checks, ECG, echo and long-term care for blood pressure and heart disease."],
["🧠","Neurology","Careful diagnosis and treatment for headaches, stroke, seizures and nerve problems."],
["🦴","Orthopedics & Spine","Fractures, joint pain, sports injuries and spine care with physiotherapy support."],
["🩺","General Medicine","Fever, diabetes, BP, infections and everyday health worries, all in one place."],
["👶","Pediatrics","Gentle care for babies and children, from vaccines to growth checks."],
["🤰","Mother & Child Care","Antenatal care, safe delivery and women's health with one friendly team."],
["🫃","Gastroenterology","Stomach, liver and digestive problems, with endoscopy and expert guidance."],
["💧","Nephrology","Kidney care from early screening to comfortable dialysis sessions."],
["🔬","Urology","Treatment for kidney stones, urinary and prostate problems."],
["🚑","Emergency & Trauma","Open 24 hours with a ready team for accidents and sudden illness."],
["🫁","Critical Care","Round-the-clock ICU monitoring for patients who need the closest attention."],
["🏃","Physiotherapy & Diet","Recovery exercises and nutrition plans that help you heal and stay well."]];
const all6=["Mon","Tue","Wed","Thu","Fri","Sat"];
const doctors=[
{n:"Dr. Anil Sharma",d:"Cardiology",q:"MD, DM Cardiology",exp:18,days:["Mon","Wed","Fri"],t:"10 AM to 1 PM",about:"Treats heart disease with a focus on prevention and recovery."},
{n:"Dr. Sanjay Rao",d:"Neurology",q:"MD, DM Neurology",exp:20,days:["Wed","Fri"],t:"2 PM to 6 PM",about:"Explains stroke and epilepsy care in plain, reassuring language."},
{n:"Dr. Rakesh Mehta",d:"Orthopedics & Spine",q:"MS Orthopedics",exp:15,days:["Tue","Thu","Sat"],t:"9 AM to 12 PM",about:"Joint replacement and sports injury specialist."},
{n:"Dr. Suresh Patil",d:"General Medicine",q:"MD Medicine",exp:14,days:all6,t:"8 AM to 8 PM",about:"Your first stop for fever, diabetes and blood pressure."},
{n:"Dr. Priya Nair",d:"Pediatrics",q:"MD Pediatrics",exp:9,days:["Mon","Wed","Fri","Sat"],t:"10 AM to 2 PM",about:"Gentle with little ones and patient with worried parents."},
{n:"Dr. Neha Verma",d:"Mother & Child Care",q:"MS Obstetrics & Gynecology",exp:12,days:["Mon","Tue","Thu"],t:"11 AM to 3 PM",about:"Guides mothers from the first check-up to a safe delivery."},
{n:"Dr. Vikram Joshi",d:"Gastroenterology",q:"MD, DM Gastroenterology",exp:13,days:["Tue","Thu","Sat"],t:"12 PM to 4 PM",about:"Digestive and liver care with advanced endoscopy."},
{n:"Dr. Meera Iyer",d:"Nephrology",q:"MD, DM Nephrology",exp:16,days:["Mon","Wed","Fri"],t:"9 AM to 1 PM",about:"Kidney specialist who also oversees our dialysis unit."}];
const pkgs=[["Basic Check",999,"Blood, sugar, lipids, urine and a doctor visit"],["Senior Citizen",2499,"Thyroid, ECG, X-ray, kidney, liver, eye and BP"],["Heart Care",3499,"ECG, echo, stress test and a cardiologist visit"],["Women's Wellness",2999,"Thyroid, vitamin D, breast exam and a gynecologist visit"]];
const slots=["09:00 AM","10:00 AM","11:00 AM","12:00 PM","03:00 PM","04:00 PM","05:00 PM"];

// ===== Helpers =====
const $=s=>document.querySelector(s);
const get=(k,d)=>JSON.parse(localStorage.getItem(k))||d, put=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800)};
const go=id=>document.getElementById(id).scrollIntoView();

// ===== Menu and first-aid tips =====
$("#menuBtn").onclick=()=>$("#menu").classList.toggle("open");
document.querySelectorAll("#menu a").forEach(a=>a.onclick=()=>$("#menu").classList.remove("open"));
$("#tipBtn").onclick=()=>$("#tips").hidden=!$("#tips").hidden;

// ===== Departments: swipeable rail =====
const rail=$("#rail"),dots=$("#dots");
const doctorImages=[
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=82",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=82",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=82",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=700&q=82",
  "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=82",
  "https://images.pexels.com/photos/19438566/pexels-photo-19438566.jpeg?auto=compress&cs=tinysrgb&w=700",
  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=700&q=82"
];
const deptImages=[
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=82"
];
rail.innerHTML=depts.map((d,i)=>`<article class="dc"><div class="ban"><img src="${deptImages[i%deptImages.length]}" alt="${d[1]} department" loading="lazy"></div><div class="badge">${String(i+1).padStart(2,"0")}</div><h3>${d[1]}</h3><p>${d[2]}</p><button class="go" data-d="${d[1]}" aria-label="View ${d[1]} doctors">→</button></article>`).join("");
rail.onclick=e=>{const b=e.target.closest(".go");if(b){$("#deptFilter").value=b.dataset.d;$("#search").value="";showDoctors();go("doctors")}};
const moveDots=()=>{const end=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-4,n=end?dots.children.length-1:Math.round(rail.scrollLeft/rail.clientWidth);[...dots.children].forEach((d,i)=>d.classList.toggle("on",i===n))};
const drawDots=()=>{dots.innerHTML="<i></i>".repeat(Math.max(1,Math.ceil(rail.scrollWidth/rail.clientWidth)));moveDots()};
rail.onscroll=moveDots;window.onresize=drawDots;drawDots();
$("#prev").onclick=()=>rail.scrollBy({left:-rail.clientWidth*.8,behavior:"smooth"});
$("#next").onclick=()=>rail.scrollBy({left:rail.clientWidth*.8,behavior:"smooth"});
$("#deptFilter").innerHTML+=depts.map(d=>`<option>${d[1]}</option>`).join("");

// ===== Doctors =====
function showDoctors(){
  const q=$("#search").value.toLowerCase(),dp=$("#deptFilter").value;
  const list=doctors.filter(x=>x.n.toLowerCase().includes(q)&&(!dp||x.d===dp));
  $("#docGrid").innerHTML=list.map((x,i)=>{const p=x.n.split(" ");return `<article class="pro" tabindex="0"><div class="top"><img src="${doctorImages[i%doctorImages.length]}" alt="Portrait of ${x.n}" loading="lazy"><span class="yrs">${x.exp} yrs</span><div class="mono">${p[1][0]}${p[2][0]}</div></div>
  <div class="pbody"><span class="chip">${x.d}</span><h3>${x.n}</h3><div class="q">${x.q}</div>
  <div class="more"><div><p>${x.about}</p><p class="hrs">🕒 ${x.t}</p></div></div><small class="hint">Tap for details</small></div></article>`}).join("")||"<p>No doctors match. Try another department or name.</p>";
}
["#search","#deptFilter"].forEach(s=>$(s).oninput=showDoctors);
showDoctors();
const docRail=$("#docGrid");
const docPrev=$("#docPrev"),docNext=$("#docNext");
docPrev.onclick=()=>docRail.scrollBy({left:-docRail.clientWidth*.8,behavior:"smooth"});
docNext.onclick=()=>docRail.scrollBy({left:docRail.clientWidth*.8,behavior:"smooth"});
let dragX=0,dragScroll=0;
docRail.addEventListener("pointerdown",e=>{dragX=e.clientX;dragScroll=docRail.scrollLeft;docRail.setPointerCapture(e.pointerId);docRail.classList.add("dragging")});
docRail.addEventListener("pointermove",e=>{if(!docRail.hasPointerCapture(e.pointerId))return;docRail.scrollLeft=dragScroll-(e.clientX-dragX)});
docRail.addEventListener("pointerup",()=>docRail.classList.remove("dragging"));
docRail.addEventListener("pointercancel",()=>docRail.classList.remove("dragging"));

// ===== Booking =====
$("#bDoctor").innerHTML=doctors.map(x=>`<option>${x.n}</option>`).join("");
$("#bDate").min=new Date().toISOString().split("T")[0];
function fillSlots(){ // hide slots already taken for this doctor and date
  const taken=get("appts",[]).filter(a=>a.doc===$("#bDoctor").value&&a.date===$("#bDate").value).map(a=>a.time);
  const free=slots.filter(s=>!taken.includes(s));
  $("#bTime").innerHTML=free.map(s=>`<option>${s}</option>`).join("")||"<option value=''>Fully booked</option>";
}
$("#bDoctor").onchange=$("#bDate").onchange=fillSlots;fillSlots();
$("#bookForm").onsubmit=e=>{
  e.preventDefault();if(!$("#bTime").value)return toast("No free slot that day. Try another date.");
  const a={id:Date.now(),name:$("#bName").value.trim(),phone:$("#bPhone").value,doc:$("#bDoctor").value,date:$("#bDate").value,time:$("#bTime").value,reason:$("#bReason").value};
  const list=get("appts",[]);list.push(a);put("appts",list);
  $("#done").innerHTML=`<b>✅ Appointment confirmed, ${esc(a.name)}!</b><br>Booking no: CN-${String(a.id).slice(-6)}<br>${esc(a.doc)} · ${a.date} at ${a.time}<br>Please arrive 15 minutes early.`;
  $("#done").hidden=false;e.target.reset();fillSlots();
};

// ===== Packages =====
$("#pkgGrid").innerHTML=pkgs.map(p=>`<div class="card"><h3>${p[0]}</h3><div class="price">₹${p[1]}</div><p>${p[2]}</p></div>`).join("");
$("#pkgGrid").onclick=e=>{if(e.target.closest(".card")){go("book");toast("Mention the package in 'What brings you in?'")}};

// ===== Contact form =====
$("#msgForm").onsubmit=e=>{
  e.preventDefault();const m=get("messages",[]);
  m.push({name:$("#mName").value,contact:$("#mContact").value,topic:$("#mTopic").value,text:$("#mText").value});
  put("messages",m);e.target.reset();toast("Thank you! We will get back to you soon 💙");
};

// ===== Scroll reveal and count-up =====
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(en=>{
  if(!en.isIntersecting)return;const el=en.target,to=+el.dataset.to;let n=0;
  const step=()=>{n+=to/50;el.textContent=Math.min(Math.round(n),to).toLocaleString("en-IN")+(to>=1000?"+":"");if(n<to)requestAnimationFrame(step)};step();co.unobserve(el)}),{threshold:.6});
document.querySelectorAll(".num").forEach(el=>co.observe(el));
