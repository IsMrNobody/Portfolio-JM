const MORALIS_APP_ID =  process.env.VUE_APP_MORALIS_APP_ID;
const MORALIS_KEY = process.env.VUE_APP_MORALIS_KEY;
const MORALIS_SERVER_URL = process.env.VUE_APP_MORALIS_SERVER_URL;
const { default: Moralis } = require("moralis");

const MoralisFactory = (() => {

    function MoralisInstance(applicationId, javascriptKey, url) {
        Moralis.initialize(
            applicationId,
            javascriptKey,
        );
        Moralis.serverURL = url;
        return Moralis;
    }

    let instance = null
    return {
        getInstance: () => {
            if (instance == null) {
                instance = MoralisInstance(MORALIS_APP_ID, MORALIS_SERVER_URL, MORALIS_KEY);
                instance.constructor = null
            }
            return instance
        }
    }
})

export default MoralisFactory