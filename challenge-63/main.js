// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function findDomain(url) {
	return url
		.replace('https://', '')
		.replace('http://', '')
		.replace('www.', '')
		.split('.')[0];
}
console.log(findDomain('https://www.cnet.com'), 'cnet');
console.log(findDomain('https://www.cat.com/'), 'cat');
console.log(findDomain('http://github.com/carbonfive/raygun'), 'github');
console.log(findDomain('marcos.biz/'), 'marcos');
console.log(findDomain('www.youtube.com'), 'youtube');
console.log(findDomain('make.org'), 'make');
console.log(findDomain('butt.org/ass/'), 'butt');
