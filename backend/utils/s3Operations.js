import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3 from "./awsConfig.js";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from "@aws-sdk/client-s3";

export const getPresignedUrl = (objectKey) => {
    const command = new GetObjectCommand({ Bucket: process.env.S3_BUCKET_NAME, Key: objectKey });
    const signedUrl = getSignedUrl(s3, command);
    return signedUrl;
}


export const deleteObject = async (key) => {
    const deleteObjectCommand = new DeleteObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key
    });

    s3.send(deleteObjectCommand)
        .then(data => console.log('Object deleted successfully'))
        .catch(error => console.error('Error deleting object:', error));
}