var url = new Array(); 
url[0] = 'https://docs.google.com/forms/d/e/1FAIpQLSc1i2MlPP0bidgxXHlud2y51XyoLPu2Z8jtOB_KzdU9sJbfhg/viewform';
url[1] = 'https://docs.google.com/forms/d/e/1FAIpQLSdaa4cTZRTksPHYMD-ZdKqihSUrzM2orBOOoXA2AsB2hPUMdQ/viewform'; 
location.assign(url[Math.round(Math.random()*(url.length-1))]);
