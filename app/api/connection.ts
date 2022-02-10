import {Appwrite} from 'appwrite';

const AppwriteConnection = () => {
    const appwrite = new Appwrite()
    appwrite
        .setEndpoint('https://cluster.doesrobbiedream.com/v1')
        .setProject('620546b840ccdea7c63a')
    return appwrite;
}

export default {connect: AppwriteConnection};