exports.handler = async (event) => {
    if (isInputInvalid(event))
        return "Invalid input";

    const aws = require('aws-sdk');

    let listPerson = await getData(aws);

    listPerson = await addPersonToList(event, listPerson);

    const response = await updateData(listPerson, aws);

    return response;
};

function isInputInvalid(input) {
    const keysInput = ["firstName", "lastName", "participation"];

    const valid = Object.keys(input).every((item, index) => {
        return item === keysInput[index]
    });

    return !valid;
}

function getObjectParams() {
    return {
        Bucket: 'poc-cubo',
        Key: 'data/data.json'
    }
}

async function getData(aws) {
    var lambda = new aws.Lambda();
    const getDataLambda = 'Cubo-Poc-getParticipationList';

    lambda.invoke({
      FunctionName: getDataLambda
    }, function(error, data) {
        return error
            ? error
            : data.Payload;
    });
}

async function updateData(personList, aws) {
    const s3 = new aws.S3();
    let params = getObjectParams();

    params.Body = Buffer.from(JSON.stringify(personList));

    return await s3.putObject(params)
        .promise()
        .then(function(data) {
            return personList.participationList;
        }).catch(function(error) {
            return error;
        })
}

function addPersonToList(newPerson, personList) {
    let list = personList.participationList;

    const newPersonTreated = `${newPerson.firstName}${newPerson.lastName}`.trim().toLocaleLowerCase();

    const alreadyExist = list.some(person => {
    	const { firstName, lastName } = person;

    	return `${firstName}${lastName}`.trim().toLocaleLowerCase() === newPersonTreated;
    });

    if (alreadyExist) {
        const index = list.findIndex(person => {
            const { firstName, lastName } = person;

    	return `${firstName}${lastName}`.trim().toLocaleLowerCase() === newPersonTreated;
        });

        list[index].participation += newPerson.participation;
    } else {
        list.push(newPerson);
    }

    return { participationList: list }
}
