const slugify = require('slug');
const fs = require('fs');
const dateFns = require('date-fns');
const title = process.argv[2];
const date = process.argv[3];

if(!title) {
	throw "A title is required";
}

if(!date) {
	date = dateFns.format(new Date(), 'YYYY-MM-DD');
}

const slug = slugify(title.toLowerCase());
const dir = `./content/blog/${date}_${slug}`;

if(!fs.existsSync(dir)) {
	fs.mkdirSync(dir)
} else {
	throw "Post already exists."
}

fs.writeFileSync(
	`${dir}/index.md`,
	`---
slug: ${slug}
date: ${date}
title: ${title}
published: false
---`,
	(err) => {
		if(err) {
			return console.log(err)
		}
	},
	console.log(`${title} was created.`)
)



