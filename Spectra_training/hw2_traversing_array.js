//Given a list of object, use forEach() to restructurize it:
const project = [
    { projectId: 1, candidates: ["a", "b", "c", "e"] },
    { projectId: 2, candidates: ["a", "c", "d"] },
    { projectId: 3, candidates: ["c"] },
    { projectId: 4, candidates: ["a", "b", "d"] },
]

//expecting result: 
// const candidatesList = [
//     {name: "a", projects:[1,2,4]},
//     {name: "b", projects:[1, 4]},
//     {name: "c", projects:[1,2,3]},
//     {name: "d", projects:[2,4]}
//     {name: "e", projects:[1]}
// ]


//My Own Answer
const candidatesList = [];

project.forEach(eachProject => {
    eachProject.candidates.forEach(candidate => {
        let candidateIndex = -1;
        candidatesList.forEach((item, index) => {
            if(item.name === candidate){
                candidateIndex = index
            }
        })
        if (candidateIndex > -1) {
            candidatesList[candidateIndex].projects.push(eachProject.projectId)
        } else {
            candidatesList.push({ name: candidate, projects: [eachProject.projectId] })
        }
    })
})

// console.log(candidatesList)


//Optimized Answer from chatGPT

// const candidatesList = project.reduce((result, current) => {
//     current.candidates.forEach((candidate) => {
//         const candidateIndex = result.findIndex((item) => item.name === candidate);
//         if (candidateIndex > -1) {
//             result[candidateIndex].projects.push(current.projectId);
//         } else {
//             result.push({ name: candidate, projects: [current.projectId] });
//         }
//     });
//     return result;
// }, []);

// console.log(candidatesList);
