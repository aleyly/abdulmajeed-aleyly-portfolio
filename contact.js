(() => {
 const form=document.querySelector('#contact-form');if(!form)return;
 const settings=siteSettings.contact,status=document.querySelector('#contact-status'),fallback=document.querySelector('#contact-fallback'),submit=form.querySelector('[type="submit"]');
 // CONTACT_PURE_START
 function normalizeSaudiPhone(value){const s=String(value).trim().replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[\s()-]/g,'');if(!s)return '';if(/^05\d{8}$/.test(s))return '+966'+s.slice(1);if(/^\+9665\d{8}$/.test(s))return s;if(/^009665\d{8}$/.test(s))return '+'+s.slice(2);return null;}
 function acceptedContactResponse(ok,payload){return Boolean(ok&&payload&&(payload.success===true||payload.success==='true'));}
 // CONTACT_PURE_END
 function updateFallback(){const f=new FormData(form);const message=['السلام عليكم، أرغب في مناقشة مشروعي مع فريق عبدالماجد العيلي.','الاسم: '+f.get('name'),'البريد: '+f.get('email'),'الجوال: '+(f.get('phone')||'لم يذكر'),'الخدمة: '+f.get('service'),'المدينة: '+f.get('city'),'التفاصيل: '+f.get('message')].join('\n');fallback.href='https://wa.me/966590008668?text='+encodeURIComponent(message)}
 const phone=form.querySelector('[name="phone"]');phone.addEventListener('input',()=>phone.setCustomValidity(''));
 form.addEventListener('submit',async event=>{event.preventDefault();status.textContent='';fallback.hidden=true;const normalized=normalizeSaudiPhone(phone.value);phone.setCustomValidity(normalized===null?'أدخل رقمًا سعوديًا مثل 0590008668 أو +966590008668.':'');if(!form.reportValidity())return;if(form.elements._honey.value)return;
 const payload=Object.fromEntries(new FormData(form));payload.phone=normalized;updateFallback();submit.disabled=true;submit.textContent='جارٍ إرسال الطلب…';form.setAttribute('aria-busy','true');status.className='contact-status';status.textContent='ننتظر تأكيد خدمة الإرسال. يرجى إبقاء الصفحة مفتوحة.';const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),settings.timeoutMs);
 try{const response=await fetch(settings.endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload),signal:controller.signal});let data;try{data=await response.json()}catch{throw new Error('invalid-response')}if(!acceptedContactResponse(response.ok,data))throw new Error('not-accepted');status.classList.add('success');status.textContent='قبلت خدمة الإرسال طلبك. سنراجع التفاصيل للتواصل معك.';form.reset();fallback.hidden=false;fallback.textContent='أو تابع طلبك عبر واتساب ↗';
 }catch(error){status.classList.add('error');status.textContent=error.name==='AbortError'?'انتهت مهلة الانتظار ولم نتأكد من قبول الطلب. بياناتك ما زالت هنا؛ أعد المحاولة أو أرسلها عبر واتساب.':'تعذر تأكيد إرسال الطلب. احتفظنا ببياناتك في الحقول؛ يمكنك إعادة المحاولة أو إرسال التفاصيل عبر واتساب.';fallback.textContent='أرسل نفس التفاصيل عبر واتساب ↗';fallback.hidden=false;
 }finally{clearTimeout(timer);submit.disabled=false;submit.textContent='أرسل الطلب بالبريد ↗';form.removeAttribute('aria-busy');}
 });
})();
