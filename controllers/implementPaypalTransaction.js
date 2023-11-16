var querystring = require("querystring");
const axios = require("axios");


      const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API;
      const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API;
      basicAuth = Buffer.from(
        `${process.env.PAYPAL_CLIENT}:${process.env.PAYPAL_SECRET}`
      ).toString("base64");
    
      async function run() {
          const auth = await axios
          .post(
            PAYPAL_OAUTH_API,
            // note the use of querystring
            querystring.stringify({ grant_type: "client_credentials" }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Basic ${basicAuth}`,
              },
            }
          )
          .then((res) => res.data)
          .catch((err) => {
            console.log(err);
          });
      
        // const payment_id = req.body.payment_id;
        const details = await axios
          .get(PAYPAL_ORDER_API + payment_id, {
            headers: {
              Accept: `application/json`,
              Authorization: `Bearer ${auth.access_token}`,
            },
          })
          .then((res) => res.data)
          .catch((err) => {
            console.log(err);
            return err;
          });
      }
      run() 