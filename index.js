// TP1

/* const data = require('./data');
const userGenerator = require('./user-generator');
const name = data.names[userGenerator.name];
const age = data.ages[userGenerator.age];
if (age > 17) {
    console.log(`${name} a ${age} ans. C’est une personne majeure.`);
} else {
    console.log(`${name} a ${age} ans. C’est une personne qui n'est pas majeure.`);
}

 */

// Cowsay TP2 et TP3


/* const cowsay = require('cowsay');

const str = cowsay.say({
    text: 'Salut, je suis un chat',
    T: "UU",
    f:"cat"
});
console.log(str); */

//Express

const express = require('express');
const app = express();

const tabs = [
    {
        label: 'Acceuil', link: '/home', active: true,
    },
    {
        label: 'Présentation', link: '/presentation', active: false,
    },
    {
        label: 'Contact', link: '/contact', active: false,
    },
];

const headerHTML = `
<nav>
${tabs.map(x => `<a href=${x.link}>${x.label}</a><br>`).join``}
</nav>
`;
console.log(headerHTML);
const bodyHTML = (title) => `
${headerHTML}
<h1>${title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque porro quisquam, voluptatibus dolorum, enim
            odit error ipsum cupiditate earum similique amet sunt quaerat quia possimus obcaecati fuga recusandae iusto.
            Officia?</p>
`;


app.get('/', (req, res) => res.redirect('/home'))
app.get(tabs[0].link, (req, res) => {
    res.send(bodyHTML("Homepage"))
})
app.get(tabs[1].link, (req, res) => {
    res.send(bodyHTML("Qui sommes nous ?"))
})
app.get(tabs[2].link, (req, res) => {
    res.send(bodyHTML("Contactez nous !"))
})

app.listen(3000);

