var url = new Array(); 
url[0] = 'https://www.amazon.co.jp/';
url[1] = 'https://www.yahoo.co.jp/'; 
location.assign(url[Math.round(Math.random()*(url.length-1))]);
