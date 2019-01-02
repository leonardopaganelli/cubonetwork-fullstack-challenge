exports.handler = async (event, context) => {

    let response = await getData();

    return response;
};

async function getData() {
    const aws = require('aws-sdk');
    const s3 = new aws.S3();

    var getParams = {
        Bucket: 'poc-cubo',
        Key: 'data/data.json'
    }

    return await s3.getObject(getParams)
        .promise()
        .then(function(data) {
            return okResponse(data.Body.toString('utf8'));
        }).catch(function(err) {
            return errorResponse(err);
        });
}

function okResponse(data) {
    let parseData = JSON.parse(data);

    return parseData.participationList;
}

function errorResponse(data) {
    //TODO: Handle error
    return JSON.parse(data);
}