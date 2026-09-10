
const menu=document.querySelector('.menu'),nav=document.querySelector('#navlinks');if(menu){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)})}document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));const form=document.querySelector('#contactForm');if(form){const p=new URLSearchParams(location.search).get('service');if(p){const opt=[...form.service.options].find(o=>o.textContent.toLowerCase().replaceAll(' ','-').replaceAll('/','-')===p);if(opt)opt.selected=true}form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form),subject=encodeURIComponent('Website enquiry: '+(d.get('service')||'New project')),body=encodeURIComponent(`Name: ${d.get('name')}
Email: ${d.get('email')}
Service: ${d.get('service')}

${d.get('message')}`);document.querySelector('#formStatus').textContent='Opening your email app…';location.href=`mailto:?subject=${subject}&body=${body}`})}
