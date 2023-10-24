async function historyInformation(request, response) {
    console.log(request.body);
    const idea = request.body.idea;//permite revisar cada una de las cosas que necesito
    const project = request.body.project;
    const interest = request.body.interest;
    const knowledge = request.body.knowledge;
    const think = request.body.think;
    const information = request.body.information;
    if (!idea || !project || !interest || !knowledge || !think || !information) {
        return response.status(400).send({
            status: "Error",
            message: "Los campos están incompletos"
        })
    }
}


module.exports.historyInformation = historyInformation;
