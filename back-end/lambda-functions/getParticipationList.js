exports.handler = async (event) => {
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
    return {
        statusCode: 200,
        body: JSON.parse(data),
    };
}

function errorResponse(data) {
    return {
        statusCode: 500,
        body: JSON.parse(data),
    };
}