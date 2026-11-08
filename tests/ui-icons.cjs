const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
// Regress the actual iOS defect: decorative controls must not rely on glyphs
// that the device can substitute with colored emoji, including play badges.
const glyphOnlyNode=/>\s*[▶☰◇✦×↗↖↙↘←→↑↓]\s*</u;
for(const file of ['index.html','library.html','privacy.html','thank-you.html','app.js','learning.js']){
  assert(!glyphOnlyNode.test(fs.readFileSync(path.join(root,file),'utf8')),`${file}: glyph-only UI control can fall back to emoji`);
}
const source=fs.readFileSync(path.join(root,'learning-data.js'),'utf8');
const lessons=JSON.parse(vm.runInNewContext(source+';JSON.stringify(learningLessons)'));
assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length,'Lesson IDs must be unique');
for(const l of lessons){
  for(const key of ['video','poster','infographic','transcript','captions'])assert(fs.existsSync(path.join(root,l[key])),`${l.id}: missing ${key}`);
  assert(l.steps.every((s,i)=>s.time>=0&&s.time<l.duration&&(!i||s.time>l.steps[i-1].time)),`${l.id}: invalid chapter times`);
}
const brand=lessons.find(l=>l.id==='brand-personality');
assert.equal(brand.duration,40,'Corrected full-length brand lesson must replace the cropped version');
assert.equal(brand.steps.length,5,'Corrected brand lesson must restore its first step');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.indexOf('id="learning-library"')<html.indexOf('id="projects"'),'Learning must precede projects');
assert(html.indexOf('id="learning-library"')<html.indexOf('id="featured-project"'),'Learning must precede the featured project');
console.log(`PASS: all UI entrypoints checked for emoji controls; ${lessons.length} lesson assets and chapter sets; corrected brand and learning-first order.`);
