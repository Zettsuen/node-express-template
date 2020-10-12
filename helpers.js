const hbs = require('hbs');

hbs.registerHelper('year', () => {

    return new Date().getFullYear()

});