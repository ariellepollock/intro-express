const students = [
    {student: 'Sally Harris', present: true},
    {student: 'Jimmy Hue', present: true},
    {student: 'Georgia Tomkin', present: false},
    {student: 'Avery Shore', present: true},
    {student: 'Harry Thomas', present: true},
    {student: 'Fred Sears', present: true},
    {student: 'Hannah Dobkin', present: false},
    {student: 'Albert Kim', present: false},
    {student: 'Loren Brian', present: true}
]

module.exports = {
    getAll: function() {
        return students
    }
}