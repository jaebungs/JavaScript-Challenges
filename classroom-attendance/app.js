const getStudent = (classroom) => {
    let {hasTeachingAssistant, peope} = classroom;
    const [teacher, assistant, ...students] = peope;
    
    if (hasTeachingAssistant){
        return console.log(students)
    } else {
        return console.log([assistant, ...students])
    }
}

const classroom = {
    hasTeachingAssistant: false,
    peope: ["Rasida", "Jomal", "Raily", "Sam", "Peter"]
}
const classroom2 = {
    hasTeachingAssistant: true,
    peope: ["Lily", "John", "Raily", "Sam", "Emma"]
}
getStudent(classroom)
getStudent(classroom2)
