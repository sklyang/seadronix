
const { spawn } = require('child_process')
 
const inputSource = 'input.mp4'
const outulr = './videos/index.m3u8' 
let  i = 0 
const ffmpeg = spawn('ffmpeg', [
  '-re',
  '-stream_loop','-1',
  '-i', inputSource, 
  '-vf','drawtext=text=\'%{localtime} %{pts\\:hms}\':fontcolor=red:fontsize=24:x=100:y=100',
  '-hls_time','10',
  '-hls_list_size','0',
  outulr
]);

ffmpeg.stdout.on('data', (data) => {
  i+=1
  console.log(`ffmpeg: ${data}`)
  
});
 
ffmpeg.stderr.on('data', (data) => {
  console.error(`ffmpeg: ${data}`)
});
 
ffmpeg.on('close', (code) => {
  console.log(`ffmpeg process closed with code ${code}`)
});