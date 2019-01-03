exports.handler = async (event, context) => {
    let response = await getData();

    return response;
};

async function getData() {
    const s3 = getS3Configuration();

    return await s3.getObject(getObjectParams())
        .promise()
        .then(function(data) {
            return okResponse(data.Body.toString('utf8'));
        }).catch(function(err) {
            return errorResponse(err);
        });
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

function okResponse(data) {
    let parseData = JSON.parse(data);

    return parseData.participationList;
}

function errorResponse(data) {
    //TODO: Handle error
    return JSON.parse(data);
}