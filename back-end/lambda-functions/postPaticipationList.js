exports.handler = async (event) => {
    if (isInputInvalid(event)) {
        return "Invalid input";
    }

    const s3 = getS3Configuration();

    let listPerson = await getData(s3);

    listPerson = await addPersonToList(event, listPerson);

    const response = await updateData(listPerson, s3);

    return response;
};

function isInputInvalid(input) {
    const keysInput = ["firstName", "lastName", "participation"];

    const valid = Object.keys(input).every((item, index) => {
        return item === keysInput[index]
    });

    return !valid;
}

function getS3Configuration() {
    const aws = require('aws-sdk');
    return new aws.S3();
}

function getObjectParams() {
    return {
        Bucket: 'poc-cubo',
        Key: 'data/data.json'
    }
}

async function getData(s3) {
    return await s3.getObject(getObjectParams())
        .promise()
        .then(function(data) {
            return JSON.parse(data.Body.toString('utf8'));
        }).catch(function(err) {
            return err;
        });
}

async function updateData(personList, s3) {
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

    const alreadyExist = list.some(person => {
    	const { firstName, lastName } = person;

    	return `${firstName}${lastName}`.trim() === `${newPerson.firstName}${newPerson.lastName}`.trim();
    });

    if (alreadyExist) {
        const index = list.findIndex(person => {
            const { firstName, lastName } = person;

    	    return `${firstName}${lastName}`.trim() === `${newPerson.firstName}${newPerson.lastName}`.trim();
        });

        list[index].participation += newPerson.participation;
    } else {
        list.push(newPerson);
    }

    return { participationList: list }
}
