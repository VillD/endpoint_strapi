const axios = require("axios");
("use strict");

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  dataProduct: async (ctx, next) => {
    // const {id} = ctx.request.params;
    // const user = ctx.state.user;
    // const product = await strapi.entityService.findOne("api::product.product", id);
    // console.log(ctx.state.user)
    // return id

    try {
      const url = "https://catfact.ninja/fact";
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }

    /*
        const response = await axios.get('/user?ID=12345');
        console.log(response);*/
  },
}));
