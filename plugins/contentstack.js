// Module dependency
import axios from 'axios';

const headers = {
  api_key: process.env.VUE_APP_CONTENTSTACK_API_KEY,
  access_token: process.env.VUE_APP_CONTENTSTACK_DELIVERY_TOKEN,
};

// function for getting single entie using Content Delivery API
export default {
  async getEntrie(contentTypeUid, entryUid) {
    const book = await axios.get(`${process.env.VUE_APP_CONTENTSTACK_BASE_URL}/content_types/${contentTypeUid}/entries/${entryUid}?environment=${process.env.VUE_APP_CONTENTSTACK_ENVIRONMENT}`, {
      headers,
    }).then(
      (response) => response.data.entry,
      (error) => {
        console.log(error);
      },
    );
    return book;
  },
};
