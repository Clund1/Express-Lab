// data/todo-db.js

const games = [
    {game: 'Starfield', done: true},
    {game: 'Inscryption', done: true},
    {game: 'Turbo Overkill', done: true},
    {game: 'Robocop: Rogue City', done: true},
    {game: 'Insomniacs Spider-Man 2', done: false}
];

module.exports = {
    getAll: function() {
        return games;
    }
};